import "bootstrap/dist/css/bootstrap.min.css";
import MediaBar from "./components/MediaBar";
import { MusicFooter } from "./components/MusicFooter";
import { NovitaSection } from "./components/NovitàSection";

const App = () => (
  <>
    <MediaBar />
    <NovitaSection />
    <MusicFooter />;
  </>
);

export default App;
