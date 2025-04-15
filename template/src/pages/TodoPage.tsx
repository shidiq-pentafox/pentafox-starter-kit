import React from 'react';
import { Container, Title, Stack } from '@mantine/core';
import { TodoList } from '../components';

const TodoPage = () => {
  return (
    <Container size="md" py="xl">
      <Stack>
        <Title order={1}>Todo App</Title>
        <TodoList />
      </Stack>
    </Container>
  );
};

export default TodoPage; 