import {StyleSheet, Dimensions} from 'react-native';


export default function Styles ()
{
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#2B3037',
    flex: 1,
    alignItems: 'center',
    color: 'white',
  },
  break:
  {
      margin: 10
  },
  button_text: {
    color: 'white',
    fontSize: 15,
  },
  button_one: {
    margin: 25,
    backgroundColor: '#35bb9b',
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center'
  },
  failed_login_text: {
    color: 'coral'
  },
  h1: {
    alignItems: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'multicolore'
  },
  header:
  {
    marginTop: 75,
    height: 100,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',

  },
  hyperlink: {
    color: '#35bb9b',
  },
  input_container: {
    color: 'black',
    alignItems: 'center'
  },
  input_bar:
  {
    margin: 5,
    height: 40,
    width: 350,
    backgroundColor: '#15171A',
    borderRadius: 10,
    padding: 10,
    color: 'white',
  },
  white_text: {
    color: 'white',
  },




});

return styles;
}
