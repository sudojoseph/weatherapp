import React, {Component} from 'react';
import SearchForm from './SearchForm.js';

class Results extends Component   {
  constructor() {
    super();
    this.state = {
      resultData: false,
      name: '',
      currentTempC: '',
      currentTempF: '',
      celsius: true,
      searchValue: '',
      searchValueResult: [],
      showDropDown: false
    }
    this.getData = this.getData.bind(this);
    this.celsiusSwitch = this.celsiusSwitch.bind(this);
    this.hideResults = this.hideResults.bind(this);
    this.showResults = this.showResults.bind(this);
  }

  getData = (location) => {
    fetch('https://api.weatherapi.com/v1/current.json?key=923e1da84dc548518ca50607211312&aqi=no&q=' + location)
    .then(response => response.json())
    // .then(results => console.log(results))
    .then(results => {
      this.setState(state => ({
        resultData: true,
        currentTempC: results.current.temp_c + ' °C',
        currentTempF: results.current.temp_f + ' °F',
        name: location
      })
    );
    this.hideResults();
  })
  }

  typeSearch = (parm) => {
    this.typeSearchApiCall(parm);
  }

  typeSearchApiCall = (parm) => {
    fetch('http://api.weatherapi.com/v1/search.json?key=923e1da84dc548518ca50607211312&q=' + parm)
    .then(response => response.json())
    .then(results => {this.setState({searchValueResult: results})});
  }

  celsiusSwitch = () => {
    this.setState({
      celsius: !this.state.celsius
    });
  }

  hideResults() {
    this.setState({
      showDropDown: false
    });
    console.log('piep')
  }

  showResults() {
    this.setState({
      showDropDown: true
    });
  }


  render() {
    return(
      <div>
        <h1>What is the current tempeture in ...</h1>
        <SearchForm
        hideResults={this.hideResults}
        showResults={this.showResults}
        showDropDown={this.state.showDropDown}
        typeSearch={this.typeSearch}
        searchValueResult={this.state.searchValueResult}
        getData={this.getData}/>
        <div className="button" onClick={this.celsiusSwitch}>Change to {!this.state.celsius ? 'Celsius' : 'Farenheid'}</div>
        <h1>{!this.state.resultData ? '' : 'it is currently '}{!this.state.celsius ? this.state.currentTempF : this.state.currentTempC} {!this.state.resultData ? '' : 'in ' + this.state.name }</h1>
      </div>

    );
  }
}

export default Results
