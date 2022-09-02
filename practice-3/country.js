const loadCountry = () =>{
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => displayCountry(data))
}

const displayCountry = countries =>{
const contryContainer = document.getElementById('explore-counrtry');
countries.forEach(country =>{
  console.log(country)
  const countryDiv = document.createElement('div');
  countryDiv.classList.add('country-Explore');
  countryDiv.innerHTML = `
  <h3>Name: ${country.name.common}</h3>
  <p>Official: ${country.name.official}</p>
  <p>Capital: ${country.capital}</p>
  <button onclick="displayDetails('${country.cca2
  }')">Details</button>
  `;
  contryContainer.appendChild(countryDiv)
})
}

// Display Details
const displayDetails = code =>{
  const url =`https://restcountries.com/v3.1/alpha/${code}`
  fetch(url)
  .then(res => res.json())
  .then(data => display(data[0]))
}

const display = countryCode =>{
  console.log(countryCode)
const countryDetails = document.getElementById('country-details');
countryDetails.innerHTML = `
<h2><img src="${countryCode.flags.png}"></h2>
<h2>${countryCode.cca2}</h2>
<h2>${countryCode.altSpellings[2] ? countryCode.altSpellings[2] : 'No found our city'}</h2>
`
}

loadCountry()