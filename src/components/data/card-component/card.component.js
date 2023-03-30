// import Details from "../data.components";
import "../card-component/card.style.css";
// import { useState } from "react";

const Card = (details) => {
  const { data } = details;
  // console.log(data);
  return (
    <>
      {/* <Header /> */}
      <section className="main-container">
        {data.map((val) => {
          return (
            <div className="cards">
              <img src={val.image} alt="players" className="img"></img>
              <p className="number">{val.id}</p>
              <p className="name">{val.name}</p>
              <p className="designation">{val.designation}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Card;
