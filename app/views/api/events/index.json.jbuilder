@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :organizer_id, :title, :location, :date, :ticket_price, :image, :categories
  end
end
