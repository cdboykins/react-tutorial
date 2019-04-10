import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  
  
  render () {
    return (<div>
      hellow tyyrururu
      <Crazy />
      <img src ="/img/bape.png"/>
      
      Hello World
      </div>)
  }
}

var Crazy = function() {
  return (<header>
      <ul>
        <li>onhghghghe</li>
        <li>thghghghghwo</li>
        <li>thgfgfgfgfgfree</li>
      </ul>
  </header>)
    
  }




const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
