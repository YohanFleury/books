import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AddBooks from './containers/AddBooks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchBooks from 'containers/SearchBooks'

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component={ AddBooks} />
          <Route path="/search" component={ SearchBooks} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
