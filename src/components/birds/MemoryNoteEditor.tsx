"use client";

import { useState } from "react";
import { BirdMood, MOOD_LABELS } from "@/types/memory";

type MemoryNoteEditorProps = {
  initialNote?: string;
  initialPlace?: string;
  initialMood?: BirdMood;
  initialPhotoUrl?: string;
  onSave: (note: string, place?: string, mood?: BirdMood, photoUrl?: string) => void;
  onCancel: () => void;
};

const moods: { value: BirdMood; label: string; icon: string }[] = [
  { value: "calme", label: MOOD_LABELS.calme, icon: "🌿" },
  { value: "joie", label: MOOD_LABELS.joie, icon: "✨" },
  { value: "nostalgie", label: MOOD_LABELS.nostalgie, icon: "🍂" },
  { value: "mystere", label: MOOD_LABELS.mystere, icon: "🌙" },
  { value: "emerveillement", label: MOOD_LABELS.emerveillement, icon: "🌟" },
];

export function MemoryNoteEditor({
  initialNote = "",
  initialPlace = "",
  initialMood,
  initialPhotoUrl = "",
  onSave,
  onCancel,
}: MemoryNoteEditorProps) {
  const [note, setNote] = useState(initialNote);
  const [place, setPlace] = useState(initialPlace);
  const [mood, setMood] = useState<BirdMood | undefined>(initialMood);
  const [photoUrl, setPhotoUrl] = useState(initialPhotoUrl);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new window.Image();
      img.onload = () => {
        const MAX_WIDTH = 600;
        const MAX_HEIGHT = 600;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const compressedBase64 = canvas.toDataURL("image/jpeg", 0.7);
          setPhotoUrl(compressedBase64);
        }
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(note, place || undefined, mood, photoUrl || undefined);
  };

  return (
    <div className="fixed inset-0 bg-encre/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-papier rounded-xl shadow-card max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl text-encre">
                Écrire un souvenir
              </h2>
              <button
                type="button"
                onClick={onCancel}
                className="text-encre-light hover:text-encre p-1"
                aria-label="Fermer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Note */}
            <div>
              <label
                htmlFor="note"
                className="block text-sm font-medium text-encre mb-2"
              >
                Ton souvenir
              </label>
              <textarea
                id="note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Ce matin-là, près du vieux pont..."
                className="w-full px-4 py-3 rounded-lg border border-encre/10 bg-white/50 text-encre placeholder:text-encre-light/50 focus:outline-none focus:ring-2 focus:ring-sapin/30 resize-none"
                rows={4}
              />
              <p className="text-xs text-encre-light mt-1">
                Un instant, une lumière, un son... ce qui t'a marqué.
              </p>
            </div>

            {/* Lieu */}
            <div>
              <label
                htmlFor="place"
                className="block text-sm font-medium text-encre mb-2"
              >
                Où ? (optionnel)
              </label>
              <input
                type="text"
                id="place"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                placeholder="Près du torrent, chemin des Plagnes..."
                className="w-full px-4 py-2.5 rounded-lg border border-encre/10 bg-white/50 text-encre placeholder:text-encre-light/50 focus:outline-none focus:ring-2 focus:ring-sapin/30"
              />
            </div>

            {/* Photo */}
            <div>
              <label className="block text-sm font-medium text-encre mb-2">
                Une photo de ta rencontre (optionnel)
              </label>
              
              {photoUrl ? (
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-papier-dark border border-encre/10 group">
                  <img src={photoUrl} alt="Aperçu" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => setPhotoUrl("")}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-encre/80 text-white hover:bg-accent transition-colors"
                    title="Supprimer la photo"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ) : (
                <div>
                  <input
                    type="file"
                    id="photo-upload"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="photo-upload"
                    className="flex flex-col items-center justify-center border-2 border-dashed border-encre/10 rounded-lg p-6 bg-white/30 hover:bg-white/50 cursor-pointer hover:border-sapin/30 transition-all text-center"
                  >
                    <svg className="w-8 h-8 text-encre-light/60 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                    </svg>
                    <span className="text-sm font-medium text-encre">Déposer ou sélectionner une image</span>
                    <span className="text-xs text-encre-light/60 mt-1">Sera redimensionnée et enregistrée localement</span>
                  </label>
                </div>
              )}
            </div>

            {/* Mood */}
            <div>
              <label className="block text-sm font-medium text-encre mb-2">
                L'ambiance du moment (optionnel)
              </label>
              <div className="flex flex-wrap gap-2">
                {moods.map((m) => (
                  <button
                    key={m.value}
                    type="button"
                    onClick={() => setMood(mood === m.value ? undefined : m.value)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all ${
                      mood === m.value
                        ? "bg-sapin/15 text-sapin ring-1 ring-sapin/30"
                        : "bg-encre/5 text-encre-light hover:bg-encre/10"
                    }`}
                  >
                    <span>{m.icon}</span>
                    <span>{m.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="px-6 py-4 border-t border-encre/5 flex justify-end gap-3">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 rounded-lg text-sm text-encre-light hover:text-encre transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-sapin text-white hover:bg-sapin-dark transition-colors"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
