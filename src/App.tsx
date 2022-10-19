import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './Routes';

export default function App() {
  return (
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Routes />
      </MantineProvider>
    </BrowserRouter>
  );
}
