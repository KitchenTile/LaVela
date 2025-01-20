import "./Hero.css";
import Map from "./map/Map";

const Hero = () => {
  return (
    <div className="hero-container">
      <svg
        id="wave"
        width="465"
        height="540"
        viewBox="0 0 465 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 540L2.43819 517.5C4.96347 495 9.8399 450 34.1348 405C58.3427 360 101.882 315 94.0449 270C86.2079 225 26.9944 180 8.5337 135C-9.8399 90 12.4523 45 23.6854 22.5L34.8315 0H465V22.5C465 45 465 90 465 135C465 180 465 225 465 270C465 315 465 360 465 405C465 450 465 495 465 517.5V540H0Z"
          fill="#7FB8B6"
        />
      </svg>
      <Map />
      <div className="text-container">
        <h1 className="hero-title">La Vella</h1>
        <div>
          <h2>Scroll to explore the</h2>
          <h2>100s of free designs</h2>
          <h2>From our global talent</h2>
          <span className="arrow">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.29289 9.29289C7.68342 8.90237 8.31658 8.90237 8.70711 9.29289L12 12.5858L15.2929 9.29289C15.6834 8.90237 16.3166 8.90237 16.7071 9.29289C17.0976 9.68342 17.0976 10.3166 16.7071 10.7071L12.7071 14.7071C12.5196 14.8946 12.2652 15 12 15C11.7348 15 11.4804 14.8946 11.2929 14.7071L7.29289 10.7071C6.90237 10.3166 6.90237 9.68342 7.29289 9.29289Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
