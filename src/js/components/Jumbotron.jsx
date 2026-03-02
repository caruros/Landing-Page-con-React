import React from "react";

const Jumbotron = () => {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container py-5">
                <h1 className="display-4 fw-bold">A Warm Welcome!</h1>
                <p className="col-lg-8 fs-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Nullam metus ipsum, finibus et elit eu, pulvinar pulvinar nunc.
                      Praesent sed tellus quis sapien. 
                </p>
                <button className="btn btn-primary btn-lg">
                    Call to action!
                </button>
            </div>
        </div>
    );
};

export default Jumbotron;