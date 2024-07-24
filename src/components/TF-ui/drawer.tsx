/**
 * @file drawer.tsx
 * @overview A drawer component for React.
 * @example
 * 	```tsx
 * import { Drawer,  DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './components/TF-ui/drawer'
 * <Drawer>
				<DrawerTrigger>Open</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Title</DrawerTitle>
						<DrawerDescription>Subtitle</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter>
						<Button className='float-right w-[60px] h-9 rounded-lg'>Done</Button>
					</DrawerFooter>
				</DrawerContent>
	 </Drawer>
 * 	```
 * @require "vaul": "^0.9.1" - npm i vaul@0.9.1
 */

  /**
	 * @license drawer.tsx
	 */
import * as React from "react"
import { Drawer as DrawerPrimitive } from 'vaul'
import { cn } from '@/lib/utils'

type DrawerProps = React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Root> & {
	shouldScaleBackground?:boolean
}
/**
 * @interface DrawerOverlayProps extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay> for DrawerOverlay component
 * @property {string} className Optional additional class names for custom styles
 */
interface DrawerOverlayProps extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>{
	className?:string
}
/**
 * @interface DrawerContentProps extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> for DrawerContent component
 * @property {string} className Optional additional class names for custom styles
 */
interface DrawerContentProps extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>{
	className?:string
}
/**
 * @interface DrawerHeaderProps extends React.HTMLAttributes<HTMLDivElement> for DrawerHeader component
 * @property {string} className Optional additional class names for custom styles
 */
interface DrawerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	className?:string
}
/**
 * @interface DrawerFooterProps extends React.HTMLAttributes<HTMLDivElement> for DrawerFooter component
 * @property {string} className Optional additional class names for custom styles
 */
interface DrawerFooterProps extends React.HTMLAttributes<HTMLDivElement> {
	className?:string
}
/**
 * @interface DrawerTitleProps extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title> for DrawerTitle component
 * @property {string} className Optional additional class names for custom styles
 */
interface DrawerTitleProps extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>{
	className?:string
}
/**
 * @interface DrawerDescriptionProps extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description> for DrawerDescription component
 * @property {string} className Optional additional class names for custom styles
 */
interface DrawerDescriptionProps extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>{
	className?:string
}


const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

/**
 * DrawerOverlay - DrawerOverlay component This component is used as background for the Drawer component.
 * @param {DrawerOverlayProps} props The properties for the DrawerOverlay component.
 * @param {React.forwardRef<React.ElementRef<typeof DrawerPrimitive.Overlay>>} ref A reference to a DOM element
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the DrawerOverlay component
 */
const DrawerOverlay = React.forwardRef<React.ElementRef<typeof DrawerPrimitive.Overlay>, DrawerOverlayProps>(({className, ...props}, ref)=>(
	<DrawerPrimitive.Overlay ref={ref} className={cn("fixed inset-0 z-50 bg-neutral-300 ", className)} 
	{...props}
	/>
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName
/**
 * This is the DrawerContent element wrapper
 * @param {DrawerContentProps} props The properties for the DrawerContent component.
 * @param {React.forwardRef<React.ElementRef<typeof DrawerPrimitive.Content>>} ref A reference to a DOM element
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the DrawerContent component
 */
const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  DrawerContentProps
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed bottom-2	  z-50 inset-x-2 m-auto flex h-[144px] flex-col rounded-t-lg   bg-background font-inter",
        className
      )}
      {...props}
    >
      <div className="mx-auto mt-2 h-1 w-[64px] rounded-full bg-neutral-200" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

/**
This drawerHeadr component is the header inside the content component, which contains the title and description components.
@param {DrawerHeaderProps} props The properties for the DrawerHeader component.
@param {string} className Optional additional class names for custom styles
@param {object} props to receive props
@returns {JSX.Element} Returns the DrawerHeader component
 */
const DrawerHeader = ({className, ...props}:DrawerHeaderProps)=>(
	<div className={cn("grid gap-1.5 px-4 mt-[28px] h-12 text-left", className)}
	{...props}
	/>
)
DrawerHeader.displayName = "DrawerHeader"

/**
 * This is the footer below the content of the drawerFooter component 
 * @param {DrawerFooterProps} props The properties for the DrawerFooter component.
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the DrawerFooter component
 */
const DrawerFooter  = ({
	className, ...props
}:DrawerFooterProps)=>(
	<div className={cn("gap-2 h-9 px-4 mt-4 ", className)}
	{...props}
	/>
)
DrawerFooter.displayName = "DrawerFooter"
/**
 * 	ThisDrawerTitle component is used to provide a title for the drawer
 * @param {DrawerTitleProps} props The properties for the DrawerTitle component.
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the DrawerTitle component
 */
const DrawerTitle = React.forwardRef<React.ElementRef<typeof DrawerPrimitive.Title>, DrawerTitleProps>(({className, ...props}, ref)=>(
	<DrawerPrimitive.Title
	ref={ref}
	className={cn("text-base text-neutral-950 font-semibold leading-none tracking-tight", className)}
	{...props}
	/>
))	
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

/**
 * This is the description component for the drawer
 * @param {DrawerDescriptionProps} props The properties for the DrawerDescription component.
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the DrawerDescription component
 */
const DrawerDescription = React.forwardRef<React.ElementRef<typeof DrawerPrimitive.Description>, DrawerDescriptionProps>(({className, ...props} ,ref)=>(
	<DrawerPrimitive.Description ref={ref} className={cn("text-sm text-neutral-500", className)}
	{...props}
	/>
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName
/**
 * Drawer main component
 * A drawer component for React.
 * @param {DrawerProps} props The properties for the Drawer component.
 * @returns {JSX.Element} Returns the Drawer component
 */
const Drawer = ({
	shouldScaleBackground = true,
	...props
}: DrawerProps)=>(
	<DrawerPrimitive.Root 
	shouldScaleBackground={shouldScaleBackground}
	{...props}
	/>
)
Drawer.displayName = "Drawer"
export type {
	DrawerProps,
	DrawerContentProps,
	DrawerHeaderProps,
	DrawerFooterProps,
	DrawerTitleProps,
	DrawerDescriptionProps
}
export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
