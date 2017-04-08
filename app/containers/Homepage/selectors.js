import { createSelector } from 'reselect';

/**
 * Direct selector to the homepage state domain
 */
const selectHomepageDomain = () => (state) => state.get('homepage');

const selectStocks = () => createSelector(
  selectHomepageDomain(),
  (substate) => substate.get('stocks') && substate.get('stocks').toJS()
);

const selectError = () => createSelector(
  selectHomepageDomain(),
  (substate) => substate.get('error')
);

export {
  selectStocks,
  selectError,
};
