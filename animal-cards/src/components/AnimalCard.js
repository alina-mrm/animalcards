import React from 'react';
import '../styles/AnimalCard.css';

const AnimalCard = (props) => {
    return (
        <div className="card">
            <div className="card__photo">
                <img src="props.card.photoUrl" alt="" />
            </div>
            <div className="card__info">
                <div className="card__name">{props.card.name}</div>
                <div className="card__sex">{props.card.sex}</div>
                <div className="card__age">{props.card.age}</div>
                <div className="card__description">{props.card.description}</div>
            </div>
        </div>
    )
};

export default AnimalCard;