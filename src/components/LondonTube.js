import React from 'react'
import axios from 'axios'

class LondonTube extends React.Component {
  constructor() {
    super()

    this.state = {
      lines: null,
      error: null
    }

  }

  componentDidMount(){
    this.getTubeData()
  }

  getTubeData() {
    axios.get('https://api.tfl.gov.uk/line/mode/tube/status')
      .then(res => this.setState({ lines: res.data }))
      .catch(err => this.setState({ error: err.message }))
  }
  
  render() {
    const { lines } = this.state
    return (
      <div className="tube">
        <h2 className="tubeLine">Tube status</h2>
        <ul>
          {lines &&
        lines.map(line => {
          return <li key={line.id}>
            <p>{line.name} - {line.lineStatuses[0].statusSeverityDescription}</p>
          </li>
        })
          }
        </ul>
      </div>
    )
  }
}

export default LondonTube