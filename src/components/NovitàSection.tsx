import { Row, Col, Card } from "react-bootstrap";
import img1a from "../assets/images/1a.png";
import img1b from "../assets/images/1b.png";
import img2a from "../assets/images/2a.png";
import img2b from "../assets/images/2b.png";
import img2c from "../assets/images/2c.png";
import img2d from "../assets/images/2d.png";
import img2e from "../assets/images/2e.png";
import img2f from "../assets/images/2f.png";
import { BsChevronRight } from "react-icons/bs";

export const NovitaSection = () => {
  const thumbs = [img2a, img2b, img2c, img2d, img2e, img2f];

  const titles = [
    "Prólogo con Abuelo",
    "The Wanderer",
    "Michael Bublé & Carly Pearce",
    "Stephan Moccio",
    "Chart Spotlight",
    "Altro episodio",
  ];

  return (
    <section className="py-4" style={{ color: "#fff" }}>
      <Row>
        <Col>
          <h2 className="mb-4">Novità</h2>
          <hr></hr>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>NUOVA STAZIONE RADIO</p>
          <p>Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill</p>
        </Col>
        <Col className="d-none d-lg-block">
          <p>NUOVA STAZIONE RADIO</p>
          <p>Ecco la nuova casa della musica latina</p>
        </Col>
      </Row>

      {/* Le card con le immagini */}
      <Row className="g-3 mb-4">
        <Col md={12} lg={6}>
          <Card className="bg-dark text-white border-0">
            <Card.Img src={img1a} alt="Apple Music Chill" />
            <Card.ImgOverlay></Card.ImgOverlay>
          </Card>
        </Col>
        <Col className="d-block d-lg-none">
          <p>NUOVA STAZIONE RADIO</p>
          <p>Ecco la nuova casa della musica latina</p>
        </Col>
        <Col md={12} lg={6}>
          <Card className="bg-dark text-white border-0">
            <Card.Img src={img1b} alt="Música Uno" />
            <Card.ImgOverlay></Card.ImgOverlay>
          </Card>
        </Col>
      </Row>

      {/* Il resto */}
      <h5 className="mb-3">
        Nuovi episodi radio{" "}
        <span className="fw-bold" aria-hidden>
          <BsChevronRight size={16} />
        </span>
      </h5>
      <Row className="g-3">
        {thumbs.map((src, i) => (
          <Col key={i} xs={6} md={2} className="text-white">
            <Card className="bg-dark text-white border-0">
              <Card.Img src={src} alt={titles[i]} />
            </Card>
            <p className="mt-2 mb-0">{titles[i]}</p>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default NovitaSection;
