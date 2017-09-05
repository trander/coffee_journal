import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    
    const detail = query.detail === 'true';

    return (
        <div>
            <h1>About {match.params.name}</h1>
            {detail && 'detail: blahblah'}
            <p>make your own coffee journal and share your note!</p>
        </div>
    );
};

export default About;