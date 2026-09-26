import React, { useState } from 'react';
import { ScreenId } from '../types';
import { LOGO_URL } from '../mockData';

interface HeaderProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, onNavigate, onShowToast }) => {
  const [showScreenMenu, setShowScreenMenu] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const getScreenTitle = (screen: ScreenId): string => {
    switch (screen) {
      case 'dashboard': return 'Dashboard';
      case 'inventario': return 'Inventario';
      case 'clientes': return 'Directorio de Clientes';
      case 'factura-1049': return 'Factura #F-1049';
      case 'cambio-devolucion': return 'Garantías y Cambios';
      case 'bono-digital': return 'Bono Digital de Saldo';
      case 'nueva-venta': return 'Punto de Venta (POS)';
      case 'factura-1050': return 'Factura #F-1050';
      case 'cierre-z': return 'Tirilla Térmica Cierre Z';
      case 'ajustes': return 'Ajustes & Sistema';
      default: return 'Narvaez POS';
    }
  };

  const screensList: { id: ScreenId; name: string; icon: string; category: string }[] = [
    { id: 'dashboard', name: 'Dashboard Principal', icon: 'dashboard', category: 'Principal' },
    { id: 'inventario', name: 'Inventario & Escáner', icon: 'inventory_2', category: 'Inventario' },
    { id: 'clientes', name: 'Directorio de Clientes', icon: 'groups', category: 'Clientes' },
    { id: 'nueva-venta', name: 'Nueva Venta con Bono', icon: 'point_of_sale', category: 'Ventas' },
    { id: 'factura-1049', name: 'Factura Digital #F-1049', icon: 'receipt_long', category: 'Facturas' },
    { id: 'cambio-devolucion', name: 'Cambio o Devolución', icon: 'sync_alt', category: 'Garantías' },
    { id: 'bono-digital', name: 'Bono Digital / Wallet', icon: 'card_giftcard', category: 'Créditos' },
    { id: 'factura-1050', name: 'Factura Final #F-1050 (Mixta)', icon: 'receipt', category: 'Facturas' },
    { id: 'cierre-z', name: 'Tirilla Cierre Z (80mm)', icon: 'print', category: 'Reportes' },
    { id: 'ajustes', name: 'Ajustes & Impresoras', icon: 'settings', category: 'Config' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-40 pt-safe bg-[#f8f9ff]/90 backdrop-blur-xl border-b border-[#eff4ff] shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
        <div className="h-16 px-4 flex items-center justify-between gap-2 max-w-4xl mx-auto">
          {/* Logo & Store Capsule */}
          <div 
            onClick={() => onNavigate('dashboard')}
            className="flex items-center gap-2.5 min-w-0 cursor-pointer select-none group"
          >
            <div className="h-9 w-9 rounded-xl bg-white shadow-xs p-1 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              <img 
                src={LOGO_URL} 
                alt="Narvaez Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#4edea3] inline-block animate-pulse"></span>
                <span className="font-label-sm uppercase tracking-wider text-[#565e74] truncate">
                  Tienda Principal
                </span>
              </div>
              <span className="font-label-md text-[#0b1c30] font-bold truncate">
                {getScreenTitle(currentScreen)}
              </span>
            </div>
          </div>

          {/* Quick Screen Switcher Pill & Actions */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <button 
              onClick={() => setShowScreenMenu(!showScreenMenu)}
              className="px-2.5 py-1.5 rounded-xl bg-[#e5eeff] hover:bg-[#d3e4fe] text-[#00288e] font-label-sm font-semibold flex items-center gap-1 transition-all active:scale-95 shadow-xs"
              title="Selector de pantallas del sistema"
            >
              <span className="material-symbols-outlined text-[17px]">layers</span>
              <span className="hidden xs:inline">Pantallas</span>
              <span className="material-symbols-outlined text-[15px]">expand_more</span>
            </button>

            {/* Notifications with ping indicator */}
            <div className="relative">
              <button 
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                aria-label="Alertas del sistema"
                className="relative w-10 h-10 flex items-center justify-center rounded-xl text-[#444653] hover:text-[#0b1c30] hover:bg-[#eff4ff] transition-colors"
              >
                <span className="material-symbols-outlined text-[22px]">notifications</span>
                <span className="absolute top-2 right-2 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ba1a1a] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ba1a1a]"></span>
                </span>
              </button>

              {/* Notifications Dropdown */}
              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-[#eff4ff] p-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="flex items-center justify-between pb-2 border-b border-[#eff4ff]">
                    <span className="font-label-md font-bold text-[#0b1c30]">Notificaciones</span>
                    <span className="text-[10px] bg-[#ffdad6] text-[#ba1a1a] px-2 py-0.5 rounded-full font-bold">2 Urgentes</span>
                  </div>
                  <div className="space-y-2 pt-2">
                    <div 
                      onClick={() => { onNavigate('inventario'); setNotificationsOpen(false); }}
                      className="p-2.5 rounded-xl bg-[#ffdad6]/40 hover:bg-[#ffdad6]/60 cursor-pointer transition-colors"
                    >
                      <p className="font-label-sm font-bold text-[#ba1a1a] flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px]">warning</span>
                        Stock Crítico (4 productos)
                      </p>
                      <p className="text-[11px] text-[#444653] mt-0.5">Pantalón Jean Slim T32 tiene solo 3 unidades en bodega.</p>
                    </div>
                    <div 
                      onClick={() => { onNavigate('cierre-z'); setNotificationsOpen(false); }}
                      className="p-2.5 rounded-xl bg-[#eff4ff] hover:bg-[#e5eeff] cursor-pointer transition-colors"
                    >
                      <p className="font-label-sm font-bold text-[#00288e] flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px]">print</span>
                        Turno 01 listo para Cierre Z
                      </p>
                      <p className="text-[11px] text-[#444653] mt-0.5">18 ventas registradas hoy. Arqueo cuadrado al 100%.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Avatar / Quick User Pill */}
            <div 
              onClick={() => onNavigate('ajustes')}
              className="w-8 h-8 rounded-full bg-[#00288e] flex items-center justify-center flex-shrink-0 cursor-pointer hover:ring-2 hover:ring-[#b8c4ff] transition-all"
              title="Admin: Wilson Narváez"
            >
              <span className="material-symbols-outlined text-white text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>

      {/* Screen Navigator Modal / Bottom Sheet */}
      {showScreenMenu && (
        <div 
          className="fixed inset-0 z-50 bg-[#0b1c30]/40 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
          onClick={() => setShowScreenMenu(false)}
        >
          <div 
            className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl max-h-[85vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#eff4ff]">
              <div>
                <h3 className="font-headline-md text-[#0b1c30] font-bold">Pantallas Disponibles</h3>
                <p className="font-body-sm text-[#565e74]">Explora cualquier pantalla o sigue el flujo del POS</p>
              </div>
              <button 
                onClick={() => setShowScreenMenu(false)}
                className="w-8 h-8 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#565e74] hover:bg-[#e5eeff]"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Interactive Operational Flow Guide */}
            <div className="my-3 p-3 rounded-xl bg-[#eff4ff] border border-[#d3e4fe]">
              <span className="font-label-sm font-bold uppercase text-[#00288e] block mb-1">
                Flujo Demostrativo Recomendado:
              </span>
              <p className="text-[12px] text-[#444653] leading-relaxed">
                <strong>Dashboard</strong> → <strong>Inventario</strong> → <strong>Factura #F-1049</strong> → <strong>Cambio/Devolución</strong> → <strong>Bono Digital</strong> → <strong>Nueva Venta (Bono aplicado)</strong> → <strong>Factura #F-1050 (Pago Mixto)</strong> → <strong>Tirilla Cierre Z (80mm)</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {screensList.map((screen) => {
                const isActive = currentScreen === screen.id;
                return (
                  <button
                    key={screen.id}
                    onClick={() => {
                      onNavigate(screen.id);
                      setShowScreenMenu(false);
                      onShowToast(`Navegando a: ${screen.name}`);
                    }}
                    className={`flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
                      isActive 
                        ? 'bg-[#00288e] text-white shadow-md' 
                        : 'bg-[#f8f9ff] hover:bg-[#eff4ff] text-[#0b1c30]'
                    }`}
                  >
                    <span className={`material-symbols-outlined text-[22px] ${isActive ? 'text-white' : 'text-[#00288e]'}`}>
                      {screen.icon}
                    </span>
                    <div className="min-w-0">
                      <span className="font-label-md font-bold block truncate leading-tight">
                        {screen.name}
                      </span>
                      <span className={`font-label-sm text-[10px] ${isActive ? 'text-[#b8c4ff]' : 'text-[#565e74]'}`}>
                        {screen.category}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
