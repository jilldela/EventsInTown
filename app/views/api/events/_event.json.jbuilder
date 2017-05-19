json.extract! event, :id, :organizer_id, :title, :location, :date, :time,
                      :description, :image, :ticket_price, :ticket_quantity
json.organizer event.organizer.username
