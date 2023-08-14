import React from "react";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";

function FunkoView() {
    return(
        <React.Fragment>
        <Header/>
        <h1>Acá va el pop a visualizar en grander</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit impedit cupiditate dolor ratione expedita, mollitia labore suscipit laboriosam non, ea modi facilis sed officiis, corrupti quis? Atque nam error architecto?</p>
        <Footer/>
      </React.Fragment>
    )
}

export { FunkoView }