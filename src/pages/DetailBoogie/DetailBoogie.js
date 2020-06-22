import React from 'react';
import BoogieCard from '../../components/BoogieCard/BoogieCard';

const DetailBoogie = (props) => {
    const boogie = props.location.state.boogie;
    return (
        <>
            <h1>
                Boogie Detail
            </h1>
            <label>
                Hurley Boogie
            </label>
            <ul>
                <li>
                    Brand : Hurley
                </li>
                <li>
                    Name : Johnny top
                </li>
                <li>
                    Type : Soft Top
                </li>
                <li>
                    Price : $99.00
                </li>
            </ul>
            {/* <BoogieCard
                key={boogie._id}
                boogie={boogie}
            /> */}
        </>
    );
};

export default DetailBoogie;