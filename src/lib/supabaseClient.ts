import { createClient } from '@supabase/supabase-js'
import { SignupType, SigninType} from '@/types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!)

export const signupService = async ({credentials}:{credentials:SignupType}) => {
    const { data, error} = await supabase.auth.signUp(credentials) 
}

export const signinService = async ({ credentials }: { credentials: SigninType }) => {
    const {data, error} = await supabase.auth.signInWithPassword(credentials)
}