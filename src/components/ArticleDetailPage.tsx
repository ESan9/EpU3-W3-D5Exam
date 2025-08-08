import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Button, Spinner } from "react-bootstrap";
import { fetchArticleById } from "../services/api";
import { Article } from "../types/Article";
import { ErrorMessage } from "../components/ErrorMessage";

export const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchArticleById(id)
        .then(setArticle)
        .catch((err: Error) => setError(err.message));
    }
  }, [id]);

  if (error)
    return (
      <Container className="my-4">
        <ErrorMessage message={error} />
      </Container>
    );
  if (!article)
    return (
      <Container className="my-4">
        <Spinner animation="border" />
      </Container>
    );

  return (
    <Container className="my-4 d-flex justify-content-center">
      <Card style={{ maxWidth: "720px", width: "100%" }}>
        <Card.Img
          variant="top"
          src={article.image_url}
          alt={article.title}
          style={{ maxHeight: "360px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {new Date(article.published_at).toLocaleDateString()}
          </Card.Subtitle>
          <Card.Text>{article.summary}</Card.Text>
          <Button variant="primary" href={article.url} target="_blank">
            Leggi su {article.news_site}
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};
