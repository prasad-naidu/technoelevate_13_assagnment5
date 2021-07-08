import React, { Component } from 'react'
import withCount from '../hoc/withCount'

 class Python extends Component {
    render() {
        console.log(this.props)
      let  {number,inc}=this.props
        return (
            <div>
               <div className="dis">
               <h1>{number}</h1>
                <p>{this.props.name}</p>
                <button onClick={()=>{
                    inc()
                }}>+</button>
               </div>
            </div>
        )
    }
}


export default withCount(Python)