
import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import Header from './components/header';
import CityData from './components/city_details';
import Footer from './components/footer';
import _ from 'lodash'

class App extends Component {
  //app constructor, is called upon each state change 
  constructor (props) {
    super(props);

    this.state = {
      city: null,
      state: null,
      json : null
    }

    this.search('Mo','Kansas City')
    
  }//end of constructor 


  // performs the request to get JSON data from weather underground's API 
  search(state,city) {
    const url = 'http://api.wunderground.com/api/c48caab7753ace0d/geolookup/conditions/q/' + state + '/' + city + '.json';
    fetch(url)
      .then((resp) => resp.json())
        .then( (json ) => {
          //set the state of the parent object based on data results 
          this.setState({
            city : city,
            state : state,
            json : json
          });
        });
  }


  render() {
    const search = _.debounce((state,city) => {
      this.search(state,city)
    }, 780);


    // this is where the actual page is rendered and displayed to the end user
    return (
      <div>
        <Header json = {this.state.json} />
        < hr />
        <SearchBar  onSearchTermChange = {search}/>
        <CityData json = {this.state.json} />
        <Footer />
      </div>
    );

  }


}

export default App;
