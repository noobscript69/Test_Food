
import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'b1',
    name: 'The Neon Burger',
    description: 'Double wagyu patty, melted provolone, truffle aioli, and crispy onions on a toasted brioche.',
    price: 14.50,
    category: 'Burgers',
    image: 'https://picsum.photos/seed/burger1/600/400',
    tags: ['savory', 'heavy', 'premium']
  },
  {
    id: 'b2',
    name: 'Spicy Sunset Slider',
    description: 'Crispy chicken breast, ghost pepper honey, slaw, and pickles.',
    price: 11.25,
    category: 'Burgers',
    image: 'https://picsum.photos/seed/chicken/600/400',
    tags: ['spicy', 'crunchy', 'chicken']
  },
  {
    id: 's1',
    name: 'Gravity Fries',
    description: 'Double-fried hand-cut potatoes tossed in rosemary salt and served with miso ketchup.',
    price: 6.00,
    category: 'Sides',
    image: 'https://picsum.photos/seed/fries/600/400',
    tags: ['classic', 'vegan', 'salty']
  },
  {
    id: 's2',
    name: 'Cyber Slaw',
    description: 'Purple cabbage, edamame, and sesame ginger dressing.',
    price: 5.50,
    category: 'Sides',
    image: 'https://picsum.photos/seed/salad/600/400',
    tags: ['fresh', 'healthy', 'light']
  },
  {
    id: 'd1',
    name: 'Electric Lemonade',
    description: 'Freshly squeezed lemons with a hint of blue spirulina and butterfly pea flower.',
    price: 4.50,
    category: 'Drinks',
    image: 'https://picsum.photos/seed/drink1/600/400',
    tags: ['refreshing', 'sweet', 'cold']
  },
  {
    id: 'd2',
    name: 'Nitro Brew Coffee',
    description: 'Silky smooth cold brew infused with nitrogen for a creamy head.',
    price: 5.00,
    category: 'Drinks',
    image: 'https://picsum.photos/seed/coffee/600/400',
    tags: ['caffeine', 'cold', 'bitter']
  },
  {
    id: 'de1',
    name: 'Moondust Churros',
    description: 'Warm churros tossed in cinnamon sugar and activated charcoal dust, served with dark chocolate dip.',
    price: 7.50,
    category: 'Desserts',
    image: 'https://picsum.photos/seed/churros/600/400',
    tags: ['sweet', 'warm', 'indulgent']
  }
];
