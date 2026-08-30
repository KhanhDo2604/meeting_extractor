import { Routes, Route } from "react-router-dom";
import { AppShell } from "../components/layout/AppShell";
import { DashboardPage } from "../pages/DashboardPage";
import { MeetingDetailPage } from "../pages/MeetingDetailPage";
import { SettingsPage } from "../pages/SettingsPage";

export function AppRouter() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/meetings/:id" element={<MeetingDetailPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </AppShell>
  );
}
