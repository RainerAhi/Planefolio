import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            RAINER AHI
          </h1>
          <p className="intro__scroll">Scroll to start exploring</p>
          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            Explore
          </button>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">Thank you for taking the time to explore my portfolio! I hope you found it enjoyable. If you share my enthusiasm for 3D websites, feel free to get in touch. I'm more than willing to create a unique and immersive website tailored to your needs, either free of charge or for a modest fee. Additionally, for those intrigued, I'm available for job opportunities as a creative developer. </p>
      </div>
    </div>
  );
};
