import { Player } from "@lottiefiles/react-lottie-player";
import AudioVideoAnimation from "@momentum-design/animations/dist/lottie/audio-video.json";
import SuccessAnimation from "@momentum-design/animations/dist/lottie/success.json";
import "./Annimations.css";

export const AnnimationsContent = () => {
  return (
    <div className="annimationContentWrapper">
      <Player autoplay loop src={AudioVideoAnimation} style={{ height: "128px", width: "128px" }}></Player>
      <Player autoplay loop src={SuccessAnimation} style={{ height: "128px", width: "128px" }}></Player>
    </div>
  );
};
