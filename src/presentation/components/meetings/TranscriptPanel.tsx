import { useState } from "react";
import { ChevronDown, FileText } from "lucide-react";

export function TranscriptPanel({ transcript }: { transcript: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-ink-100 bg-white">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-5 py-4 text-sm text-ink-500 hover:text-ink-900"
      >
        <span className="flex items-center gap-2">
          <FileText size={15} />
          View original transcript
        </span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="animate-fade-in border-t border-ink-100 px-5 py-4">
          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-ink-700">
            {transcript}
          </pre>
        </div>
      )}
    </div>
  );
}
