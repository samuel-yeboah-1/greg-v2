import { axiosInstance } from "@/lib/axios"

import { SigninType, SignupType } from "@/types"
export const signinHandler = async (userCredentials:SigninType) => {
    try {
        const response = await axiosInstance.post('/auth/login', userCredentials)
        if(response.status != 200) return
        const data = await response.data
        return data;
    } catch (error) {
       console.error("Error fetching users", error);
    }
}

export const signupHandler = async (userCredentials:SignupType) => {
    try {
        const response = await axiosInstance.post('/auth/register', userCredentials)
        if(response.status != 200) return
        const data = await response.data
        return data;
    } catch (error) {
        console.error("Error fetching users", error);
    }
}
export const verifyToken = async (token: string) => {
    if(!token) return null
    try {
        const response = await axiosInstance.post('/auth/verifyToken', {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.status === 200;
    } catch (error) {
        console.error("Token verification failed:", error);
        return false;
    }
};


/**
 * Initiates Google OAuth login flow by redirecting the browser
 * to the backend login endpoint, which will handle redirection to Google.
 * 
 * @param provider The OAuth provider to use (e.g., 'google')
 */
export const oauthHandler = (provider: string) => {
    const loginUrl = `https://gregmvp-backend.onrender.com/api/v1/auth/login/${provider}`;
    window.location.href = loginUrl;
  };
  