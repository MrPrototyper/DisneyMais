import axios from 'axios';
import { Movie } from './movie';

const API_URL = 'https://api.example.com';

export const getMovieData = async (): Promise<{ recommended: Movie[], newDisney: Movie[], originals: Movie[], trending: Movie[] }> => {
    // const response = await axios.get(`${API_URL}/todos`);
    // return response.data;
    return {
        recommended: [{
            id: '1',
            title: 'Recommended Movie Title',
            description: 'Recommended Movie Description',
            genre: 'Recommended Movie Genre',
            coverUrl: 'https://via.placeholder.com/150',
        }],
        newDisney: [{
            id: '10',
            title: 'new Disney Movie Title',
            description: 'new Disney Movie Description',
            genre: 'new Disney Movie Genre',
            coverUrl: 'https://via.placeholder.com/150',
        }],
        originals: [{
            id: '100',
            title: 'originals Movie Title',
            description: 'originals Movie Description',
            genre: 'originals Movie Genre',
            coverUrl: 'https://via.placeholder.com/150',
        }],
        trending: [{
            id: '200',
            title: 'trending Movie Title',
            description: 'trending Movie Description',
            genre: 'trending Movie Genre',
            coverUrl: 'https://via.placeholder.com/150',
        }]
    }
    // return null;
};