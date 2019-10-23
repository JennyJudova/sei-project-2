import React from 'react'
import axios from 'axios'

class Quote extends React.Component {
  constructor() {
    super()

    this.state = {
      fact: null, 
      error: null
    }
    this.getFact = this.getFact.bind(this)
  }

  componentDidMount() {
    this.getFact()
  }

  getFact() {
    axios.get('https://uselessfacts.jsph.pl/random.json?language=en')
      .then(res => this.setState({ fact: res.data.text }))
      .catch(err => this.setState({ error: err }))
  }

  render() {

    const { fact } = this.state

    return (
      <p className="fact">{fact} <br/> - Random Fact</p>
    )
  }
}

export default Quote