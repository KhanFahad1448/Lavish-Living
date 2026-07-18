/*
==========================================================
Lavish Living Service Gallery
Automatically loads every .jpg image from each folder.
Just add/remove images in the folders—no code changes needed.
==========================================================
*/

const kitchenImages = Object.values(
  import.meta.glob("../assets/service-gallery/modular-kitchen/*.jpg", {
    eager: true,
    import: "default",
  })
);

const bedroomImages = Object.values(
  import.meta.glob("../assets/service-gallery/bedroom/*.jpg", {
    eager: true,
    import: "default",
  })
);

const livingImages = Object.values(
  import.meta.glob("../assets/service-gallery/living-dining/*.jpg", {
    eager: true,
    import: "default",
  })
);

const ceilingImages = Object.values(
  import.meta.glob("../assets/service-gallery/false-ceiling/*.jpg", {
    eager: true,
    import: "default",
  })
);

const wardrobeImages = Object.values(
  import.meta.glob("../assets/service-gallery/wardrobes/*.jpg", {
    eager: true,
    import: "default",
  })
);

const officeImages = Object.values(
  import.meta.glob("../assets/service-gallery/office/*.jpg", {
    eager: true,
    import: "default",
  })
);

const wallpaperImages = Object.values(
  import.meta.glob("../assets/service-gallery/paint&wallpaper/*.jpg", {
    eager: true,
    import: "default",
  })
);

const flooringImages = Object.values(
  import.meta.glob("../assets/service-gallery/flooring/*.jpg", {
    eager: true,
    import: "default",
  })
);

function buildGallery(images, titles) {
  return images.map((image, index) => ({
    id: index + 1,
    image,
    title: titles[index] || `Design ${index + 1}`,
    style: [
      "Modern",
      "Luxury",
      "Minimal",
      "Contemporary",
      "Classic",
      "Scandinavian",
      "Industrial",
      "Premium",
      "Elegant",
      "Designer",
    ][index % 10],
  }));
}

export const galleryData = {
  "modular-kitchen": buildGallery(kitchenImages, [
    "Luxury Island Kitchen",
    "Modern Parallel Kitchen",
    "Premium L-Shaped Kitchen",
    "Matte Finish Kitchen",
    "Warm Wooden Kitchen",
    "Minimal White Kitchen",
    "Open Modular Kitchen",
    "Contemporary Kitchen",
    "Luxury Storage Kitchen",
    "Designer Kitchen",
  ]),

  bedroom: buildGallery(bedroomImages, [
    "Luxury Master Bedroom",
    "Minimal Bedroom",
    "Elegant Bedroom",
    "Premium Wardrobe Bedroom",
    "Warm Wooden Bedroom",
    "Modern Bedroom",
    "Luxury Suite",
    "Contemporary Bedroom",
    "Designer Bedroom",
    "Classic Bedroom",
  ]),

  "living-dining": buildGallery(livingImages, [
    "Luxury Living Room",
    "Modern Hall",
    "Premium Dining Area",
    "Elegant Living Space",
    "Contemporary Hall",
    "Minimal Lounge",
    "Designer Living Room",
    "Luxury TV Unit",
    "Warm Family Space",
    "Open Living Area",
  ]),

  "false-ceiling": buildGallery(ceilingImages, [
    "Luxury POP Ceiling",
    "Gypsum Ceiling",
    "LED Cove Ceiling",
    "Modern Ceiling Design",
    "Wooden Ceiling",
    "Premium Ceiling",
    "Minimal Ceiling",
    "Designer Ceiling",
    "Elegant Ceiling",
    "Contemporary Ceiling",
  ]),

  wardrobes: buildGallery(wardrobeImages, [
    "Sliding Wardrobe",
    "Luxury Walk-in Closet",
    "Premium Wardrobe",
    "Wood Finish Wardrobe",
    "Modern Storage",
    "Designer Closet",
    "Luxury Wardrobe",
    "Minimal Wardrobe",
    "Elegant Wardrobe",
    "Contemporary Wardrobe",
  ]),

  office: buildGallery(officeImages, [
    "Corporate Office",
    "Luxury Workspace",
    "Modern Reception",
    "Executive Cabin",
    "Meeting Room",
    "Premium Office",
    "Commercial Space",
    "Designer Workspace",
    "Creative Office",
    "Luxury Interior",
  ]),

  "paint-wallpaper": buildGallery(wallpaperImages, [
    
    "Luxury Accent Wall",
    "Designer Wallpaper",
    "Modern Texture Wall",
    "Premium Paint Finish",
    "Marble Texture",
    "Stone Finish",
    "Wood Texture",
    "Elegant Wallpaper",
    "Designer Wall",
    "Luxury Finish",
  ]),

  flooring: buildGallery(flooringImages, [
    "Italian Marble",
    "Wood Flooring",
    "Luxury Tiles",
    "Premium Flooring",
    "Designer Floor",
    "Herringbone Floor",
    "Natural Wood",
    "Modern Flooring",
    "Luxury Stone Floor",
    "Elegant Finish",
  ]),
};

export default galleryData;