/*
 * Copyright (c) 2022, by Miłosz Gilga <https://miloszgilga.pl>
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

import { createGlobalStyle } from 'styled-components';
import { DarkThemeType, LightThemeType } from './theme.styles';

export const GlobalStyles = createGlobalStyle<{ theme: LightThemeType | DarkThemeType }>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        width: 100%;
        font-family: "JetBrains Mono", sans-serif;
        color: ${({ theme }) => theme.TEXT};
        background-color: ${({ theme }) => theme.BODY};
    }
    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 1360px;
    }
`;