import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { ThemeProvider, createGlobalStyle,styled } from 'styled-components';
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container=styled.div`
margin:0;
padding : 0;
display:flex;
`;

const Main=styled.div`
flex:7;
background-color:${({theme})=>theme.bg}
`;
const Wrapper =styled.div``;

function App() {
  const [darkMode,setDarkMode]=useState(true)
  return (
    <ThemeProvider theme={darkMode?darkTheme:lightTheme}>
    <Container>
      <GlobalStyle />
      <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main>
        <Navbar />
        <Wrapper>
          video cards
        </Wrapper>
      </Main>
    </Container>
    </ThemeProvider>
    
  );
}

export default App;
