import { useEffect, useMemo, useState } from "react";
import { Row, Col, Card, Spinner, Alert, Badge, Ratio } from "react-bootstrap";

export type DeezerTrack = {
  id: number;
  title: string;
  artist: {
    id?: number;
    name: string;
  };
  album: {
    id?: number;
    title?: string;
    cover?: string;
    cover_medium?: string;
  };
};

export interface ApiCardProps {
  query?: string;
  limit?: number;
  compact?: boolean;
}

const ApiCard = ({
  query = "T.S.O.L.",
  limit = 10,
  compact = false,
}: ApiCardProps) => {
  const [tracks, setTracks] = useState<DeezerTrack[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const endpoint = useMemo(
    () =>
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${encodeURIComponent(
        query
      )}`,
    [query]
  );

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(endpoint, { signal: controller.signal });
        if (!res.ok)
          throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
        const json = await res.json();
        const data: DeezerTrack[] = Array.isArray(json?.data) ? json.data : [];
        setTracks(data);
      } catch (err) {
        if (err instanceof Error) {
          if (err.name !== "AbortError")
            setError(err.message || "Errore sconosciuto");
        } else {
          setError("Errore sconosciuto");
        }
      } finally {
        setLoading(false);
      }
    })();
    return () => controller.abort();
  }, [endpoint]);

  const items = useMemo(() => tracks.slice(0, limit), [tracks, limit]);

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="h4 mb-0 text-light">Nuove uscite · {query}</h2>
        <Badge bg="dark" pill>
          {items.length}
        </Badge>
      </div>

      {error && (
        <Alert variant="danger" className="mb-3">
          <strong>Errore:</strong> {error}
        </Alert>
      )}

      {loading && (
        <div className="d-flex align-items-center gap-2 mb-3">
          <Spinner animation="border" size="sm" role="status" />
          <span>Caricamento…</span>
        </div>
      )}

      <Row xs={2} sm={3} md={4} lg={5} className="g-4">
        {items.map((t) => (
          <Col key={t.id} className="d-flex">
            <Card
              border="dark"
              bg="dark"
              text="light"
              className="flex-fill h-100"
            >
              <Ratio aspectRatio="1x1">
                <Card.Img
                  src={
                    t.album?.cover_medium ||
                    t.album?.cover ||
                    "https://via.placeholder.com/300?text=No+Cover"
                  }
                  alt={`${t.title} cover`}
                />
              </Ratio>
              <Card.Body className="d-flex flex-column px-0">
                <Card.Title
                  className={`mb-1 ${compact ? "fs-6" : "fs-5"}`}
                  title={t.title}
                >
                  {t.title}
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-secondary"
                  title={t.artist?.name}
                >
                  {t.artist?.name}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {!loading && !error && items.length === 0 && (
        <div className="text-center text-secondary py-5">Nessun risultato</div>
      )}
    </>
  );
};

export default ApiCard;
