import Head from 'next/head';
import Header from '../components/Header';
import Layout from '../components/Layout';
import ReactAnimatedWeather from 'react-animated-weather';

function Weather({ data }) {
  console.log(data);
  let city = data.city;
  city = city.charAt(0).toUpperCase() + city.slice(1);

  const getWeatherIcon = (param) => {
    switch (param) {
      case 'clear-day':
        return 'CLEAR_DAY';
      case 'clear-night':
        return 'CLEAR_NIGHT';
      case 'partly-cloudy-day':
        return 'PARTLY_CLOUDY_DAY';
      case 'partly-cloudy-night':
        return 'PARTLY_CLOUDY_NIGHT';
      case 'cloudy':
        return 'CLOUDY';
      case 'rain':
        return 'RAIN';
      case 'sleet':
        return 'SLEET';
      case 'snow':
        return 'SNOW';
      case 'wind':
        return 'WIND';
      case 'fog':
        return 'FOG';
    }
  };

  return (
    <Layout>
      <Head>
        <title>Home Weather</title>
        <script src="https://rawgithub.com/darkskyapp/skycons/master/skycons.js"></script>
      </Head>
      <div>Current Weather for {city}</div>
      <br />
      <div className="card mx-auto" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Today's Forecast</h5>
          <p className="card-text">
            Current: {data.darkWeather.currently.temperature}&#8457;
            <ReactAnimatedWeather
              color="orange"
              icon={getWeatherIcon(data.darkWeather.currently.icon)}
            />
          </p>
        </div>
      </div>
      <div
        className="weather-scroll"
        style={{ overflow: 'auto', whiteSpace: 'nowrap' }}
      >
        {data.darkWeather.daily.data.map((weather) => {
          let date = new Date(weather.time * 1000);
          return (
            <div
              className="card"
              style={{ width: '18rem', display: 'inline-block' }}
            >
              <div className="card-body">
                <h5 className="card-title">{date.toDateString()}</h5>
                <p className="card-text">
                  Low: {weather.temperatureLow}&#8457;
                </p>
                <p className="card-text">
                  High: {weather.temperatureHigh}&#8457;
                </p>
                <ReactAnimatedWeather
                  color="orange"
                  icon={getWeatherIcon(weather.icon)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://ng7sjo6lva.execute-api.us-west-2.amazonaws.com/Prod/`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Weather;
