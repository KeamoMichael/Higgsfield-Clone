// Dropdown options for the prompt builder with local representative images

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

// Camera Bodies - with local images
export const cameraBodies: SelectOption[] = [
  { value: 'arri-alexa-65', label: 'ARRI Alexa 65', image: '/Camera Bodies/ARRI ALEXA 65.png', description: 'Large format cinema' },
  { value: 'arri-alexa-mini', label: 'ARRI Alexa Mini', image: '/Camera Bodies/ARRI ALEXA MINI.png', description: 'Compact cinema camera' },
  { value: 'red-komodo', label: 'RED Komodo', image: '/Camera Bodies/RED KOMODO.png', description: '6K compact cinema' },
  { value: 'red-v-raptor', label: 'RED V-Raptor', image: '/Camera Bodies/RED V‑RAPTOR.png', description: '8K high-end cinema' },
  { value: 'sony-venice', label: 'Sony Venice', image: '/Camera Bodies/SONY VENICE.png', description: 'Full-frame cinema' },
  { value: 'sony-fx6', label: 'Sony FX6', image: '/Camera Bodies/SONY FX6.png', description: 'Documentary camera' },
  { value: 'canon-c500', label: 'Canon C500', image: '/Camera Bodies/CANON C500.png', description: 'Cinema EOS' },
  { value: 'canon-eos-r5', label: 'Canon EOS R5', image: '/Camera Bodies/CANON EOS R5.png', description: 'Mirrorless hybrid' },
  { value: 'blackmagic-ursa', label: 'Blackmagic URSA', image: '/Camera Bodies/BLACKMAGIC URSA.png', description: 'Indie cinema' },
  { value: 'panasonic-varicam', label: 'Panasonic VariCam', image: '/Camera Bodies/PANASONIC VARICAM.png', description: 'Broadcast/cinema' },
  { value: 'panavision-panaflex', label: 'Panavision Panaflex', image: '/Camera Bodies/PANAVISION PANAFLEX.png', description: 'Classic Hollywood' },
  { value: 'hasselblad-x1d', label: 'Hasselblad X1D II', image: '/Camera Bodies/HASSELBLAD X1D II.png', description: 'Medium format' },
  { value: 'lomo-lc-a', label: 'Lomo LC-A', image: '/Camera Bodies/LOMO LC‑A.png', description: 'Lomography aesthetic' },
  { value: 'bolex-h16', label: 'Bolex H16', image: '/Camera Bodies/BOLEX H16.png', description: '16mm film camera' },
  { value: '16mm-film-camera', label: '16mm Film Camera', image: '/Camera Bodies/16 mm FILM CAMERA.png', description: 'Indie film aesthetic' },
  { value: '35mm-film-camera', label: '35mm Film Camera', image: '/Camera Bodies/35 mm FILM CAMERA.png', description: 'Classic film look' },
  { value: '8mm-film-camera', label: '8mm Film Camera', image: '/Camera Bodies/8 mm FILM CAMERA.png', description: 'Vintage home movie' },
  { value: 'aaton-xtr', label: 'Aaton XTR', image: '/Camera Bodies/AATON XTR.png', description: 'Documentary 16mm' },
  { value: 'fujifilm-x-t4', label: 'Fujifilm X-T4', image: '/Camera Bodies/FUJIFILM X‑T4.png', description: 'Film simulation' },
  { value: 'gopro-hero', label: 'GoPro Hero', image: '/Camera Bodies/GOPRO HERO.png', description: 'Action camera' },
];

// Focal Lengths - with local images
export const focalLengths: SelectOption[] = [
  { value: '14mm', label: '14mm Ultra Wide', image: '/Focal Length/14mm Ultra Wide.png', description: 'Dramatic perspective, wide view' },
  { value: '24mm', label: '24mm Wide Angle', image: '/Focal Length/24mm Wide Angle.png', description: 'Environmental portraits, architecture' },
  { value: '35mm', label: '35mm Standard', image: '/Focal Length/35mm Standard.png', description: 'Natural perspective, cinema standard' },
  { value: '50mm', label: '50mm Normal', image: '/Focal Length/50mm Normal.png', description: 'Human eye perspective' },
  { value: '85mm', label: '85mm Portrait', image: '/Focal Length/85mm Portrait.png', description: 'Classic portrait compression' },
  { value: '100mm', label: '100mm Macro', image: '/Focal Length/100mm Macro.png', description: 'Detail and close-up work' },
  { value: '135mm', label: '135mm Telephoto', image: '/Focal Length/135mm Telephoto.png', description: 'Compressed bokeh portraits' },
  { value: '200mm', label: '200mm Long Telephoto', image: '/Focal Length/200mm Long Telephoto.png', description: 'Maximum background compression' },
];

// Lens Types - actual lens names with type as description
export const lensTypes: SelectOption[] = [
  { value: 'zeiss-master-prime', label: 'Zeiss Master Prime', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop', description: 'Prime Lens' },
  { value: 'cooke-s4i', label: 'Cooke S4/i', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=300&fit=crop', description: 'Prime Lens' },
  { value: 'arri-signature-prime', label: 'ARRI Signature Prime', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop', description: 'Prime Lens' },
  { value: 'panavision-primo', label: 'Panavision Primo', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=300&fit=crop', description: 'Prime Lens' },
  { value: 'panavision-c-series', label: 'Panavision C-Series', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=300&fit=crop', description: 'Anamorphic Lens' },
  { value: 'arri-master-anamorphic', label: 'ARRI Master Anamorphic', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=300&fit=crop', description: 'Anamorphic Lens' },
  { value: 'kowa-prominar', label: 'Kowa Prominar', image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=400&h=300&fit=crop', description: 'Anamorphic Lens' },
  { value: 'atlas-orion', label: 'Atlas Orion', image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&h=300&fit=crop', description: 'Anamorphic Lens' },
  { value: 'canon-k35', label: 'Canon K35', image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=400&h=300&fit=crop', description: 'Vintage Lens' },
  { value: 'helios-44-2', label: 'Helios 44-2', image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=400&h=300&fit=crop', description: 'Vintage Lens' },
  { value: 'super-baltar', label: 'Super Baltar', image: 'https://images.unsplash.com/photo-1460134846237-51c777df6111?w=400&h=300&fit=crop', description: 'Vintage Lens' },
  { value: 'zeiss-super-speed', label: 'Zeiss Super Speed', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop', description: 'Vintage Lens' },
  { value: 'laowa-24mm-probe', label: 'Laowa 24mm Probe', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', description: 'Macro Lens' },
  { value: 'canon-mp-e-65mm', label: 'Canon MP-E 65mm', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', description: 'Macro Lens' },
  { value: 'sigma-14mm-art', label: 'Sigma 14mm Art', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', description: 'Wide Angle Lens' },
  { value: 'canon-ts-e-24mm', label: 'Canon TS-E 24mm', image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=300&fit=crop', description: 'Tilt-Shift Lens' },
  { value: 'nikon-8mm-fisheye', label: 'Nikon 8mm Fisheye', image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop', description: 'Fisheye Lens' },
  { value: 'canon-ef-200mm', label: 'Canon EF 200mm f/2L', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop', description: 'Telephoto Lens' },
];

// Film Stocks - with local images
export const filmStocks: SelectOption[] = [
  { value: 'kodak-portra-400', label: 'Kodak Portra 400', image: '/Film Stock/Kodak Portra 400.png', description: 'Warm skin tones, fine grain' },
  { value: 'kodak-portra-800', label: 'Kodak Portra 800', image: '/Film Stock/Kodak Portra 800.png', description: 'High-speed portrait film' },
  { value: 'kodak-ektar-100', label: 'Kodak Ektar 100', image: '/Film Stock/Kodak Ektar 100.png', description: 'Vivid colors, ultra fine grain' },
  { value: 'kodak-gold-200', label: 'Kodak Gold 200', image: '/Film Stock/Kodak Gold 200.png', description: 'Warm nostalgic tones' },
  { value: 'kodak-vision3-500t', label: 'Kodak Vision3 500T', image: '/Film Stock/Kodak Vision3 500T.png', description: 'Tungsten cinema film' },
  { value: 'fuji-velvia-50', label: 'Fuji Velvia 50', image: '/Film Stock/Fuji Velvia 50.png', description: 'Punchy saturated colors' },
  { value: 'fuji-provia-100', label: 'Fuji Provia 100F', image: '/Film Stock/Fuji Provia 100F.png', description: 'Natural color balance' },
  { value: 'fuji-superia-400', label: 'Fuji Superia 400', image: '/Film Stock/Fuji Superia 400.png', description: 'Cool greens, consumer film' },
  { value: 'cinestill-800t', label: 'CineStill 800T', image: '/Film Stock/Cinestill 800T.png', description: 'Neon halation effect' },
  { value: 'cinestill-50d', label: 'CineStill 50D', image: '/Film Stock/Cinestill 50D.png', description: 'Daylight cinema film' },
  { value: 'ilford-hp5', label: 'Ilford HP5 Plus', image: '/Film Stock/Ilford HP5 Plus.png', description: 'Classic B&W, visible grain' },
  { value: 'ilford-delta-3200', label: 'Ilford Delta 3200', image: '/Film Stock/Ilford Delta 3200.png', description: 'High-speed B&W, heavy grain' },
  { value: 'kodak-tri-x-400', label: 'Kodak Tri-X 400', image: '/Film Stock/Kodak Tri-X 400.png', description: 'Iconic B&W photojournalism' },
  { value: 'technicolor', label: 'Technicolor', image: '/Film Stock/Technicolor.png', description: 'Saturated vintage cinema' },
  { value: 'black-and-white', label: 'Black and White Film', image: '/Film Stock/Black and White Film (Generic Preset).png', description: 'Timeless monochrome' },
];

// Photography Genres - with local images
export const photographyGenres: SelectOption[] = [
  { value: 'cinematic', label: 'Cinematic', image: '/Photography Genre/Cinematic.png' },
  { value: 'documentary', label: 'Documentary', image: '/Photography Genre/Documentary.png' },
  { value: 'street', label: 'Street Photography', image: '/Photography Genre/Street Photography.jpeg' },
  { value: 'portrait', label: 'Portrait', image: '/Photography Genre/Portrait.png' },
  { value: 'fashion', label: 'Fashion', image: '/Photography Genre/Fashion.png' },
  { value: 'editorial', label: 'Editorial', image: '/Photography Genre/Editorial.png' },
  { value: 'fine-art', label: 'Fine Art', image: '/Photography Genre/Fine Art.jpeg' },
  { value: 'commercial', label: 'Commercial', image: '/Photography Genre/Commercial.png' },
  { value: 'landscape', label: 'Landscape', image: '/Photography Genre/Landscape.png' },
  { value: 'architectural', label: 'Architectural', image: '/Photography Genre/Architectural.png' },
  { value: 'product', label: 'Product Photography', image: '/Photography Genre/Product Photography.png' },
  { value: 'photojournalism', label: 'Photojournalism', image: '/Photography Genre/Photojournalism.png' },
];

// Photographer Styles - with local images
export const photographerStyles: SelectOption[] = [
  { value: 'gregory-crewdson', label: 'Gregory Crewdson', image: '/Photographer Style/Gregory Crewdson.png', description: 'Cinematic suburban tableaux' },
  { value: 'annie-leibovitz', label: 'Annie Leibovitz', image: '/Photographer Style/Annie Leibovitz.png', description: 'Iconic celebrity portraits' },
  { value: 'peter-lindbergh', label: 'Peter Lindbergh', image: '/Photographer Style/Peter Lindbergh.png', description: 'Raw, emotional fashion' },
  { value: 'helmut-newton', label: 'Helmut Newton', image: '/Photographer Style/Helmut Newton.png', description: 'Provocative fashion photography' },
  { value: 'richard-avedon', label: 'Richard Avedon', image: '/Photographer Style/Richard Avedon.png', description: 'High contrast studio portraits' },
  { value: 'james-bidgood', label: 'James Bidgood', image: '/Photographer Style/James Bidgood.png', description: 'Surreal colorful worlds' },
  { value: 'gordon-parks', label: 'Gordon Parks', image: '/Photographer Style/Gordon Parks.jpg', description: 'Humanist documentary' },
  { value: 'sebastiao-salgado', label: 'Sebastião Salgado', image: '/Photographer Style/Sebastiao Salgado.webp', description: 'Epic B&W documentary' },
  { value: 'vivian-maier', label: 'Vivian Maier', image: '/Photographer Style/Vivian Maier.jpg', description: '1950s street photography' },
  { value: 'steve-mccurry', label: 'Steve McCurry', image: '/Photographer Style/Steve McCurry.webp', description: 'Vibrant editorial portraits' },
  { value: 'fan-ho', label: 'Fan Ho', image: '/Photographer Style/Fan Ho.webp', description: 'Poetic light and shadow' },
  { value: 'saul-leiter', label: 'Saul Leiter', image: '/Photographer Style/Saul Leiter.jpg', description: 'Abstract color street' },
];

// Movie Look / Aesthetic - with local images
export const movieLooks: SelectOption[] = [
  { value: 'stanley-kubrick', label: 'Stanley Kubrick', image: '/Movie Look & Aesthetic/Stanley Kubrick.jpeg', description: 'Symmetrical, wide angle' },
  { value: 'ridley-scott', label: 'Ridley Scott', image: '/Movie Look & Aesthetic/Ridley Scott.jpeg', description: 'Atmospheric, smoky' },
  { value: 'denis-villeneuve', label: 'Denis Villeneuve', image: '/Movie Look & Aesthetic/Denis Villeneuve.jpeg', description: 'Minimalist sci-fi' },
  { value: 'wes-anderson', label: 'Wes Anderson', image: '/Movie Look & Aesthetic/Wes Anderson.jpeg', description: 'Pastel symmetrical' },
  { value: 'christopher-nolan', label: 'Christopher Nolan', image: '/Movie Look & Aesthetic/Christopher Nolan.jpeg', description: 'IMAX scale, practical' },
  { value: 'david-fincher', label: 'David Fincher', image: '/Movie Look & Aesthetic/David Fincher.jpeg', description: 'Dark, desaturated thriller' },
  { value: 'wong-kar-wai', label: 'Wong Kar-wai', image: '/Movie Look & Aesthetic/Wong Kar-wai.jpeg', description: 'Neon-drenched romance' },
  { value: 'terrence-malick', label: 'Terrence Malick', image: '/Movie Look & Aesthetic/Terrence Malick.jpeg', description: 'Golden hour naturalism' },
  { value: 'quentin-tarantino', label: 'Quentin Tarantino', image: '/Movie Look & Aesthetic/Quentin Tarantino.jpeg', description: '70s exploitation homage' },
  { value: 'blade-runner', label: 'Blade Runner', image: '/Movie Look & Aesthetic/Blade Runner (Aesthetic).jpeg', description: 'Neon noir cyberpunk' },
  { value: 'matrix', label: 'The Matrix', image: '/Movie Look & Aesthetic/The Matrix (Aesthetic).jpeg', description: 'Green-tinted digital' },
  { value: 'roger-deakins', label: 'Roger Deakins', image: '/Movie Look & Aesthetic/Roger Deakins.jpeg', description: 'Natural light master' },
  { value: 'emmanuel-lubezki', label: 'Emmanuel Lubezki', image: '/Movie Look & Aesthetic/Emmanuel Lubezki.jpeg', description: 'Long takes, magic hour' },
  { value: 'neo-noir', label: 'Neo-Noir', image: '/Movie Look & Aesthetic/Neo-Noir.jpeg', description: 'Modern dark thriller' },
  { value: 'film-noir', label: 'Film Noir', image: '/Movie Look & Aesthetic/Film Noir.jpeg', description: 'Classic B&W shadows' },
];

// Filters/Effects - with local images
export const filterEffects: SelectOption[] = [
  { value: 'film-grain', label: 'Film Grain', image: '/Filter & Effect/Film Grain.jpeg', description: 'Subtle analog texture' },
  { value: 'heavy-grain', label: 'Heavy Film Grain', image: '/Filter & Effect/Heavy Film Grain.jpeg', description: 'Gritty, high ISO look' },
  { value: 'vignette', label: 'Vignette', image: '/Filter & Effect/Vignette.jpeg', description: 'Dark edges, center focus' },
  { value: 'motion-blur', label: 'Motion Blur', image: '/Filter & Effect/Motion Blur.jpeg', description: 'Movement and speed' },
  { value: 'lens-flare', label: 'Lens Flare', image: '/Filter & Effect/Lens Flare.jpeg', description: 'Sun and light artifacts' },
  { value: 'chromatic-aberration', label: 'Chromatic Aberration', image: '/Filter & Effect/Chromatic Aberration.jpeg', description: 'Color fringing, vintage' },
  { value: 'halation', label: 'Halation', image: '/Filter & Effect/Halation.jpeg', description: 'Glow around highlights' },
  { value: 'light-leak', label: 'Light Leak', image: '/Filter & Effect/Light Leak.jpeg', description: 'Warm light intrusion' },
  { value: 'desaturated', label: 'Desaturated', image: '/Filter & Effect/Desaturated.jpeg', description: 'Muted, faded colors' },
  { value: 'cross-processed', label: 'Cross Processed', image: '/Filter & Effect/Cross-Processed.jpeg', description: 'Shifted colors, 90s look' },
  { value: 'teal-orange', label: 'Teal & Orange Grade', image: '/Filter & Effect/Teal & Orange Grade.jpeg', description: 'Hollywood color grade' },
  { value: 'bleach-bypass', label: 'Bleach Bypass', image: '/Filter & Effect/Bleach Bypass.jpeg', description: 'Desaturated, high contrast' },
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
