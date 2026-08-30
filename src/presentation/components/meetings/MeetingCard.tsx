import { Link } from "react-router-dom";
import { CalendarDays, ListChecks } from "lucide-react";
import { StatusBadge } from "./StatusBadge";
import type { Meeting } from "../../../entities/Meeting";
import { formatDate } from "../../utils/functions";

export function MeetingCard({ meeting }: { meeting: Meeting }) {
  return (
    <Link
      to={`/meetings/${meeting.id}`}
      className="group flex flex-col gap-3 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow hover:border-brand-200 sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="min-w-0">
        <p className="truncate font-display text-[15px] font-medium text-ink-900 group-hover:text-brand-600">
          {meeting.title}
        </p>
        <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-500">
          <span className="flex items-center gap-1 whitespace-nowrap">
            <CalendarDays size={13} className="shrink-0" />
            {formatDate(meeting.createdAt)} · {meeting.durationMinutes} min
          </span>
          {meeting.status === "done" && (
            <span className="flex items-center gap-1 whitespace-nowrap">
              <ListChecks size={13} className="shrink-0" />
              {meeting.actionItems.length} action items
            </span>
          )}
        </div>
        {meeting.status === "failed" && meeting.errorMessage && (
          <p className="mt-1 truncate text-xs text-rose-600">
            {meeting.errorMessage}
          </p>
        )}
      </div>
      <StatusBadge
        status={meeting.status}
        className="self-start sm:self-auto"
      />
    </Link>
  );
}
