import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Pages
import Home from "./components/Pages/Home";
import Timeline from "./components/Pages/Timeline";
import Portfolio from "./components/Pages/Portfolio";
import Services from "./components/Pages/Services";
import Team from "./components/Pages/Team";
import Contact from "./components/Pages/Contact";
import PageWrapper from "./components/Pages/PageWrapper";

function App() {
  return (
    <Router>
      <PageWrapper>
        <Route exact={true} path='/' component={Home} />
        <Route path='/timeline' component={Timeline} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/services' component={Services} />
        <Route path='/team' component={Team} />
        <Route path='/contact' component={Contact} />
      </PageWrapper>
    </Router>
  );
}

export default App;
