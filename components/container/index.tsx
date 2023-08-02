import React, { FunctionComponent, useEffect } from 'react';

import Header from '../header';
import Main from '../main';
import { useAppDispatch, useAppSelector } from '../../redux/store';

import {
  getHealthz,
  getInfoApp,
  getHealthzNode,
  getInfoAppNode,
  getKubernetesData,
  getVaultData,
} from 'redux/actions/metaphor.action';
import {
  selectIsLocal,
  selectMetaphorGoUrl,
  selectMetaphorNodeJSUrl,
} from 'redux/selectors/metaphor.selector';

const Container: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const isLocal = useAppSelector(selectIsLocal());
  const metaphorNodeGoApiUrl = useAppSelector(selectMetaphorGoUrl());
  const metaphorNodeJSApiUrl = useAppSelector(selectMetaphorNodeJSUrl());

  useEffect(() => {
    const getMetaphorGoData = async () => {
      await dispatch(getHealthz(metaphorNodeGoApiUrl)).unwrap();
      await dispatch(getInfoApp(metaphorNodeGoApiUrl)).unwrap();
    };

    const getMetaphorNodeJSData = async () => {
      await dispatch(getHealthzNode(metaphorNodeJSApiUrl)).unwrap();
      await dispatch(getInfoAppNode(metaphorNodeJSApiUrl)).unwrap();
      await dispatch(getKubernetesData(metaphorNodeJSApiUrl)).unwrap();
      await dispatch(getVaultData(metaphorNodeJSApiUrl)).unwrap();
    };

    if (metaphorNodeGoApiUrl && !isLocal) {
      getMetaphorGoData();
    }

    if (metaphorNodeJSApiUrl) {
      getMetaphorNodeJSData();
    }
  }, [dispatch, isLocal, metaphorNodeGoApiUrl, metaphorNodeJSApiUrl]);

  return (
    <div id="container">
      <Header />
      <Main />
    </div>
  );
};

export default Container;
