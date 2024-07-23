/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import './index.css'

import { Checkbox } from './components/TF-ui/checkbox'

import { Calendar } from './components/TF-ui/calendar'

import { DataTable } from './components/TF-ui/data-table'
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './components/TF-ui/breadcrumb'
import { IconChevronDown } from '@tabler/icons-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/TF-ui/card'
import { Input } from './components/TF-ui/input'
import { Button } from './components/TF-ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/TF-ui/carousel'

// import { Button } from './components/ui/button'
function App() {
  React.useEffect(() => {
    (CSS as any).paintWorklet.addModule("squircle.min.js");
  }, []);

  return (
    <>
<div className='max-w-7xl mx-auto'>




<div className='ml-10 mt-2 space-y-2'>
  {/* <Breadcrumb> */}


{/* <Breadcrumb>
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

<Breadcrumb>
  <BreadcrumbList className='w-88'>
    <BreadcrumbItem>
      <BreadcrumbLink href="/" className='w-10 '>Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator className='text-neutral-400'>
       /
    </BreadcrumbSeparator>
    <BreadcrumbItem>
    <BreadcrumbEllipsis/>
    </BreadcrumbItem>
    <BreadcrumbSeparator className='text-neutral-400'>
       /
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbLink href="/components" className='w-13 flex gap-1 items-center'>Page <IconChevronDown className='size-3 text-neutral-400'/></BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator className='text-neutral-400'>
    /
    </BreadcrumbSeparator>
  
    <BreadcrumbItem>
      <BreadcrumbPage className='w-15'>Current Page</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb> */}
</div>





<div className='ml-10'>
  {/* <Card> */}
{/* <Card className='w-[320px] h-[184px] rounded-lg'>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Subtitle</CardDescription>
  </CardHeader>
  <CardContent>
    <Input className='h-9 placeholder:text-neutral-400 placeholder:text-sm placeholder:font-inter' placeholder='Text' />
  </CardContent>
  <CardFooter className='flex justify-between'>
    <Button variant={'outline'} className='w-[71px]  text-neutral-950'>Cancel</Button>
    <Button className='w-[60px] text-white'>Done</Button>

  </CardFooter>
</Card> */}
</div>

<div className='ml-14'>
<Carousel className="w-full max-w-[370px]">
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
</div>
<div className='ml-2 mt-10 w-[900px]'>
{/* <Calendar/> */}




{/* <Checkbox/> */}
<div className='ml-20 '>


{/* <Carousel className="w-full max-w-[370px]">
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
    </Carousel> */}

  
    <DataTable/>
    <Checkbox/>
    </div>
    <Calendar/>
    {/* <DemoCalendar /> */}
    {/* <Button className='w-[60px] text-white'>Done</Button> */}

</div>
</div>




   </>
  )
}

export default App
