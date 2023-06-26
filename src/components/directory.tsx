import { Button } from "../../@/components/ui/button";
import { Input } from "../../@/components/ui/input";
import { Label } from "../../@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../@/components/ui/radio-group";

import { useState } from "react";

const Directory = () => {
  const [value, setValue] = useState("1");
  return (
    <>
      <h1>Directory</h1>
      <p>Enter a directory address to follow a lead.</p>
      <div>
        <Input placeholder="directory number" width="150px" />
        <RadioGroup defaultValue="NW">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="NW" id="option-one" />
            <Label htmlFor="option-one">NW</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Option Two</Label>
          </div>
        </RadioGroup>
      </div>
      <Button>Follow lead</Button>
    </>
  );
};

export default Directory;

//TODO Input number in text field, select area from dropdown
