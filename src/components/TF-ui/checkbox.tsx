

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'
interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
	className?:string
}
const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(({className ,...props}, ref)=>(
	<CheckboxPrimitive.Root
	ref={ref}
	className={cn("peer size-4 shrink-0 rounded-sm  border-neutral-200 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 squircle data-[state=checked]:bg-blue-800 data-[state=checked]:border-none text-white", className)}
	{...props}
	>
		<CheckboxPrimitive.Indicator 
		className={cn('flex items-center justify-center text-current')}
		>
			<Check className='size-2'/>
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
