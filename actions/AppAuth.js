
const SERVER_URL = "http://159.203.160.33/"

const SIGN_IN_ENDPOINT = "auth/sign_in"
const SIGN_UP_ENDPOINT = "auth"

//console.log(response.status) //-- HTTP response code    
//console.log(response.json()); //-- Json Object with data

export async function signIn(email = '', password = '') {
    try {
        const response = await fetch(SERVER_URL + SIGN_IN_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        
        return response
    } catch (error) {
        console.log(error)
    }
} 

export async function signUp(email = '', password = '', passwordConfirmation = '') {
    try {
        const response = await fetch(SERVER_URL + SIGN_UP_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
                password_confirmation: passwordConfirmation
            })
        });

        return response
    } catch (error) {
        console.log(error)
    }
} 