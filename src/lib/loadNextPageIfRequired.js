import listOrders from './listOrders';
import {logStatus} from './log';

import {resultsPerPage} from './constants';

const loadNextPageIfRequired = async (page, index, numberOfOrders, year, groupKey) => {
  const resultsPage = Math.floor(index / resultsPerPage);

  const isFirstResultOnPage = index % resultsPerPage === 1;
  if (isFirstResultOnPage) {
    logStatus(`Processing results page ${resultsPage} of ${Math.ceil(numberOfOrders / 10)}`);

    const offset = resultsPage * resultsPerPage;
    await page.goto(listOrders(year, groupKey, offset), {waitUntil: 'networkidle0'});

    await page.evaluate(async () => {
      await new Promise((resolve, reject) => {
          var totalHeight = 0;
          var distance = 100;
          var timer = setInterval(() => {
              var scrollHeight = document.body.scrollHeight;
              window.scrollBy(0, distance);
              totalHeight += distance;

              if(totalHeight >= scrollHeight - window.innerHeight){
                  clearInterval(timer);
                  resolve();
              }
          }, 300);
      });
      // Wait for all remaining lazy loading images to load
      await Promise.all(Array.from(document.getElementsByTagName('img'), image => {
        if (image.complete) {
          return;
        }
    
        return new Promise((resolve, reject) => {
          image.addEventListener('load', resolve);
          image.addEventListener('error', reject);
        });
      }));
    });
    const path = `./output/${year}/ORDERS_${resultsPage}.png`;
    await page.screenshot({
      fullPage: true,
      path
    });
  }
};

export default loadNextPageIfRequired;
