# Schema Information

## users
| column name     | data type  | details  
|-----------------|------------|------------------------
| id              | integer    | not null, primary key
| username        | string     | not null, indexed, unique  
| email           | string     | not null, indexed, unique
| password_digest | string     | not null
| session_token   | string     | not null, indexed, unique

## events
| column name       | data type  | details  
|-------------------|------------|------------------------
| id                | integer    | not null, primary key
| organizer_id      | integer    | not null, foreign key (references users), indexed
| title             | string     | not null, indexed
| location          | string     | not null
| date              | date       | not null, indexed
| time              | time       | not null
| description       | text       | not null
| image             | string     | not null
| ticket_price      | integer    | not null
| ticket_quantity   | integer    | not null

## tickets
| column name     | data type  | details  
|-----------------|------------|------------------------
| id              | integer    | not null, primary key
| event_id        | integer    | not null, foreign key (references events), indexed
| user_id         | integer    | not null, foreign key (references users), indexed

## category
| column name     | data type  | details  
|-----------------|------------|------------------------
| id              | integer    | not null, primary key
| name            | string     | not null

## event_categories
| column name     | data type  | details  
|-----------------|------------|------------------------
| id              | integer    | not null, primary key
| event_id        | integer    | not null, foreign key (references events), indexed
| category_id     | integer    | not null, foreign key (references categories), indexed

## bookmarks
| column name     | data type  | details  
|-----------------|------------|------------------------
| id              | integer    | not null, primary key
| user_id         | integer    | not null, foreign key (references users), indexed
| event_id        | integer    | not null, foreign key (references events), indexed
