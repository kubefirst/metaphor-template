import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

import { wrapper } from '../redux/store';

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <main id="app">
      <Head>
        <title>Metaphor Frontend</title>
        <link rel="shortcut icon" href="/static/k-ray.svg" />
      </Head>
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    </main>
  );
}

export default App;
