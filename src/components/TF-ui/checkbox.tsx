/**
 * @file checkbox.tsx Checbox
 * @overview A control that allows the user to toggle between checked and not checked.
 * @example
 * ```tsx
 * import { Checkbox } from './components/TF-ui/checkbox'
 * 
 * <Checkbox />
 * ```
 * @require "@radix-ui/react-checkbox": "^1.1.1"- npm i @radix-ui/react-checkbox@1.1.1
 * @require  "@tabler/icons-react": "^3.11.0", - npm i @tabler/icons-react@3.11.0
 */
/**
 * @license checkbox.tsx
 */

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as React from 'react'
import { cn } from '@/lib/utils'
import { IconCheck } from '@tabler/icons-react'

/**
 * @interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> for Checkbox component
 * @property {string} className Optional additional class names for custom styles
 */
interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
	className?:string
}
/**
 * A control that allows the user to toggle between checked and not checked.
 * @param {CheckboxProps} props Interface for adjusting the checkbox component.
 * @param {React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>} ref A reference to a DOM element
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the Checkbox component
 * @example
 * ```tsx
 * import { Checkbox } from './components/TF-ui/checkbox'
 * 
 * <Checkbox />	
 * ```
 */
const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(({className ,...props}, ref)=>(
	<CheckboxPrimitive.Root
	ref={ref}
	className={cn("peer size-4 shrink-0 rounded-sm  border-neutral-200 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 squircle-check  data-[state=checked]:border-none text-white", className)}
	{...props}
	>
		<CheckboxPrimitive.Indicator 
		className={cn('flex items-center justify-center text-current')}
		>
			<IconCheck className='size-2'/>
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName
export type { CheckboxProps }
export { Checkbox }
