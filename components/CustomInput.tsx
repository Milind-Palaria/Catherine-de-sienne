"use client";
// import React from "react";
// import { Label } from "./ui/authLabel";
// import { Input } from "./ui/authInput";
import { cn } from "@/lib/utils";
import React, { useState } from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
// import { Input } from './ui/input'
// import { Control, Controller } from 'react-hook-form'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'
import Select from "./select"
import { Label } from "./ui/authLabel";
import { Input } from "./ui/authInput";

const formSchema = authFormSchema('sign-up')
interface State {
  abbreviation: string;
  name: string;
}
interface CustomInputProps {
  control: Control<z.infer<typeof formSchema>>,
  name: FieldPath<z.infer<typeof formSchema>>,
  label: string,
  placeholder: string,
  validStates: State[];
}

const CustomInput: React.FC<CustomInputProps> = ({ control, name, label, placeholder, validStates }) => {
  const [displayValue, setDisplayValue] = useState('');

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item w-full">
          {/* <FormLabel className="form-label">
            {label}
          </FormLabel> */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <FormControl>
              {name === 'state' && validStates ? (
                 <div className="flex flex-col gap-[10px]">
                 <Label htmlFor={`${label}`}>{label}
                 </Label>
                <Select
                  id="state"
                  className="shadcn-select h-10 w-full px-3 py-2 text-sm rounded-md bg-gradient-to-br  group/btn  from-zinc-900 to-zinc-900 block bg-zinc-800 text-white shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  value={field.value || ''}
                  onChange={field.onChange}
                >
                  <option value="" disabled>
                    Select a state
                  </option>
                  {validStates.map((state) => (
                    <option key={state.abbreviation} value={state.abbreviation}>
                      {state.name}
                    </option>
                  ))}
                </Select>
                </div>

              ) : (
                <LabelInputContainer>
                <Label htmlFor={`${label}`}>{label}</Label>
                <Input
                  placeholder={placeholder}
                  className="bg-gradient-to-br  group/btn  from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  type={name === 'password' ? 'password' : 'text'}
                  value={name === 'postalCode' || name === 'ssn' ? displayValue : field.value}
                  onChange={(e) => {
                    let value = e.target.value;
                    if (name === 'postalCode') {
                      value = value.replace(/\D/g, ''); 
                      if (value.length > 6) {
                        value = value.slice(0, 6);
                      }
                      setDisplayValue(value);
                      field.onChange(value.slice(0, 5)); 
                    } else if (name === 'ssn') {
                      value = value.replace(/\D/g, ''); 
                      if (value.length > 4) {
                        value = value.slice(0, 4); 
                      }
                      setDisplayValue(value);
                      field.onChange(value);
                    } else {
                      field.onChange(e);
                    }
                  }}
                  maxLength={name === 'postalCode' ? 6 : name === 'ssn' ? 4 : undefined}
                />
                </LabelInputContainer>
              )}
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
      <div className={cn("flex flex-col space-y-2 w-full ", className)}>
          {children}
      </div>
  );
};

export default CustomInput