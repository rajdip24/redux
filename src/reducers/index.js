

import { combineReducers } from "redux"
const studentsReducer=()=>{

    return[

        {fname:"Rajdip",lname:"Dukare",branch:"Mech",mobile:982626262626},
        {fname:"Aditya",lname:"Dukare",branch:"Mech",mobile:982626262626},
        {fname:"Vaibhav",lname:"Dukare",branch:"Mech",mobile:982626262626},
        {fname:"Rajshri",lname:"Dukare",branch:"Mech",mobile:982626262626},
        {fname:"Himani",lname:"Dukare",branch:"Mech",mobile:982626262626},
        {fname:"Payal",lname:"Dukare",branch:"Mech",mobile:982626262626},
        {fname:"Nikhil",lname:"Dukare",branch:"Mech",mobile:982626262626},
        {fname:"Akhil",lname:"Dukare",branch:"Mech",mobile:982626262626},
        {fname:"Kajal",lname:"Dukare",branch:"Mech",mobile:982626262626},
        {fname:"Ashwin",lname:"Dukare",branch:"Mech",mobile:982626262626},
        {fname:"Rajesh",lname:"Dukare",branch:"Mech",mobile:982626262626}
    ]

}


const selectedStudentReducer=(state=null,action)=>{
    switch(action.type){
        case 'STUDENT_SELECT':
            return action.payload
            default :
            return state

    }
}

export default combineReducers({students:studentsReducer,selectedStudent:selectedStudentReducer})
