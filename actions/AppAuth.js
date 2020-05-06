
const SERVER_URL = "http://159.203.160.33/"
const SIGN_IN_ENDPOINT = "auth/sign_in"

export default async function SignIn(email = '', password = '') {
    try {
        console.log(email);
        console.log(password);
        let response = await fetch(SERVER_URL + SIGN_IN_ENDPOINT, {
            method: 'POST',
            
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        let json = await response.json();
        console.log(json)
    } catch (error) {
        console.log(error)
    }
} 