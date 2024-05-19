'use client';
import React from 'react'
import { useState } from 'react';
import { Container, Group, Burger, Title, Button, Anchor } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './navbar.module.css';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const links = [
  { link: '/signup', label: 'Signup' },
  { link: '/login', label: 'Login' },
  { link: '/user/builder', label: 'Customize' },
];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const pathname = usePathname();

  const router = useRouter();
  // console.log(router.);
  const items = links.map((link) => (
    <Button
      component={Link}
      key={link.label}
      href={link.link}
      variant={pathname === link.link ? 'filled' : 'light'}
      // data-active={pathname === link.link || undefined}
    >
      {link.label}
    </Button>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Title order={3}>Theme Forge</Title>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}

export default Navbar;