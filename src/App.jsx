import React from 'react';
import ToDoApp from './components/ToDoApp';
import ThemeToggle from './components/ThemeToggle';
import Counter from './components/Counter';
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div>
      <h1>React Components</h1>
      
      {/* Minimalist ToDo */}
      <h2>ToDo App</h2>
      <ToDoApp />
      
      {/* Dark/Light Theme Toggle */}
      <h2>Theme Toggle</h2>
      <ThemeToggle />
      
      {/* Counter Component */}
      <h2>Counter</h2>
      <Counter />
      
      {/* Card Component */}
      <h2>Card Component</h2>
      <Card 
        title="My Awesome Card" 
        image="https://via.placeholder.com/400x200" 
        description="This is a sample description for the card." 
      />
    </div>
  );
}

export default App;
