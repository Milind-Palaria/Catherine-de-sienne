import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'

import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'
import Select from './ui/Select'

const formSchema = authFormSchema('sign-up')
interface State {
  abbreviation: string;
  name: string;
}
interface CustomInput {
  control: Control<z.infer<typeof formSchema>>,
  name: FieldPath<z.infer<typeof formSchema>>,
  label: string,
  placeholder: string,
  validStates: State[];
}

const CustomInput = ({ control, name, label, placeholder, validStates }) => {
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
              {name === 'state' ? (
                <Select
                  id="state"
                  className="shadcn-select"
                  value={field.value}
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
                  {...field}
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