import React from 'react';
import { topMakanan, daftarMakanan } from '../assets/data/dataMakanan'

export default function FoodPage() {
  function flipCard(event) {
    const button = event.target;
    const card = button.closest('.card-food');
    if (card) {
      const allCards = document.querySelectorAll('.card-food');
      allCards.forEach(otherCard => {
        if (otherCard !== card) {
          otherCard.classList.remove('is-flipped');
        }
      });
      card.classList.toggle('is-flipped');

      // After 2 seconds, return the card to its original position
      setTimeout(() => {
        card.classList.remove('is-flipped');
      }, 2000);
    }
  }

  return (
    <div className='backgroud-food-page'>
      <div className="container-fluid">
        <h1 className="text-light text-center p-3">Top Makanan</h1>
        <div className="food-grid">
          {topMakanan?.map((food, index) => (
            <div key={index} className="food-item">
              <div className="card-food">
                <div className="card-face card-front">
                  <img src={food.image} alt={food.name} className="food-photo"/>
                  <h2 className="food-name">{food.name}</h2>
                  <button className="learn-more mb-4" onClick={flipCard}>Learn More</button>
                </div>
                <div className="card-face card-back d-flex flex-column justify-content-center">
                  <h2 className="food-name1 text-center">{food.name}</h2>
                  <p className="food-description p-2 text-center">{food.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid">
      <h1 className="text-light text-center">Menu Makanan</h1>
      <div className="food-grid">
        {daftarMakanan.map((food, index) => (
          <div key={index} className="food-item">
            <div className="card-food">
              <div className="card-face card-front">
                <img src={food.image} alt={food.name} className="food-photo"/>
                <h2 className="food-name">{food.name}</h2>
                <button className="learn-more mb-4" onClick={flipCard}>Learn More</button>
              </div>
              <div className="card-face card-back  d-flex flex-column justify-content-center">
                <h2 className="food-name1 text-center">{food.name}</h2>
                <p className="food-description p-2 text-center">{food.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
  </div>
    </div>
  );
}
