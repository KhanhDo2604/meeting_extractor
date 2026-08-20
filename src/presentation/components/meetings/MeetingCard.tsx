import { Link } from "react-router-dom";
import { CalendarDays, ListChecks } from "lucide-react";
import { StatusBadge } from "./StatusBadge";
import type { Meeting } from "../../../entities/Meeting";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function MeetingCard({ meeting }: { meeting: Meeting }) {
  return (
    <Link
      to={`/meetings/${meeting.id}`}
      className="group flex items-center justify-between rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow hover:border-brand-200"
    >
      <div className="min-w-0">
        <p className="truncate font-display text-[15px] font-medium text-ink-900 group-hover:text-brand-600">
          {meeting.title}
        </p>
        <div className="mt-1.5 flex items-center gap-3 text-xs text-ink-500">
          <span className="flex items-center gap-1">
            <CalendarDays size={13} />
            {formatDate(meeting.createdAt)} · {meeting.durationMinutes} min
          </span>
          {meeting.status === "done" && (
            <span className="flex items-center gap-1">
              <ListChecks size={13} />
              {meeting.actionItems.length} action items
            </span>
          )}
          {meeting.status === "failed" && meeting.errorMessage && (
            <span className="text-rose-600">{meeting.errorMessage}</span>
          )}
        </div>
      </div>
      <StatusBadge status={meeting.status} />
    </Link>
  );
}
