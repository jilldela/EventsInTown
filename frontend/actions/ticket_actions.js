import * as APIUtil from '../util/ticket_api_util';

export const RECEIVE_TICKET = 'RECEIVE_TICKET';

export const receiveTicket = (ticket) => ({
  type: RECEIVE_TICKET,
  ticket
});

export const createTicket = (ticket) => (dispatch) => (
  APIUtil.createTicket(ticket)
);
