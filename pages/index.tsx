import { AppProps } from 'next/app';
import React, { useEffect } from 'react';

import Container from '../components/container';
import { useAppDispatch } from '../redux/store';

import { setConfigValues } from 'redux/slices/metaphor.slice';

export default function Home({
  pageProps: { metaphorNodeJSUrl, metaphorGoUrl, isLocal },
}: AppProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setConfigValues({ isLocal: isLocal === 'true', metaphorNodeJSUrl, metaphorGoUrl }));
  }, [dispatch, isLocal, metaphorGoUrl, metaphorNodeJSUrl]);

  return <Container />;
}

export async function getServerSideProps() {
  const {
    METAPHOR_JS_API_BASE_URL = '',
    METAPHOR_GO_API_BASE_URL = '',
    IS_LOCAL = false,
  } = process.env;

  return {
    props: {
      metaphorNodeJSUrl: METAPHOR_JS_API_BASE_URL,
      metaphorGoUrl: METAPHOR_GO_API_BASE_URL,
      isLocal: IS_LOCAL,
    },
  };
}
