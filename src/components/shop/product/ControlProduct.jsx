import CircumIcons from '@klarr-agency/circum-icons-react';
import styles from '/src/styles/shop/product/ControlProduct.module.css';
export default function ControlProduct(props) {
	return (
		<div
			className='flex justify-between items-center gap-2 self-end p-2'
			data-testid='controlProduct-container'
		>			
								<Link
				className='border-dark-blue '

			>
				<CircumIcons name='circle_info' color='#070912' size='36px'/>





		</div>
	);
}
