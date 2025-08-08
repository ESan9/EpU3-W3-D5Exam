import { Article } from "../types/Article";

const BASE_URL = "https://api.spaceflightnewsapi.net/v4/articles";

const checkResponse = async (res: Response) => {
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Errore ${res.status}: ${errorText || res.statusText}`);
  }
  return res.json();
};

export const fetchArticles = async (): Promise<Article[]> => {
  try {
    const res = await fetch(BASE_URL);
    const data = await checkResponse(res);
    return data.results;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Errore fetchArticles:", error.message);
      throw new Error(
        "Impossibile recuperare gli articoli. Riprova più tardi."
      );
    } else {
      console.error("Errore fetchArticles:", error);
      throw new Error("Errore sconosciuto nel recupero articoli.");
    }
  }
};

export const fetchArticleById = async (id: string): Promise<Article> => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    return await checkResponse(res);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Errore fetchArticleById:", error.message);
      throw new Error("Impossibile recuperare i dettagli dell'articolo.");
    } else {
      console.error("Errore fetchArticleById:", error);
      throw new Error("Errore sconosciuto nel recupero dettagli articolo.");
    }
  }
};
