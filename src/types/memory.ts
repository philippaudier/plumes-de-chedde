export type BirdMemoryStatus = "unknown" | "heard" | "seen" | "photographed";

export type BirdMood =
  | "calme"
  | "joie"
  | "nostalgie"
  | "mystere"
  | "emerveillement";

export type BirdMemory = {
  birdId: string;
  status: BirdMemoryStatus;
  firstSeenAt?: string;
  placeName?: string;
  personalNote?: string;
  mood?: BirdMood;
  // Photo personnelle (base64 ou URL Supabase dans une future version)
  photoUrl?: string;
  updatedAt: string;
};

export const STATUS_LABELS: Record<BirdMemoryStatus, string> = {
  unknown: "Non rencontré",
  heard: "Entendu",
  seen: "Vu",
  photographed: "Photographié",
};

export const MOOD_LABELS: Record<BirdMood, string> = {
  calme: "Calme",
  joie: "Joie",
  nostalgie: "Nostalgie",
  mystere: "Mystère",
  emerveillement: "Émerveillement",
};
