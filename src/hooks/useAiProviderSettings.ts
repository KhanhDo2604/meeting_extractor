import { useState } from "react";
import type { AiProviderId } from "../entities/AiProvider";

export function useAiProviderSettings() {
  const [selected, setSelected] = useState<AiProviderId>("groq");
  return { selected, select: setSelected };
}
