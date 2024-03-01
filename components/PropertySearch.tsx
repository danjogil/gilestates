"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

import { useState } from "react";

import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Price = {
  value: string;
  label: string;
};

const minPrice: Price[] = [
  { value: "200000", label: "200,000" },
  { value: "250000", label: "250,000" },
  { value: "300000", label: "300,000" },
  { value: "350000", label: "350,000" },
  { value: "400000", label: "400,000" },
  { value: "450000", label: "450,000" },
  { value: "500000", label: "500,000" },
  { value: "550000", label: "550,000" },
  { value: "600000", label: "600,000" },
  { value: "650000", label: "650,000" },
  { value: "700000", label: "700,000" },
  { value: "750000", label: "750,000" },
  { value: "800000", label: "800,000" },
  { value: "850000", label: "850,000" },
  { value: "900000", label: "900,000" },
  { value: "950000", label: "950,000" },
  { value: "1000000", label: "1,000,000" },
  { value: "1050000", label: "1,050,000" },
  { value: "1100000", label: "1,100,000" },
  { value: "1150000", label: "1,150,000" },
  { value: "1200000", label: "1,200,000" },
  { value: "1250000", label: "1,250,000" },
  { value: "1300000", label: "1,300,000" },
  { value: "1350000", label: "1,350,000" },
  { value: "1400000", label: "1,400,000" },
  { value: "1450000", label: "1,450,000" },
  { value: "1500000", label: "1,500,000" },
  { value: "1550000", label: "1,550,000" },
  { value: "1600000", label: "1,600,000" },
  { value: "1650000", label: "1,650,000" },
  { value: "1700000", label: "1,700,000" },
  { value: "1750000", label: "1,750,000" },
  { value: "1800000", label: "1,800,000" },
  { value: "1850000", label: "1,850,000" },
  { value: "1900000", label: "1,900,000" },
  { value: "1950000", label: "1,950,000" },
  { value: "2000000", label: "2,000,000" },
  { value: "2050000", label: "2,050,000" },
  { value: "2100000", label: "2,100,000" },
  { value: "2150000", label: "2,150,000" },
  { value: "2200000", label: "2,200,000" },
  { value: "2250000", label: "2,250,000" },
  { value: "2300000", label: "2,300,000" },
  { value: "2350000", label: "2,350,000" },
  { value: "2400000", label: "2,400,000" },
  { value: "2450000", label: "2,450,000" },
  { value: "2500000", label: "2,500,000" },
  { value: "2550000", label: "2,550,000" },
  { value: "2600000", label: "2,600,000" },
  { value: "2650000", label: "2,650,000" },
  { value: "2700000", label: "2,700,000" },
  { value: "2750000", label: "2,750,000" },
  { value: "2800000", label: "2,800,000" },
  { value: "2850000", label: "2,850,000" },
  { value: "2900000", label: "2,900,000" },
  { value: "2950000", label: "2,950,000" },
  { value: "3000000", label: "3,000,000" },
  { value: "3050000", label: "3,050,000" },
  { value: "3100000", label: "3,100,000" },
  { value: "3150000", label: "3,150,000" },
  { value: "3200000", label: "3,200,000" },
  { value: "3250000", label: "3,250,000" },
  { value: "3300000", label: "3,300,000" },
  { value: "3350000", label: "3,350,000" },
  { value: "3400000", label: "3,400,000" },
  { value: "3450000", label: "3,450,000" },
  { value: "3500000", label: "3,500,000" },
  { value: "3550000", label: "3,550,000" },
  { value: "3600000", label: "3,600,000" },
  { value: "3650000", label: "3,650,000" },
  { value: "3700000", label: "3,700,000" },
  { value: "3750000", label: "3,750,000" },
  { value: "3800000", label: "3,800,000" },
  { value: "3850000", label: "3,850,000" },
  { value: "3900000", label: "3,900,000" },
  { value: "3950000", label: "3,950,000" },
  { value: "4000000", label: "4,000,000" },
  { value: "4050000", label: "4,050,000" },
  { value: "4100000", label: "4,100,000" },
  { value: "4150000", label: "4,150,000" },
  { value: "4200000", label: "4,200,000" },
  { value: "4250000", label: "4,250,000" },
  { value: "4300000", label: "4,300,000" },
  { value: "4350000", label: "4,350,000" },
  { value: "4400000", label: "4,400,000" },
  { value: "4450000", label: "4,450,000" },
  { value: "4500000", label: "4,500,000" },
  { value: "4550000", label: "4,550,000" },
  { value: "4600000", label: "4,600,000" },
  { value: "4650000", label: "4,650,000" },
  { value: "4700000", label: "4,700,000" },
  { value: "4750000", label: "4,750,000" },
  { value: "4800000", label: "4,800,000" },
  { value: "4850000", label: "4,850,000" },
  { value: "4900000", label: "4,900,000" },
  { value: "4950000", label: "4,950,000" },
  { value: "5000000", label: "5,000,000" },
  { value: "5050000", label: "5,050,000" },
  { value: "5100000", label: "5,100,000" },
  { value: "5150000", label: "5,150,000" },
  { value: "5200000", label: "5,200,000" },
  { value: "5250000", label: "5,250,000" },
  { value: "5300000", label: "5,300,000" },
  { value: "5350000", label: "5,350,000" },
  { value: "5400000", label: "5,400,000" },
  { value: "5450000", label: "5,450,000" },
  { value: "5500000", label: "5,500,000" },
  { value: "5550000", label: "5,550,000" },
  { value: "5600000", label: "5,600,000" },
  { value: "5650000", label: "5,650,000" },
  { value: "5700000", label: "5,700,000" },
  { value: "5750000", label: "5,750,000" },
  { value: "5800000", label: "5,800,000" },
  { value: "5850000", label: "5,850,000" },
  { value: "5900000", label: "5,900,000" },
  { value: "5950000", label: "5,950,000" },
  { value: "6000000", label: "6,000,000" },
] as const;

const maxPrice: Price[] = [
  { value: "200000", label: "200,000" },
  { value: "250000", label: "250,000" },
  { value: "300000", label: "300,000" },
  { value: "350000", label: "350,000" },
  { value: "400000", label: "400,000" },
  { value: "450000", label: "450,000" },
  { value: "500000", label: "500,000" },
  { value: "550000", label: "550,000" },
  { value: "600000", label: "600,000" },
  { value: "650000", label: "650,000" },
  { value: "700000", label: "700,000" },
  { value: "750000", label: "750,000" },
  { value: "800000", label: "800,000" },
  { value: "850000", label: "850,000" },
  { value: "900000", label: "900,000" },
  { value: "950000", label: "950,000" },
  { value: "1000000", label: "1,000,000" },
  { value: "1050000", label: "1,050,000" },
  { value: "1100000", label: "1,100,000" },
  { value: "1150000", label: "1,150,000" },
  { value: "1200000", label: "1,200,000" },
  { value: "1250000", label: "1,250,000" },
  { value: "1300000", label: "1,300,000" },
  { value: "1350000", label: "1,350,000" },
  { value: "1400000", label: "1,400,000" },
  { value: "1450000", label: "1,450,000" },
  { value: "1500000", label: "1,500,000" },
  { value: "1550000", label: "1,550,000" },
  { value: "1600000", label: "1,600,000" },
  { value: "1650000", label: "1,650,000" },
  { value: "1700000", label: "1,700,000" },
  { value: "1750000", label: "1,750,000" },
  { value: "1800000", label: "1,800,000" },
  { value: "1850000", label: "1,850,000" },
  { value: "1900000", label: "1,900,000" },
  { value: "1950000", label: "1,950,000" },
  { value: "2000000", label: "2,000,000" },
  { value: "2050000", label: "2,050,000" },
  { value: "2100000", label: "2,100,000" },
  { value: "2150000", label: "2,150,000" },
  { value: "2200000", label: "2,200,000" },
  { value: "2250000", label: "2,250,000" },
  { value: "2300000", label: "2,300,000" },
  { value: "2350000", label: "2,350,000" },
  { value: "2400000", label: "2,400,000" },
  { value: "2450000", label: "2,450,000" },
  { value: "2500000", label: "2,500,000" },
  { value: "2550000", label: "2,550,000" },
  { value: "2600000", label: "2,600,000" },
  { value: "2650000", label: "2,650,000" },
  { value: "2700000", label: "2,700,000" },
  { value: "2750000", label: "2,750,000" },
  { value: "2800000", label: "2,800,000" },
  { value: "2850000", label: "2,850,000" },
  { value: "2900000", label: "2,900,000" },
  { value: "2950000", label: "2,950,000" },
  { value: "3000000", label: "3,000,000" },
  { value: "3050000", label: "3,050,000" },
  { value: "3100000", label: "3,100,000" },
  { value: "3150000", label: "3,150,000" },
  { value: "3200000", label: "3,200,000" },
  { value: "3250000", label: "3,250,000" },
  { value: "3300000", label: "3,300,000" },
  { value: "3350000", label: "3,350,000" },
  { value: "3400000", label: "3,400,000" },
  { value: "3450000", label: "3,450,000" },
  { value: "3500000", label: "3,500,000" },
  { value: "3550000", label: "3,550,000" },
  { value: "3600000", label: "3,600,000" },
  { value: "3650000", label: "3,650,000" },
  { value: "3700000", label: "3,700,000" },
  { value: "3750000", label: "3,750,000" },
  { value: "3800000", label: "3,800,000" },
  { value: "3850000", label: "3,850,000" },
  { value: "3900000", label: "3,900,000" },
  { value: "3950000", label: "3,950,000" },
  { value: "4000000", label: "4,000,000" },
  { value: "4050000", label: "4,050,000" },
  { value: "4100000", label: "4,100,000" },
  { value: "4150000", label: "4,150,000" },
  { value: "4200000", label: "4,200,000" },
  { value: "4250000", label: "4,250,000" },
  { value: "4300000", label: "4,300,000" },
  { value: "4350000", label: "4,350,000" },
  { value: "4400000", label: "4,400,000" },
  { value: "4450000", label: "4,450,000" },
  { value: "4500000", label: "4,500,000" },
  { value: "4550000", label: "4,550,000" },
  { value: "4600000", label: "4,600,000" },
  { value: "4650000", label: "4,650,000" },
  { value: "4700000", label: "4,700,000" },
  { value: "4750000", label: "4,750,000" },
  { value: "4800000", label: "4,800,000" },
  { value: "4850000", label: "4,850,000" },
  { value: "4900000", label: "4,900,000" },
  { value: "4950000", label: "4,950,000" },
  { value: "5000000", label: "5,000,000" },
  { value: "5050000", label: "5,050,000" },
  { value: "5100000", label: "5,100,000" },
  { value: "5150000", label: "5,150,000" },
  { value: "5200000", label: "5,200,000" },
  { value: "5250000", label: "5,250,000" },
  { value: "5300000", label: "5,300,000" },
  { value: "5350000", label: "5,350,000" },
  { value: "5400000", label: "5,400,000" },
  { value: "5450000", label: "5,450,000" },
  { value: "5500000", label: "5,500,000" },
  { value: "5550000", label: "5,550,000" },
  { value: "5600000", label: "5,600,000" },
  { value: "5650000", label: "5,650,000" },
  { value: "5700000", label: "5,700,000" },
  { value: "5750000", label: "5,750,000" },
  { value: "5800000", label: "5,800,000" },
  { value: "5850000", label: "5,850,000" },
  { value: "5900000", label: "5,900,000" },
  { value: "5950000", label: "5,950,000" },
  { value: "6000000", label: "6,000,000" },
] as const;

type Location = {
  value: string;
  label: string;
};

const locations: Location[] = [
  { value: "east marbella", label: "East Marbella" },
  { value: "marbella", label: "Marbella" },
  { value: "benahavis", label: "Benahavis" },
  { value: "estepona", label: "Estepona" },
] as const;

type Area = {
  value: string;
  label: string;
};

const eastMarbella: Area[] = [
  { value: "cabopino", label: "Cabopino" },
  { value: "elviria", label: "Elviria" },
  { value: "las chapas", label: "Las Chapas" },
  { value: "el rosario", label: "El Rosario" },
  { value: "costabella", label: "Costabella" },
  { value: "los monteros", label: "Los Monteros" },
  { value: "bahia de marbella", label: "Bahia de Marbella" },
  { value: "rio real", label: "Rio Real" },
];

const marbella: Area[] = [
  { value: "nueva andalucia", label: "Nueva Andalucia" },
  { value: "the golden mile", label: "The Golden Mile" },
  { value: "sierra blanca", label: "Sierra Blanca" },
  { value: "puerto banus", label: "Puerto Banus" },
  { value: "marbella", label: "Marbella Center" },
  { value: "san pedro de alcantara", label: "San Pedro" },
  { value: "guadalmina", label: "Guadalmina" },
];

const benahavis: Area[] = [
  { value: "la quinta", label: "La Quinta" },
  { value: "los arqueros", label: "Los Arqueros" },
  { value: "la zagaleta", label: "La Zagaleta" },
  { value: "los flamingos", label: "Los Flamingos" },
  { value: "benahavis village", label: "Benahavis Village" },
];

const estepona: Area[] = [
  { value: "atalaya", label: "Atalaya" },
  { value: "el paraiso", label: "El Paraiso" },
  { value: "costalita", label: "Costalita" },
  { value: "cancelada", label: "Cancelada" },
  { value: "la resina", label: "La Resina" },
  { value: "new golden mile", label: "New Golden Mile" },
  { value: "estepona center", label: "Estepona Center" },
];

type PropertyType = {
  value: string;
  label: string;
};

const propertyTypes: PropertyType[] = [
  { value: "2-2", label: "Villa" },
  { value: "2-5", label: "Townhouse" },
  { value: "1-1", label: "Apartment" },
  { value: "1-6", label: "Penthouse" },
] as const;

type Bedroom = {
  value: string;
  label: string;
};

const bedrooms: Bedroom[] = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
] as const;

const formSchema = z.object({
  location: z.string(),
  area: z.string(),
  propertyType: z.string(),
  bedrooms: z.string(),
  minPrice: z.string(),
  maxPrice: z.string(),
});

function PropertySearch(): JSX.Element {
  const router = useRouter();
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      area: "",
      propertyType: "",
      bedrooms: "",
      minPrice: "",
      maxPrice: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const params = new URLSearchParams(searchParams);
    params.set("area", values.area);
    params.set("propertyType", values.propertyType);
    params.set("bedrooms", values.bedrooms);
    params.set("minPrice", values.minPrice);
    params.set("maxPrice", values.maxPrice);

    if (pathname !== "/properties") {
      router.push(`/properties?${params.toString()}`);
    } else {
      replace(`${pathname}?${params.toString()}`);
    }
  }

  const [openLocation, setOpenLocation] = useState(false);
  const [openAreas, setOpenAreas] = useState(false);
  const [openPropertyType, setOpenPropertyType] = useState(false);
  const [openBedrooms, setOpenBedrooms] = useState(false);
  const [openMinPrice, setOpenMinPrice] = useState(false);
  const [openMaxPrice, setOpenMaxPrice] = useState(false);

  const [location, setLocation] = useState("");
  const [selectedMinPrice, setSelectedMinPrice] = useState("");
  const [selectedMaxPrice, setSelectedMaxPrice] = useState("");

  return (
    <div className="mt-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="gap-6 flex flex-col md:flex-row p-6 md:gap-8">
            <div className="flex flex-col w-full gap-6">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Location</FormLabel>
                    <Drawer open={openLocation} onOpenChange={setOpenLocation}>
                      <DrawerTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? locations.find(
                                  (language) => language.value === field.value
                                )?.label
                              : "Select location"}

                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </DrawerTrigger>
                      <DrawerContent>
                        <div className="mt-4 border-t">
                          <Command>
                            <CommandInput placeholder="Search location..." />
                            <CommandList>
                              <CommandEmpty>Location not found.</CommandEmpty>
                              <CommandGroup>
                                {locations.map((location) => (
                                  <CommandItem
                                    value={location.label}
                                    key={location.value}
                                    onSelect={() => {
                                      form.setValue("location", location.value);
                                      setOpenLocation(false);
                                      setLocation(location.value);
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        location.value === field.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {location.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </div>
                      </DrawerContent>
                    </Drawer>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="area"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Area</FormLabel>
                    <Drawer open={openAreas} onOpenChange={setOpenAreas}>
                      <DrawerTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                            disabled={!location}
                          >
                            {location === "east marbella" &&
                              (field.value
                                ? eastMarbella.find(
                                    (area) => area.value === field.value
                                  )?.label
                                : "Select area")}
                            {location === "marbella" &&
                              (field.value
                                ? marbella.find(
                                    (area) => area.value === field.value
                                  )?.label
                                : "Select area")}
                            {location === "benahavis" &&
                              (field.value
                                ? benahavis.find(
                                    (area) => area.value === field.value
                                  )?.label
                                : "Select area")}
                            {location === "estepona" &&
                              (field.value
                                ? estepona.find(
                                    (area) => area.value === field.value
                                  )?.label
                                : "Select area")}
                            {location && (
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            )}
                          </Button>
                        </FormControl>
                      </DrawerTrigger>
                      <DrawerContent>
                        <div className="mt-4 border-t">
                          <Command>
                            <CommandInput placeholder="Search areas..." />
                            <CommandList>
                              <CommandEmpty>Area not found.</CommandEmpty>
                              <CommandGroup>
                                {location === "east marbella" &&
                                  eastMarbella.map((area) => (
                                    <CommandItem
                                      value={area.label}
                                      key={area.value}
                                      onSelect={() => {
                                        form.setValue("area", area.value);
                                        setOpenAreas(false);
                                      }}
                                    >
                                      <Check
                                        className={cn(
                                          "mr-2 h-4 w-4",
                                          area.value === field.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                      />
                                      {area.label}
                                    </CommandItem>
                                  ))}
                                {location === "marbella" &&
                                  marbella.map((area) => (
                                    <CommandItem
                                      value={area.label}
                                      key={area.value}
                                      onSelect={() => {
                                        form.setValue("area", area.value);
                                        setOpenAreas(false);
                                      }}
                                    >
                                      <Check
                                        className={cn(
                                          "mr-2 h-4 w-4",
                                          area.value === field.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                      />
                                      {area.label}
                                    </CommandItem>
                                  ))}
                                {location === "benahavis" &&
                                  benahavis.map((area) => (
                                    <CommandItem
                                      value={area.label}
                                      key={area.value}
                                      onSelect={() => {
                                        form.setValue("area", area.value);
                                        setOpenAreas(false);
                                      }}
                                    >
                                      <Check
                                        className={cn(
                                          "mr-2 h-4 w-4",
                                          area.value === field.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                      />
                                      {area.label}
                                    </CommandItem>
                                  ))}
                                {location === "estepona" &&
                                  estepona.map((area) => (
                                    <CommandItem
                                      value={area.label}
                                      key={area.value}
                                      onSelect={() => {
                                        form.setValue("area", area.value);
                                        setOpenAreas(false);
                                      }}
                                    >
                                      <Check
                                        className={cn(
                                          "mr-2 h-4 w-4",
                                          area.value === field.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                      />
                                      {area.label}
                                    </CommandItem>
                                  ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </div>
                      </DrawerContent>
                    </Drawer>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="propertyType"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Property Type</FormLabel>
                    <Drawer
                      open={openPropertyType}
                      onOpenChange={setOpenPropertyType}
                    >
                      <DrawerTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? propertyTypes.find(
                                  (propertyType) =>
                                    propertyType.value === field.value
                                )?.label
                              : "Select type"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </DrawerTrigger>
                      <DrawerContent>
                        <div className="mt-4 border-t">
                          <Command>
                            <CommandInput placeholder="Search property types..." />
                            <CommandList>
                              <CommandEmpty>
                                No property type found.
                              </CommandEmpty>
                              <CommandGroup>
                                {propertyTypes.map((propertyType) => (
                                  <CommandItem
                                    value={propertyType.label}
                                    key={propertyType.value}
                                    onSelect={() => {
                                      form.setValue(
                                        "propertyType",
                                        propertyType.value
                                      );
                                      setOpenPropertyType(false);
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        propertyType.value === field.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {propertyType.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </div>
                      </DrawerContent>
                    </Drawer>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col w-full gap-6">
              <FormField
                control={form.control}
                name="bedrooms"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Bedrooms</FormLabel>
                    <Drawer open={openBedrooms} onOpenChange={setOpenBedrooms}>
                      <DrawerTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? bedrooms.find(
                                  (bedroom) => bedroom.value === field.value
                                )?.label
                              : "Select bedrooms"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </DrawerTrigger>
                      <DrawerContent>
                        <div className="mt-4 border-t">
                          <Command>
                            <CommandInput placeholder="Search number of bedrooms..." />
                            <CommandList>
                              <CommandEmpty>
                                Number of bedrooms not found.
                              </CommandEmpty>
                              <CommandGroup>
                                {bedrooms.map((bedroom) => (
                                  <CommandItem
                                    value={bedroom.label}
                                    key={bedroom.value}
                                    onSelect={() => {
                                      form.setValue("bedrooms", bedroom.value);
                                      setOpenBedrooms(false);
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        bedroom.value === field.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {bedroom.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </div>
                      </DrawerContent>
                    </Drawer>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="minPrice"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Min Price</FormLabel>
                    <Drawer open={openMinPrice} onOpenChange={setOpenMinPrice}>
                      <DrawerTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? minPrice.find(
                                  (price) => price.value === field.value
                                )?.label
                              : "Select price"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </DrawerTrigger>
                      <DrawerContent>
                        <div className="mt-4 border-t">
                          <Command>
                            <CommandInput placeholder="Search price..." />
                            <CommandList>
                              <CommandEmpty>Price not found.</CommandEmpty>
                              {!selectedMaxPrice ? (
                                <CommandGroup>
                                  {minPrice.map((price) => (
                                    <CommandItem
                                      value={price.label}
                                      key={price.value}
                                      onSelect={() => {
                                        form.setValue("minPrice", price.value);
                                        setOpenMinPrice(false);
                                        setSelectedMinPrice(price.value);
                                      }}
                                    >
                                      <Check
                                        className={cn(
                                          "mr-2 h-4 w-4",
                                          price.value === field.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                      />
                                      {price.label}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              ) : (
                                <CommandGroup>
                                  {minPrice.map(
                                    (price) =>
                                      Number(price.value) <=
                                        Number(selectedMaxPrice) && (
                                        <CommandItem
                                          value={price.label}
                                          key={price.value}
                                          onSelect={() => {
                                            form.setValue(
                                              "minPrice",
                                              price.value
                                            );
                                            setOpenMinPrice(false);
                                            setSelectedMinPrice(price.value);
                                          }}
                                        >
                                          <Check
                                            className={cn(
                                              "mr-2 h-4 w-4",
                                              price.value === field.value
                                                ? "opacity-100"
                                                : "opacity-0"
                                            )}
                                          />
                                          {price.label}
                                        </CommandItem>
                                      )
                                  )}
                                </CommandGroup>
                              )}
                            </CommandList>
                          </Command>
                        </div>
                      </DrawerContent>
                    </Drawer>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="maxPrice"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Max Price</FormLabel>
                    <Drawer open={openMaxPrice} onOpenChange={setOpenMaxPrice}>
                      <DrawerTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? maxPrice.find(
                                  (price) => price.value === field.value
                                )?.label
                              : "Select price"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </DrawerTrigger>
                      <DrawerContent>
                        <div className="mt-4 border-t">
                          <Command>
                            <CommandInput placeholder="Search price..." />
                            <CommandList>
                              <CommandEmpty>Price not found.</CommandEmpty>
                              <CommandGroup>
                                {maxPrice.map(
                                  (price) =>
                                    Number(selectedMinPrice) <=
                                      Number(price.value) && (
                                      <CommandItem
                                        value={price.label}
                                        key={price.value}
                                        onSelect={() => {
                                          form.setValue(
                                            "maxPrice",
                                            price.value
                                          );
                                          setOpenMaxPrice(false);
                                          setSelectedMaxPrice(price.value);
                                        }}
                                      >
                                        <Check
                                          className={cn(
                                            "mr-2 h-4 w-4",
                                            price.value === field.value
                                              ? "opacity-100"
                                              : "opacity-0"
                                          )}
                                        />
                                        {price.label}
                                      </CommandItem>
                                    )
                                )}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </div>
                      </DrawerContent>
                    </Drawer>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex justify-end px-6">
            <Button type="submit">Search</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default PropertySearch;
