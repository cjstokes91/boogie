import React from 'react';
import { Link } from 'react-router-dom';

function BoogieCard({ boogie }) {
    return (
        <div className='panel panel-default'>
            <div className='panel-heading' >
                {/* <h3 className='panel-title'>{boogie.name}</h3> */}
            </div>
            <div className='panel-body'>
                <dl>
                    <dt>Name</dt>
                    <dt>{boogie.name}</dt>
                    <dt>Brand</dt>
                    <dt>{boogie.brand}</dt>
                    <dt>Type</dt>
                    <dt>{boogie.type}</dt>
                    <dt>Price</dt>
                    <dt>{boogie.price}</dt>
                </dl>
            </div>
            <div className='panel-footer'>
                <Link to='/'>Return To List</Link>
            </div>
        </div>
    )
}
export default BoogieCard;