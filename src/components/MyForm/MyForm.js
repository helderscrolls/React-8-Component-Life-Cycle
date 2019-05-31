import React, { Component } from 'react'
import './MyForm.css'

class MyForm extends Component {
  state = {
    title: '',
    globalTitle: ''
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input 
            type="textarea"
            name="comment"
          />

        <input type="submit" value="Envoyer"/>
        </form>
      </div>
    )
  }
}

export default MyForm
