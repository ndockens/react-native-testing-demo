import React, { useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';

import { styles } from './Todo.styles';

const TodoScreen = (props) => {
  const [todoItems, setTodoItems] = useState([]);
  populateTodoItems(setTodoItems);

  return (
    <View style={styles.container} testID='todo_screen'>
      <Text style={styles.screenTitle}>To Do</Text>
      <Button
        onPress={() => {}}
        testID='new_todo_item_button'
        title='New Item'
        />
      <ScrollView>
        {todoItems.map(item => <Text style={styles.todoItem}>{item.title}</Text>)}
      </ScrollView>
    </View>
  );
};

const populateTodoItems = async (setTodoItems) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const json = await response.json();
        const todoItems = json || [];
        setTodoItems(todoItems)
    } catch (error) {
        console.error(error);
    }
};

export default TodoScreen;