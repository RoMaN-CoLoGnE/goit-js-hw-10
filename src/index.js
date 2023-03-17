import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { refs } from './js/refs';
import { createMarkupCountriesList, createMarkupCountry } from './js/markup';

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(onSearchInput, DEBOUNCE_DELAY));

function onSearchInput(e) {
  refs.countriesList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
  const value = e.target.value.trim();
  if (!value) {
    return;
  }
  fetchCountries(value)
    .then(response => {
      if (response.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return;
      }
      if (response.length > 2) {
        const markup = createMarkupCountriesList(response);
        refs.countriesList.innerHTML = markup;
        return;
      }
      const markup = createMarkupCountry(response);
      refs.countryInfo.innerHTML = markup;
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}
