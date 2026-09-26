import React from 'react';
import { ScreenId } from '../types';
import { LOGO_URL } from '../mockData';

interface Factura1049ViewProps {
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

export const Factura1049View: React.FC<Factura1049ViewProps> = ({ onNavigate, onShowToast }) => {
  return (
    <div className="flex flex-col w-full pb-28 pt-20 max-w-2xl mx-auto">
      {/* Subheader bar */}
      <div className="px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2.5 min-w-0">
          <button
            onClick={() => onNavigate('dashboard')}
            aria-label="Volver"
            className="w-10 h-10 rounded-xl bg-[#eff4ff] text-[#0b1c30] flex items-center justify-center active:scale-95 transition-transform shadow-xs"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-headline-md text-[#0b1c30] font-bold truncate">Factura Digital #F-1049</span>
              <span className="bg-[#6ffbbe] text-[#002113] px-2 py-0.5 rounded-full font-label-sm uppercase font-bold tracking-wide">
                Pagada
              </span>
            </div>
            <span className="font-label-sm text-[#565e74] truncate">
              Orden #00284 • Caja 01 • Datafono Local
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          <button
            onClick={() => onShowToast('Enviando factura a impresora térmica Bluetooth (POS-80)...')}
            className="w-10 h-10 rounded-xl bg-white text-[#00288e] flex items-center justify-center shadow-xs border border-[#eff4ff] active:scale-90 transition-transform"
            title="Imprimir ticket térmico"
          >
            <span className="material-symbols-outlined text-[20px]">print</span>
          </button>
          <button
            onClick={() => onShowToast('Descargando factura electrónica autorizada por DIAN (PDF)...')}
            className="w-10 h-10 rounded-xl bg-white text-[#565e74] flex items-center justify-center shadow-xs border border-[#eff4ff] active:scale-90 transition-transform"
            title="Descargar PDF"
          >
            <span className="material-symbols-outlined text-[20px]">download</span>
          </button>
        </div>
      </div>

      {/* Envío Inmediato WhatsApp Banner */}
      <div className="px-4 py-2">
        <div className="bg-gradient-to-br from-[#00563a] via-[#004830] to-[#1e40af] text-white rounded-2xl p-4 shadow-md relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-[#4edea3]/10 pointer-events-none blur-xl"></div>
          
          <div className="flex items-center justify-between mb-3 relative z-10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#6ffbbe] text-[#002113] flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-[22px]">chat</span>
              </div>
              <div>
                <span className="font-headline-md text-[15px] font-bold block leading-tight">
                  Envío Inmediato WhatsApp
                </span>
                <span className="font-label-sm text-[#3fd298]">Comprobante ecológico y directo</span>
              </div>
            </div>
            <span className="bg-white/20 backdrop-blur-sm px-2.5 py-0.5 rounded-full font-label-sm text-[#6ffbbe] font-semibold">
              VIP Express
            </span>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 mb-2.5 flex flex-col gap-1 relative z-10">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-[#3fd298] uppercase tracking-wider">Cliente Destino</span>
              <span className="font-label-sm text-[#4edea3] font-semibold">Carlos Mario Restrepo</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#6ffbbe]">call</span>
              <span className="font-body-md font-semibold tracking-wide">+57 312 849 2011</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 mb-3 text-white/90 text-body-sm relative z-10">
            <p className="italic">
              "Hola Carlos, adjuntamos tu factura digital de Narvaez #F-1049 por $175.000 COP. ¡Gracias por tu compra!"
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 relative z-10">
            <button
              onClick={() => onShowToast('Ticket enviado por WhatsApp a Carlos Mario Restrepo (+57 312 849 2011)')}
              className="flex-1 h-12 rounded-xl bg-[#6ffbbe] text-[#002113] font-label-lg font-bold flex items-center justify-center gap-2 active:scale-98 transition-transform shadow-md"
            >
              <span className="material-symbols-outlined text-[20px]">send</span>
              <span>Enviar Ticket por WhatsApp</span>
            </button>
            <button
              onClick={() => onShowToast('Copiando enlace público de comprobante...')}
              className="h-12 px-4 rounded-xl bg-white/20 hover:bg-white/30 text-white font-label-md flex items-center justify-center gap-1.5 active:scale-98 transition-transform"
            >
              <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
              <span>Compartir</span>
            </button>
          </div>
        </div>
      </div>

      {/* Luxury Sartorial POS Digital Receipt */}
      <div className="px-4 py-2">
        <div className="relative bg-white rounded-2xl shadow-lg p-5 overflow-hidden border border-[#eff4ff]">
          {/* Header */}
          <div className="flex flex-col items-center text-center pb-3">
            <div className="h-14 w-14 mb-2 rounded-xl bg-[#eff4ff] p-2 flex items-center justify-center shadow-xs">
              <img
                src={LOGO_URL}
                alt="NARVAEZ Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-headline-lg font-extrabold tracking-tight text-[#00288e]">
              NARVAEZ S.A.S.
            </span>
            <span className="font-label-sm text-[#565e74] tracking-widest uppercase">
              Moda &amp; Sastrería Masculina
            </span>
            <span className="font-body-sm text-[#444653] font-semibold mt-1">
              NIT: 901.482.391-4
            </span>
            <span className="font-body-sm text-[#565e74]">
              Carrera 43A # 1sur-220, El Poblado, Medellín
            </span>
            <span className="font-body-sm text-[#565e74]">
              Tel: +57 (604) 448 9200 • ventas@narvaez.com.co
            </span>
            <span className="font-label-sm text-[#757684] mt-1">
              IVA Régimen Común • Res. DIAN #187640283921
            </span>
          </div>

          <div className="w-full border-b border-dashed border-[#c4c5d5] my-2"></div>

          {/* POS Meta Grid */}
          <div className="grid grid-cols-2 gap-2 py-1 font-body-sm">
            <div className="flex flex-col">
              <span className="font-label-sm text-[#565e74] uppercase">Factura POS</span>
              <span className="font-label-lg font-bold text-[#00288e]">#F-1049</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="font-label-sm text-[#565e74] uppercase">Fecha y Hora</span>
              <span className="font-body-sm font-semibold text-[#0b1c30]">24 Oct 2024, 05:42 PM</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-[#565e74] uppercase">Cajero</span>
              <span className="font-body-sm font-medium text-[#0b1c30]">Wilson N. (Caja 01)</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="font-label-sm text-[#565e74] uppercase">Sede</span>
              <span className="font-body-sm font-medium text-[#0b1c30]">Tienda Principal</span>
            </div>
          </div>

          <div className="w-full border-b border-dashed border-[#c4c5d5] my-2"></div>

          {/* Client Capsule */}
          <div className="bg-[#eff4ff] rounded-xl p-3 my-1">
            <div className="flex items-center justify-between mb-1">
              <span className="font-label-sm text-[#565e74] uppercase tracking-wider font-semibold">Datos del Cliente</span>
              <span className="bg-[#dae2fd] text-[#131b2e] px-2 py-0.5 rounded font-label-sm font-semibold">
                Cliente VIP (-5%)
              </span>
            </div>
            <div className="font-headline-md text-[15px] font-bold text-[#0b1c30]">
              Carlos Mario Restrepo
            </div>
            <div className="flex items-center gap-4 text-[#565e74] font-body-sm mt-0.5">
              <span>C.C. 1.020.455.890</span>
              <span>Cel: 312 849 2011</span>
            </div>
          </div>

          <div className="w-full border-b border-dashed border-[#c4c5d5] my-2"></div>

          {/* Items Table */}
          <div className="py-1">
            <div className="flex items-center justify-between font-label-sm text-[#565e74] uppercase pb-1 mb-1 border-b border-[#e5eeff]">
              <span className="w-8">Cant</span>
              <span className="flex-1 px-2">Descripción</span>
              <span className="w-24 text-right">Total</span>
            </div>

            <div className="flex items-start justify-between py-2 font-body-sm border-b border-[#f8f9ff]">
              <span className="w-8 font-semibold text-[#0b1c30]">1x</span>
              <div className="flex-1 px-2 flex flex-col">
                <span className="font-semibold text-[#0b1c30]">Jean Slim Fit Narvaez</span>
                <span className="font-label-sm text-[#565e74]">T-32 Índigo Premium • SKU: JEA-091</span>
              </div>
              <span className="w-24 text-right font-semibold text-[#0b1c30]">$110.000</span>
            </div>

            <div className="flex items-start justify-between py-2 font-body-sm">
              <span className="w-8 font-semibold text-[#0b1c30]">1x</span>
              <div className="flex-1 px-2 flex flex-col">
                <span className="font-semibold text-[#0b1c30]">Camisa Oxford Clásica</span>
                <span className="font-label-sm text-[#565e74]">Talla M (Azul Cielo) • SKU: CAM-402</span>
              </div>
              <span className="w-24 text-right font-semibold text-[#0b1c30]">$75.000</span>
            </div>
          </div>

          <div className="w-full border-b border-dashed border-[#c4c5d5] my-2"></div>

          {/* Tax breakdown */}
          <div className="flex flex-col gap-1.5 py-1 font-body-sm">
            <div className="flex justify-between text-[#565e74]">
              <span>Subtotal Artículos (2)</span>
              <span>$185.000 COP</span>
            </div>
            <div className="flex justify-between text-[#00563a] font-medium">
              <span>Descuento Fidelidad VIP (5%)</span>
              <span>-$10.000 COP</span>
            </div>
            <div className="flex justify-between text-[#565e74]">
              <span>Base Gravable (Excluido IVA)</span>
              <span>$147.059 COP</span>
            </div>
            <div className="flex justify-between text-[#565e74]">
              <span>IVA Discriminado (19%)</span>
              <span>$27.941 COP</span>
            </div>
          </div>

          {/* Total Pay Banner */}
          <div className="bg-[#e5eeff] rounded-xl p-3.5 my-2 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-label-sm uppercase font-bold text-[#565e74] tracking-wider">
                Total a Pagar
              </span>
              <span className="font-label-sm text-[#757684]">COP Moneda Legal</span>
            </div>
            <span className="font-metric-display-mobile font-extrabold text-[#00288e]">
              $175.000
            </span>
          </div>

          {/* Payment Method */}
          <div className="bg-[#eff4ff] rounded-xl p-3 my-1 font-body-sm flex flex-col gap-1">
            <div className="flex justify-between text-[#0b1c30]">
              <span className="font-semibold">Método de Pago:</span>
              <span className="font-bold text-[#00288e]">EFECTIVO</span>
            </div>
            <div className="flex justify-between text-[#565e74]">
              <span>Efectivo Recibido:</span>
              <span>$200.000 COP</span>
            </div>
            <div className="flex justify-between text-[#0b1c30] font-semibold">
              <span>Cambio / Vueltas:</span>
              <span className="text-[#00563a] font-bold">$25.000 COP</span>
            </div>
          </div>

          <div className="w-full border-b border-dashed border-[#c4c5d5] my-3"></div>

          {/* QR DIAN & Barcode */}
          <div className="flex flex-col items-center justify-center gap-3 py-1 text-center">
            <div className="flex items-center justify-center gap-4 w-full">
              <div className="bg-[#eff4ff] p-2.5 rounded-xl flex flex-col items-center">
                <svg className="w-20 h-20 text-[#0b1c30]" fill="none" stroke="currentColor" viewBox="0 0 100 100">
                  <rect height="28" rx="3" strokeWidth="6" width="28" x="5" y="5"></rect>
                  <rect fill="currentColor" height="12" width="12" x="13" y="13"></rect>
                  <rect height="28" rx="3" strokeWidth="6" width="28" x="67" y="5"></rect>
                  <rect fill="currentColor" height="12" width="12" x="75" y="13"></rect>
                  <rect height="28" rx="3" strokeWidth="6" width="28" x="5" y="67"></rect>
                  <rect fill="currentColor" height="12" width="12" x="13" y="75"></rect>
                  <rect fill="currentColor" height="18" width="8" x="42" y="10"></rect>
                  <rect fill="currentColor" height="10" width="16" x="42" y="38"></rect>
                  <rect fill="currentColor" height="8" width="12" x="68" y="42"></rect>
                  <rect fill="currentColor" height="24" width="10" x="42" y="66"></rect>
                  <rect fill="currentColor" height="8" width="26" x="62" y="68"></rect>
                  <rect fill="currentColor" height="12" width="12" x="80" y="80"></rect>
                </svg>
                <span className="font-label-sm text-[9px] text-[#565e74] mt-1 font-mono">QR DIAN Válido</span>
              </div>

              <div className="flex-1 flex flex-col items-center">
                <div className="w-full h-12 flex items-center justify-center gap-[2.5px] px-2 py-1 bg-[#eff4ff] rounded-lg">
                  <span className="w-1 h-9 bg-[#0b1c30]"></span>
                  <span className="w-0.5 h-9 bg-[#0b1c30]"></span>
                  <span className="w-1.5 h-9 bg-[#0b1c30]"></span>
                  <span className="w-0.5 h-9 bg-[#0b1c30]"></span>
                  <span className="w-2 h-9 bg-[#0b1c30]"></span>
                  <span className="w-0.5 h-9 bg-[#0b1c30]"></span>
                  <span className="w-1 h-9 bg-[#0b1c30]"></span>
                  <span className="w-1.5 h-9 bg-[#0b1c30]"></span>
                  <span className="w-0.5 h-9 bg-[#0b1c30]"></span>
                  <span className="w-2 h-9 bg-[#0b1c30]"></span>
                  <span className="w-0.5 h-9 bg-[#0b1c30]"></span>
                  <span className="w-1 h-9 bg-[#0b1c30]"></span>
                  <span className="w-1.5 h-9 bg-[#0b1c30]"></span>
                  <span className="w-0.5 h-9 bg-[#0b1c30]"></span>
                  <span className="w-2 h-9 bg-[#0b1c30]"></span>
                </div>
                <span className="font-label-sm text-[10px] tracking-wider text-[#757684] mt-1 font-mono">
                  *F1049-00284-2024*
                </span>
                <span className="font-label-sm text-[10px] text-[#565e74]">
                  Código para Cambios de Prenda
                </span>
              </div>
            </div>

            <p className="font-body-sm text-[11px] text-[#565e74] max-w-sm mt-1 leading-snug">
              ¡Gracias por elegir la elegancia de Narvaez!<br />
              Cambios dentro de los 30 días posteriores a la compra presentando este comprobante digital o físico. Medellín, Colombia.
            </p>
          </div>

          {/* Jagged bottom edge representation */}
          <div className="absolute -bottom-3 left-0 right-0 flex justify-between px-1 pointer-events-none">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-[#f8f9ff] rounded-full"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Operational Actions */}
      <div className="px-4 pt-3 flex flex-col gap-2.5">
        <button
          onClick={() => {
            onNavigate('cambio-devolucion');
            onShowToast('Cargando ticket #F1049-00284 en módulo de cambios');
          }}
          className="w-full h-13 rounded-xl bg-[#00563a] text-white font-label-lg font-bold flex items-center justify-center gap-2 shadow-md shadow-[#00563a]/25 active:scale-98 transition-transform"
        >
          <span className="material-symbols-outlined text-[20px]">sync_alt</span>
          <span>Solicitar Cambio o Devolución (Garantía)</span>
        </button>

        <button
          onClick={() => {
            onNavigate('nueva-venta');
            onShowToast('Iniciando nueva orden en Caja 01');
          }}
          className="w-full h-12 rounded-xl bg-[#00288e] text-white font-label-md font-bold flex items-center justify-center gap-2 active:scale-98 transition-transform shadow-xs"
        >
          <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
          <span>Comenzar Nueva Venta</span>
        </button>

        <button
          onClick={() => {
            onNavigate('inventario');
            onShowToast('Visualizando movimientos en Kardex');
          }}
          className="w-full h-11 rounded-xl bg-[#eff4ff] text-[#0b1c30] font-label-md font-semibold flex items-center justify-center gap-2 active:bg-[#e5eeff] transition-colors"
        >
          <span className="material-symbols-outlined text-[18px] text-[#565e74]">inventory</span>
          <span>Ver Registro en Kardex</span>
        </button>
      </div>
    </div>
  );
};
