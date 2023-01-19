import React from 'react';

export const Card = ({ title, text, target, linkTitle, href, rel, onClick, linkClassName }) => {

    const shortText = text?.length > 50 ? text?.slice(0, 50) + '...' : text;

    return (
        <div className="card">

            <div className="card__title">{title}</div>

            <div className="card__text">{shortText}</div>
            <a className={`default-link card__link ${linkClassName}`} target={target} rel={rel} href={href} onClick={onClick}>
                {linkTitle}
            </a>
        </div>
    );
}