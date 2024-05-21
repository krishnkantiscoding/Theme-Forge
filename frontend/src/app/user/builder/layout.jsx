'use client';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useEffect, useState } from 'react'
import NavbarNested from '../Navbar';
import Toolbar from './Toolbar';

const Layout = ({ children }) => {

  const [opened, { toggle }] = useDisclosure();
  const [selComponent, setSelComponent] = useState(null);

  useEffect(() => {
    console.log(selComponent);
  }, [selComponent])


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
      Customize Your Vs Code Here.
      </AppShell.Header>
      <AppShell.Navbar>
        {/* <Sidebar /> */}
        <NavbarNested setSelComponent={setSelComponent} />
      </AppShell.Navbar>
      <AppShell.Main>
        {children}
      </AppShell.Main>
      <AppShell.Aside p="md">
        {
          selComponent && (
            <Toolbar selComponent={selComponent} />
          )
        }
      </AppShell.Aside>
      <AppShell.Footer p="md"></AppShell.Footer>
    </AppShell>
  );
}

export default Layout