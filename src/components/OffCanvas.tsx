import { Form, Offcanvas, Nav, InputGroup } from "react-bootstrap";
import {
  BsApple,
  BsSearch,
  BsHouseDoor,
  BsStars,
  BsBroadcast,
} from "react-icons/bs";
import { OffCanvasProps } from "../types/OffCanvas";

const OffCanvas = ({ show, onHide }: OffCanvasProps) => {
  return (
    <Offcanvas
      id="offcanvasNavbar"
      show={show}
      onHide={onHide}
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
            <InputGroup.Text className="bg-transparent text-danger border-secondary">
              <BsSearch />
            </InputGroup.Text>
            <Form.Control
              placeholder="Cerca"
              aria-label="Cerca"
              className="bg-transparent border-secondary"
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
  );
};

export default OffCanvas;
