"use client"

import * as React from "react"
// import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

// import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { MoonStar, Sun } from "lucide-react"

export function ToggleTheme() {
    const { setTheme } = useTheme()
    const [clicked, setClicked] = React.useState(false)

    React.useEffect(() => {
        if (clicked === true) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [clicked, setTheme])


    return (
        <div className="flex items-center space-x-2">
            <Label htmlFor="color-theme"><Sun size={18} className="text-primary dark:text-transparent" /></Label>
            <Switch id="color-theme" onClick={() => setClicked(!clicked)} />
            <Label htmlFor="color-theme"><MoonStar size={18} className="text-transparent dark:text-primary" /></Label>
        </div>
    )
}
