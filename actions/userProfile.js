import { AsyncStorage } from "react-native";
const storeKey = 'myPreference';

//This probably where we'll store the user key data 
const userprofile =
{
    access_token: null,
    token_type: null,
    client: null,
    expiry: null,
    uid: null,
}
/* access-token:TobwOhg8cbGd39H4ZAVvrA
token-type:Bearer
client:1GG2ACCH26EuO6AQzt8Z8Q
expiry:1589129715
uid:lxj9480@rit.edu */
storeData = async () => {
  try {
    await AsyncStorage.setItem(storeKey, 'I like to save it.');
  } catch (error) {
    // Error saving data
  }
}

retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem(storeKey);
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
   } catch (error) {
     // Error retrieving data
   }
}
