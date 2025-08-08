import { useState, type CSSProperties } from "react";
import { Button, Container, Row, Col, Navbar, Form } from "react-bootstrap";
import { BsApple, BsVolumeUp } from "react-icons/bs";
import OffCanvas from "./OffCanvas";
import MiniPlayer from "./MiniPlayer";

export interface MediaBarProps {
  className?: string;
  style?: CSSProperties;
}

const MediaBar = ({ className = "", style }: MediaBarProps) => {
  // stato per l'offcanvas
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
                onClick={() => setShowNav(true)} // <— apre l’offcanvas
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
            <MiniPlayer />
          </Col>

          {/* CENTRALE */}
          <Col
            className="d-flex justify-content-center"
            style={{ minWidth: 200 }}
          >
            <button
              type="button"
              className="border-0 bg-transparent p-0"
              aria-label="Apri menu"
              onClick={() => setShowNav(true)} // apre anche da desktop
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
          <Col xs="auto" className="ms-auto d-none d-lg-flex">
            <div className="d-flex align-items-center gap-3">
              <div className="d-flex align-items-center gap-2">
                <BsVolumeUp aria-hidden="true" />
                <Form.Range
                  aria-label="Volume"
                  defaultValue={60}
                  min={0}
                  max={100}
                  style={{ width: 120 }}
                  onChange={() => {}}
                />
              </div>
              <Button variant="danger" size="sm" type="button">
                Accedi
              </Button>
            </div>
          </Col>
        </Row>

        {/* OFFCANVAS */}
        <OffCanvas show={showNav} onHide={() => setShowNav(false)} />
      </Container>
    </div>
  );
};

export default MediaBar;
