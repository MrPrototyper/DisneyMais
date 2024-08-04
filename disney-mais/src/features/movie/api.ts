import axios from 'axios';
import { Movie } from './movie';

const API_URL = 'https://api.example.com';

export const getMovieData = async (): Promise<{ recommended: Movie[], newDisney: Movie[], originals: Movie[], trending: Movie[] }> => {
    // const response = await axios.get(`${API_URL}/todos`);
    // return response.data;
    return {
        recommended: [{
            id: '1',
            title: 'Inside Out 2',
            description: 'Recommended Movie Description',
            genre: 'Recommended Movie Genre',
            coverUrl: 'https://image.tmdb.org/t/p/original/9l1eZiJHmhr5jIlthMdJN5WYoff.jpg',
        },
        {
            id: '2',
            title: 'new Disney Movie Title',
            description: 'new Disney Movie Description',
            genre: 'new Disney Movie Genre',
            coverUrl: 'https://image.tmdb.org/t/p/original/coATv42PoiLqAFKStJiMZs2r6Zb.jpg',
        },
        {
            id: '3',
            title: 'originals Movie Title',
            description: 'originals Movie Description',
            genre: 'originals Movie Genre',
            coverUrl: 'https://image.tmdb.org/t/p/original/5zmiBoMzeeVdQ62no55JOJMY498.jpg',
        },
        {
            id: '4',
            title: 'High School Musical',
            description: 'Troy, the popular captain of the basketball team, and Gabriella, the brainy and beautiful member of the academic club, break all the rules of East High society when they secretly audition for the leads in the school’s musical. As they reach for the stars and follow their dreams, everyone learns about acceptance, teamwork, and being yourself.',
            genre: 'Music',
            coverUrl: 'https://image.tmdb.org/t/p/original/jNjT5y95BToczcxgVPl1NBB7goY.jpg',
        },
        {
            id: '5',
            title: 'High School Musical',
            description: 'Troy, the popular captain of the basketball team, and Gabriella, the brainy and beautiful member of the academic club, break all the rules of East High society when they secretly audition for the leads in the school’s musical. As they reach for the stars and follow their dreams, everyone learns about acceptance, teamwork, and being yourself.',
            genre: 'Music',
            coverUrl: 'https://image.tmdb.org/t/p/original/askg3SMvhqEl4OL52YuvdtY40Yb.jpg',
        }],
        newDisney: [{
            id: '1',
            title: 'Inside Out 2',
            description: 'Recommended Movie Description',
            genre: 'Recommended Movie Genre',
            coverUrl: 'https://image.tmdb.org/t/p/original/9l1eZiJHmhr5jIlthMdJN5WYoff.jpg',
        },
        {
            id: '2',
            title: 'new Disney Movie Title',
            description: 'new Disney Movie Description',
            genre: 'new Disney Movie Genre',
            coverUrl: 'https://image.tmdb.org/t/p/original/coATv42PoiLqAFKStJiMZs2r6Zb.jpg',
        },
        {
            id: '3',
            title: 'originals Movie Title',
            description: 'originals Movie Description',
            genre: 'originals Movie Genre',
            coverUrl: 'https://image.tmdb.org/t/p/original/5zmiBoMzeeVdQ62no55JOJMY498.jpg',
        },
        {
            id: '4',
            title: 'High School Musical',
            description: 'Troy, the popular captain of the basketball team, and Gabriella, the brainy and beautiful member of the academic club, break all the rules of East High society when they secretly audition for the leads in the school’s musical. As they reach for the stars and follow their dreams, everyone learns about acceptance, teamwork, and being yourself.',
            genre: 'Music',
            coverUrl: 'https://image.tmdb.org/t/p/original/jNjT5y95BToczcxgVPl1NBB7goY.jpg',
        },
        {
            id: '5',
            title: 'High School Musical',
            description: 'Troy, the popular captain of the basketball team, and Gabriella, the brainy and beautiful member of the academic club, break all the rules of East High society when they secretly audition for the leads in the school’s musical. As they reach for the stars and follow their dreams, everyone learns about acceptance, teamwork, and being yourself.',
            genre: 'Music',
            coverUrl: 'https://image.tmdb.org/t/p/original/askg3SMvhqEl4OL52YuvdtY40Yb.jpg',
        }],
        originals: [{
            id: '1',
            title: 'Inside Out 2',
            description: 'Recommended Movie Description',
            genre: 'Recommended Movie Genre',
            coverUrl: 'https://image.tmdb.org/t/p/original/9l1eZiJHmhr5jIlthMdJN5WYoff.jpg',
        },
        {
            id: '2',
            title: 'new Disney Movie Title',
            description: 'new Disney Movie Description',
            genre: 'new Disney Movie Genre',
            coverUrl: 'https://image.tmdb.org/t/p/original/coATv42PoiLqAFKStJiMZs2r6Zb.jpg',
        },
        {
            id: '3',
            title: 'originals Movie Title',
            description: 'originals Movie Description',
            genre: 'originals Movie Genre',
            coverUrl: 'https://image.tmdb.org/t/p/original/5zmiBoMzeeVdQ62no55JOJMY498.jpg',
        },
        {
            id: '4',
            title: 'High School Musical',
            description: 'Troy, the popular captain of the basketball team, and Gabriella, the brainy and beautiful member of the academic club, break all the rules of East High society when they secretly audition for the leads in the school’s musical. As they reach for the stars and follow their dreams, everyone learns about acceptance, teamwork, and being yourself.',
            genre: 'Music',
            coverUrl: 'https://image.tmdb.org/t/p/original/jNjT5y95BToczcxgVPl1NBB7goY.jpg',
        },
        {
            id: '5',
            title: 'High School Musical',
            description: 'Troy, the popular captain of the basketball team, and Gabriella, the brainy and beautiful member of the academic club, break all the rules of East High society when they secretly audition for the leads in the school’s musical. As they reach for the stars and follow their dreams, everyone learns about acceptance, teamwork, and being yourself.',
            genre: 'Music',
            coverUrl: 'https://image.tmdb.org/t/p/original/askg3SMvhqEl4OL52YuvdtY40Yb.jpg',
        }],
        trending: [{
            id: '1',
            title: 'Inside Out 2',
            description: 'Recommended Movie Description',
            genre: 'Recommended Movie Genre',
            coverUrl: 'https://image.tmdb.org/t/p/original/9l1eZiJHmhr5jIlthMdJN5WYoff.jpg',
        },
        {
            id: '2',
            title: 'new Disney Movie Title',
            description: 'new Disney Movie Description',
            genre: 'new Disney Movie Genre',
            coverUrl: 'https://image.tmdb.org/t/p/original/coATv42PoiLqAFKStJiMZs2r6Zb.jpg',
        },
        {
            id: '3',
            title: 'originals Movie Title',
            description: 'originals Movie Description',
            genre: 'originals Movie Genre',
            coverUrl: 'https://image.tmdb.org/t/p/original/5zmiBoMzeeVdQ62no55JOJMY498.jpg',
        },
        {
            id: '4',
            title: 'High School Musical',
            description: 'Troy, the popular captain of the basketball team, and Gabriella, the brainy and beautiful member of the academic club, break all the rules of East High society when they secretly audition for the leads in the school’s musical. As they reach for the stars and follow their dreams, everyone learns about acceptance, teamwork, and being yourself.',
            genre: 'Music',
            coverUrl: 'https://image.tmdb.org/t/p/original/jNjT5y95BToczcxgVPl1NBB7goY.jpg',
        },
        {
            id: '5',
            title: 'High School Musical',
            description: 'Troy, the popular captain of the basketball team, and Gabriella, the brainy and beautiful member of the academic club, break all the rules of East High society when they secretly audition for the leads in the school’s musical. As they reach for the stars and follow their dreams, everyone learns about acceptance, teamwork, and being yourself.',
            genre: 'Music',
            coverUrl: 'https://image.tmdb.org/t/p/original/askg3SMvhqEl4OL52YuvdtY40Yb.jpg',
        }]
    };    
};
