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

    return <div className="App w-screen flex h-screen bg-beach font-sans">
      <div id="quote-box" className='rounded-lg bg-yellow m-auto w-1/2 bg-opacity-75'>
        <div id="quote-wrapper" className='p-1 m-1 flex flex-row text-black'>
          <div id="author" className="basis-1/6 mr-2 p-3 rounded-l-lg bg-blue bg-opacity-20">
            <img src='./logo192.png' className=''></img>

          </div>
          <div id="text-content" className='basis-5/6 p-4 rounded-r-lg text-justify bg-blue bg-opacity-20'>
            <p className='text-left font-bold'>{this.state.author}</p>
            {this.state.quote}
          </div>
        </div>

        <div id="control-wrapper" className='flex flex-row-reverse my-1 mx-2'>
          <div id="new-quote" onClick={this.newQuote} className='text-white bg-button bg-opacity-50 p-1 my-2 ml-2 cursor-pointer rounded-md transition ease-in-out delay-150 bg-sky-100 hover:-translate-y-1 hover:scale-110 hover:bg-opacity-100 duration-300'>
            New Quote
          </div>

          <a id="tweet-quote" target="_blank" href={"https://twitter.com/intent/tweet?text=" + encodeURI(this.state.quote + "-" + this.state.author)} className='text-white bg-twt bg-opacity-50 p-1 my-2 mr-1 cursor-pointer rounded-md transition ease-in-out delay-150 bg-sky-100 hover:-translate-y-1 hover:scale-110 hover:bg-opacity-100 duration-300'>
            Tweet
          </a>
        </div>
      </div>
    </div>
  }
}

export default App;