import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useMeetingById } from "../../hooks/useMeetings";
import { StatusBadge } from "../components/meetings/StatusBadge";
import { Card } from "../components/ui/Card";
import { Waveform } from "../components/ui/Waveform";
import { ActionItemRow } from "../components/meetings/ActionItemRow";
import { TranscriptPanel } from "../components/meetings/TranscriptPanel";
import { formatDate } from "../utils/functions";

export function MeetingDetailPage() {
  const { id } = useParams();
  const { meeting } = useMeetingById(id);

  if (!meeting) {
    return <p className="text-sm text-ink-500">Meeting not found.</p>;
  }

  return (
    <div className="animate-fade-in">
      <Link
        to="/"
        className="mb-4 inline-flex items-center gap-1.5 text-xs text-ink-500 hover:text-ink-900"
      >
        <ArrowLeft size={13} />
        Back to meetings list
      </Link>

      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h1 className="truncate font-display text-xl font-semibold text-ink-900">
            {meeting.title}
          </h1>
          <p className="mt-1 text-sm text-ink-500">
            {formatDate(meeting.createdAt)} · {meeting.durationMinutes} min
          </p>
        </div>
        <StatusBadge status={meeting.status} className="self-start" />
      </div>

      {meeting.status === "processing" && (
        <Card className="mb-4 flex items-center gap-3">
          <Waveform />
          <p className="text-sm text-ink-500">
            Extracting summary and action items...
          </p>
        </Card>
      )}

      {meeting.status === "failed" && (
        <Card className="mb-4 border-rose-100 bg-rose-50/50">
          <p className="text-sm text-rose-700">
            {meeting.errorMessage ?? "Xử lý thất bại."}
          </p>
        </Card>
      )}

      {meeting.summary && (
        <Card className="mb-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-500">
            Summary
          </p>
          <p className="text-sm leading-relaxed text-ink-900">
            {meeting.summary}
          </p>
        </Card>
      )}

      {meeting.actionItems.length > 0 && (
        <Card className="mb-4 divide-y divide-ink-100">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink-500">
            Action items ({meeting.actionItems.length})
          </p>
          <div className="divide-y divide-ink-100">
            {meeting.actionItems.map((item) => (
              <ActionItemRow key={item.id} item={item} />
            ))}
          </div>
        </Card>
      )}

      {meeting.transcript && (
        <TranscriptPanel transcript={meeting.transcript} />
      )}
    </div>
  );
}
