import React,{Component}from 'react';

class Headmodl extends Component{
  constructor(props){
    super(props)
    this.state={
      vals:this.props.val
    }
  }

  change=(ev)=>{
    this.setState({
       vals:ev.target.value
    })

  }

 keyup=(ev)=>{
   if(ev.keyCode===13){
      this.props.showVal(ev.target.value);
      let data={
        txt:ev.target.value,
        checked:false,
        id:+new Date()
      }
      this.props.showData(data)
      this.setState({
        vals:''
      })
    }
 }

  render(){
    return(
      <header className="header" >
            <h1>todos</h1>
            <input
                 className="new-todo"
                  placeholder="请输入内容"
                  value={this.state.vals}
                  onChange={this.change}
                  onKeyUp={this.keyup}
                  />
        </header>

    )
  }
}

export default Headmodl
