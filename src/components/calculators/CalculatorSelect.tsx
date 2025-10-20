import React, { SelectHTMLAttributes } from 'react'

interface SelectOption {
  value: string
  label: string
}

interface CalculatorSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: SelectOption[]
}

export default function CalculatorSelect({ 
  label, 
  options,
  className = '',
  ...props 
}: CalculatorSelectProps) {
  return (
    <div>
      <label className="block text-mfg-light font-semibold mb-2">
        {label}
      </label>
      <select
        className={`w-full px-4 py-3 bg-mfg-dark border-2 border-mfg-purple/30 rounded-lg text-mfg-light focus:border-mfg-purple focus:outline-none transition-colors cursor-pointer ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}