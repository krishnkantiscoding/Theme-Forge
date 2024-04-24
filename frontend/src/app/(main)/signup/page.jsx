'use client';
import React from 'react'
import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Container,
} from '@mantine/core';
import { GoogleButton } from './GoogleButton';
import {GithubIcon} from '@mantinex/dev-icons';
import classes from './social.module.css';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export function GithubButton(props) {
  return (
    <Button
      {...props}
      leftSection={<GithubIcon style={{ width: '1rem', height: '1rem' }} />}
      className={classes.githubButton}
    />
  );
}

function Signup(props) {

  const router = useRouter();

  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: ''
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length < 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  const signupSubmit = (values) => {
    fetch('http://localhost:5000/user/add', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response.status);
      if(response.status === 200){
        toast.success('User Registered Successfully');
        router.push('/login');
      }else{
        toast.error('Some Error Occured')
      }
    }).catch((err) => {
      console.log(err);
      toast.error('Some Error Occured')
    });
  }

  return (
    <Container size='sm'>
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" fw={500}>
        Welcome to Theme Forge, Register with
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <GithubButton radius="xl">Github</GithubButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(signupSubmit)}>
        <Stack>
            <TextInput
            color='teal'
            variant='filled'
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
              radius="md"
            />

          <TextInput
          color='teal'
          variant='filled'
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Invalid email'}
            radius="md"
          />

          <PasswordInput
          variant='filled'
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Password should include at least 6 characters'}
            radius="md"
          />

            <Checkbox
            color='teal'
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
            />
          
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
            Already have an account?Login
          </Anchor>
          <Button type="submit" radius="xl">
            Signup
          </Button>
        </Group>
      </form>
    </Paper>
    </Container>
  );
}

export default Signup;