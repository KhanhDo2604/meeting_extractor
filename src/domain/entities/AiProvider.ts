export type AiProviderId = 'groq' | 'gemini'

export interface AiProviderOption {
  id: AiProviderId
  name: string
  description: string
}

export const AI_PROVIDERS: AiProviderOption[] = [
  { id: 'groq', name: 'Groq (Llama)', description: 'Tốc độ cao, phù hợp xử lý nhanh' },
  { id: 'gemini', name: 'Gemini', description: 'Hỗ trợ đa phương thức, dự phòng' },
]
