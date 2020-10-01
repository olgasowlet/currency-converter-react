import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Main from "./Main";
import { currencies } from "./currencies";


function App() {
  return (
    <Main>
      <Header title="Kalkulator walut" />
      <Form currencies={currencies}/>
      <Footer />
    </Main>
  );
}

export default App;
