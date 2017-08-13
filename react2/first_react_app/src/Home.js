import React,{Component}from 'react';
import './home/css/index.css';
import Head from './home/js/header';
import Main from './home/js/main';
import Footer from './home/js/footer'

class H extends Component{
    constructor(){
      super();
      this.state={
        arr:[
          {txt:'今天天气哈',checked:false,id:1},
          {txt:'明天放假啦',checked:false,id:2}
        ],
        val:'',
        all:false
      }
    }

  showVal=(v)=>{
         this.setState({
             val:v
           })
    }

   showData=(json)=>{
       let {arr}=this.state
       let arr2=Object.assign(arr)
       arr2.push(json)
       this.setState({
           arr:arr2
         })
   }
//点击liinput
   checked=(id)=>{
        let {arr}=this.state;
        let list=Object.assign(arr);
        list.forEach((e,i)=>{
             if(e.id===id){
               e.checked=!e.checked
             }
        })
        this.setState({
          arr:list
        })
     }

 //点击li删除
   delet=(id)=>{
         let {arr}=this.state;
         let list=Object.assign(arr);
         list=list.filter((e,i)=>{
              return e.id !==id
            })
       this.setState({
         arr:list
       })
    }
//点击全选
clickall=(ev)=>{
         let {checked}=ev.target;
         let {arr}=this.state;
         let list=Object.assign(arr);
         list.forEach(e=>e.checked=checked)
         this.setState({
            arr:list
         })

    }
 //清除完成项
  deleClick=()=>{
      let {arr}=this.state
      let list=Object.assign(arr)
      list=list.filter(e=>{
         return e.checked !== true
      })
      this.setState({
        arr:list
      })
  }
  changeText = (newData) => {
    let {arr} = this.state;
    let list = Object.assign(arr);

    list.forEach((e,i)=>{
      if(e.id === newData.id){
        list.splice(i,1,newData)
      }
    });

    this.setState({
      arr:list
    });
  }

a1click=(data)=>{
    this.setState({
      arr:data
    })
}
a2click=(data)=>{
    let data2=null
    data2=data.filter(e=>{
        return e.checked===false
    })
    this.setState({
      arr:data2
    })
}
a3click=(data)=>{
    let data2=null
    data2=data.filter(e=>{
        return e.checked===true
    })
    this.setState({
      arr:data2
    })
}

    render(){
      let {arr}=this.state;
      let List=Object.assign(arr);
      List=List.map((e,i)=>{
          let data={
            txt:e.txt,
            key:i,
            id:e.id,
            checked:e.checked,
            eve:this.checked,
            dele:this.delet,
            changeText:this.changeText
          }
          return <Main {...data} />
      })

      let allclick=this.state.arr.every(e=>e.checked)
      let num=0
      this.state.arr.forEach((e,i)=>{
           if(!e.checked){
             num++
           }
      })


      return(
          <div>
                <Head val={this.state.val}  showVal={this.showVal} showData={this.showData}/>
                <section className="main">
                    <input
                       className="toggle-all"
                       type="checkbox"
                       checked={allclick}
                       onClick={this.clickall}
                      />
                    <ul className="todo-list">{List}</ul>
                </section>
                <footer
                  className="footer" >
                       <Footer
                            deleClick={this.deleClick}
                            num={num} data={this.state.arr}
                            a1click={this.a1click}
                            a2click={this.a2click}
                            a3click={this.a3click}/>
                </footer>
          </div>
       )
    }
}

export default H
