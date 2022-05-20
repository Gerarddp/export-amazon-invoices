import listOrders from './listOrders';
import {logStatus} from './log';

import {resultsPerPage} from './constants';

const loadNextPageIfRequired = async (page, index, numberOfOrders, year, groupKey) => {
  const resultsPage = Math.floor(index / resultsPerPage);

  const isFirstResultOnPage = index % resultsPerPage === 1;
  if (isFirstResultOnPage) {
    logStatus(`Processing results page ${resultsPage} of ${Math.ceil(numberOfOrders / 10)}`);

    const offset = resultsPage * resultsPerPage;
    await page.goto(listOrders(year, groupKey, offset), {waitUntil: 'load'});
  }
};

export default loadNextPageIfRequired;
