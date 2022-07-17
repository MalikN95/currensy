document.querySelector('.get').onclick = () => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "???");
    var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
    }
    console.log(myHeaders);
    fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=USD,RUB,EUR&base=KZT", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))
}
