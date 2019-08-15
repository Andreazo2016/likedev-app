import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5',
        justifyContent:'center',
        alignItems:'center'
    },
    textInput:{
        backgroundColor:'#fff',
        marginTop:10,
        padding:10,
        width: width * 0.7,
        borderRadius:4
    },
    btn:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        backgroundColor:'red',
        height:40,
        width: width * 0.7,
        borderRadius:4
    },
    btnText:{
        fontFamily:'arial',
        fontSize:15,
        color:'#fff'
    },
    placeHolder:{
        color:'#fff',
    }
});

export default styles; 