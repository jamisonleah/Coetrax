
const SERVER_URL = "http://159.203.160.33/"
const SIGN_IN_ENDPOINT = "auth/sign_in"

export default async function Auth_SignIn(email = '', password = '') {
    try {
        const response = await fetch(SERVER_URL + SIGN_IN_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email : email,
                password : password
            })
        })
        // console.log(response.status) //-- HTTP response code    
        // console.log(json); //-- Json Object with data
        //return processResponse(response);
    } catch (error) {
        console.log(error)
    }
} 

function processResponse(response) {
    const statusCode = response.status;
    const data = response.json();
    return Promise.all([statusCode, data]).then(result => ({
      statusCode: result[0],
      data: result[1]
    }));
  }