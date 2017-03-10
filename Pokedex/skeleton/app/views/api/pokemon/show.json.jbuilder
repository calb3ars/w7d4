json.extract! @pokemon, :id, :name, :attack, :defense
json.image_url asset_path(@pokemon.image_url)
json.extract! @pokemon, :moves, :poke_type
json.items @pokemon.items do |item|
  json.id item.id
  json.name item.name
  json.pokemon_id item.pokemon_id
  json.price item.price
  json.happiness item.happiness
  json.image_url asset_path(item.image_url)
end
