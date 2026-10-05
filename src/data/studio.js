export const services = [
  { title: 'Ceramic coating', slug: 'ceramic-coating', category: 'Protection', price: 690, duration: '1–2 days', image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1400&q=85', description: 'A carefully prepared, durable surface treatment that deepens gloss and makes routine washing easier.', tags: ['Paint protection', 'Gloss'] },
  { title: 'Paint protection film', slug: 'paint-protection-film', category: 'Protection', price: 1200, duration: '2–5 days', image: 'https://images.pexels.com/photos/6873088/pexels-photo-6873088.jpeg?auto=compress&cs=tinysrgb&w=1400', description: 'A transparent physical barrier for high-impact panels, installed to suit your vehicle and driving.', tags: ['PPF', 'Impact care'] },
  { title: 'Paint correction', slug: 'paint-correction', category: 'Paint refinement', price: 420, duration: '1–2 days', image: 'https://images.pexels.com/photos/6873080/pexels-photo-6873080.jpeg?auto=compress&cs=tinysrgb&w=1400', description: 'Measured machine polishing to refine surface defects and reveal a clearer, more even finish.', tags: ['Polishing', 'Gloss'] },
  { title: 'Interior detailing', slug: 'interior-detailing', category: 'Detailing', price: 260, duration: '4–8 hours', image: 'https://images.pexels.com/photos/6873088/pexels-photo-6873088.jpeg?auto=compress&cs=tinysrgb&w=1400', description: 'A meticulous reset for touch points, upholstery, carpets and the quiet details inside.', tags: ['Deep clean', 'Cabin'] },
  { title: 'Exterior detailing', slug: 'exterior-detailing', category: 'Detailing', price: 180, duration: '3–5 hours', image: 'https://images.pexels.com/photos/6873081/pexels-photo-6873081.jpeg?auto=compress&cs=tinysrgb&w=1400', description: 'A safe hand wash, decontamination and finish treatment tailored to your paintwork.', tags: ['Hand wash', 'Finish'] },
  { title: 'Car wrapping', slug: 'car-wrapping', category: 'Styling', price: 2400, duration: '3–7 days', image: 'https://images.pexels.com/photos/6873083/pexels-photo-6873083.jpeg?auto=compress&cs=tinysrgb&w=1400', description: 'A considered colour or finish change using quality film, planned around your vehicle.', tags: ['Vinyl', 'Personalisation'] },
  { title: 'Wheel & tyre care', slug: 'wheel-and-tyre-care', category: 'Detailing', price: 95, duration: '1–2 hours', image: 'https://images.pexels.com/photos/6873080/pexels-photo-6873080.jpeg?auto=compress&cs=tinysrgb&w=1400', description: 'Deep wheel cleaning, brake dust removal and a refined tyre finish.', tags: ['Wheels', 'Care'] },
  { title: 'Glass & headlight care', slug: 'glass-and-headlight-care', category: 'Detailing', price: 120, duration: '2–3 hours', image: 'https://images.pexels.com/photos/6873080/pexels-photo-6873080.jpeg?auto=compress&cs=tinysrgb&w=1400', description: 'Clearer glass, water-repellent treatment and headlight restoration assessments.', tags: ['Visibility', 'Glass'] },
  { title: 'Denting & painting', slug: 'denting-and-painting', category: 'Repair', price: 300, duration: 'By assessment', image: 'https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg?auto=compress&cs=tinysrgb&w=1400', description: 'A personal assessment for minor dents, paint repair and panel refinishing options.', tags: ['Repair', 'Assessment'] },
  { title: 'Maintenance detail', slug: 'maintenance', category: 'Care plans', price: 140, duration: '2–4 hours', image: 'https://images.pexels.com/photos/6873084/pexels-photo-6873084.jpeg?auto=compress&cs=tinysrgb&w=1400', description: 'A repeatable care visit designed around the coatings, films and finishes on your car.', tags: ['Ongoing care', 'Refresh'] },
];

export const packages = [
  { name: 'Essential Care', price: 120, detail: 'A considered reset for everyday drivers.', includes: 'Safe wash · wheels · cabin refresh' },
  { name: 'Complete Detail', price: 390, detail: 'A thorough inside-and-out refresh.', includes: 'Deep interior · decontamination · finish' },
  { name: 'Shine & Protect', price: 540, detail: 'Refinement with a layer of lasting gloss.', includes: 'Paint enhancement · sealant · glass' },
  { name: 'Ceramic Protection', price: 890, detail: 'Preparation-led coating care.', includes: 'Paint correction · coating · aftercare' },
  { name: 'Ultimate Protection', price: 1900, detail: 'A tailored blend of film and finish care.', includes: 'PPF consultation · coating · detail' },
  { name: 'Interior Revival', price: 320, detail: 'A cabin brought back to its best.', includes: 'Extraction · leather care · sanitisation' },
  { name: 'Custom Package', price: null, detail: 'Built around your vehicle and priorities.', includes: 'A personal studio consultation' },
];

export const gallery = [
  { label: 'Detail brush in motion', category: 'Paint correction', image: 'https://images.pexels.com/photos/6873080/pexels-photo-6873080.jpeg?auto=compress&cs=tinysrgb&w=1400' },
  { label: 'Hand wash, close up', category: 'Ceramic coating', image: 'https://images.pexels.com/photos/6873088/pexels-photo-6873088.jpeg?auto=compress&cs=tinysrgb&w=1400' },
  { label: 'A clean studio bay', category: 'Wrapping', image: 'https://images.pexels.com/photos/6873083/pexels-photo-6873083.jpeg?auto=compress&cs=tinysrgb&w=1400' },
  { label: 'A controlled rinse', category: 'Interior', image: 'https://images.pexels.com/photos/6873084/pexels-photo-6873084.jpeg?auto=compress&cs=tinysrgb&w=1400' },
  { label: 'Foam pre-wash', category: 'PPF', image: 'https://images.pexels.com/photos/6873085/pexels-photo-6873085.jpeg?auto=compress&cs=tinysrgb&w=1400' },
  { label: 'Hand wash & finish', category: 'Paint correction', image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1400&q=85' },
];

export const imageUrl = (id, width = 1200) => {
  const actionShots = {
    'photo-1492144534655-ae79c964c9d7': 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1800&q=85',
    'photo-1503376780353-7e6692767b70': 'https://images.pexels.com/photos/6873080/pexels-photo-6873080.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'photo-1542362567-b07e54358753': 'https://images.pexels.com/photos/6873083/pexels-photo-6873083.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'photo-1603386329225-868f9b1ee6c9': 'https://images.pexels.com/photos/6873088/pexels-photo-6873088.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'photo-1506157786151-b8491531f063': 'https://images.pexels.com/photos/6873083/pexels-photo-6873083.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'photo-1507136566006-cfc505b114fc': 'https://images.pexels.com/photos/6873088/pexels-photo-6873088.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'photo-1549317661-bd32c8ce0db2': 'https://images.pexels.com/photos/6873084/pexels-photo-6873084.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'photo-1489824904134-891ab64532f1': 'https://images.pexels.com/photos/6873080/pexels-photo-6873080.jpeg?auto=compress&cs=tinysrgb&w=1400',
  };
  return id.startsWith('http') ? id : actionShots[id] || `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
};
