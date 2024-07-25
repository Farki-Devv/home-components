import { cn } from '@/lib/utils';
import React from 'react'
interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement>{
	className?:string
}
function Skeleton({
	className,
	...props
}:SkeletonProps){
	return(
		<div className={cn("animate-pulse rounded-md bg-neutral-100", className)}
		{...props}
		/>
	)
}
export {Skeleton}