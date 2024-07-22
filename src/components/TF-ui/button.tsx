/**
 * 
 * Tayyor emas ! Tayyor emas ! Tayyor emas ! Tayyor emas !
 */

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'


const buttonVariants = cva("inline-flex items-center justify-center rounded-lg text-sm font-medium gap-2 font-inter font-medium h-36 px-4 py-1 disabled:pointer-events-none disabled:opacity-50 font-inter squircle", 
	{
		variants:{
			variant:{
				default:"bg-blue-800 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-800-16 active:bg-blue-900 disabled:bg-blue-800  text-white focur:bg-blue-800-24 ",
				secondary:"bg-neutral-100 text-neutral-950 hover:bg-neutral-50 focus:ring focus:ring-blue-800-24  active:bg-neutral-100 disabled:bg-neutral-100 squircle-secondary",
				destructive:"bg-red-800 text-white hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-800-16 active:bg-red-900 disabled:bg-red-800 squircle-destructive-btn",
				outline:"bg-white hover:bg-neutral-50 focus:outline-none focus:ring  border-neutral-200 text-neutral-950 focus:ring-blue-800-16 active:bg-neutral-100",
				ghost:"hover:bg-neutral-50 hover:text-accent-foreground active:bg-neutral-0",
			},
			size:{
				default:"",
				sm:"h-9 rounded-md px-3",
				lg:"h-11 rounded-md px-8",
				icon:"h-10 w-10",
			},
		},	
		defaultVariants:{
			variant:"default",
			size:"default",
		}
	}
)

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants>{
	asChild?:boolean
}

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

export { Button, buttonVariants }
