import { Popover } from "@headlessui/react";
import { Moon, Sun } from "phosphor-react";
import useDarkMode from "../../hooks/useDarkMode";

export function DarkModeSwitch() {
  const [colorTheme, setTheme ] =  useDarkMode()
  
  return (
    <Popover onClick={() => setTheme(colorTheme)} id="theme-toggle" className="items-center justify-center absolute bottom-4 left-4 md:bottom-8 md:left-8 rounded-full flex h-12 bg-zinc-200 hover:bg-zinc-300 dark:hover:text-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-500 px-3 cursor-pointer" > 
     
      { colorTheme === "light" ?
      <Sun className="w-6 h-6 rounded-md"/>
      :
      <Moon className="w-6 h-6 rounded-md"/>
      }

    </Popover>
  )
}

