import React from 'react'
import axios from 'axios'

import Quote from './Quote'
import '../../src/style.scss'

class ShowPage extends React.Component {
  constructor() {
    super()

    this.state = {
      weather: null,
      errorData: null, 
      errorNews: null,
      news: null
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickCity = this.handleClickCity.bind(this)
    this.getData = this.getData.bind(this)
  }
  
  handleClick() {
    location.reload()
  }

  handleClickCity() {
    this.props.history.push('/')
  }
  
  componentDidMount() {
    this.getData()
  }

  // componentDidUpdate() {
  //   if (!this.state.news && this.state.weather) return this.getNews()
  // }

  getData() {
    const token = process.env.REACT_APP_WEATHER_ACCESS_KEY
    const city = this.props.match.params.id
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${token}`)
      .then(res => this.setState({ weather: res.data }, this.getNews))
      .catch(err => this.setState({ errorData: err }))
  }

  getNews() {
    const tokenNews = process.env.REACT_APP_NEWS_ACCESS_KEY
    const country = this.state.weather.sys.country
    axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${tokenNews}`)
      .then(res => this.setState({ news: res.data.articles }))
      .catch(err => this.setState({ errorNews: err }))
  }
  
  render() {
    //  MUST ALWAYS HAVE THE RETURN NULL BEFORE TRYING TO RETRIEVE THINGS INSIDE THE OBJECT:
    if (!this.state.weather) return null
    const { weather, news, errorData } = this.state
    console.log(news)
    return (
      <>
      <section className="main">
        <section className="top">
          {errorData &&
            <h1>This City Does not Exist</h1>
          }
          <section className="weather">
            <h2>The weather in {weather.name} is:</h2>
            <h3>The tempterature will be between:</h3>
            <p>{Math.round(weather.main.temp_min - 273.15)}°C - {Math.round(weather.main.temp_max - 273.15)}°C</p>
            <div className="animal">
              <div className={weather.weather[0].main}>{weather.weather[0].description}</div>
            </div>
          </section>
          <section className="random">
            <Quote />
          </section>
        </section>
        <section className="bottom">
          <div className="news">
            {news &&
            <h2>Local News</h2>
            }
            <ul>
              {news &&
            news.filter((article, index) => (index < 5)).map(article => {
              return <li key={article.url}>
                <p src={article.url}>{article.title}</p>
                <a href={article.url}>
                  <p>Read Full Story</p>
                </a>
              </li>
            })}
            </ul>
          </div>
          <div className="buttons">
            <button className="buttons" onClick={this.handleClick}>Refresh</button>
            <button className="buttons new" onClick={this.handleClickCity}>Choose a Different City</button>
          </div>
        </section>
      </section>
      </>
    )
  }
}

export default ShowPage

//.filter((i, index) => (index < 3))

//.then(res => this.setState({ news: res.data.articles }))
//if (this.state.weather && !this.state.news) return this.getData()
// .then(res => console.log(res.data.articles))

{/* <ul>
        {lines &&
        lines.map(line => {
          return <li key={line.id}>
            <p>{line.name}</p>
            <p>{line.lineStatuses[0].statusSeverityDescription}</p>
          </li>
        })
        }
      </ul> */}