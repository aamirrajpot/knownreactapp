import {Switch,Route,Redirect} from "react-router-dom";
import Footer from "./Components/Footer";
import  Menu from "./Components/Menu";
import Home from './Components/Home';
import About from "./Components/About";
import Team from "./Components/Team";
import Testimonial from "./Components/Testimonial";
import Courses from "./Components/Courses";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
     {/* <!-- PRE LOADER --> */}
      <section class="preloader">
        <div class="spinner">
      
          <span class="spinner-rotate"></span>
      
        </div>
      </section>
       <Menu />
       <Switch>
        
            <Route exact path="/" component={Home} />
             <Route path="/about" component={About} />
             <Route path="/team" component={Team} />
             <Route path="/testimonial" component={Testimonial} />
             <Route path="/courses" component={Courses} />
             <Route path="/contact" component={Contact} />

            {/*<Route path="/contact" component={Contact} />
            <Route path="/service" component={Service} /> */}
            <Redirect to="/" />
        </Switch>
       <Footer />
    </>
  );
}

export default App;
