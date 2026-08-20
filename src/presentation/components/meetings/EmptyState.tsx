import { Mic, Upload } from "lucide-react";
import { Button } from "../ui/Button";

export function EmptyState({ onUploadClick }: { onUploadClick: () => void }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-ink-200 bg-white/60 px-6 py-16 text-center animate-fade-in">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-100 to-brand-50">
        <Mic size={24} className="text-brand-600" />
      </div>
      <p className="mt-4 font-display text-base font-medium text-ink-900">
        Start with the first meeting
      </p>
      <p className="mt-1.5 max-w-sm text-sm text-ink-500">
        Upload file audio, AI will automatically summarize and extract action
        items.
      </p>
      <Button
        variant="primary"
        icon={<Upload size={16} />}
        onClick={onUploadClick}
        className="mt-5"
      >
        Upload Meeting
      </Button>
    </div>
  );
}
