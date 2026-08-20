import { useMemo, useState } from "react";
import type { Meeting } from "../domain/entities/Meeting";
import { mockMeetings } from "../infrastructure/mock/mockData";

export function useMeetings() {
  const [meetings] = useState<Meeting[]>(mockMeetings);
  const [isLoading] = useState(false);

  const sorted = useMemo(
    () =>
      [...meetings].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      ),
    [meetings],
  );

  return { meetings: sorted, isLoading, isEmpty: sorted.length === 0 };
}

export function useMeetingById(id: string | undefined) {
  const { meetings, isLoading } = useMeetings();
  const meeting = meetings.find((m) => m.id === id) ?? null;
  return { meeting, isLoading };
}
