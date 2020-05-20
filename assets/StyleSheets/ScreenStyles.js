import {StyleSheet } from 'react-native';


export default function Styles ()
{
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D2025',
    flex: 1,
  },
  dotIcon:
  {
    padding: 15
  },
  scroll:
  {
    paddingTop: 20,
    flex: 1,

  },
  whiteText:
  {
    color: 'white',
  },
  searchIcon:
  {
    height: 50,
    padding: 10,
    backgroundColor: '#f4f6f9',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  searchSection:
  {
    backgroundColor: '#3E4C59',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    paddingTop: 50,
    flexDirection: 'row',
  },
  input_bar:
  {
    flex: 1,
    height: 50,
    backgroundColor: '#f4f6f9',
    borderColor: 'white',
    //borderTopRightRadius: 10,
    //borderBottomRightRadius: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: '#424963',
  },
  ButtonText:
  {
    color: 'black',
    fontSize: 15,
  },
  SearchButton:
  {
    backgroundColor: '#EEC8A0',
    paddingHorizontal: 25,
    paddingVertical: 15,
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: 150,
    height: 50,
  },
  img:
  {
    borderColor: 'black',
    height: 65,
    width: 65,
    paddingRight: 50,
  },
  imgcrlc:
    {
      borderColor: 'black',
      height: 65,
      width: 65,
      paddingRight: 50,
      borderRadius: 50,
    },
  songs:
  {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1D2025',
    height: 100,
    color: 'black',
    alignItems: 'center',
    padding: 5


  },
  songInfo:
  {
    width: 250,
    height: 65,
    padding: 10,
  },
  rightBlock:
  {
    height: 65,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }

});

return styles;
}
