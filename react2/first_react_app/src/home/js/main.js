import React,{Component}from 'react';

class M extends Component{
  constructor(props){
      super(props)
      this.state={
         usename:false
      }

  }
  change=()=>{
      this.props.eve(this.props.id)
      this.setState({
         usename:this.props.checked?"completed":""
      })
  }
  click=()=>{
       this.props.dele(this.props.id)
  }

  dbclick=(ev)=>{
    console.log(ev.target)
    this.setState({
       usename:true
    },()=>{
        this.db.focus()
    })

  }

 blur=(ev)=>{
   this.setState({
      usename:false
   })
   let {id,checked} = this.props;
   let newData = {
     id:id,
     checked:checked,
     txt:this.db.value
   }
    if(this.db.value){
       this.props.changeText(newData);
     }

 }


  render(){
    let sClass=this.props.checked?"":"completed"
    if(this.state.usename===true){
       sClass +=" editing"
    }
    return(
      <li className={sClass}>
             <div className="view">
                 <input
                   className="toggle"
                   type="checkbox"
                   checked={this.props.checked}
                   onChange={this.change}
                    />
              <label onDoubleClick={this.dbclick}>{this.props.txt}</label>
              <button className="destroy" onClick={this.click}></button>

          </div>
          <input
            ref = {(elem) => {this.db = elem}}
            className ="edit"
            onBlur={this.blur}
          />
      </li>
    )
  }
}


export default M
