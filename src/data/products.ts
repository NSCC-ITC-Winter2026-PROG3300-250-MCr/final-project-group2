import bodyWhip from '../../assets/products/body-whip.webp';
import bodyWhips from '../../assets/products/body-whips.webp';
import faceCreams from '../../assets/products/face-creams.webp';
import faceCreams2 from '../../assets/products/face-creams2.webp';
import faceCreams3 from '../../assets/products/face-creams3.webp';
import lipBalm from '../../assets/products/lip-balm.webp';
import caffeineEyeBalm from '../../assets/products/caffeine-eye-balm.webp';
import skinReliefSalve from '../../assets/products/skin-relief-salve.webp';
import hairMasks from '../../assets/products/hair-masks.webp';
import hairMasks2 from '../../assets/products/hair-masks2.webp';
import whippedHairMask from '../../assets/products/whipped-hair-mask.webp';
import muscleRecoveryCream from '../../assets/products/muscle-recovery-cream.webp';
import renewalSerum from '../../assets/products/renewal-serum.webp';

import lavenderChamomile from '../../assets/products/lavender-chamomile.webp';
import citrusSoap from '../../assets/products/citrus-soap.webp';
import eucalyptusMint from '../../assets/products/eucalyptus-mint.webp';
import charcoalTeaTreeFaceSoap from '../../assets/products/charcoal-teatree-face-soap.webp';
import bentoniteClayCalendulaTansyFaceSoap from '../../assets/products/bentonite-clay-calendula-tansy-face-soap.webp';
import lemongrassSoap from '../../assets/products/lemongrass-soap.webp';
import frankincenceRoseSoap from '../../assets/products/frankincence-rose-soap.webp';
import exfoliatingCoffeeBodySoap from '../../assets/products/exfoliating-coffee-body-soap.webp';
import lemonPoppyseedExfoliatingFaceSoap from '../../assets/products/lemon-poppyseed-exfoliating-face-soap.webp';

export interface ProductOption {
  name: string;
  priceModifier?: number;
  inStock?: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  shortDescription?: string;
  image: string;
  gallery?: string[];
  options?: ProductOption[];

  category?: string;
  ingredients?: string[];
  benefits?: string[];
  size?: string;
  inStock?: boolean;
  warning?: string;
}

export const products: Product[] = [
  {
    id: '18457427',
    name: 'Tallow Body Whip',
    price: 35.0,
    shortDescription: 'Nourish, hydrate and soften dry skin fast.',
    description:
      'Made with grass-fed beef tallow, shea butter, jojoba oil, arrowroot, and essential oils. Nourish, hydrate and soften dry skin fast. Rich in vitamins A, D, E and K with anti-inflammatory and healing properties to help protect and rejuvenate your skin.',
    image: bodyWhip,
    gallery: [bodyWhip, bodyWhips],
    options: [
      { name: 'Vanilla', inStock: true },
      { name: 'Lavender', inStock: true }
    ],
    category: 'Body Care',
    ingredients: [
      'Grass-fed beef tallow',
      'Shea butter',
      'Jojoba oil',
      'Arrowroot',
      'Essential oils'
    ],
    benefits: [
      'Nourishes skin',
      'Hydrates dry skin',
      'Softens skin',
      'Rich in vitamins A, D, E and K',
      'Anti-inflammatory properties',
      'Healing properties'
    ],
  },
  {
    id: '18457370',
    name: 'Whipped Tallow Face Cream',
    price: 25.0,
    shortDescription: 'Hydrate, heal and rejuvenate the skin while helping restore the skin barrier.',
    description:
      'Hydrate, heal and rejuvenate the skin while helping restore the skin barrier. Anti-inflammatory properties that can help soothe irritated skin and promote healing while giving your skin a healthy and youthful glow. Our regular face cream is made with grass-fed beef tallow, jojoba oil, castor oil, rosehip oil, frankincense, lavender. Our non-nano zinc oxide cream option offers a breathable, protective layer that locks in moisture while shielding your skin from the outside elements. This formulation calms and comforts sensitive or weather-exposed skin. Lightly scented with geranium essential oil.',
    image: faceCreams,
    gallery: [faceCreams, faceCreams2, faceCreams3],
    options: [
      { name: 'Regular', inStock: true },
      { name: 'Regular with zinc oxide', inStock: false }
    ],
    category: 'Face Care',
    ingredients: [
      'Grass-fed beef tallow',
      'Jojoba oil',
      'Castor oil',
      'Rosehip oil',
      'Frankincense',
      'Lavender',
      'Non-nano zinc oxide',
      'Geranium essential oil'
    ],
    benefits: [
      'Hydrates skin',
      'Helps restore skin barrier',
      'Soothes irritated skin',
      'Promotes healing',
      'More youthful glow',
      'Protective moisture barrier for weather-exposed skin'
    ],
  },
  {
    id: 'lip-balm',
    name: 'Lip Balm',
    price: 5.0,
    shortDescription: 'Hydrate and protect your lips with our nourishing lip balm.',
    description:
      'Lip balm made with grass fed beef tallow, mango butter, shea butter and beeswax. Rich in antioxidants, hydrates dry skin, supports elasticity and helps prevent cell degeneration.',
    image: lipBalm,
    gallery: [lipBalm],
    options: [
      { name: 'Vanilla', inStock: true },
      { name: 'Peppermint', inStock: false },
      { name: 'Sweet orange', inStock: false }
    ],
    category: 'Lip Care',
    ingredients: [
      'Grass fed beef tallow',
      'Mango butter',
      'Shea butter',
      'Beeswax'
    ],
    benefits: [
      'Rich in antioxidants',
      'Hydrates dry skin',
      'Supports elasticity',
      'Helps prevent cell degeneration'
    ],
    size: '5g',
  },
  {
    id: 'caffeine-eye-balm',
    name: 'Caffeine Eye Balm',
    price: 25.0,
    shortDescription: 'Intensely hydrate and revitalize tired eyes while helping reduce dark circles, puffiness and wrinkles.',
    description:
      'Intensely hydrate and revitalize tired eyes. Helps reduce dark under eye circles, puffiness and wrinkles with anti-inflammatory properties and skin-calming effects. Made with coffee infused grass-fed beef tallow, shea butter, almond oil, rosehip oil and blue tansy.',
    image: caffeineEyeBalm,
    gallery: [caffeineEyeBalm],
    category: 'Face Care',
    ingredients: [
      'Coffee infused grass-fed beef tallow',
      'Shea butter',
      'Almond oil',
      'Rosehip oil',
      'Blue tansy'
    ],
    benefits: [
      'Hydrates tired eyes',
      'Helps reduce dark circles',
      'Helps reduce puffiness',
      'Helps reduce wrinkles',
      'Anti-inflammatory properties',
      'Skin-calming effects'
    ],
    size: '1oz',
    inStock: true
  },
  {
    id: '18671151',
    name: 'Tallow Skin Relief Salve',
    price: 20.0,
    shortDescription: 'Soothe, protect, and heal your skin with this all-natural skin relief salve.',
    description:
      'Soothe, protect, and heal your skin with our all-natural skin relief salve. Use for irritations such as rashes, acne, rosacea, superficial burns, cuts, and scrapes. Made with grass-fed beef tallow, calendula and chamomile infused extra virgin olive oil, jojoba oil, beeswax and myrrh. Anti-inflammatory and antimicrobial properties to help soothe and protect your skin while supporting healing.',
    image: skinReliefSalve,
    gallery: [skinReliefSalve],
    category: 'Skin Relief',
    ingredients: [
      'Grass-fed beef tallow',
      'Calendula infused extra virgin olive oil',
      'Chamomile infused extra virgin olive oil',
      'Jojoba oil',
      'Beeswax',
      'Myrrh'
    ],
    benefits: [
      'Soothes skin',
      'Protects skin',
      'Supports healing',
      'Anti-inflammatory effects',
      'Antimicrobial effects'
    ],
    size: '1oz',
    inStock: false
  },
  {
    id: 'tallow-rosemary-hair-mask',
    name: 'Tallow Rosemary Hair Mask',
    price: 35.0,
    shortDescription: 'Promote hair growth, reduce dandruff and deeply condition dry or damaged hair.',
    description:
      'Made with grass-fed beef tallow, avocado oil, rosemary, and castor oil. Helps promote hair growth, reduce dandruff, and improve scalp health. Deeply condition dry or damaged hair, smooth frizz, boost shine and repair dry split ends.',
    image: hairMasks,
    gallery: [hairMasks, hairMasks2, whippedHairMask],
    category: 'Hair Care',
    ingredients: [
      'Grass-fed beef tallow',
      'Avocado oil',
      'Rosemary',
      'Castor oil'
    ],
    benefits: [
      'Promotes hair growth',
      'Reduces dandruff',
      'Improves scalp health',
      'Deep conditioning and hydration',
      'Smooths frizz',
      'Boosts shine',
      'Helps repair dry split ends'
    ],
    size: '8oz',
    inStock: true
  },
  {
    id: 'muscle-recovery-cream',
    name: 'Muscle Recovery Cream',
    price: 35.0,
    shortDescription: 'Relieve sore, tired muscles and joints with this muscle recovery cream.',
    description:
      'Relieve sore, tired muscles and joints with this muscle recovery cream. Helps soothe inflammation, swelling and arthritis pain. Made with grass-fed beef tallow, jojoba oil, arnica, wintergreen, helichrysum, spearmint, peppermint, clove, eucalyptus, and lavender.',
    image: muscleRecoveryCream,
    gallery: [muscleRecoveryCream],
    category: 'Body Care',
    ingredients: [
      'Grass-fed beef tallow',
      'Jojoba oil',
      'Arnica',
      'Wintergreen',
      'Helichrysum',
      'Spearmint',
      'Peppermint',
      'Clove',
      'Eucalyptus',
      'Lavender'
    ],
    benefits: [
      'Relieves sore muscles',
      'Helps tired joints',
      'Soothes inflammation',
      'Helps with swelling',
      'Helps with arthritis pain'
    ],
    size: '4oz',
    inStock: true,
    warning:
      'For external use only. Do not use on open skin. If irritation occurs discontinue use.'
  },
  {
    id: 'tallow-soap',
    name: 'Tallow Soap',
    price: 10.0,
    shortDescription: 'Indulge your skin with luxurious, silky smooth grass-fed tallow soap.',
    description:
      'Indulge your skin with luxurious, silky smooth grass-fed tallow soap. Each soap is carefully handcrafted in small batches with nourishing and hydrating properties. Our tallow soap is made with grass-fed beef tallow, coconut oil, extra virgin olive oil, castor oil, various essential oils and clays. Perfect for face and body care with a variety of options to suit your skin’s needs. Our tallow soap gently cleanses while nourishing and hydrating your skin for a healthy and radiant glow.',
    image: lavenderChamomile,
    gallery: [
      lavenderChamomile,
      citrusSoap,
      eucalyptusMint,
      charcoalTeaTreeFaceSoap,
      bentoniteClayCalendulaTansyFaceSoap,
      lemongrassSoap,
      frankincenceRoseSoap,
      exfoliatingCoffeeBodySoap,
      lemonPoppyseedExfoliatingFaceSoap
    ],
    options: [
      { name: 'Lavender Chamomile', inStock: true },
      { name: 'Citrus', inStock: true },
      { name: 'Eucalyptus Mint', inStock: true },
      { name: 'Charcoal Tea Tree Face Soap', inStock: true },
      { name: 'Bentonite Clay', inStock: true },
      { name: 'Calendula Blue Tansy Face Soap', inStock: true },
      { name: 'Lemongrass', inStock: true },
      { name: 'Frankincense Rose', inStock: true },
      { name: 'Coffee Exfoliating Soap', inStock: true },
      { name: 'Lemon Poppyseed Exfoliating Face Soap', inStock: true }
    ],
    category: 'Soap',
    ingredients: [
      'Grass-fed tallow',
      'Coconut oil',
      'Extra virgin olive oil',
      'Castor oil',
      'Various essential oils',
      'Clays'
    ],
    benefits: [
      'Nourishes skin',
      'Hydrates skin',
      'Handcrafted in small batches'
    ],
  },
  {
    id: 'night-renewal-serum',
    name: 'Night Renewal Serum',
    price: 30.0,
    shortDescription: 'Supple, glowing skin is a reach away with our Night Renewal Serum from Tallow Bliss Skincare.',
    description:
      'Supple, glowing skin starts with our Night Renewal Serum. This nutrient-rich formula deeply hydrates while promoting a youthful complexion. Our serum is made with carefully selected ingredients including, Carrot Seed oil, Plant-derived Squalene, Rosehip oil, Almond oil, Grass-fed beef tallow and Essential oils. Experience the transformative power of our Night Renewal Serum and wake up to radiant, revitalized skin every morning.',
    image: renewalSerum,
    gallery: [renewalSerum],
    category: 'Face Care',
    ingredients: [
      'Carrot Seed oil',
      'Plant-derived Squalene',
      'Rosehip oil',
      'Almond oil',
      'Grass-fed beef tallow',
      'Essential oils'
    ],
    benefits: [
      'Intense hydration',
      'Softens skin',
      'Enhances skin suppleness',
      'Helps restore collagen',
      'Reduces inflammation',
      'Helps reduce wrinkles',
      'Helps reduce dark spots',
      'Suitable for all skin types'
    ],
    inStock: true
  }
];