/**
 * @file card.tsx A card is a flexible and extensible content container.
 * @overview Displays a card with header, content, and footer.
 * @example
 * ```tsx
 * import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/TF-ui/card'
 * 
 * <Card className='w-[320px] h-[184px] rounded-lg'>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Subtitle</CardDescription>
  </CardHeader>
  <CardContent>
    <Input className='h-9 placeholder:text-neutral-400 placeholder:text-sm placeholder:font-inter' placeholder='Text' />
  </CardContent>
  <CardFooter className='flex justify-between'>
    <Button variant={'outline'} className='w-[71px]  text-neutral-950'>Cancel</Button>
    <Button className='w-[60px] text-white'>Done</Button>

  </CardFooter>
</Card>
```
 * @require
 */

/**
 * @license card.tsx
 */
import { cn } from '@/lib/utils'
import * as React from 'react'

/**
 * @interface CardProps extends React.HTMLAttributes<HTMLDivElement>
 * @property {string} className Optional additional class names for custom styles
 */
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string
}
/**
 * @interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement>
 * @property {string} className Optional additional class names for custom styles
 */
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string
}
/**
 * @interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement>
 * @property {string} className Optional additional class names for custom styles
 */
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	className?: string
}
/**
 * @interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement>
 * @property {string} className Optional additional class names for custom styles
 */
interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
	className?: string
}
/**
 * @interface CardContentProps extends React.HTMLAttributes<HTMLDivElement>
 * @property {string} className Optional additional class names for custom styles
 */
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string
}
/**
 * @interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement>
 * @property {string} className Optional additional class names for custom styles
 */
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string
}


/**
 * this is the header component inside the card component
 * @param {CardHeaderProps} props Interface for adjusting the card header component.
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the CardHeader component
 */



const CardHeader = React.forwardRef<HTMLDivElement ,CardHeaderProps>(({className, ...props}, ref)=>(
	<div ref={ref} className={cn("flex flex-col h-12 space-y-1", className)}
	{...props}
	/>
))
CardHeader.displayName = 'CardHeader'
/**
 * This CardTitle component is used inside this header component
 * @param {CardTitleProps} props Interface for adjusting the card title component.
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the CardTitle component
 */

const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(({className, ...props}, ref)=>(
	<h3 ref={ref} className={cn("text-base h-6 text-neutral-950 font-medium leading-none tracking-tight", className)}
	{...props}
	/>
))
CardTitle.displayName = 'CardTitle'

/**
 * This CardDescription component is used inside this header component
 * @param {CardDescriptionProps} props Interface for adjusting the card description component.
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the CardDescription component
 */

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(({className ,...props}, ref)=>(
	<p ref={ref} className={cn("text-sm text-neutral-500", className)} {...props}/>
))
CardDescription.displayName = 'CardDescription'
/**
 * this cardContent component we can put whatever we want inside this component
 * @param {CardContentProps} props Interface for adjusting the card content component.
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the CardContent component
 */

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({className ,...props}, ref)=>(
	<div ref={ref} className={cn("", className)} {...props}/>

))
CardContent.displayName = 'CardContent'

/**
 * this cardFooter component we can put whatever we want inside this component
 * @param {CardFooterProps} props Interface for adjusting the card footer component.
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the CardFooter component
 */

const CardFooter = React.forwardRef<HTMLDivElement ,CardFooterProps>(({className, ...props}, ref)=>(
	<div ref={ref} className={cn('flex items-center', className)} {...props}/>
))
CardFooter.displayName = 'CardFooter'
/**
 * This is the main card component that wraps all the other components
 * @param {CardProps} props Interface for adjusting the card component.
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the Card component
 */
const Card = React.forwardRef<HTMLDivElement ,CardProps>(({className ,...props}, ref)=>(
	<div 
	ref={ref}
	className={cn('rounded-lg  border-neutral-200 font-inter squircle bg-card px-4 py-4 shadow-sm space-y-4', className)}
	{...props}
	/>
))
Card.displayName = 'Card'

export type {CardProps, CardHeaderProps, CardTitleProps, CardDescriptionProps, CardContentProps, CardFooterProps}
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }

