"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { SoftCard } from "@/components/ui/SoftCard";
import { birds } from "@/data/birds";

export default function AProposPage() {
  return (
    <div>
      <PageHeader
        title="À propos"
        subtitle="Un carnet local et sensible pour reconnaître les oiseaux qui habitent la vallée."
      />

      <div className="space-y-8">
        {/* Pourquoi ce carnet ? */}
        <SoftCard className="p-6">
          <h2 className="font-serif text-xl text-encre mb-4">
            Pourquoi ce carnet ?
          </h2>
          <div className="space-y-4 text-encre-light leading-relaxed">
            <p>
              <strong className="text-encre">Plumes de Chedde</strong> est né
              d'une envie simple : mieux connaître les oiseaux qui partagent
              notre quotidien. Pas pour devenir ornithologue, ni pour
              transformer la nature en collection, mais pour apprendre à
              regarder ce qui vit déjà autour de nous.
            </p>
            <p>
              Un rougegorge près d'une fenêtre. Une mésange dans une haie. Un
              merle au petit matin. Une buse qui tourne au-dessus des versants.
              Souvent, ces présences sont là depuis longtemps, mais on les
              traverse sans vraiment les voir.
            </p>
            <p>
              Ce carnet aide à leur donner un nom, une place, parfois un
              souvenir. L'idée n'est pas d'accumuler des coches ou de tout
              photographier. C'est de ralentir un instant, d'observer avec
              attention, et de rendre le quotidien un peu plus habité.
            </p>
          </div>
        </SoftCard>

        {/* Le territoire - section émotionnelle centrale */}
        <section className="relative rounded-2xl bg-gradient-to-br from-sapin/5 via-papier to-bois/5 p-6 border border-encre/5">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🏔️</span>
            <h2 className="font-serif text-2xl text-encre">
              Chedde, Passy, la vallée de l'Arve
            </h2>
          </div>

          <div className="space-y-4 text-encre-light leading-relaxed max-w-2xl">
            <p>
              Ici, les oiseaux ne vivent pas dans un seul décor. Ils passent des
              jardins aux berges de l'Arve, des vieux murs aux forêts, des
              torrents froids aux falaises, puis plus haut vers les alpages et
              les crêtes.
            </p>
            <p>
              Autour de Chedde et Passy, cette diversité de paysages crée une
              grande variété de rencontres. Certains oiseaux sont familiers,
              presque voisins. D'autres restent discrets dans les bois, longent
              les parois, ou ne se montrent qu'en silhouette dans le ciel.
            </p>
            <p className="text-encre">
              Plumes de Chedde est pensé comme un carnet de territoire : une
              manière de relier les espèces aux lieux, les observations aux
              saisons, et les petites rencontres aux souvenirs qu'elles
              laissent.
            </p>
          </div>

          {/* Cartes habitats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-encre/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🏡</span>
                <h3 className="font-serif text-encre">Jardins & villages</h3>
              </div>
              <p className="text-sm text-encre-light leading-relaxed">
                Les présences proches : rougegorge, mésanges, merle, moineau,
                rougequeue. Ceux qu'on croise sans toujours les regarder.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-encre/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">💧</span>
                <h3 className="font-serif text-encre">Rivière & torrents</h3>
              </div>
              <p className="text-sm text-encre-light leading-relaxed">
                Les oiseaux de l'eau froide : cincle plongeur, bergeronnette des
                ruisseaux. Des silhouettes rapides entre les pierres et le
                courant.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-encre/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🏔️</span>
                <h3 className="font-serif text-encre">Falaises & montagne</h3>
              </div>
              <p className="text-sm text-encre-light leading-relaxed">
                Les grands passages du ciel : faucons, aigle royal, gypaète,
                chocards. Des oiseaux que l'on rencontre souvent en levant les
                yeux.
              </p>
            </div>
          </div>
        </section>

        {/* Les données */}
        <SoftCard className="p-6">
          <h2 className="font-serif text-xl text-encre mb-4">Les données</h2>
          <div className="space-y-4 text-encre-light leading-relaxed">
            <p>
              Ce carnet présente{" "}
              <strong className="text-encre">{birds.length} espèces</strong>{" "}
              d'oiseaux que l'on peut observer dans la vallée. Ce n'est pas une
              liste exhaustive : c'est une sélection d'espèces probables,
              intéressantes ou emblématiques du territoire.
            </p>
            <p>
              Les descriptions, habitats et comportements sont pensés pour aider
              à reconnaître les oiseaux sans rendre l'expérience trop technique.
              Certaines informations peuvent contenir des imprécisions : la
              nature reste plus complexe qu'une fiche.
            </p>
            <p>
              Les données de ton carnet personnel — oiseaux vus, entendus,
              photographiés, souvenirs — sont stockées uniquement sur ton
              appareil. Rien n'est envoyé vers un serveur. Ton carnet
              t'appartient.
            </p>
          </div>
        </SoftCard>

        {/* Observer avec respect */}
        <SoftCard className="p-6 bg-sapin/5">
          <h2 className="font-serif text-xl text-sapin mb-4">
            Observer avec respect
          </h2>
          <div className="space-y-4 text-encre-light leading-relaxed">
            <p>
              Les oiseaux ne sont pas des objets de collection. Ce sont des
              êtres vivants, souvent fragiles, parfois menacés. Les observer est
              un privilège qui demande du respect.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-sapin mt-0.5">•</span>
                <span>
                  Ne t'approche pas trop : une paire de jumelles vaut mieux
                  qu'une photo prise de trop près.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sapin mt-0.5">•</span>
                <span>
                  Ne dérange pas les nids, même pour une photo. Un oiseau
                  dérangé peut abandonner sa nichée.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sapin mt-0.5">•</span>
                <span>
                  Reste sur les sentiers, surtout en montagne. Les zones de
                  reproduction sont sensibles.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sapin mt-0.5">•</span>
                <span>
                  En hiver, les oiseaux économisent leur énergie. Évite de les
                  faire fuir inutilement.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sapin mt-0.5">•</span>
                <span>
                  Certaines espèces comme le gypaète, l'aigle, le tétras ou le
                  lagopède sont particulièrement vulnérables. Observe-les de
                  loin.
                </span>
              </li>
            </ul>
            <p className="italic text-sm mt-4 text-sapin/80">
              Le meilleur observateur est celui que l'oiseau ne remarque pas.
            </p>
          </div>
        </SoftCard>

        {/* Citation finale */}
        <div className="text-center py-8">
          <blockquote className="font-serif text-xl text-encre-light italic leading-relaxed">
            "Apprendre à reconnaître les oiseaux autour de soi,
            <br />
            pas pour tout savoir,
            <br />
            mais pour mieux habiter son quotidien."
          </blockquote>
        </div>
      </div>
    </div>
  );
}
