export interface ProductOption {
  name: string;
  priceModifier?: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  gallery?: string[];
  options?: ProductOption[];
}

export const products: Product[] = [
  {
    id: '18457427',
    name: 'Tallow Body Whip',
    price: 35.00,
    description: 'Deeply moisturizing body whip made with grass-fed tallow.',
    image: 'https://primary.jwwb.nl/public/z/v/z/temp-raemrvluitpezdrbzzse/20250425_230326-3-high.jpg?enable-io=true&fit=bounds&width=720&height=577&quality=40',
    gallery: [
      'https://primary.jwwb.nl/public/z/v/z/temp-raemrvluitpezdrbzzse/20250425_230326-3-standard.jpg?enable-io=true&enable=upscale&width=600',
      'https://primary.jwwb.nl/public/z/v/z/temp-raemrvluitpezdrbzzse/20250512_200422-standard.jpg?enable-io=true&enable=upscale&width=600'
    ],
    options: [
      { name: 'Vanilla' },
      { name: 'Lavender' }
    ]
  },
  {
    id: '18457370',
    name: 'Whipped Tallow Face Cream',
    price: 25.00,
    description: 'Rich in Vitamins A, D, E & K. Nourishing face cream for a radiant complexion.',
    image: 'https://primary.jwwb.nl/public/z/v/z/temp-raemrvluitpezdrbzzse/20250321_211436-high.jpg?enable-io=true&fit=bounds&width=720&height=599&quality=40',
    gallery: [
      'https://primary.jwwb.nl/public/z/v/z/temp-raemrvluitpezdrbzzse/20250321_211436-standard.jpg?enable-io=true&enable=upscale&width=600',
      'https://primary.jwwb.nl/public/z/v/z/temp-raemrvluitpezdrbzzse/20250402_190852-standard.jpg?enable-io=true&enable=upscale&width=600',
      'https://primary.jwwb.nl/public/z/v/z/temp-raemrvluitpezdrbzzse/20250623_115428-3-standard.jpg?enable-io=true&enable=upscale&width=600'
    ],
    options: [
      { name: 'Regular' },
      { name: 'Regular/zinc oxide' }
    ]
  },
  {
    id: '18671151',
    name: 'Tallow Skin Relief Salve',
    price: 20.00,
    description: 'Gentle & healing salve for irritated or dry skin.',
    image: 'https://primary.jwwb.nl/public/z/v/z/temp-raemrvluitpezdrbzzse/att-0lgpf4igq03wvanrdqddk1scydo4fvkbo72bkeuknwm-high.jpg?enable-io=true&fit=bounds&width=720&height=720&quality=40',
    gallery: [
      'https://primary.jwwb.nl/public/z/v/z/temp-raemrvluitpezdrbzzse/att-0lgpf4igq03wvanrdqddk1scydo4fvkbo72bkeuknwm-standard.jpg?enable-io=true&enable=upscale&width=600'
    ]
  }
];
