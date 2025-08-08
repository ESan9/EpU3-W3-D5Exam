import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Article } from "../types/Article";

interface Props {
  article: Article;
}

export const ArticleCard = ({ article }: Props) => (
  <Col md={4} className="mb-4">
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={article.image_url}
        alt={article.title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {new Date(article.published_at).toLocaleDateString()}
        </Card.Subtitle>
        <Card.Text>{article.summary}</Card.Text>
        <Link to={`/article/${article.id}`}>
          <Button variant="primary">Leggi di più</Button>
        </Link>
      </Card.Body>
    </Card>
  </Col>
);
