export interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  images: string[];
  status: 'Available' | 'Reserved' | 'Sold';
  type: string;
  description: string;
  amenities: string[];
  features: string[];
  yearBuilt: number;
  parking: number;
  agent: {
    name: string;
    phone: string;
    email: string;
    photo: string;
    prcLicense: string;
    yearsExperience: number;
    specialization: string[];
    totalSales: number;
    officeLocation: string;
    bio: string;
  };
}

export const allProperties: Property[] = [
  {
    id: 1,
    title: 'Modern Luxury Penthouse',
    price: '₱12,500,000',
    location: 'Bacolod City Center',
    beds: 4,
    baths: 3,
    sqft: 250,
    parking: 2,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=400&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672260066-6bc35f0a1a44?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    ],
    status: 'Available',
    type: 'Condominium',
    description: 'Experience luxury living in this stunning penthouse located in the heart of Bacolod City. This property features floor-to-ceiling windows with breathtaking city views, premium Italian marble flooring, and state-of-the-art smart home technology. The open-concept design seamlessly connects the living, dining, and kitchen areas, perfect for modern entertaining.',
    amenities: ['Swimming Pool', '24/7 Security', 'Gym', 'Function Hall', 'Sky Lounge', 'Concierge Service'],
    features: ['Smart Home System', 'Italian Marble Floors', 'Walk-in Closet', 'Balcony', 'Premium Appliances', 'Central AC'],
    yearBuilt: 2022,
    agent: {
      name: 'Maria Santos',
      phone: '+63 917 123 4567',
      email: 'maria.santos@mbc.com',
      photo: 'https://i.pravatar.cc/150?img=32',
      prcLicense: 'PRC-12345-2020',
      yearsExperience: 8,
      specialization: ['Luxury Condominiums', 'High-Rise Properties', 'Investment Properties'],
      totalSales: 45,
      officeLocation: 'MBC Tower, Lacson Street, Bacolod City',
      bio: 'Specializing in luxury properties with over 8 years of experience in the Bacolod real estate market. Committed to finding the perfect home for every client.'
    }
  },
  {
    id: 2,
    title: 'Suburban Family Home',
    price: '₱5,500,000',
    location: 'Talisay City',
    beds: 3,
    baths: 2,
    sqft: 150,
    parking: 2,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=400&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
    ],
    status: 'Available',
    type: 'Single Family Home',
    description: 'Perfect for growing families! This beautiful suburban home features a spacious layout with modern amenities in a peaceful neighborhood. Large windows allow natural light throughout the home. The property includes a beautifully landscaped garden and covered garage. Walking distance to schools, shopping centers, and parks.',
    amenities: ['Community Park', 'Basketball Court', 'Clubhouse', '24/7 Security', 'Playground'],
    features: ['Landscaped Garden', 'Modern Kitchen', 'Spacious Bedrooms', 'Covered Garage', 'Laundry Area', 'Storage Room'],
    yearBuilt: 2020,
    agent: {
      name: 'John Dela Cruz',
      phone: '+63 918 234 5678',
      email: 'john.delacruz@mbc.com',
      photo: 'https://i.pravatar.cc/150?img=68',
      prcLicense: 'PRC-23456-2019',
      yearsExperience: 10,
      specialization: ['Residential Properties', 'Family Homes', 'Suburban Areas'],
      totalSales: 67,
      officeLocation: 'MBC Talisay Office, Talisay City',
      bio: 'A decade of experience helping families find their dream homes. Known for personalized service and deep knowledge of suburban properties.'
    }
  },
  {
    id: 3,
    title: 'Cozy Studio Unit',
    price: '₱8,000 / month',
    location: 'Bacolod Downtown',
    beds: 1,
    baths: 1,
    sqft: 28,
    parking: 1,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=400&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=800&auto=format&fit=crop',
    ],
    status: 'Available',
    type: 'Studio Apartment',
    description: 'Ideal for young professionals and students! This fully-furnished studio unit offers a comfortable living space in the heart of downtown Bacolod. Modern amenities and efficient layout maximize every square meter. Perfect location near offices, universities, restaurants, and entertainment hubs.',
    amenities: ['Rooftop Deck', 'Laundry Area', 'WiFi Ready', 'Water Included', 'Elevator'],
    features: ['Fully Furnished', 'AC Unit', 'Kitchen', 'Modern Bathroom', 'Built-in Cabinets'],
    yearBuilt: 2021,
    agent: {
      name: 'Ana Reyes',
      phone: '+63 919 345 6789',
      email: 'ana.reyes@mbc.com',
      photo: 'https://i.pravatar.cc/150?img=45',
      prcLicense: 'PRC-34567-2021',
      yearsExperience: 5,
      specialization: ['Rental Properties', 'Studio Units', 'Young Professionals'],
      totalSales: 32,
      officeLocation: 'MBC Downtown Office, Bacolod City',
      bio: 'Specializing in rental properties and helping young professionals find their first home. Passionate about making renting easy and affordable.'
    }
  },
  {
    id: 4,
    title: 'Beachfront Villa',
    price: '₱18,000,000',
    location: 'Silay City',
    beds: 5,
    baths: 4,
    sqft: 350,
    parking: 3,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=400&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
    ],
    status: 'Reserved',
    type: 'Villa',
    description: 'Luxurious beachfront villa with stunning ocean views and direct beach access. This Mediterranean-inspired property features high ceilings, imported fixtures, and expansive outdoor living spaces. Perfect for families seeking a resort-style living experience. Includes a private pool, outdoor kitchen, and beautifully landscaped tropical gardens.',
    amenities: ['Private Beach Access', 'Infinity Pool', 'Outdoor Kitchen', 'Boat Dock', 'Garden', 'Entertainment Area'],
    features: ['Ocean View', 'High Ceilings', 'Master Suite', 'Wine Cellar', 'Home Theater', 'Smart Home', 'Solar Panels'],
    yearBuilt: 2023,
    agent: {
      name: 'Carlos Martinez',
      phone: '+63 920 456 7890',
      email: 'carlos.martinez@mbc.com',
      photo: 'https://i.pravatar.cc/150?img=12',
      prcLicense: 'PRC-45678-2018',
      yearsExperience: 12,
      specialization: ['Luxury Villas', 'Beachfront Properties', 'High-End Residential'],
      totalSales: 89,
      officeLocation: 'MBC Silay Office, Silay City',
      bio: 'Leading expert in luxury beachfront properties with over a decade of experience. Committed to delivering exceptional service for discerning clients.'
    }
  },
  {
    id: 5,
    title: 'Modern City Apartment',
    price: '₱15,000 / month',
    location: 'Bacolod City',
    beds: 2,
    baths: 1,
    sqft: 65,
    parking: 1,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=400&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672260066-6bc35f0a1a44?q=80&w=800&auto=format&fit=crop',
    ],
    status: 'Available',
    type: 'Apartment',
    description: 'Contemporary 2-bedroom apartment in prime city location. Features modern finishes, open-plan living, and abundant natural light. Convenient access to shopping malls, restaurants, and business districts. Ideal for professionals and small families.',
    amenities: ['Fitness Center', 'Swimming Pool', 'Parking', 'Security', 'Elevator', 'WiFi'],
    features: ['Modern Kitchen', 'Balcony', 'Built-in Wardrobes', 'Air Conditioning', 'Cable Ready'],
    yearBuilt: 2021,
    agent: {
      name: 'Maria Santos',
      phone: '+63 917 123 4567',
      email: 'maria.santos@mbc.com',
      photo: 'https://i.pravatar.cc/150?img=32',
      prcLicense: 'PRC-12345-2020',
      yearsExperience: 8,
      specialization: ['Luxury Condominiums', 'High-Rise Properties', 'Investment Properties'],
      totalSales: 45,
      officeLocation: 'MBC Tower, Lacson Street, Bacolod City',
      bio: 'Specializing in luxury properties with over 8 years of experience in the Bacolod real estate market. Committed to finding the perfect home for every client.'
    }
  },
  {
    id: 6,
    title: 'Executive Townhouse',
    price: '₱7,800,000',
    location: 'Mandalagan, Bacolod',
    beds: 3,
    baths: 2,
    sqft: 120,
    parking: 2,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=800&auto=format&fit=crop',
    ],
    status: 'Available',
    type: 'Townhouse',
    description: 'Elegant 3-story townhouse in exclusive gated community. Features contemporary design with practical layout. Each floor thoughtfully designed for comfort and functionality. Located in prestigious neighborhood with easy access to major thoroughfares.',
    amenities: ['Gated Community', 'Clubhouse', 'Swimming Pool', 'Playground', '24/7 Security', 'Visitor Parking'],
    features: ['3-Story Design', 'Master Bedroom with Balcony', 'Maid\'s Room', 'Storage Area', 'Modern Kitchen', 'Patio'],
    yearBuilt: 2022,
    agent: {
      name: 'John Dela Cruz',
      phone: '+63 918 234 5678',
      email: 'john.delacruz@mbc.com',
      photo: 'https://i.pravatar.cc/150?img=68',
      prcLicense: 'PRC-23456-2019',
      yearsExperience: 10,
      specialization: ['Residential Properties', 'Family Homes', 'Suburban Areas'],
      totalSales: 67,
      officeLocation: 'MBC Talisay Office, Talisay City',
      bio: 'A decade of experience helping families find their dream homes. Known for personalized service and deep knowledge of suburban properties.'
    }
  },
  {
    id: 7,
    title: 'Garden View Condo',
    price: '₱4,200,000',
    location: 'Bata, Bacolod',
    beds: 2,
    baths: 1,
    sqft: 45,
    parking: 1,
    image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=400&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop',
    ],
    status: 'Available',
    type: 'Condominium',
    description: 'Charming 2-bedroom condo with garden views and natural lighting. Well-maintained building with peaceful atmosphere. Perfect starter home or investment property. Located near schools, markets, and public transportation.',
    amenities: ['Garden', 'Security', 'Parking', 'Water Supply', 'Backup Generator'],
    features: ['Garden View', 'Open Kitchen', 'Balcony', 'Storage Space', 'Tiled Flooring'],
    yearBuilt: 2019,
    agent: {
      name: 'Ana Reyes',
      phone: '+63 919 345 6789',
      email: 'ana.reyes@mbc.com',
      photo: 'https://i.pravatar.cc/150?img=45',
      prcLicense: 'PRC-34567-2021',
      yearsExperience: 5,
      specialization: ['Rental Properties', 'Studio Units', 'Young Professionals'],
      totalSales: 32,
      officeLocation: 'MBC Downtown Office, Bacolod City',
      bio: 'Specializing in rental properties and helping young professionals find their first home. Passionate about making renting easy and affordable.'
    }
  },
  {
    id: 8,
    title: 'Heritage House',
    price: '₱9,500,000',
    location: 'Silay City Heritage District',
    beds: 4,
    baths: 3,
    sqft: 200,
    parking: 2,
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=400&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop',
    ],
    status: 'Sold',
    type: 'Heritage House',
    description: 'Beautifully restored Spanish colonial house in the heart of Silay\'s heritage district. Features original capiz shell windows, hardwood floors, and vintage architectural details. Spacious rooms with high ceilings. A piece of history combined with modern comforts.',
    amenities: ['Historic Landmark', 'Garden', 'Antique Features', 'Original Architecture'],
    features: ['Capiz Windows', 'Hardwood Floors', 'High Ceilings', 'Vintage Fixtures', 'Spacious Rooms', 'Historical Value'],
    yearBuilt: 1920,
    agent: {
      name: 'Carlos Martinez',
      phone: '+63 920 456 7890',
      email: 'carlos.martinez@mbc.com',
      photo: 'https://i.pravatar.cc/150?img=12',
      prcLicense: 'PRC-45678-2018',
      yearsExperience: 12,
      specialization: ['Luxury Villas', 'Beachfront Properties', 'High-End Residential'],
      totalSales: 89,
      officeLocation: 'MBC Silay Office, Silay City',
      bio: 'Leading expert in luxury beachfront properties with over a decade of experience. Committed to delivering exceptional service for discerning clients.'
    }
  },
  {
    id: 9,
    title: 'Lakeside Retreat',
    price: '₱6,500,000',
    location: 'Talisay City',
    beds: 3,
    baths: 2,
    sqft: 140,
    parking: 2,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=400&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600047509782-20d39509f26d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?q=80&w=800&auto=format&fit=crop',
    ],
    status: 'Available',
    type: 'House and Lot',
    description: 'Serene lakeside property perfect for those seeking tranquility and natural beauty. Wake up to stunning lake views and enjoy peaceful mornings. Features include a private dock, outdoor entertainment area, and lush gardens. Ideal weekend retreat or permanent residence.',
    amenities: ['Private Dock', 'Lake Access', 'Garden', 'Outdoor Pavilion', 'Fish Pond', 'Security'],
    features: ['Lake View', 'Large Windows', 'Outdoor Living Space', 'Native Garden', 'Privacy', 'Natural Surroundings'],
    yearBuilt: 2020,
    agent: {
      name: 'John Dela Cruz',
      phone: '+63 918 234 5678',
      email: 'john.delacruz@mbc.com',
      photo: 'https://i.pravatar.cc/150?img=68',
      prcLicense: 'PRC-23456-2019',
      yearsExperience: 10,
      specialization: ['Residential Properties', 'Family Homes', 'Suburban Areas'],
      totalSales: 67,
      officeLocation: 'MBC Talisay Office, Talisay City',
      bio: 'A decade of experience helping families find their dream homes. Known for personalized service and deep knowledge of suburban properties.'
    }
  },
  {
    id: 10,
    title: 'Business District Loft',
    price: '₱18,500 / month',
    location: 'Bacolod CBD',
    beds: 1,
    baths: 1,
    sqft: 42,
    parking: 1,
    image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=400&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672260066-6bc35f0a1a44?q=80&w=800&auto=format&fit=crop',
    ],
    status: 'Available',
    type: 'Loft',
    description: 'Stylish loft in the heart of Bacolod\'s business district. Industrial-chic design with exposed brick and high ceilings. Walking distance to offices, cafes, and nightlife. Perfect for executives and entrepreneurs who value location and style.',
    amenities: ['Rooftop Bar', 'Co-working Space', 'Gym', 'Concierge', 'Retail Shops', 'Cafe'],
    features: ['High Ceilings', 'Exposed Brick', 'Modern Kitchen', 'City Views', 'Open Layout', 'Smart Locks'],
    yearBuilt: 2022,
    agent: {
      name: 'Maria Santos',
      phone: '+63 917 123 4567',
      email: 'maria.santos@mbc.com',
      photo: 'https://i.pravatar.cc/150?img=32',
      prcLicense: 'PRC-12345-2020',
      yearsExperience: 8,
      specialization: ['Luxury Condominiums', 'High-Rise Properties', 'Investment Properties'],
      totalSales: 45,
      officeLocation: 'MBC Tower, Lacson Street, Bacolod City',
      bio: 'Specializing in luxury properties with over 8 years of experience in the Bacolod real estate market. Committed to finding the perfect home for every client.'
    }
  },
  {
    id: 11,
    title: 'Mountain View Estate',
    price: '₱22,000,000',
    location: 'Bago City',
    beds: 6,
    baths: 5,
    sqft: 450,
    parking: 4,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=400&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop',
    ],
    status: 'Available',
    type: 'Estate',
    description: 'Magnificent estate with panoramic mountain views. Sprawling property on 2 hectares of land with main house, guest house, and staff quarters. Features include infinity pool, tennis court, and organic garden. Ultimate privacy and luxury in nature.',
    amenities: ['Infinity Pool', 'Tennis Court', 'Guest House', 'Staff Quarters', 'Organic Garden', 'Helipad', 'Security'],
    features: ['Mountain Views', '2 Hectares Land', 'Main House', 'Entertainment Wing', 'Wine Cellar', 'Home Automation', 'Solar Power'],
    yearBuilt: 2023,
    agent: {
      name: 'Carlos Martinez',
      phone: '+63 920 456 7890',
      email: 'carlos.martinez@mbc.com',
      photo: 'https://i.pravatar.cc/150?img=12',
      prcLicense: 'PRC-45678-2018',
      yearsExperience: 12,
      specialization: ['Luxury Villas', 'Beachfront Properties', 'High-End Residential'],
      totalSales: 89,
      officeLocation: 'MBC Silay Office, Silay City',
      bio: 'Leading expert in luxury beachfront properties with over a decade of experience. Committed to delivering exceptional service for discerning clients.'
    }
  },
  {
    id: 12,
    title: 'Urban Studio Plus',
    price: '₱12,000 / month',
    location: 'Lacson Street, Bacolod',
    beds: 1,
    baths: 1,
    sqft: 35,
    parking: 1,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=400&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop',
    ],
    status: 'Reserved',
    type: 'Studio',
    description: 'Efficient studio apartment along busy Lacson Street. Maximized space with clever storage solutions. All utilities included. Steps away from restaurants, shops, and public transportation. Perfect for minimalist living.',
    amenities: ['Utilities Included', 'Laundry Service', 'WiFi', 'Cable TV', 'Water', 'Security'],
    features: ['Fully Furnished', 'Murphy Bed', 'Kitchenette', 'Smart Storage', 'AC', 'Cable Ready'],
    yearBuilt: 2021,
    agent: {
      name: 'Ana Reyes',
      phone: '+63 919 345 6789',
      email: 'ana.reyes@mbc.com',
      photo: 'https://i.pravatar.cc/150?img=45',
      prcLicense: 'PRC-34567-2021',
      yearsExperience: 5,
      specialization: ['Rental Properties', 'Studio Units', 'Young Professionals'],
      totalSales: 32,
      officeLocation: 'MBC Downtown Office, Bacolod City',
      bio: 'Specializing in rental properties and helping young professionals find their first home. Passionate about making renting easy and affordable.'
    }
  }
];

export function getPropertyById(id: number): Property | undefined {
  return allProperties.find(property => property.id === id);
}

export function getFeaturedProperties(): Property[] {
  return allProperties.filter(property => property.status === 'Available').slice(0, 5);
}

export function getRecentListings(): Property[] {
  return allProperties.slice(-6);
}