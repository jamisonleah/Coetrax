import { AsyncStorage } from "react-native";
import { AuthError } from "expo-auth-session";
const storeKey = 'myPreference';

// var userProfile = {
//     access_token: '',
//     token_type: '',
//     client: '',
//     expiry: '',
//     uid: '',
// }
/* access-token:TobwOhg8cbGd39H4ZAVvrA
token-type:Bearer
client:1GG2ACCH26EuO6AQzt8Z8Q
expiry:1589129715
uid:lxj9480@rit.edu */
export async function storeData(authHeaders){
    AsyncStorage.setItem('access-token', authHeaders.get('access-token'));
    AsyncStorage.setItem('token-type', authHeaders.get('token-type'));
    AsyncStorage.setItem('client', authHeaders.get('client'));
    AsyncStorage.setItem('expiry', authHeaders.get('expiry'));
    AsyncStorage.setItem('uid', authHeaders.get('uid'));
}

export async function retrieveData(){
  try {
      console.log("access token: " + await AsyncStorage.getItem('access-token'));
      console.log("token type: " + await AsyncStorage.getItem('token-type'));
      console.log("client: " + await AsyncStorage.getItem('client'));
      console.log("expiry: " + await AsyncStorage.getItem('expiry'));
      console.log("uid: " + await AsyncStorage.getItem('uid'));
   } catch (error) {
     // Error retrieving data
     console.log(error);
   }
}

export async function retrieveHeader(){
  try {

      const header =
      {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'access-token': await AsyncStorage.getItem('access-token'),
          'token-type': await AsyncStorage.getItem('token-type'),
          client: await AsyncStorage.getItem('client'),
          expiry: await AsyncStorage.getItem('expiry'),
          uid: await AsyncStorage.getItem('uid'),
      }

      return header;
   } catch (error) {
     // Error retrieving data
     console.log(error);
   }
}
