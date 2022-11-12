import React from 'react';

const Infocard = ({ card }) => {
    const { name, id, description, icon, bgClass } = card;
    return (
        <div>
            <div className={`card text-white p-6 md:card-side shadow-xl ${bgClass}`}>
                <figure>
                    <img src={icon} alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Infocard;