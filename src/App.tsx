/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import './index.css'
// breadcrumb component
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './components/TF-ui/breadcrumb'

// card component
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/TF-ui/card'

// carousel component
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/TF-ui/carousel'


// button component
import { Button } from './components/TF-ui/button'

// checbox component
import { Checkbox } from './components/TF-ui/checkbox'

// icons
import { IconChevronDown, IconCircle } from '@tabler/icons-react'

// input component, but I haven't changed the input component of this shadcn ui yet
import { Input } from './components/TF-ui/input'

// Drawer component
import { Drawer,  DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './components/TF-ui/drawer'

// Slider component
import { Slider } from './components/TF-ui/slider'

// dropdown component
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuTrigger,DropdownMenuSubContent, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem } from './components/TF-ui/dropdown'


function App() {
  React.useEffect(() => {
    (CSS as any).paintWorklet.addModule("squircle.min.js");
  }, []);

  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)

  const [position, setPosition] = React.useState("bottom")
  return (
    <>
<div className='max-w-7xl mx-auto flex flex-col gap-10'>




<div className='ml-10 mt-2 space-y-4'>
  {/* <Breadcrumb> */}


<div className='space-y-4'>
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
</div>
</div>





<div className='ml-10'>
  {/* <Card> */}
<Card className='w-[320px] h-[184px] rounded-lg'>
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
</Card>
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



    <div className='ml-10 mt-10'>
      {/* checkbox component */}
      <Checkbox/>
    </div>












    {/* Button component */}
     <div className='flex flex-col space-y-2'>
      {/* Button component */}

      {/* size lg */}
      <div className='flex gap-2 px-3'>
      <Button size={'lg'} variant={'default'}><IconCircle className='size-5'/>Button <IconCircle className='size-5'/></Button>
      <Button size={'lg'} variant={'secondary'}><IconCircle className='size-5'/>Button <IconCircle className='size-5'/></Button> <Button size={'lg'} variant={'destructive'}><IconCircle className='size-5'/>Button <IconCircle className='size-5'/></Button> <Button size={'lg'} variant={'outline'}><IconCircle className='size-5'/>Button <IconCircle className='size-5'/></Button> <Button size={'lg'} variant={'ghost'}><IconCircle className='size-5'/>Button <IconCircle className='size-5'/></Button>
      </div>

     {/* size default */}
     <div className='flex gap-8'>
      <Button variant={'default'}><IconCircle className='size-4'/>Button<IconCircle className='size-4'/></Button>
      <Button variant={'secondary'}><IconCircle/>Button<IconCircle/></Button>
      <Button variant={'destructive'}><IconCircle/>Button<IconCircle/></Button>
      <Button variant={'outline'}><IconCircle/>Button<IconCircle/></Button>
      <Button variant={'ghost'}><IconCircle/>Button<IconCircle/></Button>
     </div>

    {/* size sm */}
     <div className='flex gap-11'>
      <Button size={'sm'} variant={'default'}><IconCircle/>Button <IconCircle/></Button>
      <Button size={'sm'} variant={'secondary'}><IconCircle/>Button<IconCircle/></Button>
      <Button size={'sm'} variant={'destructive'}><IconCircle/>Button<IconCircle/></Button>
      <Button size={'sm'} variant={'outline'}><IconCircle/>Button<IconCircle/></Button>
      <Button size={'sm'} variant={'ghost'}><IconCircle/>Button<IconCircle/></Button>
     </div>


     {/* size icon */}

     <div className='flex gap-24'>
      <Button size={'icon'} variant={'default'}><IconCircle className='size-5'/></Button>
      <Button size={'icon'} variant={'secondary'}><IconCircle className='size-5'/></Button>
      <Button size={'icon'} variant={'destructive'}><IconCircle className='size-5'/></Button>
      <Button size={'icon'} variant={'outline'}><IconCircle className='size-5'/></Button>
      <Button size={'icon'} variant={'ghost'}><IconCircle className='size-5'/></Button>
     </div>
     
     </div>
 
   <div >
    {/* Drawer component */}
    <Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Title</DrawerTitle>
      <DrawerDescription>Subtitle</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button className='float-right w-[60px] h-9 rounded-lg'>Done</Button>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

   </div>


   <div className='w-[380px]'>
    {/* Slider component */}
   <Slider/>
   </div>

   <div className='flex gap-10 ml-20 mt-4'>
   <div >
    {/* Dropdown Menu */}
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuLabel className='h-9'>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span>Profile</span>
            <DropdownMenuShortcut>⇧ ⌘ P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Billing</span>
            <DropdownMenuShortcut>⌘ B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Settings</span>
            <DropdownMenuShortcut>⌘ S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Keyboard shortcuts</span>
            <DropdownMenuShortcut>⌘ K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span>Team</span>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>

                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <span>New Team</span>
            <DropdownMenuShortcut>⌘ + T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>

          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span>Log out</span>
          <DropdownMenuShortcut>⇧ ⌘ Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
   </div>

   <div >
    {/* two dropdown menu */}
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 h-40">
        <DropdownMenuLabel className='h-9'>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
   </div>
   <div>
   <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuLabel className='h-9'>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
   </div>
   </div>
</div>




   </>
  )
}

export default App