import React from "react";
import { dataSewa } from '../assets/data/dataSewa'
import { Link } from "react-router-dom";

export default function RentPricePage() {
    return (
        <div className="backgroud-rent-page">
            <div className="card-rent-flex" >
                {dataSewa.map((rent, index) => (
                    <div key={index} className="card-rent bestdeal">
                        <div className="text-center text-light fw-bold">
                            <p className="fs-2">{rent.type}</p>
                            <p className="fs-3">{rent.price}</p>
                            <p className="fs-5">{rent.name}</p>
                        </div>
                        <ul className="features text-light">
                            {rent.detail.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <Link to="/payment" className="btn btn-primary">Pembayaran</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}