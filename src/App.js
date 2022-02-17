import React from 'react';
// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      quote: "",
      author: ""
    }
    this.newQuote = this.newQuote.bind(this);
  }

  async newQuote() {
    let response = await fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1');
    let data = await response.json();
    this.setState({
      isLoaded: true,
      quote: '"'+data.quotes[0].text+'"',
      author: data.quotes[0].author
    })
  }

  async componentDidMount() {

    let response = await fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1');
    let data = await response.json();
    this.setState({
      isLoaded: true,
      quote: '"'+data.quotes[0].text+'"',
      author: data.quotes[0].author
    })
  }

  render() {

    return <div className="App w-screen flex h-screen bg-beach">
      <div id="quote-box" className='rounded-lg bg-sky-300 m-auto w-1/2'>
        <div id="quote-wrapper" className='p-1 m-1 flex flex-row'>
          <div id="author" className="basis-1/6 mr-2 p-3 rounded-l-lg bg-sky-100">
            <img src='./logo192.png' className=''></img>

          </div>
          <div id="text-content" className='basis-5/6 p-4 rounded-r-lg text-justify bg-sky-100'>
            <p className='text-left'>{this.state.author}</p>
            {this.state.quote}
          </div>
        </div>

        <div id="control-wrapper" className='flex flex-row-reverse my-1 mx-2'>
          <div id="new-quote" onClick={this.newQuote} className='p-2 my-2 ml-2 cursor-pointer rounded-lg transition ease-in-out delay-150 bg-sky-100 hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 duration-300'>
            new quote
          </div>
          <a id="tweet-quote" target="_blank" className='p-2 my-2 mr-1 cursor-pointer rounded-lg transition ease-in-out delay-150 bg-sky-100 hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 duration-300'>
            tweet
          </a>
        </div>
      </div>
    </div>
  }
}

export default App;