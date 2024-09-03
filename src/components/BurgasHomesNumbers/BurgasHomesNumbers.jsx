import React from "react";
import "./BurgasHomesNumbers.css"; // Ensure this CSS file is properly linked

const BurgasHomesNumbers = () => {
  return (
    <section className="burgas-homes-numbers">
      <h2>Burgas Homes във цифри</h2>
      <div className="numbers-container">
        <div className="number-item">
          <h3>10+</h3>
          <p>Години Експертиза</p>
        </div>
        <div className="number-item">
          <h3>500+</h3>
          <p>Доволни Клиенти</p>
        </div>
        <div className="number-item">
          <h3>200+</h3>
          <p>Реализирани Проекти</p>
        </div>
        <div className="number-item">
          <h3>∞</h3>
          <p>Спечелено Доверие</p>
        </div>
      </div>
    </section>
  );
};

export default BurgasHomesNumbers;
