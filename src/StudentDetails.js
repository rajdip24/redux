

import React from 'react'
import { connect } from 'react-redux'

const StudentDetails=(props)=>{
    if(!props.selectedStudent)
    {
        return(
            <div>
            <h2>Select Student</h2>
            
            </div>
        )
    }
    else{
        return(
            <div>
            <h1>student</h1>
            <div>
            <p>First Name:{props.selectedStudent.fname}</p>
            <p>Last Name:{props.selectedStudent.lname}</p>
            <p>Branch:{props.selectedStudent.branch}</p>
            <p>Mobile:{props.selectedStudent.mobile}</p>
            </div>

            
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
    selectedStudent:state.selectedStudent
    }
}

export default connect(mapStateToProps)(StudentDetails)
