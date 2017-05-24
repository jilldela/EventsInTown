export const createTicket = (ticket) => (
  $.ajax({
    method: 'POST',
    url: '/api/tickets',
    data: { ticket }
  })
);

export const deleteTicket = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/tickets/${id}`
  })
);
