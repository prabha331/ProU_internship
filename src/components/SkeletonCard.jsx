export default function SkeletonCard() {
  return (
    <div className="card skeleton" aria-hidden="true">
      <div className="skeleton-title"></div>
      <div className="skeleton-line"></div>
      <div className="skeleton-line short"></div>
    </div>
  );
}
