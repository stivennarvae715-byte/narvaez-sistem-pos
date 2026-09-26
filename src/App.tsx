import React, { useState } from 'react';
import { ScreenId, ProductItem, StoreCreditVoucher } from './types';
import { INITIAL_PRODUCTS, INITIAL_VOUCHER } from './mockData';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { Toast } from './components/Toast';

// Views
import { DashboardView } from './views/DashboardView';
import { InventarioView } from './views/InventarioView';
import { ClientesView } from './views/ClientesView';
import { Factura1049View } from './views/Factura1049View';
import { CambioDevolucionView } from './views/CambioDevolucionView';
import { BonoDigitalView } from './views/BonoDigitalView';
import { NuevaVentaView } from './views/NuevaVentaView';
import { Factura1050View } from './views/Factura1050View';
import { CierreZView } from './views/CierreZView';
import { AjustesView } from './views/AjustesView';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('dashboard');
  const [products, setProducts] = useState<ProductItem[]>(INITIAL_PRODUCTS);
  const [voucher, setVoucher] = useState<StoreCreditVoucher>(INITIAL_VOUCHER);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(current => (current === msg ? null : current));
    }, 2800);
  };

  const updateProductStock = (productId: string, delta: number) => {
    setProducts(prev => prev.map(p => {
      if (p.id === productId) {
        const newStock = Math.max(0, p.stock + delta);
        let newStatus: 'normal' | 'low' | 'out' = 'normal';
        if (newStock === 0) newStatus = 'out';
        else if (newStock <= p.minStock) newStatus = 'low';
        return { ...p, stock: newStock, status: newStatus };
      }
      return p;
    }));
  };

  const lowStockCount = products.filter(p => p.stock <= p.minStock && p.stock > 0).length;

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex flex-col antialiased selection:bg-[#dde1ff]">
      {/* Top Fixed Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={setCurrentScreen}
        onShowToast={showToast}
      />

      {/* Main View Area */}
      <main className="flex-1 w-full flex flex-col">
        {currentScreen === 'dashboard' && (
          <DashboardView
            onNavigate={setCurrentScreen}
            onShowToast={showToast}
          />
        )}

        {currentScreen === 'inventario' && (
          <InventarioView
            products={products}
            onUpdateStock={updateProductStock}
            onNavigate={setCurrentScreen}
            onShowToast={showToast}
          />
        )}

        {currentScreen === 'clientes' && (
          <ClientesView
            onNavigate={setCurrentScreen}
            onShowToast={showToast}
          />
        )}

        {currentScreen === 'factura-1049' && (
          <Factura1049View
            onNavigate={setCurrentScreen}
            onShowToast={showToast}
          />
        )}

        {currentScreen === 'cambio-devolucion' && (
          <CambioDevolucionView
            onNavigate={setCurrentScreen}
            onShowToast={showToast}
          />
        )}

        {currentScreen === 'bono-digital' && (
          <BonoDigitalView
            voucher={voucher}
            onNavigate={setCurrentScreen}
            onShowToast={showToast}
          />
        )}

        {currentScreen === 'nueva-venta' && (
          <NuevaVentaView
            voucher={voucher}
            onNavigate={setCurrentScreen}
            onShowToast={showToast}
          />
        )}

        {currentScreen === 'factura-1050' && (
          <Factura1050View
            onNavigate={setCurrentScreen}
            onShowToast={showToast}
          />
        )}

        {currentScreen === 'cierre-z' && (
          <CierreZView
            onNavigate={setCurrentScreen}
            onShowToast={showToast}
          />
        )}

        {currentScreen === 'ajustes' && (
          <AjustesView
            onNavigate={setCurrentScreen}
            onShowToast={showToast}
          />
        )}
      </main>

      {/* Bottom Fixed Navigation Bar */}
      <BottomNav
        currentScreen={currentScreen}
        onNavigate={setCurrentScreen}
        inventoryAlertsCount={lowStockCount}
      />

      {/* Global Feedback Toast */}
      <Toast message={toastMessage} />
    </div>
  );
}
