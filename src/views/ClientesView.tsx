import React, { useState } from 'react';
import { ClientProfile, ScreenId } from '../types';
import { CLIENT_CARLOS, OTHER_CLIENTS } from '../mockData';

interface ClientesViewProps {
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

export const ClientesView: React.FC<ClientesViewProps> = ({ onNavigate, onShowToast }) => {
  const [selectedClient, setSelectedClient] = useState<ClientProfile>(CLIENT_CARLOS);
  const [activeFilter, setActiveFilter] = useState<'all' | 'vip' | 'balance' | 'new'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewClientModal, setShowNewClientModal] = useState(false);

  return (
    <div className="flex flex-col w-full pb-28 pt-20 max-w-4xl mx-auto">
      <div className="px-4 flex flex-col gap-3">
        {/* Title & Add button */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h1 className="font-headline-lg text-[#0b1c30]">Directorio de Clientes</h1>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#dae2fd] text-[#131b2e] font-label-sm">
                348 Activos
              </span>
            </div>
            <p className="font-body-sm text-[#565e74]">Base de compradores, fidelización y facturación</p>
          </div>
          <button
            onClick={() => setShowNewClientModal(true)}
            className="h-10 px-3.5 bg-[#00288e] text-white rounded-xl font-label-md flex items-center gap-1.5 shadow-sm active:scale-95 transition-all hover:bg-[#1e40af]"
          >
            <span className="material-symbols-outlined text-[18px]">person_add</span>
            <span>+ Nuevo</span>
          </button>
        </div>

        {/* Search bar */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-12 bg-[#eff4ff] rounded-xl px-3.5 flex items-center gap-2.5 shadow-xs border border-[#d3e4fe]/40">
            <span className="material-symbols-outlined text-[#565e74] text-[20px]">search</span>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por Cédula, Nombre o Celular..."
              className="bg-transparent text-[#0b1c30] font-body-md w-full placeholder:text-[#565e74] focus:outline-none"
            />
            <button 
              onClick={() => onShowToast('Escaneando cédula con lector óptico...')}
              type="button" 
              className="w-7 h-7 rounded-lg bg-[#d3e4fe] flex items-center justify-center text-[#565e74] hover:text-[#0b1c30]"
              title="Escanear documento"
            >
              <span className="material-symbols-outlined text-[16px]">qr_code_scanner</span>
            </button>
          </div>
          <button 
            onClick={() => onShowToast('Filtros avanzados de cartera')}
            className="h-12 w-12 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#565e74] shadow-xs active:bg-[#d3e4fe] border border-[#d3e4fe]/40"
          >
            <span className="material-symbols-outlined text-[20px]">tune</span>
          </button>
        </div>

        {/* Filter chips */}
        <div className="flex items-center gap-2 overflow-x-auto py-1 no-scrollbar">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 rounded-full font-label-md whitespace-nowrap shadow-xs transition-all ${
              activeFilter === 'all'
                ? 'bg-[#00288e] text-white font-bold'
                : 'bg-[#eff4ff] text-[#444653] hover:bg-[#d3e4fe]'
            }`}
          >
            Todos (348)
          </button>
          <button
            onClick={() => setActiveFilter('vip')}
            className={`px-3.5 py-1.5 rounded-full font-label-md whitespace-nowrap shadow-xs transition-all ${
              activeFilter === 'vip'
                ? 'bg-[#00288e] text-white font-bold'
                : 'bg-[#eff4ff] text-[#444653] hover:bg-[#d3e4fe]'
            }`}
          >
            VIP / Frecuentes (42)
          </button>
          <button
            onClick={() => setActiveFilter('balance')}
            className={`px-3.5 py-1.5 rounded-full font-label-md whitespace-nowrap shadow-xs transition-all ${
              activeFilter === 'balance'
                ? 'bg-[#00288e] text-white font-bold'
                : 'bg-[#eff4ff] text-[#444653] hover:bg-[#d3e4fe]'
            }`}
          >
            Con Saldo (6)
          </button>
          <button
            onClick={() => setActiveFilter('new')}
            className={`px-3.5 py-1.5 rounded-full font-label-md whitespace-nowrap shadow-xs transition-all ${
              activeFilter === 'new'
                ? 'bg-[#00288e] text-white font-bold'
                : 'bg-[#eff4ff] text-[#444653] hover:bg-[#d3e4fe]'
            }`}
          >
            Nuevos este mes (28)
          </button>
        </div>

        {/* Métricas clave */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl bg-white shadow-sm flex flex-col justify-between border border-[#eff4ff]">
            <div className="flex items-center justify-between text-[#565e74]">
              <span className="font-label-sm uppercase tracking-wide">Ticket Promedio</span>
              <span className="material-symbols-outlined text-[18px] text-[#00563a]">payments</span>
            </div>
            <div className="mt-2">
              <span className="font-metric-display-mobile text-[#0b1c30] font-extrabold">$142.500</span>
              <span className="font-label-sm text-[#565e74] block">COP por transacción</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white shadow-sm flex flex-col justify-between border border-[#eff4ff]">
            <div className="flex items-center justify-between text-[#565e74]">
              <span className="font-label-sm uppercase tracking-wide">Tasa Recompra</span>
              <span className="material-symbols-outlined text-[18px] text-[#00288e]">published_with_changes</span>
            </div>
            <div className="mt-2">
              <div className="flex items-baseline gap-1">
                <span className="font-metric-display-mobile text-[#0b1c30] font-extrabold">68.4%</span>
                <span className="text-[#00563a] font-label-sm font-bold flex items-center">
                  <span className="material-symbols-outlined text-[14px]">arrow_upward</span>+4.2%
                </span>
              </div>
              <span className="font-label-sm text-[#565e74] block">Alta fidelización</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ficha Detallada: Cliente Seleccionado */}
      <div className="px-4 mt-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#00288e] text-[20px]">badge</span>
            <h2 className="font-headline-md text-[#0b1c30]">Ficha de Cliente Seleccionado</h2>
          </div>
          <span className="font-label-sm text-[#565e74]">Ref: CC-1020455</span>
        </div>

        {/* Tarjeta Principal del Perfil */}
        <div className="rounded-2xl bg-white p-4 shadow-sm flex flex-col gap-3.5 relative overflow-hidden border border-[#eff4ff]">
          <div className="absolute -right-8 -top-8 w-28 h-28 bg-[#eff4ff] rounded-full opacity-60 pointer-events-none"></div>

          <div className="flex items-start gap-3 relative z-10">
            <div className="w-14 h-14 rounded-2xl overflow-hidden bg-[#1e40af] text-white flex-shrink-0 flex items-center justify-center font-headline-md font-bold shadow-sm">
              {selectedClient.avatarUrl ? (
                <img
                  src={selectedClient.avatarUrl}
                  alt={selectedClient.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>{selectedClient.initials || selectedClient.name.slice(0, 2).toUpperCase()}</span>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-headline-md text-[#0b1c30] truncate">{selectedClient.name}</h3>
                {selectedClient.isVip && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#dae2fd] text-[#131b2e] font-label-sm font-bold">
                    <span className="material-symbols-outlined text-[13px] text-amber-600">star</span> VIP
                  </span>
                )}
              </div>
              <p className="font-body-sm text-[#565e74] mt-0.5">
                Cédula: <strong className="text-[#0b1c30] font-semibold">{selectedClient.docNumber}</strong> • {selectedClient.city}
              </p>
              <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                <span className="font-label-sm text-[#565e74] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">mail</span> {selectedClient.email}
                </span>
              </div>
            </div>
          </div>

          {/* Métricas del cliente */}
          <div className="grid grid-cols-3 gap-2 bg-[#eff4ff] p-2.5 rounded-xl border border-[#d3e4fe]/50">
            <div className="flex flex-col text-center">
              <span className="font-label-sm text-[#565e74]">Total Comprado</span>
              <span className="font-label-lg font-bold text-[#0b1c30] mt-0.5">
                ${(selectedClient.totalSpent).toLocaleString('es-CO')}
              </span>
              <span className="font-label-sm text-[9px] text-[#565e74]">COP Acumulado</span>
            </div>

            <div className="flex flex-col text-center">
              <span className="font-label-sm text-[#565e74]">Compras</span>
              <span className="font-label-lg font-bold text-[#0b1c30] mt-0.5">
                {selectedClient.ordersCount} órdenes
              </span>
              <span className="font-label-sm text-[9px] text-[#00563a] font-semibold">
                Última: hace {selectedClient.lastPurchaseDays}d
              </span>
            </div>

            <div className="flex flex-col text-center">
              <span className="font-label-sm text-[#565e74]">Beneficio VIP</span>
              <span className="font-label-lg font-bold text-[#00288e] mt-0.5">
                {selectedClient.vipDiscountPercent > 0 ? `${selectedClient.vipDiscountPercent}% OFF` : 'Estándar'}
              </span>
              <span className="font-label-sm text-[9px] text-[#565e74]">Automático POS</span>
            </div>
          </div>

          {/* Botones de Acción Directa */}
          <div className="flex items-center gap-2 pt-1">
            <a
              href="https://wa.me/573128492011"
              target="_blank"
              rel="noreferrer"
              onClick={() => onShowToast('Abriendo WhatsApp con Carlos Mario Restrepo...')}
              className="h-11 px-3.5 rounded-xl bg-[#e5eeff] text-[#00563a] font-label-md flex items-center justify-center gap-1.5 active:scale-95 transition-all hover:bg-[#d3e4fe]"
            >
              <span className="material-symbols-outlined text-[20px] text-[#00563a]">chat</span>
              <span>WhatsApp</span>
            </a>

            <a
              href="tel:+573128492011"
              onClick={() => onShowToast('Marcando a +57 312 849 2011...')}
              className="h-11 w-11 rounded-xl bg-[#e5eeff] text-[#565e74] flex items-center justify-center active:scale-95 transition-all hover:bg-[#d3e4fe]"
              title="Llamar"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
            </a>

            <button
              onClick={() => {
                onNavigate('nueva-venta');
                onShowToast(`Asignando cliente a Caja 01: ${selectedClient.name}`);
              }}
              className="h-11 flex-1 rounded-xl bg-[#00288e] text-white font-label-md font-bold flex items-center justify-center gap-2 shadow-sm active:scale-98 transition-all hover:bg-[#1e40af]"
            >
              <span className="material-symbols-outlined text-[19px]">point_of_sale</span>
              <span>Nueva Venta</span>
            </button>
          </div>
        </div>
      </div>

      {/* Historial de Compras Recientes */}
      <div className="px-4 mt-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#565e74] text-[20px]">history</span>
            <h2 className="font-headline-md text-[#0b1c30]">Historial de Compras</h2>
          </div>
          <button 
            onClick={() => onShowToast('Cargando 14 órdenes históricas de Carlos')}
            className="font-label-md text-[#00288e] font-semibold hover:underline"
          >
            Ver todas (14)
          </button>
        </div>

        {/* Orden 1 */}
        <div className="rounded-2xl bg-white p-4 shadow-sm flex flex-col gap-2.5 border border-[#eff4ff]">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-label-md font-bold text-[#0b1c30]">Orden #00276</span>
                <span className="px-2 py-0.5 rounded-full bg-[#dae2fd] text-[#131b2e] font-label-sm font-semibold">
                  Factura #F-1048
                </span>
              </div>
              <span className="font-body-sm text-[#565e74]">21 Oct 2024 • 04:32 PM</span>
            </div>
            <div className="text-right">
              <span className="font-headline-md font-bold text-[#0b1c30]">$185.000</span>
              <span className="font-label-sm text-[#565e74] block">COP</span>
            </div>
          </div>

          <div className="bg-[#eff4ff] p-2.5 rounded-xl flex flex-col gap-1 text-[#444653] font-body-sm">
            <div className="flex items-center justify-between">
              <span>• Jean Slim Fit Narvaez (T-32)</span>
              <span className="font-label-sm font-semibold">x1</span>
            </div>
            <div className="flex items-center justify-between">
              <span>• Camiseta Pima Cuello Redondo Blanca (M)</span>
              <span className="font-label-sm font-semibold">x2</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1 text-[#565e74] font-label-sm">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#4edea3] inline-block"></span>
              <span>Pagado con <strong className="text-[#0b1c30]">Nequi</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => {
                  onNavigate('factura-1049');
                  onShowToast('Abriendo ticket digital de la orden');
                }}
                className="p-1 rounded text-[#00288e] hover:bg-[#eff4ff] flex items-center gap-1 font-semibold"
              >
                <span className="material-symbols-outlined text-[16px]">receipt_long</span> Ticket
              </button>
              <button 
                onClick={() => onShowToast('Copiando enlace público de orden #00276')}
                className="p-1 rounded text-[#565e74] hover:bg-[#eff4ff] flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px]">send</span> Compartir
              </button>
            </div>
          </div>
        </div>

        {/* Orden 2 */}
        <div className="rounded-2xl bg-white p-4 shadow-sm flex flex-col gap-2.5 border border-[#eff4ff]">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-label-md font-bold text-[#0b1c30]">Orden #00241</span>
                <span className="px-2 py-0.5 rounded-full bg-[#dae2fd] text-[#131b2e] font-label-sm font-semibold">
                  Factura #F-0982
                </span>
              </div>
              <span className="font-body-sm text-[#565e74]">05 Oct 2024 • 01:15 PM</span>
            </div>
            <div className="text-right">
              <span className="font-headline-md font-bold text-[#0b1c30]">$315.000</span>
              <span className="font-label-sm text-[#565e74] block">COP</span>
            </div>
          </div>

          <div className="bg-[#eff4ff] p-2.5 rounded-xl flex flex-col gap-1 text-[#444653] font-body-sm">
            <div className="flex items-center justify-between">
              <span>• Chaqueta Cuero Café T-M</span>
              <span className="font-label-sm font-semibold">x1</span>
            </div>
            <div className="flex items-center justify-between">
              <span>• Correa Cuero Italiano Negra</span>
              <span className="font-label-sm font-semibold">x1</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1 text-[#565e74] font-label-sm">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#4edea3] inline-block"></span>
              <span>Mixto: <strong className="text-[#0b1c30]">Efectivo &amp; Tarjeta</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => onNavigate('factura-1049')}
                className="p-1 rounded text-[#00288e] hover:bg-[#eff4ff] flex items-center gap-1 font-semibold"
              >
                <span className="material-symbols-outlined text-[16px]">receipt_long</span> Ticket
              </button>
              <button 
                onClick={() => onShowToast('Copiando ticket')}
                className="p-1 rounded text-[#565e74] hover:bg-[#eff4ff] flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px]">send</span> Compartir
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Alternar Cliente Rápido */}
      <div className="px-4 mt-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="font-headline-md text-[#0b1c30]">Alternar Cliente Rápido</h2>
          <span className="font-label-sm text-[#565e74]">Frecuentes del local</span>
        </div>

        <div className="flex flex-col gap-2">
          {OTHER_CLIENTS.map((client) => {
            const isCurrent = selectedClient.id === client.id;
            return (
              <div
                key={client.id}
                onClick={() => {
                  setSelectedClient(client);
                  onShowToast(`Cliente activo: ${client.name}`);
                }}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  isCurrent 
                    ? 'bg-[#eff4ff] border-[#00288e] shadow-xs' 
                    : 'bg-white border-[#eff4ff] hover:bg-[#f8f9ff]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#dae2fd] text-[#131b2e] flex items-center justify-center font-bold text-sm">
                    {client.initials || client.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-label-md font-bold text-[#0b1c30]">{client.name}</span>
                      {client.isVip && (
                        <span className="px-1.5 py-0.2 rounded bg-[#e5eeff] text-[#00288e] font-label-sm text-[9px] font-bold">
                          {client.docType === 'NIT' ? 'NIT' : 'VIP'}
                        </span>
                      )}
                    </div>
                    <p className="font-body-sm text-[#565e74]">
                      {client.docType} {client.docNumber} • {client.ordersCount} órdenes
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-label-md font-bold text-[#0b1c30]">
                    ${client.totalSpent.toLocaleString('es-CO')}
                  </span>
                  <span className="font-label-sm text-[10px] text-[#565e74] block">COP total</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal: Registrar Nuevo Cliente */}
      {showNewClientModal && (
        <div className="fixed inset-0 z-50 bg-[#0b1c30]/40 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl animate-in fade-in slide-in-from-bottom-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#eff4ff]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#00288e]">
                  <span className="material-symbols-outlined text-[20px]">person_add</span>
                </div>
                <h3 className="font-headline-md text-[#0b1c30] font-bold">Registrar Nuevo Cliente</h3>
              </div>
              <button 
                onClick={() => setShowNewClientModal(false)}
                className="w-8 h-8 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#565e74]"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowNewClientModal(false);
                onShowToast('Cliente registrado y vinculado a facturación');
              }}
              className="space-y-3 pt-3 font-body-sm"
            >
              <div>
                <label className="font-label-sm text-[#565e74] block mb-1">Identificación</label>
                <div className="grid grid-cols-3 gap-2">
                  <select className="h-11 px-2.5 rounded-xl bg-[#eff4ff] border border-[#d3e4fe] text-[#0b1c30] focus:outline-none">
                    <option>Cédula</option>
                    <option>NIT</option>
                    <option>C. Extranjería</option>
                    <option>Pasaporte</option>
                  </select>
                  <input
                    type="text"
                    required
                    placeholder="Ej: 1020455890"
                    className="col-span-2 h-11 px-3 rounded-xl bg-[#eff4ff] border border-[#d3e4fe] text-[#0b1c30] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-label-sm text-[#565e74] block mb-1">Nombre Completo / Razón Social</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Valentina Morales Quintero"
                  className="w-full h-11 px-3 rounded-xl bg-[#eff4ff] border border-[#d3e4fe] text-[#0b1c30] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-label-sm text-[#565e74] block mb-1">WhatsApp / Celular</label>
                  <input
                    type="tel"
                    required
                    defaultValue="+57 300 000 0000"
                    className="w-full h-11 px-3 rounded-xl bg-[#eff4ff] border border-[#d3e4fe] text-[#0b1c30] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-label-sm text-[#565e74] block mb-1">Categoría</label>
                  <select className="w-full h-11 px-3 rounded-xl bg-[#eff4ff] border border-[#d3e4fe] text-[#0b1c30] focus:outline-none">
                    <option>Frecuente (5% OFF)</option>
                    <option>VIP Sartorial (8% OFF)</option>
                    <option>Estándar</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowNewClientModal(false)}
                  className="h-11 flex-1 rounded-xl bg-[#eff4ff] text-[#565e74] font-label-md"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="h-11 flex-1 rounded-xl bg-[#00288e] text-white font-label-md font-bold shadow-md shadow-[#00288e]/20"
                >
                  Guardar y Vincular
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
