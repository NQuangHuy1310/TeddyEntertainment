import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps, ElementType, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const buttonStyles = cva(
  'flex min-h-11 items-center justify-center gap-2 whitespace-normal rounded border-[1px] bg-transparent text-base outline-none hover:transition-all hover:duration-100 ease-linear',
  {
    variants: {
      variant: {
        priamry: 'bg-LightPrimary text-White hover:bg-Blue500',
        secondary: 'text-Black shadow-[0px_10px_10px_0px_#0000001A] hover:bg-Cyan400 hover:text-White',
        ghost: 'border-Black text-Black font-semibold hover:bg-Cyan500 hover:text-White hover:border-transparent',
        gradient: 'border-none bg-gradient-to-r from-[#7001D3] to-[#FE6272] text-White hover:rounded-md',
        disabled: 'cursor-not-allowed bg-Disabled opacity-90 border-[1px] border-White text-Disabled'
      },
      size: {
        small: 'px-3 py-1 text-sm min-w-28 max-h-7',
        medium: 'px-4 py-2 text-sm min-w-32 max-h-8',
        large: 'px-4 py-3 text-base min-w-32 max-h-9',
        extraLarge: 'px-5 py-3.5 text-lg min-w-40 max-h-11',
        full: 'w-full h-full text-lg max-h-11'
      }
    },
    defaultVariants: {
      variant: 'priamry',
      size: 'medium'
    }
  }
)

type ButtonProps = VariantProps<typeof buttonStyles> &
  ComponentProps<'button'> & {
    to?: string
    href?: string
    type?: 'button' | 'submit'
    leftIcon?: ReactNode
    rightIcon?: ReactNode
    disabled?: boolean
    children?: string | React.ReactNode
    onClick?: () => void
  }

const Button = ({
  variant,
  size,
  className,
  to,
  href,
  type,
  leftIcon,
  rightIcon,
  disabled,
  children,
  onClick
}: ButtonProps) => {
  let Comp: ElementType = 'button'
  const props: any = { onClick }

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key]
      }
    })
  }

  if (type) {
    props.type = type
  }

  if (to) {
    props.to = to
    Comp = Link
  } else if (href) {
    props.href = href
    Comp = 'a'
  }

  const mergedStyles = twMerge(buttonStyles({ variant, size }), className)

  return (
    <Comp className={mergedStyles} {...props} onClick={onClick}>
      {leftIcon && <span>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span>{rightIcon}</span>}
    </Comp>
  )
}

export default Button
