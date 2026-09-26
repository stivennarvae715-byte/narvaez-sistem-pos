import React from 'react';
import { ScreenId } from '../types';
import { LOGO_URL } from '../mockData';

interface Factura1050ViewProps {
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

export const Factura1050View: React.FC<Factura1050ViewProps> = ({ onNavigate, onShowToast }) => {
  return (
    <div className="flex flex-col w-full pb-28 pt-20 max-w-2xl mx-auto">
      {/* Subheader bar */}
      <div className="px-4 py-2 flex items-center justify-between">
        <button
          onClick={() => onNavigate('nueva-venta')}
          className="w-10 h-10 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#0b1c30] hover:bg-[#e5eeff] transition-transform active:scale-95 shadow-xs"
          type="button"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>

        <div className="flex flex-col items-center">
          <span className="font-label-sm uppercase tracking-wider text-[#565e74]">Comprobante Oficial</span>
          <h1 className="font-headline-md text-[#0b1c30] font-bold tracking-tight">Factura #F-1050</h1>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onShowToast('Imprimiendo tirilla bluetooth en POS-80...')}
            aria-label="Imprimir tirilla"
            className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#00288e] border border-[#eff4ff] hover:bg-[#eff4ff] transition-transform active:scale-95 shadow-xs"
          >
            <span className="material-symbols-outlined text-[20px]">print</span>
          </button>
          <button
            onClick={() => onShowToast('Descargando factura electrónica autorizada por DIAN (PDF)...')}
            aria-label="Descargar PDF"
            className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#00288e] border border-[#eff4ff] hover:bg-[#eff4ff] transition-transform active:scale-95 shadow-xs"
          >
            <span className="material-symbols-outlined text-[20px]">download</span>
          </button>
        </div>
      </div>

      {/* State Pill */}
      <div className="px-4 py-1.5 flex justify-center">
        <div className="inline-flex items-center gap-2 bg-[#00563a] px-3.5 py-1.5 rounded-full text-white shadow-sm">
          <span className="material-symbols-outlined text-[16px] text-[#6ffbbe]">verified</span>
          <span className="font-label-md tracking-wide uppercase font-bold text-xs">Pagada &amp; Conciliada</span>
          <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-ping"></span>
        </div>
      </div>

      <div className="px-4 space-y-3 mt-1">
        {/* WhatsApp Instant Dispatch Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm relative overflow-hidden border border-[#eff4ff]">
          <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-[#4edea3]/15 rounded-full blur-xl pointer-events-none"></div>

          <div className="flex items-start gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#00563a] text-[#6ffbbe] flex items-center justify-center flex-shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[24px]">chat</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-[#565e74] uppercase font-bold tracking-wider">
                  Envío Inmediato
                </span>
                <span className="inline-flex items-center gap-1 font-label-sm text-[#00563a] bg-[#6ffbbe]/30 px-2 py-0.5 rounded-full font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00563a]"></span> Cliente VIP
                </span>
              </div>
              <h2 className="font-headline-md text-[#0b1c30] font-bold truncate mt-0.5">
                Carlos Mario Restrepo
              </h2>
              <p className="font-body-sm text-[#444653] flex items-center gap-1 mt-0.5">
                <span className="material-symbols-outlined text-[14px] text-[#565e74]">phone_iphone</span>{' '}
                +57 312 849 2011
              </p>
            </div>
          </div>

          <div className="mt-3 bg-[#eff4ff] rounded-xl p-3 border border-[#d3e4fe]/50">
            <p className="font-body-sm text-[#444653] italic leading-relaxed">
              “Hola Carlos Mario, adjuntamos tu ticket de compra #F-1050 de Narvaez por valor de $256.500 COP (Bono $110.000 + Nequi $146.500). ¡Gracias por tu compra!”
            </p>
          </div>

          <div className="grid grid-cols-5 gap-2 mt-3">
            <button
              onClick={() => onShowToast('Ticket con desglose combinado enviado a Carlos Mario Restrepo')}
              className="col-span-4 h-12 bg-[#00563a] hover:bg-[#003d27] text-white font-label-lg font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-98"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
              <span>Enviar Ticket por WhatsApp</span>
            </button>
            <button
              onClick={() => onShowToast('Copiando enlace público con QR')}
              aria-label="Compartir Código QR"
              className="col-span-1 h-12 bg-[#eff4ff] hover:bg-[#e5eeff] text-[#0b1c30] rounded-xl flex items-center justify-center transition-transform active:scale-95 shadow-xs"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">qr_code_2</span>
            </button>
          </div>
        </div>

        {/* Luxury Thermal POS Receipt */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden relative border border-[#eff4ff]">
          <div className="h-2 w-full bg-gradient-to-r from-[#00288e] via-[#1e40af] to-[#00288e] flex justify-between overflow-hidden opacity-90"></div>

          <div className="p-5">
            {/* Brand Signature */}
            <div className="flex flex-col items-center text-center pb-3">
              <div className="w-14 h-14 mb-2 rounded-xl bg-[#eff4ff] p-2 flex items-center justify-center shadow-xs">
                <img
                  src={LOGO_URL}
                  alt="Logo Narvaez"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-headline-md text-[#0b1c30] font-extrabold tracking-wider uppercase">
                NARVÁEZ S.A.S.
              </span>
              <span className="font-label-sm text-[#565e74] tracking-widest uppercase font-semibold">
                Moda &amp; Sastrería Masculina
              </span>
              <div className="mt-2 text-center text-[#444653] font-body-sm space-y-0.5">
                <p className="font-semibold text-[#0b1c30]">NIT 901.482.391-4 • Régimen Común</p>
                <p>Carrera 43A # 1sur-220 • El Poblado, Medellín</p>
                <p className="text-[11px] text-[#565e74]">Res. DIAN Nº 18764029193 Fecha: 2024/01/15 Habilitada</p>
              </div>
            </div>

            <div className="w-full border-b border-dashed border-[#c4c5d5] my-2"></div>

            {/* Metadata Grid */}
            <div className="bg-[#eff4ff] rounded-xl p-3 my-2 text-[#0b1c30]">
              <div className="grid grid-cols-2 gap-y-2">
                <div>
                  <span className="font-label-sm text-[#565e74] block uppercase">Factura POS</span>
                  <span className="font-label-lg font-bold text-[#00288e]">
                    #F-1050 <span className="font-body-sm text-[#565e74] font-normal">(#00285)</span>
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-label-sm text-[#565e74] block uppercase">Fecha / Hora</span>
                  <span className="font-label-md font-medium text-[#0b1c30]">24 Oct 2024, 06:15 PM</span>
                </div>
                <div>
                  <span className="font-label-sm text-[#565e74] block uppercase">Cajero • Terminal</span>
                  <span className="font-label-md text-[#0b1c30]">Wilson N. (Caja 01)</span>
                </div>
                <div className="text-right">
                  <span className="font-label-sm text-[#565e74] block uppercase">Sede</span>
                  <span className="font-label-md text-[#0b1c30]">Principal Poblado</span>
                </div>
              </div>

              {/* Customer Capsule */}
              <div className="mt-2 pt-2 border-t border-[#d3e4fe] flex items-center justify-between">
                <div className="min-w-0 pr-2">
                  <span className="font-label-sm text-[#565e74] uppercase block">Cliente</span>
                  <p className="font-label-md font-bold text-[#0b1c30] truncate">Carlos Mario Restrepo</p>
                  <p className="font-body-sm text-[#565e74]">C.C. 1.020.455.890</p>
                </div>
                <span className="bg-[#dde1ff] text-[#001453] font-label-sm font-bold px-2.5 py-1 rounded-md text-right uppercase tracking-wider flex-shrink-0">
                  VIP Restrepo (-5%)
                </span>
              </div>
            </div>

            {/* Purchased Items */}
            <div className="py-2">
              <div className="flex items-center justify-between mb-2">
                <span className="font-label-sm uppercase font-bold text-[#565e74] tracking-wider">
                  Artículos Adquiridos (2)
                </span>
                <span className="font-label-sm uppercase font-bold text-[#565e74]">Valor</span>
              </div>

              {/* Item 1 */}
              <div className="py-2 flex items-start justify-between gap-3 border-b border-[#f8f9ff]">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#dde1ff] text-[#00288e] font-label-sm font-bold flex items-center justify-center flex-shrink-0">
                      1x
                    </span>
                    <span className="font-label-lg font-bold text-[#0b1c30] truncate">
                      Blazer Lino Italiano Marino
                    </span>
                  </div>
                  <p className="font-body-sm text-[#565e74] mt-0.5 pl-6">
                    Talla: 40 • SKU: BLZ-LIN-40 • Colección Sartoria
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="font-label-lg font-bold text-[#0b1c30]">$185.000</span>
                  <span className="font-body-sm text-[#565e74] block">COP</span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="py-2 flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#dde1ff] text-[#00288e] font-label-sm font-bold flex items-center justify-center flex-shrink-0">
                      1x
                    </span>
                    <span className="font-label-lg font-bold text-[#0b1c30] truncate">
                      Camisa Formal Cuello Francés
                    </span>
                  </div>
                  <p className="font-body-sm text-[#565e74] mt-0.5 pl-6">
                    Talla: L • SKU: CAM-FRN-02 • Blanca 100% Algodón
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="font-label-lg font-bold text-[#0b1c30]">$85.000</span>
                  <span className="font-body-sm text-[#565e74] block">COP</span>
                </div>
              </div>
            </div>

            {/* Calculations & VIP Discount */}
            <div className="bg-[#eff4ff] rounded-xl p-3 space-y-1.5 my-2 border border-[#d3e4fe]/50">
              <div className="flex justify-between font-body-md text-[#0b1c30]">
                <span>Subtotal Bruto Prendas</span>
                <span>$270.000 COP</span>
              </div>
              <div className="flex justify-between font-body-md text-[#00563a] font-semibold">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">stars</span>
                  Descuento Fidelidad VIP (-5%)
                </span>
                <span>-$13.500 COP</span>
              </div>
              <div className="pt-2 flex justify-between items-baseline text-[#0b1c30] font-headline-md font-bold border-t border-[#d3e4fe]">
                <span>Total Venta Neta</span>
                <span className="text-[#00288e] font-metric-display-mobile font-extrabold">
                  $256.500 <span className="font-label-sm font-normal text-[#565e74]">COP</span>
                </span>
              </div>
            </div>

            {/* Split Payment Highlight: BONO REDIMIDO + NEQUI */}
            <div className="mt-3 pt-2">
              <div className="flex items-center gap-1.5 mb-2">
                <span className="material-symbols-outlined text-[18px] text-[#00288e]">
                  account_balance_wallet
                </span>
                <span className="font-label-sm uppercase font-bold text-[#565e74] tracking-wider">
                  Desglose de Liquidación y Pago Combinado
                </span>
              </div>

              <div className="space-y-2">
                {/* Method 1: Bono */}
                <div className="bg-[#e5eeff] rounded-xl p-3 relative overflow-hidden border border-[#d3e4fe]">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#00563a]/15 text-[#00563a] flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-[18px]">card_giftcard</span>
                      </div>
                      <div>
                        <span className="font-label-lg font-bold text-[#0b1c30] block">
                          Bono Digital / Saldo a Favor
                        </span>
                        <span className="font-body-sm text-[#565e74] font-mono">Serial: BN-2024-8849</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-headline-md font-extrabold text-[#00563a]">-$110.000</span>
                      <span className="font-label-sm text-[#565e74] block">COP</span>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 bg-white rounded-lg px-2.5 py-1.5 flex items-center justify-between text-[11px] text-[#444653]">
                    <span>Vinculado a Nota Crédito <strong className="text-[#0b1c30]">NC-0042</strong></span>
                    <span className="font-bold text-[#00563a] flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">check_circle</span> 100% Redimido (Saldo: $0)
                    </span>
                  </div>
                </div>

                {/* Method 2: Nequi */}
                <div className="bg-[#e5eeff] rounded-xl p-3 relative overflow-hidden border border-[#d3e4fe]">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#00288e] text-white flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-[18px]">payments</span>
                      </div>
                      <div>
                        <span className="font-label-lg font-bold text-[#0b1c30] block">
                          Nequi (Billetera Digital)
                        </span>
                        <span className="font-body-sm text-[#565e74] font-mono">Ref #NQ-984321</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-headline-md font-extrabold text-[#00288e]">$146.500</span>
                      <span className="font-label-sm text-[#565e74] block">COP</span>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 bg-white rounded-lg px-2.5 py-1.5 flex items-center justify-between text-[11px] text-[#444653]">
                    <span>Celular Origen: <strong className="text-[#0b1c30]">312***2011</strong></span>
                    <span className="font-bold text-[#00288e] flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">bolt</span> Aprobación Bancaria Inmediata
                    </span>
                  </div>
                </div>
              </div>

              {/* Total Balance Check */}
              <div className="flex justify-between items-center bg-[#d3e4fe] px-3.5 py-2.5 rounded-xl mt-2.5">
                <span className="font-label-md font-bold text-[#0b1c30]">Total Liquidado en Caja</span>
                <div className="text-right">
                  <span className="font-label-lg font-extrabold text-[#0b1c30]">$256.500 COP</span>
                  <span className="font-label-sm text-[#00563a] font-bold block">Saldo Pendiente: $0 COP</span>
                </div>
              </div>
            </div>

            {/* DIAN Tax Ledger Matrix */}
            <div className="bg-[#eff4ff] rounded-xl p-3 my-3 text-[#565e74] border border-[#d3e4fe]/50">
              <div className="flex justify-between items-center mb-1">
                <span className="font-label-sm uppercase font-bold tracking-wider">
                  Discriminación Fiscal IVA DIAN
                </span>
                <span className="font-label-sm font-mono font-bold text-[#0b1c30]">Tasa 19%</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-1 text-[#444653]">
                <div>
                  <span>Base Gravable:</span>
                  <span className="font-bold block text-[#0b1c30]">$123.109 COP</span>
                </div>
                <div className="text-right">
                  <span>Impuesto IVA (19%):</span>
                  <span className="font-bold block text-[#0b1c30]">$23.391 COP</span>
                </div>
              </div>
            </div>

            {/* Verification Elements: Fiscal QR Code & Barcode */}
            <div className="flex flex-col items-center justify-center pt-2 pb-1 space-y-2">
              <div className="w-full flex items-center justify-around gap-2 bg-[#eff4ff] p-3 rounded-xl border border-[#d3e4fe]/40">
                <div className="flex flex-col items-center">
                  <svg className="w-20 h-20 text-[#0b1c30]" fill="currentColor" viewBox="0 0 100 100">
                    <rect fill="currentColor" height="30" rx="3" width="30" x="0" y="0"></rect>
                    <rect fill="#eff4ff" height="20" rx="2" width="20" x="5" y="5"></rect>
                    <rect fill="currentColor" height="10" width="10" x="10" y="10"></rect>
                    <rect fill="currentColor" height="30" rx="3" width="30" x="70" y="0"></rect>
                    <rect fill="#eff4ff" height="20" rx="2" width="20" x="75" y="5"></rect>
                    <rect fill="currentColor" height="10" width="10" x="80" y="10"></rect>
                    <rect fill="currentColor" height="30" rx="3" width="30" x="0" y="70"></rect>
                    <rect fill="#eff4ff" height="20" rx="2" width="20" x="5" y="75"></rect>
                    <rect fill="currentColor" height="10" width="10" x="10" y="80"></rect>
                    <rect fill="currentColor" height="8" rx="1" width="20" x="40" y="10"></rect>
                    <rect fill="currentColor" height="12" rx="1" width="12" x="40" y="25"></rect>
                    <rect fill="currentColor" height="6" width="6" x="60" y="25"></rect>
                    <rect fill="currentColor" height="18" rx="2" width="18" x="40" y="45"></rect>
                    <rect fill="currentColor" height="10" rx="1" width="25" x="65" y="45"></rect>
                    <rect fill="currentColor" height="25" rx="1" width="10" x="40" y="70"></rect>
                    <rect fill="currentColor" height="8" rx="1" width="35" x="55" y="70"></rect>
                    <rect fill="currentColor" height="12" rx="1" width="20" x="70" y="82"></rect>
                  </svg>
                  <span className="font-label-sm text-[#565e74] uppercase font-mono mt-1 font-bold">
                    Validación DIAN
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <svg className="h-14 w-36 text-[#0b1c30]" fill="currentColor" viewBox="0 0 180 50">
                    <rect height="42" width="4" x="0" y="0"></rect>
                    <rect height="42" width="2" x="7" y="0"></rect>
                    <rect height="42" width="6" x="12" y="0"></rect>
                    <rect height="42" width="2" x="22" y="0"></rect>
                    <rect height="42" width="5" x="27" y="0"></rect>
                    <rect height="42" width="3" x="36" y="0"></rect>
                    <rect height="42" width="7" x="42" y="0"></rect>
                    <rect height="42" width="2" x="52" y="0"></rect>
                    <rect height="42" width="6" x="57" y="0"></rect>
                    <rect height="42" width="4" x="66" y="0"></rect>
                    <rect height="42" width="3" x="73" y="0"></rect>
                    <rect height="42" width="5" x="79" y="0"></rect>
                    <rect height="42" width="2" x="88" y="0"></rect>
                    <rect height="42" width="7" x="94" y="0"></rect>
                    <rect height="42" width="3" x="104" y="0"></rect>
                    <rect height="42" width="5" x="110" y="0"></rect>
                    <rect height="42" width="2" x="118" y="0"></rect>
                    <rect height="42" width="7" x="123" y="0"></rect>
                    <rect height="42" width="4" x="133" y="0"></rect>
                    <rect height="42" width="2" x="140" y="0"></rect>
                    <rect height="42" width="6" x="145" y="0"></rect>
                    <rect height="42" width="3" x="154" y="0"></rect>
                    <rect height="42" width="5" x="160" y="0"></rect>
                    <rect height="42" width="3" x="168" y="0"></rect>
                    <rect height="42" width="4" x="174" y="0"></rect>
                  </svg>
                  <span className="font-label-sm font-mono text-[#0b1c30] tracking-widest mt-1 font-bold">
                    *F1050-00285-2024*
                  </span>
                </div>
              </div>

              <div className="text-center px-3 pt-2">
                <p className="font-body-sm text-[#565e74] leading-snug">
                  Prendas confeccionadas con estándares de sastrería italiana. Cambios y garantías válidos por 30 días con este comprobante. Medellín, Colombia.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Jagged perforation */}
          <div className="h-3 w-full bg-[#eff4ff] flex items-center justify-around opacity-60">
            {[...Array(14)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-[#f8f9ff]"></div>
            ))}
          </div>
        </div>

        {/* Inventory Kardex & Ledger Audit Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#eff4ff]">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-[20px] text-[#00563a]">inventory</span>
            <h3 className="font-headline-md text-[#0b1c30] font-bold">
              Auditoría &amp; Kardex Automático
            </h3>
          </div>

          <div className="space-y-2">
            <div className="flex items-start gap-2.5 p-3 bg-[#eff4ff] rounded-xl border border-[#d3e4fe]/40">
              <span className="material-symbols-outlined text-[18px] text-[#00563a] mt-0.5">check</span>
              <div className="min-w-0 flex-1">
                <span className="font-label-md font-bold text-[#0b1c30] block">
                  Descargo de Inventario Confirmado
                </span>
                <span className="font-body-sm text-[#565e74]">
                  Salida registrada: -1 Blazer Lino (T-40) y -1 Camisa Francés (T-L) de Bodega Principal Medellín.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 bg-[#eff4ff] rounded-xl border border-[#d3e4fe]/40">
              <span className="material-symbols-outlined text-[18px] text-[#00288e] mt-0.5">lock_reset</span>
              <div className="min-w-0 flex-1">
                <span className="font-label-md font-bold text-[#0b1c30] block">
                  Bono BN-2024-8849 Liquidado
                </span>
                <span className="font-body-sm text-[#565e74]">
                  Estado cambiado a: <strong className="text-[#0b1c30]">CANCELADO / REDIMIDO</strong> en base de datos central.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Action Center */}
        <div className="pt-2 pb-4 space-y-2.5">
          <button
            onClick={() => {
              onNavigate('nueva-venta');
              onShowToast('Iniciando nueva venta limpia en Caja 01');
            }}
            className="w-full h-14 bg-[#00288e] hover:bg-[#1e40af] text-white font-headline-md font-bold rounded-2xl flex items-center justify-center gap-2.5 shadow-lg shadow-[#00288e]/25 transition-transform active:scale-98"
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">add_shopping_cart</span>
            <span>Comenzar Nueva Venta POS</span>
          </button>

          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => onNavigate('cierre-z')}
              className="h-12 bg-[#eff4ff] hover:bg-[#e5eeff] text-[#0b1c30] font-label-lg font-bold rounded-2xl flex items-center justify-center gap-2 transition-transform active:scale-98 shadow-xs"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px] text-[#565e74]">receipt_long</span>
              <span>Ver Cierre Z</span>
            </button>

            <button
              onClick={() => onShowToast('Imprimiendo tirilla en POS-80 Bluetooth...')}
              className="h-12 bg-[#eff4ff] hover:bg-[#e5eeff] text-[#00288e] font-label-lg font-bold rounded-2xl flex items-center justify-center gap-2 transition-transform active:scale-98 shadow-xs"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">bluetooth</span>
              <span>Imprimir Tirilla POS</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
