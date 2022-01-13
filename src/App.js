import React, { Component } from 'react';
import StudentDetails from './StudentDetails';
import StudentList from './StudentList';

 class App extends Component {
  render() {
    return (
      <div>
      <StudentList/>
    
      <StudentDetails/>
        
      </div>
    );
  }
}
export default App;