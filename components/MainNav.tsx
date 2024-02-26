"use client";

import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";

export function MainNav({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="flex justify-end pr-10  md:border-b fixed top-0 w-full bg-white">
        <NavigationMenu className="hidden md:block p-4">
          <NavigationMenuList>
            <NavigationMenuItem asChild>
              <Link href="/">
                <Button variant="ghost">Home</Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link href="/properties">Properties</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                  <LinkItem href="/properties/for-sale" title="Sales">
                    Available modern properties for sale.
                  </LinkItem>
                  <LinkItem href="/properties/for-rent" title="Rentals">
                    Available modern properties for long term rent.
                  </LinkItem>
                  <LinkItem
                    href="/properties/developments"
                    title="Developments"
                  >
                    Available modern properties for sale.
                  </LinkItem>
                  <LinkItem
                    href="/properties/latest-listings"
                    title="Latest Listings"
                  >
                    Available modern properties for sale.
                  </LinkItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link href="/areas">Areas</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                  <LinkItem href="/areas/marbella" title="Marbella">
                    Nueva Andalucia, Sierra Blanca, The Golden Mile, Puerto
                    Banus, San Pedro, Guadalmina, Marbella Center
                  </LinkItem>
                  <LinkItem href="/areas/east-marbella" title="East Marbella">
                    Cabopino, Elviria, Las Chapas, El Rosario, Costabella, Los
                    Monteros, Bahia de Marbella, Rio Real
                  </LinkItem>
                  <LinkItem href="/areas/benahavis" title="Benahavis">
                    La Quinta, Los Arqueros, La Zagaleta, Los Flamingos,
                    Benahavis Village
                  </LinkItem>
                  <LinkItem href="/areas/estepona" title="Estepona">
                    Atalaya, El Paraiso, Cancelada, Costalita, La Resina, New
                    Golden Mile, Estepona Center
                  </LinkItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link href="/services">Services</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                  <LinkItem
                    href="/services/legal-services"
                    title="Legal services"
                  >
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </LinkItem>
                  <LinkItem
                    href="/services/property-management"
                    title="Property management"
                  >
                    How to install dependencies and structure your app.
                  </LinkItem>
                  <LinkItem
                    href="/services/refurbishments"
                    title="Refurbishment"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </LinkItem>
                  <LinkItem
                    href="/services/interior-design"
                    title="Interior design"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </LinkItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link href="/property-advice">Property Advice</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                  <LinkItem href="/property-advice/faqs" title="FAQs">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </LinkItem>
                  <LinkItem
                    href="/property-advice/sellers-guide"
                    title="Seller's guide"
                  >
                    How to install dependencies and structure your app.
                  </LinkItem>
                  <LinkItem
                    href="/property-advice/buyers-guide"
                    title="Buyer's guide"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </LinkItem>
                  <LinkItem href="/property-advice/schools" title="Schools">
                    Styles for headings, paragraphs, lists...etc
                  </LinkItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem asChild>
              <Link href="/contact">
                <Button variant="ghost" className="">
                  Contact
                </Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      <nav>
        <Sheet>
          <div className="flex justify-end p-4 md:hidden border-b fixed top-0 w-full bg-white">
            <SheetTrigger>
              <HamburgerMenuIcon width="24" height="24" />
            </SheetTrigger>
          </div>
          <SheetContent className="pt-12 px-0">
            <ScrollArea className="h-full">
              <NavigationMenu className="max-w-full">
                <NavigationMenuList className="flex flex-col gap-4 justify-center items-center">
                  <NavigationMenuItem className="mt-16">
                    <Button
                      variant="ghost"
                      className="text-xl font-semibold w-[15rem]"
                    >
                      Home
                    </Button>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Collapsible className="flex flex-col">
                      <CollapsibleTrigger asChild>
                        <NavigationMenuTrigger className="text-xl font-semibold w-[15rem]">
                          Properties
                        </NavigationMenuTrigger>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="flex flex-col">
                        <Button variant="ghost" className="text-lg mt-2">
                          Homes for sale
                        </Button>
                        <Button variant="ghost" className="text-lg">
                          Long term rentals
                        </Button>
                        <Button variant="ghost" className="text-lg">
                          Developments
                        </Button>
                        <Button variant="ghost" className="text-lg">
                          Latest listings
                        </Button>
                      </CollapsibleContent>
                    </Collapsible>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Collapsible className="flex flex-col">
                      <CollapsibleTrigger asChild>
                        <NavigationMenuTrigger className="text-xl font-semibold w-[15rem]">
                          Areas
                        </NavigationMenuTrigger>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="flex flex-col">
                        <Button variant="ghost" className="text-lg mt-2">
                          Marbella
                        </Button>
                        <Button variant="ghost" className="text-lg">
                          East Marbella
                        </Button>
                        <Button variant="ghost" className="text-lg">
                          Benahavis
                        </Button>
                        <Button variant="ghost" className="text-lg">
                          Estepona
                        </Button>
                      </CollapsibleContent>
                    </Collapsible>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Collapsible className="flex flex-col">
                      <CollapsibleTrigger asChild>
                        <NavigationMenuTrigger className="text-xl font-semibold w-[15rem]">
                          Services
                        </NavigationMenuTrigger>
                      </CollapsibleTrigger>
                      <CollapsibleContent className=" flex flex-col">
                        <Button variant="ghost" className="text-lg mt-2">
                          Legal services
                        </Button>
                        <Button variant="ghost" className="text-lg">
                          Property management
                        </Button>
                        <Button variant="ghost" className="text-lg">
                          Refurbishments
                        </Button>
                        <Button variant="ghost" className="text-lg">
                          Interior design
                        </Button>
                      </CollapsibleContent>
                    </Collapsible>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Collapsible className="flex flex-col">
                      <CollapsibleTrigger asChild>
                        <NavigationMenuTrigger className="text-xl font-semibold w-[15rem]">
                          Property advice
                        </NavigationMenuTrigger>
                      </CollapsibleTrigger>
                      <CollapsibleContent className=" flex flex-col">
                        <Button variant="ghost" className="text-lg mt-2">
                          FAQs
                        </Button>
                        <Button variant="ghost" className="text-lg">
                          Seller&apos;s guide
                        </Button>
                        <Button variant="ghost" className="text-lg">
                          Buyer&apos;s guide
                        </Button>
                        <Button variant="ghost" className="text-lg">
                          Schools
                        </Button>
                      </CollapsibleContent>
                    </Collapsible>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Button
                      variant="ghost"
                      className="text-xl font-semibold w-[15rem]"
                    >
                      Contact
                    </Button>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </nav>

      {children}
    </>
  );
}

function LinkItem({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: string;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 dark:data-[active]:bg-slate-800/50 dark:data-[state=open]:bg-slate-800/50"
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default MainNav;
