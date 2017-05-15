# API Endpoints

## HTML API

### Root
- `GET /` - loads React web app

## JSON API

### Users
- `POST /api/users`
- `PATCH /api/users`

### User Bookmarks
- `GET /api/users/:id/bookmarks`

### User Events
- `GET /api/users/:id/events` - events organized by user

### User Tickets
- `GET /api/users/:id/tickets`

### Session
- `POST /api/session`
- `DELETE /api/session`

### Events
- `GET /api/events`
- `POST /api/events`
- `GET /api/events/:id`
- `PATCH /api/events/:id`
- `DELETE /api/events/:id`

### Categories
- `GET /api/categories`
- `GET /api/categories/:id`

### Tickets
- `GET /api/events/:id/tickets`
