import styles from '../styles/About.module.css';

export default function About() {
	return (
		<main className={styles.About}>
			<h1>Hi! my name is Shay Shahal</h1>
			<p>
				You can go to my github <a>here</a>, there you will find all my
				projects up until now. <br />
				Here are some noticeable ones:
			</p>
			<div className={styles.siteImages}>
				<div className={styles.siteImage}>
					Calculator
					<img
						src={'/Calculator.png'}
						alt='Calculator site image'
					/>
				</div>
				<div className={styles.siteImage}>
					Battleships game
					<img
						src={'/Battleship.png'}
						alt='Battleship site image'
					/>
				</div>
				<div className={styles.siteImage}>
					League of Legends memory game
					<img
						src={'/MemoryCard.png'}
						alt='MemoryCard site image'
					/>
				</div>
			</div>
		</main>
	);
}
