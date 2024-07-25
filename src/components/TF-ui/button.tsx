/**
 * @file button.tsx Button component
 * @overview Displays a button or a component that looks like a button.
 * @example
 * ```tsx
 * import { Button } from './components/TF-ui/button'
 * 
 * <Button>Button</Button>
 * ```
 * @require "@radix-ui/react-slot": "^1.1.0" - npm i @radix-ui/react-slot@1.1.0
 * @require "class-variance-authority": "^0.7.0", - npm i class-variance-authority@0.7.0
 */

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Button variants and sizes for button component
 * @example
 * ```tsx
 * import { Button } from './components/TF-ui/button'
 * 
 * <Button variant={'destructive'} size={'lg'}>Button</Button>
 * ```
 */
const buttonVariants = cva("inline-flex items-center justify-center rounded-lg text-sm font-medium gap-2 font-inter font-medium h-9  disabled:pointer-events-none disabled:opacity-50 font-inter  cursor-pointer", 
	{
		variants:{
			variant:{
				default:"bg-blue-800 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-800-16 active:bg-blue-900 disabled:bg-blue-800  text-white focur:bg-blue-800-24 squircle-default",
				secondary:"bg-neutral-100 text-neutral-950 hover:bg-neutral-50 focus:ring focus:ring-blue-800-24  active:bg-neutral-100 disabled:bg-neutral-100 squircle-secondary",
				destructive:"bg-red-800 text-white hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-800-16 active:bg-red-900 disabled:bg-red-800 squircle-destructive-btn",
				outline:"bg-white hover:bg-neutral-50 focus:outline-none focus:ring   text-neutral-950 focus:ring-blue-800-16 active:bg-neutral-100 squircle",
				ghost:"hover:bg-neutral-50 hover:text-accent-foreground active:bg-neutral-0 squircle-ghost",
			},
			size:{
				lg:"h-10 w-33 px-4 py-2 text-base",
				default:"h-9 w-30 px-3 py-2 text-sm",
				sm:"h-8 w-23 px-2 py-2 text-xs",
				icon:"size-9",
			},
		},	
		defaultVariants:{
			variant:"default",
			size:"default",
		}
	}
)
/**
 * @interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>
 * @property {string} className Optional additional class names for custom styles
 * @property {boolean} asChild asChild to use a component within a component
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants>{
	asChild?:boolean
	className?:string
}
/**
 * Button component
 * Displays a button or a component that looks like a button.
 * @param {ButtonProps} props The properties for the Button component
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @param variant - The button variants
 * @param size - The button sizes
 * @returns {JSX.Element} Returns the Button component
 * @example
 * ```tsx
 * import { Button } from './components/TF-ui/button'
 * 
 * <Button variant={'destructive'} size={'lg'}>Button</Button>
 * ```
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({className, variant, size, asChild = false ,...props}, ref)=>{
	const Comp = asChild ? Slot : 'button'
	return(
		<Comp className={cn(buttonVariants({variant, size, className}))}
		ref={ref}
		{...props}
		/>
	)
})
Button.displayName = 'Button'
export type {ButtonProps}
export {buttonVariants,  Button }
