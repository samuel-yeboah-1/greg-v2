type SigninType = {
    email: string;
    password: string;
}
type SignupType = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export type { SigninType, SignupType };