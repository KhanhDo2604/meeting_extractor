import { Bolt, Sparkles, CircleCheck } from "lucide-react";
import { useAiProviderSettings } from "../../hooks/useAiProviderSettings";
import { Card } from "../components/ui/Card";
import { AI_PROVIDERS } from "../../entities/AiProvider";

const icons = { groq: Bolt, gemini: Sparkles };

export function SettingsPage() {
  const { selected, select } = useAiProviderSettings();

  return (
    <div className="animate-fade-in">
      <h1 className="mb-6 font-display text-xl font-semibold text-ink-900">
        Settings
      </h1>

      <Card>
        <p className="text-sm font-medium text-ink-900">AI provider</p>
        <p className="mt-1 mb-4 text-sm text-ink-500">
          Choose the AI service to use for summarizing and extracting action
          items.
        </p>

        <div className="flex flex-col gap-2">
          {AI_PROVIDERS.map((provider) => {
            const Icon = icons[provider.id];
            const isSelected = selected === provider.id;
            return (
              <button
                key={provider.id}
                onClick={() => select(provider.id)}
                className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left transition-all duration-150 ${
                  isSelected
                    ? "border-brand-300 bg-brand-50/50"
                    : "border-ink-100 hover:border-ink-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} className="text-ink-500" />
                  <div>
                    <p className="text-sm text-ink-900">{provider.name}</p>
                    <p className="text-xs text-ink-500">
                      {provider.description}
                    </p>
                  </div>
                </div>
                <CircleCheck
                  size={20}
                  className={isSelected ? "text-brand-500" : "text-ink-200"}
                  fill={isSelected ? "currentColor" : "none"}
                />
              </button>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
