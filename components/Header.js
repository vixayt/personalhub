import Link from 'next/link';
import Head from 'next/head';
import styles from './Header.module.css';
import { Navbar } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Navbar.Brand>
        <Link href="/">
          <a className="navbar-brand">Home</a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About Me</a>
            </Link>
          </li> */}
          <li className="nav-item">
            <Link href="/weather">
              <a className="nav-link">Weather</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/stocks">
              <a className="nav-link">Stocks</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/budget">
              <a className="nav-link">Budget</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/calendar">
              <a className="nav-link">Calendar</a>
            </Link>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
}
