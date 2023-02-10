import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<main className={styles.home}>
			<span className={styles.welcome}>Welcome to</span>
			<h1 className={styles.siteName}>Shopping Cart</h1>
			<span
				className={styles.credit}
				data-testid='paragraph'
			>
				A project by Shay Shahal, following The Odin Project curriculum.
			</span>
			<Link
				className={styles.shopLink}
				to='/Shop'
			>
				Go to Shop →
			</Link>
		</main>
	);
}
