import { useState, type CSSProperties } from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Offcanvas,
  Nav,
  InputGroup,
  Navbar,
} from "react-bootstrap";
import {
  BsApple,
  BsSearch,
  BsHouseDoor,
  BsStars,
  BsBroadcast,
  BsShuffle,
  BsSkipStartFill,
  BsPlayFill,
  BsSkipEndFill,
  BsArrowRepeat,
} from "react-icons/bs";

export interface MediaBarProps {
  className?: string;
  style?: CSSProperties;
}

const MediaBar = ({ className = "", style }: MediaBarProps) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div
      className={`w-100 px-3 py-2 ${className}`}
      style={{
        background: "#181818",
        color: "#fff",
        borderBottom: "1px solid rgba(255,255,255,.06)",
        ...style,
      }}
    >
      <Container fluid>
        {/* PICCOLO E MED */}
        <Row className="align-items-center d-flex d-lg-none g-0">
          <Col xs="auto">
            <Navbar expand="lg" data-bs-theme="dark" className="p-0">
              <Navbar.Toggle
                aria-controls="offcanvasNavbar"
                className="border-0"
                aria-label="Apri menu di navigazione"
                onClick={() => setShowNav(true)}
              />
            </Navbar>
          </Col>

          <Col className="text-center">
            <div
              className="d-inline-flex align-items-center gap-2"
              style={{ opacity: 0.9 }}
            >
              <BsApple size={18} />
              <span style={{ fontWeight: 700 }}>Music</span>
            </div>
          </Col>

          <Col xs="auto">
            <Button variant="link" className="text-danger fw-semibold">
              Accedi
            </Button>
          </Col>
        </Row>

        {/* DESKTOP */}
        <Row className="align-items-center g-3 d-none d-lg-flex">
          {/* PLAYER SINISTRA */}
          <Col xs="auto">
            <div
              className="d-flex align-items-center gap-2"
              style={{
                background: "#2b2b2b",
                padding: 6,
                borderRadius: 8,
                opacity: 0.85,
              }}
            >
              {[
                { Icon: BsShuffle, title: "Shuffle" },
                { Icon: BsSkipStartFill, title: "Previous" },
                { Icon: BsPlayFill, title: "Play" },
                { Icon: BsSkipEndFill, title: "Next" },
                { Icon: BsArrowRepeat, title: "Repeat" },
              ].map(({ Icon, title }, i) => (
                <button
                  key={i}
                  type="button"
                  title={title}
                  className="border-0 bg-transparent p-1"
                  style={{ color: "#8a8a8a", cursor: "default" }}
                  onClick={(e) => e.preventDefault()}
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </Col>

          {/* CENTRALE */}
          <Col
            className="d-flex justify-content-center"
            style={{ minWidth: 200 }}
          >
            <button
              type="button"
              onClick={() => setShowNav(true)}
              className="border-0 bg-transparent p-0"
              aria-label="Apri menu"
            >
              <div
                className="rounded-4 d-flex align-items-center justify-content-center px-4"
                style={{
                  height: 38,
                  minWidth: 320,
                  background: "#3a3a3a",
                  opacity: 0.95,
                }}
              >
                <BsApple size={18} />
              </div>
            </button>
          </Col>

          {/* DESTRA */}
          <Col xs="auto" className="ms-auto">
            <Button variant="danger" size="sm" type="button">
              Accedi
            </Button>
          </Col>
        </Row>

        {/* OFFCANVAS, forse sarebbe stato meglio farla in un componente a parte ma vabbè */}
        <Offcanvas
          id="offcanvasNavbar"
          show={showNav}
          onHide={() => setShowNav(false)}
          placement="start"
          backdrop
          scroll={false}
          style={{ background: "#1f1f1f", color: "#fff", width: 300 }}
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title className="d-flex align-items-center gap-2">
              <BsApple />
              <span>Music</span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form className="mb-3">
              <InputGroup size="sm">
                <InputGroup.Text
                  id="search-addon"
                  className="bg-transparent text-secondary border-secondary"
                >
                  <BsSearch />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Cerca"
                  aria-label="Cerca"
                  aria-describedby="search-addon"
                  className="bg-transparent text-light border-secondary"
                />
              </InputGroup>
            </Form>

            <Nav className="flex-column gap-1" variant="pills">
              <Nav.Item>
                <Nav.Link
                  active
                  className="d-flex align-items-center gap-2 text-light bg-transparent"
                  onClick={(e) => e.preventDefault()}
                >
                  <BsHouseDoor className="text-danger" /> Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="d-flex align-items-center gap-2 text-light"
                  onClick={(e) => e.preventDefault()}
                >
                  <BsStars className="text-danger" /> Novità
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="d-flex align-items-center gap-2 text-light"
                  onClick={(e) => e.preventDefault()}
                >
                  <BsBroadcast className="text-danger" /> Radio
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </div>
  );
};

export default MediaBar;
