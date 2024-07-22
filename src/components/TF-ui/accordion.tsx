/**
 * @file accordion.tsx  A set of interactive headers arranged vertically, each revealing a portion of the content..In this file, the main accordion component and other sub component AccordionItem, AccordionTrigger and AccordionContent, as shown in the example below
 * 
 * @overview In this file accordion component, the main function of this component is a set of vertically placed headers, the document reveals part of each content, do as shown in the example below
 * @example
 * ```tsx
 * import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/TF-ui/accordion'
 * 
 * <div className='max-w-7xl mx-auto mt-10 px-10'>
    <Accordion type="single" collapsible className='w-324'>
       <AccordionItem value="item-1">
         <AccordionTrigger>Title</AccordionTrigger>
         <AccordionContent>
         The leaves danced gently in the breeze, their rustling a symphony of nature’s.
        </AccordionContent>
      </AccordionItem>
   </Accordion>
    </div>
 * ```
	@require "@radix-ui/react-accordion": "^1.2.0" - npm install @radix-ui/react-accordion@1.2.0 @require "css-houdini-squircle": "^0.3.0" - npm install css-houdini-squircle@0.3.0
 */

	/**
	 * @license accordion.tsx
	*/
import * as React from 'react'
import { cn } from '@/lib/utils'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { IconChevronDown } from '@tabler/icons-react'
	/**
	 * @interface AccordionItemProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> for AccordionItem component
	 * @property {string} className Optional additional class names for custom styles
	 */
	interface AccordionItemProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
		className?:string
	}
	/**
	 * @interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> for AccordionTrigger component
	 * @property {string} className Optional additional class names for custom styles
	 */
	interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
		className?:string
	}
	/**
	 * @interface AccordionContentProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> for AccordionContent component
	 * @property {string} className Optional additional class names for custom styles
	 */
	interface AccordionContentProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>{
		className?:string,
	}
	
	/**
	This component of the components of the accordion element combines all the elements contained in this accordion, that is, surrounds the components of the accordiontrigger and Accordiontent
	 * @param {AccordionItemProps} props The properties for the AccordionItem component.
	 * @param {React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>>} ref A reference to a DOM element
	 * @param {string} className Optional additional class names for custom styles
	 * @param {object} props to receive props
	 * @returns {JSX.Element} Returns the AccordionItem component
	 * @example
	 * ```tsx
	 * import { Accordion, AccordionItem } from '@/components/TF-ui/accordion'
	 * 
	 *  <div className='max-w-7xl mx-auto mt-10 px-10'>
	 * <Accordion type="single" collapsible className='w-324'>
			<AccordionItem value="item-1">
			</AccordionItem>
		 </Accordion>
		 </div>
	 * ```
	 */
	const AccordionItem = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item> ,AccordionItemProps>(({className ,...props}, ref)=>(
		<div className='squircle'>
			<AccordionPrimitive.Item ref={ref} className={cn("rounded-lg border-neutral-200" ,className)}
		{...props}
		/>
		</div>
	))
	AccordionItem.displayName = AccordionPrimitive.Item.displayName
	/**
	 ** The accordion trigger component represents a pressed trigger 
	 * accordion element.
	 * * This component is used to indicate or hide the Associated accordion content.This is when you click on this component, you can see the AccordionContent component and use it to close the AccordionContent component by pressing the 1 button again
	 * @param {AccordionTriggerProps} props Interface for adjusting the accordion trigger component .
	 * @param {React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>>} ref A reference to a DOM element
	 * @param {string} className Optional additional class names for custom styles
	 * @param {object} props to receive props
	 * @returns {JSX.Element} Returns the AccordionTrigger component
	 * @example
	 * ```tsx
	 * import { Accordion AccordionItem, AccordionTrigger } from '@/  components/TF-ui/accordion'
	 * 
	 * <div className='max-w-7xl mx-auto mt-10 px-10'>
	 * <Accordion type="single" collapsible className='w-324'>
				<AccordionItem value="item-1">
				< AccordionTrigger>Title</AccordionTrigger>
				</AccordionItem>
			</Accordion>
			 </div>
	 * ```
	 */
	const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>,AccordionTriggerProps>(({className, children ,...props}, ref)=>(
		<AccordionPrimitive.Header className='flex'>
			<AccordionPrimitive.Trigger
			ref={ref}
			className={cn("flex flex-1 items-center justify-between h-11 px-4 pt-3 pb-3 font-medium text-sm transition-all text-neutral-950 font-inter [&[data-state=open]>svg]:rotate-180", className)}
			{...props}
			>
				{children}
					<IconChevronDown className='size-5 text-neutral-950'/>
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	))
	AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName
	/**
	 *This is the component in the accordion to this component you can see all the content of this component click AccordionTrigger to see the component and the component will be mirrored
	 * @param {AccordionContentProps} props he properties for the AccordionItem component.
	 * @param {React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Content>>} ref A reference to a DOM element
	 * @param {string} className Optional additional class names for custom styles
	 * @param {object} props to receive props
	 * @param {React.ReactNode} children The content to be displayed inside the AccordionContent.
	 * @returns {JSX.Element} Returns the AccordionContent component
	 * @example 
	 * ```tsx
	 * import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/TF-ui/accordion'
	 * 
	    <div className='max-w-7xl mx-auto mt-10 px-10'>
    <Accordion type="single" collapsible className='w-324'>
       <AccordionItem value="item-1">
         <AccordionTrigger>Title</AccordionTrigger>
         <AccordionContent>
         The leaves danced gently in the breeze, their rustling a symphony of nature’s.
        </AccordionContent>
      </AccordionItem>
   </Accordion>
    </div>
	 * ```
	 */
	const AccordionContent = React.forwardRef<
		React.ElementRef<typeof AccordionPrimitive.Content>,
		AccordionContentProps
	>(({ className, children,  ...props }, ref) => (
		<AccordionPrimitive.Content
			ref={ref}
			className="rounded-lg font-normal overflow-hidden text-sm  transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down font-inter"
			{...props}
		>
			<div className={cn("px-4 pb-3 pt-1", className)}>
				<div className='w-292 text-neutral-500 font-normal'>{children}
				</div>
			</div>
		</AccordionPrimitive.Content>
	));
	
	AccordionContent.displayName = AccordionPrimitive.Content.displayName;
	
	/**
	This accordion is the main component, which covers all sub components
	@example 
	```tsx
	    <div className='max-w-7xl mx-auto mt-10 px-10'>
     <Accordion type="single" collapsible className='w-324'>
       <AccordionItem value="item-1">
         <AccordionTrigger>Title</AccordionTrigger>
         <AccordionContent>
         The leaves danced gently in the breeze, their rustling a symphony of nature’s.
        </AccordionContent>
      </AccordionItem>
   </Accordion>
    </div>
	```
	 */
	const Accordion = AccordionPrimitive.Root



export type { AccordionItemProps, AccordionTriggerProps, AccordionContentProps }
export { AccordionContent, AccordionItem, AccordionTrigger, Accordion }