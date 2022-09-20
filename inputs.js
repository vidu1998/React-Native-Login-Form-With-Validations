import React,{Component} from 'react'
import{View,Text,TouchableOpacity,TextInput,StyleSheet} from 'react-native'

class Inputs extends Component {
  state={
    name:'',
    email:'',
    password:'',
    tel:''

  }
  handleName=(text)=>{
    this.setState({name:text})
  }
  handleTel=(text)=>{
    this.setState({tel:text})
  }
  handleEmail=(text)=>{
    this.setState({email:text})
  }
  handlePassword=(text)=>{
    this.setState({password:text})
  }

  login=(email,pass,name,tel)=>{
      let atpos = email.indexOf("@");
        let dotpos = email.lastIndexOf(".");
    
     if(email==""&&pass==""&&name==""&&tel==""){
      alert("please enter ")
     }else if(atpos < 1 || ( dotpos - atpos < 2 )){
      alert("please Check Email Again")
     }else if(tel.length<10){
      alert("enter correct tel number")
     }






     else{

         alert('email:'+email+'password: '+pass+'name:'+name+'tel:'+tel)

     }






    



    
  }
    render(){
      return(
        <View style={styles.container}>
        <TextInput style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="name"
        placeholderTextColor="#9a73ef"
        onChangeText={this.handleName}/>   

       <TextInput style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Telephone"
        placeholderTextColor="#9a73ef"
        onChangeText={this.handleTel}/>


        <TextInput style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="email"
        placeholderTextColor="#9a73ef"
        onChangeText={this.handleEmail}/>
        <TextInput style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="password"
        placeholderTextColor="black"
        onChangeText={this.handlePassword}/>
        <TouchableOpacity 
        style={styles.submitButton}
        onPress={
          ()=>this.login(this.state.email,this.state.password,this.state.name,this.state.tel)
        }>
        <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        </View>
      )
    }


  }
export default Inputs

const styles=StyleSheet.create({
  container:{
    paddingTop:50
  },
  input:{
    margin:15,
    height:40,
    borderColor:'#7a42f4',
    borderWidth:1
  },
  submitButton:{
    backgroundColor:'#7a42f4',
    margin:15,
    height:40,
    padding:10,
  },
  submitButtonText:{
    color:'black'
  }
})