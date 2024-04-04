'use client';
import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
//import image from './image.svg';
import classes from './page.module.css';
import { Icon3dRotate } from '@tabler/icons-react';

import { HeroBullets } from './home/HeroBullets';
import Navbar from './(main)/navbar';

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroBullets/>
    </>
  );
}