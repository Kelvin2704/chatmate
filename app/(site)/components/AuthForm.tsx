'use client'

import Input from "@/app/components/Input"
import { useCallback, useEffect, useState } from "react"
import { useForm, FieldValues, SubmitHandler } from "react-hook-form"
import Button from "../../components/Button"
import AuthSocialButton from "./AuthSocialButton"
import { BsGithub, BsGoogle } from 'react-icons/bs'
import axios from "axios"
import { toast } from "react-hot-toast"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation"

type Variant = "LOGIN" | "REGISTER"

const AuthForm = () => {
    const session = useSession();
    const router = useRouter();
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER')
        } else {
            setVariant("LOGIN")
        }
    }, [variant])

    useEffect(() => {
        if (session?.status === 'authenticated') {
            // console.log(session, 'Authenticated');
            router.push('/users')

        }
    }, [session?.status])

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === 'REGISTER') {
            //axios register
            axios.post('/api/register', data)
                .then(() => signIn('credentials', data))
                .catch(() => toast.error('Something went wrong!'))
                .finally(() => setIsLoading(false))
        }
        if (variant === 'LOGIN') {
            //nextauth signin
            signIn('credentials', {
                ...data,
                redirect: false
            })
                .then((callback) => {

                    if (callback?.ok) {
                        toast.success('Logged in')
                        router.push('/users')
                    }
                    if (callback?.error) {
                        toast.error('Invalid credentials')
                    }

                })
                .finally(() => setIsLoading(false))

        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true)
        //Nextauth social sign in
        signIn(action,
            { redirect: false }
        )
            .then((callback) => {
                console.log("callback", callback)
                if (callback?.ok) {
                    toast.success('Logged in')
                }
                if (callback?.error) {
                    toast.error('Invalid credentials')
                }
            })
            .finally(() => setIsLoading(false))
    }
    return (
        <div className="mt-8 sm:mx-auto sm:w-full w-[400px] sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}>
                    {variant === 'REGISTER' && (
                        <Input errors={errors} label="Name" id="name" register={register} disabled={isLoading} />
                    )}
                    <Input errors={errors} label="Email" id="email" type="email" register={register} disabled={isLoading} />
                    <Input errors={errors} label="Password" id="password" type="password" register={register} disabled={isLoading} />

                    <div>
                        <Button
                            disabled={isLoading}
                            fullWidth
                            type="submit">
                            {variant === 'LOGIN' ? 'Sign in' : 'Register'}
                        </Button>
                    </div>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-white px-2 text-gray-500" >Or continue with</span>
                            </div>
                        </div>
                        <div className="mt-6 flex gap-2">
                            <AuthSocialButton icon={BsGithub} onClickSocial={() => socialAction('github')} />
                            <AuthSocialButton icon={BsGoogle} onClickSocial={() => socialAction('google')} />
                        </div>
                        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-slate-500">
                            <div>
                                {variant === 'LOGIN' ? 'New to ChatMate?' : 'Already have account'}
                            </div>
                            <div onClick={toggleVariant} className="underline cursor-pointer">
                                {variant === 'LOGIN' ? 'Create an account' : 'Login'}
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default AuthForm