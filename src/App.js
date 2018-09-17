import React from 'react';
import { Route } from 'react-router-dom';
import CommentBox from './components/CommentBox';
import CommentList from './components/CommentList';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Route exact path="/" component={CommentList} />
      <Route path="/post" component={CommentBox} />
      <Footer />
    </div>
  );
};

export default App;
