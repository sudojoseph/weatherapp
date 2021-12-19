import React, {Component} from 'react';
import SearchFormResults from './SearchFormResults';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value.length >= 3);
    this.setState({
      value: event.target.value
    });
    if (event.target.value.length >= 3) {
      this.props.showResults();
      this.props.typeSearch(event.target.value);
    } else {
      this.props.hideResults();
    }
  }

  render(props) {
    return(
      <div>
        <form>
          <input value={this.state.value} onChange={this.handleChange}></input>
        </form>
        <SearchFormResults
          showResults={this.props.showResults}
          showDropDown={this.props.showDropDown}
          searchValueResult={this.props.searchValueResult}
          getData={this.props.getData}/>
      </div>
    );
  }
}

export default SearchForm;
