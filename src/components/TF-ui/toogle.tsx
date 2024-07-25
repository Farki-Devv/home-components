

import * as React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva ,type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const toggleVariants = cva("inline-flex items-center justofy-center rounded-md text-sm font-medium  data-[state=on]:bg-neutral-100 data-[state=on]:text-accent-foreground",

	{
		variants:{
			variant:{
				default:"bg-none",
				ghost:"border-input bg-transparent hover:bg-neutral-100 hover:text-accent-foreground",
			},
			size:{
				default:"size-9 px-2.5 py-2.5",
				sm:"h-9 px-2.5",
				lg:"h-11 px-5",
			}
		},
		defaultVariants:{
			variant:"default",
			size:"default",
		}
	}
)

const Toggle = React.forwardRef<React.ElementRef<typeof TogglePrimitive.Root>,
React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>>(({className, variant, size, ...props}, ref)=>(
	<TogglePrimitive.Root
		ref={ref}
		className={cn(toggleVariants({variant,size}),className)}
		{...props}
	/>
))
Toggle.displayName = TogglePrimitive.Root.displayName
export {Toggle, toggleVariants}