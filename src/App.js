import logo from './logo.svg';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import reset from 'styled-reset';
import Main from './components/Main';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    box-sizing:  border-box;
    margin: 0 auto;
  }

  * {
    box-sizing: inherit;
  }

  .cursor-pointer {
    cursor: pointer;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Main />}/>
      </Routes>
    </>
    
  );
}

export default App;
