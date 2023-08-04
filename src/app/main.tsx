import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { persistor, store } from './store';
import { apolloClient } from '../shared/lib/providers/apollo-provider';

import App from './app';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ApolloProvider client={apolloClient}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
