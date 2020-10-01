import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Main from "./Main";


function App() {
  return (
    <Main>
      <Header title="Kalkulator walut" />
      <Form />
      <Footer />
    </Main>
  );
}

export default App;
