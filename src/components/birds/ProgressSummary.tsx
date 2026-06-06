import { MemoryStats } from "@/hooks/useBirdMemories";
import { SoftCard } from "@/components/ui/SoftCard";

type ProgressSummaryProps = {
  stats: MemoryStats;
  totalBirds: number;
};

export function ProgressSummary({ stats, totalBirds }: ProgressSummaryProps) {
  const encountered = stats.heard + stats.seen + stats.photographed;
  const isEmpty = encountered === 0;

  return (
    <SoftCard className="p-6 bg-gradient-to-br from-papier/50 to-white/40 border-dashed border-encre/10">
      <div className="mb-6 text-center">
        <h3 className="font-serif text-xl text-encre mb-2">Les pages de ton carnet</h3>
        <p className="text-sm text-encre-light italic">
          Le carnet s'enrichit de tes pas dans la vallée. Chaque rencontre est une empreinte.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto">
        <StatItem
          icon="👂"
          label="Écoutes"
          value={stats.heard}
          bgColor="bg-montagne/10"
        />
        <StatItem
          icon="👁️"
          label="Regards"
          value={stats.seen}
          bgColor="bg-sapin/10"
        />
        <StatItem
          icon="📷"
          label="Photos"
          value={stats.photographed}
          bgColor="bg-accent/10"
        />
        <StatItem
          icon="🪶"
          label="Souvenirs"
          value={stats.withNotes}
          bgColor="bg-souvenir/10"
        />
      </div>

      <p className="text-center text-sm text-encre-light mt-5 leading-relaxed font-serif italic">
        {isEmpty ? (
          <>
            Le carnet attend son premier chant, sa première silhouette, sa
            première trace.
          </>
        ) : (
          <>
            Tu as noté {encountered} espèce{encountered > 1 ? "s" : ""} sur {totalBirds} présentes dans la vallée de Chedde.
          </>
        )}
      </p>
    </SoftCard>
  );
}

function StatItem({
  icon,
  label,
  value,
  bgColor,
}: {
  icon: string;
  label: string;
  value: number;
  bgColor: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center mb-2`}
      >
        <span className="text-xl">{icon}</span>
      </div>
      <div className="text-xl font-serif text-encre">{value}</div>
      <div className="text-xs text-encre-light">{label}</div>
    </div>
  );
}
