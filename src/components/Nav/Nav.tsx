import React from 'react';
import styles from './Nav.module.css';
import logo from '../../logo.svg';
import * as data from './links.json';
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
  label: string;
  href: string;
}

const Links: React.FC<{ links: Link[] }> = ({ links }) => {
  return (
    <div className={styles['links-container']}>
      {links.map((link: Link) => {
        return (
          <div key={link.href} className={styles['link']}>
            <a href={link.href}>
              {link.label}
            </a>
          </div>
        )
      })}
    </div>
  )
}

const Nav: React.FC<{}> = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles['logo-container']}>
          <a href='/home'>
            <img src={logo} className={styles['logo']} alt="logo"></img>
          </a>
        </div>
        <Links links={links} />
    </nav>
  )
}

export default Nav