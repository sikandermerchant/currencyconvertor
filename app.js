
//Init baseCurrencyRates
const baseRates = new BaseCurrencyRates(baseCurrency);


document.getElementById('submit').addEventListener('click', baseRateAndParameters);

///Function to get latest rates with basecurrency; also to get currency2 and amount parameters to the DOM
function baseRateAndParameters(e){
  const baseCurrency = document.getElementById('baseCurrency').value.toUpperCase();
  console.log(baseCurrency);
  baseRates.changeBaseCurrency(baseCurrency)
  getLatestBaseRates(baseCurrency);
  const currency2 = document.getElementById('currency2').value.toUpperCase();
  console.log(currency2);
  const amount = document.getElementById('amount').value;
  console.log(amount);
  return baseCurrency,currency2,amount;

};
// //Show Loader
// document.getElementById('loading').style.display = 'block';
// ///Hide the load after 2 seconds
// setTimeout('',2000);
///Function to return the converted amount using basecurrency, currency2 and amount
function convertedAmount(rate){
  const rates = rate.conversion_rates;
  console.log(rates);
  const amountConverted = rates[`${currency2.value}`.toUpperCase()] * amount.value;
  let amountConvertedUI = document.getElementById('amountConverted');
  ///Display the results
  if(isFinite(amountConverted)){
    document.getElementById('results').style.display = 'block';
    amountConvertedUI.value = amountConverted;

    console.log(amountConverted);
  }else{
    console.log('error')
  }
}
//Hide Loader
document.getElementById('loading').style.display = 'none';

///Function to get latest base rates
function getLatestBaseRates(){
  baseRates.getLastestRates()
  .then(res=> {
    console.log(res.conversion_rates);
    convertedAmount(res);
  })
  .catch(err =>{
    console.log(err);
  });
}

