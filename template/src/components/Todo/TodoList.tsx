import React, { useState } from 'react';
import { Box, Checkbox, Grid, Text, Button, TextInput, Group, Paper, Title, ScrollArea } from '@mantine/core';
import { IconPlus, IconTrash } from '@tabler/icons-react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoText, setNewTodoText] = useState('');

  const addTodo = () => {
    if (newTodoText.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: newTodoText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTodoText('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <Box>
      <Paper shadow="xs" p="md" withBorder mb="md">
        <Title order={2} mb="md">Todo List</Title>
        <Group>
          <TextInput
            placeholder="Add a new task"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            onKeyDown={handleKeyPress}
            style={{ flexGrow: 1 }}
          />
          <Button leftSection={<IconPlus size={16} />} onClick={addTodo}>
            Add
          </Button>
        </Group>
      </Paper>

      <ScrollArea h={300}>
        {todos.length === 0 ? (
          <Text c="dimmed" ta="center" py="xl">
            No tasks yet. Add some tasks to get started!
          </Text>
        ) : (
          todos.map((todo) => (
            <Paper 
              shadow="xs" 
              p="md" 
              withBorder 
              mb="sm" 
              key={todo.id}
            >
              <Grid>
                <Grid.Col span={1}>
                  <Checkbox
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                </Grid.Col>
                <Grid.Col span={9}>
                  <Text 
                    style={{ 
                      textDecoration: todo.completed ? 'line-through' : 'none',
                      color: todo.completed ? 'gray' : 'inherit'
                    }}
                  >
                    {todo.text}
                  </Text>
                </Grid.Col>
                <Grid.Col span={2}>
                  <Button 
                    color="red" 
                    onClick={() => deleteTodo(todo.id)}
                    compact
                    variant="subtle"
                    rightSection={<IconTrash size={16} />}
                  >
                    Delete
                  </Button>
                </Grid.Col>
              </Grid>
            </Paper>
          ))
        )}
      </ScrollArea>
    </Box>
  );
};

export default TodoList; 