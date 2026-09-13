"use client";

import { BriefingCard as BriefingCardType, AgentDecision } from "@/lib/types";

export default function BriefingGrid({
  cards,
  decision,
}: {
  cards: BriefingCardType[];
  decision: AgentDecision;
}) {
  return (
    <section className="animate-fadeUp">
      <div className="mb-5 text-center">
        <h2 className="font-display text-2xl text-ivory">
          {decision.destination_flag} Welcome to {decision.destination_country}
        </h2>
        <p className="mt-1 text-sm text-mute">Your cross-border transition is complete.</p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
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
            {card.action_url && (
              <a
                href={card.action_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-gold-400 hover:text-gold-300"
              >
                {card.action_label ?? "Open"} →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
