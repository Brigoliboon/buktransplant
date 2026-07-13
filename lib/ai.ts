"use client";

export async function getAIResponse(system: string, user: string): Promise<string> {
  const key = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY;
  if (!key) throw new Error("OpenRouter API key not configured. Add NEXT_PUBLIC_OPENROUTER_API_KEY to .env.local");

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openai/gpt-4o-mini",
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`OpenRouter error ${res.status}: ${text}`);
  }

  const data = await res.json();
  return data.choices[0].message.content;
}

export async function getAICalendarSuggestion(
  month: string,
  scheduledDates: string[],
  totalBookings: number,
): Promise<string> {
  const system =
    "You are BuktransPLANt's AI booking assistant. Keep responses short (1-3 sentences), friendly, and practical. Focus on helping farmers plan their transplanting schedule.";
  const user = `Month: ${month}. Scheduled booking dates: ${scheduledDates.length > 0 ? scheduledDates.join(", ") : "none"}. Total bookings this month: ${totalBookings}. Give a brief suggestion.`;
  return getAIResponse(system, user);
}

export async function getAIRecommendation(
  farmSize: number,
  machineModel: string,
  completionDays: number,
  machinesNeeded: number,
  availableUnits: number,
): Promise<string> {
  const system =
    "You are BuktransPLANt's AI farming equipment advisor. Explain recommendations in 2-4 sentences in plain English. Be practical and helpful for Filipino rice farmers.";
  const user = `Farm: ${farmSize}ha. Machine: ${machineModel}. Target completion: ${completionDays} days. Machines needed: ${machinesNeeded}. Available units: ${availableUnits}. Give a recommendation.`;
  return getAIResponse(system, user);
}
