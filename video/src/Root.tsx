import { Composition } from "remotion";
import { HighPassIntro } from "./HighPassIntro";

const IMAGE_COUNT = 10;
const PER_IMAGE_FRAMES = 90;
const TITLE_FRAMES = 75;

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="HighPassIntro"
      component={HighPassIntro}
      durationInFrames={TITLE_FRAMES + IMAGE_COUNT * PER_IMAGE_FRAMES}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
