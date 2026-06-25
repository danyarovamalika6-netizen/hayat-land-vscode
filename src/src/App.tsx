import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, CloudSun, Settings, Users, 
  Bell, Search, Menu, X, ChevronRight, Plus, Moon, Sun 
} from 'lucide-react';
// Mana bu yerda biz yaratgan utils.ts funksiyasini chaqiramiz
import { cn } from './lib/utils'; 

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark mode funksiyasi
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground transition-colors duration-300">
      
      {/* 1. SIDEBAR - cn() funksiyasi bu yerda klasslarni chiroyli birlashtiradi */}
      <aside 
        className={cn(
          "sidebar-bg flex flex-col text-white transition-all duration-300 ease-in-out relative z-20",
          isSidebarOpen ? "w-64" : "w-20"
        )}
      >
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center btn-glow">
            <CloudSun size={20} className="text-white" />
          </div>
          {isSidebarOpen && <span className="font-bold text-xl tracking-tight">SkyFlow</span>}
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          <SidebarItem icon={<LayoutDashboard size={20} />} label="Dashboard" active isOpen={isSidebarOpen} />
          <SidebarItem icon={<Users size={20} />} label="Team" isOpen={isSidebarOpen} />
          <SidebarItem icon={<Settings size={20} />} label="Settings" isOpen={isSidebarOpen} />
        </nav>

        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -right-3 top-20 bg-primary text-white rounded-full p-1 border-2 border-background"
        >
          {isSidebarOpen ? <X size={14} /> : <Menu size={14} />}
        </button>
      </aside>

      {/* 2. MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        
        {/* HEADER */}
        <header className="h-16 header-bg px-8 flex items-center justify-between text-white shadow-lg z-10">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={16} />
              <input 
                type="text" 
                placeholder="Qidiruv..." 
                className="w-full bg-white/10 border border-white/20 rounded-full py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Dark Mode Tugmasi */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button className="p-2 hover:bg-white/10 rounded-full relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-medium">
              A
            </div>
          </div>
        </header>

        {/* ASOSIY QISM */}
        <div className="flex-1 overflow-y-auto p-8 scrollbar-thin relative bg-background">
          
          {/* Animatsiyali fon elementlari (CSS'dan olingan) */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 blur-3xl cloud-drift-1"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400/10 blur-3xl cloud-drift-2"></div>

          <div className="relative z-10">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Boshqaruv Paneli</h1>
                <p className="text-muted-foreground">Tizim holati va tahlillar.</p>
              </div>
              <button className="bg-primary text-white px-4 py-2 rounded-xl btn-glow flex items-center gap-2 hover:opacity-90 transition-all">
                <Plus size={18} /> Yangi qo'shish
              </button>
            </div>

            {/* Statistika Kartochkalari */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatCard title="Foydalanuvchilar" value="1,284" change="+12%" color="bg-blue-500" />
              <StatCard title="Daromad" value="$12,450" change="+8.2%" color="bg-primary" />
              <StatCard title="Xizmatlar" value="Active" change="99%" color="bg-emerald-500" />
            </div>

            {/* Markaziy Katta Kartochka */}
            <div className="sky-bg rounded-3xl p-8 text-white card-glow mb-8 min-h-[250px] relative overflow-hidden">
               <div className="relative z-10">
                  <h2 className="text-2xl font-semibold mb-2">Xush kelibsiz!</h2>
                  <p className="text-white/80 max-w-md">Loyiha muvaffaqiyatli ishga tushdi. Endi bemalol o'zgartirishlar kiritishingiz mumkin.</p>
               </div>
               {/* Bezak */}
               <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* Kichik yordamchi komponentlar (kodni o'qishga oson qiladi) */

const SidebarItem = ({ icon, label, active = false, isOpen }: any) => (
  <div className={cn(
    "flex items-center gap-4 px-3 py-2 rounded-xl cursor-pointer transition-all",
    active ? "bg-primary text-white btn-glow" : "text-white/60 hover:bg-white/5 hover:text-white"
  )}>
    {icon}
    {isOpen && <span className="font-medium">{label}</span>}
  </div>
);

const StatCard = ({ title, value, change, color }: any) => (
  <div className="bg-card p-6 rounded-2xl border border-border card-glow hover:scale-[1.02] transition-transform cursor-pointer">
    <div className="flex justify-between items-start mb-4">
      <div className={cn("w-10 h-10 rounded-lg opacity-20", color)}></div>
      <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-md">{change}</span>
    </div>
    <h3 className="text-muted-foreground text-sm font-medium">{title}</h3>
    <p className="text-2xl font-bold text-foreground mt-1">{value}</p>
  </div>
);

export default App;
