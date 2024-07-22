/**
 * @file breadcrumb.tsx Displays the path to the current resource using a hierarchy of links.
 * 
 * @overview This component is used to display the path to the current resource. see example to use this component
 * @example
 * ```tsx
 * import { Breadcrumb, BreadcrumbItem, BreadcrumbList } from './components/TF-ui/breadcrumb'
 * 
 * 
 * <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/" className='w-10 '>Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
    <BreadcrumbEllipsis/>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components" className='w-13 flex gap-1 items-center'>Page <IconChevronDown className='size-3 text-neutral-400'/></BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
  
    <BreadcrumbItem>
      <BreadcrumbPage className='w-15'>Current Page</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```
 * @require "@radix-ui/react-slot": "^1.1.0" - npm install @radix-ui/react-slot@1.1.0
 */
/**
 * @license breadcrumb.tsx
 */
import * as React from 'react'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { ChevronRight, MoreHorizontal } from 'lucide-react'

/**
 * @interface BreadcrumbProps The breadcrumb component is used to display the path to the current resource.
 * @property {React.ReactNode} separator The separator between the breadcrumb items.
 */
interface BreadcrumbProps extends React.ComponentPropsWithoutRef<'nav'>{
		separator?:React.ReactNode
}
/**
 * @interface BreadcrumbListProps The breadcrumb list component is used to display the path to the current resource
 * @property {string} className Optional additional class names for custom styles
 */
interface BreadcrumbListProps extends React.ComponentPropsWithoutRef<'ol'>{
	className?:string
}

/**
 * @interface BreadcrumbItemProps The breadcrumb item component is used to display the path to the current resource
 * @property {string} className Optional additional class names for custom style
 */
interface BreadcrumbItemProps extends React.ComponentPropsWithoutRef<'li'>{
	className?:string
}

/**
 * @interface BreadcrumbLinkProps The breadcrumb link component is used to display the path to the current resource
 * @property {string} className Optional additional class names for custom styles
 * @property {boolean} asChild Optional additional class names for custom styles
 */
interface BreadcrumbLinkProps extends React.ComponentPropsWithoutRef<'a'>{
	asChild?:boolean
	className?:string
}
/**
 * @interface BreadcrumbPageProps The breadcrumb page component is used to display the path to the current resource
 * @property {string} className Optional additional class names for custom styles
 */
interface BreadcrumbPageProps extends React.ComponentPropsWithoutRef<'span'>{
	className?:string
}
/**
 * @interface BreadcrumbSeparatorProps The breadcrumb separator component is used to display the path to the current resource
 * @property {string} className Optional additional class names for custom styles
 */
interface BreadcrumbSeparatorProps extends React.ComponentPropsWithoutRef<'li'>{
	className?:string
}

/**
 * @interface BreadcrumbEllipsisProps The breadcrumb ellipsis component is used to display the path to the current resource
 * @property {string} className Optional additional class names for custom styles
 */
interface BreadcrumbEllipsisProps extends React.ComponentPropsWithoutRef<'span'>{
	className?:string
}
/**
 * The breadcrumb list component is used to display the path to the current resource
 * @param {BreadcrumbListProps} props The properties for the BreadcrumbList component
 * @param {React.Ref<HTMLOListElement>} ref A reference to a DOM element
 * @param {object} props to receive props
 * @param {string} className Optional additional class names for custom styles
 * @returns {JSX.Element} Returns the BreadcrumbList component
 */
const BreadcrumbList = React.forwardRef<HTMLOListElement, BreadcrumbListProps>(({className ,...props}, ref)=>(
	<ol ref={ref} className={cn("flex items-center w-290 h-5 gap-2  text-sm font-normal text-muted-foreground font-inter", className)} {...props}/>
))
BreadcrumbList.displayName = 'BreadcrumbList'

/**
 * The breadcrumb item component is used to display the path to the current resource
 * @param {BreadcrumbItemProps} props The properties for the BreadcrumbItem component
 * @param {React.Ref<HTMLLIElement>} ref A reference to a DOM element
 * @param {object} props to receive props
 * @param {string} className Optional additional class names for custom styles
 * @returns {JSX.Element} Returns the BreadcrumbItem component
 */
const BreadcrumbItem = React.forwardRef<HTMLLIElement ,BreadcrumbItemProps>(({className, ...props} ,ref)=>(
	<li ref={ref} className={cn('inline-flex items-center ', className)}
	{...props}
	/>
))
BreadcrumbItem.displayName = 'BreadcrumbItem'

/**
 * The breadcrumb link component is used to display the path to the current resource
 * @param {BreadcrumbLinkProps} props The properties for the BreadcrumbLink component
 * @param {React.Ref<HTMLAnchorElement>} ref A reference to a DOM element
 * @param {object} props to receive props
 * @param {string} className Optional additional class names for custom styles
 * @returns {JSX.Element} Returns the BreadcrumbLink component
 */
const BreadcrumbLink = React.forwardRef<HTMLAnchorElement ,BreadcrumbLinkProps>(({asChild ,className ,...props}, ref)=>{
	const Comp = asChild ? Slot : 'a'

	return(
		<Comp ref={ref} className={cn('text-neutral-400', className)} {...props}/>
	)
})
BreadcrumbLink.displayName = 'BreadcrumbLink'
/**
 * The breadcrumb page component shows the current page
 * @param {BreadcrumbPageProps} props The properties for the BreadcrumbPage component
 * @param {React.Ref<HTMLSpanElement>} ref A reference to a DOM element
 * @param {object} props to receive props
 * @param {string} className Optional additional class names for custom styles
 * @returns {JSX.Element} Returns the BreadcrumbPage component
 */
const BreadcrumbPage = React.forwardRef<HTMLSpanElement, BreadcrumbPageProps>(({className, ...props} ,ref)=>(
	<span ref={ref} role='link' aria-disabled='true' aria-current='page' className={cn("font-normal text-neutral-950", className)} {...props}/>
))
BreadcrumbPage.displayName = 'BreadcrumbPage'

/**
 * The breadcrumb separator component is used to display the path to the current resource
 * @param {BreadcrumbSeparatorProps} props The properties for the BreadcrumbSeparator component
 * @param {React.Ref<HTMLLIElement>} ref A reference to a DOM element
 * @param {object} props to receive props
 * @param {string} className Optional additional class names for custom styles
 * @param {string} children The children of the BreadcrumbSeparator component
 * @returns {JSX.Element} Returns the BreadcrumbSeparator component
 */
const BreadcrumbSeparator = ({
	children,
	className,
	...props
}:BreadcrumbSeparatorProps)=>(
	<li role='presentation' aria-hidden='true' className={cn("[&>svg]:size-4", className)} {...props}>
		{children ?? <ChevronRight className='text-neutral-400'/>}
	</li>
)
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'

/**
 * The breadcrumb ellipsis component is used to display the path to the current resource
 * @param {BreadcrumbEllipsisProps} props The properties for the BreadcrumbEllipsis component
 * @param {object} props to receive props
 * @param {string} className Optional additional class names for custom styles
 * @returns {JSX.Element} Returns the BreadcrumbEllipsis component
 */
const BreadcrumbEllipsis = ({
	className,
	...props
}:BreadcrumbEllipsisProps)=>(
	<span role='presentation' aria-hidden='true' className={cn("flex size-4 items-center justify-center text-neutral-400", className)} {...props}>
		<MoreHorizontal/>
		<span className='sr-only'>More</span>
	</span>
)
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis'

/**
 * Displays the path to the current resource using a hierarchy of links.
 * @param {BreadcrumbProps} props he properties for the Breadcrumb component.
 * @param {React.Ref<HTMLElement>} ref A reference to a DOM element
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the Breadcrumb component
 * @example
 * ```tsx
  * import { Breadcrumb, BreadcrumbItem, BreadcrumbList } from './components/TF-ui/breadcrumb'
 * 
 * <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/" className='w-10 '>Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
    <BreadcrumbEllipsis/>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components" className='w-13 flex gap-1 items-center'>Page <IconChevronDown className='size-3 text-neutral-400'/></BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
  
    <BreadcrumbItem>
      <BreadcrumbPage className='w-15'>Current Page</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
 */

const Breadcrumb = React.forwardRef<HTMLElement ,BreadcrumbProps>(({...props}, ref)=><nav ref={ref} aria-label='breadcrumb' {...props}/>)
Breadcrumb.displayName = 'Breadcrumb'



export type {BreadcrumbProps, BreadcrumbItemProps, BreadcrumbLinkProps, BreadcrumbPageProps, BreadcrumbSeparatorProps, BreadcrumbEllipsisProps}
export {  BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Breadcrumb }
