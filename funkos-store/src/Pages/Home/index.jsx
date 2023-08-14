import React from 'react';
import { Header } from '../Components/Header';
import { Main } from '../Components/Main';
import { Footer } from '../Components/Footer';

function Home() {
    return(
    <React.Fragment>
      <Header/>
      <Main/>
      <Footer/>
    </React.Fragment>
    )
}

export { Home }