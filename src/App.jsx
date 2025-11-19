import React from 'react'
import { Spline } from '@splinetool/react-spline'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="relative h-[56vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 flex flex-col items-start justify-end h-full">
          <div className="backdrop-blur-sm bg-slate-900/50 border border-white/10 rounded-2xl p-6">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Finance Hub</h1>
            <p className="text-slate-300 mt-2 max-w-2xl">Unified enterprise finance workspace. Supabase-native. Realtime. Audited. Zero dead buttons.</p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="/finance" className="group block rounded-xl border border-white/10 bg-slate-900/60 p-5 hover:bg-slate-900/80 transition" data-cta>
            <div className="text-sm text-slate-400">Module</div>
            <div className="text-xl font-medium">Finance</div>
            <div className="text-slate-400 text-sm mt-2">GL • AR • AP • Cash • Reports</div>
          </a>
          <a href="/analytics" className="group block rounded-xl border border-white/10 bg-slate-900/60 p-5 hover:bg-slate-900/80 transition" data-cta>
            <div className="text-sm text-slate-400">Module</div>
            <div className="text-xl font-medium">Analytics</div>
            <div className="text-slate-400 text-sm mt-2">Sheets + Charts Engine</div>
          </a>
          <a href="/admin" className="group block rounded-xl border border-white/10 bg-slate-900/60 p-5 hover:bg-slate-900/80 transition" data-cta>
            <div className="text-sm text-slate-400">Module</div>
            <div className="text-xl font-medium">Admin</div>
            <div className="text-slate-400 text-sm mt-2">Security & RLS Matrix</div>
          </a>
        </div>

        <div className="mt-10 text-slate-400 text-sm">
          Configure your Supabase URL and anon key in environment variables VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to continue.
        </div>
      </main>
    </div>
  )
}

export default App
