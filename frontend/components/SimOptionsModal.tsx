"use client";

import { useState } from "react";
import { SimPlan } from "@/lib/simOptions";

export default function SimOptionsModal({
  country,
  plans,
  onClose,
}: {
  country: string;
  plans: SimPlan[];
  onClose: () => void;
}) {
  const [selected, setSelected] = useState<SimPlan | null>(null);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/80 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-navy-700 bg-navy-800 p-6 shadow-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-display text-lg text-ivory">SIM &amp; eSIM Options</h3>
            <p className="text-xs text-mute">{country}</p>
          </div>
          <button onClick={onClose} className="text-mute hover:text-ivory">✕</button>
        </div>

        {!selected ? (
          <div className="mt-4 space-y-2.5">
            {plans.map((plan) => (
              <button
                key={plan.provider + plan.name}
                onClick={() => setSelected(plan)}
                className="w-full rounded-xl border border-navy-600 bg-navy-900/60 p-3.5 text-left transition hover:border-gold-500/50"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-ivory">{plan.provider} — {plan.name}</span>
                  <span className="text-sm font-medium text-gold-400">{plan.price}</span>
                </div>
                <p className="mt-1 text-xs text-mute">{plan.data} · valid {plan.validity}</p>
              </button>
            ))}
            <p className="pt-1 text-center text-[11px] text-mute/60">Mock checkout — demo only</p>
          </div>
        ) : (
          <div className="mt-4 rounded-xl border border-gold-500/30 bg-navy-900/60 p-5 text-center">
            <p className="text-2xl">✓</p>
            <p className="mt-2 text-sm font-medium text-ivory">
              {selected.provider} {selected.name} activated
            </p>
            <p className="mt-1 text-xs text-mute">
              {selected.data} · {selected.validity} · {selected.price}
            </p>
            <p className="mt-3 text-[11px] text-mute/60">Simulated purchase — demo only</p>
            <button
              onClick={onClose}
              className="mt-4 w-full rounded-lg bg-gold-500 py-2 text-sm font-medium text-navy-950 hover:bg-gold-400"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
