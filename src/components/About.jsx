import styles from '../styles/About.module.css';

export default function About() {
	return (
		<main className={styles.About}>
			<h1 className={styles.introduction}>Hi! my name is Shay Shahal.</h1>
			<p className={styles.para}>
				You can go to my github{' '}
				<a
					href='https://github.com/shayshahal'
					target='_blank'
					className={styles.github}
				>
					here
				</a>
				, where you will find all my projects up until now. <br />
				Here are some noticeable ones:
			</p>
			<div className={styles.siteImages}>
				<a
					className={styles.siteImage}
					href='https://shayshahal.github.io/calculator/'
					target='_blank'
				>
					<h3 className={styles.siteTitle}>Calculator</h3>
					<img
						className={styles.img}
						src='/src/assets/Calculator.png'
						alt='Calculator site image'
						loading='lazy'
					/>
				</a>
				<a
					className={styles.siteImage}
					href='https://shayshahal.github.io/battleship/'
					target='_blank'
				>
					<h3 className={styles.siteTitle}>Battleships game</h3>
					<img
						className={styles.img}
						src='/src/assets/Battleship.png'
						alt='Battleship site image'
						loading='lazy'
					/>
				</a>
				<a
					className={styles.siteImage}
					href='https://shayshahal.github.io/memory-card/'
					target='_blank'
				>
					{<h3 className={styles.siteTitle}>LoL memory game</h3>}
					<img
						className={styles.img}
						src='/src/assets/MemoryCard.png'
						alt='MemoryCard site image'
						loading='lazy'
					/>
				</a>
			</div>
			<h1 className={styles.thanks}>Thanks for visiting!</h1>
		</main>
	);
}
