/**
 * @file carousel.tsx A carousel with motion and swipe built using Embla.
 * @overview A carousel with movement and swipe built using Embla. See the example for using this carousel
 * @example
 * ```tsx
 * import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/TF-ui/carousel'
 * <Carousel className="w-full max-w-[370px]">
      <CarouselContent>
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index} >
            <div className="p-1">
              <Card className='w-[360px]'>
                <CardContent className="flex aspect-square items-center justify-center p-6">
              
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    ```

 * @require "class-variance-authority": "^0.7.0" - npm i class-variance-authority@0.7.0
 * @require "embla-carousel-react": "^8.1.7" - npm i embla-carousel-react@8.1.7
 * @require  "@tabler/icons-react": "^3.11.0" - npm i @tabler/icons-react@3.11.0
 * @require  npm i tailfiront button-component
 * @require  npm i houdini-squircle
 */

 /**
  * @license carousel.tsx
  */
import { cn } from "@/lib/utils"
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { type VariantProps } from 'class-variance-authority'
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import * as React from "react"
import { Button, buttonVariants } from './button'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

/**
 * @type {Object} CarouselProps - Props for the Carousel component.
 * @property {CarouselOptions} opts - Options for the Embla Carousel.
 * @property {CarouselPlugin[]} plugins - Plugins for the Embla Carousel.
 * @property {"horizontal"|"vertical"} orientation="horizontal" - Orientation of the Carousel.
 * @property {Function} setApi - Callback to set the Embla Carousel API.
 */
type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

/**
 * @typedef {Object} CarouselContextProps - Context props for the Carousel.
 * @property {Object} carouselRef - Ref for the Carousel.
 * @property {Object} api - API for the Carousel.
 * @property {Function} scrollPrev - Function to scroll to the previous item.
 * @property {Function} scrollNext - Function to scroll to the next item.
 * @property {boolean} canScrollPrev - Boolean indicating if scrolling to the previous item is possible.
 * @property {boolean} canScrollNext - Boolean indicating if scrolling to the next item is possible.
 * @extends CarouselProps
 * 
 */
type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

/**
 * @interface CarouselContentProps extends React.HTMLAttributes<HTMLDivElement>
 * @property {string} className Optional additional class names for custom styles
 */
interface CarouselContentProps extends  React.HTMLAttributes<HTMLDivElement> {
  className?: string
}
/**
 * @interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement>
 * @property {string} className Optional additional class names for custom styles
 */
interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}
/**
 * @interface CarouselPreviousProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants>
 * @property {string} className Optional additional class names for custom styles
 */
interface CarouselPreviousProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants>{
	className?: string
}
/**
 * @interface    extends React.ComponentPropsWithoutRef<typeof Button>
 * @property {string} className Optional additional class names for custom styles
 */
interface CarouselNextProps extends React.ComponentPropsWithoutRef<typeof Button> {
  className?: string;
}
/**
 * Context for the carousel 
 */
const CarouselContext = React.createContext<CarouselContextProps | null>(null)
/**
 * Custom hook to use Carousel context.
 * @return context
 */
function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

/**
 * Carouse Component Content Component Use this component to wrap products in a carousel
 * @param {CarouselContentProps} props Interface for adjusting the carousel content component.
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the CarouselContent component
 */
const CarouselContent = React.forwardRef<
  HTMLDivElement,CarouselContentProps
 
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

/**
 * This component is used to wrap your elements
 * @param {CarouselItemProps} props Interface for adjusting the carousel item component.
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the CarouselItem component
 */
const CarouselItem = React.forwardRef<HTMLDivElement,CarouselItemProps>(({className ,...props}, ref)=>{
	const {orientation} = useCarousel()

	return(
		<div ref={ref} role='group' aria-roledescription='slide'
		className={cn('shrink-0 grow-0 basis-full',orientation === 'horizontal' ? 'pl-4 ':"pt-4", className)}
		{...props}
		/>
	)
})
CarouselItem.displayName = "CarouselItem"

/**
 * this component is used to reverse the products in the carousel
 * @param {CarouselPreviousProps} props Interface for adjusting the carousel previous component.
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @param variant - The button variants
 * @param size - The button sizes
 * @returns {JSX.Element} Returns the CarouselPrevious component
 */
const CarouselPrevious = React.forwardRef<HTMLButtonElement, CarouselPreviousProps >(({className ,variant='outline', size='icon' ,...props},ref)=>{
	const {orientation, scrollPrev, canScrollPrev} = useCarousel()

	return(
		<Button ref={ref} variant={variant} size={size} className={cn('absolute  size-10 rounded-lg', orientation === 'horizontal' ? '-left-12 top-1/2 -translate-y-1/2' :'-top-12 left-1/2 -translate-x-1/2 rotate-90 ', className)} disabled={!canScrollPrev} onClick={scrollPrev} {...props}>
			<IconChevronLeft className='size-4 text-neutral-500'/>
			<span className='sr-only'>Previous</span>
		</Button>
	)
})

CarouselPrevious.displayName = "CarouselPrevious"

/**
 * This component is used to scroll the contents of the carousel forward
 * @param {CarouselNextProps} props Interface for adjusting the carousel next component.
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @param variant - The button variants
 * @param size - The button sizes
 * @returns {JSX.Element} Returns the CarouselNext component
 */
const CarouselNext = React.forwardRef<HTMLButtonElement, CarouselNextProps>(
  ({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute size-10 rounded-lg",
          orientation === "horizontal"
            ? "-right-12 top-1/2 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <IconChevronRight className="size-4 text-neutral-500"/>
        <span className="sr-only">Next</span>
      </Button>
    );
  }
);
CarouselNext.displayName = "CarouselNext";

/**
 * Carousel parent component This component is the parent element that wraps all elements
 * @param {CarouselProps} props Interface for adjusting the carousel component.
 * @param {string} className Optional additional class names for custom styles
 * @param {object} props to receive props
 * @returns {JSX.Element} Returns the Carousel component
 * ```tsx
 * import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './  
 * components/TF-ui/carousel'
 * 
 * <Carousel className="w-full max-w-[370px]">
      <CarouselContent>
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index} >
            <div className="p-1">
              <Card className='w-[360px]'>
                <CardContent className="flex aspect-square items-center justify-center p-6">
              
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    ```
 */
const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"
export type {CarouselContentProps, CarouselItemProps,CarouselPreviousProps,CarouselNextProps }
export {
  Carousel,
  CarouselContent,
  CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi
}