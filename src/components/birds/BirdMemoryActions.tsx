"use client";

import { BirdMemoryStatus } from "@/types/memory";

type BirdMemoryActionsProps = {
  status: BirdMemoryStatus;
  onMarkHeard: () => void;
  onMarkSeen: () => void;
  onMarkPhotographed: () => void;
  onOpenNoteEditor: () => void;
  onReset?: () => void;
  hasNote: boolean;
};

export function BirdMemoryActions({
  status,
  onMarkHeard,
  onMarkSeen,
  onMarkPhotographed,
  onOpenNoteEditor,
  onReset,
  hasNote,
}: BirdMemoryActionsProps) {
  const buttonBase =
    "flex flex-col items-center justify-center gap-1 px-4 py-3 rounded-lg text-sm font-medium transition-all text-center min-h-[72px]";

  const isHeard = status === "heard" || status === "seen" || status === "photographed";
  const isSeen = status === "seen" || status === "photographed";
  const isPhotographed = status === "photographed";

  const hasEncounter = status !== "unknown";

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-lg text-encre">Marquer cette rencontre</h3>
        {hasEncounter && onReset && (
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 px-2 py-1 text-xs text-encre-light hover:text-accent transition-colors rounded"
            title="Réinitialiser"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span>Corriger</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* Entendu */}
        <button
          onClick={onMarkHeard}
          disabled={isHeard}
          className={`${buttonBase} ${
            isHeard
              ? "bg-montagne/20 text-encre cursor-default"
              : "bg-encre/5 text-encre-light hover:bg-montagne/20 hover:text-encre"
          }`}
        >
          <span className="text-xl">{isHeard ? "🎵" : "👂"}</span>
          <span>Je l&apos;ai entendu</span>
        </button>

        {/* Vu */}
        <button
          onClick={onMarkSeen}
          disabled={isSeen}
          className={`${buttonBase} ${
            isSeen
              ? "bg-sapin/15 text-sapin-dark cursor-default"
              : "bg-encre/5 text-encre-light hover:bg-sapin/15 hover:text-sapin-dark"
          }`}
        >
          <span className="text-xl">{isSeen ? "👁️" : "👁️"}</span>
          <span>Je l&apos;ai vu</span>
        </button>

        {/* Photographié */}
        <button
          onClick={onMarkPhotographed}
          disabled={isPhotographed}
          className={`${buttonBase} ${
            isPhotographed
              ? "bg-accent/15 text-accent cursor-default"
              : "bg-encre/5 text-encre-light hover:bg-accent/15 hover:text-accent"
          }`}
        >
          <span className="text-xl">📷</span>
          <span>Je l&apos;ai photographié</span>
        </button>

        {/* Souvenir */}
        <button
          onClick={onOpenNoteEditor}
          className={`${buttonBase} ${
            hasNote
              ? "bg-souvenir/20 text-encre"
              : "bg-encre/5 text-encre-light hover:bg-souvenir/20 hover:text-encre"
          }`}
        >
          <span className="text-xl">🪶</span>
          <span>{hasNote ? "Modifier mon souvenir" : "Ajouter un souvenir"}</span>
        </button>
      </div>
    </div>
  );
}
