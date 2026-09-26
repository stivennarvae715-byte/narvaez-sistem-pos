import React, { useState } from 'react';
import { ScreenId, StoreCreditVoucher } from '../types';

interface NuevaVentaViewProps {
  voucher: StoreCreditVoucher;
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

interface CartItemState {
  id: string;
  name: string;
  size: string;
  sku: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export const NuevaVentaView: React.FC<NuevaVentaViewProps> = ({
  voucher,
  onNavigate,
  onShowToast
}) => {
  const [voucherApplied, setVoucherApplied] = useState<boolean>(true);
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'nequi' | 'daviplata' | 'cash'>('card');

  const [cartItems, setCartItems] = useState<CartItemState[]>([
    {
      id: 'cart-1',
      name: 'Blazer Lino Italiano Azul Marino',
      size: '40',
      sku: 'BLZ-LIN-40',
      price: 185000,
      quantity: 1,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHVD9SjD5lhzhWF7SlGKUKi8VUm4EyjDleETh4II0gfaAL2Z2V-OYSyVLVuoO3wya-ttSPEaj_vuiQXr0-IiKAc0N-2HEOMBypM5flTRjLCvEfc1D6a1NwcF22RhwxhUI56tDkmKe-fNv1gr7YUiYX4r70H4nkpaOiG3-10KsBOkt18Ymi1objWwoUyr4tx7qkrXhiJr1sEdT8sNEyGCQNBG9wSEA18Ge2_x9yMQkPCel0NYuv5e6x6w'
    },
    {
      id: 'cart-2',
      name: 'Camisa Formal Cuello Francés Blanca',
      size: 'L',
      sku: 'CAM-FRN-02',
      price: 85000,
      quantity: 1,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsDc0aKqiy_DU4bA3NsbuRdsP0xXBzNMNM1Edb_Iu2jlSr4pxvOjk21DsKy5Qbuh-4g-btN3MFiEmLPz30t6hcdWPaBeHxRyzyr52iAU_zqa2G8mgxkZ-du7NxLn6BDhy9_EEBLVn9iTjTSasjhs0hAXdAxZriO6bjmpSZJjvURz-A346nfNm8kC5dhVmNNKS5baB4q5uwUtf5x2gFf5Y5qwUlF6ZxquWxM_SjlySvOs95YS3UPGbxjQ'
    }
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    onShowToast('Prenda retirada del carrito');
  };

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const vipDiscount = Math.round(subtotal * 0.05); // 5% VIP
  const netSubtotal = subtotal - vipDiscount;
  const voucherDiscount = voucherApplied ? Math.min(voucher.amount, netSubtotal) : 0;
  const remainingToPay = Math.max(0, netSubtotal - voucherDiscount);
  const baseGravable = Math.round(netSubtotal / 1.19);
  const iva = netSubtotal - baseGravable;

  const handleCheckout = () => {
    onShowToast(`Cobro exitoso de $${remainingToPay.toLocaleString('es-CO')} vía ${selectedMethod.toUpperCase()}`);
    setTimeout(() => {
      onNavigate('factura-1050');
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full pb-28 pt-20 max-w-2xl mx-auto">
      {/* Status & Session Banner */}
      <div className="px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2 min-w-0">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-[#00288e] text-white shadow-xs">
            <span className="material-symbols-outlined text-[18px]">point_of_sale</span>
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-label-md text-[#0b1c30] font-bold truncate">Venta #NV-9412</span>
              <span className="bg-[#eff4ff] text-[#565e74] px-2 py-0.5 rounded-full font-label-sm text-[10px] font-bold">
                Caja 01
              </span>
            </div>
            <p className="font-body-sm text-[#565e74] truncate">Cajero: Wilson Narváez</p>
          </div>
        </div>

        {/* Quick Scan Barcode Trigger */}
        <button
          onClick={() => onShowToast('Escaneando prenda con lector óptico...')}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#dde1ff] text-[#001453] active:scale-95 transition-transform shadow-xs font-label-md font-bold"
        >
          <span className="material-symbols-outlined text-[18px]">barcode_scanner</span>
          <span>Escanear</span>
        </button>
      </div>

      <div className="px-4 flex flex-col gap-3 mt-1">
        {/* Active VIP Customer Card */}
        <section className="bg-white rounded-2xl p-3.5 shadow-sm flex items-center justify-between gap-3 border border-[#eff4ff]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-full bg-[#dae2fd] text-[#131b2e] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">person_check</span>
            </div>
            <div className="min-w-0">
              <h3 className="font-label-lg text-[#0b1c30] font-bold truncate">Carlos Mario Restrepo</h3>
              <p className="font-body-sm text-[#565e74] truncate">C.C. 1.020.455.890</p>
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-end gap-1">
            <span className="inline-flex items-center gap-1 bg-[#6ffbbe] text-[#002113] px-2.5 py-0.5 rounded-full font-label-sm text-[10px] uppercase tracking-wider font-bold">
              <span className="material-symbols-outlined text-[12px]">star</span>
              VIP -5%
            </span>
            <span className="font-label-sm text-[#00563a] font-semibold">Perfil Verificado</span>
          </div>
        </section>

        {/* Banner: Digital Credit Voucher Applied (Bono Redimido) */}
        {voucherApplied ? (
          <section className="relative overflow-hidden bg-gradient-to-r from-[#00563a] via-[#004830] to-[#1e40af] rounded-2xl p-4 text-white shadow-md border border-[#00563a]/30">
            <div className="relative z-10 flex flex-col gap-2.5">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#6ffbbe] text-[#002113] flex items-center justify-center shadow-xs">
                    <span className="material-symbols-outlined text-[18px]">confirmation_number</span>
                  </span>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-label-md font-bold uppercase tracking-wider text-[#6ffbbe]">
                        Bono Digital Aplicado
                      </span>
                      <span className="material-symbols-outlined text-[15px] text-[#6ffbbe]">verified</span>
                    </div>
                    <p className="font-body-sm text-[#d3e4fe]">
                      Serial: <span className="font-semibold text-white font-mono">{voucher.code}</span>
                    </p>
                  </div>
                </div>
                <span className="bg-white/20 text-[#eaf1ff] text-[11px] font-label-sm px-2 py-0.5 rounded-md backdrop-blur-sm">
                  {voucher.creditNote}
                </span>
              </div>

              <div className="flex items-baseline justify-between pt-1">
                <div>
                  <span className="font-label-sm text-[11px] text-[#a8b8ff] block uppercase tracking-wide">
                    Saldo Acreditado
                  </span>
                  <span className="font-metric-display-mobile text-[#6ffbbe] tracking-tight">
                    ${voucher.amount.toLocaleString('es-CO')}{' '}
                    <span className="text-xs font-semibold text-[#4edea3]">COP</span>
                  </span>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-[#6ffbbe] text-[#002113] font-label-sm text-[10px] px-2 py-0.5 rounded-full font-bold">
                    100% Descontado
                  </span>
                </div>
              </div>

              <div className="pt-1 flex items-center justify-between text-body-sm border-t border-white/10">
                <button
                  onClick={() => onNavigate('bono-digital')}
                  className="flex items-center gap-1 text-[#6ffbbe] hover:text-white transition-colors font-label-sm text-[11px]"
                >
                  <span className="material-symbols-outlined text-[14px]">info</span>
                  Ver Detalle Origen
                </button>
                <button
                  onClick={() => {
                    setVoucherApplied(false);
                    onShowToast('Bono retirado de la liquidación');
                  }}
                  className="flex items-center gap-1 text-[#ffdad6] hover:text-white transition-colors font-label-sm text-[11px]"
                >
                  <span className="material-symbols-outlined text-[14px]">remove_circle_outline</span>
                  Retirar Bono
                </button>
              </div>
            </div>
          </section>
        ) : (
          <div className="p-3 bg-white rounded-2xl border border-dashed border-[#00288e] flex items-center justify-between">
            <span className="font-label-sm text-[#00288e] font-bold">¿Tienes un Bono Digital de Devolución?</span>
            <button
              onClick={() => {
                setVoucherApplied(true);
                onShowToast('Bono BN-2024-8849 aplicado exitosamente');
              }}
              className="px-3 py-1 bg-[#00288e] text-white rounded-xl text-label-sm font-bold"
            >
              Aplicar Bono
            </button>
          </div>
        )}

        {/* Cart Items Stream */}
        <section className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-md text-[#0b1c30] font-bold flex items-center gap-1.5">
              <span>Prendas en Carrito</span>
              <span className="bg-[#eff4ff] text-[#00288e] px-2 py-0.5 rounded-full font-label-sm text-[11px] font-bold">
                {cartItems.length} ítems
              </span>
            </h2>
            <span className="font-label-sm text-[#565e74]">Sastrería &amp; Alta Costura</span>
          </div>

          {cartItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl p-3.5 shadow-sm flex flex-col gap-3 border border-[#eff4ff]"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-16 h-16 rounded-xl object-cover bg-[#eff4ff] shrink-0 shadow-xs"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-1">
                    <h4 className="font-label-lg text-[#0b1c30] font-bold truncate leading-snug">
                      {item.name}
                    </h4>
                    <button
                      onClick={() => removeItem(item.id)}
                      aria-label="Eliminar ítem"
                      className="text-[#757684] hover:text-[#ba1a1a] p-1 rounded-md transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">delete_outline</span>
                    </button>
                  </div>
                  <p className="font-body-sm text-[#565e74] truncate">
                    Talla {item.size} • SKU: {item.sku}
                  </p>

                  <div className="flex items-center justify-between mt-1.5">
                    <span className="font-headline-md font-bold text-[#00288e]">
                      ${item.price.toLocaleString('es-CO')}{' '}
                      <span className="font-body-sm text-[11px] text-[#565e74]">COP</span>
                    </span>

                    {/* Stepper */}
                    <div className="flex items-center bg-[#eff4ff] rounded-xl p-0.5 border border-[#d3e4fe]/40">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-7 h-7 flex items-center justify-center text-[#565e74] hover:bg-white rounded-lg transition-colors"
                      >
                        <span className="material-symbols-outlined text-[16px]">remove</span>
                      </button>
                      <span className="w-6 text-center font-label-md font-bold text-[#0b1c30]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-7 h-7 flex items-center justify-center text-[#565e74] hover:bg-white rounded-lg transition-colors"
                      >
                        <span className="material-symbols-outlined text-[16px]">add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Financial Breakdown Ledger */}
        <section className="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-2.5 border border-[#eff4ff]">
          <div className="flex items-center justify-between pb-1">
            <h3 className="font-label-lg text-[#0b1c30] font-bold uppercase tracking-wider">
              Liquidación de Venta
            </h3>
            <span className="font-label-sm text-[#565e74]">IVA Incluido (19%)</span>
          </div>

          <div className="flex justify-between items-center text-body-md text-[#565e74]">
            <span>Subtotal Artículos ({cartItems.length} prendas)</span>
            <span className="font-medium text-[#0b1c30]">${subtotal.toLocaleString('es-CO')}</span>
          </div>

          <div className="flex justify-between items-center text-body-md">
            <span className="flex items-center gap-1.5 text-[#565e74]">
              <span>Descuento VIP Narváez (5%)</span>
              <span className="bg-[#6ffbbe] text-[#002113] px-2 py-0.2 rounded font-label-sm text-[9px] font-bold">
                CLIENTE VIP
              </span>
            </span>
            <span className="font-bold text-[#00563a]">-${vipDiscount.toLocaleString('es-CO')}</span>
          </div>

          <div className="flex justify-between items-center text-body-sm text-[#565e74] pt-0.5">
            <span>Subtotal Neto</span>
            <span className="font-semibold text-[#0b1c30]">${netSubtotal.toLocaleString('es-CO')}</span>
          </div>

          {/* Voucher Deduction Highlight */}
          {voucherApplied && (
            <div className="bg-[#6ffbbe]/25 border border-[#6ffbbe]/40 rounded-xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#00563a] text-[20px]">redeem</span>
                <div className="flex flex-col">
                  <span className="font-label-md font-bold text-[#002113]">
                    Bono Redimido {voucher.code}
                  </span>
                  <span className="font-label-sm text-[10px] text-[#00563a]">
                    Abono saldo a favor ({voucher.creditNote})
                  </span>
                </div>
              </div>
              <span className="font-headline-md font-bold text-[#00563a]">
                -${voucherDiscount.toLocaleString('es-CO')}
              </span>
            </div>
          )}

          <div className="flex justify-between items-center text-body-sm text-[#565e74] pt-0.5">
            <span>Base gravable IVA (19%)</span>
            <span>${baseGravable.toLocaleString('es-CO')} COP</span>
          </div>
          <div className="flex justify-between items-center text-body-sm text-[#565e74]">
            <span>Impuesto a las ventas (IVA 19%)</span>
            <span>${iva.toLocaleString('es-CO')} COP</span>
          </div>

          {/* Final Remaining Balance Display */}
          <div className="mt-2 bg-[#dce9ff] rounded-2xl p-4 flex items-center justify-between border border-[#d3e4fe]">
            <div>
              <span className="font-label-sm uppercase tracking-wider text-[#565e74] font-bold block">
                Saldo Pendiente a Cobrar
              </span>
              <span className="font-body-sm text-[#444653]">Total tras redención de bono</span>
            </div>
            <div className="text-right">
              <span className="font-metric-display-mobile font-extrabold text-[#00288e] block leading-none">
                ${remainingToPay.toLocaleString('es-CO')}
              </span>
              <span className="font-label-sm text-[#565e74] font-bold">COP</span>
            </div>
          </div>
        </section>

        {/* Quick Pay Selector */}
        <section className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label className="font-label-lg text-[#0b1c30] font-bold">Método para Saldo Restante</label>
            <span className="font-label-sm text-[#00288e] font-bold">
              ${remainingToPay.toLocaleString('es-CO')} COP
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {/* Nequi */}
            <button
              type="button"
              onClick={() => { setSelectedMethod('nequi'); onShowToast('Seleccionado: Nequi'); }}
              className={`flex flex-col items-center justify-center p-2.5 rounded-2xl transition-all shadow-xs ${
                selectedMethod === 'nequi'
                  ? 'bg-[#00288e] text-white shadow-md font-bold'
                  : 'bg-white text-[#0b1c30] border border-[#eff4ff] hover:bg-[#eff4ff]'
              }`}
            >
              <span className={`material-symbols-outlined text-[22px] ${selectedMethod === 'nequi' ? 'text-white' : 'text-[#00288e]'}`}>
                smartphone
              </span>
              <span className="font-label-sm mt-1">Nequi</span>
            </button>

            {/* Daviplata */}
            <button
              type="button"
              onClick={() => { setSelectedMethod('daviplata'); onShowToast('Seleccionado: Daviplata'); }}
              className={`flex flex-col items-center justify-center p-2.5 rounded-2xl transition-all shadow-xs ${
                selectedMethod === 'daviplata'
                  ? 'bg-[#00288e] text-white shadow-md font-bold'
                  : 'bg-white text-[#0b1c30] border border-[#eff4ff] hover:bg-[#eff4ff]'
              }`}
            >
              <span className={`material-symbols-outlined text-[22px] ${selectedMethod === 'daviplata' ? 'text-white' : 'text-[#ba1a1a]'}`}>
                send_to_mobile
              </span>
              <span className="font-label-sm mt-1">Daviplata</span>
            </button>

            {/* Datáfono */}
            <button
              type="button"
              onClick={() => { setSelectedMethod('card'); onShowToast('Seleccionado: Datáfono Redeban'); }}
              className={`flex flex-col items-center justify-center p-2.5 rounded-2xl transition-all shadow-xs ${
                selectedMethod === 'card'
                  ? 'bg-[#00288e] text-white shadow-md font-bold'
                  : 'bg-white text-[#0b1c30] border border-[#eff4ff] hover:bg-[#eff4ff]'
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">credit_card</span>
              <span className="font-label-sm mt-1">Datáfono</span>
            </button>

            {/* Efectivo */}
            <button
              type="button"
              onClick={() => { setSelectedMethod('cash'); onShowToast('Seleccionado: Efectivo en Caja'); }}
              className={`flex flex-col items-center justify-center p-2.5 rounded-2xl transition-all shadow-xs ${
                selectedMethod === 'cash'
                  ? 'bg-[#00288e] text-white shadow-md font-bold'
                  : 'bg-white text-[#0b1c30] border border-[#eff4ff] hover:bg-[#eff4ff]'
              }`}
            >
              <span className={`material-symbols-outlined text-[22px] ${selectedMethod === 'cash' ? 'text-white' : 'text-[#00563a]'}`}>
                payments
              </span>
              <span className="font-label-sm mt-1">Efectivo</span>
            </button>
          </div>
        </section>

        {/* Action Bar Bottom Stack */}
        <div className="flex flex-col gap-2 pt-2">
          <button
            onClick={handleCheckout}
            className="w-full h-14 bg-[#00288e] hover:bg-[#1e40af] text-white rounded-2xl font-label-lg font-bold flex items-center justify-between px-5 shadow-lg shadow-[#00288e]/25 active:scale-[0.99] transition-transform"
          >
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[22px]">payments</span>
              <span>Cobrar Saldo Restante</span>
            </span>
            <div className="flex items-center gap-1.5">
              <span className="font-headline-md tracking-tight font-extrabold">
                ${remainingToPay.toLocaleString('es-CO')}
              </span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </div>
          </button>

          <button
            onClick={() => onShowToast('Abriendo catálogo de sastrería para agregar más prendas')}
            className="w-full h-12 bg-[#eff4ff] text-[#0b1c30] rounded-2xl font-label-md font-semibold flex items-center justify-center gap-2 active:bg-[#e5eeff] transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">add_circle_outline</span>
            <span>Agregar más prendas al carrito (+ Escanear)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
