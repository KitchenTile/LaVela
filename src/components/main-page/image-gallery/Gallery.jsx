import design1 from "../../../assets/mockdesign1.jpg";
import design2 from "../../../assets/mockdesign2.jpg";
import design3 from "../../../assets/mockdesign3.jpg";
import design4 from "../../../assets/mockdesign4.jpg";
import design5 from "../../../assets/mockdesign5.jpg";
import design6 from "../../../assets/mockdesign6.jpg";
import pfp from "../../../assets/middleimg.png";

import "./Gallery.css";

const images_gallery = [
  design1,
  design2,
  design3,
  design4,
  design5,
  design6,
  design1,
  design2,
  design3,
  design4,
  design5,
  design6,
  design1,
  design2,
  design3,
  design4,
  design5,
  design6,
  design1,
  design2,
  design3,
  design4,
  design5,
  design6,
];

const Gallery = () => {
  return (
    <div className="container">
      <svg
        id="wave-repeat"
        width="814"
        height="1727"
        viewBox="0 0 814 1727"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.44882 1727L10.6832 1655.04C15.0687 1583.08 23.5376 1439.17 65.7298 1295.25C107.771 1151.33 183.384 1007.42 169.774 863.5C156.164 719.583 51.292 623.18 21.2691 431.75C3.21543 316.638 3.18796 212.905 3.18796 212.905L2.68895 157.166L2.18785 86.8069L1.18747 58.4804L-0.000110742 0H814V71.9583C814 143.917 814 287.833 814 431.75C814 575.667 814 719.583 814 863.5C814 1007.42 814 1151.33 814 1295.25C814 1439.17 814 1583.08 814 1655.04V1727H6.44882Z"
          fill="#7FB8B6"
        />
      </svg>

      <h1 className="title">All Artwork</h1>

      <div className="grid-container">
        {images_gallery.map((image) => (
          <div className="gallery-item">
            <img
              src={image}
              alt="gallery-item"
              className="design"
              loading="lazy"
            />
            <div className="profile-info">
              <div className="center">
                <img src={pfp} alt="pfp" />
                <h1 className="artist-name">Julia</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
