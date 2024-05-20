import React from "react";

import { topDestinasi, daftarWisata } from "../assets/data/dataWisata";

export default function FoodPage() {
  function flipCard(event) {
    const button = event.target;
    const card = button.closest(".card-place");
    if (card) {
      const allCards = document.querySelectorAll(".card-place");
      allCards.forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard.classList.remove("is-flipped");
        }
      });
      card.classList.toggle("is-flipped");

      // After 2 seconds, return the card to its original position
      setTimeout(() => {
        card.classList.remove("is-flipped");
      }, 2000);
    }
  }

  return (
    <div className="backgroud-place-page">
      <div className="container-fluid">
        <h1 className="text-light text-center p-3">Top Destinasi Wisata</h1>
        <div className="place-grid">
          {topDestinasi?.map((place, index) => (
            <div key={index} className="place-item">
              <div className="card-place">
                <div className="card-face card-front">
                  <img src={place.image} alt={place.name} className="food-photo" />
                  <h2 className="place-name">{place.name}</h2>
                  <button className="place-learn-more" onClick={flipCard}>
                    Learn More
                  </button>
                </div>
                <div className="card-face card-back d-flex flex-column justify-content-center">
                  <h2 className="place-name">{place.name}</h2>
                  <p className="place-description text-center">{place.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid">
        <h1 className="text-light text-center">Daftar Destinasi</h1>
        <div className="place-grid">
        {daftarWisata?.map((place, index) => (
            <div key={index} className="place-item">
              <div className="card-place">
                <div className="card-face card-front">
                  <img src={place.image} alt={place.name} className="food-photo" />
                  <h2 className="place-name">{place.name}</h2>
                  <button className="place-learn-more" onClick={flipCard}>
                    Learn More
                  </button>
                </div>
                <div className="card-face card-back d-flex flex-column justify-content-center">
                  <h2 className="place-name">{place.name}</h2>
                  <p className="place-description text-center">{place.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
