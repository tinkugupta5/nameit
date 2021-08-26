import React from 'react';
import './ResultsContainer.css';

const ResultsContainer = ({suggestedNames}) => {

    const suggestNamesJsx = suggestedNames.map((suggestedName) => {
        return <p>{suggestedName}</p>;
    }) 

    return(
        <div className="resut-conatiner">
            <p>{suggestNamesJsx} </p>
        </div>
    )
}

export default ResultsContainer;