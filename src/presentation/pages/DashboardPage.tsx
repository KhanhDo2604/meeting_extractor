import { useState } from "react";
import { Upload } from "lucide-react";
import { useMeetings } from "../../hooks/useMeetings";
import { Button } from "../components/ui/Button";
import { EmptyState } from "../components/meetings/EmptyState";
import { MeetingCard } from "../components/meetings/MeetingCard";
import { UploadModal } from "../components/meetings/UploadModal";

export function DashboardPage() {
  const { meetings, isEmpty } = useMeetings();
  const [uploadOpen, setUploadOpen] = useState(false);

  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h1 className="font-display text-xl font-semibold text-ink-900">
            Meetings
          </h1>
          <p className="mt-0.5 text-sm text-ink-500">
            {meetings.length} recent meetings
          </p>
        </div>
        {!isEmpty && (
          <Button
            variant="primary"
            icon={<Upload size={16} />}
            onClick={() => setUploadOpen(true)}
            className="w-full whitespace-nowrap sm:w-auto"
          >
            Upload new meeting
          </Button>
        )}
      </div>

      {isEmpty ? (
        <EmptyState onUploadClick={() => setUploadOpen(true)} />
      ) : (
        <div className="flex flex-col gap-2.5">
          {meetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </div>
      )}

      <UploadModal
        open={uploadOpen}
        onClose={() => setUploadOpen(false)}
        onUploaded={() => {}}
      />
    </div>
  );
}
