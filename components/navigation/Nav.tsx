'use client'
import { usePathname } from 'next/navigation';
import Button from '../button/Button'
import styles from './Nav.module.css'
import path from 'path';
export default function Nav() {
  const pathname = usePathname();  // current path: 

  return (
    <nav>
      <ul className={styles.navUl}>
        <li className={pathname === "/"? styles.active: ""}>
          <Button label="Home" href="/" />
        </li>
        <li className={pathname === "/about"? styles.active: ""}>
          <Button label="About" href="/about" />
        </li>
        <li className={pathname === "/topics"? styles.active: ""}>
          <Button label="Topics" href="/topics" />
        </li>
        <li className={pathname === "/questions"? styles.active: ""}>
          <Button label="All Questions" href="/questions" />
        </li>
        <li className={pathname === "/users"? styles.active: ""}>
          <Button label="All Users" href="/users" />
        </li>
      </ul>
    </nav>
  );
}
