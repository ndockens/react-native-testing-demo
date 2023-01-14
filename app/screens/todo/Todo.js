import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { styles } from './Todo.styles';

const TodoScreen = (props) => {
  const [todoItems, setTodoItems] = useState([]);
  populateTodoItems(setTodoItems);

  return (
    <View style={styles.container} testID='todo_screen'>
      <Text style={styles.screenTitle}>To Do</Text>
      <ScrollView testID='todo_list'>
        {todoItems.map(item => <Text key={item.id} style={styles.todoItem} testID='todo-item'>{item.title}</Text>)}
      </ScrollView>
        <Pressable
          onPress={() => addTodoItem({ id: todoItems.length + 1, title: 'New item' }, setTodoItems)}
          style={styles.newTodoItemButton}
          testID='new_todo_item_button'
          >
          <Text style={styles.newTodoItemButtonText}>+</Text>
        </Pressable>
    </View>
  );
};

const populateTodoItems = async (setTodoItems) => {
    try {
        const response = await fetch('http://localhost:5225/todoitems');
        const json = await response.json();
        const todoItems = json || [];
        setTodoItems(todoItems)
    } catch (error) {
        console.error(error);
    }
};

const addTodoItem = async (newItem) => {
    try {
        const response = await fetch('http://localhost:5225/todoitems', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem),
        });
    } catch (error) {
        console.error(error);
    }
};

export default TodoScreen;