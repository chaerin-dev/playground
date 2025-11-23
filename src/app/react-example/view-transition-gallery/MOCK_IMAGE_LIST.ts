interface ImageItem {
  id: string;
  title: string;
  thumbnailUrl: string;
  imageUrl: string;
  shortDescription: string;
  longDescription: string;
}

export const MOCK_IMAGE_LIST: ImageItem[] = [
  {
    id: "1",
    title: "Mountain Landscape",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
    shortDescription: "Majestic mountain peaks covered in snow",
    longDescription:
      "A breathtaking view of snow-capped mountain peaks stretching across the horizon. The pristine white snow contrasts beautifully with the clear blue sky, creating a serene and peaceful landscape that captures the raw beauty of nature.",
  },
  {
    id: "2",
    title: "Ocean Sunset",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop",
    shortDescription: "Golden hour over calm ocean waters",
    longDescription:
      "The sun sets over a calm ocean, painting the sky in vibrant shades of orange, pink, and purple. The gentle waves reflect the warm colors, creating a mesmerizing scene that embodies tranquility and the end of a perfect day.",
  },
  {
    id: "3",
    title: "Forest Path",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
    imageUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop",
    shortDescription: "Mysterious path through dense forest",
    longDescription:
      "A winding path leads through a dense, ancient forest. Sunlight filters through the canopy, creating dappled patterns on the forest floor. The lush greenery and towering trees create an atmosphere of mystery and adventure.",
  },
  {
    id: "4",
    title: "Desert Dunes",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=300&fit=crop",
    imageUrl:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&h=800&fit=crop",
    shortDescription: "Endless sand dunes under clear sky",
    longDescription:
      "Rolling sand dunes stretch as far as the eye can see, creating a landscape of endless beauty. The wind has sculpted the sand into elegant curves and patterns, while the clear blue sky above adds to the sense of vastness and isolation.",
  },
  {
    id: "5",
    title: "City Skyline",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop",
    imageUrl:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&h=800&fit=crop",
    shortDescription: "Modern urban architecture at night",
    longDescription:
      "A stunning city skyline illuminated by thousands of lights. Modern skyscrapers reach toward the sky, their glass facades reflecting the vibrant energy of urban life. The city never sleeps, and this view captures its dynamic and ever-changing nature.",
  },
  {
    id: "6",
    title: "Tropical Beach",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&q=80",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop&q=80",
    shortDescription: "Paradise beach with crystal clear water",
    longDescription:
      "A pristine tropical beach with powdery white sand and crystal-clear turquoise water. Palm trees sway gently in the breeze, and the gentle waves create a soothing rhythm. This is the perfect escape, a slice of paradise where time seems to stand still.",
  },
];
