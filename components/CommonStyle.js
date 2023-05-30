import { StyleSheet } from 'react-native';

export default styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:'30%'
    },
   
  heading:{
    color:'white',
    fontSize:40,
    fontWeight:"bold",
    marginBottom:10,
  },
  subHeading:{
    color:'rgba(255, 255, 255, 0.8)',
    fontSize:20,
    fontWeight:"500",
    marginBottom:30
  },
  text:{
    color:'rgba(255, 255, 255, 0.7)',
    marginVertical:30,
    
  },
  link:{
    color:'blue',
    marginVertical:30,
    marginLeft:10
  },
  button:{
    backgroundColor:'white',
    marginTop:10,
    padding:10,
    borderRadius:20,
    paddingHorizontal:40
  },
  buttonText:{
    fontSize:20,
    color:'#1398DB'
  },
  flexRow:{
    flexDirection:'row',
    marginVertical:20
  },
  inputText:{
    color:'rgba(255, 255, 255, 0.8)',
    fontSize:20,
    borderBottomWidth:1,
    borderBottomColor:'rgba(255, 255, 255, 0.7)',
    width:'80%',
    marginLeft:20
  }
})
