import Link from 'next/link'
import { CommandLineIcon } from "@heroicons/react/24/outline";

const Logo = () => (
    <Link href="/">
        <div className="flex items-center space-x-1 text-blue-600">
            <CommandLineIcon className="h-8 w-8 flex-shrink-0" />
            <span className="whitespace-nowrap text-lg font-bold tracking-tight">
            Tech hacks with Ash
            </span>
        </div>
    </Link>
)


export default Logo;