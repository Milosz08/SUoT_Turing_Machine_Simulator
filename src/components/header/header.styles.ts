/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: header.styles.ts
 *   Created at: 2023-08-01, 00:58:03
 *   Last updated at: 2023-08-30, 18:40:28
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
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1920px;
  margin: 50px 0;
  display: flex;
  justify-content: space-around;
`;

export const HeaderSingleNavContainer = styled.nav`
  width: calc((100% - 400px) / 2);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderMainTitleContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderMainTitle = styled(NavLink)`
  font-size: 1.6rem;
  line-height: 1;
  font-weight: 500;
  color: ${({ theme }) => theme.TEXT};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const HeaderAsideText = styled.p`
  font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
  font-size: 0.9rem;
  margin: 5px 0;
`;
