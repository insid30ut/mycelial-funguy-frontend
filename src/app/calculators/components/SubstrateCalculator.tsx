'use client'

import { useState } from 'react'

export default function SubstrateCalculator() {
  const [spawnAmount, setSpawnAmount] = useState<string>('4')
  const [spawnToSubstrate, setSpawnToSubstrate] = useState<string>('1:2')
  const [substrateType, setSubstrateType] = useState<string>('cvg')

  // Calculate substrate components based on spawn amount and ratio
  const calculateSubstrate = () => {
    const spawn = parseFloat(spawnAmount) || 0
    const ratio = spawnToSubstrate.split(':').map(n => parseFloat(n))
    const spawnRatio = ratio[0] || 1
    const substrateRatio = ratio[1] || 2

    const totalSubstrate = (spawn / spawnRatio) * substrateRatio

    if (substrateType === 'cvg') {
      // CVG Recipe (Coco Coir, Vermiculite, Gypsum)
      const cocoCoir = totalSubstrate * 0.65 // 65% coco coir
      const vermiculite = totalSubstrate * 0.30 // 30% vermiculite
      const gypsum = totalSubstrate * 0.05 // 5% gypsum
      const water = totalSubstrate * 0.60 // Field capacity ~60%

      return {
        cocoCoir: cocoCoir.toFixed(2),
        vermiculite: vermiculite.toFixed(2),
        gypsum: gypsum.toFixed(2),
        water: water.toFixed(2),
        total: totalSubstrate.toFixed(2)
      }
    } else if (substrateType === 'coir-only') {
      // Coir Only
      const cocoCoir = totalSubstrate
      const water = totalSubstrate * 0.60

      return {
        cocoCoir: cocoCoir.toFixed(2),
        vermiculite: '0.00',
        gypsum: '0.00',
        water: water.toFixed(2),
        total: totalSubstrate.toFixed(2)
      }
    } else {
      // 50/50 Coir/Verm
      const cocoCoir = totalSubstrate * 0.50
      const vermiculite = totalSubstrate * 0.50
      const water = totalSubstrate * 0.60

      return {
        cocoCoir: cocoCoir.toFixed(2),
        vermiculite: vermiculite.toFixed(2),
        gypsum: '0.00',
        water: water.toFixed(2),
        total: totalSubstrate.toFixed(2)
      }
    }
  }

  const results = calculateSubstrate()

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-display font-bold text-mfg-gold mb-4">
        🌾 Substrate Calculator
      </h2>
      <p className="text-mfg-light/80 mb-6">
        Calculate the perfect substrate mixture for your mushroom cultivation. Enter your spawn amount and desired ratio.
      </p>

      {/* Input Fields */}
      <div className="space-y-4">
        {/* Spawn Amount */}
        <div>
          <label className="block text-mfg-light font-semibold mb-2">
            Spawn Amount (quarts or liters)
          </label>
          <input
            type="number"
            value={spawnAmount}
            onChange={(e) => setSpawnAmount(e.target.value)}
            min="0"
            step="0.5"
            className="w-full px-4 py-3 bg-mfg-dark border-2 border-mfg-purple/30 rounded-lg text-mfg-light focus:border-mfg-purple focus:outline-none transition-colors"
            placeholder="4"
          />
        </div>

        {/* Spawn to Substrate Ratio */}
        <div>
          <label className="block text-mfg-light font-semibold mb-2">
            Spawn to Substrate Ratio
          </label>
          <select
            value={spawnToSubstrate}
            onChange={(e) => setSpawnToSubstrate(e.target.value)}
            className="w-full px-4 py-3 bg-mfg-dark border-2 border-mfg-purple/30 rounded-lg text-mfg-light focus:border-mfg-purple focus:outline-none transition-colors cursor-pointer"
          >
            <option value="1:1">1:1 (Fastest colonization)</option>
            <option value="1:2">1:2 (Recommended)</option>
            <option value="1:3">1:3 (Economy)</option>
            <option value="1:4">1:4 (Maximum stretch)</option>
          </select>
        </div>

        {/* Substrate Type */}
        <div>
          <label className="block text-mfg-light font-semibold mb-2">
            Substrate Recipe
          </label>
          <select
            value={substrateType}
            onChange={(e) => setSubstrateType(e.target.value)}
            className="w-full px-4 py-3 bg-mfg-dark border-2 border-mfg-purple/30 rounded-lg text-mfg-light focus:border-mfg-purple focus:outline-none transition-colors cursor-pointer"
          >
            <option value="cvg">CVG (Coco Coir, Vermiculite, Gypsum)</option>
            <option value="coir-only">Coco Coir Only</option>
            <option value="50-50">50/50 (Coco Coir & Vermiculite)</option>
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 p-6 bg-mfg-purple/10 border-2 border-mfg-purple/50 rounded-lg">
        <h3 className="text-2xl font-display font-bold text-mfg-gold mb-4">
          ✨ Your Substrate Recipe
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-mfg-purple/20">
            <span className="text-mfg-light/80">Total Substrate:</span>
            <span className="text-xl font-bold text-mfg-light">{results.total} units</span>
          </div>
          {parseFloat(results.cocoCoir) > 0 && (
            <div className="flex justify-between items-center py-2 border-b border-mfg-purple/20">
              <span className="text-mfg-light/80">Coco Coir:</span>
              <span className="text-xl font-bold text-mfg-teal">{results.cocoCoir} units</span>
            </div>
          )}
          {parseFloat(results.vermiculite) > 0 && (
            <div className="flex justify-between items-center py-2 border-b border-mfg-purple/20">
              <span className="text-mfg-light/80">Vermiculite:</span>
              <span className="text-xl font-bold text-mfg-teal">{results.vermiculite} units</span>
            </div>
          )}
          {parseFloat(results.gypsum) > 0 && (
            <div className="flex justify-between items-center py-2 border-b border-mfg-purple/20">
              <span className="text-mfg-light/80">Gypsum:</span>
              <span className="text-xl font-bold text-mfg-teal">{results.gypsum} units</span>
            </div>
          )}
          <div className="flex justify-between items-center py-2">
            <span className="text-mfg-light/80">Water (field capacity):</span>
            <span className="text-xl font-bold text-mfg-gold">{results.water} units</span>
          </div>
        </div>

        <div className="mt-6 p-4 bg-mfg-teal/10 border border-mfg-teal/30 rounded-lg">
          <p className="text-sm text-mfg-light/70">
            <strong className="text-mfg-teal">💡 Tip:</strong> Hydrate your coco coir first, then mix in vermiculite and gypsum. 
            Add water gradually until you reach field capacity (a few drops when squeezed).
          </p>
        </div>
      </div>
    </div>
  )
}