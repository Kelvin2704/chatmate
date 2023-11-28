'use client'

import Input from "@/app/components/Input"
import { type } from "os"
import { useCallback, useState } from "react"
import { useForm, FieldValues, SubmitHandler } from "react-hook-form"
import Button from "../../components/Button"
import AuthSocialButton from "./AuthSocialButton"
import { BsGithub,BsGoogle } from 'react-icons/bs'

type Variant = "LOGIN" | "REGISTER"

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER')
        } else {
            setVariant("LOGIN")
        }
    }, [variant])

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
        }
        if (variant === 'LOGIN') {
            //nextauth signin
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true)
        //Nextauth social sign in
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
                    <Input errors={errors} label="Email" id="email" type="email" register={register} disabled={isLoading}/>
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
                            <AuthSocialButton icon={BsGithub} onClickSocial={()=>socialAction('github')}/>
                            <AuthSocialButton icon={BsGoogle} onClickSocial={()=>socialAction('google')}/>
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