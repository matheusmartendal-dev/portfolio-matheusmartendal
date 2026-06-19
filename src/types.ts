export interface Project {
  id: string;
  number: string;
  title: string;
  tags: string[];
  description: string;
}

export type MonorailTab = 'wishlist' | 'money' | 'invest' | 'trading' | 'milestones';

export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  saved: string;
  store: string;
}

export interface SpendingDeal {
  id: string;
  partner: string;
  cashback: string;
  logo: string;
  category: string;
}

export interface InvestmentStock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  trendingUp: boolean;
}
