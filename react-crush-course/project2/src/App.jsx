import React from 'react';
import Todo from './components/Todo';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {
  const [ isModalVisible, setIsModalVisible ] = useState(false);

  function showModalHandler() {
    setIsModalVisible(true)
  }

  function hideModalHandler(){
    setIsModalVisible(false)
  }

  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn react" onDeleting={showModalHandler}/>
      <Todo text="Master React" onDeleting={showModalHandler}/>
      <Todo text="Explore advance features" onDeleting={showModalHandler}/>
      {isModalVisible && <Modal onClose={hideModalHandler}/>}
    </div>
  );
}

export default App;