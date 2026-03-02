import React from "react";

const Card = () => {
    const cardStyles = {
        width: "18rem"
    }

    const imageStyles = {
        height: "16rem"
    }

    return (
        <div className="card col-md-3 col-sm-10 m-3" style={cardStyles}>

            <img src="https://picsum.photos/200/300" className="card-img-top h-10" style={imageStyles} />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );

};

export default Card;