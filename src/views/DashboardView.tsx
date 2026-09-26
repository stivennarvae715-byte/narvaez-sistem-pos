import React, { useState } from 'react';
import { ScreenId } from '../types';

interface DashboardViewProps {
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ onNavigate, onShowToast }) => {
  const [period, setPeriod] = useState<'7D' | 'Mes'>('7D');
  const [hoveredDay, setHoveredDay] = useState<string | null>(null);

  return (
    <div className="flex flex-col w-full px-4 pt-20 pb-28 max-w-4xl mx-auto space-y-4">
      {/* Header del Dashboard & Estado de Caja */}
      <div className="flex flex-col space-y-1 pt-1">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-label-sm text-[#565e74] uppercase tracking-wider">Hoy, 24 de Octubre</p>
            <h1 className="font-headline-lg text-[#0b1c30]">Hola, Admin</h1>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00563a]/10 border border-[#00563a]/20">
            <span className="w-2 h-2 rounded-full bg-[#003d27] animate-pulse"></span>
            <span className="font-label-sm text-[#003d27] font-bold tracking-tight">Caja Abierta (Turno 01)</span>
          </div>
        </div>
      </div>

      {/* Métricas Principales del Día */}
      <div className="grid grid-cols-1 gap-3">
        {/* Card Principal: Total Vendido */}
        <div className="p-5 rounded-2xl bg-white shadow-sm flex flex-col justify-between relative overflow-hidden border border-[#eff4ff]">
          <div className="absolute right-0 top-0 w-36 h-36 bg-[#00288e]/5 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"></div>
          
          <div className="flex items-center justify-between relative z-10">
            <span className="font-label-md text-[#565e74]">Total Vendido Hoy</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#00563a]/15 text-[#003d27] font-label-sm font-bold">
              <span className="material-symbols-outlined text-[15px]">trending_up</span>
              +18.4% vs ayer
            </span>
          </div>

          <div className="my-3 relative z-10">
            <div className="font-metric-display-mobile text-[#0b1c30] tracking-tight">
              $ 3.480.000 <span className="font-label-md text-[#565e74] font-normal">COP</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 bg-[#eff4ff]/60 -mx-5 -mb-5 px-5 py-3 border-t border-[#eff4ff]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#00288e] text-[18px]">receipt_long</span>
              <span className="font-label-md text-[#0b1c30] font-semibold">42 transacciones</span>
            </div>
            <span className="font-label-sm text-[#565e74]">Promedio: 5.2/hora</span>
          </div>
        </div>

        {/* Mini Cards en Grilla 2x1 */}
        <div className="grid grid-cols-2 gap-3">
          {/* Margen Estimado */}
          <div className="p-4 rounded-xl bg-white shadow-sm flex flex-col justify-between border border-[#eff4ff]">
            <div className="flex items-center gap-1.5 text-[#565e74]">
              <span className="material-symbols-outlined text-[16px] text-[#003d27]">monetization_on</span>
              <span className="font-label-sm uppercase tracking-wide">Margen Est.</span>
            </div>
            <div className="mt-2">
              <div className="font-headline-md text-[#0b1c30] font-bold leading-tight">$ 1.120.000</div>
              <span className="font-label-sm text-[#003d27] font-medium">32.2% margen neto</span>
            </div>
          </div>

          {/* Ticket Promedio */}
          <div className="p-4 rounded-xl bg-white shadow-sm flex flex-col justify-between border border-[#eff4ff]">
            <div className="flex items-center gap-1.5 text-[#565e74]">
              <span className="material-symbols-outlined text-[16px] text-[#00288e]">shopping_bag</span>
              <span className="font-label-sm uppercase tracking-wide">Ticket Promedio</span>
            </div>
            <div className="mt-2">
              <div className="font-headline-md text-[#0b1c30] font-bold leading-tight">$ 82.850</div>
              <span className="font-label-sm text-[#565e74] font-medium">2.1 prendas / venta</span>
            </div>
          </div>
        </div>

        {/* Alerta Crítica Stock */}
        <div className="p-3.5 rounded-xl bg-[#ffdad6]/60 border border-[#ffdad6] flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-[#ba1a1a]/15 flex items-center justify-center flex-shrink-0 text-[#ba1a1a]">
              <span className="material-symbols-outlined text-[20px]">warning</span>
            </div>
            <div className="min-w-0">
              <p className="font-label-md text-[#93000a] font-bold truncate">Stock Crítico</p>
              <p className="font-body-sm text-[#93000a]/80 truncate">4 productos requieren reposición</p>
            </div>
          </div>
          <button 
            onClick={() => {
              onNavigate('inventario');
              onShowToast('Filtrando inventario por alerta de stock');
            }}
            className="px-3 py-1.5 rounded-lg bg-[#ba1a1a] text-white font-label-sm font-semibold flex items-center gap-1 flex-shrink-0 active:scale-95 transition-transform shadow-xs"
          >
            Revisar
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Acciones Rápidas */}
      <div className="flex items-center gap-2.5">
        <button 
          onClick={() => {
            onNavigate('nueva-venta');
            onShowToast('Iniciando venta en Caja 01...');
          }}
          className="flex-1 h-12 rounded-xl bg-[#00288e] text-white font-label-lg font-bold flex items-center justify-center gap-2 shadow-md shadow-[#00288e]/20 active:scale-[0.98] transition-all hover:bg-[#1e40af]"
        >
          <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
          Venta Rápida
        </button>
        <button 
          onClick={() => {
            onNavigate('inventario');
            onShowToast('Abriendo visor óptico de códigos');
          }}
          aria-label="Escanear Código" 
          className="w-12 h-12 rounded-xl bg-[#dce9ff] text-[#0b1c30] flex items-center justify-center active:scale-[0.98] transition-transform hover:bg-[#d3e4fe]"
          title="Escanear Código de Barras"
        >
          <span className="material-symbols-outlined text-[22px]">barcode_scanner</span>
        </button>
        <button 
          onClick={() => {
            onNavigate('cierre-z');
            onShowToast('Generando reporte fiscal Cierre Z');
          }}
          aria-label="Reporte Diario" 
          className="w-12 h-12 rounded-xl bg-[#dce9ff] text-[#0b1c30] flex items-center justify-center active:scale-[0.98] transition-transform hover:bg-[#d3e4fe]"
          title="Ver Cierre Z del Día"
        >
          <span className="material-symbols-outlined text-[22px]">summarize</span>
        </button>
      </div>

      {/* Gráfico de Ventas de la Semana */}
      <div className="p-5 rounded-2xl bg-white shadow-sm flex flex-col space-y-3 border border-[#eff4ff]">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-headline-md text-[#0b1c30]">Curva Semanal</h2>
            <p className="font-body-sm text-[#565e74]">Rendimiento en el punto de venta</p>
          </div>
          {/* Selector de periodo */}
          <div className="flex items-center bg-[#eff4ff] p-1 rounded-lg">
            <button 
              onClick={() => { setPeriod('7D'); onShowToast('Visualizando últimos 7 días'); }}
              className={`px-3 py-1 rounded-md font-label-sm font-bold transition-all ${
                period === '7D' 
                  ? 'bg-white text-[#00288e] shadow-xs' 
                  : 'text-[#565e74] hover:text-[#0b1c30]'
              }`}
            >
              7D
            </button>
            <button 
              onClick={() => { setPeriod('Mes'); onShowToast('Visualizando comparativa mensual'); }}
              className={`px-3 py-1 rounded-md font-label-sm transition-all ${
                period === 'Mes' 
                  ? 'bg-white text-[#00288e] font-bold shadow-xs' 
                  : 'text-[#565e74] hover:text-[#0b1c30]'
              }`}
            >
              Mes
            </button>
          </div>
        </div>

        {/* Indicador de Día Pico */}
        <div className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#eff4ff] border border-[#d3e4fe]">
          <span className="font-label-sm text-[#565e74]">Día récord de la semana:</span>
          <span className="font-label-sm text-[#00288e] font-bold">Sábado ($4.2M COP)</span>
        </div>

        {/* Gráfico SVG Interactivo */}
        <div className="w-full pt-3 pb-1">
          <svg className="w-full h-28 overflow-visible" viewBox="0 0 320 120">
            <defs>
              <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#1e40af" stopOpacity="0.25"></stop>
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.0"></stop>
              </linearGradient>
            </defs>
            {/* Horizontal guide lines */}
            <line stroke="#eff4ff" strokeWidth="1.5" x1="0" x2="320" y1="20" y2="20"></line>
            <line stroke="#eff4ff" strokeWidth="1.5" x1="0" x2="320" y1="60" y2="60"></line>
            <line stroke="#eff4ff" strokeWidth="1.5" x1="0" x2="320" y1="100" y2="100"></line>
            
            {/* Area path */}
            <path 
              d="M 0 85 C 40 75, 55 90, 80 50 C 105 10, 130 65, 160 55 C 190 45, 215 80, 240 70 C 265 60, 280 15, 290 15 C 305 15, 315 45, 320 40 L 320 115 L 0 115 Z" 
              fill="url(#chartGradient)"
            ></path>
            
            {/* Trend curve */}
            <path 
              d="M 0 85 C 40 75, 55 90, 80 50 C 105 10, 130 65, 160 55 C 190 45, 215 80, 240 70 C 265 60, 280 15, 290 15 C 305 15, 315 45, 320 40" 
              fill="none" 
              stroke="#00288e" 
              strokeLinecap="round" 
              strokeWidth="3"
            ></path>
            
            {/* Interactive nodes */}
            <circle 
              cx="80" cy="50" fill="#ffffff" r="4" stroke="#00288e" strokeWidth="2.5" 
              className="cursor-pointer hover:r-6" 
              onMouseEnter={() => setHoveredDay('Mié: $2.450.000 COP')}
              onMouseLeave={() => setHoveredDay(null)}
            ></circle>
            <circle 
              cx="160" cy="55" fill="#ffffff" r="4" stroke="#00288e" strokeWidth="2.5"
              className="cursor-pointer hover:r-6"
              onMouseEnter={() => setHoveredDay('Jue: $2.180.000 COP')}
              onMouseLeave={() => setHoveredDay(null)}
            ></circle>
            <circle 
              cx="240" cy="70" fill="#ffffff" r="4" stroke="#00288e" strokeWidth="2.5"
              className="cursor-pointer hover:r-6"
              onMouseEnter={() => setHoveredDay('Vie: $1.890.000 COP')}
              onMouseLeave={() => setHoveredDay(null)}
            ></circle>
            
            {/* Saturday peak node */}
            <circle cx="290" cy="15" fill="#00288e" r="5" className="cursor-pointer"></circle>
            <circle className="animate-ping" cx="290" cy="15" fill="#1e40af" opacity="0.3" r="8"></circle>
            
            {/* Today node */}
            <circle cx="320" cy="40" fill="#003d27" r="4.5" stroke="#ffffff" strokeWidth="2.5"></circle>
          </svg>

          {hoveredDay && (
            <div className="text-center font-label-sm text-[#00288e] bg-[#eff4ff] py-1 px-3 rounded-lg mx-auto w-fit font-bold">
              {hoveredDay}
            </div>
          )}

          {/* Days axis */}
          <div className="flex justify-between items-center text-[#565e74] font-label-sm pt-2">
            <span>Lun</span>
            <span>Mar</span>
            <span>Mié</span>
            <span>Jue</span>
            <span>Vie</span>
            <span className="text-[#00288e] font-bold">Sáb</span>
            <span className="text-[#003d27] font-bold">Hoy</span>
          </div>
        </div>
      </div>

      {/* Métodos de Pago Locales (Colombia) */}
      <div className="p-5 rounded-2xl bg-white shadow-sm flex flex-col space-y-3 border border-[#eff4ff]">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-headline-md text-[#0b1c30]">Canales de Pago</h2>
            <p className="font-body-sm text-[#565e74]">Distribución del recaudo diario</p>
          </div>
          <span className="material-symbols-outlined text-[#565e74] text-[22px]">account_balance_wallet</span>
        </div>

        {/* Segmented bar */}
        <div className="w-full h-3 rounded-full overflow-hidden flex bg-[#dce9ff]">
          <div className="bg-[#00288e]" style={{ width: '40%' }} title="Nequi / Daviplata (40%)"></div>
          <div className="bg-[#003d27]" style={{ width: '35%' }} title="Efectivo (35%)"></div>
          <div className="bg-[#565e74]" style={{ width: '25%' }} title="Datáfono / Tarjeta (25%)"></div>
        </div>

        {/* Methods list */}
        <div className="space-y-2 pt-1">
          {/* Nequi & Daviplata */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#eff4ff]">
            <div className="flex items-center gap-3">
              <div className="w-3.5 h-3.5 rounded-full bg-[#00288e] flex-shrink-0"></div>
              <div>
                <p className="font-label-md text-[#0b1c30] font-bold">Nequi &amp; Daviplata</p>
                <p className="font-body-sm text-[#565e74]">40% del total</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-label-lg font-bold text-[#0b1c30]">$ 1.392.000</p>
              <p className="font-label-sm text-[#565e74]">19 transferencias</p>
            </div>
          </div>

          {/* Efectivo */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#eff4ff]">
            <div className="flex items-center gap-3">
              <div className="w-3.5 h-3.5 rounded-full bg-[#003d27] flex-shrink-0"></div>
              <div>
                <p className="font-label-md text-[#0b1c30] font-bold">Efectivo en Caja</p>
                <p className="font-body-sm text-[#565e74]">35% del total</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-label-lg font-bold text-[#0b1c30]">$ 1.218.000</p>
              <p className="font-label-sm text-[#565e74]">16 cobros directos</p>
            </div>
          </div>

          {/* Datafono */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#eff4ff]">
            <div className="flex items-center gap-3">
              <div className="w-3.5 h-3.5 rounded-full bg-[#565e74] flex-shrink-0"></div>
              <div>
                <p className="font-label-md text-[#0b1c30] font-bold">Datafono / Tarjeta</p>
                <p className="font-body-sm text-[#565e74]">25% del total</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-label-lg font-bold text-[#0b1c30]">$ 870.000</p>
              <p className="font-label-sm text-[#565e74]">7 transacciones</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Productos Más Vendidos */}
      <div className="p-5 rounded-2xl bg-white shadow-sm flex flex-col space-y-3 border border-[#eff4ff]">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-headline-md text-[#0b1c30]">Más Vendidos Hoy</h2>
            <p className="font-body-sm text-[#565e74]">Artículos con mayor rotación</p>
          </div>
          <button 
            onClick={() => onNavigate('inventario')}
            className="font-label-sm text-[#00288e] font-bold flex items-center hover:underline"
          >
            Ver catálogo
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </div>

        {/* Product items */}
        <div className="space-y-2">
          {/* Item 1: Jean */}
          <div 
            onClick={() => onNavigate('inventario')}
            className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#eff4ff] cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-12 h-12 rounded-lg bg-[#dce9ff] flex-shrink-0 overflow-hidden relative shadow-xs">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Jean Slim Fit" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkFf_2EuZc7IcPu1RcMZKSQ2lk6Prf7Ablod-bbYhbX8Rob3CiluOGMdBcHRdNPBwrzdQI-lZHfkKAi4RBK5KTla88MuFLrkoFveaoU44IaxlRGy25KVQtSFR7-PT337dTjKaXbHyJChscqEJeMvkINJkn4EMrjfRxr7aCpTWVlSz33AKsD9rTlCYaScyCL_3po0Q-i9x_48L6vRphAtIT52GJVBt_2ZbdtoqEsFBhO8njyhabRRedcw"
                />
                <div className="absolute bottom-0 right-0 bg-[#00288e] text-white font-label-sm text-[9px] px-1 rounded-tl font-bold">#1</div>
              </div>
              <div className="min-w-0">
                <p className="font-label-md text-[#0b1c30] font-semibold truncate">Jean Slim Fit Narvaez</p>
                <p className="font-body-sm text-[#565e74]">24 unidades despachadas</p>
              </div>
            </div>
            <div className="text-right flex-shrink-0 ml-2">
              <p className="font-label-lg font-bold text-[#0b1c30]">$ 1.440.000</p>
              <span className="font-label-sm text-[#003d27] font-medium">Alta rotación</span>
            </div>
          </div>

          {/* Item 2: Camisa Oxford */}
          <div 
            onClick={() => onNavigate('inventario')}
            className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#eff4ff] cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-12 h-12 rounded-lg bg-[#dce9ff] flex-shrink-0 overflow-hidden relative shadow-xs">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Camisa Oxford" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNNyBgFW_a4ngIw00Z5cYF15wRQlIh-JsBvPn1c2wq0DLI8x37E3vcfJ9CcnJ3VWN2Q3ilx-qGstwhu4sbkQi_BvlSlAZ9sJ7h4faWCWCgPJiDmq3EAnuPgMMM_elskLaiZ8eHK_1Q_YSTjSMsXMPJ_-Oa_jhReVw23cSEq0oiy0tCjiIdxpln_Msf3aXVfmYpzXjT3fW8gVMs3Qh0RvwdvCpIxnn30C255IRFyrMmc_TGs-ZLjzLbkQ"
                />
                <div className="absolute bottom-0 right-0 bg-[#00288e] text-white font-label-sm text-[9px] px-1 rounded-tl font-bold">#2</div>
              </div>
              <div className="min-w-0">
                <p className="font-label-md text-[#0b1c30] font-semibold truncate">Camisa Oxford Premium</p>
                <p className="font-body-sm text-[#565e74]">18 unidades despachadas</p>
              </div>
            </div>
            <div className="text-right flex-shrink-0 ml-2">
              <p className="font-label-lg font-bold text-[#0b1c30]">$ 1.170.000</p>
              <span className="font-label-sm text-[#565e74] font-medium">Stock: 14 und</span>
            </div>
          </div>

          {/* Item 3: Camiseta Pima */}
          <div 
            onClick={() => onNavigate('inventario')}
            className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#eff4ff] cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-12 h-12 rounded-lg bg-[#dce9ff] flex-shrink-0 overflow-hidden relative shadow-xs">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Camiseta Pima" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFmj_u92psl5Hb1YvPsNVBUXIzrB19ZV-V7rU79PToY14uW1Y1tnxY6jy7rllwrpv-g2f9KmeUzNdTYMMt2Oh_Iph1bpdK9AoPpiQIO-He6QM1y2If00V1RWQbypOWus_8Uebapdycoz7UgQ-J3vKTmAhqh7TshM0GONbjEcWSgrdMw4Xfd2JHMoMbRU9rzq5thFRXT-PmDVBbIKoI5KLNBKcbI9Z25IPChujz07BiKwOxSlVwhmoJIQ"
                />
                <div className="absolute bottom-0 right-0 bg-[#00288e] text-white font-label-sm text-[9px] px-1 rounded-tl font-bold">#3</div>
              </div>
              <div className="min-w-0">
                <p className="font-label-md text-[#0b1c30] font-semibold truncate">Camiseta Básica Pima</p>
                <p className="font-body-sm text-[#565e74]">32 unidades despachadas</p>
              </div>
            </div>
            <div className="text-right flex-shrink-0 ml-2">
              <p className="font-label-lg font-bold text-[#0b1c30]">$ 800.000</p>
              <span className="font-label-sm text-[#565e74] font-medium">Stock: 48 und</span>
            </div>
          </div>

          {/* Item 4: Correa Cuero */}
          <div 
            onClick={() => onNavigate('inventario')}
            className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#eff4ff] cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-12 h-12 rounded-lg bg-[#dce9ff] flex-shrink-0 overflow-hidden relative shadow-xs">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Correa Cuero" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBS4aQ7V6fNX54Z4uI-O5jlDOnYnkhdzAHllSZvq6WOSQdDTJJ2CjuBW6Ruy8jNxhHOs0O0bIotaFWIuF9ZUgiuOVi-pKbyhMInmL6xedXEbR0SQCBf9M3N9ncyntDzQ4Qw-f38wVbx2ElNvOWe-rp5QQ0-ejow4MIOkNPiN2py0nc3s_gbYaVo591Q80gLfqabkwmX8RoHmUO3UW4dCZRjzNl63xAyG3jDYWAYkR_XePNtj1RmTJAPA"
                />
                <div className="absolute bottom-0 right-0 bg-[#565e74] text-white font-label-sm text-[9px] px-1 rounded-tl font-bold">#4</div>
              </div>
              <div className="min-w-0">
                <p className="font-label-md text-[#0b1c30] font-semibold truncate">Correa Cuero Genuino</p>
                <p className="font-body-sm text-[#565e74]">12 unidades despachadas</p>
              </div>
            </div>
            <div className="text-right flex-shrink-0 ml-2">
              <p className="font-label-lg font-bold text-[#0b1c30]">$ 360.000</p>
              <span className="font-label-sm text-[#ba1a1a] font-medium">Bajo stock (2 und)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Acceso Rápido a Casos Operativos de Sastrería */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-[#eff4ff] to-[#dae2fd] border border-[#d3e4fe] flex flex-col gap-2.5">
        <span className="font-label-sm uppercase font-bold text-[#00288e] tracking-wider">
          Flujos Operativos Rápidos
        </span>
        <div className="grid grid-cols-2 gap-2 text-left">
          <button
            onClick={() => onNavigate('factura-1049')}
            className="p-2.5 rounded-xl bg-white shadow-xs hover:shadow-sm text-left flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[#00288e] text-[20px]">receipt</span>
            <div className="min-w-0">
              <span className="font-label-sm font-bold text-[#0b1c30] block truncate">Factura #F-1049</span>
              <span className="text-[11px] text-[#565e74]">Ver venta anterior</span>
            </div>
          </button>

          <button
            onClick={() => onNavigate('cambio-devolucion')}
            className="p-2.5 rounded-xl bg-white shadow-xs hover:shadow-sm text-left flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[#003d27] text-[20px]">sync_alt</span>
            <div className="min-w-0">
              <span className="font-label-sm font-bold text-[#0b1c30] block truncate">Devolución / Cambio</span>
              <span className="text-[11px] text-[#565e74]">Garantía 30 días</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
