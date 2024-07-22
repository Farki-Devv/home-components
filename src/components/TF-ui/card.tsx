import * as React from 'react'

import {cn} from '@/lib/utils'

const Card = React.forwardRef<HTMLDivElement ,React.HTMLAttributes<HTMLDivElement>>(({className ,...props}, ref)=>(
	<div 
	ref={ref}
	className={cn('rounded-lg border border-neutral-200 font-inter bg-card px-4 py-4 shadow-sm space-y-4', className)}
	{...props}
	/>
))
Card.displayName = 'Card'


const CardHeader = React.forwardRef<HTMLDivElement ,React.HTMLAttributes<HTMLDivElement>>(({className, ...props}, ref)=>(
	<div ref={ref} className={cn("flex flex-col h-12 space-y-1", className)}
	{...props}
	/>
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({className, ...props}, ref)=>(
	<h3 ref={ref} className={cn("text-base h-6 text-neutral-950 font-medium leading-none tracking-tight", className)}
	{...props}
	/>
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({className ,...props}, ref)=>(
	<p ref={ref} className={cn("text-sm text-neutral-500", className)} {...props}/>
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({className ,...props}, ref)=>(
	<div ref={ref} className={cn("", className)} {...props}/>

))
CardContent.displayName = 'CardContent'


const CardFooter = React.forwardRef<HTMLDivElement ,React.HTMLAttributes<HTMLDivElement>>(({className, ...props}, ref)=>(
	<div ref={ref} className={cn('flex items-center', className)} {...props}/>
))
CardFooter.displayName = 'CardFooter'
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }