import Link from "next/link";
import React from "react";
import { FaBitcoin, FaDollarSign, FaAddressCard } from "react-icons/fa";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const summaryHeadings = [
  {
    name: "Income summary",
    data: [
      {
        name: "Total balance",
        value: "100",
      },
      {
        name: "Today order amount",
        value: "10",
      },
      {
        name: "Stock Balance",
        value: "10",
      },
    ],
    href: "/dashboard/income",
    icon: <FaDollarSign />,
  },
  {
    name: "Work Summary",
    data: [
      {
        name: "Today Sign Card",
        value: "100",
      },
      {
        name: "Today Server Cart",
        value: "10",
      },
      {
        name: "Today Nid card",
        value: "10",
      },
    ],
    href: "/admin/total-income",
    icon: <FaAddressCard />,
  },
  {
    name: "Recharge",
    data: [
      {
        name: "Remaining Balance",
        value: "100",
      },
    ],
    href: "/admin/demo-heading",
    icon: <FaBitcoin />,
  },
];

export default function Page() {
  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Dashboard Summary
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {summaryHeadings.map((heading) => (
          <Link
            key={heading.name}
            href={heading.href}
            className="flex flex-col items-center border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-gray-700 dark:text-gray-300 text-3xl md:text-4xl mb-4">
              {heading.icon}
            </div>
            <div className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {heading.name}
            </div>
            {heading.data?.map((data) => (
              <div
                key={data.name}
                className="text-sm md:text-base text-gray-600 dark:text-gray-400"
              >
                {data.name}: <span className="font-medium">{data.value}</span>
              </div>
            ))}
          </Link>
        ))}
      </div>
      <Form />
    </div>
  );
}

const FormSelectType = [
  {
    name: "Sign Copy",
    value: "sign-copy",
  },
  {
    name: "Server Copy",
    value: "server-copy",
  },
  {
    name: "NID Copy",
    value: "nid-copy",
  },
];

export function Form() {
  return (
    <div className="container mx-auto mt-8">
      <Card className="max-w-lg mx-auto shadow-lg border border-gray-200 dark:border-gray-700">
        <CardHeader className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center">
            Fill the Form
          </h2>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <form className="space-y-6">
            {/* Type Selection */}
            <div className="space-y-2">
              <Label
                htmlFor="type"
                className="text-sm text-gray-700 dark:text-gray-300"
              >
                Select Type
              </Label>
              <Select>
                <SelectTrigger className="w-full border-2 border-gray-200 dark:border-gray-700">
                  <SelectValue placeholder="Choose a type" />
                </SelectTrigger>
                <SelectContent>
                  {FormSelectType.map((item) => (
                    <SelectItem
                      key={item.value}
                      className="dark:hover:bg-gray-400"
                      value={item.value}
                    >
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* ID Number Input */}
            <div className="space-y-2">
              <Label
                htmlFor="idNumber"
                className="text-sm text-gray-700 dark:text-gray-300"
              >
                Nid Number / voter Number / Form Number
              </Label>
              <Input
                type="text"
                id="idNumber"
                placeholder="Enter your ID number"
                className="w-full border-2 border-gray-200 dark:border-gray-700"
                required
              />
            </div>

            {/* Name Input */}
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-sm text-gray-700 dark:text-gray-300"
              >
                Name
              </Label>
              <Input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full border-2 border-gray-200 dark:border-gray-700"
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <Button className="w-full" variant="default">
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
