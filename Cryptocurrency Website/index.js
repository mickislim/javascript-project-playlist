const btc = document.getElementById("btc");
const eth = document.getElementById("eth");
const usdt = document.getElementById("usdt");

let settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cbitcoin%2Ctether&vs_currencies=usd",
  method: "GET",
  headers: {},
};

$.ajax(settings).done(function (response) {
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  usdt.innerHTML = response.tether.usd;
});
