import { Center, Title, Stack, Tabs } from '@mantine/core';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

export const MainLayout = () => {
  const navigate = useNavigate();
  const { tabValue } = useParams();

  return (
    <Center>
      <Stack>
        <Title p="lg">BouvetOne Demo</Title>
        <Tabs value={tabValue} onTabChange={(value) => navigate(`/${value}`)}>
          <Tabs.List>
            <Tabs.Tab value="basics">Basics</Tabs.Tab>
            <Tabs.Tab value="diverse">Litt diverse</Tabs.Tab>
          </Tabs.List>
        </Tabs>
        <Outlet />
      </Stack>
    </Center>
  );
};
