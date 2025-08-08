import { Container } from "react-bootstrap";
import ApiCard from "./ApiCard";
import NovitaSection from "./NovitàSection";

const MainPage = () => {
  return (
    <>
      <Container className="bg-dark">
        <NovitaSection />
        <ApiCard />
      </Container>
    </>
  );
};

export default MainPage;
