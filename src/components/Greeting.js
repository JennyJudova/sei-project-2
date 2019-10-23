import React from 'react'

class Greeting extends React.Component {
  constructor() {
    super()

    this.state = {
      greeting: null,
      prettyYou: null
    }
    this.getGreeting = this.getGreeting.bind(this)
    this.getPretty = this.getPretty.bind(this)
  }

  componentDidMount() {
    this.getGreeting()
    this.getPretty()
  }

  getGreeting() {
    const now = Date.now()
    let date = new Date(now)
    date = JSON.stringify(date)
    let currentTime = parseInt('' + date[12] + date[13])
    currentTime += 1 

    let greeting = ''

    if (currentTime >= 6 && currentTime < 12) {
      greeting = 'Good Morning  '
    } else if (currentTime >= 12 && currentTime < 18) {
      greeting = 'Good Afternoon  '
    } else if (currentTime >= 18) {
      greeting = 'Good Evening  '
    } else greeting = 'Good Night  '

    this.setState({ greeting })  
  }

  getPretty() {
    const prettyArray = ['  Munchkin', '  Sausage', '  Puppet', '  Piglet', '  Cookie', '  Beautiful', '  Pumpkin', '  Little troll', '  Little cabbage', '  My flea', '  Honey', '  Cookie', '  Darling' ]
    const prettyYou = prettyArray[Math.floor(Math.random() * (prettyArray.length))]
    this.setState({ prettyYou })
  }

  render() {
    const { greeting, prettyYou } = this.state
    return (
      <div>
        <h1 className=''>{greeting}{prettyYou}</h1>
      </div>
    )
  }
}

export default Greeting
