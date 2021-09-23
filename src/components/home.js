import React from 'react'
import "./home.css"


function home(){
    return (
       
        <div className="destination">
             <h1 className="header"><u>Travel Destinations</u></h1>
            <div className="destinationBox">
                <div className="destinationImg">
                    <img src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/02/26/1037/Park-Hyatt-Maldives-Hadahaa-P303-Aerial-Island.jpg/Park-Hyatt-Maldives-Hadahaa-P303-Aerial-Island.16x9.jpg" alt="d1"></img>
                </div>
                <div className="destinationInfo">
                    <h2 className="destinationName">Maldives</h2>
                    <p className="destinationAbout">"This tropical nation in the Indian Ocean is made up of more than 1,000 coral islands. It’s home to some of the world’s most luxurious hotel resorts, with white sandy beaches, underwater villas and restaurants and bright blue waters."</p>
                    <div className="destinationBtn">
                        <a href="/activities"><button className="seeDetails">Details</button></a>
                        <a href="/form"><button className="bookTickets">Book Tickets</button></a>
                    </div>
                </div>
            </div>
            <div className="destinationBox">
                <div className="destinationImg">
                    <img src="https://www.thestatesman.com/wp-content/uploads/2020/07/hp-1.jpg" height="232.5px" width="200px" alt="d2"></img>
                </div>
                <div className="destinationInfo">
                    <h2 className="destinationName">Himachal Pradesh</h2>
                    <p className="destinationAbout">"Himachal Pradesh is famous for its beautiful views as well as adventure activities, such as treks, paragliding, skiing and so much more. It is a popular holiday destination with people of all age groups, be it young friends, honeymooners, families and adventurers."</p>
                    <div className="destinationBtn">
                        <a href="/activities"><button className="seeDetails">Details</button></a>
                        <a href="/form"><button className="bookTickets">Book Tickets</button></a>
                    </div>
                </div>
            </div>
            <div className="destinationBox lastBox">
                <div className="destinationImg">
                    <img src="https://lh3.googleusercontent.com/FqXvailyyIAehQ2Imh_8G1lU8hc-Yy-EQ8iZtNocgLaYD_cmVreNAttCWuxwu8Nm" height="auto" width="200px" alt="d3"></img>
                </div>
                <div className="destinationInfo">
                    <h2 className="destinationName">Jaipur</h2>
                    <p className="destinationAbout">"If you take one look at the glorious stucco buildings that line Jaipur's wide streets, you'll understand why this is nicknamed "The Pink City." Spend your days exploring City Palace, Hawa Mahal, Amber and Jaigarh forts and head to one of the bazaars."</p>
                        <a href="/activities"><button className="seeDetails">Details</button></a>
                        <a href="/form"><button className="bookTickets">Book Tickets</button></a>
                </div>
            </div>
        </div>
    );
}

export default home
