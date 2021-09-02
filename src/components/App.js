import React from 'react'
import {BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom'
import Sidebar from './Sidebar'
import Homepage from './Homepage'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <Router>
                <header>
                <div className = 'header'>
                    <h1>Dashboard</h1>
                    <p>Search Documentation ....</p>
                </div>
            </header>
            <main>
                <Sidebar/>
                <div>
                    <Route path='/' exact>
                        <Homepage/>
                    </Route>
                    
                </div>
                
            </main>
            </Router>
            
        )
    }
}

export default App
