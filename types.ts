
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Burgers' | 'Sides' | 'Drinks' | 'Desserts';
  image: string;
  tags: string[];
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface RecommendationResponse {
  recommendations: {
    itemId: string;
    reason: string;
  }[];
  friendlyMessage: string;
}

export enum AppView {
  HOME = 'home',
  MENU = 'menu',
  CART = 'cart',
  AI_ASSISTANT = 'ai_assistant'
}
