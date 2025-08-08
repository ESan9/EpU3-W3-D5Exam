import { Container } from "react-bootstrap";
import ApiCard from "./ApiCard";
import NovitaSection from "./NovitàSection";
import LastMainPagePart from "./LastMainPagePart";

const MainPage = () => {
  return (
    <>
      <Container className="bg-dark">
        <NovitaSection />
        <ApiCard />
        <LastMainPagePart />
      </Container>
    </>
  );
};

export default MainPage;
