export type ScreenId = 
  | 'dashboard'
  | 'inventario'
  | 'clientes'
  | 'factura-1049'
  | 'cambio-devolucion'
  | 'bono-digital'
  | 'nueva-venta'
  | 'factura-1050'
  | 'cierre-z'
  | 'ajustes';

export interface ProductItem {
  id: string;
  sku: string;
  name: string;
  category: string;
  cost: number;
  price: number;
  stock: number;
  minStock: number;
  imageUrl: string;
  status: 'normal' | 'low' | 'out';
  isTopSeller?: boolean;
}

export interface ClientProfile {
  id: string;
  name: string;
  docType: string;
  docNumber: string;
  city: string;
  email: string;
  phone: string;
  isVip: boolean;
  vipDiscountPercent: number;
  totalSpent: number;
  ordersCount: number;
  lastPurchaseDays: number;
  avatarUrl?: string;
  initials?: string;
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
  selectedSize: string;
}

export interface StoreCreditVoucher {
  code: string;
  amount: number;
  creditNote: string;
  originalInvoice: string;
  clientName: string;
  clientDoc: string;
  isRedeemed: boolean;
  expirationDate: string;
}
