import React from 'react';
import Header from "./Header";

function App() {
  return (
    <body className="body">
      <Header title = "Kalkulator walut" />
      <form className="conventer">
        <label className="conventer__label">
          Kwota: <input className="conventer__input" type="number" min="0" required />
        </label>
        <label className="conventer__label">
          Z:
            <select className="conventer__select" name="currency" required>
            <option value="PLN">PLN</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="CZK">CZK</option>
          </select></label>
        <label className="conventer__label">
          Na:
            <select className="conventer__select" name="currency" required>
            <option value="PLN">PLN</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="CZK">CZK</option>
          </select>
        </label>
        <button className="conventer__button">Przelicz</button>
      </form>
      <div className="conventer__result"></div>
      <footer className="footer">
        <div className="footer__div">
          <p className="footer__paragraph">Pozdrawiam i życzę miłego dnia - Olga ;*</p>
        </div>
      </footer>
    </body>
  );
}

export default App;
