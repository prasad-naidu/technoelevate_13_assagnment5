import withCount from "../hoc/withCount";

import React, { Component } from 'react'

 class Go extends Component {
    render() {
        let {number,inc}=this.props

        return (
            <div>
                 <div className="dis" style={{marginTop:"10px"}}>
                    <h1>{number} </h1>
                    <p>{this.props.name}</p>
                    <button onClick={()=>{
                        inc()
                    }}>+</button>
                </div>
            </div>
        )
    }
}

export default withCount(Go)