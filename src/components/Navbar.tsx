'use client'

import React from 'react'
import { ToggleTheme } from '@/components/ui/toggle-theme'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { Compass } from 'lucide-react'


const Navbar = () => {
    return (
        <header>
            <nav className='header flex items-center justify-between max-w-[1220px] w-full mx-auto py-8'>
                <Link href="/" className="logo flex items-center justify-start">
                    <Compass size={26} className='mr-2 text-foreground' />
                </Link>
                <h4 className='text-foreground'>Leaders&apos;Compass</h4>
                <div className="utils flex items-center justify-start">
                    {/* <NavigationMenu className='mx-3'>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink>
                                    Documentation
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu> */}
                    <ToggleTheme />
                </div>
            </nav>
        </header>
    )
}

export default Navbar