import React, { useState } from 'react';
import { ProductItem, ScreenId } from '../types';

interface InventarioViewProps {
  products: ProductItem[];
  onUpdateStock: (productId: string, delta: number) => void;
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

export const InventarioView: React.FC<InventarioViewProps> = ({
  products,
  onUpdateStock,
  onShowToast,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'low' | 'out' | 'top'>('all');
  const [scannerOpen, setScannerOpen] = useState(true);
  const [scannerMode, setScannerMode] = useState<'consulta' | 'entrada' | 'salida'>('consulta');
  const [isTorchOn, setIsTorchOn] = useState(false);
  const [showNewProductModal, setShowNewProductModal] = useState(false);
  const [showBulkModal, setShowBulkModal] = useState(false);

  // Filter products
  const filteredProducts = products.filter(p => {
    // Search match
    const matchesSearch = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    // Filter status match
    if (activeFilter === 'low') return p.stock <= p.minStock && p.stock > 0;
    if (activeFilter === 'out') return p.stock === 0;
    if (activeFilter === 'top') return !!p.isTopSeller;
    return true;
  });

  const handleSimulateScan = () => {
    const targetProduct = products[0];
    if (!targetProduct) return;

    if (scannerMode === 'entrada') {
      onUpdateStock(targetProduct.id, 1);
      onShowToast(`Lector: +1 Entrada registrada en ${targetProduct.name}`);
    } else if (scannerMode === 'salida') {
      onUpdateStock(targetProduct.id, -1);
      onShowToast(`Lector: -1 Salida registrada en ${targetProduct.name}`);
    } else {
      onShowToast(`Lector: SKU ${targetProduct.sku} verificado - Stock: ${targetProduct.stock} und`);
    }
  };

  return (
    <div className="flex flex-col w-full pb-28 pt-20 max-w-4xl mx-auto">
      {/* Search & Quick Action Toolbar */}
      <div className="px-4 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="relative flex-1 flex items-center">
            <span className="material-symbols-outlined absolute left-3.5 text-[#565e74] text-[20px] pointer-events-none">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar nombre, SKU o código..."
              className="w-full h-12 pl-11 pr-10 rounded-xl bg-[#eff4ff] text-[#0b1c30] placeholder:text-[#565e74] font-body-md focus:outline-none focus:bg-[#e5eeff] focus:ring-2 focus:ring-[#00288e]/20 transition-all border border-[#d3e4fe]/40"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#d3e4fe] text-[#565e74] hover:text-[#0b1c30]"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>

          {/* Toggle Scanner Viewport Button */}
          <button
            onClick={() => setScannerOpen(!scannerOpen)}
            className="h-12 px-3.5 rounded-xl bg-[#00288e] text-white flex items-center justify-center gap-1.5 shadow-md shadow-[#00288e]/20 active:scale-95 transition-transform"
            title="Lector de código óptico"
          >
            <span className="material-symbols-outlined text-[20px]">barcode_scanner</span>
            <span className="font-label-md hidden sm:inline">Escanear</span>
          </button>

          {/* Add New Product Button */}
          <button
            onClick={() => setShowNewProductModal(true)}
            className="w-12 h-12 rounded-xl bg-[#dce9ff] text-[#0b1c30] flex items-center justify-center hover:bg-[#d3e4fe] active:scale-95 transition-all shadow-xs"
            title="Añadir nuevo producto"
          >
            <span className="material-symbols-outlined text-[22px]">add</span>
          </button>
        </div>

        {/* Live Barcode Scanner HUD Panel */}
        {scannerOpen && (
          <div className="relative w-full rounded-2xl bg-[#213145] text-[#eaf1ff] p-4 overflow-hidden shadow-xl transition-all duration-300 border border-slate-700/50">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-[#00288e]/30 rounded-full blur-2xl pointer-events-none"></div>

            {/* Mode Selector Chips */}
            <div className="flex items-center justify-between gap-2 mb-3 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4edea3] animate-ping"></span>
                <span className="font-label-sm uppercase tracking-wider text-[#eaf1ff]/90 font-bold">
                  Lector Óptico Activo
                </span>
              </div>
              <div className="flex items-center bg-black/40 p-0.5 rounded-lg text-[11px] font-label-md font-semibold text-[#eaf1ff]/70 border border-white/10">
                <button
                  onClick={() => { setScannerMode('consulta'); onShowToast('Modo Escáner: Consulta rápida'); }}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    scannerMode === 'consulta' ? 'bg-[#00288e] text-white shadow-xs' : 'hover:text-white'
                  }`}
                >
                  Consulta
                </button>
                <button
                  onClick={() => { setScannerMode('entrada'); onShowToast('Modo Escáner: + Entrada inventario'); }}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    scannerMode === 'entrada' ? 'bg-[#00563a] text-white shadow-xs' : 'hover:text-white'
                  }`}
                >
                  + Entrada
                </button>
                <button
                  onClick={() => { setScannerMode('salida'); onShowToast('Modo Escáner: - Salida inventario'); }}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    scannerMode === 'salida' ? 'bg-[#ba1a1a] text-white shadow-xs' : 'hover:text-white'
                  }`}
                >
                  - Salida
                </button>
              </div>
            </div>

            {/* Scanner Target Reticle / HUD */}
            <div 
              onClick={handleSimulateScan}
              className="relative w-full h-36 rounded-xl bg-black/60 flex items-center justify-center overflow-hidden cursor-pointer group"
              title="Haz clic para simular lectura de código de barras"
            >
              {/* Live Camera Ambient Grid simulation */}
              <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

              {/* Animated Laser Line */}
              <div className="absolute w-full h-[2.5px] bg-gradient-to-r from-transparent via-[#ba1a1a] to-transparent shadow-[0_0_12px_#ba1a1a] animate-[pulse_1.5s_infinite]"></div>

              {/* Corner Frame Brackets */}
              <div className="relative w-64 h-24 border-dashed border-2 border-white/40 rounded-lg flex items-center justify-center p-2 group-hover:border-white/80 transition-colors">
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#4edea3]"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#4edea3]"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#4edea3]"></div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#4edea3]"></div>
                
                <div className="flex flex-col items-center gap-1 text-center">
                  <span className="material-symbols-outlined text-[#eaf1ff]/70 text-[26px]">center_focus_weak</span>
                  <span className="font-label-sm text-[#eaf1ff]/90">Centra EAN-13 / Code128</span>
                  <span className="text-[10px] text-[#4edea3] bg-black/50 px-2 py-0.5 rounded font-mono">
                    Toca para simular escaneo
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Guidance & Flash toggle */}
            <div className="mt-3 flex items-center justify-between text-[#eaf1ff]/70 relative z-10">
              <p className="font-body-sm truncate pr-2">
                Apunta al código para registrar movimiento veloz
              </p>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => {
                    setIsTorchOn(!isTorchOn);
                    onShowToast(!isTorchOn ? 'Linterna activada' : 'Linterna apagada');
                  }}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                    isTorchOn 
                      ? 'bg-amber-400/30 text-amber-300 ring-1 ring-amber-400' 
                      : 'bg-white/10 hover:bg-white/20 text-[#eaf1ff]'
                  }`}
                  title="Linterna"
                >
                  <span className="material-symbols-outlined text-[18px]">flash_on</span>
                </button>
                <button
                  onClick={() => setScannerOpen(false)}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#eaf1ff]"
                  title="Minimizar visor"
                >
                  <span className="material-symbols-outlined text-[18px]">expand_less</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Filter Pills (Stock Status) */}
      <div className="px-4 mt-4 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 min-w-max pb-1">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 rounded-full font-label-md transition-all shadow-xs ${
              activeFilter === 'all'
                ? 'bg-[#00288e] text-white font-bold'
                : 'bg-[#e5eeff] text-[#0b1c30] hover:bg-[#d3e4fe]'
            }`}
          >
            Todos ({products.length})
          </button>

          <button
            onClick={() => setActiveFilter('low')}
            className={`px-3.5 py-1.5 rounded-full font-label-md transition-all flex items-center gap-1.5 shadow-xs ${
              activeFilter === 'low'
                ? 'bg-[#ba1a1a] text-white font-bold'
                : 'bg-[#e5eeff] text-[#0b1c30] hover:bg-[#d3e4fe]'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${activeFilter === 'low' ? 'bg-white' : 'bg-[#ba1a1a]'}`}></span>
            Alerta Stock (4)
          </button>

          <button
            onClick={() => setActiveFilter('out')}
            className={`px-3.5 py-1.5 rounded-full font-label-md transition-all flex items-center gap-1.5 shadow-xs ${
              activeFilter === 'out'
                ? 'bg-[#565e74] text-white font-bold'
                : 'bg-[#e5eeff] text-[#0b1c30] hover:bg-[#d3e4fe]'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${activeFilter === 'out' ? 'bg-white' : 'bg-[#757684]'}`}></span>
            Agotados (2)
          </button>

          <button
            onClick={() => setActiveFilter('top')}
            className={`px-3.5 py-1.5 rounded-full font-label-md transition-all flex items-center gap-1.5 shadow-xs ${
              activeFilter === 'top'
                ? 'bg-[#00563a] text-white font-bold'
                : 'bg-[#e5eeff] text-[#0b1c30] hover:bg-[#d3e4fe]'
            }`}
          >
            <span className="material-symbols-outlined text-[16px] text-amber-500">local_fire_department</span>
            Más Vendidos
          </button>
        </div>
      </div>

      {/* Inventory Performance Mini-Metrics Grid */}
      <div className="px-4 mt-3 grid grid-cols-2 gap-3">
        <div className="p-3.5 rounded-xl bg-white shadow-sm flex flex-col justify-between border border-[#eff4ff]">
          <div className="flex items-center justify-between text-[#565e74]">
            <span className="font-label-sm uppercase tracking-wide">Valorización</span>
            <span className="material-symbols-outlined text-[18px] text-[#00288e]">account_balance_wallet</span>
          </div>
          <div className="mt-2">
            <span className="font-metric-display-mobile text-[#0b1c30]">$ 14.820.000</span>
            <span className="block font-label-sm text-[#565e74]">Costo en Bodega (COP)</span>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white shadow-sm flex flex-col justify-between border border-[#eff4ff]">
          <div className="flex items-center justify-between text-[#565e74]">
            <span className="font-label-sm uppercase tracking-wide">Rotación Semanal</span>
            <span className="material-symbols-outlined text-[18px] text-[#00563a]">trending_up</span>
          </div>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="font-metric-display-mobile text-[#0b1c30]">94.2%</span>
            <span className="font-label-sm text-[#003d27] bg-[#6ffbbe]/40 px-1.5 py-0.2 rounded font-bold">
              +5.3%
            </span>
          </div>
          <span className="font-label-sm text-[#565e74]">112 unidades despachadas</span>
        </div>
      </div>

      {/* Products List Stream */}
      <div className="px-4 mt-4 flex flex-col gap-3">
        <div className="flex items-center justify-between px-1">
          <span className="font-label-md uppercase tracking-wider text-[#565e74]">
            Artículos en Inventario ({filteredProducts.length})
          </span>
          <span className="font-label-sm text-[#565e74]">Modo Express: Toca +/- para ajustar</span>
        </div>

        {filteredProducts.map((product) => {
          const isLow = product.stock <= product.minStock && product.stock > 0;
          const isOut = product.stock === 0;

          return (
            <div
              key={product.id}
              className={`p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow border border-[#eff4ff] ${
                isOut ? 'opacity-90' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Product Thumbnail */}
                <div className="w-14 h-14 rounded-xl bg-[#e5eeff] flex-shrink-0 flex items-center justify-center overflow-hidden relative shadow-xs">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className={`w-full h-full object-cover ${isOut ? 'grayscale' : ''}`}
                  />
                  {isOut && (
                    <div className="absolute inset-0 bg-[#0b1c30]/40 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-[20px]">block</span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-1">
                    <h3 className="font-headline-md text-[#0b1c30] truncate">
                      {product.name}
                    </h3>

                    {/* Status Pill */}
                    {isLow && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#ffdad6] text-[#ba1a1a] font-label-sm font-bold flex-shrink-0">
                        <span className="material-symbols-outlined text-[13px]">warning</span>
                        Stock Bajo
                      </span>
                    )}
                    {isOut && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#d3e4fe] text-[#565e74] font-label-sm font-bold flex-shrink-0">
                        Agotado
                      </span>
                    )}
                    {!isLow && !isOut && product.isTopSeller && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#dae2fd] text-[#131b2e] font-label-sm font-semibold flex-shrink-0">
                        <span className="material-symbols-outlined text-[12px] text-amber-600">star</span>
                        Top Seller
                      </span>
                    )}
                    {!isLow && !isOut && !product.isTopSeller && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#00563a]/15 text-[#003d27] font-label-sm font-semibold flex-shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]"></span>
                        En Stock
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mt-1 text-[#565e74]">
                    <span className="material-symbols-outlined text-[16px]">barcode</span>
                    <span className="font-label-sm font-mono tracking-wide">{product.sku}</span>
                    <span className="text-[#c4c5d5]">•</span>
                    <span className="font-body-sm">Costo: ${product.cost.toLocaleString('es-CO')}</span>
                  </div>

                  <div className="mt-2.5 flex items-end justify-between">
                    <div>
                      <span className="font-label-sm text-[#565e74] block">PVP Unitario</span>
                      <span className="font-headline-md text-[#00288e] font-bold">
                        $ {product.price.toLocaleString('es-CO')} <span className="font-label-sm text-[#565e74]">COP</span>
                      </span>
                    </div>

                    {/* Quick Counter Stepper */}
                    <div className="flex items-center gap-1.5 bg-[#e5eeff] rounded-xl p-1">
                      <button
                        onClick={() => {
                          if (product.stock > 0) {
                            onUpdateStock(product.id, -1);
                            onShowToast(`Stock ajustado: ${product.name} (-1)`);
                          }
                        }}
                        disabled={product.stock === 0}
                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                          product.stock === 0
                            ? 'bg-white/40 text-slate-400 cursor-not-allowed'
                            : 'bg-white text-[#0b1c30] hover:bg-[#ffdad6] hover:text-[#ba1a1a] shadow-xs active:scale-95'
                        }`}
                        title="Descontar unidad"
                      >
                        <span className="material-symbols-outlined text-[18px]">remove</span>
                      </button>

                      <div className="px-1 text-center min-w-[34px]">
                        <span className={`font-headline-md font-extrabold ${
                          isLow ? 'text-[#ba1a1a]' : isOut ? 'text-[#565e74]' : 'text-[#0b1c30]'
                        }`}>
                          {product.stock}
                        </span>
                        <span className="block font-label-sm text-[9px] text-[#565e74] leading-none">
                          mín {product.minStock}
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          onUpdateStock(product.id, 1);
                          onShowToast(`Stock ingresado: ${product.name} (+1)`);
                        }}
                        className="w-8 h-8 rounded-lg bg-[#00288e] text-white hover:bg-[#1e40af] flex items-center justify-center transition-colors shadow-xs active:scale-95"
                        title="Agregar unidad"
                      >
                        <span className="material-symbols-outlined text-[18px]">add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Operational Floating Action Bar */}
      <div className="px-4 mt-6 flex flex-col gap-2.5">
        <div className="p-3 rounded-xl bg-[#eff4ff] border border-[#d3e4fe] flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#565e74]">
            <span className="material-symbols-outlined text-[20px] text-[#00288e]">sync_saved_locally</span>
            <span className="font-label-md text-[#0b1c30]">Sincronizado con DIAN &amp; Bodega</span>
          </div>
          <span className="font-label-sm text-[#565e74]">Hace 2 min</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* Entrada Masiva de Inventario */}
          <button
            onClick={() => setShowBulkModal(true)}
            className="h-12 px-3 rounded-xl bg-[#e5eeff] text-[#0b1c30] font-label-md font-semibold flex items-center justify-center gap-2 hover:bg-[#d3e4fe] active:scale-98 transition-all shadow-xs"
          >
            <span className="material-symbols-outlined text-[20px] text-[#00288e]">add_to_photos</span>
            <span>Entrada Masiva</span>
          </button>

          {/* Exportar Kardex PDF */}
          <button
            onClick={() => onShowToast('Generando Kardex PDF oficial con resolución DIAN...')}
            className="h-12 px-3 rounded-xl bg-[#213145] text-[#eaf1ff] font-label-md font-semibold flex items-center justify-center gap-2 shadow-sm hover:opacity-90 active:scale-98 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
            <span>Exportar Kardex</span>
          </button>
        </div>
      </div>

      {/* Modal: Nuevo Producto */}
      {showNewProductModal && (
        <div className="fixed inset-0 z-50 bg-[#0b1c30]/40 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl animate-in fade-in slide-in-from-bottom-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#eff4ff]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#00288e]">
                  <span className="material-symbols-outlined text-[20px]">add_box</span>
                </div>
                <h3 className="font-headline-md text-[#0b1c30] font-bold">Nuevo Artículo en Bodega</h3>
              </div>
              <button 
                onClick={() => setShowNewProductModal(false)}
                className="w-8 h-8 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#565e74]"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                setShowNewProductModal(false);
                onShowToast('Nuevo producto registrado en Tienda Principal');
              }}
              className="space-y-3 pt-3 font-body-sm"
            >
              <div>
                <label className="font-label-sm text-[#565e74] block mb-1">Nombre de la Prenda</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Chaleco Lino Italiano Gris"
                  className="w-full h-11 px-3 rounded-xl bg-[#eff4ff] border border-[#d3e4fe] text-[#0b1c30] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-label-sm text-[#565e74] block mb-1">Código EAN-13 / SKU</label>
                  <input
                    type="text"
                    defaultValue="770891234"
                    className="w-full h-11 px-3 rounded-xl bg-[#eff4ff] border border-[#d3e4fe] text-[#0b1c30] font-mono focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-label-sm text-[#565e74] block mb-1">Talla</label>
                  <select className="w-full h-11 px-3 rounded-xl bg-[#eff4ff] border border-[#d3e4fe] text-[#0b1c30] focus:outline-none">
                    <option>Talla 32</option>
                    <option>Talla 34</option>
                    <option>Talla 36</option>
                    <option>Talla M</option>
                    <option>Talla L</option>
                    <option>Talla XL</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-label-sm text-[#565e74] block mb-1">Costo Unitario ($)</label>
                  <input
                    type="number"
                    defaultValue={45000}
                    className="w-full h-11 px-3 rounded-xl bg-[#eff4ff] border border-[#d3e4fe] text-[#0b1c30] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-label-sm text-[#565e74] block mb-1">PVP Venta ($)</label>
                  <input
                    type="number"
                    defaultValue={85000}
                    className="w-full h-11 px-3 rounded-xl bg-[#eff4ff] border border-[#d3e4fe] text-[#0b1c30] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-label-sm text-[#565e74] block mb-1">Stock Inicial</label>
                  <input
                    type="number"
                    defaultValue={12}
                    className="w-full h-11 px-3 rounded-xl bg-[#eff4ff] border border-[#d3e4fe] text-[#0b1c30] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-label-sm text-[#565e74] block mb-1">Stock Mínimo Alerta</label>
                  <input
                    type="number"
                    defaultValue={4}
                    className="w-full h-11 px-3 rounded-xl bg-[#eff4ff] border border-[#d3e4fe] text-[#0b1c30] focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowNewProductModal(false)}
                  className="h-11 flex-1 rounded-xl bg-[#eff4ff] text-[#565e74] font-label-md"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="h-11 flex-1 rounded-xl bg-[#00288e] text-white font-label-md font-bold shadow-md shadow-[#00288e]/20"
                >
                  Guardar Prenda
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Entrada Masiva */}
      {showBulkModal && (
        <div className="fixed inset-0 z-50 bg-[#0b1c30]/40 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#eff4ff]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#00288e] text-[22px]">inventory</span>
                <h3 className="font-headline-md text-[#0b1c30] font-bold">Recepción por Lote / Taller</h3>
              </div>
              <button onClick={() => setShowBulkModal(false)} className="w-8 h-8 rounded-full bg-[#eff4ff] flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <div className="py-4 space-y-3 font-body-sm">
              <p className="text-[#565e74]">
                Registra remisiones de confección o despachos desde la fábrica matriz El Poblado.
              </p>
              <div className="p-3 rounded-xl bg-[#eff4ff] border border-[#d3e4fe] space-y-2">
                <div className="flex justify-between font-label-sm text-[#0b1c30]">
                  <span>Remisión Taller #RM-4491</span>
                  <span className="text-[#00563a] font-bold">+48 prendas</span>
                </div>
                <p className="text-[11px] text-[#565e74]">
                  Jean Slim Fit (x24), Camisa Oxford (x14), Blazers Lino (x10)
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setShowBulkModal(false)} 
                className="h-11 flex-1 rounded-xl bg-[#eff4ff] text-[#565e74] font-label-md"
              >
                Cerrar
              </button>
              <button 
                onClick={() => {
                  setShowBulkModal(false);
                  onShowToast('Lote #RM-4491 cargado a inventario (+48 und)');
                }} 
                className="h-11 flex-1 rounded-xl bg-[#00288e] text-white font-label-md font-bold"
              >
                Cargar Lote
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
