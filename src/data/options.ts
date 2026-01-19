// Dropdown options for the prompt builder with image previews

export interface SelectOption {
  value: string;
  label: string;
  image?: string;
  description?: string;
}

// Shot Types
export const shotTypes: SelectOption[] = [
  { value: 'wide-shot', label: 'Wide Shot' },
  { value: 'establishing-shot', label: 'Establishing Shot' },
  { value: 'medium-shot', label: 'Medium Shot' },
  { value: 'close-up', label: 'Close Up' },
  { value: 'extreme-close-up', label: 'Extreme Close Up' },
  { value: 'over-the-shoulder', label: 'Over the Shoulder Shot' },
  { value: 'dutch-angle', label: 'Dutch Angle' },
  { value: 'low-angle', label: 'Low Angle Shot' },
  { value: 'high-angle', label: 'High Angle Shot' },
  { value: 'birds-eye', label: 'Bird\'s Eye View' },
  { value: 'pov', label: 'Point of View (POV)' },
  { value: 'two-shot', label: 'Two Shot' },
  { value: 'cowboy-shot', label: 'Cowboy Shot' },
  { value: 'dolly-zoom', label: 'Dolly Zoom' },
];

export const viewingDirections: SelectOption[] = [
  { value: 'front', label: 'From the Front' },
  { value: 'back', label: 'From the Back' },
  { value: 'side', label: 'From the Side' },
  { value: 'three-quarter', label: 'Three Quarter View' },
  { value: 'profile', label: 'Profile View' },
];

// Lighting Sources - with preview images
export const lightingSources: SelectOption[] = [
  { value: 'natural-light', label: 'Natural Light', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop' },
  { value: 'golden-hour', label: 'Golden Hour', image: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400&h=250&fit=crop' },
  { value: 'blue-hour', label: 'Blue Hour', image: 'https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=400&h=250&fit=crop' },
  { value: 'hard-lighting', label: 'Hard Lighting', image: 'https://images.unsplash.com/photo-1518893063132-36e46dbe2428?w=400&h=250&fit=crop' },
  { value: 'soft-lighting', label: 'Soft Lighting', image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=400&h=250&fit=crop' },
  { value: 'volumetric-lighting', label: 'Volumetric Lighting', image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=400&h=250&fit=crop' },
  { value: 'rim-lighting', label: 'Rim Lighting', image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop' },
  { value: 'backlit', label: 'Backlit/Silhouette', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=250&fit=crop' },
  { value: 'neon-glow', label: 'Neon Glow', image: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=250&fit=crop' },
  { value: 'chiaroscuro', label: 'Chiaroscuro Lighting', image: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=400&h=250&fit=crop' },
  { value: 'high-key', label: 'High Key Lighting', image: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=400&h=250&fit=crop' },
  { value: 'low-key', label: 'Low Key Lighting', image: 'https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?w=400&h=250&fit=crop' },
  { value: 'studio-strobe', label: 'Studio Strobe', image: 'https://images.unsplash.com/photo-1604076913837-52ab5629fba9?w=400&h=250&fit=crop' },
  { value: 'practical-lights', label: 'Practical Lights', image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=250&fit=crop' },
  { value: 'candlelight', label: 'Candlelight', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop' },
  { value: 'moonlight', label: 'Moonlight', image: 'https://images.unsplash.com/photo-1472552944129-b035e9ea3744?w=400&h=250&fit=crop' },
];

// Atmosphere/Mood - with preview images
export const atmospheres: SelectOption[] = [
  { value: 'cinematic', label: 'Cinematic', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=250&fit=crop' },
  { value: 'moody', label: 'Moody', image: 'https://images.unsplash.com/photo-1516410529446-2c777cb7366d?w=400&h=250&fit=crop' },
  { value: 'dramatic', label: 'Dramatic', image: 'https://images.unsplash.com/photo-1500252185289-40ca85eb23a7?w=400&h=250&fit=crop' },
  { value: 'melancholic', label: 'Melancholic', image: 'https://images.unsplash.com/photo-1468476396571-4d6f2a427ee7?w=400&h=250&fit=crop' },
  { value: 'nostalgic', label: 'Nostalgic', image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=400&h=250&fit=crop' },
  { value: 'ethereal', label: 'Ethereal', image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=400&h=250&fit=crop' },
  { value: 'gritty', label: 'Gritty', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop' },
  { value: 'serene', label: 'Serene', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=250&fit=crop' },
  { value: 'tense', label: 'Tense', image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=250&fit=crop' },
  { value: 'mysterious', label: 'Mysterious', image: 'https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=400&h=250&fit=crop' },
  { value: 'ominous', label: 'Ominous', image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=250&fit=crop' },
  { value: 'hopeful', label: 'Hopeful', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=250&fit=crop' },
  { value: 'lonely', label: 'Lonely', image: 'https://images.unsplash.com/photo-1475070929565-c985b496cb9f?w=400&h=250&fit=crop' },
  { value: 'romantic', label: 'Romantic', image: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=250&fit=crop' },
  { value: 'dark', label: 'Dark and Brooding', image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=400&h=250&fit=crop' },
  { value: 'whimsical', label: 'Whimsical', image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=250&fit=crop' },
  { value: 'dingy', label: 'Dingy and Depressing', image: 'https://images.unsplash.com/photo-1520962880247-cfaf541c8724?w=400&h=250&fit=crop' },
];

// Camera Bodies - with preview images
export const cameraBodies: SelectOption[] = [
  { value: 'arri-alexa-65', label: 'ARRI Alexa 65', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=250&fit=crop' },
  { value: 'arri-alexa-mini', label: 'ARRI Alexa Mini', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=250&fit=crop' },
  { value: 'red-komodo', label: 'RED Komodo', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=250&fit=crop' },
  { value: 'red-v-raptor', label: 'RED V-Raptor', image: 'https://images.unsplash.com/photo-1616161560417-66d4db5892ec?w=400&h=250&fit=crop' },
  { value: 'sony-venice', label: 'Sony Venice', image: 'https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?w=400&h=250&fit=crop' },
  { value: 'sony-fx6', label: 'Sony FX6', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=250&fit=crop' },
  { value: 'canon-c500', label: 'Canon C500', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=250&fit=crop' },
  { value: 'canon-eos-r5', label: 'Canon EOS R5', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=250&fit=crop' },
  { value: 'blackmagic-ursa', label: 'Blackmagic URSA', image: 'https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?w=400&h=250&fit=crop' },
  { value: 'panasonic-varicam', label: 'Panasonic VariCam', image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&h=250&fit=crop' },
  { value: 'panavision-panaflex', label: 'Panavision Panaflex', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=250&fit=crop' },
  { value: 'hasselblad-x1d', label: 'Hasselblad X1D II', image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=250&fit=crop' },
  { value: 'lomo-lc-a', label: 'Lomo LC-A', image: 'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=400&h=250&fit=crop' },
  { value: 'bolex-h16', label: 'Bolex H16', image: 'https://images.unsplash.com/photo-1542567455-cd733f23fbb1?w=400&h=250&fit=crop' },
  { value: '16mm-film-camera', label: '16mm Film Camera', image: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=400&h=250&fit=crop' },
  { value: '35mm-film-camera', label: '35mm Film Camera', image: 'https://images.unsplash.com/photo-1495707902641-75cac588d2e9?w=400&h=250&fit=crop' },
  { value: '8mm-film-camera', label: '8mm Film Camera', image: 'https://images.unsplash.com/photo-1460134846237-51c777df6111?w=400&h=250&fit=crop' },
  { value: 'aaton-xtr', label: 'Aaton XTR', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=250&fit=crop' },
  { value: 'fujifilm-x-t4', label: 'Fujifilm X-T4', image: 'https://images.unsplash.com/photo-1581591524425-c7e0978571ec?w=400&h=250&fit=crop' },
  { value: 'gopro-hero', label: 'GoPro Hero', image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=250&fit=crop' },
  { value: 'vhs-camera', label: 'VHS Camera', image: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&h=250&fit=crop' },
];

// Focal Lengths
export const focalLengths: SelectOption[] = [
  { value: '14mm', label: '14mm Ultra Wide' },
  { value: '24mm', label: '24mm Wide Angle' },
  { value: '35mm', label: '35mm Standard' },
  { value: '50mm', label: '50mm Normal' },
  { value: '85mm', label: '85mm Portrait' },
  { value: '100mm', label: '100mm Macro' },
  { value: '135mm', label: '135mm Telephoto' },
  { value: '200mm', label: '200mm Long Telephoto' },
];

// Lens Types
export const lensTypes: SelectOption[] = [
  { value: 'prime', label: 'Prime Lens' },
  { value: 'anamorphic', label: 'Anamorphic Lens' },
  { value: 'wide-angle', label: 'Wide Angle Lens' },
  { value: 'telephoto', label: 'Telephoto Lens' },
  { value: 'macro', label: 'Macro Lens' },
  { value: 'tilt-shift', label: 'Tilt-Shift Lens' },
  { value: 'fisheye', label: 'Fisheye Lens' },
  { value: 'vintage', label: 'Vintage Lens' },
  { value: 'zeiss-master', label: 'Zeiss Master Prime' },
  { value: 'cooke-s4', label: 'Cooke S4' },
];

// Film Stocks - with preview images
export const filmStocks: SelectOption[] = [
  { value: 'kodak-portra-400', label: 'Kodak Portra 400', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop' },
  { value: 'kodak-portra-800', label: 'Kodak Portra 800', image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=400&h=250&fit=crop' },
  { value: 'kodak-ektar-100', label: 'Kodak Ektar 100', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=250&fit=crop' },
  { value: 'kodak-gold-200', label: 'Kodak Gold 200', image: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400&h=250&fit=crop' },
  { value: 'kodak-vision3-500t', label: 'Kodak Vision3 500T', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=250&fit=crop' },
  { value: 'fuji-velvia-50', label: 'Fuji Velvia 50', image: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=400&h=250&fit=crop' },
  { value: 'fuji-provia-100', label: 'Fuji Provia 100F', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=250&fit=crop' },
  { value: 'fuji-superia-400', label: 'Fuji Superia 400', image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=250&fit=crop' },
  { value: 'cinestill-800t', label: 'CineStill 800T', image: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=250&fit=crop' },
  { value: 'cinestill-50d', label: 'CineStill 50D', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=250&fit=crop' },
  { value: 'ilford-hp5', label: 'Ilford HP5 Plus', image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=400&h=250&fit=crop' },
  { value: 'ilford-delta-3200', label: 'Ilford Delta 3200', image: 'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=400&h=250&fit=crop' },
  { value: 'kodak-tri-x-400', label: 'Kodak Tri-X 400', image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=400&h=250&fit=crop' },
  { value: 'technicolor', label: 'Technicolor', image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=250&fit=crop' },
  { value: 'black-and-white', label: 'Black and White Film', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=250&fit=crop' },
];

// Photography Genres - with preview images
export const photographyGenres: SelectOption[] = [
  { value: 'cinematic', label: 'Cinematic', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=250&fit=crop' },
  { value: 'documentary', label: 'Documentary', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop' },
  { value: 'street', label: 'Street Photography', image: 'https://images.unsplash.com/photo-1476842634003-7dcca8f832de?w=400&h=250&fit=crop' },
  { value: 'portrait', label: 'Portrait', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop' },
  { value: 'fashion', label: 'Fashion', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop' },
  { value: 'editorial', label: 'Editorial', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=250&fit=crop' },
  { value: 'fine-art', label: 'Fine Art', image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=400&h=250&fit=crop' },
  { value: 'commercial', label: 'Commercial', image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=250&fit=crop' },
  { value: 'landscape', label: 'Landscape', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop' },
  { value: 'architectural', label: 'Architectural', image: 'https://images.unsplash.com/photo-1481253127861-534498168948?w=400&h=250&fit=crop' },
  { value: 'product', label: 'Product Photography', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=250&fit=crop' },
  { value: 'photojournalism', label: 'Photojournalism', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop' },
];

// Photographer Styles - with preview images
export const photographerStyles: SelectOption[] = [
  { value: 'gregory-crewdson', label: 'Gregory Crewdson', image: 'https://images.unsplash.com/photo-1516410529446-2c777cb7366d?w=400&h=250&fit=crop' },
  { value: 'annie-leibovitz', label: 'Annie Leibovitz', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=250&fit=crop' },
  { value: 'peter-lindbergh', label: 'Peter Lindbergh', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=250&fit=crop' },
  { value: 'helmut-newton', label: 'Helmut Newton', image: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=250&fit=crop' },
  { value: 'richard-avedon', label: 'Richard Avedon', image: 'https://images.unsplash.com/photo-1507081323647-4d250478b919?w=400&h=250&fit=crop' },
  { value: 'james-bidgood', label: 'James Bidgood', image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=250&fit=crop' },
  { value: 'gordon-parks', label: 'Gordon Parks', image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&h=250&fit=crop' },
  { value: 'sebastiao-salgado', label: 'Sebastião Salgado', image: 'https://images.unsplash.com/photo-1504600770771-fb03a6961d33?w=400&h=250&fit=crop' },
  { value: 'vivian-maier', label: 'Vivian Maier', image: 'https://images.unsplash.com/photo-1476842634003-7dcca8f832de?w=400&h=250&fit=crop' },
  { value: 'steve-mccurry', label: 'Steve McCurry', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=250&fit=crop' },
  { value: 'fan-ho', label: 'Fan Ho', image: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=400&h=250&fit=crop' },
  { value: 'saul-leiter', label: 'Saul Leiter', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=250&fit=crop' },
];

// Movie Look / Aesthetic - with preview images
export const movieLooks: SelectOption[] = [
  { value: 'stanley-kubrick', label: 'Stanley Kubrick', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=250&fit=crop' },
  { value: 'ridley-scott', label: 'Ridley Scott', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=250&fit=crop' },
  { value: 'denis-villeneuve', label: 'Denis Villeneuve', image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=250&fit=crop' },
  { value: 'wes-anderson', label: 'Wes Anderson', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop' },
  { value: 'christopher-nolan', label: 'Christopher Nolan', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=250&fit=crop' },
  { value: 'david-fincher', label: 'David Fincher', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=250&fit=crop' },
  { value: 'wong-kar-wai', label: 'Wong Kar-wai', image: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=250&fit=crop' },
  { value: 'terrence-malick', label: 'Terrence Malick', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=250&fit=crop' },
  { value: 'quentin-tarantino', label: 'Quentin Tarantino', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=250&fit=crop' },
  { value: 'blade-runner', label: 'Blade Runner', image: 'https://images.unsplash.com/photo-1534996858221-380b92700493?w=400&h=250&fit=crop' },
  { value: 'matrix', label: 'The Matrix', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop' },
  { value: 'roger-deakins', label: 'Roger Deakins', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop' },
  { value: 'emmanuel-lubezki', label: 'Emmanuel Lubezki', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=250&fit=crop' },
  { value: 'neo-noir', label: 'Neo-Noir', image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=250&fit=crop' },
  { value: 'film-noir', label: 'Film Noir', image: 'https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?w=400&h=250&fit=crop' },
];

// Filters/Effects
export const filterEffects: SelectOption[] = [
  { value: 'none', label: 'No Filter' },
  { value: 'film-grain', label: 'Film Grain' },
  { value: 'heavy-grain', label: 'Heavy Film Grain' },
  { value: 'vignette', label: 'Vignette' },
  { value: 'motion-blur', label: 'Motion Blur' },
  { value: 'lens-flare', label: 'Lens Flare' },
  { value: 'chromatic-aberration', label: 'Chromatic Aberration' },
  { value: 'halation', label: 'Halation' },
  { value: 'light-leak', label: 'Light Leak' },
  { value: 'desaturated', label: 'Desaturated' },
  { value: 'cross-processed', label: 'Cross Processed' },
  { value: 'underexposed', label: 'Underexposed' },
  { value: 'overexposed', label: 'Overexposed' },
  { value: 'teal-orange', label: 'Teal & Orange Grade' },
  { value: 'bleach-bypass', label: 'Bleach Bypass' },
];

// Aspect Ratios
export const aspectRatios: SelectOption[] = [
  { value: '16:9', label: '16:9 (Widescreen)' },
  { value: '2.39:1', label: '2.39:1 (Anamorphic)' },
  { value: '1:1', label: '1:1 (Square)' },
  { value: '4:3', label: '4:3 (Classic)' },
  { value: '9:16', label: '9:16 (Vertical)' },
  { value: '21:9', label: '21:9 (Ultrawide)' },
];

// Resolution options
export const resolutions = [
  { value: '1k', label: '1K', size: 1024 },
  { value: '2k', label: '2K', size: 2048 },
  { value: '4k', label: '4K', size: 4096 },
];
