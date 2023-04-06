import Link from 'next/link';
import Date from '../../components/date';

export default function Card ( props ) {
    return (
      <Link key={props.id} href={`/blog/${props.id}`}>
        <div className='rounded-md border dark:border-gray-700 dark:bg-gray-800 p-6 hover:shadow-xl transition-shadow'>
            <h3 className='text-3xl font-bold leading-snug tracking-tight mb-2 truncate'>
              {props?.title || 'Untitled'}
            </h3>
            
            <div className='text-sm'>
              <small className='text-gray-500'>
                <Date dateString={props.date} />
              </small>
            </div>
            <p className='text-gray-500'>
              {props?.excerpt?.slice(0,250) || ''}
            </p>
        </div>
      </Link>
    )
}