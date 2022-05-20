const listOrders = (year, groupKey, offset = 0) => {
  const baseUrl = 'https://www.amazon.de/gp/your-account/order-history';

  const options = [];
  if (year) {
    options.push(`orderFilter=year-${year}`);
  }
  if (offset) {
    options.push(`startIndex=${offset}`);
  }

  if(groupKey) {
    options.push(`selectedB2BGroupKey=${groupKey}`)
  }

  const queryString = options.join('&');

  const url = [baseUrl, queryString].filter(Boolean).join('?');

  return url;
};

export default listOrders;
