import React from 'react';
import BoogieCard from '../../components/BoogieCard/BoogieCard';

const DetailBoogie = (props) => {
    const boogie = props.location.state.boogie;
    return (
        <div>
            <h1>
                Boogie Detail
            </h1>
            <BoogieCard
                key={boogie._id}
                puppy={boogie}
            />
        </div>
    );
};

export default DetailBoogie;