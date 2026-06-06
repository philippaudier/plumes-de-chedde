"use client";

import { useState, useEffect, useCallback } from "react";
import { BirdMemory, BirdMemoryStatus, BirdMood } from "@/types/memory";

const STORAGE_KEY = "plumes-de-chedde-memories";

// NOTE: Cette version utilise localStorage pour la V1.
// Pour une future V2, remplacer par des appels Supabase :
// - Table `bird_memories` avec colonnes correspondant à BirdMemory
// - Authentification utilisateur via Supabase Auth
// - Synchronisation en temps réel possible avec Supabase Realtime

export type MemoryStats = {
  total: number;
  heard: number;
  seen: number;
  photographed: number;
  withNotes: number;
};

export function useBirdMemories() {
  const [memories, setMemories] = useState<Map<string, BirdMemory>>(new Map());
  const [isLoaded, setIsLoaded] = useState(false);

  // Charger les souvenirs depuis localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as BirdMemory[];
        const map = new Map<string, BirdMemory>();
        parsed.forEach((memory) => {
          map.set(memory.birdId, memory);
        });
        setMemories(map);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des souvenirs:", error);
    }
    setIsLoaded(true);
  }, []);

  // Sauvegarder dans localStorage
  const saveToStorage = useCallback((newMemories: Map<string, BirdMemory>) => {
    if (typeof window === "undefined") return;

    try {
      const array = Array.from(newMemories.values());
      localStorage.setItem(STORAGE_KEY, JSON.stringify(array));
    } catch (error) {
      console.error("Erreur lors de la sauvegarde des souvenirs:", error);
    }
  }, []);

  // Obtenir le souvenir d'un oiseau
  const getMemory = useCallback(
    (birdId: string): BirdMemory | undefined => {
      return memories.get(birdId);
    },
    [memories]
  );

  // Obtenir le statut d'un oiseau
  const getStatus = useCallback(
    (birdId: string): BirdMemoryStatus => {
      return memories.get(birdId)?.status ?? "unknown";
    },
    [memories]
  );

  // Mettre à jour ou créer un souvenir
  const updateMemory = useCallback(
    (birdId: string, updates: Partial<Omit<BirdMemory, "birdId" | "updatedAt">>) => {
      setMemories((prev) => {
        const newMemories = new Map(prev);
        const existing = newMemories.get(birdId);

        const updated: BirdMemory = {
          birdId,
          status: updates.status ?? existing?.status ?? "unknown",
          firstSeenAt: updates.firstSeenAt ?? existing?.firstSeenAt,
          placeName: updates.placeName ?? existing?.placeName,
          personalNote: updates.personalNote ?? existing?.personalNote,
          mood: updates.mood ?? existing?.mood,
          updatedAt: new Date().toISOString(),
        };

        // Si c'est la première fois qu'on marque l'oiseau, enregistrer la date
        if (!existing?.firstSeenAt && updates.status && updates.status !== "unknown") {
          updated.firstSeenAt = new Date().toISOString();
        }

        newMemories.set(birdId, updated);
        saveToStorage(newMemories);
        return newMemories;
      });
    },
    [saveToStorage]
  );

  // Marquer comme entendu
  const markAsHeard = useCallback(
    (birdId: string) => {
      const current = getStatus(birdId);
      // Ne downgrader pas si déjà vu ou photographié
      if (current === "seen" || current === "photographed") return;
      updateMemory(birdId, { status: "heard" });
    },
    [getStatus, updateMemory]
  );

  // Marquer comme vu
  const markAsSeen = useCallback(
    (birdId: string) => {
      const current = getStatus(birdId);
      // Ne downgrader pas si déjà photographié
      if (current === "photographed") return;
      updateMemory(birdId, { status: "seen" });
    },
    [getStatus, updateMemory]
  );

  // Marquer comme photographié
  const markAsPhotographed = useCallback(
    (birdId: string) => {
      updateMemory(birdId, { status: "photographed" });
    },
    [updateMemory]
  );

  // Ajouter/modifier une note personnelle
  const setPersonalNote = useCallback(
    (birdId: string, note: string, placeName?: string, mood?: BirdMood, photoUrl?: string) => {
      updateMemory(birdId, {
        personalNote: note,
        placeName,
        mood,
        photoUrl,
      });
    },
    [updateMemory]
  );

  // Supprimer le souvenir d'un oiseau
  const clearMemory = useCallback(
    (birdId: string) => {
      setMemories((prev) => {
        const newMemories = new Map(prev);
        newMemories.delete(birdId);
        saveToStorage(newMemories);
        return newMemories;
      });
    },
    [saveToStorage]
  );

  // Calculer les statistiques
  const getStats = useCallback((): MemoryStats => {
    let heard = 0;
    let seen = 0;
    let photographed = 0;
    let withNotes = 0;

    memories.forEach((memory) => {
      if (memory.status === "heard") heard++;
      if (memory.status === "seen") seen++;
      if (memory.status === "photographed") photographed++;
      if (memory.personalNote && memory.personalNote.trim().length > 0) withNotes++;
    });

    return {
      total: memories.size,
      heard,
      seen,
      photographed,
      withNotes,
    };
  }, [memories]);

  // Obtenir tous les souvenirs avec un statut non-unknown
  const getEncounteredBirds = useCallback((): BirdMemory[] => {
    return Array.from(memories.values())
      .filter((m) => m.status !== "unknown")
      .sort((a, b) => {
        // Trier par date de dernière mise à jour, plus récent en premier
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      });
  }, [memories]);

  // Obtenir les souvenirs avec notes
  const getMemoriesWithNotes = useCallback((): BirdMemory[] => {
    return Array.from(memories.values())
      .filter((m) => m.personalNote && m.personalNote.trim().length > 0)
      .sort((a, b) => {
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      });
  }, [memories]);

  return {
    memories,
    isLoaded,
    getMemory,
    getStatus,
    markAsHeard,
    markAsSeen,
    markAsPhotographed,
    setPersonalNote,
    clearMemory,
    getStats,
    getEncounteredBirds,
    getMemoriesWithNotes,
  };
}
