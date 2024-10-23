import React from 'react';
import ToDoApp from './components/ToDoApp';
import ThemeToggle from './components/ThemeToggle';
import Counter from './components/Counter';
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div>
      
      
      
      <h2>ToDo App</h2>
      <ToDoApp />
      
     
      <h2>Theme Toggle</h2>
      <ThemeToggle />
      
     
      <h2>Counter</h2>
      <Counter />
      
    
      <h2>Card Component</h2>
      <Card 
        title="My Awesome Card" 
       
        description="This is a sample description for the card." 
      />
    </div>
  );
}

export default App;
