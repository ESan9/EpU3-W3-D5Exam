import { Row, Col, Card } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs";

const LastMainPagePart = () => {
  const items: { label: string; href?: string }[] = [
    { label: "Esplora per genere" },
    { label: "Worldwide" },
    { label: "Video musicali" },
    { label: "Decenni" },
    { label: "Classifiche" },
    { label: "Nuovi artisti" },
    { label: "Attività e stati d'animo" },
    { label: "Audio spaziale" },
    { label: "Hit del passato" },
  ];

  const accent = "#ff4155";

  return (
    <section className="py-4 text-white">
      <h5 className="mb-3">Altro da esplorare</h5>
      <Row className="g-3 row-cols-1 row-cols-md-2 row-cols-lg-3">
        {items.map((it, i) => (
          <Col key={i}>
            <Card
              className="border-0 rounded-3 shadow-sm"
              style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
            >
              <Card.Body className="d-flex align-items-center justify-content-between py-3 px-4">
                <span className="fw-medium" style={{ color: accent }}>
                  {it.label}
                </span>
                <span className="fw-bold" style={{ color: accent }} aria-hidden>
                  <BsChevronRight size={16} />
                </span>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default LastMainPagePart;
