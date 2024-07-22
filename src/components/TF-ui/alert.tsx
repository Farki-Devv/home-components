/**
 * @file alert.tsx Displays a callout for user attention component
 * 
 * @overview an alert that attracts the user's attention in the browser
 * 
 * @example 
 * ```tsx
 * import { Alert, AlertDescription, AlertTitle } from './components/TF-ui/alert'
 * 
 *  <Alert className='w-532'>
      <IconCircle className="size-5 text-red-400"/>
      <AlertTitle>Title</AlertTitle>
      <AlertDescription className='text-neutral-500'>
      The leaves danced gently in the breeze, their rustling a symphony of nature’s.
      </AlertDescription>
    </Alert>
 * ```
		@require "class-variance-authority": "^0.7.0" - npm i class-variance-authority@0.7.0
		
 */

import * as React from 'react'
import {cva ,type VariantProps} from 'class-variance-authority'
import { cn } from '@/lib/utils'
/**
 * There are two options for alert: default and destructive
 */
const alertvariants = cva(
	'relative w-full h-88 rounded-lg w-532 flex flex-col justify-center pl-11.5 py-3 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground squircle',
	{
		variants: {
			variant:{
				default:"bg-white text-neutral-950 squircle",
				destructive:"bg-red-50 text-red-800 squircle-destructive border-red-100 "
			}
		},
		defaultVariants:{
			variant:"default"
		}
	}
)
/**
 * @interface AlertProps React.HTMLAttributes<HTMLDivElement> ,VariantProps<typeof alertvariants> for Alert component
 * @property {string} className Optional additional class names for custom styles
 */
interface AlertProps extends  React.HTMLAttributes<HTMLDivElement> ,VariantProps<typeof alertvariants> {
	className?:string
}

/**
 * @interface AlertTitleProps React.HTMLAttributes<HTMLHeadElement> for AlertTitle component
 * @property {string} className Optional additional class names for custom styles
 */
interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadElement> {
	className?:string
}

/**
 * @interface AlertDescriptionProps React.HTMLAttributes<HTMLParagraphElement> for AlertDescription component
 * @property {string} className Optional additional class names for custom styles
 */
interface AlertDescriptionProps extends  React.HTMLAttributes<HTMLParagraphElement>{
	className?:string
}
/**
 * Displays a callout for user attention. root component
 * @param {AlertProps} props The properties for the Alert component.
 * @param {React.forwardRef<HTMLDivElement>} ref A reference to a DOM element
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the Alert component
 * @example
 * ```tsx
 * import { Alert, AlertDescription, AlertTitle } from './components/TF-ui/alert'
 * 
 * <Alert className='w-532'>
			<IconCircle className="size-5 text-red-400"/>
			<AlertTitle>Title</AlertTitle>
			<AlertDescription className='text-neutral-500'>
			The leaves danced gently in the breeze, their rustling a symphony of nature’s.
			</AlertDescription>
		</Alert>
 * ```
 */
const Alert = React.forwardRef<HTMLDivElement ,AlertProps >(({className, variant ,...props} ,ref)=>(

		<div 
	ref={ref}
	role='alert'
	className={cn(alertvariants({variant}),className)}
	{...props}
	/>

))
Alert.displayName = 'Alert'

/**
 * AlertTitle component allows you to give a title to the alert
 * @param {AlertTitleProps} props The properties for the AlertTitle component.
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the AlertTitle component
 * @example
 * ```tsx
 * import { Alert, AlertTitle, AlertDescription } from './components/TF-ui/alert'
 * 
 * <Alert className='w-532'>
 * <AlertTitle>Title</AlertTitle>
 * <AlertDescription className='text-neutral-500'>
 * The leaves danced gently in the breeze, their rustling a symphony of nature’s.
 * </AlertDescription>
 * </Alert>
 * ```
 */
const AlertTitle = React.forwardRef<HTMLParagraphElement,AlertTitleProps>(({className, ...props}, ref)=>(
	<h5 
	ref={ref}
	className={cn('font-medium pb-1 w-470 leading-none', className)}
	{...props}
	/>
))
AlertTitle.displayName = 'AlertTitle' 

/**
 * 	AlertDescription component allows you to give a description to the alert
 * @param {AlertDescriptionProps} props The properties for the AlertDescription component.
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the AlertDescription component
 * @example
 * ```tsx
 * import { Alert, AlertTitle, AlertDescription } from './components/TF-ui/alert'
 * 
 * <Alert className='w-532'>
 * <AlertTitle>Title</AlertTitle>
 * <AlertDescription className='text-neutral-500'>
 * The leaves danced gently in the breeze, their rustling a symphony of nature’s.
 * </AlertDescription>
 * </Alert>
 * ```
 *
 */
const AlertDescription = React.forwardRef<HTMLParagraphElement,AlertDescriptionProps>(
 ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('text-sm [&_p]:leading-relaxed w-470 font-inter flex items-center ', className)}
        {...props}
      />
    );
  }
)
AlertDescription.displayName = 'AlertDescription'

export type {AlertProps,AlertTitleProps,AlertDescriptionProps}
export {Alert, AlertTitle, AlertDescription}