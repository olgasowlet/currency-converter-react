import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Result from "./Result";

function App() {
  return (
    <main className="main">
      <Header title = "Kalkulator walut" />
      <Form />
      <Result />
      <Footer />
    </main>
  );
}

export default App;
