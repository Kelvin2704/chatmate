'use client'
import clsx from "clsx"
import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from 'react-hook-form'

interface InputProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>
    errors: FieldErrors,
    disabled?: boolean

}
const Input: React.FC<InputProps> = ({
    label,
    id,
    type = "text",
    register,
    required,
    errors,
    disabled
}) => {
    return (
        <div className="">
            <label
                htmlFor="id"
                className="block text-base font-medium leading-6 text-gray-900"
            >{label}</label>
            <div className="mt-2">
                <input
                    type={type}
                    id={id}
                    autoComplete={id}
                    disabled={disabled}
                    {...register(id, { required })}
                    className={`form-input block w-full rounded-md border-0 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6
                    ${errors[id] && 'focus:ring-red-500'}
                    ${disabled && "opacity-50 cursor-not-allowed"}
                `
                    } />
            </div>
        </div>

    )
}

export default Input