// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
//import './App.css';
//import LoginScreen from './Loginscreen';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
  /*componentWillMount(){
    var loginPage =[];
    loginPage.push(<LoginScreen appContext={this} key={"login-screen"}/>);
    this.setState({
      loginPage:loginPage
    })
  }*/
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link to={'/'} className='navbar-brand'>React CRUD</Link>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link to={'/'} className='nav-link'>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to={'/create'} className='nav-link'>Crear</Link>
              </li>
              <li className='nav-item'>
                <Link to={'/index'} className='nav-link'>Indice</Link>
              </li>
            </ul>
          </nav><br/>
          <h2> React CRUD</h2>
          <Switch>
            <Route exact path='/create' component={Create}/>
            <Route exact path='/edit/:id' component={Edit}/>
            <Route exact path='/index' component={Index}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;