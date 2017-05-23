json.partial! '/api/categories/category', category: @category
json.events @category.events do |event|
  json.partial! 'api/events/event', event: event
end
