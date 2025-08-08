import { type CSSProperties } from "react";
import { Container, Row, Col } from "react-bootstrap";

export interface MusicFooterProps {
  className?: string;
  style?: CSSProperties;
}

export const MusicFooter = ({ className = "", style }: MusicFooterProps) => {
  const links = [
    "Condizioni dei servizi internet",
    "Apple Music e privacy",
    "Avviso sui cookie",
    "Supporto",
    "Feedback",
  ];

  return (
    <footer
      className={`w-100 px-3 py-3 ${className}`}
      style={{
        background: "#1f1f1f",
        color: "#aaa",
        fontSize: "0.85rem",
        borderTop: "1px solid rgba(255,255,255,.06)",
        ...style,
      }}
    >
      <Container>
        <Row className="mb-2">
          <Col xs="auto" className="me-3 fw-semibold text-light">
            Italia
          </Col>
          <Col xs="auto" className="fw-semibold text-light">
            English (UK)
          </Col>
        </Row>
        <Row>
          <Col className="mb-2 text-light">
            Copyright © 2024 Apple Inc. Tutti i diritti riservati.
          </Col>
        </Row>
        <Row className="gy-1">
          {links.map((link, i) => (
            <Col key={i} xs="auto" className="me-3 text-light border-end pe-3">
              {link}
            </Col>
          ))}
        </Row>
      </Container>
    </footer>
  );
};
