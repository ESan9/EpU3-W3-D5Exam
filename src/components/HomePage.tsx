import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { fetchArticles } from "../services/api";
import { Article } from "../types/Article";
import { ArticleList } from "../components/ArticleList";
import { ErrorMessage } from "../components/ErrorMessage";

export const HomePage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchArticles()
      .then(setArticles)
      .catch((err: Error) => setError(err.message));
  }, []);

  return (
    <Container className="my-4">
      <h1 className="mb-4">🚀 Novità dallo spazio</h1>
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <ArticleList articles={articles} />
      )}
    </Container>
  );
};
