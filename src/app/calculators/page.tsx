'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import SubstrateCalculator from './components/SubstrateCalculator'
import AgarCalculator from './components/AgarCalculator'
import LiquidCultureCalculator from './components/LiquidCultureCalculator'

type CalculatorTab = 'substrate' | 'agar' | 'liquid-culture'

export default function CalculatorsPage() {
  const [activeTab, setActiveTab] = useState<CalculatorTab>('substrate')

  const tabs = [
    { id: 'substrate' as CalculatorTab, label: 'Substrate', icon: '🌾' },
    { id: 'agar' as CalculatorTab, label: 'Agar', icon: '🧫' },
    { id: 'liquid-culture' as CalculatorTab, label: 'Liquid Culture', icon: '🧪' },
  ]

  return (
    <div className="min-h-screen bg-mfg-dark text-mfg-light">
      <Navbar />
      
      {/* Header */}
      <div className="bg-mfg-dark/80 backdrop-blur-sm border-b border-mfg-purple/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-black text-mfg-light drop-shadow-[0_3px_3px_rgba(157,78,221,0.7)]">
            Alchemical Calculators
          </h1>
          <p className="text-mfg-light/80 mt-4 text-lg max-w-2xl mx-auto">
            Precise cosmic formulas for your mushroom cultivation journey. Calculate substrate ratios, agar recipes, and liquid culture solutions.
          </p>
        </div>
      </div>

      {/* Calculator Tabs */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeTab === tab.id
                  ? 'bg-mfg-purple text-white shadow-lg shadow-mfg-purple/40'
                  : 'bg-mfg-dark/50 text-mfg-light/70 border-2 border-mfg-purple/30 hover:border-mfg-purple'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Calculator Content */}
        <div className="bg-mfg-dark/50 backdrop-blur-md rounded-xl shadow-lg border border-mfg-purple/30 p-8">
          {activeTab === 'substrate' && <SubstrateCalculator />}
          {activeTab === 'agar' && <AgarCalculator />}
          {activeTab === 'liquid-culture' && <LiquidCultureCalculator />}
        </div>
      </main>
    </div>
  )
}