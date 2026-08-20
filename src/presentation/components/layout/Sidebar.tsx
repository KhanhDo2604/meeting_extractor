import { NavLink } from "react-router-dom";
import { LayoutGrid, Settings } from "lucide-react";
import { Waveform } from "../ui/Waveform";

const navItems = [
  { to: "/", label: "Meeting", icon: LayoutGrid },
  { to: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="flex h-screen w-56 shrink-0 flex-col border-r border-ink-100 bg-white px-4 py-5">
      <div className="flex items-center gap-2 px-2">
        <Waveform active={false} size="sm" />
        <span className="font-display text-sm font-semibold text-ink-900">
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
              `flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                isActive
                  ? "bg-brand-50 text-brand-700"
                  : "text-ink-500 hover:bg-ink-50 hover:text-ink-900"
              }`
            }
          >
            <Icon size={16} />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
