/*
 * Copyright (c) 2023 by MILOSZ GILGA <http://miloszgilga.pl>
 *
 * File name: redux-store.ts
 * Last modified: 7/31/23, 11:21 PM
 * Project name: react-ts-turing-simulator
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *     <http://www.apache.org/license/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the license.
 */

import { configureStore } from "@reduxjs/toolkit";

import { machineStoreReducer } from "~/app-redux/machine-store/reducer";
import { preferencesStoreReducer } from "~/app-redux/preferences-store/reducer";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const reduxStore = configureStore({
    reducer: {
        machine: machineStoreReducer,
        preferences: preferencesStoreReducer,
    },
    devTools: process.env.BUILD_ENV === "dev",
});

export type RootState = ReturnType<typeof reduxStore.getState>;
