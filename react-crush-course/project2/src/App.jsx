import React from 'react';
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn react"/>
      <Todo text="Master React"/>
      <Todo text="Explore advance features"/>
    </div>
  );
}

export default App;