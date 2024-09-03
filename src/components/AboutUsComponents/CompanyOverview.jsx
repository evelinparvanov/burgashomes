import React from 'react';
import './AboutUs.css';

const CompanyOverview = () => {
  return (
    <section className="about-us-section company-overview">
      <div className="about-us-content company-info">
        <div className="company-text">
          <h2>За Нас</h2>
          <ul>
            <li>
              Нашите къщи са не само екологични, но и енергийно ефективни, което води до дългосрочни спестявания и минимално въздействие върху околната среда.
            </li>
            <li>
              Работим с висококачествени материали и имаме опитен екип, който ще превърне вашата мечта за дом в реалност.
            </li>
            <li>
              Нашите къщи са не само екологични, но и енергийно ефективни, което води до дългосрочни спестявания и минимално въздействие върху околната среда.
            </li>
            <li>
              Ние от Burgas Homes предлагаме висококачествени сглобяеми къщи, които съчетават комфорт, устойчивост и модерни технологии.
            </li>
            <li>
              Нашите къщи са не само екологични, но и енергийно ефективни, което води до дългосрочни спестявания и минимално въздействие върху околната среда.
            </li>
          </ul>
        </div>
        <img 
          src="/burgas_homes_logo_noBG_SVG.svg" 
          alt="Burgas Homes Logo" 
          className="company-image" 
        />
      </div>
    </section>
  );
};

export default CompanyOverview;
