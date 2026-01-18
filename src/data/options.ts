// Dropdown options for the prompt builder

export interface SelectOption {
  value: string;
  label: string;
  image?: string;
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

// Lighting Sources
export const lightingSources: SelectOption[] = [
  { value: 'natural-light', label: 'Natural Light' },
  { value: 'golden-hour', label: 'Golden Hour' },
  { value: 'blue-hour', label: 'Blue Hour' },
  { value: 'hard-lighting', label: 'Hard Lighting' },
  { value: 'soft-lighting', label: 'Soft Lighting' },
  { value: 'volumetric-lighting', label: 'Volumetric Lighting' },
  { value: 'rim-lighting', label: 'Rim Lighting' },
  { value: 'backlit', label: 'Backlit/Silhouette' },
  { value: 'neon-glow', label: 'Neon Glow' },
  { value: 'chiaroscuro', label: 'Chiaroscuro Lighting' },
  { value: 'high-key', label: 'High Key Lighting' },
  { value: 'low-key', label: 'Low Key Lighting' },
  { value: 'studio-strobe', label: 'Studio Strobe' },
  { value: 'practical-lights', label: 'Practical Lights' },
  { value: 'candlelight', label: 'Candlelight' },
  { value: 'moonlight', label: 'Moonlight' },
];

// Atmosphere/Mood
export const atmospheres: SelectOption[] = [
  { value: 'cinematic', label: 'Cinematic' },
  { value: 'moody', label: 'Moody' },
  { value: 'dramatic', label: 'Dramatic' },
  { value: 'melancholic', label: 'Melancholic' },
  { value: 'nostalgic', label: 'Nostalgic' },
  { value: 'ethereal', label: 'Ethereal' },
  { value: 'gritty', label: 'Gritty' },
  { value: 'serene', label: 'Serene' },
  { value: 'tense', label: 'Tense' },
  { value: 'mysterious', label: 'Mysterious' },
  { value: 'ominous', label: 'Ominous' },
  { value: 'hopeful', label: 'Hopeful' },
  { value: 'lonely', label: 'Lonely' },
  { value: 'romantic', label: 'Romantic' },
  { value: 'dark', label: 'Dark and Brooding' },
  { value: 'whimsical', label: 'Whimsical' },
  { value: 'dingy', label: 'Dingy and Depressing' },
];

// Camera Bodies
export const cameraBodies: SelectOption[] = [
  { value: 'arri-alexa-65', label: 'ARRI Alexa 65' },
  { value: 'arri-alexa-mini', label: 'ARRI Alexa Mini' },
  { value: 'red-komodo', label: 'RED Komodo' },
  { value: 'red-v-raptor', label: 'RED V-Raptor' },
  { value: 'sony-venice', label: 'Sony Venice' },
  { value: 'sony-fx6', label: 'Sony FX6' },
  { value: 'canon-c500', label: 'Canon C500' },
  { value: 'canon-eos-r5', label: 'Canon EOS R5' },
  { value: 'blackmagic-ursa', label: 'Blackmagic URSA' },
  { value: 'panasonic-varicam', label: 'Panasonic VariCam' },
  { value: 'panavision-panaflex', label: 'Panavision Panaflex' },
  { value: 'hasselblad-x1d', label: 'Hasselblad X1D II' },
  { value: 'lomo-lc-a', label: 'Lomo LC-A' },
  { value: 'bolex-h16', label: 'Bolex H16' },
  { value: '16mm-film-camera', label: '16mm Film Camera' },
  { value: '35mm-film-camera', label: '35mm Film Camera' },
  { value: '8mm-film-camera', label: '8mm Film Camera' },
  { value: 'aaton-xtr', label: 'Aaton XTR' },
  { value: 'fujifilm-x-t4', label: 'Fujifilm X-T4' },
  { value: 'gopro-hero', label: 'GoPro Hero' },
  { value: 'vhs-camera', label: 'VHS Camera' },
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

// Film Stocks
export const filmStocks: SelectOption[] = [
  { value: 'kodak-portra-400', label: 'Kodak Portra 400' },
  { value: 'kodak-portra-800', label: 'Kodak Portra 800' },
  { value: 'kodak-ektar-100', label: 'Kodak Ektar 100' },
  { value: 'kodak-gold-200', label: 'Kodak Gold 200' },
  { value: 'kodak-vision3-500t', label: 'Kodak Vision3 500T' },
  { value: 'fuji-velvia-50', label: 'Fuji Velvia 50' },
  { value: 'fuji-provia-100', label: 'Fuji Provia 100F' },
  { value: 'fuji-superia-400', label: 'Fuji Superia 400' },
  { value: 'cinestill-800t', label: 'CineStill 800T' },
  { value: 'cinestill-50d', label: 'CineStill 50D' },
  { value: 'ilford-hp5', label: 'Ilford HP5 Plus' },
  { value: 'ilford-delta-3200', label: 'Ilford Delta 3200' },
  { value: 'kodak-tri-x-400', label: 'Kodak Tri-X 400' },
  { value: 'technicolor', label: 'Technicolor' },
  { value: 'black-and-white', label: 'Black and White Film' },
];

// Photography Genres
export const photographyGenres: SelectOption[] = [
  { value: 'cinematic', label: 'Cinematic' },
  { value: 'documentary', label: 'Documentary' },
  { value: 'street', label: 'Street Photography' },
  { value: 'portrait', label: 'Portrait' },
  { value: 'fashion', label: 'Fashion' },
  { value: 'editorial', label: 'Editorial' },
  { value: 'fine-art', label: 'Fine Art' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'landscape', label: 'Landscape' },
  { value: 'architectural', label: 'Architectural' },
  { value: 'product', label: 'Product Photography' },
  { value: 'photojournalism', label: 'Photojournalism' },
];

// Photographer Styles
export const photographerStyles: SelectOption[] = [
  { value: 'gregory-crewdson', label: 'Gregory Crewdson' },
  { value: 'annie-leibovitz', label: 'Annie Leibovitz' },
  { value: 'peter-lindbergh', label: 'Peter Lindbergh' },
  { value: 'helmut-newton', label: 'Helmut Newton' },
  { value: 'richard-avedon', label: 'Richard Avedon' },
  { value: 'james-bidgood', label: 'James Bidgood' },
  { value: 'gordon-parks', label: 'Gordon Parks' },
  { value: 'sebastiao-salgado', label: 'Sebastião Salgado' },
  { value: 'vivian-maier', label: 'Vivian Maier' },
  { value: 'steve-mccurry', label: 'Steve McCurry' },
  { value: 'fan-ho', label: 'Fan Ho' },
  { value: 'saul-leiter', label: 'Saul Leiter' },
];

// Movie Look / Aesthetic
export const movieLooks: SelectOption[] = [
  { value: 'stanley-kubrick', label: 'Stanley Kubrick' },
  { value: 'ridley-scott', label: 'Ridley Scott' },
  { value: 'denis-villeneuve', label: 'Denis Villeneuve' },
  { value: 'wes-anderson', label: 'Wes Anderson' },
  { value: 'christopher-nolan', label: 'Christopher Nolan' },
  { value: 'david-fincher', label: 'David Fincher' },
  { value: 'wong-kar-wai', label: 'Wong Kar-wai' },
  { value: 'terrence-malick', label: 'Terrence Malick' },
  { value: 'quentin-tarantino', label: 'Quentin Tarantino' },
  { value: 'blade-runner', label: 'Blade Runner' },
  { value: 'matrix', label: 'The Matrix' },
  { value: 'roger-deakins', label: 'Roger Deakins' },
  { value: 'emmanuel-lubezki', label: 'Emmanuel Lubezki' },
  { value: 'neo-noir', label: 'Neo-Noir' },
  { value: 'film-noir', label: 'Film Noir' },
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
