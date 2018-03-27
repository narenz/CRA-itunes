import React, { Component } from 'react';
import Hello from './Hello';
import Profile from './profile/Profile';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: 'James',
      data: []
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      searchQuery: e.target.value,
      data: this.state.data
    });
  }

  onSubmitHandler(e) {
    const URL = `https://itunes.apple.com/search?term=${this.state.searchQuery}&country=us&entity=movie`;
    this.getResults(URL);
  }

  async getResults(URL) {
    const response = await fetch(URL);
    const jsonResults = await response.json();
    this.setState({
      searchQuery: this.state.searchQuery,
      data: jsonResults
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <Hello
          searchStr={this.state.searchQuery}
          callBack={this.onChangeHandler}
          submitResults={this.onSubmitHandler} />
          <Results data={this.state.data}></Results>
      </div>
    );
  }
}

class Results extends React.Component {
  render() {
    console.log('this.props.data: ', this.props.data.results);
    return (
      <ul>
        {this.props.data.results ?
          this.props.data.results.map((item, i) => <Profile key={i} {...item} />)
          : <p> no results</p>
        }
      </ul>
    );
  }
}

export default App;
