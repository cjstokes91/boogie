import React from 'react';
import BoogieList from '../../components/BoogieList/BoogieList';

const BoogieListPage = (props) => {
    return (
        <>
            <h1>
                Boogie List
        </h1>
            <div className="BoogieListPage-grid">
                {props.boogies.map(boogie =>
                    <BoogieList
                        boogie={boogie}
                        handleDeleteBoogie={props.handleDeleteBoogie}
                        key={boogie._id}
                    />
                )};
            </div>
        </>
    );
};

export default BoogieListPage;