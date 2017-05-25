json.partial! "api/users/user", user: @user
json.events @user.events do |event|
  json.partial! 'api/events/event', event: event
end
