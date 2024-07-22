/**
 * @file alert-dialog.tsx A modal dialog that interrupts the user with important content and expects a response.
 * 
 * @overview This is a warning to obtain important information-dialog component  AlertDialog this component,
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
takes components inside
 * @example
 * ```tsx
 * import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './components/TF-ui/alert-dialog'
 * 
 * <AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Title</AlertDialogTitle>
      <AlertDialogDescription>
      The leaves danced gently in the breeze, their rustling a symphony of nature’s.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel className='sm:w-18 text-sm'>Button</AlertDialogCancel>
      <AlertDialogAction className='sm:w-18 text-sm'>Button</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
 * ````
 * @require "@radix-ui/react-alert-dialog": "^1.1.1" - npm i @radix-ui/react-alert-dialog@1.1.1 
 * @require Load the tailfront button component for this component
 */

/**
 * @license alert-dialog.tsx
 */
import { cn } from '@/lib/utils'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import * as React from 'react'
import { buttonVariants } from './button'

/**
 * AlertDialog component containing all sub components
 */
const AlertDialog = AlertDialogPrimitive.Root

/**
 * AlertDialog Trigger components through this component the alert-dialog component is triggered
 */
const AlertDialogTrigger = AlertDialogPrimitive.Trigger
/**
 *  The portal component for the alert dialog.
 */
const AlertDialogPortal = AlertDialogPrimitive.Portal

/**
 * @interface AlertDialogOverlayProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay> for AlertDialogOverlay component
 * @property {string} className Optional additional class names for custom styles
 */
interface AlertDialogOverlayProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay> {
className?: string
}

/**
 * @interface AlertDialogContentProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> for AlertDialogContent component
 * @property {string} className Optional additional class names for custom styles
 */
interface AlertDialogContentProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> {
	className?:string
}

/**
 * @interface AlertDialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> for AlertDialogHeader component
 * @property {string} className Optional additional class names for custom styles
 */
interface AlertDialogHeaderProps extends React.HTMLAttributes<HTMLDivElement>{
	className?:string
}

/**
 * @interface AlertDialogFooterProps extends React.HTMLAttributes<HTMLDivElement> for AlertDialogFooter component
 * @property {string} className Optional additional class names for custom styles
 */
interface AlertDialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
	className?:string
}

/**
 * @interface AlertDialogTitleProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> for AlertDialogTitle component
 * @property {string} className Optional additional class names for custom styles
 */
interface AlertDialogTitleProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> {
	className?:string
}
/**
 * @interface AlertDialogDescriptionProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description> for AlertDialogDescription component
 * @property {string} className Optional additional class names for custom styles
 */
interface AlertDialogDescriptionProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description> {
	className?:string
}
/**
 * @interface AlertDialogActionProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action> for AlertDialogAction component
 * @property {string} className Optional additional class names for custom styles
 */
interface AlertDialogActionProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action> {
	className?:string
}

/**
 * @interface AlertDialogCancelProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel> for AlertDialogCancel component
 * @property {string} className Optional additional class names for custom styles
 */
interface AlertDialogCancelProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel> {
	className?:string
}

/**
the background of the alarm window, where you can hide information in the browser and view the content only from the alert Dialog box
 * @param {AlertDialogOverlayProps} props he properties for the AlertDialogOverlay component.
 * @param {React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Overlay>>} ref A reference to a DOM element
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the AlertDialogOverlay component
 * 
 */
const AlertDialogOverlay = React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Overlay>, AlertDialogOverlayProps>(({className, ...props}, ref)=>(
	<AlertDialogPrimitive.Overlay
	className={cn("fixed inset-0 z-50 bg-neutral-300", className)}
	{...props}
	ref={ref}
	/>
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

/**
 * It is an AlertDialog content component through which you can view messages and information in the ogonlantrish window
 * @param {AlertDialogContentProps} props he properties for the AlertDialogContent component.
 * @param {React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Content>>} ref A reference to a DOM element
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the AlertDialogContent component
 * @example
 * ```tsx
 * import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogTrigger } from './components/TF-ui/alert-dialog'
 * 
 * <AlertDialog>
     <AlertDialogTrigger>Open</AlertDialogTrigger>
      <AlertDialogContent>
     </AlertDialogContent>
  </AlertDialog>
 * ```
 */
const AlertDialogContent = React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Content>,AlertDialogContentProps>(({className, ...props}, ref)=>(
	<div className=''>
	<AlertDialogPortal >
		<AlertDialogOverlay/>

<AlertDialogPrimitive.Content
		ref={ref}
		className={cn('fixed squircle left-1/2 top-1/2 z-50 flex flex-col h-180 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 bg-white shadow-md space-y-6 rounded-lg px-6 py-6', className)}
		{...props}
		/>
	</AlertDialogPortal>
</div>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

/**
This is considered the main component and includes the title and description components
 * @param {AlertDialogHeaderProps} props he properties for the AlertDialogHeader component.
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the AlertDialogHeader component
 * @example
 * ```tsx
 *import { AlertDialog, AlertDialogContent, AlertDialogDescription,  AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './components/TF-ui/alert-dialog'
 * 
 * <AlertDialog>
		 <AlertDialogTrigger>Open</AlertDialogTrigger>
		  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Title</AlertDialogTitle>
      <AlertDialogDescription>
      The leaves danced gently in the breeze, their rustling a symphony of nature’s.
      </AlertDialogDescription>
    </AlertDialogHeader>
  </AlertDialogContent>
	</AlertDialog>
 * ```
 */
const AlertDialogHeader = ({
	className,
	...props
}:AlertDialogHeaderProps)=>(
	<div className={cn('flex h-72 w-432 flex-col text-center sm:text-left', className)}
	{...props}
	/>
)
AlertDialogHeader.displayName = 'AlertDialogHeader'

/**
It's a footer component inside a content component that takes action and cancel components inside it

 * @param {AlertDialogFooterProps} props he properties for the AlertDialogFooter component.
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the AlertDialogFooter component
 * @example
 * ```tsx
 * import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './components/TF-ui/alert-dialog'
 * <AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Title</AlertDialogTitle>
      <AlertDialogDescription>
      The leaves danced gently in the breeze, their rustling a symphony of nature’s.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
		  <AlertDialogCancel className='sm:w-18 text-sm'>Button</AlertDialogCancel>
      <AlertDialogAction className='sm:w-18 text-sm'>Button</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
 */
const AlertDialogFooter = ({
	className, ...props
}:AlertDialogFooterProps)=>(
	<div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end gap-2 h-36", className)}
	{...props}
	/>
)
AlertDialogFooter.displayName = "AlertDialogFooter"

/**
 * The header component inside this parent component writes a title to this popup window
 * @param {AlertDialogTitleProps} props he properties for the AlertDialogTitle component.
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the AlertDialogTitle component
 * @example
 * ```tsx
 * import { AlertDialog,  AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './components/TF-ui/alert-dialog'
 * 
 * <AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Title</AlertDialogTitle>
    </AlertDialogHeader>
  </AlertDialogContent>
</AlertDialog>
 * ```
 */
const AlertDialogTitle = React.forwardRef<
React.ElementRef<typeof AlertDialogPrimitive.Title>,AlertDialogTitleProps
>(({className, ...props}, ref)=>(
	<AlertDialogPrimitive.Title ref={ref} className={cn("text-xl w-432 font-medium text-neutral-950 font-inter", className)}
	{...props}
	/>
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

/**
 * Inside this main component, the AlertDialogDescription component writes a description in the alert box
 * 
 * @param {AlertDialogDescriptionProps} props he properties for the AlertDialogDescription component.
 *  * @param {React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Description>} ref A reference to a DOM element
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the AlertDialogDescription component
 * @example
 * ```tsx
 * import { AlertDialog,  AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './components/TF-ui/alert-dialog'
 * 	
 * <AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Title</AlertDialogTitle>
      <AlertDialogDescription>
      The leaves danced gently in the breeze, their rustling a symphony of nature’s.
      </AlertDialogDescription>
    </AlertDialogHeader>
  </AlertDialogContent>
</AlertDialog>
 * ```
 */
const AlertDialogDescription = React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Description>, AlertDialogDescriptionProps>(({className ,...props}, ref)=>(
	<AlertDialogPrimitive.Description ref={ref} className={cn("text-sm text-neutral-500 h-10 w-432 pt-1 font-inter", className)}
	
	{...props}
	/>
))
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName

/**
 * It is the AlertDialogAction component that performs this action
 * @param {AlertDialogActionProps} props he properties for the AlertDialogAction component.
 * @param {React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Action>} ref A reference to a DOM element
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the AlertDialogAction component
 * @example
 * ```tsx
 * import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './components/TF-ui/alert-dialog'
 * 
 * <AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Title</AlertDialogTitle>
      <AlertDialogDescription>
      The leaves danced gently in the breeze, their rustling a symphony of nature’s.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogAction className='sm:w-18 text-sm'>Button</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
 */
const AlertDialogAction = React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Action>,AlertDialogActionProps>(({className,...props}, ref)=>(
	<AlertDialogPrimitive.Action 
	ref={ref}
	className={cn(buttonVariants(), className)}
	{...props}
	/>
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

/**
 * This is the component that closes the warning window
 * @param {AlertDialogCancelProps} props he properties for the AlertDialogCancel component.
 * @param {React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Cancel>} ref A reference to a DOM element
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the AlertDialogCancel component
 * @example
 * ```tsx
 * import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './components/TF-ui/alert-dialog'
 * 	
 * <AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Title</AlertDialogTitle>
      <AlertDialogDescription>
      The leaves danced gently in the breeze, their rustling a symphony of nature’s.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel className='sm:w-18 text-sm'>Button</AlertDialogCancel>
      <AlertDialogAction className='sm:w-18 text-sm'>Button</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
 * ```
 */
const AlertDialogCancel = React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Cancel>, AlertDialogCancelProps>(({className ,...props} ,ref)=>(
	<AlertDialogPrimitive.Cancel ref={ref}
	className={cn(buttonVariants({ variant: "outline" }),className)}
	{...props}
	/>
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName
export type {AlertDialogOverlayProps, AlertDialogContentProps,AlertDialogHeaderProps, AlertDialogFooterProps, AlertDialogTitleProps, AlertDialogDescriptionProps, AlertDialogActionProps, AlertDialogCancelProps}
export {
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
	AlertDialog
}

