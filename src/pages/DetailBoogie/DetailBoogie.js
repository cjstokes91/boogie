import React from 'react';
import BoogieCard from '../../components/BoogieCard/BoogieCard';

function DetailBoogie(props) {
    const boogie = props.location.state.boogie;
    return (
        <>
            <BoogieCard
                key={boogie._id}
                boogie={boogie}
            />
        </>
    );
};

export default DetailBoogie;