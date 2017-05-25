# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
guest = User.create(username: 'Guest', password: 'password')
jill = User.create(username: 'Jill', password: 'password')
john = User.create(username: 'John', password: 'password')
jack = User.create(username: 'Jack', password: 'password')
eric = User.create(username: 'Eric', password: 'password')
alaina = User.create(username: 'Alaina', password: 'password')
rina = User.create(username: 'Rina', password: 'password')
cheryl = User.create(username: 'Cheryl', password: 'password')
glenn = User.create(username: 'Glenn', password: 'password')
ethan = User.create(username: 'Ethan', password: 'password')
gavin = User.create(username: 'Gavin', password: 'password')

Event.destroy_all
e20 = Event.create(
organizer_id: eric.id,
title: 'Travel Photography Class',
location: 'Fort Mason, San Francisco, CA',
date: Date.new(2017, 11, 22),
time: DateTime.new(2017, 11, 22, 7, 0, 0),
description: 'Learn how to capture great images for your next vacation. We will teach you how to capture magical moments on your next vacation. Learn about inexpensive and essential equipment and tools, how to work with complex cultural issues in the field, lighting/exposure tips and time-of-day solutions, and composition and balance in image design.',
image: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495488685/photo-1489156703850-ff36f4ed2465_lw2xbw.jpg',
ticket_price: 20,
ticket_quantity: 100
)

e4 = Event.create(
organizer_id: eric.id,
title: 'Paint Brushes Going Up!',
location: 'San Francisco, CA',
date: Date.new(2018, 8,14),
time: DateTime.new(2018,8,14,14,0,0),
description: 'Paint the town! Join us for a night of painting, wine/beer, and fun! Bring your friends!',
image: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495503313/pexels-photo-114123_bkp3nz.jpg',
ticket_price: 0,
ticket_quantity: 15
)

e12 = Event.create(
organizer_id: gavin.id,
title: 'Cal Academy of Sciences NightLife',
location: 'California Academy of Sciences, San Francisco, CA',
date: Date.new(2017,10,3),
time: DateTime.new(2017,10,3,20,0,0),
description: 'A new adventure unfolds every Thursday night from 6-10pm. Enjoy music, creatures, and cocktails as you set out with friends on a journey to the stars and the depths of the sea.A variety of food options are available at NightLife from 6-9:30 pm, including the Academy Café, The Terrace (located in the West Garden), and convenient food cart in the front lobby.',
image: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495485317/mezcal-nightlife-celebration-of-cinco-de-mayo-mex-i-am-sf-4_ziu0nu.jpg',
ticket_price: 15,
ticket_quantity: 300
)

e9 = Event.create(
organizer_id: guest.id,
title: 'Warriors vs Cavaliers',
location: 'Oakland, CA',
date: Date.new(2018,5,25),
time: DateTime.new(2018,5,25,19,0,0),
description: 'Outside the Oracle, this is the biggest Warriors game watch party in San Francisco! We have everything you need to cheer on the Dubs as they battle through the 2018 playoffs. Watch the game in good company, with the loyal members of dubnation living it up outdoors with tons of seating, TVs, beer specials and food trucks.',
image: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495225789/25warriors-web-master768_hqovsi.jpg',
ticket_price: 20,
ticket_quantity: 300
)

e5 = Event.create(
    organizer_id: rina.id,
    title: 'Photography Walk',
    location: 'San Francisco, CA',
    date: Date.new(2018,9,22),
    time: DateTime.new(2018,9,22,19,0,0),
    description: 'Join us on a two-hour, light stroll next to San Franciscos beloved, Golden Gate Bridge.',
    image: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495425680/photo-1450149632596-3ef25a62011a_egpwm4.jpg',
    ticket_price: 0,
    ticket_quantity: 10
  )

e6 = Event.create(
    organizer_id: alaina.id,
    title: 'Yoga in the City',
    location: 'San Francisco, CA',
    date: Date.new(2018,10,25),
    time: DateTime.new(2018,10,25,19,0,0),
    description: 'Stretch. Breathe. Elevate Your Senses. Join us for a deeply nourishing, all levels, floor-based, yin/restorative yoga class with hands-on adjustments and tea afterwards.',
    image: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495425717/photo-1485727749690-d091e8284ef3_tqz4r2.jpg',
    ticket_price: 10,
    ticket_quantity: 30
  )

e7 = Event.create(
    organizer_id: rina.id,
    title: 'Movie Night',
    location: 'San Francisco, CA',
    date: Date.new(2017,11,25),
    time: DateTime.new(2017,11,25,19,0,0),
    description: 'HIDDEN FIGURES! Hidden Figures tells the story of three African American female mathematicians and contributions to NASA and the space program. Join us for film, refreshments, and discussion as we present this movie on an HD projector to make the experience as cinematic as possible. We ask that only ages 13+ attend this screening.',
    image: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495225739/hidden_figures_zrmb77.jpg',
    ticket_price: 10,
    ticket_quantity: 30
  )

e8 = Event.create(
    organizer_id: john.id,
    title: 'Surf City',
    location: 'Pacifica, CA',
    date: Date.new(2017,8,25),
    time: DateTime.new(2017,8,25,9,0,0),
    description: 'Surf Theory Lesson and a 2 Hour Water Lesson. There will be a break in the day for lunch (not provided) but there is a lovely local surf cafe on site, where you can enjoy a post yoga lunch and fuel up before an afternoon of surfing.',
    image: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495425777/photo-1415931633537-351070d20b81_oo08ke.jpg',
    ticket_price: 10,
    ticket_quantity: 30
  )

  e2 = Event.create(
  organizer_id: jill.id,
  title: 'Island Reggae',
  location: 'Santa Clara, CA',
  date: Date.new(2017, 7, 8),
  time: DateTime.new(2017, 7, 8, 11, 0, 0),
  description: '1-Day music & entertainment celebration of Island Reggae culture and lifestyle.',
  image: 'https://static.wixstatic.com/media/9ba3d9_2d8fbeed4ce44e2eb3e27286be05b636~mv2_d_1500_1500_s_2.jpg/v1/fill/w_773,h_762,al_c,q_85,usm_0.66_1.00_0.01/9ba3d9_2d8fbeed4ce44e2eb3e27286be05b636~mv2_d_1500_1500_s_2.webp',
  ticket_price: 60,
  ticket_quantity: 1000
  )

  e1 = Event.create(
  organizer_id: guest.id,
  title: 'Tahiti Fete',
  location: 'San Jose, CA',
  date: Date.new(2018, 7, 4),
  time: DateTime.new(2018, 7, 4, 10, 0, 0),
  description: 'The largest Tahitian dance competition in the United States.',
  image: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495425523/TF_MANUIA_APARIMA_f7qvkp.jpg',
  ticket_price: 50,
  ticket_quantity: 1000
  )

  e3 = Event.create(
  organizer_id: cheryl.id,
  title: 'MTD Boot Camp',
  location: 'San Francisco, CA',
  date: Date.new(2018, 10, 8),
  time: DateTime.new(2018, 10, 8, 7, 0, 0),
  description: 'Join our #muaythaidiaries class to learn how to punch, kick and knee like a real Muay Thai fighter.',
  image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F23174886%2F183424568654%2F1%2Foriginal.jpg?w=800&rect=0%2C225%2C1650%2C825&s=e2dd5057f3b8224638b90f72790669a8',
  ticket_price: 25,
  ticket_quantity: 30
  )


e10 = Event.create(
    organizer_id: jill.id,
    title: 'Kehlani',
    location: 'Greek Theatre, UC Berkeley',
    date: Date.new(2018,6,23),
    time: DateTime.new(2018,6,23,20,0,0),
    description: 'Kehlani tells it like it is. Whether in conversation or on stage, the Oakland-born R&B singer and songwriter gives the straight truth about her life, pain, passion, love, triumph, and everything in between with collected calm and confidence. It’s that type of honesty that makes her music resonate with the depth of classic Motown and a vividly confessional lyricism reminiscent of Neo Soul. Come see her sing her story.',
    image: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495426563/1480548485747_vrl9dk.jpg',
    ticket_price: 30,
    ticket_quantity: 1000
  )

  e13 = Event.create(
  organizer_id: jack.id,
  title: 'Bay Area Peace Lantern Ceremony',
  location: 'Aquatic Park, Berkeley, CA',
  date: Date.new(2017, 9, 5),
  time: DateTime.new(2017, 9, 5, 18, 30, 0),
  description: 'Join us for the 16th annual Peace Lantern Ceremony at the north end of Berkeley Aquatic Park.',
  image: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495427793/d5f32508_ac0map.jpg',
  ticket_price: 0,
  ticket_quantity: 0
  )

e11 = Event.create(
    organizer_id: ethan.id,
    title: 'Jo Koy',
    location: 'Cobbs Comedy Club',
    date: Date.new(2018,2,3),
    time: DateTime.new(2018,2,3,20,0,0),
    description: 'Lights out Vegas because this feisty Filipino is taking us home for a night of ab-busting laughs and tear jerking jokes. Hello, six pack. We don’t know what’s funnier his initials or his jokes. Just kidding, we love him and his mom. He talks so much about her it’s like she’s on stage with him. Catch the comedian poke fun at his family heritage and many other things on stage.',
    image: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495426900/Wood-Background-Gold-Logo_rfx5rd.jpg',
    ticket_price: 30,
    ticket_quantity: 100
  )

e14 = Event.create(
  organizer_id: gavin.id,
  title: 'Nor Cal Corgi Con',
  location: 'Ocean Beach, San Francisco, CA',
  date: Date.new(2018, 6, 5),
  time: DateTime.new(2018, 6, 5, 10, 30, 0),
  description: 'We look FURward to seeing everypawdy at Nor Cal Corgi Con. Corgi costume contest, races, and merchandise!',
  image: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495427941/Pembroke-Welsh-Corgi-Puppy-Lying-Down_z8dgzw.jpg',
  ticket_price: 0,
  ticket_quantity: 0
)

e15 = Event.create(
  organizer_id: alaina.id,
  title: 'SF Jazz Block Party',
  location: 'San Francisco, CA',
  date: Date.new(2017, 8, 5),
  time: DateTime.new(2017, 8, 5, 10, 30, 0),
  description: 'FREE Block Party in Hayes Valley to kick off the San Francisco Jazz Festival. Featuring live music, food and drinks!',
  image: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495428292/block-party_eodfax.jpg',
  ticket_price: 0,
  ticket_quantity: 0
)

e16 = Event.create(
  organizer_id: cheryl.id,
  title: 'Bay Area Night Market',
  location: 'San Francisco, CA',
  date: Date.new(2017, 7, 7),
  time: DateTime.new(2017, 7, 7, 20, 0, 0),
  description: 'The Bay Area Night Market is an open air market hosting local food vendors and small businesses. The market celebrates the vibrant and diverse communities of the Bay Area and surrounding areas through cultural food, art and merchandise. Enjoy a night of eating, shopping, singing and playing.',
  image: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495428586/ae64c7d0d23a56611eb0d4dae43c3357_z6ffsv.png',
  ticket_price: 10,
  ticket_quantity: 100
)

e17 = Event.create(
  organizer_id: john.id,
  title: 'Kids Obstacle Challenge',
  location: 'San Francisco, CA',
  date: Date.new(2018, 7, 16),
  time: DateTime.new(2018, 7, 16, 7, 0, 0),
  description: 'Kids Obstacle Challenge is the largest touring adventure and obstacle course event series for kids in the country, and it’s coming to your town! Sign up your eager adventurers for a 1-2-mile course filled with exciting and challenging obstacles designed specifically for kids ages 5-16. Participants can rope swing into a giant mud pit, army crawl through tough terrain, scale up rugged cargo nets, and slide into a muddy paradise! And the best part is, it is a FAMILY adventure - parents get to run with their kids for free! Don’t miss the chance for your kiddos to push their limits and have fun!',
  image: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495429108/6ba4d31d40efe7e3c72b34f41feab105_obs6-kids-obstacle-course-crawling-through-tunnel-clipart_4000-2667_sgqrwz.jpg',
  ticket_price: 35,
  ticket_quantity: 100
)

e18 = Event.create(
  organizer_id: guest.id,
  title: 'SF Giants  vs. LA Dodgers',
  location: 'AT&T Park, San Francisco, CA',
  date: Date.new(2018, 1, 16),
  time: DateTime.new(2018, 1, 16, 7, 0, 0),
  description: 'Come see our very own San Francisco Giants take on the Los Angeles Dodgers! While AT&T Park is known for its breathtaking views of the Bay and classic design, its top notch dining options also make it one of the best ballparks in the country. Hungry fans will can chow down on everything from sushi and Chinese food to cheese plates and salads made from ingredients grown on the property. And dont forget Gilroy Garlic Fries! The Park also has a plethora of local beers, wine and killer cocktails.',
  image: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495484983/ATT-Park-night_a9wxlp.jpg',
  ticket_price: 35,
  ticket_quantity: 100
)

e19 = Event.create(
  organizer_id: guest.id,
  title: 'Off the Grid',
  location: 'Fort Mason, San Francisco, CA',
  date: Date.new(2018, 4, 22),
  time: DateTime.new(2018, 4, 22, 7, 0, 0),
  description: 'Off the Grid is a weekly outdoor food truck bonanza. Nearly 30 food vendors in a huge circle with a full bar and bands in the middle? Now that is what I call a party!',
  image: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495487769/off_the_grid_image1_am73xl.jpg',
  ticket_price: 0,
  ticket_quantity: 100
)




Category.destroy_all
sports = Category.create(name: 'sports', image_url: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495501357/pexels-photo-317157_ka6oie.jpg')
music = Category.create(name: 'music', image_url: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495498984/photo-1415201364774-f6f0bb35f28f_cxxe8z.jpg')
food =  Category.create(name: 'food', image_url: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495499855/food-eating-potatoes-beer-8313_itwyod.jpg')
entertainment =  Category.create(name: 'entertainment', image_url: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495225758/lights-party-dancing-music_mmurb5.jpg')
classes =  Category.create(name: 'classes', image_url: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495501786/pexels-photo_uw7amx.jpg')
networking =  Category.create(name: 'networking', image_url: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495425629/photo-1461344577544-4e5dc9487184_jlrphg.jpg')
family =  Category.create(name: 'family', image_url: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495500164/pexels-photo-61129_xuf9cz.jpg')


EventCategory.destroy_all
ec1 = EventCategory.create(event_id: e1.id, category_id: entertainment.id)
ec2a = EventCategory.create(event_id: e2.id, category_id: entertainment.id)
ec2b = EventCategory.create(event_id: e2.id, category_id: music.id)
ec2c = EventCategory.create(event_id: e2.id, category_id: family.id)
ec3a = EventCategory.create(event_id: e3.id, category_id: sports.id)
ec3b = EventCategory.create(event_id: e3.id, category_id: classes.id)
ec4a = EventCategory.create(event_id: e4.id, category_id: networking.id)
ec4b = EventCategory.create(event_id: e4.id, category_id: classes.id)
ec5a = EventCategory.create(event_id: e5.id, category_id: classes.id)
ec5b = EventCategory.create(event_id: e5.id, category_id: networking.id)
ec6a = EventCategory.create(event_id: e6.id, category_id: sports.id)
ec6b = EventCategory.create(event_id: e6.id, category_id: classes.id)
ec7a = EventCategory.create(event_id: e7.id, category_id: entertainment.id)
ec7b = EventCategory.create(event_id: e7.id, category_id: family.id)
ec8a = EventCategory.create(event_id: e8.id, category_id: sports.id)
ec8b = EventCategory.create(event_id: e8.id, category_id: classes.id)
ec9a = EventCategory.create(event_id: e9.id, category_id: sports.id)
ec9b = EventCategory.create(event_id: e9.id, category_id: entertainment.id)
ec10a = EventCategory.create(event_id: e10.id, category_id: entertainment.id)
ec10b = EventCategory.create(event_id: e10.id, category_id: music.id)
ec11 = EventCategory.create(event_id: e11.id, category_id: entertainment.id)
ec12a = EventCategory.create(event_id: e12.id, category_id: food.id)
ec12b = EventCategory.create(event_id: e12.id, category_id: music.id)
ec13 = EventCategory.create(event_id: e13.id, category_id: family.id)
ec14 = EventCategory.create(event_id: e14.id, category_id: networking.id)
ec15a = EventCategory.create(event_id: e15.id, category_id: music.id)
ec15b = EventCategory.create(event_id: e15.id, category_id: food.id)
ec15c = EventCategory.create(event_id: e15.id, category_id: entertainment.id)
ec15d = EventCategory.create(event_id: e15.id, category_id: family.id)
ec16a = EventCategory.create(event_id: e16.id, category_id: family.id)
ec16b = EventCategory.create(event_id: e16.id, category_id: food.id)
ec17a = EventCategory.create(event_id: e17.id, category_id: family.id)
ec17b = EventCategory.create(event_id: e17.id, category_id: sports.id)
ec18a = EventCategory.create(event_id: e18.id, category_id: sports.id)
ec18b = EventCategory.create(event_id: e18.id, category_id: family.id)
ec19a = EventCategory.create(event_id: e19.id, category_id: food.id)
ec19b = EventCategory.create(event_id: e19.id, category_id: family.id)
ec20a = EventCategory.create(event_id: e20.id, category_id: classes.id)
ec20b = EventCategory.create(event_id: e20.id, category_id: networking.id)

Ticket.destroy_all
t1 = Ticket.create(event_id: e20.id, user_id: jill.id)
t2 = Ticket.create(event_id: e9.id, user_id: jill.id)
t3 = Ticket.create(event_id: e14.id, user_id: jill.id)

Bookmark.destroy_all
b1 = Bookmark.create(event_id: e18, user_id: jill.id)
