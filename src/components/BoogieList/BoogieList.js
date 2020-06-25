import React from 'react';
import { Link } from 'react-router-dom';


function BoogieList({ boogie, handleDeleteBoogie }) {
    console.log('hitting', boogie)
    return (
        <div className='panel panel-default'>
            <div className='panel-heading'>
                {/* <h3 className='panel-title'>{boogie.name}</h3> */}
            </div>
            <div className='panel-footer BoogieListItem-action-panel'>
                <Link
                    className='btn btn-xs btn-info'
                    to={{
                        pathname: '/details',
                        state: { boogie }
                    }}
                >
                    Details
                </Link>
                <Link
                    className='btn btn-xs btn-danger margin-left-10'
                    to={{
                        pathname: '/edit',
                        state: { boogie }
                    }}
                >
                    Edit Boogie
                    </Link>
                <button
                    className='btn btn-xs btn-danger margin-left-10'
                    onClick={() => handleDeleteBoogie(boogie._id)}
                >
                    Delete Boogie
                </button>
            </div>
        </div>
    );
};

export default BoogieList;