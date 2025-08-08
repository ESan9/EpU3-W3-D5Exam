import { Row } from "react-bootstrap";
import { Article } from "../types/Article";
import { ArticleCard } from "./ArticleCard";

interface Props {
  articles: Article[];
}

export const ArticleList = ({ articles }: Props) => (
  <Row>
    {articles.map((article) => (
      <ArticleCard key={article.id} article={article} />
    ))}
  </Row>
);
