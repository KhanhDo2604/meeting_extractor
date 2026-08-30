import { useState } from "react";

interface UploadState {
  file: File | null;
  title: string;
  isSubmitting: boolean;
  error: string | null;
}

const ACCEPTED_TYPES = ["audio/mpeg", "audio/wav", "audio/mp4", "audio/x-m4a"];
const MAX_SIZE_MB = 100;

export function useUploadMeeting(onSuccess: () => void) {
  const [state, setState] = useState<UploadState>({
    file: null,
    title: "",
    isSubmitting: false,
    error: null,
  });

  function setFile(file: File | null) {
    if (file && !ACCEPTED_TYPES.includes(file.type)) {
      setState((s) => ({
        ...s,
        error: "Only MP3, WAV, and M4A files are supported.",
      }));
      return;
    }
    if (file && file.size > MAX_SIZE_MB * 1024 * 1024) {
      setState((s) => ({ ...s, error: `File exceeds ${MAX_SIZE_MB}MB.` }));
      return;
    }
    setState((s) => ({ ...s, file, error: null }));
  }

  function setTitle(title: string) {
    setState((s) => ({ ...s, title }));
  }

  async function submit() {
    if (!state.file) {
      setState((s) => ({ ...s, error: "Please select an audio file." }));
      return;
    }
    setState((s) => ({ ...s, isSubmitting: true, error: null }));
    // TODO: gọi API thật POST /meetings khi backend sẵn sàng
    await new Promise((r) => setTimeout(r, 600));
    setState({ file: null, title: "", isSubmitting: false, error: null });
    onSuccess();
  }

  return { ...state, setFile, setTitle, submit };
}
