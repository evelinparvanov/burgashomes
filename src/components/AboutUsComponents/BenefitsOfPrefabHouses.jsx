import React from 'react';
import './AboutUs.css';

const BenefitsOfPrefabHouses = () => {
  return (
    <section className="about-us-section benefits">
      <div className="about-us-content benefits-info">
        <div className="benefits-text">
          <h2>Ползи от Сглобяемите Дървени Къщи</h2>
          <div className="benefit-container">
            <h3>Бързина на Монтаж</h3>
            <p>Сглобяемите дървени къщи са с 30% по-бързи за монтаж в сравнение с традиционното строителство, което спестява време и ресурси.</p>
          </div>
          <div className="benefit-container">
            <h3>Енергийна Ефективност</h3>
            <p>Енергийна ефективност до 40%, което води до значителни спестявания в дългосрочен план и по-ниски разходи за отопление и охлаждане.</p>
          </div>
          <div className="benefit-container">
            <h3>Екологични Материали</h3>
            <p>Използваме екологично чисти материали, които са устойчиви на влиянията на околната среда, което ги прави добър избор за природата.</p>
          </div>
          <div className="benefit-container">
            <h3>Дълготрайност</h3>
            <p>Нашите къщи са гарантирано дълготрайни с минимални разходи за поддръжка през годините, осигурявайки сигурност и стабилност.</p>
          </div>
          <div className="benefit-container">
            <h3>Индивидуален Дизайн</h3>
            <p>Възможност за персонализиране на дизайна, което ви позволява да създадете дом, който отразява вашата индивидуалност и нужди.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfPrefabHouses;
