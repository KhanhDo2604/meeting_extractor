import type { Meeting } from "../../entities/Meeting";

export const mockMeetings: Meeting[] = [
  {
    id: "1",
    title: "Sprint planning Q3",
    createdAt: "2026-08-11T09:00:00Z",
    durationMinutes: 42,
    status: "done",
    summary:
      "Team thống nhất ưu tiên hoàn thành module thanh toán trước 25/8. Backend cần refactor API upload trước khi tích hợp thêm Whisper service. Design sẽ gửi mockup mới cho luồng onboarding vào thứ Sáu.",
    transcript:
      "Khanh: Chúng ta bắt đầu với ưu tiên sprint này...\nDesign: Mockup onboarding sẽ xong thứ Sáu...\nBackend: Cần refactor API upload trước khi nối Whisper...",
    actionItems: [
      {
        id: "a1",
        task: "Refactor API upload cho module thanh toán",
        owner: "Khanh",
        deadline: "2026-08-20",
        isDone: true,
      },
      {
        id: "a2",
        task: "Gửi mockup luồng onboarding",
        owner: "Design team",
        deadline: "2026-08-22",
        isDone: false,
      },
      {
        id: "a3",
        task: "Test tích hợp Whisper service với payment flow",
        owner: "Khanh",
        deadline: "2026-08-25",
        isDone: false,
      },
    ],
    errorMessage: null,
  },
  {
    id: "2",
    title: "Client sync - Acme Corp",
    createdAt: "2026-08-10T14:00:00Z",
    durationMinutes: 28,
    status: "done",
    summary:
      "Khách hàng đồng ý mở rộng phạm vi dự án, cần báo giá bổ sung trước cuối tuần.",
    transcript:
      "Client: Chúng tôi muốn mở rộng phạm vi...\nSales: Sẽ gửi báo giá trước thứ Sáu...",
    actionItems: [
      {
        id: "a4",
        task: "Gửi báo giá bổ sung",
        owner: "Sales",
        deadline: "2026-08-15",
        isDone: false,
      },
      {
        id: "a5",
        task: "Cập nhật hợp đồng",
        owner: "Legal",
        deadline: "2026-08-18",
        isDone: false,
      },
      {
        id: "a6",
        task: "Lên lịch kickoff mở rộng",
        owner: "PM",
        deadline: null,
        isDone: false,
      },
    ],
    errorMessage: null,
  },
  {
    id: "3",
    title: "Weekly standup",
    createdAt: "2026-08-14T08:30:00Z",
    durationMinutes: 15,
    status: "processing",
    summary: null,
    transcript: null,
    actionItems: [],
    errorMessage: null,
  },
  {
    id: "4",
    title: "Design review",
    createdAt: "2026-08-13T10:00:00Z",
    durationMinutes: 33,
    status: "failed",
    summary: null,
    transcript: null,
    actionItems: [],
    errorMessage: "Whisper service không phản hồi",
  },
];
