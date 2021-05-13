import './App.css';

// import ErrorBoundary from './components/ErrorBoundary';
// import Hero from './components/Hero';

// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';

// import FocusInput from './components/FocusInput';

// import ForwardRefParentInput from './components/ForwardRefParentInput';

// import ParentComp from './components/ParentComp';

// import PortalDemo from './components/PortalDemo';

// import Form from './components/Form';

// import ClickCounterTwo from './components/ClickCounterTwo';
// import Counter from './components/Counter';
// import HoverCounterTwo from './components/HoverCounterTwo';
// import User from './components/User';

// import ComponentC from './components/ContextSample/ComponentC';
// import { UserProvider } from './components/ContextSample/userContext';

// import PostForm from './components/HTTPSample/PostForm';
// import PostList from './components/HTTPSample/PostList';

// import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
// import Home from './components/RouterSample/Home';
// import About from './components/RouterSample/About';
// import Contact from './components/RouterSample/Contact';
// import PostList from './components/HTTPSample/PostList';
// import PostDetails from './components/RouterSample/PostDetails';
// import NotFound from './components/RouterSample/NotFound';



function App() {
  return (
    <div className="App"> 

      {/* <Form /> */}

      {/* <PortalDemo /> */}

      {/* <ParentComp /> */}

      {/* <ForwardRefParentInput /> */}

      {/* <FocusInput /> */}

      {/* <ErrorBoundary>
        <Hero heroName="BatMan" />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Hero heroName="SuperMan" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}

      {/* <ClickCounter name="Madhan" />
      <HoverCounter /> */}

      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn? "Madhan": "Guest"} /> 
      */}

      {/* <Counter 
        render={(count, incrementCount) => (
        <ClickCounterTwo 
        count={count} 
        incrementCount={incrementCount} 
        />
        )} 
      />

      <Counter 
        render={(count, incrementCount) => (
        <HoverCounterTwo 
        count={count} 
        incrementCount={incrementCount} 
        />
        )}
      /> */}

      {/* <Counter>
        {(count, incrementCount) => (
        <ClickCounterTwo 
        count={count} 
        incrementCount={incrementCount} 
        />
        )} 
      </Counter>

      <Counter>
        {(count, incrementCount) => (
        <HoverCounterTwo 
        count={count} 
        incrementCount={incrementCount} 
        />
        )}
      </Counter> */}

      {/* <UserProvider value="Madhan" >
        <ComponentC />
      </UserProvider> */}

      {/* <PostList /> */}

      {/* <PostForm /> */}

      {/* <Router>
      <nav>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/about" >About</Link>
          </li>
          <li>
            <Link to="/contact" >Contact</Link>
          </li>
          <li>
            <Link to="/posts" >Posts</Link>
          </li>
        </ul>
      </nav>

      <div className="content">
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/about" >
            <About />
          </Route>
          <Route path="/contact" >
            <Contact />
          </Route>
          <Route exact path="/posts">
            <PostList />
          </Route>
          <Route exact path="/posts/:id">
            <PostDetails />
          </Route>
          <Route path="*" >
            <NotFound />
          </Route>
        </Switch>
      </div>
      </Router> */}

      
    </div>
  );
}

export default App;
