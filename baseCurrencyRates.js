//Constructor for fetching base currency rates
function BaseCurrencyRates(baseCurrency){
  this.baseCurrency = baseCurrency;
  this.apiKey = 'ba02b537b5fc84a26b2d2151';
}
///Fetch Latest Rates
BaseCurrencyRates.prototype.getLastestRates = async function(){
  ///await response of the fetch call
  const response = await fetch(`https://prime.exchangerate-api.com/v5/${this.apiKey}/latest/${this.baseCurrency}`);
  ///Only proceed when the fetch promise is resolved
  const resData = await response.json();
  return resData;
}


//Change base currency
BaseCurrencyRates.prototype.changeBaseCurrency = function(baseCurrency){
this.baseCurrency = baseCurrency;
}

//Calculate amount from base currency
BaseCurrencyRates.prototype.convertedAmount = function(baseCurrency, currency2, amount){
  this.baseCurrency = baseCurrency;
  this.currency2 = currency2;
  this.amount = amount * currency2;
  return this.amount;
}

