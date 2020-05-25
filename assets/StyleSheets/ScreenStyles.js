import {StyleSheet} from 'react-native';


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
    height: 35,
    padding: 10,
    backgroundColor: '#15171A',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  searchSection:
  {
    top: 20,
    backgroundColor: '#1D2025',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    padding: 25,
    flexDirection: 'row',
  },
  input_bar:
  {
    flex: 1,
    height: 35,
    backgroundColor: '#15171A',
    borderColor: 'white',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: 'white',
  },
  ButtonText:
  {
    color: 'black',
    fontSize: 15,
  },
  SearchButton:
  {
    backgroundColor: '#35bb9b',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: 100,
    height: 35,
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
  },
  smallBlock:
  {
      //backgroundColor: 'blue',
      width: 100,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
      flex: 1,

  },
  bigBlock:
  {
      width: 210,
      height: 210,
      //backgroundColor: 'coral',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5
  },
  mosaic:
  {
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: 'black',

  },
  blockgroup:
  {
    flexDirection: 'column',

  },
  lengthyBlock:
  {

  },
  zane:
  {
    width: 250,
    height: 250,
  },
  bigfavs:
  {

    width: 210,
    height: 210,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: .5,

  },
  smallfavs:
  {

    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,

  },
  mosaicCover:
  {
    justifyContent: 'center',
    alignItems: 'center',
  },
  center:
  {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    fontWeight: 'bold',
    textAlign: 'center',

  }

});

return styles;
}
