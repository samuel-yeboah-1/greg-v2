import { axiosInstance } from "@/lib/axios";
import { AxiosError } from "axios";

import { SigninType, SignupType } from "@/types";
export const signinHandler = async (userCredentials: SigninType) => {
  try {
    const response = await axiosInstance.post("/auth/login", userCredentials);
    if (response.status === 200) return response.data;
    return {
      success: false,
      message: "Unexpected response from server",
    };
  } catch (error) {
    const err = error as AxiosError<any>;
    if (err.response) {
      const { status, data } = err.response;
      if (status === 404 && data.message) {
        return {
          success: false,
          message: data.message || "No account found",
        };
      }
      return {
        success: false,
        message: data?.message || "An error occured during signin.",
      };
    }
    console.error("Sign-in error:", error);
    return {
      success: false,
      message: "Network error. Please try again.",
    };
  }
};

export const signupHandler = async (userCredentials: SignupType) => {
  try {
    const response = await axiosInstance.post("/auth/register", userCredentials);

    // Accept 200 or 201 (Created)
    if (response.status === 200 || response.status === 201) {
      return {
        success: true,
        ...response.data,
      };
    }

    return {
      success: false,
      message: "Unexpected server response.",
    };
  } catch (error) {
    const err = error as AxiosError<any>;

    if (err.response) {
      const { data, status } = err.response;

      // Capture specific messages if available
      return {
        success: false,
        message: data?.message || `Signup failed with status ${status}.`,
      };
    }

    // Network or unknown error
    console.error("Signup error:", error);
    return {
      success: false,
      message: "Network error. Please try again.",
    };
  }
};


export const verifyToken = async (token: string) => {
  if (!token) return null;
  try {
    const response = await axiosInstance.post(
      "/auth/verifyToken",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
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
