import { KetoRating } from '@/lib/types';

export function KetoRatingBadge({ rating }: { rating: KetoRating }) {
  const config = {
    excellent: {
      stars: 5,
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      starColor: 'text-green-500',
      label: 'Excellent'
    },
    good: {
      stars: 4,
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      starColor: 'text-blue-500',
      label: 'Good'
    },
    moderate: {
      stars: 3,
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-700',
      starColor: 'text-yellow-500',
      label: 'Moderate'
    },
    avoid: {
      stars: 1,
      bgColor: 'bg-red-50',
      textColor: 'text-red-700',
      starColor: 'text-red-500',
      label: 'Avoid'
    },
  }[rating];

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md ${config.bgColor}`}>
      <div className="flex items-center gap-0.5">
        {[...Array(config.stars)].map((_, i) => (
          <svg
            key={i}
            className={`w-3.5 h-3.5 ${config.starColor} fill-current`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className={`text-xs font-medium ${config.textColor}`}>
        {config.label}
      </span>
    </span>
  );
}