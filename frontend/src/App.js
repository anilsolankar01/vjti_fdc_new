import Home from './components/Home/Home';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Register from './components/Registration/Register';
import Programmes from './components/Programmes/Programmes';
import ProgramOutcomes from './components/ProgramOutcomes/ProgramOutcomes';
import People from './components/People/People';
import Test from './Test';
import Research from './components/Research/Research';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import ContactUs from './components/ContactUs/ContactUs'

function App() {
  return (
    <Router>
      <Header/>
      <br/>
      
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/programmes" component={Programmes} />
          <Route path="/program-outcomes" component={ProgramOutcomes} />
          <Route path="/people" component={People} />
          <Route path='/test' component={Test}/>
          <Route path='/research' component={Research}/>
          <Route path='/photo-gallery' component={PhotoGallery}/>
          <Route path='/contact-us' component={ContactUs}/>
        </Switch>
      
      <div class="tp"/>
        <Footer/>
        </Router>
  );
}

export default App;
