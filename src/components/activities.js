import React from 'react'
import "./activities.css"


function activities(){
    return (
        <div className="activityBox">
            <h1 className="activity">Major activities in <u>Maldives</u> </h1> {/*name {name} is equal to destination places*/}
            <div className="travel maldives">
                <div className="activity1">
                    <img src="https://images.thrillophilia.com/image/upload/s--0qZhwKg9--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.5,f_auto,fl_strip_profile/v1/images/photos/000/364/170/original/1608538862_shutterstock_558396214.jpg.jpg" alt="scuba dive"></img>
                    <p>Scuba Diving</p>
                </div>
                <div className="activity2">
                    <img src="https://images.thrillophilia.com/image/upload/s--JLSoFm3J--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.5,f_auto,fl_strip_profile/v1/images/photos/000/364/189/original/1608533341_Take_a_helicopter_tour_of_Maldives.jpg.jpg" alt="scuba dive"></img>
                    <p>Helicopter Tour</p>
                </div>
                <div className="activity3">
                    <img src="https://images.thrillophilia.com/image/upload/s--BzbThCBR--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.5,f_auto,fl_strip_profile/v1/images/photos/000/364/174/original/1608531602_shutterstock_692496991.jpg.jpg" alt="scuba dive"></img>
                    <p>Surfing</p>
                </div>
                <div className="activity4">
                    <img src="https://images.thrillophilia.com/image/upload/s--YZi7ShDT--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.5,f_auto,fl_strip_profile/v1/images/photos/000/364/193/original/1608533949_shutterstock_739479742.jpg.jpg" alt="scuba dive"></img>
                    <p>Jet Ski</p>
                </div>
                <div className="activity5">
                    <img src="https://images.thrillophilia.com/image/upload/s--f6HLQO__--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.5,f_auto,fl_strip_profile/v1/images/photos/000/062/237/original/1596116175_shutterstock_563557402.jpg.jpg" alt="scuba dive"></img>
                    <p>Fly Boarding</p>
                </div>
            </div>
            <div className="travel himachal">
                <div className="activity1">
                    <img src="https://www.tourmyindia.com/states/himachal/images/trekking-in-himachal1.jpg" alt="scuba dive"></img>
                    <p>Trekking</p>
                </div>
                <div className="activity2">
                    <img src="data:image/jpeg;base64,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" alt="scuba dive"></img>
                    <p>Paragliding</p>
                </div>
                <div className="activity3">
                    <img src="https://www.tourmyindia.com/states/himachal/images/skiing-in-himachal.jpg" alt="scuba dive"></img>
                    <p>Skiing</p>
                </div>
                <div className="activity4">
                    <img src="https://himachaltourism.gov.in/wp-content/uploads/2019/04/Pin-Valley-Lahaul-Spiti-3.jpg" alt="scuba dive"></img>
                    <p>Camping</p>
                </div>
                <div className="activity5">
                    <img src="https://www.tourmyindia.com/states/himachal/images/mountaineering-rock-climbing-himachal.jpg" alt="scuba dive"></img>
                    <p>Rock Climbing</p>
                </div>
            </div>
            <div className="travel jaipur">
                <div className="activity1">
                    <img src="https://images.thrillophilia.com/image/upload/s--LbZ9etcP--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.5,f_auto,fl_strip_profile/v1/images/photos/000/052/800/original/1473508518_4287799283_560e49ffbe_b.jpg.jpg" alt="scuba dive"></img>
                    <p>Visit Amber Fort</p>
                </div>
                <div className="activity2">
                    <img src="https://images.thrillophilia.com/image/upload/s--CRj3FdqE--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.5,f_auto,fl_strip_profile/v1/images/photos/000/052/801/original/chokhi_dhani.jpg.jpg" alt="scuba dive"></img>
                    <p>Visit Chokhi Dhani</p>
                </div>
                <div className="activity3">
                    <img src="https://images.thrillophilia.com/image/upload/s--Q6yimItU--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.5,f_auto,fl_strip_profile/v1/images/photos/000/120/978/original/1510392759_city-palace-jaipur.jpg.jpg" alt="scuba dive"></img>
                    <p>Visit City Palace</p>
                </div>
                <div className="activity4">
                    <img src="https://res.cloudinary.com/thrillophilia/image/upload/c_fill,dpr_2.0,f_auto,fl_progressive.strip_profile,g_center,h_450,q_auto,w_753/v1/filestore/q8fn0c4h38neaxc4te1fr5ynzx5g_shutterstock_765094033.jpg" alt="scuba dive"></img>
                    <p>Jhalana Safari Jaipu</p>
                </div>
                <div className="activity5">
                    <img src="https://images.thrillophilia.com/image/upload/s--jigoKcQI--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.5,f_auto,fl_strip_profile/v1/images/photos/000/052/818/original/1510814199_41exp-banner.jpg.jpg" alt="scuba dive"></img>
                    <p>Hot Air Balloon Ride</p>
                </div>
            </div>
            <a href="/"><button className="closeActivity">Back to Home Page</button></a>
        </div>
    )
}

export default activities
