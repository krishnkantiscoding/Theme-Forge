'use client';
import React, { useRef, useState } from 'react';
import { Button, Container, Paper, PasswordInput, TextInput, Title, rem } from '@mantine/core';
import { IconAt, IconLock } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const ResetPassword = () => {

    const emailRef = useRef(null);
    const otpRef = useRef(null);
    const [verifiedUser, setVerifiedUser] = useState(null);

    const [showForm, setShowForm] = useState(false);

    const router = useRouter();

    const checkMailExists = async () => {
        const res = await fetch(`http://localhost:5000/user/getbyemail/${emailRef.current.value}`);
        // console.log(res.status);
        const data = await res.json();
        // console.log(data);
        setVerifiedUser(data);
        return res.status === 200;
    }

    const sendOTP = async () => {
        if (!await checkMailExists()) {
            toast.error('Email not registered');
            return;
        }
        const res = await fetch(`http://localhost:5000/util/sendotp`, {
            method: 'POST',
            body: JSON.stringify({ email: emailRef.current.value }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(res.status);
        if (res.status === 201) {
            toast.success('OTP sent successfully');
        } else {
            toast.error('Something went wrong');
        }
    }

    const verifyOTP = async () => {
        const res = await fetch(`http://localhost:5000/util/verifyotp/${emailRef.current.value}/${otpRef.current.value}`);
        // console.log(res.status);
        if (res.status === 200) {
            setShowForm(true);
        } else {
            toast.error('Invalid OTP');
        }
    }

    const updatePassword = async (values) => {
        const res = await fetch(`http://localhost:5000/user/update/${verifiedUser._id}`, {
            method: 'PUT',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // console.log(res.status);
        if(res.status === 200) {
            toast.success('Password updated successfully');
            router.push('/login');
        }else{
            toast.error('Something went wrong');
        }
    }

    const resetForm = useForm({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        validate: {
            password: (value) => (value.length < 3 ? 'Password is too short' : null),
            confirmPassword: (value, values) =>
                value !== values.password ? 'Passwords did not match' : null,
        },
    });

    return (
        <>
            <Paper>
                <Container w={'100%'} size={460}>
                    <Title order={1} mb={30} style={{ textAlign: 'center' }}>
                        Reset Your Password
                    </Title>

                    <TextInput
                        required
                        label="Enter Registered Email"
                        placeholder="youremail@mail.com"
                        leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
                        radius="md"
                        ref={emailRef}
                    />
                    <Button onClick={sendOTP} type="submit" mt={10} radius="xl">
                        Send OTP
                    </Button>
                    <TextInput
                        mt={20}
                        required
                        label="Enter OTP"
                        placeholder="XXXXXX"
                        leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} />}
                        radius="md"
                        ref={otpRef}
                    />
                    <Button onClick={verifyOTP} type="submit" mt={10} mb={30} radius="xl">
                        Verify OTP
                    </Button>

                    {
                        showForm && (

                            <form onSubmit={resetForm.onSubmit(updatePassword)}>
                                <Title order={3} mb={20} style={{ textAlign: 'center' }}>
                                    Enter New Password
                                </Title>
                                <PasswordInput mb="xl" withAsterisk label="Password" placeholder="Your password" size="md" {...resetForm.getInputProps('password')} />
                                <PasswordInput mb="xl" withAsterisk label="Confirm Password" placeholder="Confirm password" size="md" {...resetForm.getInputProps('confirmPassword')} />
                                <Button fullWidth mt="xl" size="md" type='submit'>
                                    Reset Password
                                </Button>
                            </form>
                        )
                    }

                </Container>
            </Paper>
        </>
    )
}

export default ResetPassword;