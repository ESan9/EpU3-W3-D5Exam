import { Container } from "react-bootstrap";
import MediaBar from "./components/MediaBar";
import MainPage from "./components/MainPage";
import { MusicFooter } from "./components/MusicFooter";

const App = () => (
  <Container fluid className="p-0 bg-dark text-light min-vh-100">
    <MediaBar />
    <MainPage />
    <MusicFooter />
  </Container>
);

export default App;
