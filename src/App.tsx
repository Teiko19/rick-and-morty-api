import './App.css';
import "./Styles/Styles.scss";
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Provider } from 'react-redux';
import { store } from './Utils/Redux/Store';
import { ApolloProvider } from '@apollo/client';
import { client } from './Utils/GraphQL/Config';
import { RouterComponent } from './Components/Generals/RouterComponent/RouterComponent';
import { Loader } from './Components/Atomics/Loader/Loader';
import { MenuNav } from './Components/Generals/MenuNav/MenuNav';

export default function App() {

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <PrimeReactProvider>
          <PrimeReactContext.Consumer>
            {() =>
              <div className="flex flex-column w-full h-screen">
                <MenuNav />
                <Loader />
                <RouterComponent />
              </div>}
          </PrimeReactContext.Consumer>
        </PrimeReactProvider>
      </ApolloProvider>
    </Provider>)
}