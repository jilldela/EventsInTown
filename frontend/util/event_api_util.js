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

export const createEvent = (eventDetail) => (
  $.ajax({
    method: 'POST',
    url: '/api/events',
    data: { eventDetail }
  })
);

export const updateEvent = (eventDetail) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/events/${eventDetail.id}`,
    data: { eventDetail }
  })
);

export const deleteEvent = (eventDetail) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/events/${eventDetail.id}`
  })
);
