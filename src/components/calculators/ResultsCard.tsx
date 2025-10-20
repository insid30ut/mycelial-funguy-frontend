import React, { ReactNode } from 'react'

interface ResultsCardProps {
  title: string
  children: ReactNode
}

export default function ResultsCard({ title, children }: ResultsCardProps) {
  return (
    <div className="mt-8 p-6 bg-mfg-purple/10 border-2 border-mfg-purple/50 rounded-lg">
      <h3 className="text-2xl font-display font-bold text-mfg-gold mb-4">
        {title}
      </h3>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  )
}

interface ResultRowProps {
  label: string
  value: string | number
  valueColor?: 'light' | 'teal' | 'gold'
  isLast?: boolean
}

export function ResultRow({ 
  label, 
  value, 
  valueColor = 'teal',
  isLast = false 
}: ResultRowProps) {
  const colorClasses = {
    light: 'text-mfg-light',
    teal: 'text-mfg-teal',
    gold: 'text-mfg-gold'
  }

  return (
    <div className={`flex justify-between items-center py-2 ${!isLast ? 'border-b border-mfg-purple/20' : ''}`}>
      <span className="text-mfg-light/80">{label}</span>
      <span className={`text-xl font-bold ${colorClasses[valueColor]}`}>
        {value}
      </span>
    </div>
  )
}

interface InstructionBoxProps {
  title: string
  instructions: string[]
  variant?: 'teal' | 'gold'
}

export function InstructionBox({ 
  title, 
  instructions,
  variant = 'teal'
}: InstructionBoxProps) {
  const variantClasses = {
    teal: {
      container: 'bg-mfg-teal/10 border-mfg-teal/30',
      title: 'text-mfg-teal'
    },
    gold: {
      container: 'bg-mfg-gold/10 border-mfg-gold/30',
      title: 'text-mfg-gold'
    }
  }

  return (
    <div className={`mt-6 p-4 ${variantClasses[variant].container} border rounded-lg`}>
      <p className="text-sm text-mfg-light/70 mb-2">
        <strong className={variantClasses[variant].title}>{title}</strong>
      </p>
      <ol className="text-sm text-mfg-light/70 space-y-1 list-decimal list-inside">
        {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  )
}