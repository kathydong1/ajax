import React,{Component} from 'react'

class F extends Component{
   constructor(props){
        super(props)
        this.state={
           data:this.props.data
        }
   }
   deleClick=()=>{
     this.props.deleClick()
   }

  clicka1=()=>{
     this.props.a1click(this.state.data)
  }
  clicka2=()=>{
    this.props.a2click(this.state.data)
  }
  clicka3=()=>{
    this.props.a3click(this.state.data)
  }


    render(){
      return(
        <div>
            <span className="todo-count">
                <strong>{this.props.num}</strong>
                <span>条未选中</span>
            </span>
            <ul className="filters">
                <li>
                  <a href="#/all" className="selected" onClick={this.clicka1}>全部</a>
                </li>
                <li>
                  <a href="#/active" onClick={this.clicka2}>未完成</a>
                </li>
                <li>
                  <a href="#/completed" onClick={this.clicka3}>已完成</a>
                </li>
            </ul>
            <button
              className="clear-completed"
              onClick={this.deleClick}
            >
                清除完成项
            </button>
        </div>
      )
    }
}
export default F
