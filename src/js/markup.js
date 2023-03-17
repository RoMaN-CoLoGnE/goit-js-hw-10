export function createMarkupCountriesList(array) {
  return array.map(
    ({ flags: { svg, alt }, name: { official: nameOfficial } }) => `
    <li class="country-item">
      <img class="country-img" src="${svg}" alt="${alt}" width="80" height="60">
      <h2 class="country-name">${nameOfficial}</h2>
    </li>`
  );
}

export function createMarkupCountry(array) {
  return array.map(
    ({
      flags: { svg, alt },
      name: { official: nameOfficial },
      capital,
      population,
      languages,
    }) =>
      `
      <img class="country-img" src="${svg}" alt="${alt}" width="250" height="150">
      <h2 class="country-name">${nameOfficial}</h2>
      <p class="country-prop">Capital: <span class="country-value">${capital}</span></p>
      <p class="country-prop">Population: <span class="country-value">${population}</span></p>
      <p class="country-prop">Languages: <span class="country-value">${Object.values(
        languages
      ).join(', ')}</span></p>
    `
  );
}
