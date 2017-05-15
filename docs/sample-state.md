```js
{
  currentUser: {
    id: 1,
    username: 'jilldela'
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createEvent: {errors: ["Title can't be blank"]}
  },
  events: {
    1: {
      id: 1,
      organizer_id: 1,
      title: 'Reggae in the Bay',
      location: 'Santa Clara County Fairgrounds',
      date: 'July 22, 2017',
      time: '11:00am',
      description: 'All ages event',
      image: image_url,
      categories: [
        'Music',
        'Performance'
      ], // Not sure how to hold event's categories in state shape
      tickets: {
        event_id: 1,
        price: 30,
        total_quantity: 1000
      },
      2: {
        id: 2,
        organizer_id: 1,
        title: 'Walk by Golden Gate',
        location: 'Crissy Field',
        date: 'September 21, 2017',
        time: '7:00am',
        description: 'Join us for a two-hour stroll',
        image: image_url,
        categories: [
          'Hobbies',
          'Things To Do'
          ],
        tickets: {
          event_id: 2,
          price: 0,
          total_quantity: 15
      }

    }
  },
  eventDetail: {
    id: 1,
    organizer_id: 1,
    title: 'Reggae in the Bay',
    location: 'Santa Clara County Fairgrounds',
    date: 'July 22, 2017',
    time: '11:00am',
    description: 'All ages event',
    image: image_url,
    categories: [
      'Music',
      'Performance'
      ],
    tickets: {
      event_id: 1,
      price: 30,
      total_quantity: 1000
    }
  },
  userEvents: {
    1: {
      id: 1,
      organizer_id: 1,
      title: 'Reggae in the Bay',
      location: 'Santa Clara County Fairgrounds',
      date: 'July 22, 2017',
      time: '11:00am',
      description: 'All ages event',
      image: image_url,
      categories: [
        'Music',
        'Performance'
        ],
      tickets: {
        event_id: 1,
        price: 30,
        total_quantity: 1000
    }
  },
  userBookmarks: {
    1: {
      id: 2,
      organizer_id: 1,
      title: 'Walk by Golden Gate',
      location: 'Crissy Field',
      date: 'September 21, 2017',
      time: '7:00am',
      description: 'Join us for a two-hour stroll',
      image: image_url,
      categories: [
        'Hobbies',
        'Things To Do'
        ],
      tickets: {
        event_id: 2,
        price: 0,
        total_quantity: 15
    }
  }
}
```
