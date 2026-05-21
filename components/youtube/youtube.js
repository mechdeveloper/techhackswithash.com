export default function YouTube({ id }) {
  return (
    <div className="relative w-full overflow-hidden" style={{ paddingBottom: '56.25%' }}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        title="Embedded YouTube video"
        className="absolute inset-0 w-full h-full border-0"
      />
    </div>
  );
}
