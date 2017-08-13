import React,{Component}from 'react';
import './comm/Childs.css'
//父组件
class PAR extends Component{
     constructor(){
        super();
        this.state={
           arr:[
             {text:'第一段文字',check:false,id:1},
             {text:'第二段文字',check:false,id:2},
             {text:'第三段文字',check:true,id:3},
             {text:'第四段文字',check:false,id:4},
             {text:'第五段文字',check:false,id:5}]
        }
     }

     changechild=(id)=>{
           let {arr}=this.state;
           arr.forEach((e,i)=>{
              if(e.id===id){
                e.check=!e.check  
                this.setState({
                  arr:arr
                })
              }
           })
        }

     render(){
       let {arr}=this.state;
       let arr2=arr.map((e,i)=>{
               let data={
                 con:e.text,
                 id:e.id,
                 checked:e.check,
                 key:i,
                 cd:this.changechild
               }
               return <CTO {...data}/>
       })
       return(
          <ul>{arr2}</ul>
       )
     }
}


//子组件
class CTO extends Component{
     click=(id)=>{
        this.props.cd(this.props.id)
      }
     render(){
        return(
          <li>
            <input type="checkbox" checked={this.props.checked} onChange={this.click}/>
            <p>{this.props.con}</p>
          </li>
        )
      }
    }







export default PAR
