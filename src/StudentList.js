

import React from 'react'
import { connect } from 'react-redux'
import { selectStudent } from './actions/index'



const StudentList=(props)=>{
    const listItems=props.students.map((student)=>{

        return(
            <div key={student.fname}>
            <span>{student.fname}</span>
            <button onClick={()=>props.selectStudents(student)}>Get Details</button>

            
            </div>
        )

    })
    return(
        <div>
        <h2>StudentList</h2>
        <h3>{listItems}</h3>

        </div>
    )
}
    const mapStateToProps=(state)=>{
        return{
        students:state.students
        }
    }
    const mapDispatchToprops={
        
        selectStudents: selectStudent

    

}
export default connect(mapStateToProps,mapDispatchToprops)(StudentList)



