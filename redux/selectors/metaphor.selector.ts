import { createSelector } from '@reduxjs/toolkit';

import { MetaphorState } from '../slices/metaphor.slice';
import { RootState } from '../store';

const metaphorSelector = (state: RootState): MetaphorState => state.metaphor;

export const selectGoStatus = () =>
  createSelector(metaphorSelector, ({ metaphorGoStatus }) => !!metaphorGoStatus);

export const selectNodeStatus = () =>
  createSelector(metaphorSelector, ({ metaphorNodeStatus }) => !!metaphorNodeStatus);

export const selectGoAppData = () =>
  createSelector(metaphorSelector, ({ metaphorGo }) => metaphorGo || {});

export const selectNodeAppData = () =>
  createSelector(metaphorSelector, ({ metaphorNode }) => metaphorNode || {});

export const selectKubernetesData = () =>
  createSelector(metaphorSelector, ({ kubernetesScrets }) => kubernetesScrets || {});

export const selectVaultData = () =>
  createSelector(metaphorSelector, ({ vaultSecrets }) => vaultSecrets || {});

export const selectIsLocal = () => createSelector(metaphorSelector, ({ isLocal }) => !!isLocal);

export const selectMetaphorNodeJSUrl = () =>
  createSelector(metaphorSelector, ({ metaphorNodeJSUrl }) => metaphorNodeJSUrl || '');

export const selectMetaphorGoUrl = () =>
  createSelector(metaphorSelector, ({ metaphorGoUrl }) => metaphorGoUrl || '');
