json.array!(@posts) do |post|
  json.extract! post, :id, :title, :content, :author, :color
  json.url post_url(post, format: :json)
end
