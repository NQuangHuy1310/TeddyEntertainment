import React from 'react'
import { twMerge } from 'tailwind-merge'
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'password' | 'text' | 'email'
  className?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={twMerge(
        'border-InputBorder max-h-[3rem] w-full rounded-md border-[1px] bg-white px-5 py-2 text-base font-normal text-LightPrimary focus:outline-none disabled:opacity-50 md:px-6 md:py-3',
        className
      )}
      ref={ref}
      {...props}
      spellCheck={false}
    />
  )
})

Input.displayName = 'Input'

export default Input
