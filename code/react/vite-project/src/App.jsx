import React from "react";

class App extends React.Component{

    constructor(props){
        super(props)
        this.state={
            a:[1,2,3]
        }
    }
    render() {
        return (
             <div>
                
                {this.state.a.map((value,index)=>{
                    return <div key={index}>
                        {value}
                     </div>
                })}

                <button onClick={()=>{
                    const x=this.state.a.length+1
                    let  num=[...this.state.a,x]
                    this.setState({
                        a:num
                    })
                }}>添加</button>
             </div>
        );
    }
}
export default App