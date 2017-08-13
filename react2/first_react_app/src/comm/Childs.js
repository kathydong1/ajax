//我自己新建的子组件
  import React,{Component}from 'react'
class Childs extends Component{
   render(){
      return(
          <li>
              <p>{this.props.con}</p>
                <span>{this.props.index}</span>
         </li>
      )
    }
}

export default Childs
