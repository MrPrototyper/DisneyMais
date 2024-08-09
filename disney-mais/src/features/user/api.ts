import axios from 'axios';
import { User } from './user';

const API_URL = 'https://api.example.com';

export const fetchUserData = async (): Promise<User | null> => {
    // const response = await axios.get(`${API_URL}/todos`);
    // return response.data;
    // return {
    //     name: 'John Doe',
    //     email: 'doe.jonh@disney.fake',
    //     photo: 'https://via.placeholder.com/150',
    // }    
    return null;
};

export const triggerLogin = async (loginInfo: {email: string, password: string}): Promise<User | null> => {
    // const response = await axios.get(`${API_URL}/todos`);
    // return response.data;    
    return {
        name: 'John Doe',
        email: 'doe.jonh@disney.fake',
        photo: 'https://via.placeholder.com/150',
    }    
    // return null;
};