import { getTime } from 'date-fns';

const invertOrderedList = list => list.reverse();

export const orderListByDate = (list, key, order = 'ASC') => {
  const orderedList =
    order === 'ASC' ?
      list.sortBy(l => getTime(l.get(key))) :
        invertOrderedList(list.sortBy(l => getTime(l.get(key))));
  return orderedList;
};
