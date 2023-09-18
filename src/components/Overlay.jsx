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
          <h2 className="logo--h2" >Portfolio Website</h2>
          <p className="intro__scroll">Scroll to start exploring!</p>
          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            EXPLORE
          </button>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <h1 className="logo--outro" >Rainer Ahi</h1>
        <p className="outro__text">Thank you for taking the time to explore my portfolio! I hope you found it enjoyable. If you share my enthusiasm for 3D websites, feel free to get in touch. I'm more than willing to create a unique and immersive website tailored to your needs, either free of charge or for a modest fee. Additionally, for those intrigued, I'm available for job opportunities as a creative developer. Contact me via social media or raineripost@gmail.com.</p>
        <div>
          <a class="button" href="https://twitter.com/L7XICZ" target="_blank">
            <button className="button--links" >Twitter</button>
				  </a>
          <a class="button" href="https://www.youtube.com/@L7XICZ" target="_blank">
            <button className="button--links" >Youtube</button>
				  </a>
          <a class="button" href="https://www.instagram.com/rainerahi/" target="_blank">
            <button className="button--links" >Instagram</button>
				  </a>
          <a class="button" href="https://github.com/RainerAhi" target="_blank">
            <button className="button--links" >Github</button>
				  </a>
        </div>
        <p className="outro__text bottom--text " >Visit my online <a className="html--button" href="https://rainer-ahi-html-site.vercel.app/" target="_blank" >resume website</a> to explore additional projects I've created.</p>
      </div>
    </div>
  );
};
