import Link from 'next/link';
import Date from '../../components/date';

export default function Card(props) {
  return (
    <Link href={`/blog/${props.id}`} className="block min-w-0 group">
      <div className="rounded-md border dark:border-gray-700 dark:bg-gray-800 p-6 hover:shadow-xl transition-shadow h-full flex flex-col">
        <h3 className="text-xl sm:text-2xl font-bold leading-snug tracking-tight mb-2 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {props?.title || 'Untitled'}
        </h3>

        <div className="flex items-center gap-2 text-sm mb-3 text-gray-500">
          <Date dateString={props.date} />
          {props.readingTime && (
            <>
              <span>·</span>
              <span>{props.readingTime} min read</span>
            </>
          )}
        </div>

        <p className="text-gray-500 dark:text-gray-400 text-sm flex-1 line-clamp-2">
          {props?.excerpt?.slice(0, 200) || ''}
        </p>

        {props.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {props.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
