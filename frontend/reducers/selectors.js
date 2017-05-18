import { values } from 'lodash';

export const selectAllEvents = ({ events }) => (
  values(events)
);
