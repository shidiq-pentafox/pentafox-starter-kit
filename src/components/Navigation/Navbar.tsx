import React from 'react';
import { Group, NavLink } from '@mantine/core';
import { useNavigate, useLocation } from 'react-router-dom';
import { IconHome, IconChecklist } from '@tabler/icons-react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Group p="md">
      <NavLink
        label="Dashboard"
        leftSection={<IconHome size={16} />}
        active={location.pathname === '/'}
        onClick={() => navigate('/')}
      />
      <NavLink
        label="Todo"
        leftSection={<IconChecklist size={16} />}
        active={location.pathname === '/todo'}
        onClick={() => navigate('/todo')}
      />
    </Group>
  );
};

export default Navbar;