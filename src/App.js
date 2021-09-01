import { Provider } from 'react-redux';
import './App.css';
import Search from './SearchPage/SearchPageContainer';
import store from './redux/store';
import {BrowserRouter, Route} from "react-router-dom";
import CountryPageContainer from "./CountryPage/CountryPageContainer";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Route path="/search" component={Search} />
        <Route path="/countries/:countryName" render={() => <CountryPageContainer />} />
      </Provider>
    </BrowserRouter>
  )
}

export default App;
