import React, { useState } from 'react';
import { ScreenId } from '../types';

interface CambioDevolucionViewProps {
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

export const CambioDevolucionView: React.FC<CambioDevolucionViewProps> = ({
  onNavigate,
  onShowToast
}) => {
  const [selectedReason, setSelectedReason] = useState<'talla' | 'defecto' | 'gusto'>('talla');
  const [stockDestination, setStockDestination] = useState<'stock' | 'taller'>('stock');
  const [selectedNewSize, setSelectedNewSize] = useState<string>('34');
  const [includeJean, setIncludeJean] = useState<boolean>(true);
  const [includeCamisa, setIncludeCamisa] = useState<boolean>(false);

  const handleProcessChange = () => {
    onShowToast('Cambio procesado: NC-0042 generada y ticket impreso en POS-80');
    setTimeout(() => {
      onNavigate('bono-digital');
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full px-4 pb-28 pt-20 max-w-2xl mx-auto space-y-4">
      {/* Top Header */}
      <section className="flex flex-col gap-1.5 pt-1">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('factura-1049')}
            className="w-10 h-10 -ml-1 flex items-center justify-center rounded-xl bg-[#eff4ff] text-[#0b1c30] hover:bg-[#e5eeff] transition-colors active:scale-95 shadow-xs"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#00563a]/10 text-[#00563a] font-label-sm uppercase tracking-wider font-bold">
            <span className="material-symbols-outlined text-[15px]">verified</span>
            Garantía 30 Días
          </span>
        </div>
        <div>
          <h1 className="font-headline-lg text-[#0b1c30]">Cambio o Devolución</h1>
          <p className="font-body-sm text-[#565e74] mt-0.5">
            Escaneo de comprobante o prenda para reintegro inmediato a Kardex o reemplazo de talla.
          </p>
        </div>
      </section>

      {/* Módulo de Escaneo Óptico */}
      <section className="bg-white rounded-2xl shadow-sm p-4 space-y-3 border border-[#eff4ff]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#00288e] text-[20px]">qr_code_scanner</span>
            <span className="font-label-md text-[#0b1c30] font-bold">Lector Óptico de Factura / Prenda</span>
          </div>
          <span className="font-label-sm px-2.5 py-0.5 rounded-full bg-[#e5eeff] text-[#00288e] font-semibold">
            Láser Activo
          </span>
        </div>

        {/* Viewfinder */}
        <div className="relative w-full h-32 bg-[#213145] rounded-xl overflow-hidden flex flex-col items-center justify-center border border-slate-700">
          <div className="absolute inset-x-6 top-0 bottom-0 flex flex-col justify-between py-4 pointer-events-none">
            <div className="flex justify-between items-start">
              <div className="w-4 h-4 border-t-2 border-l-2 border-[#4edea3] rounded-tl"></div>
              <div className="w-4 h-4 border-t-2 border-r-2 border-[#4edea3] rounded-tr"></div>
            </div>
            {/* Animated Laser line */}
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#4edea3] to-transparent shadow-[0_0_12px_#4edea3] animate-[pulse_1.2s_infinite]"></div>
            <div className="flex justify-between items-end">
              <div className="w-4 h-4 border-b-2 border-l-2 border-[#4edea3] rounded-bl"></div>
              <div className="w-4 h-4 border-b-2 border-r-2 border-[#4edea3] rounded-br"></div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1 z-10">
            <span className="material-symbols-outlined text-[#6ffbbe] text-[28px] animate-pulse">
              barcode_reader
            </span>
            <span className="font-label-sm text-[#eaf1ff] tracking-wider font-bold">
              APUNTE AL CÓDIGO EAN-13 O TICKET
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onShowToast('Escaneando código de barras de la tirilla POS...')}
            className="h-11 px-3 rounded-xl bg-[#eff4ff] text-[#00288e] font-label-md font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">photo_camera</span>
            Escanear Ticket POS
          </button>
          <button
            onClick={() => onShowToast('Introduce el serial del ticket: F1049-00284')}
            className="h-11 px-3 rounded-xl bg-[#eff4ff] text-[#565e74] font-label-md font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">pin</span>
            Ingresar Código
          </button>
        </div>

        {/* Detected ticket banner */}
        <div className="p-3 rounded-xl bg-[#00563a]/5 border border-[#00563a]/20 flex items-start gap-2.5">
          <span className="material-symbols-outlined text-[#00563a] text-[20px] shrink-0 mt-0.5">
            check_circle
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-label-md text-[#0b1c30] font-bold">Ticket #F1049-00284</span>
              <span className="px-2 py-0.5 rounded-full bg-[#6ffbbe] text-[#002113] font-label-sm font-bold">
                Válido
              </span>
            </div>
            <p className="font-body-sm text-[#444653] mt-0.5">
              Carlos Mario Restrepo • Emitida hace 3 días • C.C. 1.020.455.890
            </p>
          </div>
        </div>
      </section>

      {/* Prendas en la Factura */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-headline-md text-[#0b1c30]">Prendas en la Factura</h2>
          <span className="font-label-sm text-[#565e74]">
            {includeJean ? '1 de 2 para cambio' : '0 seleccionadas'}
          </span>
        </div>

        {/* Prenda 1: Jean (Seleccionada) */}
        <div className={`bg-white rounded-2xl shadow-sm p-4 space-y-3 border transition-all ${
          includeJean ? 'border-[#00288e]' : 'border-[#eff4ff] opacity-70'
        }`}>
          <div className="flex items-start justify-between gap-3">
            <label className="flex items-start gap-3 cursor-pointer select-none min-w-0">
              <input
                type="checkbox"
                checked={includeJean}
                onChange={(e) => setIncludeJean(e.target.checked)}
                className="mt-1 w-5 h-5 rounded accent-[#00288e] cursor-pointer"
              />
              <div className="min-w-0">
                <h3 className="font-label-lg text-[#0b1c30] font-bold truncate">
                  Jean Slim Fit Narvaez - Índigo
                </h3>
                <p className="font-body-sm text-[#565e74]">Talla 32 • Ref: JN-SLIM-3201</p>
              </div>
            </label>
            <span className="font-headline-md text-[#0b1c30] shrink-0 font-bold">$110.000 COP</span>
          </div>

          {includeJean && (
            <>
              {/* Motivo del Reintegro */}
              <div className="space-y-1.5 pt-1">
                <span className="font-label-sm text-[#565e74] uppercase tracking-wider font-semibold">
                  Motivo del Reintegro
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    type="button"
                    onClick={() => setSelectedReason('talla')}
                    className={`px-3 py-1.5 rounded-full font-label-sm flex items-center gap-1 shadow-xs transition-all ${
                      selectedReason === 'talla'
                        ? 'bg-[#00288e] text-white font-bold'
                        : 'bg-[#eff4ff] text-[#444653]'
                    }`}
                  >
                    {selectedReason === 'talla' && <span className="material-symbols-outlined text-[14px]">check</span>}
                    Cambio de Talla
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedReason('defecto')}
                    className={`px-3 py-1.5 rounded-full font-label-sm flex items-center gap-1 transition-all ${
                      selectedReason === 'defecto'
                        ? 'bg-[#00288e] text-white font-bold'
                        : 'bg-[#eff4ff] text-[#444653]'
                    }`}
                  >
                    {selectedReason === 'defecto' && <span className="material-symbols-outlined text-[14px]">check</span>}
                    Defecto de Fábrica
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedReason('gusto')}
                    className={`px-3 py-1.5 rounded-full font-label-sm flex items-center gap-1 transition-all ${
                      selectedReason === 'gusto'
                        ? 'bg-[#00288e] text-white font-bold'
                        : 'bg-[#eff4ff] text-[#444653]'
                    }`}
                  >
                    {selectedReason === 'gusto' && <span className="material-symbols-outlined text-[14px]">check</span>}
                    Gusto del Cliente
                  </button>
                </div>
              </div>

              {/* Estado & Destino Kardex */}
              <div className="p-3 rounded-xl bg-[#eff4ff] space-y-2 border border-[#d3e4fe]/50">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#00563a] text-[18px]">verified</span>
                  <span className="font-body-sm text-[#0b1c30] font-medium">
                    Prenda íntegra con marquillas y sellos originales
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <label 
                    onClick={() => setStockDestination('stock')}
                    className={`flex items-center gap-2 p-2.5 rounded-xl font-label-sm cursor-pointer transition-all ${
                      stockDestination === 'stock'
                        ? 'bg-white text-[#00288e] font-bold shadow-xs border border-[#00288e]'
                        : 'bg-[#eff4ff] text-[#565e74]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="destino"
                      checked={stockDestination === 'stock'}
                      onChange={() => setStockDestination('stock')}
                      className="accent-[#00288e]"
                    />
                    <span>Reingresar a Stock</span>
                  </label>
                  <label 
                    onClick={() => setStockDestination('taller')}
                    className={`flex items-center gap-2 p-2.5 rounded-xl font-label-sm cursor-pointer transition-all ${
                      stockDestination === 'taller'
                        ? 'bg-white text-[#ba1a1a] font-bold shadow-xs border border-[#ba1a1a]'
                        : 'bg-[#eff4ff] text-[#565e74]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="destino"
                      checked={stockDestination === 'taller'}
                      onChange={() => setStockDestination('taller')}
                      className="accent-[#ba1a1a]"
                    />
                    <span>Taller / Merma</span>
                  </label>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Prenda 2: Camisa Oxford (No seleccionada) */}
        <div className={`bg-white rounded-2xl p-4 shadow-sm border border-[#eff4ff] transition-all ${
          includeCamisa ? 'border-[#00288e]' : 'opacity-65'
        }`}>
          <div className="flex items-start justify-between gap-3">
            <label className="flex items-start gap-3 cursor-pointer select-none min-w-0">
              <input
                type="checkbox"
                checked={includeCamisa}
                onChange={(e) => setIncludeCamisa(e.target.checked)}
                className="mt-1 w-5 h-5 rounded cursor-pointer accent-[#00288e]"
              />
              <div className="min-w-0">
                <h3 className="font-label-lg text-[#0b1c30] font-semibold truncate">
                  Camisa Oxford Clásica - Celeste
                </h3>
                <p className="font-body-sm text-[#565e74]">Talla M • Ref: CAM-OXF-004</p>
              </div>
            </label>
            <span className="font-label-lg text-[#565e74] shrink-0 font-medium">$75.000 COP</span>
          </div>
        </div>
      </section>

      {/* Prenda a Entregar */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-headline-md text-[#0b1c30]">Prenda a Entregar</h2>
          <button 
            onClick={() => onShowToast('Buscador de catálogo para reemplazo')}
            className="font-label-md text-[#00288e] flex items-center gap-0.5 font-semibold hover:underline"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">search</span>
            Buscar otra
          </button>
        </div>

        {/* Tarjeta de Nueva Prenda */}
        <div className="bg-white rounded-2xl shadow-sm p-4 space-y-3 border border-[#eff4ff]">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-full bg-[#dae2fd] text-[#131b2e] font-label-sm font-semibold">
              Reemplazo Mano a Mano
            </span>
            <span className="font-label-sm text-[#00563a] flex items-center gap-1 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00563a]"></span>
              12 disp. en Bodega
            </span>
          </div>

          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-label-lg text-[#0b1c30] font-bold">
                Jean Slim Fit Narvaez - Índigo
              </h3>
              <p className="font-body-sm text-[#565e74]">
                Talla {selectedNewSize} (Nueva talla solicitada)
              </p>
              <span className="font-label-sm text-[#444653] font-mono mt-0.5 inline-block">
                SKU: JN-SLIM-{selectedNewSize}01
              </span>
            </div>
            <span className="font-headline-md text-[#00288e] font-bold shrink-0">$110.000 COP</span>
          </div>

          {/* Size picker */}
          <div className="flex items-center gap-2 pt-1">
            <span className="font-label-sm text-[#565e74] mr-1">Tallas:</span>
            {['30', '32', '34', '36'].map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => {
                  setSelectedNewSize(size);
                  onShowToast(`Talla seleccionada para cambio: ${size}`);
                }}
                className={`px-3 py-1 rounded-xl font-label-sm font-bold transition-all ${
                  selectedNewSize === size
                    ? 'bg-[#00288e] text-white shadow-xs'
                    : 'bg-[#eff4ff] text-[#565e74] hover:bg-[#d3e4fe]'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Balance Financiero */}
        <div className="bg-[#dce9ff] rounded-2xl p-4 space-y-2 border border-[#d3e4fe]">
          <div className="flex justify-between items-center font-body-sm text-[#565e74]">
            <span>Prenda Entregada por Cliente (+)</span>
            <span className="font-label-md text-[#00563a] font-bold">+$110.000 COP</span>
          </div>
          <div className="flex justify-between items-center font-body-sm text-[#565e74]">
            <span>Nueva Prenda Despachada (-)</span>
            <span className="font-label-md text-[#0b1c30] font-bold">-$110.000 COP</span>
          </div>
          <div className="h-px bg-[#c4c5d5]/60 my-1"></div>
          <div className="flex justify-between items-center">
            <div>
              <span className="font-label-lg text-[#0b1c30] font-bold block">Diferencia a Liquidar</span>
              <span className="font-label-sm text-[#00563a] font-semibold">Cambio 1:1 Sin Excedente</span>
            </div>
            <span className="font-metric-display-mobile text-[#00288e] font-extrabold">$0 COP</span>
          </div>
        </div>

        {/* Alternative: Generate Store Credit Voucher (Bono) */}
        <div className="bg-white rounded-2xl p-3.5 shadow-sm flex items-center justify-between gap-3 border border-[#eff4ff]">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="material-symbols-outlined text-[#00288e] text-[24px] shrink-0">
              credit_card_heart
            </span>
            <div className="min-w-0">
              <p className="font-label-md text-[#0b1c30] font-bold truncate">¿El cliente no lleva nada hoy?</p>
              <p className="font-body-sm text-[#565e74]">Generar Bono Digital ($110.000 COP - 60 días)</p>
            </div>
          </div>
          <button
            onClick={() => {
              onNavigate('bono-digital');
              onShowToast('Generando Bono Digital de Saldo por $110.000 COP');
            }}
            className="px-3.5 py-2 rounded-xl bg-[#00288e] text-white font-label-sm font-bold shrink-0 active:scale-95 transition-transform shadow-xs"
            type="button"
          >
            Crear Bono
          </button>
        </div>
      </section>

      {/* Trazabilidad Fiscal & Kardex */}
      <section className="bg-white rounded-2xl p-4 shadow-sm space-y-2.5 border border-[#eff4ff]">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#00288e] text-[18px]">verified_user</span>
          <h3 className="font-label-md text-[#0b1c30] font-bold">Trazabilidad Fiscal &amp; Kardex</h3>
        </div>

        <div className="grid grid-cols-2 gap-2 font-body-sm">
          <div className="p-3 rounded-xl bg-[#eff4ff] flex flex-col border border-[#d3e4fe]/40">
            <span className="font-label-sm text-[#565e74]">Kardex T-32</span>
            <span className="font-label-md text-[#00563a] font-bold">+1 Entrada (Stock)</span>
          </div>
          <div className="p-3 rounded-xl bg-[#eff4ff] flex flex-col border border-[#d3e4fe]/40">
            <span className="font-label-sm text-[#565e74]">Kardex T-34</span>
            <span className="font-label-md text-[#ba1a1a] font-bold">-1 Salida (Entrega)</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[#565e74] font-label-sm pt-1">
          <span>Documento Electrónico: <strong className="text-[#0b1c30] font-mono">NC-0042</strong></span>
          <span>Cajero: <strong className="text-[#0b1c30]">Wilson N. (Caja 01)</strong></span>
        </div>
      </section>

      {/* Actions */}
      <section className="space-y-2 pt-1">
        <button
          onClick={handleProcessChange}
          className="w-full h-14 rounded-2xl bg-[#00288e] text-white font-headline-md font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#00288e]/25 active:scale-98 transition-transform hover:bg-[#1e40af]"
          type="button"
        >
          <span className="material-symbols-outlined text-[22px]">print_connect</span>
          <span>Procesar Cambio e Imprimir ($0 COP)</span>
        </button>

        <button
          onClick={() => onNavigate('dashboard')}
          className="w-full h-12 rounded-2xl bg-[#eff4ff] text-[#444653] font-label-lg font-semibold flex items-center justify-center active:bg-[#e5eeff] transition-colors"
          type="button"
        >
          Cancelar Operación
        </button>
      </section>
    </div>
  );
};
