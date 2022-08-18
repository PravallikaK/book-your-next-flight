import React from 'react';
import './Main.css';
import crew from './images/crew.jpeg';
import flight from './images/flight.jpeg';
import vacation from './images/vacation.png';


export default function Main() {
    return(
        <div class='container'>
            <div className='child-container'>
                <img src={crew} alt="flight crew logo" />
                <div className='info-contrainer'>
                    <h3>Pre-Pay Crew Incentive</h3>
                    <p>For your convinience, cre incentive may be pre-paid up to 2 days prior to your depature.</p>
                </div>
            </div>
            <div className='child-container'>
                <img src={flight} alt="flight logo" />
                <div className='info-contrainer'>
                    <h3>Princess EZair</h3>
                    <p>Search hassle-free, low price flights to your embarkation port with included benifits like Late Arrival Protection.</p>
                </div>
            </div>
            <div className='child-container'>
                <img src={vacation} alt="vacation logo" />
                <div className='info-contrainer'>
                    <h3>Oncoard Reservations</h3>
                    <p>Reserve your preferred spa treatments, save on Internet packages and book celebrations packages.</p>
                </div>
            </div>
        </div>
    )
}