import React, { Component } from 'react'
import './MyForm.css'

class MyForm extends Component {
  state = {
    title: '',
    globalTitle: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  componentDidMount() {
    console.log("Formulaire Rendu")
  }

  submitForm = (event) => {
    event.preventDefault()
    this.setState({ globalTitle: `Mon formulaire - ${this.state.title}` })
  }

  componentDidUpdate() {
    console.log("Titre Changé")
  }

  render() {

    return (
      <div className="Form">
        <form onSubmit={this.submitForm}>
          <fieldset>
            <input
              type="text"
              id="title"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />

            <hr />
            <input
              type="submit"
              value="Envoyer" />
          </fieldset>
        </form>
      </div>
    )
  }
}

export default MyForm
