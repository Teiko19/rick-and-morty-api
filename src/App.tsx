import './App.css';
import "./Styles/Styles.scss";
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Home } from './Views/Home/Home';
import { Provider } from 'react-redux';
import { store } from './Utils/Redux/Store';
import { ApolloProvider } from '@apollo/client';
import { client } from './Utils/GraphQL/Config';

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <PrimeReactProvider>
          <PrimeReactContext.Consumer>
            {() => <Home />}
          </PrimeReactContext.Consumer>
        </PrimeReactProvider>
      </ApolloProvider>
    </Provider>)
}

export default App