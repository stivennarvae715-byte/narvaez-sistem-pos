import React, { useState } from 'react';
import { ScreenId } from '../types';
import { LOGO_URL } from '../mockData';

interface AjustesViewProps {
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

export const AjustesView: React.FC<AjustesViewProps> = ({ onNavigate, onShowToast }) => {
  const [offlineMode, setOfflineMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <div className="flex flex-col w-full pb-28 pt-20 max-w-2xl mx-auto space-y-4 px-4">
      {/* Header */}
      <div className="flex items-center justify-between pt-1">
        <div>
          <h1 className="font-headline-lg text-[#0b1c30]">Ajustes del Sistema</h1>
          <p className="font-body-sm text-[#565e74]">Configuración de punto de venta, hardware y facturación</p>
        </div>
        <div className="w-11 h-11 rounded-2xl bg-white shadow-xs p-1.5 flex items-center justify-center border border-[#eff4ff]">
          <img src={LOGO_URL} alt="Logo Narvaez" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Terminal & Tienda Card */}
      <div className="bg-white rounded-2xl p-4 shadow-sm space-y-3 border border-[#eff4ff]">
        <div className="flex items-center justify-between pb-2 border-b border-[#eff4ff]">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#00288e] text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">store</span>
            </div>
            <div>
              <h2 className="font-label-lg font-bold text-[#0b1c30]">Tienda Principal El Poblado</h2>
              <p className="font-body-sm text-[#565e74]">Carrera 43A # 1sur-220 • Medellín</p>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-[#6ffbbe] text-[#002113] font-label-sm font-bold">
            Online
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[12px] font-body-sm text-[#444653]">
          <div>NIT: <strong className="text-[#0b1c30]">901.482.391-4</strong></div>
          <div>Caja: <strong className="text-[#0b1c30]">01 (POS Móvil)</strong></div>
          <div>Cajero: <strong className="text-[#0b1c30]">Wilson Narváez</strong></div>
          <div>Turno: <strong className="text-[#00563a]">Tarde (Abierto)</strong></div>
        </div>
      </div>

      {/* Hardware & Periféricos */}
      <div className="bg-white rounded-2xl p-4 shadow-sm space-y-3 border border-[#eff4ff]">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#00288e] text-[20px]">devices</span>
          <h2 className="font-headline-md text-[#0b1c30] font-bold">Hardware y Periféricos</h2>
        </div>

        {/* Printer */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-[#eff4ff] border border-[#d3e4fe]/40">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#00288e] text-[22px]">print</span>
            <div>
              <p className="font-label-md font-bold text-[#0b1c30]">Impresora Térmica Bluetooth</p>
              <p className="text-[11px] text-[#565e74]">POS-80 (Seiko 203 DPI, 80mm)</p>
            </div>
          </div>
          <button
            onClick={() => onShowToast('Prueba de impresión enviada a POS-80')}
            className="px-3 py-1.5 rounded-lg bg-white text-[#00288e] font-label-sm font-bold shadow-xs hover:bg-[#dce9ff]"
          >
            Test
          </button>
        </div>

        {/* Optical Scanner */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-[#eff4ff] border border-[#d3e4fe]/40">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#00563a] text-[22px]">barcode_scanner</span>
            <div>
              <p className="font-label-md font-bold text-[#0b1c30]">Lector Óptico de Código de Barras</p>
              <p className="text-[11px] text-[#565e74]">Cámara integrada + Láser EAN-13</p>
            </div>
          </div>
          <span className="text-[11px] text-[#00563a] font-bold bg-[#6ffbbe]/40 px-2 py-0.5 rounded-full">
            Listo
          </span>
        </div>

        {/* Datafono */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-[#eff4ff] border border-[#d3e4fe]/40">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#565e74] text-[22px]">credit_card</span>
            <div>
              <p className="font-label-md font-bold text-[#0b1c30]">Datáfono Redeban</p>
              <p className="text-[11px] text-[#565e74]">Lote sincronizado #4892</p>
            </div>
          </div>
          <span className="text-[11px] text-[#00288e] font-bold bg-[#dde1ff] px-2 py-0.5 rounded-full">
            Vinculado
          </span>
        </div>
      </div>

      {/* Facturación Electrónica DIAN */}
      <div className="bg-white rounded-2xl p-4 shadow-sm space-y-3 border border-[#eff4ff]">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#00563a] text-[20px]">verified</span>
          <h2 className="font-headline-md text-[#0b1c30] font-bold">Facturación Electrónica DIAN</h2>
        </div>

        <div className="p-3 bg-[#eff4ff] rounded-xl text-body-sm space-y-1.5 border border-[#d3e4fe]/40">
          <div className="flex justify-between">
            <span className="text-[#565e74]">Resolución DIAN:</span>
            <span className="font-mono font-bold text-[#0b1c30]">#187640283921</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#565e74]">Rango Autorizado:</span>
            <span className="font-mono font-bold text-[#0b1c30]">#F-1000 al #F-5000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#565e74]">Consecutivo Actual:</span>
            <span className="font-mono font-bold text-[#00288e]">#F-1050</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#565e74]">Vigencia:</span>
            <span className="font-medium text-[#0b1c30]">Hasta 15 Enero 2026</span>
          </div>
        </div>
      </div>

      {/* Preferencias de Turno y Operación */}
      <div className="bg-white rounded-2xl p-4 shadow-sm space-y-3 border border-[#eff4ff]">
        <h2 className="font-headline-md text-[#0b1c30] font-bold">Operación &amp; Auditoría</h2>

        <div className="flex items-center justify-between py-2 border-b border-[#eff4ff]">
          <div>
            <p className="font-label-md font-bold text-[#0b1c30]">Sonido de escáner y cobro</p>
            <p className="text-[11px] text-[#565e74]">Feedback sonoro al capturar prendas</p>
          </div>
          <input
            type="checkbox"
            checked={soundEnabled}
            onChange={(e) => {
              setSoundEnabled(e.target.checked);
              onShowToast(e.target.checked ? 'Sonidos activados' : 'Sonidos silenciados');
            }}
            className="w-5 h-5 accent-[#00288e] rounded"
          />
        </div>

        <div className="flex items-center justify-between py-2 border-b border-[#eff4ff]">
          <div>
            <p className="font-label-md font-bold text-[#0b1c30]">Modo Offline de Emergencia</p>
            <p className="text-[11px] text-[#565e74]">Guardar transacciones locales sin internet</p>
          </div>
          <input
            type="checkbox"
            checked={offlineMode}
            onChange={(e) => {
              setOfflineMode(e.target.checked);
              onShowToast(e.target.checked ? 'Modo Offline Activado' : 'Conexión DIAN en Vivo Restaurada');
            }}
            className="w-5 h-5 accent-[#00288e] rounded"
          />
        </div>

        {/* Direct Action to Cierre Z */}
        <div className="pt-2">
          <button
            onClick={() => onNavigate('cierre-z')}
            className="w-full py-3.5 px-4 rounded-xl bg-[#213145] text-white font-label-md font-bold flex items-center justify-center gap-2 active:scale-98 transition-transform shadow-xs"
          >
            <span className="material-symbols-outlined text-[20px]">print</span>
            <span>Generar Tirilla Cierre Z del Día</span>
          </button>
        </div>
      </div>
    </div>
  );
};
