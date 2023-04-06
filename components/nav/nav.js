import Link from 'next/link';
import styles from './nav.module.css';

const Nav = () => { 
    return (
      <nav className={styles.nav}>
        <Link href="/about" >About</Link>
        <Link href="/events">Events</Link>
        <Link href="/blog" >Blog</Link>
        <Link href="/">Home</Link>
      </nav>
    )
  }

export default Nav