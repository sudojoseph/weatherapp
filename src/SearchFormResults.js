import React, {Component} from 'react';
import ResultsItem from './ResultsItem'

const SearchFormResults = (props) => {
  if (props.showDropDown) {
    return(
      <div>
        <ul>
          <ResultsItem searchValueResult={props.searchValueResult} getData={props.getData}/>
        </ul>
      </div>
    );
  } else {
    return(<h1></h1>)
  }
}

export default SearchFormResults;
