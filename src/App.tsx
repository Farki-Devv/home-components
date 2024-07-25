import React from 'react'
import { Skeleton } from './components/TF-ui/skeleton'
import { Switch } from './components/TF-ui/switch'
import { Toggle } from './components/TF-ui/toogle'
import { Bold } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './components/TF-ui/tooltip'



function App() {
  return (
    <div className='flex flex-col gap-10 mt-4 ml-10'>
      {/* skeleton component */}
      <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-140 rounded-full" />
        <Skeleton className="h-4 w-140 rounded-full" />
      </div>
    </div>


     {/* switch component */}
    <div>
      <Switch/>
    </div>

    {/* toggle component */}
    <div>
    <Toggle variant='ghost' aria-label="Toggle italic">
      <Bold className="h-4 w-4 text-neutral-500" />
    </Toggle>
    </div>

   {/* tooltip component */}
    <div>
    <TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover</TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

    </div>
    </div>
  )
}

export default App
