import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from './redux/store';
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import 'react-toastify/dist/ReactToastify.css';
import './index.css';


const App = lazy(() => import('./App'))
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});
const persister = persistStore(store);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<p>Loading...</p>}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </PersistGate>
      <ToastContainer />
    </Provider>
  </Suspense>
);
