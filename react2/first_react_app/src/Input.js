import React,{Component} from 'react';
import Childs from './comm/Childs';
import './comm/Childs.css'
class Input extends Component{
    constructor(){
       super();
       this.state={
         val:'',
         arr:[]
       }
    }

    change=(ev)=>{
         this.setState({
            val:ev.target.value
         })
    }

    keyup=(ev)=>{
        if(ev.keyCode===13){
             let {arr}=this.state
             let arr2=arr
             arr2.push(ev.target.value)
             this.setState({
               arr:arr2,
               val:''
             })
        }
    }

    render(){
        let {arr}=this.state
        let newarr=Object.assign(arr)
       newarr=newarr.map((e,i)=>{
          let data={
               con:e,
               key:i,
               index:i
              }
        return <Childs {...data}/>
      })
      return(
         <div>
            <input type="text" value={this.state.val} onChange={this.change} onKeyUp={this.keyup}/>
            <ul>{newarr}</ul>

         </div>
      )
    }
}

export default Input
