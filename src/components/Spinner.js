import React from 'react';

class Spinner extends React.Component {

    render() {
        return (
            <div className="row">

                <div className="col-md-12">
                    <div className="d-flex justify-content-center text-danger">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Spinner;