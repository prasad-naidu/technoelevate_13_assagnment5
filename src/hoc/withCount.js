import React, { Component } from 'react'



export default function withCount(OriginaComponent) {
    
 class Counter extends Component {
     constructor(props){
         super(props)
         this.state={
             number:0
         }
     }

     inc=()=>{
         this.setState({
             number:this.state.number+1
         })
     }
        render() {
            return (
                <div>
                    <OriginaComponent number={this.state.number} inc={this.inc} {...this.props} />
                </div>
            )
        }
    }
    
    return Counter
    
    
}
