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
