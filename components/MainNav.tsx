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
            <NavigationMenuItem>
              <Button variant="ghost">Home</Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Properties</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                  <ListItem href="/" title="Sales">
                    Available modern properties for sale.
                  </ListItem>
                  <ListItem href="/" title="Rentals">
                    Available modern properties for long term rent.
                  </ListItem>
                  <ListItem href="/" title="Developments">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                  <ListItem href="/" title="Latest listings">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Areas</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                  <ListItem href="/" title="Marbella">
                    Nueva Andalucia, Sierra Blanca, The Golden Mile, Puerto
                    Banus, San Pedro, Guadalmina, Marbella Center
                  </ListItem>
                  <ListItem href="/" title="East Marbella">
                    Cabopino, Elviria, Las Chapas, El Rosario, Costabella, Los
                    Monteros, Bahia de Marbella, Rio Real
                  </ListItem>
                  <ListItem href="/" title="Benahavis">
                    La Quinta, Los Arqueros, La Zagaleta, Los Flamingos,
                    Benahavis Village
                  </ListItem>
                  <ListItem href="/" title="Estepona">
                    Atalaya, El Paraiso, Cancelada, Costalita, La Resina, New
                    Golden Mile, Estepona Center
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                  <ListItem href="/" title="Legal services">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/" title="Property management">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem href="/" title="Refurbishment">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                  <ListItem href="/" title="Interior design">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Property advice</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                  <ListItem href="/" title="FAQs">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/" title="Seller's guide">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem href="/" title="Buyer's guide">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                  <ListItem href="/" title="Schools">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost" className="">
                Contact
              </Button>
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default MainNav;
