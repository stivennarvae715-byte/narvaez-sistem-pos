import React from 'react';
import { ScreenId } from '../types';

interface BottomNavProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  inventoryAlertsCount?: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentScreen,
  onNavigate,
  inventoryAlertsCount = 3
}) => {
  const isTabActive = (tab: ScreenId): boolean => {
    if (tab === 'dashboard' && currentScreen === 'dashboard') return true;
    if (tab === 'inventario' && currentScreen === 'inventario') return true;
    if (tab === 'clientes' && currentScreen === 'clientes') return true;
    if (tab === 'ajustes' && currentScreen === 'ajustes') return true;
    return false;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full z-40 pb-safe bg-[#f8f9ff]/90 backdrop-blur-xl border-t border-[#eff4ff] shadow-[0_-2px_12px_rgba(0,0,0,0.05)]">
      <div className="h-16 px-2 flex items-center justify-around max-w-4xl mx-auto">
        {/* Dashboard */}
        <button
          onClick={() => onNavigate('dashboard')}
          aria-current={isTabActive('dashboard') ? 'page' : undefined}
          className={`flex-1 h-full flex flex-col items-center justify-center transition-colors ${
            isTabActive('dashboard')
              ? 'text-[#00288e] font-bold'
              : 'text-[#444653] hover:text-[#0b1c30]'
          }`}
        >
          <span className="material-symbols-outlined text-[24px]">dashboard</span>
          <span className="font-label-sm mt-0.5">Dashboard</span>
        </button>

        {/* Inventario */}
        <button
          onClick={() => onNavigate('inventario')}
          aria-current={isTabActive('inventario') ? 'page' : undefined}
          className={`flex-1 h-full flex flex-col items-center justify-center transition-colors relative ${
            isTabActive('inventario')
              ? 'text-[#00288e] font-bold'
              : 'text-[#444653] hover:text-[#0b1c30]'
          }`}
        >
          <div className="relative flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">inventory_2</span>
            {inventoryAlertsCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-[#ba1a1a] text-white rounded-full font-label-sm text-[9px] px-1 min-w-[14px] text-center leading-tight">
                {inventoryAlertsCount}
              </span>
            )}
          </div>
          <span className="font-label-sm mt-0.5">Inventario</span>
        </button>

        {/* Center Floating POS Button (Nueva Venta) */}
        <div className="flex-1 flex items-center justify-center">
          <button
            onClick={() => onNavigate('nueva-venta')}
            className={`-mt-5 w-14 h-14 rounded-full flex flex-col items-center justify-center shadow-lg shadow-[#00288e]/30 transition-transform active:scale-95 ${
              currentScreen === 'nueva-venta'
                ? 'bg-[#1e40af] text-white ring-4 ring-[#b8c4ff]'
                : 'bg-[#00288e] text-white hover:bg-[#1e40af]'
            }`}
            title="Nueva Venta / Punto de Venta"
          >
            <span className="material-symbols-outlined text-[26px]">point_of_sale</span>
          </button>
        </div>

        {/* Clientes */}
        <button
          onClick={() => onNavigate('clientes')}
          aria-current={isTabActive('clientes') ? 'page' : undefined}
          className={`flex-1 h-full flex flex-col items-center justify-center transition-colors ${
            isTabActive('clientes')
              ? 'text-[#00288e] font-bold'
              : 'text-[#444653] hover:text-[#0b1c30]'
          }`}
        >
          <span className="material-symbols-outlined text-[24px]">groups</span>
          <span className="font-label-sm mt-0.5">Clientes</span>
        </button>

        {/* Ajustes */}
        <button
          onClick={() => onNavigate('ajustes')}
          aria-current={isTabActive('ajustes') ? 'page' : undefined}
          className={`flex-1 h-full flex flex-col items-center justify-center transition-colors ${
            isTabActive('ajustes')
              ? 'text-[#00288e] font-bold'
              : 'text-[#444653] hover:text-[#0b1c30]'
          }`}
        >
          <span className="material-symbols-outlined text-[24px]">settings</span>
          <span className="font-label-sm mt-0.5">Ajustes</span>
        </button>
      </div>
    </nav>
  );
};
