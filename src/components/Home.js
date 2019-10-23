// Refactoring notes
// - added submit on 'enter'
// - replaced 'Iam a londoner' function with Link 
// - the code before refactoring is bellow the new code

import React from 'react'
import { Link } from 'react-router-dom'

import Greeting from './Greeting'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      city: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.keyPress = this.keyPress.bind(this)
  }

  handleChange(e) {
    this.setState({ city: e.target.value  })
  }

  handleSubmit() {
    if (!this.state.city) return null
    this.props.history.push(`/weather/${this.state.city}`)
  }

  //Added submission on Enter
  keyPress(e){
    if (e.keyCode === 13) return this.handleSubmit()
  }

  render() {
    return (
      <>
          <div className="container">
            <Greeting />
            <p className="subtitle is-2 has-text-centered">Where do you live?</p>
          </div>
          <section className="home">
            <input className="input" 
              onKeyDown={(e) => this.keyPress(e)}
              onChange={(e) => this.handleChange(e)}
              placeholder="Type in your city" 
            />
            <button className="button city" onClick={this.handleSubmit}>HIT ME!</button>
          </section>
          <div className="london">
            <Link to={'/weather/London'} style={{ textDecoration: 'none' }}>
              <button className="button london">HEY - I&apos;M A LONDONER!</button> 
            </Link>
          </div>
          <div className="flying">
            <img className="catGif" src="http://giphygifs.s3.amazonaws.com/media/sIIhZliB2McAo/giphy.gif"></img>
          </div>
      </>
    )
  }
}

export default Home




// //BEFORE REFACTORING
// import React from 'react'

// import Greeting from './Greeting'


// class Home extends React.Component {
//   constructor() {
//     super()

//     this.state = {
//       city: null
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(e) {
//     const city = e.target.value
//     console.log(city)
//     this.setState({ city })
//   }

//   handleSubmit(e) {
//     e.preventDefault()
//     if (!this.state.city) return null
//     this.props.history.push(`/weather/${this.state.city}`)
//   }

//   handleSubmitLondon(e) {
//     e.preventDefault()
//     this.props.history.push('/weather/London')
//   }

//   componentDidMount(){
//     console.log('mounted')
//   }

//   render() {
  
//     return (
//       <>
//           <div className="container">
//             <Greeting />
//             <p className="subtitle is-2 has-text-centered">Where do you live?</p>
//           </div>
//           <section className="home">
//             <input className="input" onChange={(e) => this.handleChange(e)}
//               placeholder="Type in your city" 
//             />
//             <button className="button city" onClick={(e) => this.handleSubmit(e)} type="submit">LET'S GO!</button>
//           </section>
//           <div className="london">
//             <button className="button london" onClick={(e) => this.handleSubmitLondon(e)} type="submit">HEY- I AM A LONDONER</button>
//           </div>
//           <div className="flying">
//             <img className="catGif" src="http://giphygifs.s3.amazonaws.com/media/sIIhZliB2McAo/giphy.gif"></img>
//           </div>
//       </>
//     )
//   }
// }

// export default Home