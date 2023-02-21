import styles from '../styles/About.module.css';

export default function About() {
	return (
		<main className={styles.About}>
			<h1 className={styles.introduction}>Hi! my name is Shay Shahal.</h1>
			<p className={styles.para}>
				You can go to my github <a href='https://github.com/shayshahal' target='_blank' className={styles.github}>here</a>
				, where you will find all my
				projects up until now. <br />
				Here are some noticeable ones:
			</p>
			<div className={styles.siteImages}>
				<div className={styles.siteImage}>
					<h3 className={styles.siteTitle}>Calculator</h3>
					<img
						className={styles.img}
						src='/Calculator.png'
						alt='Calculator site image'
						loading='lazy'
					/>
				</div>
				<div className={styles.siteImage}>
					<h3 className={styles.siteTitle}>Battleships game</h3>
					<img
						className={styles.img}
						src='/Battleship.png'
						alt='Battleship site image'
						loading='lazy'
					/>
				</div>
				<div className={styles.siteImage}>
					<h3 className={styles.siteTitle}>LoL memory game</h3>
					<img
						className={styles.img} 
						src='/MemoryCard.png'
						alt='MemoryCard site image'
						loading='lazy'
					/>
				</div>
			</div>
			<h1 className={styles.thanks}>Thanks for visiting!</h1>
		</main>
	);
}
