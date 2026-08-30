import { NavLink } from "react-router-dom";
import { LayoutGrid, Settings } from "lucide-react";
import { Waveform } from "../ui/Waveform";

const navItems = [
  { to: "/", label: "Meeting", icon: LayoutGrid },
  { to: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="flex h-screen w-16 shrink-0 flex-col border-r border-ink-100 bg-white px-2 py-5 sm:w-56 sm:px-4">
      <div className="flex items-center gap-2 px-2 sm:justify-start">
        <Waveform active={false} size="sm" />
        <span className="hidden font-display text-sm font-semibold text-ink-900 sm:inline">
          Meeting Extractor
        </span>
      </div>

      <nav className="mt-8 flex flex-col gap-1">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `flex items-center justify-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150 sm:justify-start ${
                isActive
                  ? "bg-brand-50 text-brand-700"
                  : "text-ink-500 hover:bg-ink-50 hover:text-ink-900"
              }`
            }
          >
            <Icon size={16} className="shrink-0" />
            <span className="hidden sm:inline">{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
