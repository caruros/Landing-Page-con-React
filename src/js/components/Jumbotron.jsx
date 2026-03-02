import React from "react";

const Jumbotron = () => {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                <p className="col-md-8 fs-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    It uses utility classes for typography and spacing to space
                    content out within the larger container.
                </p>
                <button className="btn btn-primary btn-lg">
                    Call to action!
                </button>
            </div>
        </div>
    );
};

export default Jumbotron;