import { Routes, Route } from 'react-router-dom'
import { AppShell } from '@/presentation/components/layout/AppShell'
import { DashboardPage } from '@/presentation/pages/DashboardPage'
import { MeetingDetailPage } from '@/presentation/pages/MeetingDetailPage'
import { SettingsPage } from '@/presentation/pages/SettingsPage'

export function AppRouter() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/meetings/:id" element={<MeetingDetailPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </AppShell>
  )
}
