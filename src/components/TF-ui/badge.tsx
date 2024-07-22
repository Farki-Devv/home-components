/**
 * @file badge.tsx Badge component
 * @overview Displays a badge or a component that looks like a badge.
 * @example    
 * ```tsx
 * import { Badge } from './components/TF-ui/badge'
 * 
 * <Badge>Badge</Badge>
 * ```
 * @require "class-variance-authority": "^0.7.0" - npm i class-variance-authority@0.7.0
 * 
 */

/**
 * @license badge.tsx
 */
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'
/**
 * There are four options for badge: default, destructive, secondary and outline
 */
const badgeVariants = cva('inline-flex items-center justify-center rounded-lg px-2 py-0.5 w-53 text-xs font-medium font-inter font-medium h-5 rounded-lg', 
    {
        variants:{
            variant:{
                default:"bg-blue-800 text-white squircle-default",
                secondary:"bg-neutral-100 text-neutral-950 squircle-secondary",
                destructive:"bg-red-800 text-white squircle-destructive-badge",
                outline:"text-neutral-950 text-neutral-950  bg-white squircle-outline",
            },
        },
        defaultVariants:{
            variant:"default"
        }
    }
)
/**
 * @interface BadgeProps React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> for Badge component
 * @property {string} className Optional additional class names for custom styles
 */
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants>{
    className?:string
}    

/**
 * You can use the Badge main component by looking at the example
 * @param {BadgeProps} props The properties for the Badge component.
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the Badge component
 * @example
 * ```tsx
 * import { Badge } from './components/TF-ui/badge'
 * 
 * <Badge>Badge</Badge>
 * 
 */
function Badge({className, variant, ...props}:BadgeProps){
    return(
        
                <div className={cn(badgeVariants({variant}), className)} {...props}/>
        
    )
}
export { Badge, badgeVariants }
export type { BadgeProps }
