import * as React from 'react'

import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { ButtonProps, buttonVariants } from './button'

interface PaginationProps extends React.ComponentProps<'nav'>{
	className?:string	
}
const Pagination = ({className ,...props}:PaginationProps)=>(
	<nav role='navigation' aria-label='pagination' className={cn("mx-auto flex w-full justify-center", className)}
	{...props}
	/>
)
Pagination.displayName = "Pagination"
interface PaginationContentProps extends React.ComponentProps<"ul">{
	className?:string
}
const PaginationContent = React.forwardRef<HTMLUListElement, PaginationContentProps>(({className, ...props}, ref)=>(
	<ul ref={ref} className={cn('flex flex-row font-inter font-medium items-center gap-1', className)}
	{...props}
	/>
))
PaginationContent.displayName = "PaginationContent"
interface PaginationItemProps extends React.ComponentProps<"li">{
	className?:string
}
const PaginationItem = React.forwardRef<HTMLLIElement, PaginationItemProps>(({className, ...props}, ref)=>(
	<li ref={ref} className={cn("", className)} {...props}/>
))
PaginationItem.displayName = "PaginationItem"
type PaginationLinkProps = {
  isActive?: boolean
	className?: string
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a"> 
const PaginationLink = ({
	className, 
	isActive,
	size="icon",
	...props
}:PaginationLinkProps)=>(
   <a aria-current={isActive ? 'page': undefined} className={cn(
		buttonVariants({
			variant: isActive ? "outline" : "ghost",
			size,
		}),
		className
	)}
	{...props}
	/>	
)
PaginationLink.displayName = "PaginationLink"
interface PaginationPreviousProps extends React.ComponentProps<typeof PaginationLink>{
	className?:string
}
const PaginationPrevious = ({
	className,
	...props
}:PaginationPreviousProps)=>(
	<PaginationLink 
	aria-label='Go to previous page'
	size={"default"}
	className={cn('gap-1 pl-2.5 w-[102px]', className)}
	{...props}
	>
		<ChevronLeft className='size-4 text-neutral-500'/>
		<span>Previous</span>
	</PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"
interface PaginationNextProps extends React.ComponentProps<typeof PaginationLink>{
	className?:string
}
const PaginationNext = ({
	className,
	...props
}:PaginationNextProps)=>(
	<PaginationLink 
	aria-label='Go to next page'
	size={'default'}
	className={cn('gap-1 pr-2.5 w-[76px]', className)}
	{...props}
	>
		<span>Next</span>
		<ChevronRight className='size-4 text-neutral-500'/>
	</PaginationLink>
)
PaginationNext.displayName = "PaginationNext"
interface PaginationEllipsisProps extends React.ComponentProps<"span">{
	className?:string
}
const PaginationEllipsis = ({
	className,
	...props
}:PaginationEllipsisProps)=>(
	<span
	aria-hidden
	className={cn("flex w-[19px] h-5 items-center justify-center", className)}
	{...props}
	>
		<MoreHorizontal className='size-4 '/>
		<span className='sr-only'>More pages</span>
	</span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"
export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious }
