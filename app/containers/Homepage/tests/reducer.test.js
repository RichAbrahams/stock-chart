
import { fromJS } from 'immutable';
import homepageReducer from '../reducer';

describe('homepageReducer', () => {
  it('returns the initial state', () => {
    expect(homepageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
