import Navigation from './routes/navigaation/navigation.component';
import Home from './routes/home/home.component';
import SignIn from './routes/sign-in/sign-in.component';

import { Routes, Route } from 'react-router-dom';

import './App.css';

const Shop = () => <h1>I am the shop page</h1>;

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='signin' element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
