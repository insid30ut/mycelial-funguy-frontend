'use client'

import { useState } from 'react'

export default function AgarCalculator() {
  const [waterAmount, setWaterAmount] = useState<string>('500')
  const [recipeType, setRecipeType] = useState<string>('mea')

  // Calculate agar recipe components
  const calculateAgar = () => {
    const water = parseFloat(waterAmount) || 0

    if (recipeType === 'mea') {
      // Malt Extract Agar
      const agar = water * 0.02 // 2% agar
      const maltExtract = water * 0.02 // 2% malt extract
      const peptone = water * 0.001 // 0.1% peptone (optional)

      return {
        water: water.toFixed(1),
        agar: agar.toFixed(1),
        maltExtract: maltExtract.toFixed(1),
        peptone: peptone.toFixed(1),
        dextrose: '0.0',
        potatoExtract: '0.0',
        nutritionalYeast: '0.0'
      }
    } else if (recipeType === 'pda') {
      // Potato Dextrose Agar
      const agar = water * 0.015 // 1.5% agar
      const dextrose = water * 0.02 // 2% dextrose
      const potatoExtract = water * 0.004 // 0.4% potato extract

      return {
        water: water.toFixed(1),
        agar: agar.toFixed(1),
        maltExtract: '0.0',
        peptone: '0.0',
        dextrose: dextrose.toFixed(1),
        potatoExtract: potatoExtract.toFixed(1),
        nutritionalYeast: '0.0'
      }
    } else if (recipeType === 'lme') {
      // Light Malt Extract Agar (beginner friendly)
      const agar = water * 0.02 // 2% agar
      const maltExtract = water * 0.01 // 1% light malt extract
      const nutritionalYeast = water * 0.002 // 0.2% nutritional yeast

      return {
        water: water.toFixed(1),
        agar: agar.toFixed(1),
        maltExtract: maltExtract.toFixed(1),
        peptone: '0.0',
        dextrose: '0.0',
        potatoExtract: '0.0',
        nutritionalYeast: nutritionalYeast.toFixed(1)
      }
    } else {
      // Basic Agar (water + agar only)
      const agar = water * 0.02 // 2% agar

      return {
        water: water.toFixed(1),
        agar: agar.toFixed(1),
        maltExtract: '0.0',
        peptone: '0.0',
        dextrose: '0.0',
        potatoExtract: '0.0',
        nutritionalYeast: '0.0'
      }
    }
  }

  const results = calculateAgar()
  const totalPlates = Math.floor(parseFloat(waterAmount) / 20) // Estimate ~20ml per plate

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-display font-bold text-mfg-gold mb-4">
        🧫 Agar Recipe Calculator
      </h2>
      <p className="text-mfg-light/80 mb-6">
        Calculate precise measurements for your agar plates. Perfect for growing mycelium cultures and isolating genetics.
      </p>

      {/* Input Fields */}
      <div className="space-y-4">
        {/* Water Amount */}
        <div>
          <label className="block text-mfg-light font-semibold mb-2">
            Water Amount (ml)
          </label>
          <input
            type="number"
            value={waterAmount}
            onChange={(e) => setWaterAmount(e.target.value)}
            min="0"
            step="50"
            className="w-full px-4 py-3 bg-mfg-dark border-2 border-mfg-purple/30 rounded-lg text-mfg-light focus:border-mfg-purple focus:outline-none transition-colors"
            placeholder="500"
          />
        </div>

        {/* Recipe Type */}
        <div>
          <label className="block text-mfg-light font-semibold mb-2">
            Agar Recipe Type
          </label>
          <select
            value={recipeType}
            onChange={(e) => setRecipeType(e.target.value)}
            className="w-full px-4 py-3 bg-mfg-dark border-2 border-mfg-purple/30 rounded-lg text-mfg-light focus:border-mfg-purple focus:outline-none transition-colors cursor-pointer"
          >
            <option value="mea">MEA - Malt Extract Agar (Most Popular)</option>
            <option value="pda">PDA - Potato Dextrose Agar</option>
            <option value="lme">LME - Light Malt Extract (Beginner)</option>
            <option value="basic">Basic Agar (Water + Agar)</option>
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 p-6 bg-mfg-purple/10 border-2 border-mfg-purple/50 rounded-lg">
        <h3 className="text-2xl font-display font-bold text-mfg-gold mb-4">
          ✨ Your Agar Recipe
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-mfg-purple/20">
            <span className="text-mfg-light/80">Estimated Plates:</span>
            <span className="text-xl font-bold text-mfg-light">~{totalPlates} plates</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-mfg-purple/20">
            <span className="text-mfg-light/80">Water:</span>
            <span className="text-xl font-bold text-mfg-teal">{results.water} ml</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-mfg-purple/20">
            <span className="text-mfg-light/80">Agar Powder:</span>
            <span className="text-xl font-bold text-mfg-teal">{results.agar} g</span>
          </div>
          {parseFloat(results.maltExtract) > 0 && (
            <div className="flex justify-between items-center py-2 border-b border-mfg-purple/20">
              <span className="text-mfg-light/80">Malt Extract:</span>
              <span className="text-xl font-bold text-mfg-teal">{results.maltExtract} g</span>
            </div>
          )}
          {parseFloat(results.peptone) > 0 && (
            <div className="flex justify-between items-center py-2 border-b border-mfg-purple/20">
              <span className="text-mfg-light/80">Peptone:</span>
              <span className="text-xl font-bold text-mfg-teal">{results.peptone} g</span>
            </div>
          )}
          {parseFloat(results.dextrose) > 0 && (
            <div className="flex justify-between items-center py-2 border-b border-mfg-purple/20">
              <span className="text-mfg-light/80">Dextrose:</span>
              <span className="text-xl font-bold text-mfg-teal">{results.dextrose} g</span>
            </div>
          )}
          {parseFloat(results.potatoExtract) > 0 && (
            <div className="flex justify-between items-center py-2 border-b border-mfg-purple/20">
              <span className="text-mfg-light/80">Potato Extract:</span>
              <span className="text-xl font-bold text-mfg-teal">{results.potatoExtract} g</span>
            </div>
          )}
          {parseFloat(results.nutritionalYeast) > 0 && (
            <div className="flex justify-between items-center py-2 border-b border-mfg-purple/20">
              <span className="text-mfg-light/80">Nutritional Yeast:</span>
              <span className="text-xl font-bold text-mfg-teal">{results.nutritionalYeast} g</span>
            </div>
          )}
        </div>

        <div className="mt-6 p-4 bg-mfg-teal/10 border border-mfg-teal/30 rounded-lg">
          <p className="text-sm text-mfg-light/70 mb-2">
            <strong className="text-mfg-teal">📝 Instructions:</strong>
          </p>
          <ol className="text-sm text-mfg-light/70 space-y-1 list-decimal list-inside">
            <li>Mix all dry ingredients in a flask or pot</li>
            <li>Add water and stir until dissolved</li>
            <li>Pressure cook at 15 PSI for 20-30 minutes</li>
            <li>Let cool to ~50-55°C before pouring into sterile petri dishes</li>
            <li>Allow plates to solidify before use</li>
          </ol>
        </div>
      </div>
    </div>
  )
}