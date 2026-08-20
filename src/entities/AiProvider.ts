export type AiProviderId = "groq" | "gemini";

export interface AiProviderOption {
  id: AiProviderId;
  name: string;
  description: string;
}

export const AI_PROVIDERS: AiProviderOption[] = [
  {
    id: "groq",
    name: "Groq (Llama)",
    description: "High speed, low cost, but limited to text input",
  },
  {
    id: "gemini",
    name: "Gemini",
    description: "Highly capable, multimodal model for various tasks",
  },
];
