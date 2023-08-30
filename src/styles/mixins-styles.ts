/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: mixins-styles.ts
 *   Created at: 2023-08-01, 00:05:43
 *   Last updated at: 2023-08-30, 18:30:17
 *   Project name: turing-machine-simulator
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *   <http://www.apache.org/license/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the license.
 */
import styled, { css } from 'styled-components';
import { NonChangeValues } from './theme-styles';

export const BorderElement = ({
  _textColour,
  _bgcColour,
  _content,
}: {
  _textColour: string;
  _bgcColour: string;
  _content: string;
}) => css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1300px;
  border: 1px solid ${NonChangeValues.BORDER_COLOUR};
  border-radius: 5px;
  &::after {
    position: absolute;
    content: '${_content}';
    width: fit-content;
    white-space: nowrap;
    top: -9px;
    padding: 0 10px;
    left: 50%;
    transform: translateX(-50%);
    color: ${_textColour};
    background-color: ${_bgcColour};
    font-size: 0.8rem;
    text-transform: uppercase;
  }
`;

export const MainContainer = () => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1300px;
  margin: 30px 0;
`;

export const ControlButton = ({
  _fontWeight,
  _bgcColour,
  _textColour,
  _disabledColour,
  _ifSquare,
}: {
  _fontWeight: string;
  _bgcColour: string;
  _textColour: string;
  _disabledColour: string;
  _ifSquare?: boolean;
}) => css`
  padding: ${_ifSquare ? '6px' : '6px 15px'};
  width: ${_ifSquare ? 40 : 200}px;
  border-radius: 5px;
  font-size: 1rem;
  letter-spacing: -1px;
  font-weight: ${_fontWeight};
  margin: 0 5px;
  background-color: ${_bgcColour};
  color: ${_textColour};
  &:disabled {
    background-color: ${_disabledColour};
  }
`;

export const Header2 = styled.h2`
  margin-bottom: 30px;
  text-align: center;
`;
