import { fromJS } from 'immutable';
import { getTime } from 'date-fns';
import * as matchers from 'jest-immutable-matchers';
import { orderListByDate } from '../../app/utils/dateUtils';

const list = fromJS(
  [
    { title: 'title', body: 'body', date: '2018-06-30T04:00:21.682Z' },
    { title: 'title', body: 'body', date: '2018-06-28T03:00:21.682Z' },
    { title: 'title', body: 'body', date: '2018-06-30T05:00:21.682Z' },
    { title: 'title', body: 'body', date: '2018-06-29T03:00:21.682Z' },
    { title: 'title', body: 'body', date: '2018-06-30T06:00:21.682Z' },
  ]);


describe('dateUtils', () => {
  beforeEach(() => {
    jest.addMatchers(matchers);
  });

  it('should return an immutable list', () => {
    expect(orderListByDate(list, 'date')).toBeImmutableList();
  });

  it('should return an immutable list with each item in list with the given key', () => {
    expect(orderListByDate(list, 'date').getIn([0, 'date'])).toBeDefined();
  });

  it('should return an immutable list ordered by given key', () => {
    const orderedList = list.sortBy(l => getTime(l.get('date')));
    expect(orderListByDate(list, 'date')).toEqualImmutable(orderedList);
  });
});
