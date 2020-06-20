import React from 'react';

const BoogieList = ({ boogie, handleDeleteBoogie }) => {
    return (
        <div className='panel panel-default'>
            <div className='panel-heading'>
                <h3 className='panel-title'>{boogie.name}</h3>
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
                <button>
                    <Link
                        className='btn btn-xs btn-danger margin-left-10'
                        onClick={() => handleDeleteBoogie(boogie._id)}
                    >
                        Edit Boogie
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default BoogieList;