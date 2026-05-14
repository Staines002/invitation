import photo1 from "@/assets/photos/photo-1.jpeg";
import photo2 from "@/assets/photos/photo-2.jpeg";
import photo3 from "@/assets/photos/photo-3.jpg";
import photo4 from "@/assets/photos/photo-4.jpg";
import photo5 from "@/assets/photos/photo-5.jpg";
import photo6 from "@/assets/photos/photo-6.jpg";
import photo7 from "@/assets/photos/photo-7.jpg";

export type Photo = {
  src: string;
  alt: string;
  caption?: string;
};

// Add or replace wedding photos here. Drop new images into
// src/assets/photos/ and import them above.
export const photos: Photo[] = [
  { src: photo1, alt: "Golden Hour", caption: "Golden Hour" },
  { src: photo2, alt: "Twilight", caption: "Twilight" },
  { src: photo3, alt: "Together in yellow", caption: "Radiant" },
  { src: photo4, alt: "Festive celebration", caption: "Merry" },
  { src: photo5, alt: "Seated together", caption: "Harmony" },
  { src: photo6, alt: "Quiet moment", caption: "Stillness" },
  { src: photo7, alt: "Happy smiles", caption: "Joyful" },
];

export const heroPhoto = photo2;
export const storyPhotos = [photo1, photo2, photo1];