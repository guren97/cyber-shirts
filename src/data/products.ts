import japaneseHiTech from '../assets/images/products/Japanese_Hi_Tech_Vaporwave_Aesthetic_T_Shirt_1400.jpg';
import edgerunnersDavid from '../assets/images/products/Bioworld_Cyberpunk_Edgerunners_David_Martinez_Crew_Neck_1800.jpg';
import synthwaveCity from '../assets/images/products/Cyberpunk_Synthwave_City_Retro_Vaporwave_Aesthetic_T_Shirt_1700.jpg';
import afterlife from '../assets/images/products/Cyberpunks_live_the_Afterlife_1600.jpg';
import galaxyMarket from '../assets/images/products/Techwear_Cyberpunk_Streetwear_Galaxy_Market_T_Shirt_1900.jpg';
import cyberpunk2077 from '../assets/images/products/Bioworld_Cyberpunk_2077_Building_Paint_Logo_Mens_Black_T_Shirt_1900.jpg';
import samuraiWarrior from '../assets/images/products/Techwear_Goth_Cyberpunk_Samurai_Warrior_T_Shirt_1700.jpg';
import oniCyborg from '../assets/images/products/OniCyborg_Cyberpunk_T_Shirt_1900.jpg';
import harajukuStreetwear from '../assets/images/products/Futuristic_Techwear_Japanese_Cyberpunk_Harajuku_Streetwear_1800.jpg';
import cyberpunkDragon from '../assets/images/products/Cyberpunk_Dragon_Shirt_1600.jpg';
import glowingDark from '../assets/images/products/Punk_Rave_Glowing_In_The_Dark_Dancing_With_Spark_Cybergoth_1900.jpg';
import harajukuRobot from '../assets/images/products/Techwear_Harajuku_Robot_T_Shirt_2000.jpg';
import hiTechLowLife from '../assets/images/products/Cyberpunk_Hi_Tech_Low_Life_Graphic_1850.jpg';
import dragonJapanese from '../assets/images/products/Cyberpunk_Dragon_Japanese_Text_Retro_1300.jpg';
import jinx from '../assets/images/products/JINX_Cyberpunk_2077_Cyber_1880.jpg';
import futuristicHand from '../assets/images/products/Futuristic_Cyberpunk_Hand___Japanese_Streetwear_Aesthetic_Long_Sleeve_T_Shirt_2500.jpg';
import neonDreads from '../assets/images/products/Punk_Rave_Futuristic_Neon_Dreads_Future_Threads_Cybergoth_1850.jpg';
import tokyoStreetwear from '../assets/images/products/Japanese_Cyberpunk_Tokyo_Streetwear_Aesthetic_Graphic_1460.jpg';
import futureMeets from '../assets/images/products/Punk_Rave_Where_The_Future_Meets_1850.jpg';
import cyberCat from '../assets/images/products/Cyberpunk_pun_Cat_cybercat_Japanese_1690.jpg';
import tokyoNight from '../assets/images/products/Cyberpunk_City_Sci_Fi_Night_Tokyo_Japan_Urban_Noir_Dystopia_1850.jpg';
import kittyPunker from '../assets/images/products/Cyberpunk_Cat_Kitty_Punker_1520.jpg';
import motorbikeBabe from '../assets/images/products/Cyberpunk_Motorbike_Babe_Graphic_1600.jpg';
import matrix from '../assets/images/products/Punk_Rave_Futuristic_From_Matrix_1850.jpg';
import cyberWorld from '../assets/images/products/Punk_Rave_Cyber_World_Gothic_Soul_Futuristic1800.jpg';
import tooCyber from '../assets/images/products/Punk_Rave_Too_Cyber_For_Goth_1850.jpg';
import neonBeams from '../assets/images/products/Punk_Rave_Futuristic_Dystopian_Dreams_Neon_Beams_Cybergoth_1850.jpg';
import darkerSibling from '../assets/images/products/Punk_Rave_Cyberpunks_Darker_Sibling_Futuristic_Cybergoth__1850.jpg';
import assassin from '../assets/images/products/Cyberpunk_Assassin1770.jpg';
import motorbike from '../assets/images/products/Cyberpunk_Motorbike_1690.jpg';
import wordDefinition from '../assets/images/products/Cyberpunk_Word_Definition_T_Shirt_1775.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'hoodie' | 'jacket' | 'tshirt' | 'longsleeve';
  description: string;
  rating: {
    stars: number;
    count: number;
  };
  likes: number;
  sizes: string[];
  colors: string[];
  material: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  inStock: boolean;
  discount?: {
    percentage: number;
    originalPrice: number;
  };
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Japanese Hi-Tech Vaporwave T-Shirt',
    price: Math.round(1400 * 4.9),
    image: japaneseHiTech,
    category: 'tshirt',
    description: 'Aesthetic vaporwave design with Japanese tech elements',
    rating: {
      stars: 4.6,
      count: 145
    },
    likes: 256,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Premium Cotton',
    features: [
      'Vaporwave Design',
      'Japanese Tech Elements',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '2',
    name: 'Cyberpunk Edgerunners David Martinez',
    price: Math.round(1800 * 4.9),
    image: edgerunnersDavid,
    category: 'tshirt',
    description: 'Crew neck featuring David Martinez from Cyberpunk Edgerunners',
    rating: {
      stars: 4.4,
      count: 123
    },
    likes: 312,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Premium Cotton',
    features: [
      'Official Design',
      'Crew Neck',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true,
    discount: {
      percentage: 15,
      originalPrice: Math.round(2118 * 4.9)
    }
  },
  {
    id: '3',
    name: 'Synthwave City Retro T-Shirt',
    price: Math.round(1700 * 4.9),
    image: synthwaveCity,
    category: 'tshirt',
    description: 'Retro vaporwave aesthetic with synthwave city design',
    rating: {
      stars: 4.7,
      count: 156
    },
    likes: 284,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Premium Cotton',
    features: [
      'Synthwave Design',
      'Retro Aesthetic',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '4',
    name: 'Cyberpunks Live the Afterlife',
    price: Math.round(1600 * 4.9),
    image: afterlife,
    category: 'tshirt',
    description: 'Stylish design featuring the iconic "Cyberpunks live the Afterlife" quote',
    rating: {
      stars: 4.2,
      count: 134
    },
    likes: 196,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Premium Cotton',
    features: [
      'Iconic Quote',
      'Premium Print',
      'Comfortable Fit',
      'Street Style'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '5',
    name: 'Galaxy Market Techwear T-Shirt',
    price: Math.round(1900 * 4.9),
    image: galaxyMarket,
    category: 'tshirt',
    description: 'Streetwear design featuring a futuristic galaxy market scene',
    rating: {
      stars: 4.7,
      count: 134
    },
    likes: 268,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Premium Cotton',
    features: [
      'Galaxy Design',
      'Techwear Style',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true,
    discount: {
      percentage: 10,
      originalPrice: Math.round(2111 * 4.9)
    }
  },
  {
    id: '6',
    name: 'Cyberpunk 2077 Building Paint Logo',
    price: Math.round(1900 * 4.9),
    image: cyberpunk2077,
    category: 'tshirt',
    description: 'Official Cyberpunk 2077 design with building paint logo',
    rating: {
      stars: 4.9,
      count: 167
    },
    likes: 334,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Premium Cotton',
    features: [
      'Official Design',
      'Building Paint Logo',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '7',
    name: 'Samurai Warrior Techwear T-Shirt',
    price: Math.round(1700 * 4.9),
    image: samuraiWarrior,
    category: 'tshirt',
    description: 'Gothic cyberpunk design featuring a samurai warrior',
    rating: {
      stars: 4.3,
      count: 112
    },
    likes: 224,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Premium Cotton',
    features: [
      'Samurai Design',
      'Techwear Style',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '8',
    name: 'OniCyborg Cyberpunk T-Shirt',
    price: Math.round(1900 * 4.9),
    image: oniCyborg,
    category: 'tshirt',
    description: 'Futuristic design featuring an OniCyborg character',
    rating: {
      stars: 3.9,
      count: 89
    },
    likes: 178,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Premium Cotton',
    features: [
      'OniCyborg Design',
      'Premium Print',
      'Comfortable Fit',
      'Street Style'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '9',
    name: 'Harajuku Streetwear Long Sleeve',
    price: Math.round(1800 * 4.9),
    image: harajukuStreetwear,
    category: 'longsleeve',
    description: 'Futuristic Japanese cyberpunk design with Harajuku streetwear aesthetic',
    rating: {
      stars: 4.8,
      count: 145
    },
    likes: 290,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Premium Cotton',
    features: [
      'Harajuku Design',
      'Long Sleeve',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '10',
    name: 'Cyberpunk Dragon T-Shirt',
    price: Math.round(1600 * 4.9),
    image: cyberpunkDragon,
    category: 'tshirt',
    description: 'Stylish design featuring a cyberpunk dragon',
    rating: {
      stars: 4.7,
      count: 123
    },
    likes: 246,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Premium Cotton',
    features: [
      'Dragon Design',
      'Premium Print',
      'Comfortable Fit',
      'Street Style'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '11',
    name: 'Glowing in the Dark Cybergoth T-Shirt',
    price: Math.round(1900 * 4.9),
    image: glowingDark,
    category: 'tshirt',
    description: 'Glowing design with dancing spark effects',
    rating: {
      stars: 4.8,
      count: 156
    },
    likes: 312,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Premium Cotton',
    features: [
      'Glow in Dark',
      'Spark Effects',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '12',
    name: 'Harajuku Robot Techwear T-Shirt',
    price: Math.round(2000 * 4.9),
    image: harajukuRobot,
    category: 'tshirt',
    description: 'Futuristic robot design with Harajuku techwear style',
    rating: {
      stars: 4.7,
      count: 134
    },
    likes: 268,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Premium Cotton',
    features: [
      'Robot Design',
      'Techwear Style',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '13',
    name: 'Hi-Tech Low-Life Graphic T-Shirt',
    price: Math.round(1850 * 4.9),
    image: hiTechLowLife,
    category: 'tshirt',
    description: 'Classic cyberpunk phrase with modern graphic design',
    rating: {
      stars: 4.6,
      count: 145
    },
    likes: 196,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Premium Cotton',
    features: [
      'Classic Phrase',
      'Modern Design',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '14',
    name: 'Japanese Dragon Retro T-Shirt',
    price: Math.round(1300 * 4.9),
    image: dragonJapanese,
    category: 'tshirt',
    description: 'Retro design featuring Japanese dragon with text',
    rating: {
      stars: 4.5,
      count: 89
    },
    likes: 178,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Premium Cotton',
    features: [
      'Japanese Dragon',
      'Retro Style',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '15',
    name: 'JINX Cyberpunk 2077 T-Shirt',
    price: Math.round(1880 * 4.9),
    image: jinx,
    category: 'tshirt',
    description: 'Official JINX Cyberpunk 2077 design',
    rating: {
      stars: 4.8,
      count: 145
    },
    likes: 290,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Premium Cotton',
    features: [
      'Official Design',
      'JINX Brand',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '16',
    name: 'Futuristic Hand Long Sleeve',
    price: Math.round(2500 * 4.9),
    image: futuristicHand,
    category: 'longsleeve',
    description: 'Japanese streetwear aesthetic with futuristic hand design',
    rating: {
      stars: 4.9,
      count: 167
    },
    likes: 334,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Premium Cotton',
    features: [
      'Futuristic Design',
      'Long Sleeve',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '17',
    name: 'Neon Dreads Future Threads T-Shirt',
    price: Math.round(1850 * 4.9),
    image: neonDreads,
    category: 'tshirt',
    description: 'Futuristic design with neon dreads and future threads',
    rating: {
      stars: 4.7,
      count: 112
    },
    likes: 224,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Premium Cotton',
    features: [
      'Neon Design',
      'Future Threads',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '18',
    name: 'Tokyo Streetwear Aesthetic T-Shirt',
    price: Math.round(1460 * 4.9),
    image: tokyoStreetwear,
    category: 'tshirt',
    description: 'Japanese cyberpunk Tokyo streetwear design',
    rating: {
      stars: 4.6,
      count: 145
    },
    likes: 196,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Premium Cotton',
    features: [
      'Tokyo Design',
      'Streetwear Style',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '19',
    name: 'Where the Future Meets T-Shirt',
    price: Math.round(1850 * 4.9),
    image: futureMeets,
    category: 'tshirt',
    description: 'Futuristic design with cyberpunk aesthetic',
    rating: {
      stars: 4.7,
      count: 134
    },
    likes: 268,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Premium Cotton',
    features: [
      'Futuristic Design',
      'Cyberpunk Style',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '20',
    name: 'Cyber Cat Japanese T-Shirt',
    price: Math.round(1690 * 4.9),
    image: cyberCat,
    category: 'tshirt',
    description: 'Playful cyberpunk cat design with Japanese elements',
    rating: {
      stars: 4.5,
      count: 89
    },
    likes: 178,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Premium Cotton',
    features: [
      'Cat Design',
      'Japanese Style',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '21',
    name: 'Tokyo Night Dystopia T-Shirt',
    price: Math.round(1850 * 4.9),
    image: tokyoNight,
    category: 'tshirt',
    description: 'Sci-fi night scene of Tokyo with urban noir dystopia aesthetic',
    rating: {
      stars: 4.8,
      count: 156
    },
    likes: 312,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Premium Cotton',
    features: [
      'Tokyo Night Scene',
      'Dystopian Design',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '22',
    name: 'Kitty Punker Cyberpunk T-Shirt',
    price: Math.round(1520 * 4.9),
    image: kittyPunker,
    category: 'tshirt',
    description: 'Playful cyberpunk cat design with punk aesthetic',
    rating: {
      stars: 4.7,
      count: 134
    },
    likes: 268,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Premium Cotton',
    features: [
      'Cat Design',
      'Punk Style',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '23',
    name: 'Motorbike Babe Graphic T-Shirt',
    price: Math.round(1600 * 4.9),
    image: motorbikeBabe,
    category: 'tshirt',
    description: 'Futuristic motorbike design with cyberpunk aesthetic',
    rating: {
      stars: 4.6,
      count: 145
    },
    likes: 196,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Premium Cotton',
    features: [
      'Motorbike Design',
      'Cyberpunk Style',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '24',
    name: 'Matrix Futuristic T-Shirt',
    price: Math.round(1850 * 4.9),
    image: matrix,
    category: 'tshirt',
    description: 'Inspired by The Matrix with futuristic design elements',
    rating: {
      stars: 4.9,
      count: 167
    },
    likes: 334,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Premium Cotton',
    features: [
      'Matrix Design',
      'Futuristic Style',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '25',
    name: 'Cyber World Gothic Soul T-Shirt',
    price: Math.round(1800 * 4.9),
    image: cyberWorld,
    category: 'tshirt',
    description: 'Gothic soul design with cyber world elements',
    rating: {
      stars: 4.7,
      count: 112
    },
    likes: 224,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Premium Cotton',
    features: [
      'Gothic Design',
      'Cyber Style',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '26',
    name: 'Too Cyber For Goth T-Shirt',
    price: Math.round(1850 * 4.9),
    image: tooCyber,
    category: 'tshirt',
    description: 'Futuristic design with cyberpunk aesthetic',
    rating: {
      stars: 4.6,
      count: 89
    },
    likes: 178,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Premium Cotton',
    features: [
      'Cyber Design',
      'Gothic Style',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '27',
    name: 'Neon Beams Cybergoth T-Shirt',
    price: Math.round(1850 * 4.9),
    image: neonBeams,
    category: 'tshirt',
    description: 'Futuristic dystopian dreams with neon beams',
    rating: {
      stars: 4.8,
      count: 145
    },
    likes: 290,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Premium Cotton',
    features: [
      'Neon Design',
      'Dystopian Style',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '28',
    name: 'Cyberpunk\'s Darker Sibling T-Shirt',
    price: Math.round(1850 * 4.9),
    image: darkerSibling,
    category: 'tshirt',
    description: 'Futuristic cybergoth design with dark aesthetic',
    rating: {
      stars: 4.7,
      count: 134
    },
    likes: 268,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Premium Cotton',
    features: [
      'Dark Design',
      'Cybergoth Style',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '29',
    name: 'Cyberpunk Assassin T-Shirt',
    price: Math.round(1770 * 4.9),
    image: assassin,
    category: 'tshirt',
    description: 'Futuristic assassin design with cyberpunk elements',
    rating: {
      stars: 4.6,
      count: 145
    },
    likes: 196,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Premium Cotton',
    features: [
      'Assassin Design',
      'Cyberpunk Style',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '30',
    name: 'Cyberpunk Motorbike T-Shirt',
    price: Math.round(1690 * 4.9),
    image: motorbike,
    category: 'tshirt',
    description: 'Futuristic motorbike design with cyberpunk aesthetic',
    rating: {
      stars: 4.7,
      count: 112
    },
    likes: 224,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Premium Cotton',
    features: [
      'Motorbike Design',
      'Cyberpunk Style',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '31',
    name: 'Cyberpunk Word Definition T-Shirt',
    price: Math.round(1775 * 4.9),
    image: wordDefinition,
    category: 'tshirt',
    description: 'Stylish design featuring the definition of cyberpunk',
    rating: {
      stars: 4.8,
      count: 156
    },
    likes: 312,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Premium Cotton',
    features: [
      'Word Design',
      'Definition Style',
      'Premium Print',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  }
];