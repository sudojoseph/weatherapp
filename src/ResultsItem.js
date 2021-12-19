
const ResultsItem = (props) => {
  console.log(props.searchValueResult);
  return(props.searchValueResult.map(result => <li key={result.id} onClick={() => {props.getData(result.name)}}>
    <h2>{result.name}</h2>
    <h2>{result.country}</h2>
  </li>));
}

export default ResultsItem;
