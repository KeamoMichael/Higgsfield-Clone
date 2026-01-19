// Dropdown options for the prompt builder with accurate representative images

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

// Lighting Sources - with AI-generated accurate representative images
export const lightingSources: SelectOption[] = [
  { value: 'natural-light', label: 'Natural Light', image: '/presets/lighting_natural_1768790047365.png', description: 'Soft daylight through window' },
  { value: 'golden-hour', label: 'Golden Hour', image: '/presets/lighting_golden_hour_1768789903761.png', description: 'Warm sunset lighting' },
  { value: 'blue-hour', label: 'Blue Hour', image: '/presets/lighting_blue_hour_1768790065890.png', description: 'Cool twilight ambient light' },
  { value: 'hard-lighting', label: 'Hard Lighting', image: '/presets/lighting_hard_1768789951425.png', description: 'Sharp shadows, defined edges' },
  { value: 'soft-lighting', label: 'Soft Lighting', image: '/presets/lighting_soft_1768789967300.png', description: 'Diffused, gentle illumination' },
  { value: 'volumetric-lighting', label: 'Volumetric Lighting', image: '/presets/lighting_volumetric_1768790084644.png', description: 'Light rays through atmosphere' },
  { value: 'rim-lighting', label: 'Backlighting / Rim Light', image: '/presets/lighting_rim_backlight_1768789868946.png', description: 'Light from behind creating halo' },
  { value: 'backlit', label: 'Silhouette', image: '/presets/lighting_silhouette_1768790100706.png', description: 'Subject dark against bright background' },
  { value: 'neon-glow', label: 'Neon Glow', image: '/presets/lighting_neon_1768790001421.png', description: 'Colorful neon light on face' },
  { value: 'chiaroscuro', label: 'Chiaroscuro Lighting', image: '/presets/lighting_chiaroscuro_1768789887186.png', description: 'Strong contrast of light and shadow' },
  { value: 'high-key', label: 'High Key Lighting', image: '/presets/lighting_high_key_1768790151438.png', description: 'Bright, minimal shadows' },
  { value: 'low-key', label: 'Low Key Lighting', image: '/presets/lighting_low_key_1768790169386.png', description: 'Dark, dramatic shadows' },
  { value: 'broad-lighting', label: 'Broad Lighting', image: '/presets/lighting_broad_1768790194541.png', description: 'Light on wider side of face' },
  { value: 'candlelight', label: 'Candlelight', image: '/presets/lighting_candlelight_1768789984067.png', description: 'Warm flickering flame light' },
  { value: 'gobo-lighting', label: 'Gobo Lighting', image: '/presets/lighting_gobo_1768790215423.png', description: 'Patterned shadows through blinds' },
];

// Atmosphere/Mood - with AI-generated representative images
export const atmospheres: SelectOption[] = [
  { value: 'cinematic', label: 'Cinematic', image: '/presets/mood_cinematic_1768790647345.png' },
  { value: 'moody', label: 'Moody', image: '/presets/mood_moody_1768790663309.png' },
  { value: 'dramatic', label: 'Dramatic', image: '/presets/mood_dramatic_1768790682076.png' },
  { value: 'nostalgic', label: 'Nostalgic', image: '/presets/mood_nostalgic_1768790752920.png' },
  { value: 'ethereal', label: 'Ethereal', image: '/presets/mood_ethereal_1768790701003.png' },
  { value: 'mysterious', label: 'Mysterious', image: '/presets/mood_mysterious_1768790783511.png' },
  { value: 'melancholic', label: 'Melancholic', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop' },
  { value: 'gritty', label: 'Gritty', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=300&fit=crop' },
  { value: 'serene', label: 'Serene', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop' },
  { value: 'tense', label: 'Tense', image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=400&h=300&fit=crop' },
  { value: 'ominous', label: 'Ominous', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop' },
  { value: 'hopeful', label: 'Hopeful', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop' },
  { value: 'lonely', label: 'Lonely', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop' },
  { value: 'romantic', label: 'Romantic', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop' },
  { value: 'dark', label: 'Dark and Brooding', image: 'https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?w=400&h=300&fit=crop' },
  { value: 'whimsical', label: 'Whimsical', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop' },
];

// Camera Bodies - with images showing footage/style characteristic of each camera
export const cameraBodies: SelectOption[] = [
  { value: 'arri-alexa-65', label: 'ARRI Alexa 65', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop', description: 'Large format cinema' },
  { value: 'arri-alexa-mini', label: 'ARRI Alexa Mini', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=300&fit=crop', description: 'Compact cinema camera' },
  { value: 'red-komodo', label: 'RED Komodo', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop', description: '6K compact cinema' },
  { value: 'red-v-raptor', label: 'RED V-Raptor', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=300&fit=crop', description: '8K high-end cinema' },
  { value: 'sony-venice', label: 'Sony Venice', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop', description: 'Full-frame cinema' },
  { value: 'sony-fx6', label: 'Sony FX6', image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=300&fit=crop', description: 'Documentary camera' },
  { value: 'canon-c500', label: 'Canon C500', image: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=400&h=300&fit=crop', description: 'Cinema EOS' },
  { value: 'canon-eos-r5', label: 'Canon EOS R5', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop', description: 'Mirrorless hybrid' },
  { value: 'blackmagic-ursa', label: 'Blackmagic URSA', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=300&fit=crop', description: 'Indie cinema' },
  { value: 'panasonic-varicam', label: 'Panasonic VariCam', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=300&fit=crop', description: 'Broadcast/cinema' },
  { value: 'panavision-panaflex', label: 'Panavision Panaflex', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=300&fit=crop', description: 'Classic Hollywood' },
  { value: 'hasselblad-x1d', label: 'Hasselblad X1D II', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=300&fit=crop', description: 'Medium format' },
  { value: 'lomo-lc-a', label: 'Lomo LC-A', image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=400&h=300&fit=crop', description: 'Lomography aesthetic' },
  { value: 'bolex-h16', label: 'Bolex H16', image: 'https://images.unsplash.com/photo-1460134846237-51c777df6111?w=400&h=300&fit=crop', description: '16mm film camera' },
  { value: '16mm-film-camera', label: '16mm Film Camera', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop', description: 'Indie film aesthetic' },
  { value: '35mm-film-camera', label: '35mm Film Camera', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=300&fit=crop', description: 'Classic film look' },
  { value: '8mm-film-camera', label: '8mm Film Camera', image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=400&h=300&fit=crop', description: 'Vintage home movie' },
  { value: 'aaton-xtr', label: 'Aaton XTR', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=300&fit=crop', description: 'Documentary 16mm' },
  { value: 'fujifilm-x-t4', label: 'Fujifilm X-T4', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', description: 'Film simulation' },
  { value: 'gopro-hero', label: 'GoPro Hero', image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop', description: 'Action camera' },
  { value: 'vhs-camera', label: 'VHS Camera', image: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&h=300&fit=crop', description: 'Retro video look' },
];

// Focal Lengths - with representative images
export const focalLengths: SelectOption[] = [
  { value: '14mm', label: '14mm Ultra Wide', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', description: 'Dramatic perspective, wide view' },
  { value: '24mm', label: '24mm Wide Angle', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop', description: 'Environmental portraits, architecture' },
  { value: '35mm', label: '35mm Standard', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop', description: 'Natural perspective, cinema standard' },
  { value: '50mm', label: '50mm Normal', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop', description: 'Human eye perspective' },
  { value: '85mm', label: '85mm Portrait', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=300&fit=crop', description: 'Classic portrait compression' },
  { value: '100mm', label: '100mm Macro', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', description: 'Detail and close-up work' },
  { value: '135mm', label: '135mm Telephoto', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop', description: 'Compressed bokeh portraits' },
  { value: '200mm', label: '200mm Long Telephoto', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop', description: 'Maximum background compression' },
];

// Lens Types - with representative images
export const lensTypes: SelectOption[] = [
  { value: 'prime', label: 'Prime Lens', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop', description: 'Sharp, fast aperture' },
  { value: 'anamorphic', label: 'Anamorphic Lens', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=300&fit=crop', description: 'Oval bokeh, horizontal flares' },
  { value: 'wide-angle', label: 'Wide Angle Lens', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', description: 'Expanded field of view' },
  { value: 'telephoto', label: 'Telephoto Lens', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop', description: 'Compressed perspective' },
  { value: 'macro', label: 'Macro Lens', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', description: 'Extreme close-up detail' },
  { value: 'tilt-shift', label: 'Tilt-Shift Lens', image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=300&fit=crop', description: 'Selective focus, miniature effect' },
  { value: 'fisheye', label: 'Fisheye Lens', image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop', description: '180° distorted view' },
  { value: 'vintage', label: 'Vintage Lens', image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=400&h=300&fit=crop', description: 'Soft, character, flares' },
  { value: 'zeiss-master', label: 'Zeiss Master Prime', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop', description: 'Clinical sharpness' },
  { value: 'cooke-s4', label: 'Cooke S4', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=300&fit=crop', description: 'Warm, rounded look' },
];

// Film Stocks - with images showing color/grain characteristics
export const filmStocks: SelectOption[] = [
  { value: 'kodak-portra-400', label: 'Kodak Portra 400', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop', description: 'Warm skin tones, fine grain' },
  { value: 'kodak-portra-800', label: 'Kodak Portra 800', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop', description: 'High-speed portrait film' },
  { value: 'kodak-ektar-100', label: 'Kodak Ektar 100', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', description: 'Vivid colors, ultra fine grain' },
  { value: 'kodak-gold-200', label: 'Kodak Gold 200', image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=400&h=300&fit=crop', description: 'Warm nostalgic tones' },
  { value: 'kodak-vision3-500t', label: 'Kodak Vision3 500T', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=300&fit=crop', description: 'Tungsten cinema film' },
  { value: 'fuji-velvia-50', label: 'Fuji Velvia 50', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop', description: 'Punchy saturated colors' },
  { value: 'fuji-provia-100', label: 'Fuji Provia 100F', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop', description: 'Natural color balance' },
  { value: 'fuji-superia-400', label: 'Fuji Superia 400', image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop', description: 'Cool greens, consumer film' },
  { value: 'cinestill-800t', label: 'CineStill 800T', image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&h=300&fit=crop', description: 'Neon halation effect' },
  { value: 'cinestill-50d', label: 'CineStill 50D', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop', description: 'Daylight cinema film' },
  { value: 'ilford-hp5', label: 'Ilford HP5 Plus', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop', description: 'Classic B&W, visible grain' },
  { value: 'ilford-delta-3200', label: 'Ilford Delta 3200', image: 'https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?w=400&h=300&fit=crop', description: 'High-speed B&W, heavy grain' },
  { value: 'kodak-tri-x-400', label: 'Kodak Tri-X 400', image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=400&h=300&fit=crop', description: 'Iconic B&W photojournalism' },
  { value: 'technicolor', label: 'Technicolor', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop', description: 'Saturated vintage cinema' },
  { value: 'black-and-white', label: 'Black and White Film', image: 'https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?w=400&h=300&fit=crop', description: 'Timeless monochrome' },
];

// Photography Genres - with representative examples
export const photographyGenres: SelectOption[] = [
  { value: 'cinematic', label: 'Cinematic', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop' },
  { value: 'documentary', label: 'Documentary', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop' },
  { value: 'street', label: 'Street Photography', image: 'https://images.unsplash.com/photo-1476842634003-7dcca8f832de?w=400&h=300&fit=crop' },
  { value: 'portrait', label: 'Portrait', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop' },
  { value: 'fashion', label: 'Fashion', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=300&fit=crop' },
  { value: 'editorial', label: 'Editorial', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=300&fit=crop' },
  { value: 'fine-art', label: 'Fine Art', image: 'https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?w=400&h=300&fit=crop' },
  { value: 'commercial', label: 'Commercial', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop' },
  { value: 'landscape', label: 'Landscape', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop' },
  { value: 'architectural', label: 'Architectural', image: 'https://images.unsplash.com/photo-1481253127861-534498168948?w=400&h=300&fit=crop' },
  { value: 'product', label: 'Product Photography', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop' },
  { value: 'photojournalism', label: 'Photojournalism', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop' },
];

// Photographer Styles - with images reflecting their aesthetic
export const photographerStyles: SelectOption[] = [
  { value: 'gregory-crewdson', label: 'Gregory Crewdson', image: 'https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?w=400&h=300&fit=crop', description: 'Cinematic suburban tableaux' },
  { value: 'annie-leibovitz', label: 'Annie Leibovitz', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=300&fit=crop', description: 'Iconic celebrity portraits' },
  { value: 'peter-lindbergh', label: 'Peter Lindbergh', image: 'https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?w=400&h=300&fit=crop', description: 'Raw, emotional fashion' },
  { value: 'helmut-newton', label: 'Helmut Newton', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=300&fit=crop', description: 'Provocative fashion photography' },
  { value: 'richard-avedon', label: 'Richard Avedon', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=300&fit=crop', description: 'High contrast studio portraits' },
  { value: 'james-bidgood', label: 'James Bidgood', image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&h=300&fit=crop', description: 'Surreal colorful worlds' },
  { value: 'gordon-parks', label: 'Gordon Parks', image: 'https://images.unsplash.com/photo-1476842634003-7dcca8f832de?w=400&h=300&fit=crop', description: 'Humanist documentary' },
  { value: 'sebastiao-salgado', label: 'Sebastião Salgado', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop', description: 'Epic B&W documentary' },
  { value: 'vivian-maier', label: 'Vivian Maier', image: 'https://images.unsplash.com/photo-1476842634003-7dcca8f832de?w=400&h=300&fit=crop', description: '1950s street photography' },
  { value: 'steve-mccurry', label: 'Steve McCurry', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop', description: 'Vibrant editorial portraits' },
  { value: 'fan-ho', label: 'Fan Ho', image: 'https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?w=400&h=300&fit=crop', description: 'Poetic light and shadow' },
  { value: 'saul-leiter', label: 'Saul Leiter', image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=400&h=300&fit=crop', description: 'Abstract color street' },
];

// Movie Look / Aesthetic - with images showing the visual style
export const movieLooks: SelectOption[] = [
  { value: 'stanley-kubrick', label: 'Stanley Kubrick', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=300&fit=crop', description: 'Symmetrical, wide angle' },
  { value: 'ridley-scott', label: 'Ridley Scott', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=300&fit=crop', description: 'Atmospheric, smoky' },
  { value: 'denis-villeneuve', label: 'Denis Villeneuve', image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop', description: 'Minimalist sci-fi' },
  { value: 'wes-anderson', label: 'Wes Anderson', image: 'https://images.unsplash.com/photo-1578632749014-ca77efd052eb?w=400&h=300&fit=crop', description: 'Pastel symmetrical' },
  { value: 'christopher-nolan', label: 'Christopher Nolan', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop', description: 'IMAX scale, practical' },
  { value: 'david-fincher', label: 'David Fincher', image: 'https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?w=400&h=300&fit=crop', description: 'Dark, desaturated thriller' },
  { value: 'wong-kar-wai', label: 'Wong Kar-wai', image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&h=300&fit=crop', description: 'Neon-drenched romance' },
  { value: 'terrence-malick', label: 'Terrence Malick', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop', description: 'Golden hour naturalism' },
  { value: 'quentin-tarantino', label: 'Quentin Tarantino', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop', description: '70s exploitation homage' },
  { value: 'blade-runner', label: 'Blade Runner', image: 'https://images.unsplash.com/photo-1534996858221-380b92700493?w=400&h=300&fit=crop', description: 'Neon noir cyberpunk' },
  { value: 'matrix', label: 'The Matrix', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop', description: 'Green-tinted digital' },
  { value: 'roger-deakins', label: 'Roger Deakins', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', description: 'Natural light master' },
  { value: 'emmanuel-lubezki', label: 'Emmanuel Lubezki', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop', description: 'Long takes, magic hour' },
  { value: 'neo-noir', label: 'Neo-Noir', image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&h=300&fit=crop', description: 'Modern dark thriller' },
  { value: 'film-noir', label: 'Film Noir', image: 'https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?w=400&h=300&fit=crop', description: 'Classic B&W shadows' },
];

// Filters/Effects - with representative images
export const filterEffects: SelectOption[] = [
  { value: 'none', label: 'No Filter', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop', description: 'Clean, unprocessed look' },
  { value: 'film-grain', label: 'Film Grain', image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=400&h=300&fit=crop', description: 'Subtle analog texture' },
  { value: 'heavy-grain', label: 'Heavy Film Grain', image: 'https://images.unsplash.com/photo-1460134846237-51c777df6111?w=400&h=300&fit=crop', description: 'Gritty, high ISO look' },
  { value: 'vignette', label: 'Vignette', image: 'https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?w=400&h=300&fit=crop', description: 'Dark edges, center focus' },
  { value: 'motion-blur', label: 'Motion Blur', image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop', description: 'Movement and speed' },
  { value: 'lens-flare', label: 'Lens Flare', image: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400&h=300&fit=crop', description: 'Sun and light artifacts' },
  { value: 'chromatic-aberration', label: 'Chromatic Aberration', image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&h=300&fit=crop', description: 'Color fringing, vintage' },
  { value: 'halation', label: 'Halation', image: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=300&fit=crop', description: 'Glow around highlights' },
  { value: 'light-leak', label: 'Light Leak', image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=400&h=300&fit=crop', description: 'Warm light intrusion' },
  { value: 'desaturated', label: 'Desaturated', image: 'https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?w=400&h=300&fit=crop', description: 'Muted, faded colors' },
  { value: 'cross-processed', label: 'Cross Processed', image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&h=300&fit=crop', description: 'Shifted colors, 90s look' },
  { value: 'teal-orange', label: 'Teal & Orange Grade', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=300&fit=crop', description: 'Hollywood color grade' },
  { value: 'bleach-bypass', label: 'Bleach Bypass', image: 'https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?w=400&h=300&fit=crop', description: 'Desaturated, high contrast' },
];

// Aspect Ratios - expanded list
export const aspectRatios: SelectOption[] = [
  { value: 'auto', label: 'Auto' },
  { value: '1:1', label: '1:1 (Square)' },
  { value: '9:16', label: '9:16 (Vertical)' },
  { value: '16:9', label: '16:9 (Widescreen)' },
  { value: '3:4', label: '3:4 (Portrait)' },
  { value: '4:3', label: '4:3 (Classic)' },
  { value: '3:2', label: '3:2 (35mm Film)' },
  { value: '2:3', label: '2:3 (Portrait Film)' },
  { value: '5:4', label: '5:4 (Large Format)' },
  { value: '4:5', label: '4:5 (Portrait Large Format)' },
  { value: '21:9', label: '21:9 (Ultrawide)' },
  { value: '2.39:1', label: '2.39:1 (Anamorphic Cinema)' },
];

// Resolution options
export const resolutions = [
  { value: '1k', label: '1K', size: 1024 },
  { value: '2k', label: '2K', size: 2048 },
  { value: '4k', label: '4K', size: 4096 },
];
