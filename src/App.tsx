/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/TF-ui/card'
import './index.css'
import { Input } from './components/ui/input'
import { Button } from './components/TF-ui/button'
import { Checkbox } from './components/TF-ui/checkbox'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/TF-ui/carousel'
import { DataTableDemo } from './components/TF-ui/data-table'

// import { Button } from './components/ui/button'
function App() {
  React.useEffect(() => {
    (CSS as any).paintWorklet.addModule("squircle.min.js");
  }, []);

  return (
    <>
<div className='max-w-7xl mx-auto'>
  {/* alert dialog component */}
        {/* <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Title</AlertDialogTitle>
              <AlertDialogDescription>
              The leaves danced gently in the breeze, their rustling a symphony of nature’s.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className='sm:w-18 text-sm'>Button</AlertDialogCancel>
              <AlertDialogAction className='sm:w-18 text-sm'>Button</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog> */}




        {/* Avatar component */}
   {/* <div className='flex gap-2 mt-2'>
      <Avatar>
        <AvatarFallback>KK</AvatarFallback>
      </Avatar>

      <Avatar>
        <AvatarImage src={AvatarLogo} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
   </div> */}



 {/* Badge component */}
 {/* <div className='flex gap-2 mt-2'>
    <Badge>Badge</Badge>
    <Badge variant={'secondary'}>Badge</Badge>
    <Badge variant={'outline'}>Badge</Badge>
    <Badge variant={'destructive'}>Badge</Badge>
 </div> */}



  {/* Alert component */}
 <div className='ml-10 mt-4 space-y-4 '>
{/* <Alert className='px-12 pb-2'>
        <IconCircle className='size-5'/>
        <AlertTitle className=''>Title</AlertTitle>
        <AlertDescription className='text-neutral-500'>
          The leaves danced gently in the breeze, their rustling a symphony of nature’s.
        </AlertDescription>
     </Alert>

    <Alert className='px-12 pb-2' variant={'destructive'}>
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#991B1B"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-circle size-5"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>
        <AlertTitle className=''>Title</AlertTitle>
        <AlertDescription>
          The leaves danced gently in the breeze, their rustling a symphony of nature’s.
        </AlertDescription>
     </Alert> */}
</div>


{/* <div className='ml-10 mt-2 space-y-2'>
<Breadcrumb>
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
</Breadcrumb>
</div> */}


<div className='ml-2 mt-10 w-[900px]'>
{/* <Calendar/> */}

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


{/* <Checkbox/> */}


{/* <Carousel className="w-full max-w-xs">
      <CarouselContent className=''>
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div className='size-[360px]'>
              <CardContent className="flex border border-red-200 aspect-square items-center justify-center p-6">
                 
                 </CardContent>
              </div>
              
             
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel> */}

    <DataTableDemo/>

    {/* <Button className='w-[60px] text-white'>Done</Button> */}

</div>
</div>




   </>
  )
}

export default App
