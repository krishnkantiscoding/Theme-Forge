'use client';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Sidebar from './Sidebar';

export default function Layout({children}) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      aside={{ width: 300, breakpoint: 'md', collapsed: { desktop: false, mobile: true } }}
      padding="md"
    >
      <AppShell.Header>
        
      </AppShell.Header>
      <AppShell.Navbar>
        <Sidebar />
      </AppShell.Navbar>
      <AppShell.Main>
        {children}
      </AppShell.Main>
      <AppShell.Aside p="md">Aside</AppShell.Aside>
      <AppShell.Footer p="md">Footer</AppShell.Footer>
    </AppShell>
  );
}