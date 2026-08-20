import { useRef, useState, type DragEvent } from "react";
import { CloudUpload, X } from "lucide-react";
import { useUploadMeeting } from "../../../hooks/useUploadMeeting";
import { Button } from "../ui/Button";

interface UploadModalProps {
  open: boolean;
  onClose: () => void;
  onUploaded: () => void;
}

export function UploadModal({ open, onClose, onUploaded }: UploadModalProps) {
  const { file, title, isSubmitting, error, setFile, setTitle, submit } =
    useUploadMeeting(() => {
      onUploaded();
      onClose();
    });
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  if (!open) return null;

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) setFile(dropped);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/40 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-[420px] rounded-2xl bg-white p-6 shadow-soft"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-center justify-between">
          <p className="font-display text-base font-medium text-ink-900">
            Upload new meeting
          </p>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-ink-300 hover:text-ink-700"
          >
            <X size={18} />
          </button>
        </div>

        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className={`flex cursor-pointer flex-col items-center rounded-xl border-2 border-dashed px-4 py-8 text-center transition-colors duration-150 ${
            isDragging
              ? "border-brand-400 bg-brand-50"
              : "border-ink-200 hover:border-brand-300"
          }`}
        >
          <CloudUpload size={26} className="text-ink-400" />
          <p className="mt-2.5 text-sm text-ink-900">
            {file ? file.name : "Drag and drop audio file here"}
          </p>
          {!file && (
            <p className="mt-1 text-xs text-ink-500">
              or <span className="text-brand-600">browse files</span> · MP3,
              WAV, M4A · up to 100MB
            </p>
          )}
          <input
            ref={inputRef}
            type="file"
            accept="audio/mpeg,audio/wav,audio/mp4,audio/x-m4a"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
        </div>

        <label className="mt-4 block text-xs font-medium text-ink-500">
          Meeting Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Sprint planning Q3"
          className="mt-1.5 w-full rounded-lg border border-ink-100 px-3 py-2 text-sm outline-none transition-colors focus:border-brand-400"
        />

        {error && <p className="mt-2 text-xs text-rose-600">{error}</p>}

        <div className="mt-5 flex justify-end gap-2">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" disabled={isSubmitting} onClick={submit}>
            {isSubmitting ? "Uploading..." : "Upload and Process"}
          </Button>
        </div>
      </div>
    </div>
  );
}
