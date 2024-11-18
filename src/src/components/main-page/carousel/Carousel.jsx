import "./Carousel.css";

import design1 from "../../../assets/mockdesign1.jpg"
import design2 from "../../../assets/mockdesign2.jpg"
import design3 from "../../../assets/mockdesign3.jpg"
import design4 from "../../../assets/mockdesign4.jpg"
import design5 from "../../../assets/mockdesign5.jpg"
import design6 from "../../../assets/mockdesign6.jpg"
import pfp from "../../../assets/middleimg.png"

const mockProfile = [
    {
        username: "Julia", profileImg: pfp, designs: [design1, design2, design3, design4, design5, design6]
    }
]

const Carousel = () => {

    return (
        <div className="carousel-div-container">
            {mockProfile.map(profile => (
                <div className="carousel-container">
                    <div className="user-section">
                        <img src={ pfp } alt="profilePicture" id="profilepicture"/>                        
                        <h1>{profile.username}</h1>
                    </div>
                    <div className="design-carousel-infinite">
                        <div className="scrolling-container">
                            {profile.designs.concat(profile.designs).map((photo, index) => (
                                <div className="photo-container" key={index}>
                                    <img
                                        src={photo}
                                        alt={`Mobile Slide ${index + 1}`}
                                        className="design"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Carousel;