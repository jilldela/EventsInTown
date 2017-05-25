json.partial! "api/users/user", user: @user
json.tickets @user.events do |event|
  json.partial! 'api/events/event', event: event
end
