import web3 from 'web3';

export const getShortUserAddress = address => address.substr(address.length - 6);

export const constructPrice = (price) => {
  const priceInEth = web3.utils.fromWei(price, 'ether');
  return parseFloat((Math.round(priceInEth * 1000) / 1000).toFixed(5));
};
