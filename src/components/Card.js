import React from "react";

const Card = ({ id, name, email }) => {
    return (
        <div className="tc bg-light-green grow ma2 pa3 br3 dib shadow-5 bw2">
            <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;