
///我自己新建的父组件
import React,{Component}from 'react';
import Childs from './comm/Childs.js';
import './comm/Childs.css';
class Head extends Component{
        constructor(){
          super()
          this.state={
            arr:['page1','page2','page3']
          }
        }

                  clickfn=()=>{
                     let {arr}=this.state
                     let num=Object.assign(arr)
                     num.push('shasha子')
                     this.setState({
                       arr:num
                     })
                  }
        render(){
          let {arr}=this.state
          let list=arr.map((e,i)=>{
             let data={
               con:e,
               index:i,
               key:i
             }
             return <Childs {...data}/>
          })


          return(
              <div>
                <button
                       onClick={this.clickfn}
                >button</button>
                <ul>{list}</ul>
              </div>
          )
        }
}

export default Head
