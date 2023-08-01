/*
 * Copyright (c) 2023 by MILOSZ GILGA <http://miloszgilga.pl>
 *
 * File name: machine-modes.ts
 * Last modified: 7/31/23, 11:14 PM
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

export enum MachineModes {
    IDLE = "IDLE",
    STOPPED = "STOPPED",
    RUNNING = "RUNNING",
    RESET = "RESET",
    LOOP = "LOOP",
    FINISH = "FINISH",
    BACKWARD = "BACKWARD",
    FORWARD = "FORWARD",
    COMPILE_PROGRAM = "COMPILE_PROGRAM",
    COMPILE_SUCCESSFUL = "COMPILE_SUCCESSFUL",
    COMPILE_FAILURE = "COMPILE_FAILURE",
    DEBUGGING = "DEBUGGING",
    AJAX_ERROR_LOAD = "AJAX_ERROR_LOAD",
    SUCCESSFULLY_LOAD_PROGRAM = "SUCCESSFULLY_LOAD_PROGRAM",
}
