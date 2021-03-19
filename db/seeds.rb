# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#Create public space templates

[ {name: "Abandoned warehouse", model_url: 'models/abandoned_warehouse_-_interior_scene_comp/scene.gltf', image_url: 'models/abandoned_warehouse.jpeg' },
  {name: "Khayiminga Temple", model_url: 'models/bagan_-_khayiminga_temple_interior/scene.gltf', image_url: 'models/bagan_temple.jpeg'},
  {name: "Space station", model_url: 'models/gd55_el_a1_erikhernandez/scene.gltf', image_url: 'models/space_station.jpeg'},
  {name: "Classic gallery", model_url: 'models/vr_gallery_for_product_showcase_2019_outdated/scene.gltf', image_url: 'models/white_gallery.jpeg'},
  {name: "Round gallery", model_url: 'models/vr_gallery_for_product_showcase_2019/scene.gltf', image_url: 'models/office_gallery.jpeg'},
  {name: "Rustic gallery", model_url: 'models/vr_gallery_vintage_for_product_showcase_2019/scene.gltf', image_url: 'models/vintage_gallery.jpeg'}
].each do |space|

  template = PublicSpaceTemplate.new(name: space[:name], model_url: space[:model_url], image_url: space[:image_url])
  template.save!
  puts "Created Public Space Template :: #{template.id} - #{template.name}"
end


