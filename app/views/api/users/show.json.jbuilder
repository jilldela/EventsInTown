json.partial! "api/users/user", user: @user

json.tickets @user.ticket_events do |event|
  json.partial! 'api/events/event', event: event
end

json.hosted @user.events do |event|
  json.partial! 'api/events/event', event: event
end

json.bookmarks @user.bookmark_events do |event|
  json.partial! 'api/events/event', event: event
end
