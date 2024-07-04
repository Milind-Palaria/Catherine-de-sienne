import React, { useState } from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
// import { Control, Controller } from 'react-hook-form'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'
import Select from "./select"

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
        <div className="form-item">
          <FormLabel className="form-label">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              {name === 'state' && validStates ? (
                <Select
                  id="state"
                  className="shadcn-select"
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
              ) : (
                <Input
                  placeholder={placeholder}
                  className="input-class"
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
              )}
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};
export default CustomInput