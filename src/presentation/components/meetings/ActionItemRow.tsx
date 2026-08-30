import { useState } from "react";
import { Check } from "lucide-react";
import type { ActionItem } from "../../../entities/Meeting";
import { formatDate } from "../../utils/functions";

export function ActionItemRow({ item }: { item: ActionItem }) {
  const [isDone, setIsDone] = useState(item.isDone);

  return (
    <div className="flex items-center gap-3 py-2">
      <button
        onClick={() => setIsDone((v) => !v)}
        aria-label={isDone ? "Mark as not done" : "Mark as done"}
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-all duration-150 ${
          isDone
            ? "border-brand-500 bg-gradient-to-br from-brand-600 to-brand-500 scale-100"
            : "border-ink-200 bg-white hover:border-brand-400"
        }`}
      >
        {isDone && <Check size={13} className="text-white" />}
      </button>
      <p
        className={`flex-1 text-sm transition-colors ${isDone ? "text-ink-300 line-through" : "text-ink-900"}`}
      >
        {item.task}
      </p>
      <span className="shrink-0 text-xs text-ink-500">
        {item.owner}
        {item.deadline && (
          <> · {formatDate(item.deadline, { includeYear: false })}</>
        )}
      </span>
    </div>
  );
}
