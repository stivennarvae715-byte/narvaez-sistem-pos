import React, { useState } from 'react';
import { ScreenId, StoreCreditVoucher } from '../types';

interface BonoDigitalViewProps {
  voucher: StoreCreditVoucher;
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

export const BonoDigitalView: React.FC<BonoDigitalViewProps> = ({
  voucher,
  onNavigate,
  onShowToast
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(voucher.code);
    setCopied(true);
    onShowToast(`Código ${voucher.code} copiado al portapapeles`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col w-full px-4 pb-28 pt-20 max-w-2xl mx-auto space-y-4">
      {/* Subheader bar */}
      <div className="flex flex-col gap-1.5 pt-1">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('cambio-devolucion')}
            className="inline-flex items-center gap-1.5 text-[#565e74] hover:text-[#00288e] transition-colors py-1"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            <span className="font-label-md font-semibold">Devolución #NC-0042</span>
          </button>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6ffbbe] text-[#002113]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00563a] animate-pulse"></span>
            <span className="font-label-sm font-bold">Nota Crédito Activa</span>
          </div>
        </div>

        <div className="flex items-baseline justify-between mt-1">
          <div>
            <h1 className="font-headline-lg text-[#0b1c30]">Bono Digital de Saldo</h1>
            <p className="font-body-sm text-[#565e74]">Crédito oficial redimible en tiendas y ventas asistidas</p>
          </div>
          <span className="font-label-sm text-[#00288e] font-bold uppercase bg-[#e5eeff] px-2.5 py-1 rounded-lg">
            Caja 01
          </span>
        </div>
      </div>

      {/* Luxury Sartorial Store Credit Voucher Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#172554] text-white p-5 shadow-2xl shadow-[#00288e]/15 border border-slate-700/50">
        {/* Glow ambient effects */}
        <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-[#b8c4ff]/10 blur-2xl pointer-events-none"></div>
        <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-[#4edea3]/10 blur-2xl pointer-events-none"></div>

        {/* Card header */}
        <div className="relative z-10 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/15">
              <span className="font-headline-md font-extrabold tracking-tighter text-white">N</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm uppercase tracking-widest text-slate-300 font-bold">
                Narvaez Sartorial
              </span>
              <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#6ffbbe] font-semibold">
                Store Credit Voucher
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-slate-200 border border-white/10">
            <span className="material-symbols-outlined text-[15px] text-[#6ffbbe]">verified</span>
            <span className="font-label-sm text-[11px] tracking-wide">Garantía Narvaez</span>
          </div>
        </div>

        {/* Balance & Serial */}
        <div className="relative z-10 my-5 flex flex-col">
          <span className="font-label-sm uppercase tracking-wider text-slate-400 font-semibold">
            Saldo a Favor Disponible
          </span>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="font-metric-display text-white tracking-tight font-extrabold">
              ${voucher.amount.toLocaleString('es-CO')}
            </span>
            <span className="font-headline-md text-slate-300 font-semibold">COP</span>
          </div>

          <div className="mt-4 flex items-center justify-between bg-black/35 backdrop-blur-md rounded-2xl px-3.5 py-2.5 border border-white/10">
            <div className="flex flex-col">
              <span className="font-label-sm text-[9px] text-slate-400 uppercase tracking-widest font-semibold">
                Código Único de Redención
              </span>
              <span className="font-mono text-body-lg font-bold tracking-widest text-white">
                {voucher.code}
              </span>
            </div>
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 active:scale-95 text-white px-3 py-1.5 rounded-xl transition-all text-label-sm font-label-sm font-semibold shadow-xs"
            >
              <span className="material-symbols-outlined text-[16px]">
                {copied ? 'check' : 'content_copy'}
              </span>
              <span>{copied ? 'Copiado' : 'Copiar'}</span>
            </button>
          </div>
        </div>

        {/* Card footer info */}
        <div className="relative z-10 pt-2 flex items-end justify-between border-t border-white/10 bg-white/5 -mx-5 -mb-5 px-5 py-3">
          <div className="flex flex-col min-w-0">
            <span className="font-label-sm text-[9px] uppercase tracking-wider text-slate-400">Titular Acreditado</span>
            <span className="font-label-md text-white font-bold truncate">{voucher.clientName}</span>
            <span className="font-body-sm text-[11px] text-slate-300">
              C.C. {voucher.clientDoc} • <span className="text-[#6ffbbe] font-semibold">VIP</span>
            </span>
          </div>

          <div className="flex flex-col items-end flex-shrink-0">
            <span className="font-label-sm text-[9px] uppercase tracking-wider text-slate-400">Vigencia 60 Días</span>
            <span className="font-label-md text-white font-medium">Vence: {voucher.expirationDate}</span>
            <span className="font-label-sm text-[10px] text-emerald-300 font-bold">100% Sin uso</span>
          </div>
        </div>
      </div>

      {/* Módulo de Redención en Caja */}
      <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-3 border border-[#eff4ff]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#00288e] text-[20px]">qr_code_scanner</span>
            <span className="font-label-md text-[#0b1c30] font-bold">Redención en Caja</span>
          </div>
          <div className="flex items-center gap-1 text-[#00563a]">
            <span className="material-symbols-outlined text-[15px]">lock</span>
            <span className="font-label-sm font-semibold">Token Encriptado</span>
          </div>
        </div>

        <div className="bg-[#eff4ff] rounded-2xl p-4 flex flex-col items-center justify-center gap-2.5 border border-[#d3e4fe]/40">
          <div className="w-full flex flex-col items-center bg-white p-3.5 rounded-xl shadow-xs border border-[#eff4ff]">
            {/* SVG Barcode */}
            <svg className="w-full h-12" preserveAspectRatio="none" viewBox="0 0 240 48">
              <rect fill="#0f172a" height="48" width="3" x="0" y="0"></rect>
              <rect fill="#0f172a" height="48" width="1.5" x="5" y="0"></rect>
              <rect fill="#0f172a" height="48" width="4" x="9" y="0"></rect>
              <rect fill="#0f172a" height="48" width="2" x="15" y="0"></rect>
              <rect fill="#0f172a" height="48" width="1" x="19" y="0"></rect>
              <rect fill="#0f172a" height="48" width="5" x="23" y="0"></rect>
              <rect fill="#0f172a" height="48" width="2" x="31" y="0"></rect>
              <rect fill="#0f172a" height="48" width="3" x="35" y="0"></rect>
              <rect fill="#0f172a" height="48" width="1" x="41" y="0"></rect>
              <rect fill="#0f172a" height="48" width="4.5" x="45" y="0"></rect>
              <rect fill="#0f172a" height="48" width="2" x="52" y="0"></rect>
              <rect fill="#0f172a" height="48" width="3" x="57" y="0"></rect>
              <rect fill="#0f172a" height="48" width="1.5" x="63" y="0"></rect>
              <rect fill="#0f172a" height="48" width="5" x="67" y="0"></rect>
              <rect fill="#0f172a" height="48" width="2" x="75" y="0"></rect>
              <rect fill="#0f172a" height="48" width="4" x="79" y="0"></rect>
              <rect fill="#0f172a" height="48" width="1" x="86" y="0"></rect>
              <rect fill="#0f172a" height="48" width="3.5" x="90" y="0"></rect>
              <rect fill="#0f172a" height="48" width="2" x="96" y="0"></rect>
              <rect fill="#0f172a" height="48" width="4" x="101" y="0"></rect>
              <rect fill="#0f172a" height="48" width="1.5" x="108" y="0"></rect>
              <rect fill="#0f172a" height="48" width="3" x="112" y="0"></rect>
              <rect fill="#0f172a" height="48" width="5" x="118" y="0"></rect>
              <rect fill="#0f172a" height="48" width="2" x="126" y="0"></rect>
              <rect fill="#0f172a" height="48" width="3.5" x="131" y="0"></rect>
              <rect fill="#0f172a" height="48" width="1" x="137" y="0"></rect>
              <rect fill="#0f172a" height="48" width="4" x="141" y="0"></rect>
              <rect fill="#0f172a" height="48" width="2" x="148" y="0"></rect>
              <rect fill="#0f172a" height="48" width="5" x="153" y="0"></rect>
              <rect fill="#0f172a" height="48" width="1.5" x="161" y="0"></rect>
              <rect fill="#0f172a" height="48" width="3" x="165" y="0"></rect>
              <rect fill="#0f172a" height="48" width="4.5" x="171" y="0"></rect>
              <rect fill="#0f172a" height="48" width="2" x="178" y="0"></rect>
              <rect fill="#0f172a" height="48" width="1" x="183" y="0"></rect>
              <rect fill="#0f172a" height="48" width="3" x="187" y="0"></rect>
              <rect fill="#0f172a" height="48" width="5" x="193" y="0"></rect>
              <rect fill="#0f172a" height="48" width="2" x="201" y="0"></rect>
              <rect fill="#0f172a" height="48" width="4" x="206" y="0"></rect>
              <rect fill="#0f172a" height="48" width="1.5" x="213" y="0"></rect>
              <rect fill="#0f172a" height="48" width="3" x="217" y="0"></rect>
              <rect fill="#0f172a" height="48" width="2" x="223" y="0"></rect>
              <rect fill="#0f172a" height="48" width="4.5" x="228" y="0"></rect>
              <rect fill="#0f172a" height="48" width="2" x="235" y="0"></rect>
            </svg>
            <span className="font-mono text-label-sm text-[#0b1c30] tracking-wider mt-1 font-bold">
              *BN-8849-110K*
            </span>
          </div>

          <p className="font-body-sm text-[12px] text-center text-[#444653]">
            Pase el lector óptico de mostrador o ingrese el serial en <span className="font-semibold text-[#00288e]">Nueva Venta</span> para aplicar descuento directo al subtotal.
          </p>
        </div>
      </div>

      {/* Entrega Inmediata al Cliente */}
      <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-2.5 border border-[#eff4ff]">
        <span className="font-label-md text-[#0b1c30] font-bold">Entrega Inmediata al Cliente</span>

        <button
          onClick={() => onShowToast('Voucher digital enviado por WhatsApp a Carlos Mario Restrepo')}
          className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-[#6ffbbe] text-[#002113] active:scale-[0.99] transition-transform shadow-xs"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#003d27] text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">chat</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-label-md font-bold">Enviar Voucher por WhatsApp</span>
              <span className="font-body-sm text-[12px] opacity-85">+57 312 849 2011 (Celular Registrado)</span>
            </div>
          </div>
          <span className="material-symbols-outlined text-[20px]">send</span>
        </button>

        <div className="grid grid-cols-2 gap-2 mt-1">
          <button
            onClick={() => onShowToast('Imprimiendo voucher en tirilla térmica 80mm...')}
            className="flex items-center justify-center gap-2 py-3 px-2 rounded-xl bg-[#eff4ff] text-[#0b1c30] active:bg-[#e5eeff] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px] text-[#565e74]">print</span>
            <span className="font-label-sm font-semibold">Tirilla POS 80mm</span>
          </button>
          <button
            onClick={() => onShowToast('Descargando voucher digital en PDF...')}
            className="flex items-center justify-center gap-2 py-3 px-2 rounded-xl bg-[#eff4ff] text-[#0b1c30] active:bg-[#e5eeff] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px] text-[#565e74]">share</span>
            <span className="font-label-sm font-semibold">Descargar PDF</span>
          </button>
        </div>
      </div>

      {/* Trazabilidad Legal DIAN & Kardex */}
      <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-3 border border-[#eff4ff]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#565e74] text-[20px]">history_edu</span>
            <span className="font-label-md text-[#0b1c30] font-bold">Trazabilidad &amp; Respaldo DIAN</span>
          </div>
          <span className="font-label-sm text-[#565e74] bg-[#eff4ff] px-2 py-0.5 rounded-lg">
            Auditoría POS
          </span>
        </div>

        <div className="flex flex-col gap-2 text-[#444653] font-body-sm text-[13px]">
          <div className="flex items-center justify-between py-1 border-b border-[#eff4ff]">
            <span className="text-[#565e74]">Factura Original:</span>
            <span className="font-semibold text-[#0b1c30]">{voucher.originalInvoice}</span>
          </div>
          <div className="flex items-center justify-between py-1 border-b border-[#eff4ff]">
            <span className="text-[#565e74]">Documento Legal DIAN:</span>
            <span className="font-semibold text-[#0b1c30] font-mono">Nota Crédito {voucher.creditNote}</span>
          </div>
          <div className="flex items-start justify-between py-1 border-b border-[#eff4ff]">
            <span className="text-[#565e74]">Prenda en Devolución:</span>
            <div className="flex flex-col items-end">
              <span className="font-semibold text-[#0b1c30]">Jean Slim Fit Narvaez T-32</span>
              <span className="text-[11px] text-[#00563a] font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] inline-block"></span>
                Reingresado a Kardex Bodega
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between py-1">
            <span className="text-[#565e74]">Cajero Responsable:</span>
            <span className="font-semibold text-[#0b1c30]">Wilson N. (Poblado - C-01)</span>
          </div>
        </div>

        <div className="bg-[#eff4ff] p-2.5 rounded-xl flex items-start gap-2 mt-1 border border-[#d3e4fe]/50">
          <span className="material-symbols-outlined text-[#565e74] text-[16px] mt-0.5">info</span>
          <p className="font-body-sm text-[11px] text-[#565e74] leading-tight">
            Válido por 60 días calendario a partir del 24 de Octubre de 2024. Redimible parcial o totalmente en cualquier sede física Narvaez o canal digital. No reembolsable en efectivo.
          </p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col gap-2 pt-2">
        <button
          onClick={() => {
            onNavigate('nueva-venta');
            onShowToast(`Bono ${voucher.code} ($110.000 COP) cargado a Nueva Venta`);
          }}
          className="w-full h-14 rounded-2xl bg-[#00288e] text-white font-label-lg font-bold shadow-md shadow-[#00288e]/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 hover:bg-[#1e40af]"
        >
          <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
          <span>Aplicar a Nueva Venta Inmediata</span>
        </button>

        <button
          onClick={() => onNavigate('dashboard')}
          className="w-full py-3.5 px-4 rounded-2xl bg-[#eff4ff] text-[#0b1c30] font-label-md font-semibold active:bg-[#e5eeff] transition-colors text-center"
        >
          Finalizar y Volver a Caja
        </button>
      </div>
    </div>
  );
};
