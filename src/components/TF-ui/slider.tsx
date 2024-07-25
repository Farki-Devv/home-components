import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'

import { cn } from '@/lib/utils'
import { IconMenu2 } from '@tabler/icons-react'
interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
	className?: string
}
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-neutral-100">
      <SliderPrimitive.Range className="absolute h-full bg-blue-800" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className=" h-6 w-6 rounded-full border border-neutral-200 bg-background ring-offset-background transition-colors  disabled:pointer-events-none disabled:opacity-50 flex items-center justify-center">
  <IconMenu2 className='w-3 text-neutral-200 transform rotate-90' />
</SliderPrimitive.Thumb>

  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName
export type { SliderProps }
export { Slider }
