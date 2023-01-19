/**
 * Please, improve this component and fix all problems.
 *
 * What is important:
 * - design (extensibility, testability)
 * - code cleanliness, following best practices
 * - bugs
 * - consistency
 * - naming
 * - formatting
 *
 * Write your perfect code!
 */

import React from 'react';
import { Card } from '../card';
import { useFetchCards } from './hooks/useFetchCards';

export default function Page() {

    const { cards, isLoading } = useFetchCards({ lang: 'en' });


    const analyticsTrackClick = (url) => {
        // sending clicked link url to analytics
        console.log(url);
    }

    if (isLoading) {
        return 'Loading...';
    }

    return (
        <div>
            {cards?.map((item) => {
                return item && (
                    <Card
                        key={item.id}
                        title={item.title}
                        text={item.text}
                        linkTitle={item.link_title}
                        href={item.link}
                        linkClassName={item.id === 1 ? 'card__link--red' : ''}
                        target={item.id === 1 ? '_blank' : null}
                        rel={item.id === 1 ? 'noopener noreferrer' : null}
                        onClick={() => analyticsTrackClick(item.link)}
                    />
                );
            })}
        </div>
    );
}