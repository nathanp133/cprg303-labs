/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm setTasks={setTasks} />
    </SafeAreaView>
  );
}

export default App;