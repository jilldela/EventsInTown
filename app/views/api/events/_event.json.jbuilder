json.extract! event, :id, :organizer_id, :title, :location, :date, :time,
                      :description, :image, :ticket_price, :ticket_quantity, :categories
json.organizer event.organizer.username
json.categories event.categories


if current_user
  json.current_user_id current_user.id
  bookmarked = current_user.bookmark_events.include?(event)
else
  bookmarked = false
end

json.set! :bookmarked, bookmarked
