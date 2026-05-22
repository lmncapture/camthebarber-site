/**
 * Gallery images — curated to match @cam_thabarber's Instagram aesthetic.
 * Represents diverse hair textures and styles naturally.
 * Using premium stock photography until real photos from Cam's portfolio are added.
 *
 * To replace with Cam's real work:
 * 1. Download/export images from @cam_thabarber Instagram
 * 2. Optimize to ~600x750px, quality 80, WebP or JPEG
 * 3. Place in public/images/gallery/
 * 4. Update src paths below to local paths
 * 5. Update alt text to describe the actual image
 */

export interface GalleryImage {
  src: string;
  alt: string;
  category: 'fades' | 'beard work' | 'classic cuts' | 'texture' | 'detail work';
}

export const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=750&fit=crop&q=80',
    alt: 'Clean skin fade on textured hair with natural curl definition on top',
    category: 'fades',
  },
  {
    src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=750&fit=crop&q=80',
    alt: 'Detailed beard shaping and straight razor line up in warm barbershop light',
    category: 'beard work',
  },
  {
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=750&fit=crop&q=80',
    alt: 'Classic scissor-cut taper on straight hair with polished side part',
    category: 'classic cuts',
  },
  {
    src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=750&fit=crop&q=80',
    alt: 'Textured crop with layered movement on wavy hair — soft natural styling',
    category: 'texture',
  },
  {
    src: 'https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=600&h=750&fit=crop&q=80',
    alt: 'Precision lineup and edge work on coily hair — sharp temple and hairline detail',
    category: 'detail work',
  },
  {
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=750&fit=crop&q=80',
    alt: 'Low fade blended into longer curly length on top — cinematic grooming moment',
    category: 'fades',
  },
];
