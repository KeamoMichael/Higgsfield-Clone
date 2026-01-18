import {
    shotTypes,
    viewingDirections,
    lightingSources,
    atmospheres,
    cameraBodies,
    focalLengths,
    lensTypes,
    filmStocks,
    photographyGenres,
    photographerStyles,
    movieLooks,
    filterEffects,
    aspectRatios
} from '../data/options';

export interface PromptData {
    // Subject & Framing
    subjectAction: string;
    shotType: string;
    viewingDirection: string;
    environment: string;

    // Lighting & Mood
    lightingSource: string;
    atmosphere: string;

    // Camera Gear
    cameraBody: string;
    focalLength: string;
    lensType: string;
    filmStock: string;

    // Style & Aesthetics
    photographyGenre: string;
    photographerStyle: string;
    movieLook: string;
    filterEffect: string;
    aspectRatio: string;
}

const getLabel = (options: { value: string; label: string }[], value: string): string => {
    const option = options.find(o => o.value === value);
    return option?.label || '';
};

export const assemblePrompt = (data: PromptData): string => {
    const parts: string[] = [];

    // Subject & Action (required)
    if (data.subjectAction) {
        let subject = data.subjectAction;

        // Add shot type
        if (data.shotType) {
            subject = `A ${getLabel(shotTypes, data.shotType).toLowerCase()} of ${subject}`;
        }

        // Add viewing direction
        if (data.viewingDirection) {
            subject += `, ${getLabel(viewingDirections, data.viewingDirection).toLowerCase()}`;
        }

        parts.push(subject);
    }

    // Environment
    if (data.environment) {
        parts.push(`set in ${data.environment}`);
    }

    // Lighting & Mood
    const lightingParts: string[] = [];
    if (data.lightingSource) {
        lightingParts.push(getLabel(lightingSources, data.lightingSource));
    }
    if (data.atmosphere) {
        lightingParts.push(`creating a ${getLabel(atmospheres, data.atmosphere).toLowerCase()} atmosphere`);
    }
    if (lightingParts.length > 0) {
        parts.push(`The scene is illuminated by ${lightingParts.join(', ')}`);
    }

    // Camera Gear
    const cameraParts: string[] = [];
    if (data.cameraBody) {
        cameraParts.push(`Captured with a ${getLabel(cameraBodies, data.cameraBody)}`);
    }
    if (data.lensType) {
        cameraParts.push(`${getLabel(lensTypes, data.lensType)}`);
    }
    if (data.focalLength) {
        cameraParts.push(`at ${getLabel(focalLengths, data.focalLength)}`);
    }
    if (cameraParts.length > 0) {
        parts.push(cameraParts.join(' '));
    }

    // Film Stock
    if (data.filmStock) {
        parts.push(`Shot on ${getLabel(filmStocks, data.filmStock)}`);
    }

    // Filter/Effect
    if (data.filterEffect && data.filterEffect !== 'none') {
        parts.push(`Applied effect: ${getLabel(filterEffects, data.filterEffect)}`);
    }

    // Style & Aesthetics
    const styleParts: string[] = [];
    if (data.photographyGenre) {
        styleParts.push(`${getLabel(photographyGenres, data.photographyGenre)} photography`);
    }
    if (data.photographerStyle) {
        styleParts.push(`in the style of ${getLabel(photographerStyles, data.photographerStyle)}`);
    }
    if (data.movieLook) {
        styleParts.push(`with the cinematic look of ${getLabel(movieLooks, data.movieLook)}`);
    }
    if (styleParts.length > 0) {
        parts.push(styleParts.join(', '));
    }

    // Aspect Ratio
    if (data.aspectRatio) {
        parts.push(`The image should be in a ${getLabel(aspectRatios, data.aspectRatio)} format`);
    }

    return parts.join('. ') + '.';
};

export const generateSceneJSON = (data: PromptData, prompt: string) => {
    return {
        task: 'GENERATE_SCENE_VARIATIONS',
        instruction: `STRICT REQUIREMENT: Generate 4 SEPARATE, INDIVIDUAL image files. Do NOT create a single image containing a grid or collage. You must generate 4 separate images, each showing the same scene from a different angle.`,
        scene: {
            subject: data.subjectAction,
            environment: data.environment,
            lighting: data.lightingSource,
            mood: data.atmosphere,
            camera: {
                body: data.cameraBody,
                lens: data.lensType,
                focalLength: data.focalLength,
                filmStock: data.filmStock,
            },
            style: {
                genre: data.photographyGenre,
                photographer: data.photographerStyle,
                movieLook: data.movieLook,
                filter: data.filterEffect,
            },
            aspectRatio: data.aspectRatio,
        },
        prompt: prompt,
        angles: [
            'Front facing shot',
            'Three-quarter angle',
            'Shot from behind',
            'Low angle shot'
        ]
    };
};
