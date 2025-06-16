import { axiosInstance } from "@/lib/axios"

import { SigninType, SignupType } from "@/types"
export const signinHandler = async (userCredentials:SigninType) => {
    try {
        const response = await axiosInstance.post('/auth/signin', userCredentials)
        if(response.status != 200) return
        const data = await response.data
        return data;
    } catch (error) {
       console.error("Error fetching users", error);
    }
}

export const signupHandler = async (userCredentials:SignupType) => {
    try {
        const response = await axiosInstance.post('/auth/signup', userCredentials)
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


