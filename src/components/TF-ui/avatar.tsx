/**
 * @file avatar.tsx An image element with a fallback for representing the user.
 * @overview This component is used to represent the user's avatar. see example to use this component
 * @example 
 * ```tsx
 * import { Avatar, AvatarFallback, AvatarImage } from './components/TF-ui/avatar'
 * import AvatarLogo from '../public/avatar.svg'
 * 
   <Avatar>
      <AvatarImage src={AvatarLogo} />
      <AvatarFallback>CN</AvatarFallback>
     </Avatar>
 * ```
		 @require "@radix-ui/react-avatar": "^1.1.0" - npm i @radix-ui/react-avatar@1.1.0
 */

	/**
	 * @license avatar.tsx
	 */
import { cn } from '@/lib/utils'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import * as React from 'react'


/**
 * @interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> for Avatar component
 * @property {string} className Optional additional class names for custom styles
 */
interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
	className?:string
}

/**
 * @interface AvatarImageProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> for AvatarImage component
 * @property {string} className Optional additional class names for custom styles
 */
interface AvatarImageProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> {
	className?:string
}

/**
 * @interface AvatarFallbackProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> for AvatarFallback component
 * @property {string} className Optional additional class names for custom styles
 */
interface AvatarFallbackProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {
	className?:string
}


/**
 * it is the Avatar Image component that puts the user's image through this component, it is possible
 * @param {AvatarImageProps} props The properties for the AvatarImage component.
 * @param {React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Image>>} ref A reference to a DOM element
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the AvatarImage component
 * @example
 * ```tsx
 * import AvatarLogo from '../public/avatar.svg'
 * import { Avatar, AvatarFallback, AvatarImage } from './components/TF-ui/avatar'
 * 
 *  <Avatar>
 *       <AvatarImage src={AvatarLogo} />
 *   </Avatar>
 * ```
 */
const AvatarImage = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Image>,AvatarImageProps>(({className ,...props}, ref)=>(
	<AvatarPrimitive.Image
	ref={ref}
	className={cn('aspect-square h-full w-full' ,className)}
	{...props}
	/>
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName
/**
 This Avatar Fallbackcomponent can replace Avatar Image and will also perform the loading function until the image arrives on the internet in the case of avatarImage.
 * @param {AvatarFallbackProps} props The properties for the AvatarFallback component.
 * @param {React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Fallback>>} ref A reference to a DOM element
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the AvatarFallback component
 * @example
 * ```tsx
 * import { Avatar, AvatarFallback, AvatarImage } from './components/TF-ui/avatar'
 * 
 *  <Avatar>
 *       <AvatarFallback>KK</AvatarFallback>
 *   </Avatar>
 * ```
 */
const AvatarFallback = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Fallback>, AvatarFallbackProps>(({className, ...props}, ref)=>(
	<AvatarPrimitive.Fallback ref={ref} className={cn('flex h-full w-full items-center justify-center rounded-full bg-none text-neutral-400', className)}
	{...props}
	/>
))

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName
/**
 * This is the head component that this component contains all sub components including AvatarFallback and AvatarImage components
 * @param {AvatarProps} props The properties for the Avatar component.
 * @param {React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>>} ref A reference to a DOM element
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the Avatar component
 * @example
 * ```tsx
 * import AvatarLogo from '../public/avatar.svg'
    import { Avatar, AvatarFallback, AvatarImage } from './components/TF-ui/avatar'

 * <Avatar>
       <AvatarImage src={AvatarLogo} />
       <AvatarFallback>CN</AvatarFallback>
    </Avatar>
 * ```
 */
		const Avatar = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>,AvatarProps>(({className ,...props} ,ref)=>(
			<AvatarPrimitive.Root
			ref={ref}
			className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
			{...props}
			/>
		))
Avatar.displayName = AvatarPrimitive.Root.displayName
export type { AvatarProps, AvatarImageProps, AvatarFallbackProps }
export { Avatar, AvatarImage, AvatarFallback }
