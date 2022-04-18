/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { fontFamily, fontSize, gray2 } from './Styles';
import React from 'react';
import { Header } from './header';
import { HomePage } from './HomePage';

function App() {
  return (
    <div
      css={css`
        font-family: ${fontFamily};
        font-size: ${fontSize};
        color: ${gray2};
      `}
    >
      <Header />
      <HomePage />
    </div>
  );
}
export default App;
