import React from 'react';
import './Pricing.css';

const PricingCard = ({ icon, title, description, features, price }) => (
    <div className="pricing-card">
        {/* <div className="pricing-icon">
            <img src={icon} alt={`${title} Icon`} onError={(e) => e.target.src = 'path/to/default-icon.png'} />
        </div> */}
        <div className="pricing-details">
            <h3 className="pricing-heading">{title}</h3>
            <p className="pricing-info">{description}</p>
            <ul className="pricing-features">
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <p className="pricing-price">{price}</p>
        </div>
    </div>
);

const Pricing = () => {
    const pricingData = [
        {
            icon: 'path/to/icon1.png',
            title: 'Пакет „Базов“',
            description: 'Включва: ГРУБ СТРОЕЖ',
            features: [
                'Доставка и монтаж на основна дървена конструкция по спецификация и чертеж.',
                'Изграждане на конструкция на вътрешно стълбище при двуетажните къщи.',
                'Изграждане на покривна конструкция и обличането ѝ с влагоустойчиви OSB плоскости EGGAR 15 мм.',
                'Обличане на сградата отвън с влагоустойчиви OSB плоскости EGGAR 15 мм.'
            ],
            price: 'Цена: от 500.00 лв./кв.м без ДДС'
        },
        {
            icon: 'path/to/icon2.png',
            title: 'Пакет „Стандартен“',
            description: 'Включва: СТАНДАРТЕН СТРОЕЖ',
            features: [
                'Висококачествени материали, включително по-дебели стени и изолация.',
                'Дизайн, който включва подобрения за енергийна ефективност.',
                'Изграждане на покрив и фасада с премиум материали.',
                'Персонализирани вътрешни разпределения.'
            ],
            price: 'Цена: от 800.00 лв./кв.м без ДДС'
        },
        {
            icon: 'path/to/icon3.png',
            title: 'Пакет „Оптимален“',
            description: 'Включва: ПРЕМИУМ СТРОЕЖ',
            features: [
                'Премиум материали и най-висококачествени компоненти.',
                'Ексклузивен дизайн с множество персонализирани опции.',
                'Пълна изолация и енергийно ефективни технологии.',
                'Монтаж и завършване от най-висок клас.'
            ],
            price: 'Цена: от 1,200.00 лв./кв.м без ДДС'
        }
    ];

    return (
        <section className="pricing-section" aria-labelledby="pricing-title">
            {pricingData.map((data, index) => (
                <PricingCard
                    key={index}
                    // icon={data.icon}
                    title={data.title}
                    description={data.description}
                    features={data.features}
                    price={data.price}
                />
            ))}
        </section>
    );
};

export default Pricing;
