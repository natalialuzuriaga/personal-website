import styled from "styled-components";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <AppStyled>
      <Sidebar />
    </AppStyled>
  );
}

const AppStyled = styled.div`
background-color: black;
`;
export default App;
