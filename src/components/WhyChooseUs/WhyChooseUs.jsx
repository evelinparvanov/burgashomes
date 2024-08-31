import './WhyChooseUs.css'; // Ensure you create this CSS file

const reasons = [
    {
        icon: 'fas fa-star', // FontAwesome icon class
        title: 'Качество на услугата',
        description: 'Гарантираме високо качество на материалите и изпълнението на всеки проект.'
    },
    {
        icon: 'fas fa-handshake', // FontAwesome icon class
        title: 'Ориентирани към клиента',
        description: 'Нашият приоритет е да надхвърлим очакванията на клиентите с персонализирано обслужване.'
    },
    {
        icon: 'fas fa-calendar-check', // FontAwesome icon class
        title: 'Своевременно изпълнение',
        description: 'Осигуряваме навършване на проектите в срок, без компромиси с качеството.'
    }
];

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us">
            <div className="container">
                <h2>Защо да изберете нас?</h2>
                <div className="reasons">
                    {reasons.map((reason, index) => (
                        <div key={index} className="reason">
                            <i className={`icon ${reason.icon}`}></i>
                            <h3>{reason.title}</h3>
                            <p>{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
