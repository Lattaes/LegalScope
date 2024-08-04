import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const token = Cookies.get('token');
    const [chatHistory, setChatHistory] = useState([]);
    
    useEffect(() => {
        const fetchUserProfile = async () => {
            if (token) {
                console.log('Token fetch (useEffect):', token);
                try {
                    const response = await axios.get('http://127.0.0.1:3000/profile/getProfile', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        },
                        withCredentials: true
                    });
                    setUser(response.data.user);
                } catch (error) {
                    console.log('Error fetching user info:', error.response ? error.response.data : error.message);
                }
            } else {
                console.log('No token found');
            }
        };
        fetchUserProfile();
    }, [token]);

    console.log('Token after fetch (useEffect):', token);

    const updateProfile = async (profileData) => {
        if (token) {
            console.log('Token update (updateProfile):', token);
            try {
                const formData = new FormData();
                formData.append('firstName', profileData.firstName);
                formData.append('lastName', profileData.lastName);
                if (profileData.profilePicture) {
                    const blob = await fetch(profileData.profilePicture).then(r => r.blob());
                    formData.append('profilePicture', blob, 'profilePicture.jpg');
                }

                const response = await axios.put('http://127.0.0.1:3000/profile/updateProfile', formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data'
                    },
                    withCredentials: true
                });

                setUser(response.data.user);
                return response.data;
            } catch (error) {
                console.error('Error updating profile:', error.response ? error.response.data : error.message);
                throw error;
            }
        } else {
            console.error('No token available');
            throw new Error('No token available');
        }
    };

    const sendMessage = async (sender, message) => {
        if (token) {
            console.log('Token send message (updateProfile):', token);
            try {
                const response = await axios.post('http://127.0.0.1:3000/message/sendMessages', { sender, message }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                });

                setChatHistory(response.data.data.messages);
                return response.data.data;
            } catch (error) {
                console.error('Error sending message:', error.response ? error.response.data : error.message);
                throw error;
            }
        } else {
            console.error('No token available');
            throw new Error('No token available');
        }
    };

    const getChatHistory = async (userId) => {
        if (token) {
            try {
                const response = await axios.get(`http://127.0.0.1:3000/messages/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    withCredentials: true
                });

                setChatHistory(response.data.data.messages);
                return response.data.data;
            } catch (error) {
                console.error('Error fetching chat history:', error.response ? error.response.data : error.message);
                throw error;
            }
        } else {
            console.error('No token available');
            throw new Error('No token available');
        }
    };

    return (
        <UserContext.Provider value={{ user, setUser, updateProfile, sendMessage, getChatHistory, chatHistory, setChatHistory }}>
            {children}
        </UserContext.Provider>
    );
}

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};