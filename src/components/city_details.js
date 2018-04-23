// controlls the details about the selected city
import React from 'react';

// pass the details from the api to this function which will then populate the page with data 
const CityDetails = ({json}) => {
    // if the data isn't loading, display a loading spinner 
    if(!json) {
        return <div className="loadingSpinner"> Loading...</div>
    }


    //var radarLink = `https://www.accuweather.com/en/us/${json.current_observation.city}-${json.current_observation.state}/${json.current_observation.zip}/weather-radar/329437`
    try{
        var summary = createSummary({json});
    return (
        <div className="cityData container text-center">
            <div className="row">
                    <div className="col-md-12 text-center">
                     <h2 className="summary"> Details for {json.current_observation.display_location.full}</h2>
                    <img class="cardImage" src={json.current_observation.icon_url} alt="Card  cap" />
                        <div class="card-body">
                        < hr />
                            <h5 class="card-title">Weather Report</h5>
                            <p>It's currently {json.current_observation.temp_f} F</p>
                            <p>{json.current_observation.precip_today_in}" of rain accumlated today</p>
                            <p>Sky Conditions are {json.current_observation.weather}</p>
                            <p>Wind is {json.current_observation.wind_string} </p>
                            <p>Feels like: {json.current_observation.feelslike_f} F </p>
                            <h2>{summary}</h2>
                        </div>
                    </div>
            </div>
         </div>
    );
    }catch(err){
        return (
            <div className="errorMessage">
            <h1> Oops! It looks like the city you're searching for doesn't exist! </h1>
        </div>
        )
    }
}

// function to create a summary to inform the user about todays conditions 
function createSummary({json}) {
    var cold;
    var raining;
    var snow;
    var summary;

    if(json.current_observation.feelslike_f < 60) {
        cold = true;
    }

    if(json.current_observation.precip_1hr_in > 0.00) {
        raining = true;
    }

    if (raining && cold && json.current_observation.feelslike_f <= 32.00) {
        snow = true;
    }

    if(json.current_observation.feelslike_f < 50 ) {
        summary = "It's a bit chilly today.";
    }

    if(!cold && !raining){
        summary = "It's a warm day, with no rain for the next hour. Better go outside fatty.";
    }

    if(cold && raining) {
        summary = "It's cold and rainy today, better bring a jacket!";
    }

    if(snow) {
        summary = "It could be snowing today, better dress warm!";
    }

    if(json.current_observation.feelslike_f > 75) {
        summary = "It's a hot one today."
    }

    if(cold) {
        summary = "It's a chilly day out, be sure to bring a jacket!";
    }

    else {
        summary = "It's a pretty normal day outside, nothing crazy to report.";
    }

    return summary;
}

export default CityDetails;

