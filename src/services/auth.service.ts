import { axiosInstance } from "@/lib/axios"
import { SigninType, SignupType } from "@/types"
const signinHandler = async (userCredentials:SigninType) => {
    try {
        const response = await axiosInstance.post('/auth/signin', userCredentials)
        if(response.status != 200) return
        const data = await response.data
        return data;
    } catch (error) {
       console.error("Error fetching users", error);
    }
}

const signupHandler = async (userCredentials:SignupType) => {
    try {
        const response = await axiosInstance.post('/auth/signup', userCredentials)
        if(response.status != 200) return
        const data = await response.data
        return data;
    } catch (error) {
        console.error("Error fetching users", error);
    }
}
export {signinHandler,signupHandler}