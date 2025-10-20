import React, { InputHTMLAttributes } from 'react'

interface CalculatorInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export default function CalculatorInput({ 
  label, 
  className = '',
  ...props 
}: CalculatorInputProps) {
  return (
    <div>
      <label className="block text-mfg-light font-semibold mb-2">
        {label}
      </label>
      <input
        className={`w-full px-4 py-3 bg-mfg-dark border-2 border-mfg-purple/30 rounded-lg text-mfg-light focus:border-mfg-purple focus:outline-none transition-colors ${className}`}
        {...props}
      />
    </div>
  )
}