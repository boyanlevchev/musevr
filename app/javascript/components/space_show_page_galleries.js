export const threedeeGallery = cloudinary.galleryWidget({
  container: "#3dGallery",
  cloudName: "demo",
  mediaAssets: [
    {tag: "electric_car_product_gallery_demo"}, // by default mediaType: "image"
    {tag: "electric_car_product_gallery_demo", mediaType: "video"},
    {tag: "electric_car_360_product_gallery_demo", mediaType: "spin"}
  ]
});
