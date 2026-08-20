export type MeetingStatus = "pending" | "processing" | "done" | "failed";

export interface ActionItem {
  id: string;
  task: string;
  owner: string;
  deadline: string | null;
  isDone: boolean;
}

export interface Meeting {
  id: string;
  title: string;
  createdAt: string;
  durationMinutes: number;
  status: MeetingStatus;
  summary: string | null;
  transcript: string | null;
  actionItems: ActionItem[];
  errorMessage: string | null;
}
