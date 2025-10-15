'use client'

import { useState } from 'react'

export default function LiquidCultureCalculator() {
  const [waterAmount, setWaterAmount] = useState<string>('500')
  const [sugarSource, setSugarSource] = useState<string>('honey')
  const [addNutrients, setAddNutrients] = useState<boolean>(true)

  // Calculate liquid culture recipe components
  const calculateLiquidCulture = () => {
    const water = parseFloat(waterAmount) || 0

    let sugar = 0
    let sugarName = ''
    
    if (sugarSource === 'honey') {
      // 4% honey solution
      sugar = water * 0.04
      sugarName = 'Honey'
    } else if (sugarSource === 'dextrose') {
      // 4% dextrose solution
      sugar = water * 0.04
      sugarName = 'Dextrose'
    } else if (sugarSource === 'karo') {
      // 4% Karo syrup solution
      sugar = water * 0.04
      sugarName = 'Karo Syrup'
    } else {
      // Light malt extract - 2% solution
      sugar = water * 0.02
      sugarName = 'Light Malt Extract'
    }

    // Optional nutrients
    const nutritionalYeast = addNutrients ? water * 0.002 : 0 // 0.2% nutritional yeast
    const peptone = addNutrients ? water * 0.001 : 0 // 0.1% peptone

    return {
      water: water.toFixed(1),
      sugar: sugar.toFixed(1),
      sugarName,
      nutritionalYeast: nutritionalYeast.toFixed(2),
      peptone: peptone.toFixed(2)
    }
  }

  const results = calculateLiquidCulture()
  const jars = Math.floor(parseFloat(waterAmount) / 250) // Estimate number of half-pint jars

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-display font-bold text-mfg-gold mb-4">
        🧪 Liquid Culture Calculator
      </h2>
      <p className="text-mfg-light/80 mb-6">
        Calculate the perfect liquid culture solution for expanding your mycelium. Choose your sugar source and optional nutrients.
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

        {/* Sugar Source */}
        <div>
          <label className="block text-mfg-light font-semibold mb-2">
            Sugar Source
          </label>
          <select
            value={sugarSource}
            onChange={(e) => setSugarSource(e.target.value)}
            className="w-full px-4 py-3 bg-mfg-dark border-2 border-mfg-purple/30 rounded-lg text-mfg-light focus:border-mfg-purple focus:outline-none transition-colors cursor-pointer"
          >
            <option value="honey">Honey (Most Popular)</option>
            <option value="dextrose">Dextrose (Lab Grade)</option>
            <option value="karo">Karo Syrup (Light)</option>
            <option value="lme">Light Malt Extract</option>
          </select>
        </div>

        {/* Add Nutrients */}
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="addNutrients"
            checked={addNutrients}
            onChange={(e) => setAddNutrients(e.target.checked)}
            className="w-5 h-5 bg-mfg-dark border-2 border-mfg-purple/30 rounded text-mfg-purple focus:ring-mfg-purple focus:ring-2 cursor-pointer"
          />
          <label htmlFor="addNutrients" className="text-mfg-light font-semibold cursor-pointer">
            Add Optional Nutrients (Recommended for faster growth)
          </label>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 p-6 bg-mfg-purple/10 border-2 border-mfg-purple/50 rounded-lg">
        <h3 className="text-2xl font-display font-bold text-mfg-gold mb-4">
          ✨ Your Liquid Culture Recipe
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-mfg-purple/20">
            <span className="text-mfg-light/80">Estimated Jars:</span>
            <span className="text-xl font-bold text-mfg-light">~{jars} half-pint jars</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-mfg-purple/20">
            <span className="text-mfg-light/80">Water:</span>
            <span className="text-xl font-bold text-mfg-teal">{results.water} ml</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-mfg-purple/20">
            <span className="text-mfg-light/80">{results.sugarName}:</span>
            <span className="text-xl font-bold text-mfg-teal">{results.sugar} {sugarSource === 'honey' || sugarSource === 'karo' ? 'ml' : 'g'}</span>
          </div>
          {addNutrients && (
            <>
              <div className="flex justify-between items-center py-2 border-b border-mfg-purple/20">
                <span className="text-mfg-light/80">Nutritional Yeast:</span>
                <span className="text-xl font-bold text-mfg-teal">{results.nutritionalYeast} g</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-mfg-purple/20">
                <span className="text-mfg-light/80">Peptone (optional):</span>
                <span className="text-xl font-bold text-mfg-teal">{results.peptone} g</span>
              </div>
            </>
          )}
        </div>

        <div className="mt-6 p-4 bg-mfg-teal/10 border border-mfg-teal/30 rounded-lg">
          <p className="text-sm text-mfg-light/70 mb-2">
            <strong className="text-mfg-teal">📝 Instructions:</strong>
          </p>
          <ol className="text-sm text-mfg-light/70 space-y-1 list-decimal list-inside">
            <li>Mix sugar source and nutrients (if using) with water in a jar</li>
            <li>Add a magnetic stir bar or glass marbles for agitation</li>
            <li>Cover with lid and foil, leaving room for gas exchange</li>
            <li>Pressure cook at 15 PSI for 20-30 minutes</li>
            <li>Let cool completely before inoculation</li>
            <li>Store on a magnetic stirrer or shake daily for best results</li>
          </ol>
        </div>

        <div className="mt-4 p-4 bg-mfg-gold/10 border border-mfg-gold/30 rounded-lg">
          <p className="text-sm text-mfg-light/70">
            <strong className="text-mfg-gold">⚡ Pro Tip:</strong> Use a magnetic stir plate to keep your liquid culture 
            oxygenated and prevent mycelium from clumping. If you don&apos;t have one, shake the jar vigorously 1-2 times daily.
          </p>
        </div>
      </div>
    </div>
  )
}