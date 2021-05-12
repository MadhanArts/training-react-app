import './App.css';
import PostForm from './components/HTTPSample/PostForm';
import PostList from './components/HTTPSample/PostList';

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

// 

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

      <PostForm />

    </div>
  );
}

export default App;
