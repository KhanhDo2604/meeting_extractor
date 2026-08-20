import { Check, AlertTriangle, Clock } from "lucide-react";
import type { MeetingStatus } from "../../../entities/Meeting";
import { Waveform } from "../ui/Waveform";

const config: Record<MeetingStatus, { label: string; classes: string }> = {
  done: { label: "Done", classes: "bg-emerald-50 text-emerald-700" },
  processing: { label: "Processing", classes: "bg-amber-50 text-amber-700" },
  pending: { label: "Pending", classes: "bg-ink-100 text-ink-500" },
  failed: { label: "Failed", classes: "bg-rose-50 text-rose-700" },
};

export function StatusBadge({ status }: { status: MeetingStatus }) {
  const { label, classes } = config[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${classes}`}
    >
      {status === "done" && <Check size={13} />}
      {status === "processing" && <Waveform size="sm" color="bg-amber-500" />}
      {status === "pending" && <Clock size={13} />}
      {status === "failed" && <AlertTriangle size={13} />}
      {label}
    </span>
  );
}
