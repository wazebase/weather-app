import { Switch, Route } from "react-router-dom";
import WeatherApp from './containers/WeatherApp';


const App = () => {
    return (
  
      <div id="app-div">
        <Switch>
            <Route exact path='/' component={WeatherApp} />
        </Switch>
    
          </div>
    )
    }

    export default App;