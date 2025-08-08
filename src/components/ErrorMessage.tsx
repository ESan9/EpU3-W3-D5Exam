import { Alert } from "react-bootstrap";

interface Props {
  message: string;
}

export const ErrorMessage = ({ message }: Props) => (
  <Alert variant="danger" className="mt-3">
    {message}
  </Alert>
);
