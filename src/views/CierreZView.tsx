import React, { useState } from 'react';
import { ScreenId } from '../types';
import { LOGO_URL } from '../mockData';

interface CierreZViewProps {
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

export const CierreZView: React.FC<CierreZViewProps> = ({ onNavigate, onShowToast }) => {
  const [paperWidth, setPaperWidth] = useState<'80mm' | '58mm'>('80mm');
  const [autoCut, setAutoCut] = useState(true);
  const [printCopies, setPrintCopies] = useState(2);
  const [isPrinting, setIsPrinting] = useState(false);

  const handlePrint = () => {
    setIsPrinting(true);
    onShowToast('Enviando Cierre Z #285 a POS-80 Térmica...');
    setTimeout(() => {
      setIsPrinting(false);
      onShowToast('¡Tirilla Cierre Z impresa con corte automático!');
    }, 1800);
  };

  return (
    <div className="flex flex-col w-full pb-28 pt-20 max-w-2xl mx-auto">
      {/* Top Header */}
      <div className="px-4 py-2 flex items-center justify-between">
        <button
          onClick={() => onNavigate('dashboard')}
          className="w-10 h-10 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#0b1c30] hover:bg-[#e5eeff] transition-colors active:scale-95 shadow-xs"
          type="button"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>

        <div className="text-center min-w-0 px-2">
          <h1 className="font-headline-md text-[#0b1c30] truncate font-bold">
            Tirilla Térmica Cierre Z
          </h1>
          <p className="font-label-sm text-[#565e74] truncate">Reporte Fiscal Diario • Turno Tarde</p>
        </div>

        <button
          onClick={() => onShowToast('Configuración del protocolo ESC/POS')}
          className="w-10 h-10 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#0b1c30] hover:bg-[#e5eeff] transition-colors active:scale-95 shadow-xs"
          title="Opciones avanzadas"
          type="button"
        >
          <span className="material-symbols-outlined text-[20px]">tune</span>
        </button>
      </div>

      {/* Bluetooth Peripheral Banner */}
      <div className="px-4 my-2">
        <div className="bg-white rounded-2xl p-3.5 shadow-sm flex items-center justify-between gap-3 border border-[#eff4ff]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#00563a]/10 text-[#00563a] flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[22px]">bluetooth_connected</span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
                <span className="font-label-md text-[#0b1c30] font-bold truncate">
                  POS-80 Térmica Conectada
                </span>
              </div>
              <span className="font-body-sm text-[#565e74] truncate block">
                Cabezal Seiko 203 DPI • 80mm ESC/POS
              </span>
            </div>
          </div>
          <button
            onClick={() => onShowToast('Buscando dispositivos Bluetooth cercanos...')}
            className="px-3 py-1.5 rounded-xl bg-[#eff4ff] text-[#00288e] font-label-md font-bold hover:bg-[#e5eeff] transition-colors shadow-xs"
            type="button"
          >
            Cambiar
          </button>
        </div>
      </div>

      {/* Quick Action Triggers */}
      <div className="px-4 grid grid-cols-2 gap-3 mb-4">
        <button
          onClick={handlePrint}
          className="flex items-center justify-center gap-2 py-3.5 px-3 rounded-2xl bg-[#00288e] text-white font-label-lg font-bold shadow-md shadow-[#00288e]/20 active:scale-98 transition-transform hover:bg-[#1e40af]"
          type="button"
        >
          <span className="material-symbols-outlined text-[20px]">
            {isPrinting ? 'hourglass_top' : 'print'}
          </span>
          <span>{isPrinting ? 'Imprimiendo...' : 'Imprimir POS (80mm)'}</span>
        </button>

        <button
          onClick={() => onShowToast('Abriendo WhatsApp con resumen del Cierre Z #285 para Gerencia')}
          className="flex items-center justify-center gap-2 py-3.5 px-3 rounded-2xl bg-white text-[#0b1c30] font-label-lg font-bold shadow-sm border border-[#eff4ff] active:scale-98 transition-transform hover:bg-[#eff4ff]"
          type="button"
        >
          <span className="material-symbols-outlined text-[20px] text-[#00563a]">share</span>
          <span>WhatsApp Gerencia</span>
        </button>
      </div>

      {/* Thermal Paper Simulation Container (80mm) */}
      <div className="px-4 flex justify-center">
        <div className="w-full max-w-[390px] relative filter drop-shadow-[0_10px_25px_rgba(15,23,42,0.12)]">
          {/* Top Jagged Edge (SVG) */}
          <div className="w-full h-3 overflow-hidden text-white">
            <svg className="w-full h-full fill-current" preserveAspectRatio="none" viewBox="0 0 370 12">
              <path d="M0,12 L10,0 L20,12 L30,0 L40,12 L50,0 L60,12 L70,0 L80,12 L90,0 L100,12 L110,0 L120,12 L130,0 L140,12 L150,0 L160,12 L170,0 L180,12 L190,0 L200,12 L210,0 L220,12 L230,0 L240,12 L250,0 L260,12 L270,0 L280,12 L290,0 L300,12 L310,0 L320,12 L330,0 L340,12 L350,0 L360,12 L370,0 L370,12 Z"></path>
            </svg>
          </div>

          {/* Thermal Paper Body */}
          <div className="bg-white text-[#0b1c30] px-6 py-6 font-mono select-none">
            {/* Header */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-2 rounded-xl flex items-center justify-center bg-[#eff4ff] p-2">
                <img
                  src={LOGO_URL}
                  alt="Logo Narváez"
                  className="w-full h-full object-contain filter grayscale contrast-200"
                />
              </div>
              <span className="font-headline-md tracking-wider font-extrabold uppercase text-[#0b1c30]">
                NARVÁEZ S.A.S.
              </span>
              <span className="font-label-sm tracking-widest text-[#444653] font-bold">
                ALTA MODA &amp; SASTRERÍA
              </span>
              <p className="font-body-sm text-[11px] leading-tight text-[#565e74] mt-1">
                NIT: 901.482.391-4 • Régimen Ordinario<br />
                Cra 43A # 1sur-220, El Poblado, Medellín<br />
                Teléfono: +57 (4) 444 8920
              </p>
            </div>

            {/* Separator */}
            <div className="my-3 border-b-2 border-dashed border-[#c4c5d5]"></div>

            {/* Fiscal Header Info */}
            <div className="text-center font-bold tracking-tight">
              <span className="bg-[#0b1c30] text-white px-2.5 py-0.5 rounded text-[11px] uppercase tracking-wider font-bold">
                COMPROBANTE CIERRE Z #285
              </span>
              <p className="font-label-sm text-[#0b1c30] mt-1 font-bold">
                AUDITORÍA FINAL DE TURNO OPERATIVO
              </p>
            </div>

            <div className="mt-2.5 grid grid-cols-2 gap-y-1 font-body-sm text-[11px] text-[#0b1c30]">
              <div><span className="text-[#565e74]">Caja:</span> <strong className="font-semibold">01 (POS Móvil)</strong></div>
              <div className="text-right"><span className="text-[#565e74]">Turno:</span> <strong className="font-semibold">Tarde (09h-20h)</strong></div>
              <div><span className="text-[#565e74]">Cajero:</span> Wilson Narváez</div>
              <div className="text-right"><span className="text-[#565e74]">Fecha:</span> 24/10/2024</div>
              <div className="col-span-2 text-center text-[#565e74] text-[10px] mt-0.5">
                Generado: 08:30:42 PM • Cierre Inalterable
              </div>
            </div>

            {/* Separator */}
            <div className="my-3 border-b-2 border-dashed border-[#c4c5d5]"></div>

            {/* Ticket Range */}
            <div className="text-[11px] leading-relaxed">
              <div className="flex justify-between">
                <span className="text-[#565e74]">Primer Ticket Emitido:</span>
                <span className="font-bold font-mono">#F-1033 (09:15)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#565e74]">Último Ticket Emitido:</span>
                <span className="font-bold font-mono">#F-1050 (18:15)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#565e74]">Total Transacciones:</span>
                <span className="font-bold">18 ventas</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#565e74]">Notas Crédito (1):</span>
                <span className="text-[#ba1a1a] font-bold">#NC-0042 (-$110.000)</span>
              </div>
            </div>

            {/* Separator */}
            <div className="my-3 border-b-2 border-dashed border-[#c4c5d5]"></div>

            {/* Financial Totals */}
            <div className="space-y-1 text-[11px]">
              <div className="flex justify-between text-[#565e74]">
                <span>Total Ventas Brutas:</span>
                <span>$ 2.955.000 COP</span>
              </div>
              <div className="flex justify-between text-[#ba1a1a] font-semibold">
                <span>Descuentos VIP / Sastrería:</span>
                <span>-$ 110.000 COP</span>
              </div>
              <div className="pt-1 pb-1 my-1 border-y border-[#0b1c30]/20 flex justify-between items-baseline font-bold">
                <span className="text-label-md uppercase tracking-wider text-[#0b1c30]">
                  TOTAL VENTAS NETAS:
                </span>
                <span className="text-headline-md text-[#0b1c30] font-extrabold tracking-tight">
                  $ 2.845.000
                </span>
              </div>
              <div className="flex justify-between text-[#565e74] text-[10px]">
                <span>Base Gravable (19%):</span>
                <span>$ 1.365.546 COP</span>
              </div>
              <div className="flex justify-between text-[#565e74] text-[10px]">
                <span>Total IVA Liquidado (19%):</span>
                <span>$ 259.454 COP</span>
              </div>
              <div className="flex justify-between text-[#565e74] text-[10px]">
                <span>Total Exento / Excluido:</span>
                <span>$ 1.220.000 COP</span>
              </div>
            </div>

            {/* Separator */}
            <div className="my-3 border-b-2 border-dashed border-[#c4c5d5]"></div>

            {/* Multimethod Reconciliation */}
            <div>
              <span className="font-label-sm font-bold text-[#0b1c30] uppercase tracking-wider block mb-1.5">
                CONCILIACIÓN POR MEDIO DE PAGO
              </span>
              <div className="space-y-1.5 text-[11px]">
                <div className="flex justify-between items-center">
                  <span className="text-[#0b1c30]">Efectivo en Ventas (6 tx):</span>
                  <span className="font-bold">$ 845.000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#0b1c30]">Transferencia Nequi QR (6 tx):</span>
                  <span className="font-bold">$ 720.000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#0b1c30]">DaviPlata Móvil (3 tx):</span>
                  <span className="font-bold">$ 380.000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#0b1c30]">Datáfono Redeban (Lote #4892):</span>
                  <span className="font-bold">$ 635.000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#0b1c30]">Bonos &amp; NC (2 redenciones):</span>
                  <span className="font-bold">$ 265.000</span>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="my-3 border-b-2 border-dashed border-[#c4c5d5]"></div>

            {/* Cash Drawer Audit */}
            <div className="bg-[#eff4ff] rounded-xl p-3 border border-[#d3e4fe]/50">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-label-sm font-bold text-[#0b1c30] uppercase tracking-wider">
                  ARQUEO FÍSICO DE CAJA
                </span>
                <span className="px-2 py-0.5 rounded bg-[#00563a] text-white font-label-sm text-[9px] font-bold uppercase">
                  Cuadre 100%
                </span>
              </div>
              <div className="space-y-1 text-[11px] leading-tight">
                <div className="flex justify-between">
                  <span className="text-[#565e74]">Base Inicial Apertura:</span>
                  <span className="font-semibold">$ 200.000</span>
                </div>
                <div className="flex justify-between text-[#00563a] font-semibold">
                  <span>(+) Ventas Efectivo:</span>
                  <span>+$ 845.000</span>
                </div>
                <div className="flex justify-between text-[#ba1a1a] font-semibold">
                  <span>(-) Tintorería Taller (#G-88):</span>
                  <span>-$ 35.000</span>
                </div>
                <div className="pt-1 mt-1 border-t border-[#c4c5d5] flex justify-between font-bold text-[#0b1c30]">
                  <span>(=) Efectivo Teórico:</span>
                  <span>$ 1.010.000</span>
                </div>
                <div className="flex justify-between font-bold text-[#0b1c30]">
                  <span>Efectivo Físico Contado:</span>
                  <span>$ 1.010.000</span>
                </div>
              </div>

              {/* Denomination breakdown */}
              <div className="mt-2 pt-1.5 border-t border-[#c4c5d5]/60 text-[9px] text-[#565e74] leading-tight">
                5x$100k ($500k) | 8x$50k ($400k) | 4x$20k ($80k) | 3x$10k ($30k)
              </div>

              {/* Exact Difference */}
              <div className="mt-2 py-1 px-2.5 rounded-lg bg-[#6ffbbe]/40 flex items-center justify-between text-[#002113] font-bold text-[11px]">
                <span>DIFERENCIA OPERATIVA:</span>
                <span className="text-[#003d27]">$ 0 COP (EXACTO)</span>
              </div>
            </div>

            {/* Barcode & DIAN Audit QR Section */}
            <div className="mt-4 flex flex-col items-center">
              <div className="w-full flex flex-col items-center py-1">
                <svg className="w-48 h-9" viewBox="0 0 190 36">
                  <rect fill="#0b1c30" height="36" width="3" x="0" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="1" x="5" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="4" x="8" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="2" x="15" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="1" x="19" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="3" x="23" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="2" x="29" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="4" x="34" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="1" x="41" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="3" x="44" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="2" x="50" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="1" x="55" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="4" x="58" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="2" x="65" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="3" x="70" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="1" x="76" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="2" x="80" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="4" x="85" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="2" x="92" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="3" x="97" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="1" x="103" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="3" x="107" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="2" x="113" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="4" x="118" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="1" x="125" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="3" x="129" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="2" x="135" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="4" x="140" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="1" x="147" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="3" x="151" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="2" x="157" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="3" x="162" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="1" x="168" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="4" x="172" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="2" x="179" y="0"></rect>
                  <rect fill="#0b1c30" height="36" width="3" x="184" y="0"></rect>
                </svg>
                <span className="font-mono text-[9px] tracking-widest text-[#0b1c30] mt-1 font-bold">
                  *Z-2024-0285-CAJA01*
                </span>
              </div>

              {/* DIAN CUFE Audit QR */}
              <div className="mt-2.5 p-2 bg-[#eff4ff] rounded-xl flex items-center gap-3 w-full border border-[#d3e4fe]/50">
                <svg className="w-14 h-14 shrink-0" fill="#0b1c30" viewBox="0 0 29 29">
                  <path d="M0 0h7v7H0zM2 2v3h3V2zM8 0h1v1H8zM10 0h1v2h-1zM13 0h2v1h-2zM16 0h1v1h-1zM18 0h2v1h-2zM22 0h7v7h-7zM24 2v3h3V2zM0 8h1v2H0zM3 8h1v1H3zM5 8h2v1H5zM8 8h1v2H8zM11 8h2v1h-2zM15 8h1v1h-1zM17 8h1v2h-1zM20 8h1v1h-1zM22 8h1v2h-1zM25 8h1v1h-1zM27 8h2v1h-2zM0 11h2v1H0zM4 11h1v1H4zM6 11h1v2H6zM9 11h1v1H9zM12 11h2v1h-2zM16 11h2v1h-2zM19 11h1v2h-1zM23 11h1v1h-1zM26 11h3v1h-3zM0 14h1v1H0zM2 14h2v1H2zM6 14h1v1H6zM8 14h3v1H8zM13 14h1v1h-1zM15 14h3v1h-3zM20 14h2v1h-2zM24 14h1v1h-1zM27 14h2v1h-2zM0 17h1v1H0zM3 17h1v2H3zM5 17h2v1H5zM8 17h2v1H8zM12 17h1v1h-1zM14 17h2v1h-2zM18 17h1v1h-1zM21 17h2v1h-2zM25 17h1v1h-1zM28 17h1v1h-1zM0 22h7v7H0zM2 24v3h3v-3zM8 22h1v1H8zM10 22h2v1h-2zM13 22h1v2h-1zM16 22h1v1h-1zM19 22h1v1h-1zM22 22h2v1h-2zM25 22h1v1h-1zM27 22h2v1h-2zM8 25h2v1H8zM11 25h1v1h-1zM14 25h1v2h-1zM17 25h2v1h-2zM20 25h1v1h-1zM23 25h3v1h-3zM28 25h1v2h-1zM8 28h1v1H8zM11 28h3v1h-3zM16 28h1v1h-1zM19 28h2v1h-2zM23 28h1v1h-1zM26 28h1v1h-1z"></path>
                </svg>
                <div className="text-left font-body-sm text-[10px] text-[#444653] leading-tight">
                  <span className="font-bold text-[#0b1c30] block">DIAN CUFE AUDIT:</span>
                  SHA-256 Validado<br />
                  Hash: 8bfa92...31c0e<br />
                  Protocolo Sastrería v4.2
                </div>
              </div>
            </div>

            {/* Physical Signatures */}
            <div className="mt-6 pt-2 grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="border-b border-dotted border-[#0b1c30] mb-1 h-7 flex items-end justify-center">
                  <span className="font-serif italic text-[11px] text-[#565e74] opacity-80">
                    Wilson Narváez
                  </span>
                </div>
                <span className="font-label-sm text-[9px] uppercase tracking-wider text-[#565e74] block">
                  Firma Cajero
                </span>
              </div>
              <div>
                <div className="border-b border-dotted border-[#0b1c30] mb-1 h-7 flex items-end justify-center">
                  <span className="font-serif italic text-[11px] text-[#565e74] opacity-80">
                    Supervisor POS
                  </span>
                </div>
                <span className="font-label-sm text-[9px] uppercase tracking-wider text-[#565e74] block">
                  Supervisor / Admin
                </span>
              </div>
            </div>

            {/* Footer Notice */}
            <div className="mt-5 text-center">
              <p className="font-body-sm text-[9px] text-[#565e74] leading-normal">
                *** CIERRE Z DEFINITIVO GENERADO EXITOSAMENTE ***<br />
                Turno bloqueado en base de datos central Narváez POS.<br />
                Copia almacenada en servidor local &amp; respaldo en la nube.
              </p>
            </div>
          </div>

          {/* Bottom Jagged Edge (SVG) */}
          <div className="w-full h-3 overflow-hidden text-white -mt-[1px]">
            <svg className="w-full h-full fill-current rotate-180" preserveAspectRatio="none" viewBox="0 0 370 12">
              <path d="M0,12 L10,0 L20,12 L30,0 L40,12 L50,0 L60,12 L70,0 L80,12 L90,0 L100,12 L110,0 L120,12 L130,0 L140,12 L150,0 L160,12 L170,0 L180,12 L190,0 L200,12 L210,0 L220,12 L230,0 L240,12 L250,0 L260,12 L270,0 L280,12 L290,0 L300,12 L310,0 L320,12 L330,0 L340,12 L350,0 L360,12 L370,0 L370,12 Z"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Hardware Print Configuration Card */}
      <div className="px-4 mt-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-4 border border-[#eff4ff]">
          <div className="flex items-center justify-between">
            <span className="font-label-lg font-bold text-[#0b1c30] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-[#00288e]">
                settings_applications
              </span>
              Configuración de Impresión
            </span>
            <span className="font-label-sm text-[#565e74] bg-[#eff4ff] px-2.5 py-0.5 rounded-full font-bold">
              ESC/POS
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#eff4ff] p-2.5 rounded-xl flex flex-col justify-between border border-[#d3e4fe]/40">
              <span className="font-label-sm text-[#565e74]">Ancho de Tirilla</span>
              <div className="flex items-center gap-1 mt-1.5">
                <button
                  type="button"
                  onClick={() => setPaperWidth('80mm')}
                  className={`flex-1 py-1 text-center font-label-md rounded-lg font-bold transition-all ${
                    paperWidth === '80mm'
                      ? 'bg-[#00288e] text-white shadow-xs'
                      : 'text-[#565e74] hover:text-[#0b1c30]'
                  }`}
                >
                  80 mm
                </button>
                <button
                  type="button"
                  onClick={() => setPaperWidth('58mm')}
                  className={`flex-1 py-1 text-center font-label-md rounded-lg font-bold transition-all ${
                    paperWidth === '58mm'
                      ? 'bg-[#00288e] text-white shadow-xs'
                      : 'text-[#565e74] hover:text-[#0b1c30]'
                  }`}
                >
                  58 mm
                </button>
              </div>
            </div>

            <div className="bg-[#eff4ff] p-2.5 rounded-xl flex flex-col justify-between border border-[#d3e4fe]/40">
              <span className="font-label-sm text-[#565e74]">Corte Automático</span>
              <div className="flex items-center justify-between mt-1.5 px-1">
                <span className="font-label-md text-[#0b1c30] font-semibold">Auto-Cut</span>
                <input
                  type="checkbox"
                  checked={autoCut}
                  onChange={(e) => setAutoCut(e.target.checked)}
                  className="w-4 h-4 accent-[#00288e] rounded"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#565e74] text-[20px]">content_copy</span>
              <div>
                <span className="font-label-md text-[#0b1c30] block font-bold">Juegos de Impresión</span>
                <span className="font-body-sm text-[#565e74]">1 Original (Caja) + 1 Contabilidad</span>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#eff4ff] px-2.5 py-1 rounded-xl border border-[#d3e4fe]/40">
              <button
                type="button"
                onClick={() => setPrintCopies(Math.max(1, printCopies - 1))}
                className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-[#0b1c30] font-bold shadow-xs"
              >
                -
              </button>
              <span className="font-label-md text-[#0b1c30] font-bold px-1.5">{printCopies}</span>
              <button
                type="button"
                onClick={() => setPrintCopies(printCopies + 1)}
                className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-[#0b1c30] font-bold shadow-xs"
              >
                +
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onShowToast('PDF del Cierre Z enviado a contabilidad@narvaez.com.co')}
            className="w-full py-3 px-3 rounded-xl bg-[#eff4ff] text-[#00288e] font-label-md font-bold hover:bg-[#e5eeff] flex items-center justify-center gap-2 transition-colors border border-[#d3e4fe]/50"
          >
            <span className="material-symbols-outlined text-[18px]">forward_to_inbox</span>
            Enviar Copia por Email a Contabilidad (PDF)
          </button>
        </div>
      </div>
    </div>
  );
};
