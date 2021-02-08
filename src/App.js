import React, { Component } from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import {Navigation} from './components/Navigation/Navigation.js';
import { User } from './components/Login/User.js';
import Login from './components/Login/Login.js'
import LoginPopup from './components/Login/LoginPopup.js'
import Main from './components/Main/Main.js'
import Blog from './components/Blog/Blog.js'
import BlogArticleContainer from './components/Blog/BlogArticle/BlogArticleContainer.js'
import {Forum} from './components/Forum/Forum.js'
import {Footer} from './components/Footer/Footer.js'
import { connect } from 'react-redux';
import {handleLogin} from './actions/LoginActions.js'
import './assets/css/style.css';

class App extends Component {
    render(){
      const { userName, logedIn, setUserName } = this.props
      return (
        <BrowserRouter>
        <div className='appWrapper'>
          <header className = 'headerWrapper'>
            <nav className = 'navWrapper'>
              <Navigation />
              <User userName = {userName}
                    logedIn = {logedIn}
                    onClickHandler = {setUserName} />
              {/* <LoginPopup 
                  isVisible = {this.props.isWindowVisible}
                  isLoginVisible = {this.props.isLoginVisible}
                  isRegisterVisible = {this.props.isRegisterVisible}
                  /> */}
            </nav>
          </header>
          <main className = 'contentWrapper'>
              <Route exact path='/'exact component={Main} />
              <Route path='/forum' exact component={Forum} />
              <Route path='/blog' exact component={Blog} />
              <Route path='/blog/:id' component={BlogArticleContainer}/>
              <Route path='/login' component={Login}/>
          </main>
          <aside className = 'asideWrapper'>

          </aside>
          <footer className = 'footerWrapper'>
            <Footer />
          </footer>
        </div>
        </BrowserRouter>
      );
    }
}


// Создает в компоненте пропсы, вытаскивая из состояния нужные нам элементы
const mapStateToProps = state => {
    return {
      userName: state.login.userName,
      logedIn: state.login.logedIn,
      isWindowVisible: state.loginWindow.isWindowVisible,
      isLoginVisible:state.loginWindow.isLoginVisible,
      isRegisterVisible: state.loginWindow.isRegisterVisible,
    }
}


const mapDispatchToProps = dispatch => {
    return {
      setUserName: name => dispatch(handleLogin(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

