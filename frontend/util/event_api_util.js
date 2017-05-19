export const fetchEvents = () => (
  $.ajax({
    method: 'GET',
    url: '/api/events'
  })
);

export const fetchSingleEvent = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/events/${id}`
  })
);

export const createEvent = (event) => (
  $.ajax({
    method: 'POST',
    url: '/api/events',
    data: { event }
  })
);

export const updateEvent = (event) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/events/${event.id}`,
    data: { event }
  })
);

export const deleteEvent = (eventDetail) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/events/${eventDetail.id}`
  })
);
