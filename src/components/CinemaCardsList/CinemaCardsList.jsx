import { useState } from 'react';
import CinemaCard from '../CinemaCard/CinemaCard';
import styles from './styles.module.css';

function CinemaCardsList() {
	const [cinemaList, setCinemaList] = useState([
		{
			id: 1,
			name: 'Cinema 1',
			image: './img/cinema_preview.jpg',
			rating: 50,
			isFavorites: false
		},
		{
			id: 2,
			name: 'Cinema 2',
			image: './img/cinema_preview.jpg',
			rating: 5000,
			isFavorites: false
		},
		{
			id: 3,
			name: 'Cinema 3',
			image: './img/cinema_preview.jpg',
			rating: 1234,
			isFavorites: false
		},
		{
			id: 4,
			name: 'Cinema 4',
			image: './img/cinema_preview.jpg',
			rating: 754,
			isFavorites: true
		},
		{
			id: 5,
			name: 'Cinema 5',
			image: './img/cinema_preview.jpg',
			rating: 4323,
			isFavorites: false
		},
		{
			id: 6,
			name: 'Cinema 6',
			image: './img/cinema_preview.jpg',
			rating: 645,
			isFavorites: true
		},
		{
			id: 7,
			name: 'Cinema 7',
			image: './img/cinema_preview.jpg',
			rating: 123,
			isFavorites: false
		},
		{
			id: 8,
			name: 'Cinema 8',
			image: './img/cinema_preview.jpg',
			rating: 4234,
			isFavorites: false
		}
	]);

	return (
		<div className={styles['cinema-list']}>
			{cinemaList.map((cinema) => (
				<CinemaCard key={cinema.id} cinema={cinema} />
			))}
		</div>
	);
}

export default CinemaCardsList;
