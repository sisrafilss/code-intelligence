import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/About/About';

import CustomPage from './Components/CustomPage/CustomPage';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import WhyCoding from './Components/WhyCoding/WhyCoding';



function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/why-coding">
            <WhyCoding />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
