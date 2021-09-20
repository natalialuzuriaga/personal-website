import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ProjectsPage from "./pages/ProjectsPage";
import WorkshopsPage from "./pages/WorkshopsPage";
import BlogPage from "./pages/BlogsPage";

import { Route, Switch as Switching } from "react-router";
import Switch from '@material-ui/core/Switch'
import Brightness4Icon from '@material-ui/icons/Brightness4';


function App() {
  const [theme, setTheme] = useState('light-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if(theme === 'light-theme') {
      setTheme('dark-theme');
      setChecked(true);
    } else {
      setTheme('light-theme');
      setChecked(false);
    }
  }

  return (
    <div className= "App">
      <Sidebar navToggle={navToggle}/>

      <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon/>
          </div>
          <div className="right-content">
            <Switch
              value=""
              checked={checked}
              inputProps={{'aria-label': ''}}
              size="medium"
              onClick={themeToggler}
            />
          </div>
        </div>
      </div>

      <MainContentStyle>
        <Switching>
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
          <Route path="/workshops" exact>
            <WorkshopsPage />
          </Route>
          <Route path="/blog" exact>
            <BlogPage />
          </Route>
        </Switching>
      </MainContentStyle>
      </div>
  );
}

const MainContentStyle = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width:1200px){
    margin-left: 0;
  }
  /* .lines{
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
  }; */
`;
export default App;