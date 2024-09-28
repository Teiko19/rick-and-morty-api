import './App.css';
import "./Styles/Styles.scss";
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Home } from './Views/Home/Home';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';

function App() {

  return (
    <Provider store={store}>
      <PrimeReactProvider>
        <PrimeReactContext.Consumer>
          {() => <Home />}
        </PrimeReactContext.Consumer>
      </PrimeReactProvider>
    </Provider>)
}

export default App