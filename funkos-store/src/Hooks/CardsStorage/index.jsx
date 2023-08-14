import React from "react";

const CardsContext = React.createContext();

function pop(name, price, img, id){
    this.name = name;
    this.price = price;
    this.img = img;
    this.id = id;
}

let prices = ["89.900","68.000","370.000","370.000","160.000","89.000","88.000","89.900","59.900","179.900","165.000"];
let names = ["Funko Pop President Loki (898)","Funko Pop Capitain America (573)","Funko Pop Spiderman Upgraded Suit (470)","Funko Pop Arishem (739)","Funko Pop Alphonse Elric (392)","Funko Pop Bane (412)","Funko Pop Batman (1187)","Funko Pop Capitain America (818)","Funko Pop Cell First Form (947)","Funko Pop Kurama (73)","Funko Pop Superior Octopus (669)"];
let imgs = ["president-loki-funko.jpg","cap-ame-funko.jpg","spiderman-funko.jpg","arishem-funko.jpg","alphonse-funko.jpg","bane-funko.jpg","batman-funko.jpg","cap-america-funko.jpg","cell-funko.jpg","kurama-funko.jpg","superior-spd-funko.jpg"];   

let ids = [0,1,2,3,4,5,6,7,8,9,10];

let funkosDisponibles = [];

for (let i = 0; i < prices.length; i ++) {
    let popNuevo = new pop(names[i], prices[i], imgs[i], ids[i]);
    funkosDisponibles.push(popNuevo);
}

function CardsProvider({children}) {
    return (
        <>
           <CardsContext.Provider value={{
            funkosDisponibles,
            }}>
            {children}
            </CardsContext.Provider>

        </>
    )
};

export {CardsProvider, CardsContext};