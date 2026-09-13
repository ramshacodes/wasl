"use client";

import { useState } from "react";
import { BriefingCard as BriefingCardType, AgentDecision } from "@/lib/types";
import { SIM_PLANS, GENERIC_SIM_PLANS } from "@/lib/simOptions";
import { EXPLORE_SPOTS, GENERIC_EXPLORE_SPOTS } from "@/lib/exploreSpots";
import SimOptionsModal from "./SimOptionsModal";
import ExploreSpotsModal from "./ExploreSpotsModal";

type ModalState = "sim" | "explore" | null;

export default function BriefingGrid({
  cards,
  decision,
}: {
  cards: BriefingCardType[];
  decision: AgentDecision;
}) {
  const [modal, setModal] = useState<ModalState>(null);
  const country = decision.destination_country;
  const simPlans = SIM_PLANS[country] ?? GENERIC_SIM_PLANS;
  const exploreSpots = EXPLORE_SPOTS[country] ?? GENERIC_EXPLORE_SPOTS;

  return (
    <section className="animate-fadeUp">
      <div className="mb-5 text-center">
        <h2 className="font-display text-2xl text-ivory">
          {decision.destination_flag} Welcome to {decision.destination_country}
        </h2>
        <p className="mt-1 text-sm text-mute">Your cross-border transition is complete.</p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => {
          const isSim = card.category === "connectivity";
          const isExplore = card.category === "explore";
          const inAppAction = isSim || isExplore;

          return (
            <div
              key={card.category}
              className="animate-fadeUp rounded-2xl border border-navy-700 bg-navy-800/60 p-5 shadow-card"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{card.icon}</span>
                <h3 className="font-medium text-ivory">{card.title}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-mute">{card.content}</p>

              {inAppAction ? (
                <button
                  onClick={() => setModal(isSim ? "sim" : "explore")}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-gold-400 hover:text-gold-300"
                >
                  {isSim ? "View SIM options" : "Browse spots"} →
                </button>
              ) : (
                card.action_url && (
                  <a
                    href={card.action_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-gold-400 hover:text-gold-300"
                  >
                    {card.action_label ?? "Open"} →
                  </a>
                )
              )}
            </div>
          );
        })}
      </div>

      {modal === "sim" && (
        <SimOptionsModal country={country} plans={simPlans} onClose={() => setModal(null)} />
      )}
      {modal === "explore" && (
        <ExploreSpotsModal country={country} spots={exploreSpots} onClose={() => setModal(null)} />
      )}
    </section>
  );
}
