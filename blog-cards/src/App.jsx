import React from 'react';
import BlogList from './BlogList';

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Blog Cards</h1>
      <BlogList />
    </div>
  );
}

export default App;
