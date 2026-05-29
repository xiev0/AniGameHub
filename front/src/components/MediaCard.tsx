/* Anime cover colour palettes for placeholders */
const coverColors = [
  'linear-gradient(135deg,#f472b6,#a78bfa)',
  'linear-gradient(135deg,#6c8ef7,#4dd9d6)',
  'linear-gradient(135deg,#fbbf24,#f97316)',
  'linear-gradient(135deg,#34d399,#4dd9d6)',
  'linear-gradient(135deg,#a78bfa,#6c8ef7)',
  'linear-gradient(135deg,#f472b6,#fbbf24)',
];

export default function MediaCard({id, title, notes, status, genres, rating, episodesWatched, totalEpisodes, onRemove,}: Props) {
  type Props = {
    id: string
    title: string
    notes: string
    status: string
    genres: string[]
    rating: number
    episodesWatched: number
    totalEpisodes: number

    onRemove?: () => void
  }
  return (
      <div className="media-card anim-fade-up">
        <div className="media-card-cover">
          <div
              className="cover-placeholder"
              style={{background: coverColors[0]}}
          >
            <span style={{fontSize: '2.5rem'}}></span>
          </div>
          <div className="media-card-overlay">
            {status && (
                <span className={`badge badge-${
                    status === 'Смотрю' ? 'cyan' :
                        status === 'Просмотрено' ? 'green' :
                            status === 'В планах' ? 'primary' : 'pink'
                }`}>
              {status}
            </span>
            )}
          </div>
        </div>
        <div className="media-card-body">
          <div className="media-card-title">{title}</div>
          <div className="media-card-meta">
            {genres && <span>{genres.join(',')}</span>}
            {totalEpisodes && episodesWatched && <><span>·</span><span>{episodesWatched} / {totalEpisodes} эп.</span></>}
          </div>
          {rating && (
              <div className="media-card-rating">
                <span>⭐</span>
                <span>{rating}</span>
              </div>
          )}
          <button onClick={onRemove}>
            Удалить
          </button>
        </div>
      </div>
  );
}