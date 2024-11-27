"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { MdBloodtype } from "react-icons/md";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  CameraIcon,
  HomeIcon,
  ImageIcon,
  SignatureIcon,
  User2Icon,
} from "lucide-react";

export default function ResponsiveForm() {
  const [images, setImages] = useState<string[]>([]);

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prev) => {
          const newImages = [...prev];
          newImages[index] = reader.result as string;
          return newImages;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">NID Edit</h1>
      <form className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div className="border rounded" key={`text-input-${i}`}>
              <div className="flex items-center justify-center gap-2  p-4 rounded-md">
                <User2Icon />
                <Input
                  id={`text-input-${i}`}
                  placeholder={`Enter text ${i + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="border rounded flex flex-col items-center justify-center gap-2 p-4">
            <Label>Default NID Number</Label>
            <RadioGroup
              defaultValue="option-one"
              className="flex justify-center gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id={`option-one-`} />
                <Label htmlFor={`option-one-`}>#10</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id={`option-two-`} />
                <Label htmlFor={`option-two-`}>#13</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-three" id={`option-three-`} />
                <Label htmlFor={`option-three-`}>#17</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="border rounded flex flex-col  items-center justify-center gap-2 p-4">
            <Label htmlFor="textarea-1">
              <HomeIcon />{" "}
            </Label>
            <Textarea id="textarea-1" placeholder="Enter long text here" />
          </div>
        </div>
        {/* Vote at Input */}
        <div className="border rounded flex  items-center justify-between gap-4 p-4">
          <RadioGroup
            defaultValue="option-one"
            className="flex justify-center gap-4"
          >
            <Label>Vote At</Label>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label className="cursor-pointer" htmlFor="option-one">
                Present Address
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label className="cursor-pointer" htmlFor="option-two">
                Permanent Address
              </Label>
            </div>
          </RadioGroup>
          <div className="flex items-center space-x-2">
            <Label className="cursor-pointer" htmlFor="option-two">
              <HomeIcon />
            </Label>
            <Input id="option-two" placeholder="Enter text" />
          </div>
        </div>
        {/* home Blood Group */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border rounded flex  items-center justify-center gap-2 p-4">
            <Label htmlFor="input-1">
              {" "}
              <HomeIcon />
            </Label>
            <Input id="input-1" placeholder="Enter text" />
          </div>
          <div className="border rounded flex items-center justify-center gap-2 p-4">
            <Label htmlFor="select-1">
              <MdBloodtype className="text-2xl" />
            </Label>
            <Select>
              <SelectTrigger id="select-1">
                <SelectValue placeholder="Blood Group Select" />
              </SelectTrigger>
              <SelectContent>
                {[
                  ...new Set([
                    "A+",
                    "A-",
                    "B+",
                    "B-",
                    "O+",
                    "O-",
                    "AB+",
                    "AB-",
                  ]),
                ].map((bloodGroup) => (
                  <SelectItem key={bloodGroup} value={bloodGroup}>
                    {bloodGroup}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="border rounded flex  items-center justify-center gap-2 p-4">
            <Label htmlFor="select-1">
              <CameraIcon />
            </Label>
            <Select>
              <SelectTrigger id="select-1">
                <SelectValue placeholder="Picture Of Signature" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded flex  items-center justify-center gap-2 p-4">
            <Label
              htmlFor="image-1"
              className="cursor-pointer w-full flex justify-center items-center gap-3"
            >
              {" "}
              <ImageIcon />
              Select Image
            </Label>
            <Input
              id="image-1"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageUpload(e, 0)}
            />
          </div>
          <div className="border rounded flex  items-center justify-center gap-2 p-4">
            <Label
              htmlFor="image-2"
              className="cursor-pointer w-full flex justify-center items-center gap-3"
            >
              {" "}
              <ImageIcon />
              Select Signature Image
            </Label>
            <Input
              id="image-2"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageUpload(e, 1)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={`image-preview-${index}`} className="border rounded p-2">
              <Label>Image {index + 1} Preview</Label>
              {image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={image}
                  alt={`Preview ${index + 1}`}
                  className="mt-2 max-w-full h-auto"
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-row  gap-4">
          <div className="border rounded flex flex-1  items-center justify-center gap-2 p-4">
            <Label htmlFor="select-1">
              <SignatureIcon />
            </Label>
            <Select>
              <SelectTrigger id="select-1">
                <SelectValue placeholder="Authorized Signature now" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="border rounded flex flex-1  items-center justify-center gap-2 p-4">
            <Label htmlFor="date-input">
              <Calendar />
            </Label>
            <Input
              id="date-input"
              placeholder="Enter text"
              disabled
              defaultValue={new Date().toLocaleDateString()}
            />
          </div>
          <div className="border rounded flex flex-1  items-center justify-center gap-2 p-4">
            <Select>
              <SelectTrigger id="select-2">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="border rounded flex flex-1  items-center justify-center gap-2 p-4">
            <Select>
              <SelectTrigger id="select-2">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2">
          <Button type="reset" variant="outline">
            Reset
          </Button>
          <Button type="button" variant="secondary">
            Cancel
          </Button>
          <Button type="submit">Update Now</Button>
        </div>
      </form>
    </div>
  );
}
