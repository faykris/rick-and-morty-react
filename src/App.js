import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import GetCharacters from './Components/GetCharacters/GetCharacters';
import Header from "./Components/Header/Header";
import Favorites from "./Components/Favorites/Favorites";
import Details from "./Components/Details/Details";
import Exercise2 from "./Components/Exercise2/Exercise2";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    // eslint-disable-next-line
    graphQLErrors.map(({ message, locations, path }) => {
      alert(`GraphQL error: ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: 'https://rickandmortyapi.com/graphql' })
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});


function App() {
  return (
    <div className='App'>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<GetCharacters />}/>
            <Route exact path="/favorites" element={<Favorites />}/>
            <Route exact path="/details/:id" element={<Details />}/>
            <Route exact path="/exercise2" element={<Exercise2 />}/>
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
