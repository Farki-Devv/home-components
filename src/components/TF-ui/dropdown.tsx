

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { Check, ChevronRight } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

interface DropdownMenuSubTriggerProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger>{
	inset?:boolean
	className?:string
}
const DropdownMenuSubTrigger = React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>, DropdownMenuSubTriggerProps>(({className, inset, children , ...props}, ref)=>(
	<DropdownMenuPrimitive.SubTrigger
	ref={ref}
	className={cn("flex  cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm outline-none focus:bg-neutral-50 font-inter data-[state=open]:bg-accent",
		inset && "pl-8",
		className
	)}
	{...props}
	>
		{children}
		<ChevronRight className='ml-auto size-4'/>
	</DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName
interface DropdownMenuSubContentProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>{
	className?:string
}
const DropdownMenuSubContent = React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.SubContent>, DropdownMenuSubContentProps>(({className ,...props}, ref)=>(
	<DropdownMenuPrimitive.SubContent 
	ref={ref} 
	className={cn('z-50 min-w-[8rem] overflow-hidden rounded-md  bg-white p-1 text-neutral-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-1 ml-2 data-[side=top]:slide-in-from-bottom-2 squircle', className)}
	{...props}
	/>
))
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName
interface DropdownMenuContentProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>{
	sideOffset?:number
	className?:string
}
const DropdownMenuContent = React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.Content> , DropdownMenuContentProps>(({className, sideOffset = 4, ...props}, ref)=>(
	<DropdownMenuPrimitive.Portal>
		<DropdownMenuPrimitive.Content
		ref={ref}
		sideOffset={sideOffset}
		className={cn("z-50 squircle min-w-[8rem] overflow-hidden bg-white rounded-lg border-neutral-200  p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",className)}
		{...props}
		/>
	</DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName
interface DropdownMenuItemProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>{
	inset?:boolean
	className?:string
}
const DropdownMenuItem = React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.Item>, DropdownMenuItemProps>(({className, inset ,...props},ref)=>(
	<DropdownMenuPrimitive.Item ref={ref} className={cn("relative flex cursor-default select-none items-center text-neutral-950	h-9 rounded-sm px-3 py-1.5 text-sm outline-none transition-colors font-inter focus:bg-neutral-50 data-[disabled]:pointer-events-none data-[disabled]:text-neutral-400", inset && "pl-8", className)} {...props}/>
))

DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName
interface DropdownMenuCheckboxItemProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>{
	checked?:boolean
	className?:string
	children?:React.ReactNode
}
const DropdownMenuCheckboxItem = React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>, DropdownMenuCheckboxItemProps>(({className, children, checked, ...props}, ref)=>(
	<DropdownMenuPrimitive.CheckboxItem
	ref={ref}
	className={cn('relative flex cursor-pointer select-none h-9 items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none text-neutral-950 transition-colors focus:bg-neutral-50 nd data-[disabled]:pointer-events-none data-[disabled]:opacity-50', className)}
	checked={checked}
	{...props}
	>
		<span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
			<DropdownMenuPrimitive.ItemIndicator>
				<Check className='size-4' />
			</DropdownMenuPrimitive.ItemIndicator>
		</span>
		{children}
	</DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

	interface DropdownMenuRadioItemProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>{
		className?:string
		children?:React.ReactNode
	}
const DropdownMenuRadioItem = React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>, DropdownMenuRadioItemProps>(({className, children, ...props}, ref)=>(
	<DropdownMenuPrimitive.RadioItem
	ref={ref}
	className={cn("relative flex h-9 cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-neutral-50 focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)}
	{...props}
	>
		<span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
			<DropdownMenuPrimitive.ItemIndicator>
			<Check className='size-4' />
			</DropdownMenuPrimitive.ItemIndicator>
		</span>
		{children}
	</DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName
interface DropdownMenuLabelProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>{
	inset?:boolean
	className?:string
}
const DropdownMenuLabel = React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.Label>, DropdownMenuLabelProps>(({className, inset, ...props}, ref)=>(
	<DropdownMenuPrimitive.Label ref={ref} className={cn("px-3 py-1.5 flex items-center text-sm font-medium font-inter text-neutral-950" ,inset && 'pl-8', className)}
	{...props}
	/>
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName
interface DropdownMenuSeparatorProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>{
	className?:string
}
const DropdownMenuSeparator = React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.Separator>, DropdownMenuSeparatorProps>(({className,...props},ref)=>(
	<DropdownMenuPrimitive.Separator ref={ref} className={cn("-mx-1   my-1 h-px bg-neutral-200", className)} 
	{...props}
	/>
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
	className,
	...props
}:React.HTMLAttributes<HTMLSpanElement>)=>{
	return(
		<span className={cn("ml-auto text-sm font-inter tracking-widest text-neutral-500", className)}
		{...props}
		/>
	)
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuCheckboxItem,
	DropdownMenuRadioItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuGroup,
	DropdownMenuPortal,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuRadioGroup
}