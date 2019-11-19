import React from 'react';

class Loading extends React.Component{
    render(){
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <div className="spinner-grow text-white" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loading;