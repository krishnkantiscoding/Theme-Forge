'use client';
import React from 'react';
import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from '@mantine/core';
import classes from './loginpage.module.css';
import { useRouter } from 'next/navigation';
import { useForm } from '@mantine/form';
import toast from 'react-hot-toast';
import useAppContext from '@/context/AppContext';

function Login() {

  const router = useRouter();

  const { setCurrentUser, setLoggedIn } = useAppContext();

  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length < 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  const loginSubmit = (values) => {
    fetch('http://localhost:5000/user/authenticate', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          toast.success('User Logged In Successfully');
          setLoggedIn(true);
          response.json()
            .then((result) => {
              router.push('/user/builder');
              localStorage.setItem('user', JSON.stringify(result));
              setCurrentUser(result);
            })
        } else if (response.status === 400) {
          toast.error('Invalid Credentials')
        } else {
          toast.error('Some Error Occured')
        }
      }).catch((err) => {
        console.log(err);
        toast.error('Some Error Occured')
      });
  }

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome back to Theme Forge!
        </Title>

        <form onSubmit={form.onSubmit(loginSubmit)}>
          <TextInput
            label="Email address"
            placeholder="hello@gmail.com"
            size="md"
            {...form.getInputProps('email')}
          />
          <PasswordInput label="Password" placeholder="Your password" mt="md" size="md"
            {...form.getInputProps('password')}
          />
          <Checkbox label="Keep me logged in" mt="xl" size="md" />
          <Button type='submit' fullWidth mt="xl" size="md">
            Login
          </Button>
        </form>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{' '}
          <Anchor href="#" fw={700} onClick={(event) => event.preventDefault()}>
            Register
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}

export default Login;