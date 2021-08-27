import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultsContainer.css';

const ResultsContainer = ({suggestedNames}) => {

    const suggestNamesJsx = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />;
    })

    return(
        <div className="resut-conatiner">
            {suggestNamesJsx}
        </div>
    )
}

export default ResultsContainer;