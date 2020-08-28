import React from 'react';

function App() {
  return (
    <body class="body">
      <header class="header">
        <h1 class="header__title">Kalkulator walut</h1>
      </header>
      <form class="conventer">
        <label class="conventer__label">
          Kwota: <input class="conventer__input js-initial" type="number" min="0" required />
        </label>
        <label class="conventer__label">
          Z:
            <select class="conventer__select js-from" name="currency" required>
            <option value="PLN">PLN</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="CZK">CZK</option>
          </select></label>
        <label class="conventer__label">
          Na:
            <select class="conventer__select js-to" name="currency" required>
            <option value="PLN">PLN</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="CZK">CZK</option>
          </select>
        </label>
        <button class="conventer__button">Przelicz</button>
      </form>
      <div class="conventer__result"></div>
      <footer class="footer">
        <div class="footer__div">
          <p class="footer__paragraph">Pozdrawiam i życzę miłego dnia - Olga ;*</p>
        </div>
      </footer>
    </body>
  );
}

export default App;
