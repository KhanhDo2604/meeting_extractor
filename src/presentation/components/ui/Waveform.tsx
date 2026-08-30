interface WaveformProps {
  active?: boolean;
  size?: "sm" | "md";
  color?: string;
}

const heights = [0.5, 0.9, 0.6, 1, 0.7];
const delays = ["0s", "0.1s", "0.2s", "0.3s", "0.15s"];

export function Waveform({
  active = true,
  size = "md",
  color = "bg-brand-500",
}: WaveformProps) {
  const barWidth = size === "sm" ? "w-0.5" : "w-1";
  const height = size === "sm" ? "h-3.5" : "h-5";

  return (
    <div
      className={`flex items-end gap-0.5 ${height}`}
      role="img"
      aria-label="Processing audio"
    >
      {heights.map((h, i) => (
        <span
          key={i}
          className={`${barWidth} ${color} rounded-full ${active ? "animate-wave" : ""}`}
          style={{ height: `${h * 100}%`, animationDelay: delays[i] }}
        />
      ))}
    </div>
  );
}
