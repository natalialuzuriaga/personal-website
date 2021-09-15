import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage.js";
import ResumePage from "./pages/ResumePage.js";
import ProjectsPage from "./pages/ProjectsPage.js";
import BlogsPage from "./pages/BlogsPage.js";
import { Route, Switch } from "react-router";


function App() {
  return (
    <div className= "App">
      <Sidebar />

      <MainContentStyle>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
        <Switch>
          <Route path="/" exact>
            <HomePage />
            </Route>
            <Route path="/home" exact>
            <HomePage />
            </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/experience" exact>
            <ResumePage />
          </Route>
          <Route path="/projects" exact>
            <ProjectsPage />
          </Route>
          <Route path="/blogs" exact>
            <BlogsPage />
          </Route>
        </Switch>
      </MainContentStyle>
      </div>
  );
}

const MainContentStyle = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

  .lines{
    position: absolute;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  };
`;
export default App;