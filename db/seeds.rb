# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest = User.create(username: 'guest', password: 'password')

Event.create(
  organizer_id: 2,
  title: 'Tahiti Fete',
  location: 'San Jose, CA',
  date: Date.new(2017, 7, 4),
  time: Time.new(2017, 7, 4, 10, 0, 0),
  description: 'The largest Tahitian dance competition in the United States.',
  image: 'https://scontent.fsnc1-4.fna.fbcdn.net/v/t1.0-9/11745687_10153403171803076_3070113872479210230_n.jpg?oh=578c13ef5b3b470059291c61350805c1&oe=59A7F334',
  ticket_price: 50,
  ticket_quantity: 1000
)

Event.create(
  organizer_id: 2,
  title: 'Island Reggae',
  location: 'Santa Clara, CA',
  date: Date.new(2017, 7, 8),
  time: Time.new(2017, 7, 8, 11, 0, 0),
  description: '1-Day music & entertainment celebration of Island Reggae culture and lifestyle.',
  image: 'https://static.wixstatic.com/media/9ba3d9_2d8fbeed4ce44e2eb3e27286be05b636~mv2_d_1500_1500_s_2.jpg/v1/fill/w_773,h_762,al_c,q_85,usm_0.66_1.00_0.01/9ba3d9_2d8fbeed4ce44e2eb3e27286be05b636~mv2_d_1500_1500_s_2.webp',
  ticket_price: 60,
  ticket_quantity: 1000
)

Event.create(
  organizer_id: 5,
  title: 'MTD Boot Camp',
  location: 'San Francisco, CA',
  date: Date.new(2017, 10, 8),
  time: Time.new(2017, 10, 8, 7, 0, 0),
  description: 'Join our #muaythaidiaries class to learn how to punch, kick and knee like a real Muay Thai fighter.',
  image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F23174886%2F183424568654%2F1%2Foriginal.jpg?w=800&rect=0%2C225%2C1650%2C825&s=e2dd5057f3b8224638b90f72790669a8',
  ticket_price: 25,
  ticket_quantity: 30
)

Event.create(
  organizer_id: 3,
  title: 'Paint Brushes Going Up!',
  location: 'San Francisco, CA',
  date: Date.new(2017, 8,14),
  time: Time.new(2017,8,14,14,0,0),
  description: 'Paint the town!',
  image: 'https://images.unsplash.com/photo-1461344577544-4e5dc9487184?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1199&amp;h=799&amp;q=80&amp;cs=tinysrgb&amp;crop=&amp;bg=',
  ticket_price: 0,
  ticket_quantity: 15
)

Event.create(
    organizer_id: 4,
    title: 'Photography Walk',
    location: 'San Francisco, CA',
    date: Date.new(2017,9,22),
    time: Time.new(2017,9,22,19,0,0),
    description: 'Join us on a two-hour, light stroll next to San Franciscos beloved, Golden Gate Bridge.',
    image: 'https://images.unsplash.com/photo-1450149632596-3ef25a62011a?dpr=1&amp;auto=compress,format&amp;fit=crop&amp;w=376&amp;h=263&amp;q=80&amp;cs=tinysrgb&amp;crop=&amp',
    ticket_price: 0,
    ticket_quantity: 10
  )
