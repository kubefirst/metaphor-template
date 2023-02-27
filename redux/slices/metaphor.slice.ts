/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';

import {
  getHealthz,
  getHealthzNode,
  getInfoApp,
  getInfoAppNode,
  getKubernetesData,
  getVaultData,
} from '../actions/metaphor.action';

export interface MetaphorState {
  isLocal: boolean;
  metaphorNodeJSUrl?: string;
  metaphorGoUrl?: string;

  metaphorGo?: any;
  metaphorGoStatus: boolean;
  metaphorNode: any;
  metaphorNodeStatus: boolean;
  kubernetesScrets: any;
  vaultSecrets: any;
}

export const initialState: MetaphorState = {
  isLocal: false,
  metaphorNodeJSUrl: undefined,
  metaphorGoUrl: undefined,

  metaphorGo: undefined,
  metaphorGoStatus: false,
  metaphorNode: undefined,
  metaphorNodeStatus: false,
  kubernetesScrets: undefined,
  vaultSecrets: undefined,
};

const metaphorSlice = createSlice({
  name: 'metaphor',
  initialState,
  reducers: {
    setConfigValues(state, payload) {
      const { isLocal, metaphorNodeJSUrl, metaphorGoUrl } = payload.payload;
      state.isLocal = isLocal;
      state.metaphorNodeJSUrl = metaphorNodeJSUrl;
      state.metaphorGoUrl = metaphorGoUrl;
    },
  },
  extraReducers(builder) {
    builder.addCase(getHealthz.rejected, (state) => {
      state.metaphorGoStatus = false;
    });
    builder.addCase(getHealthz.fulfilled, (state) => {
      state.metaphorGoStatus = true;
    });
    builder.addCase(getHealthzNode.rejected, (state) => {
      state.metaphorNodeStatus = false;
    });
    builder.addCase(getHealthzNode.fulfilled, (state) => {
      state.metaphorNodeStatus = true;
    });
    builder.addCase(getInfoApp.fulfilled, (state, action) => {
      state.metaphorGo = action.payload;
    });
    builder.addCase(getInfoAppNode.fulfilled, (state, action) => {
      state.metaphorNode = action.payload;
    });
    builder.addCase(getKubernetesData.fulfilled, (state, action) => {
      state.kubernetesScrets = action.payload;
    });
    builder.addCase(getVaultData.fulfilled, (state, action) => {
      state.vaultSecrets = action.payload;
    });
  },
});

export const { setConfigValues } = metaphorSlice.actions;

export default metaphorSlice.reducer;
