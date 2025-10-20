/**
 * Pure calculation functions for mushroom cultivation calculators
 * These functions are extracted from calculator components to enable unit testing
 * and reduce component complexity.
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export type AgarRecipeType = 'mea' | 'pda' | 'lme' | 'basic';
export type SugarSourceType = 'honey' | 'dextrose' | 'karo' | 'lme';
export type SubstrateType = 'cvg' | 'coir-only' | '50-50';

export interface AgarCalculationResult {
  water: string;
  agar: string;
  maltExtract: string;
  peptone: string;
  dextrose: string;
  potatoExtract: string;
  nutritionalYeast: string;
}

export interface LiquidCultureCalculationResult {
  water: string;
  sugar: string;
  sugarName: string;
  nutritionalYeast: string;
  peptone: string;
}

export interface SubstrateCalculationResult {
  cocoCoir: string;
  vermiculite: string;
  gypsum: string;
  water: string;
  total: string;
}

// ============================================================================
// AGAR CALCULATOR
// ============================================================================

/**
 * Calculate agar recipe components based on water amount and recipe type
 * 
 * @param waterAmount - Amount of water in milliliters (ml)
 * @param recipeType - Type of agar recipe ('mea', 'pda', 'lme', 'basic')
 * @returns Object containing calculated ingredient amounts as formatted strings
 * 
 * @example
 * ```typescript
 * const result = calculateAgar(500, 'mea');
 * // Returns: { water: '500.0', agar: '10.0', maltExtract: '10.0', ... }
 * ```
 */
export function calculateAgar(
  waterAmount: number,
  recipeType: AgarRecipeType
): AgarCalculationResult {
  // Validate inputs
  if (waterAmount < 0) {
    waterAmount = 0;
  }
  if (!isFinite(waterAmount)) {
    waterAmount = 0;
  }

  const water = waterAmount;

  if (recipeType === 'mea') {
    // Malt Extract Agar
    const agar = water * 0.02; // 2% agar
    const maltExtract = water * 0.02; // 2% malt extract
    const peptone = water * 0.001; // 0.1% peptone (optional)

    return {
      water: water.toFixed(1),
      agar: agar.toFixed(1),
      maltExtract: maltExtract.toFixed(1),
      peptone: peptone.toFixed(1),
      dextrose: '0.0',
      potatoExtract: '0.0',
      nutritionalYeast: '0.0'
    };
  } else if (recipeType === 'pda') {
    // Potato Dextrose Agar
    const agar = water * 0.015; // 1.5% agar
    const dextrose = water * 0.02; // 2% dextrose
    const potatoExtract = water * 0.004; // 0.4% potato extract

    return {
      water: water.toFixed(1),
      agar: agar.toFixed(1),
      maltExtract: '0.0',
      peptone: '0.0',
      dextrose: dextrose.toFixed(1),
      potatoExtract: potatoExtract.toFixed(1),
      nutritionalYeast: '0.0'
    };
  } else if (recipeType === 'lme') {
    // Light Malt Extract Agar (beginner friendly)
    const agar = water * 0.02; // 2% agar
    const maltExtract = water * 0.01; // 1% light malt extract
    const nutritionalYeast = water * 0.002; // 0.2% nutritional yeast

    return {
      water: water.toFixed(1),
      agar: agar.toFixed(1),
      maltExtract: maltExtract.toFixed(1),
      peptone: '0.0',
      dextrose: '0.0',
      potatoExtract: '0.0',
      nutritionalYeast: nutritionalYeast.toFixed(1)
    };
  } else {
    // Basic Agar (water + agar only)
    const agar = water * 0.02; // 2% agar

    return {
      water: water.toFixed(1),
      agar: agar.toFixed(1),
      maltExtract: '0.0',
      peptone: '0.0',
      dextrose: '0.0',
      potatoExtract: '0.0',
      nutritionalYeast: '0.0'
    };
  }
}

// ============================================================================
// LIQUID CULTURE CALCULATOR
// ============================================================================

/**
 * Calculate liquid culture recipe components based on water amount, sugar source, and nutrients
 * 
 * @param waterAmount - Amount of water in milliliters (ml)
 * @param sugarSource - Type of sugar source ('honey', 'dextrose', 'karo', 'lme')
 * @param addNutrients - Whether to include optional nutrients (nutritional yeast, peptone)
 * @returns Object containing calculated ingredient amounts as formatted strings
 * 
 * @example
 * ```typescript
 * const result = calculateLiquidCulture(500, 'honey', true);
 * // Returns: { water: '500.0', sugar: '20.0', sugarName: 'Honey', ... }
 * ```
 */
export function calculateLiquidCulture(
  waterAmount: number,
  sugarSource: SugarSourceType,
  addNutrients: boolean
): LiquidCultureCalculationResult {
  // Validate inputs
  if (waterAmount < 0) {
    waterAmount = 0;
  }
  if (!isFinite(waterAmount)) {
    waterAmount = 0;
  }

  const water = waterAmount;

  let sugar = 0;
  let sugarName = '';

  if (sugarSource === 'honey') {
    // 4% honey solution
    sugar = water * 0.04;
    sugarName = 'Honey';
  } else if (sugarSource === 'dextrose') {
    // 4% dextrose solution
    sugar = water * 0.04;
    sugarName = 'Dextrose';
  } else if (sugarSource === 'karo') {
    // 4% Karo syrup solution
    sugar = water * 0.04;
    sugarName = 'Karo Syrup';
  } else {
    // Light malt extract - 2% solution
    sugar = water * 0.02;
    sugarName = 'Light Malt Extract';
  }

  // Optional nutrients
  const nutritionalYeast = addNutrients ? water * 0.002 : 0; // 0.2% nutritional yeast
  const peptone = addNutrients ? water * 0.001 : 0; // 0.1% peptone

  return {
    water: water.toFixed(1),
    sugar: sugar.toFixed(1),
    sugarName,
    nutritionalYeast: nutritionalYeast.toFixed(2),
    peptone: peptone.toFixed(2)
  };
}

// ============================================================================
// SUBSTRATE CALCULATOR
// ============================================================================

/**
 * Calculate substrate components based on spawn amount, spawn-to-substrate ratio, and substrate type
 * 
 * @param spawnAmount - Amount of spawn in quarts or liters
 * @param spawnToSubstrateRatio - Ratio as string (e.g., '1:2', '1:3')
 * @param substrateType - Type of substrate recipe ('cvg', 'coir-only', '50-50')
 * @returns Object containing calculated substrate component amounts as formatted strings
 * 
 * @example
 * ```typescript
 * const result = calculateSubstrate(4, '1:2', 'cvg');
 * // Returns: { cocoCoir: '5.20', vermiculite: '2.40', gypsum: '0.40', water: '4.80', total: '8.00' }
 * ```
 */
export function calculateSubstrate(
  spawnAmount: number,
  spawnToSubstrateRatio: string,
  substrateType: SubstrateType
): SubstrateCalculationResult {
  // Validate spawn amount
  if (spawnAmount < 0) {
    spawnAmount = 0;
  }
  if (!isFinite(spawnAmount)) {
    spawnAmount = 0;
  }

  const spawn = spawnAmount;

  // Parse and validate ratio
  const ratio = spawnToSubstrateRatio.split(':').map(n => parseFloat(n));
  const spawnRatio = ratio[0] || 1;
  const substrateRatio = ratio[1] || 2;

  // Prevent division by zero
  if (spawnRatio === 0) {
    return {
      cocoCoir: '0.00',
      vermiculite: '0.00',
      gypsum: '0.00',
      water: '0.00',
      total: '0.00'
    };
  }

  const totalSubstrate = (spawn / spawnRatio) * substrateRatio;

  if (substrateType === 'cvg') {
    // CVG Recipe (Coco Coir, Vermiculite, Gypsum)
    const cocoCoir = totalSubstrate * 0.65; // 65% coco coir
    const vermiculite = totalSubstrate * 0.30; // 30% vermiculite
    const gypsum = totalSubstrate * 0.05; // 5% gypsum
    const water = totalSubstrate * 0.60; // Field capacity ~60%

    return {
      cocoCoir: cocoCoir.toFixed(2),
      vermiculite: vermiculite.toFixed(2),
      gypsum: gypsum.toFixed(2),
      water: water.toFixed(2),
      total: totalSubstrate.toFixed(2)
    };
  } else if (substrateType === 'coir-only') {
    // Coir Only
    const cocoCoir = totalSubstrate;
    const water = totalSubstrate * 0.60;

    return {
      cocoCoir: cocoCoir.toFixed(2),
      vermiculite: '0.00',
      gypsum: '0.00',
      water: water.toFixed(2),
      total: totalSubstrate.toFixed(2)
    };
  } else {
    // 50/50 Coir/Verm
    const cocoCoir = totalSubstrate * 0.50;
    const vermiculite = totalSubstrate * 0.50;
    const water = totalSubstrate * 0.60;

    return {
      cocoCoir: cocoCoir.toFixed(2),
      vermiculite: vermiculite.toFixed(2),
      gypsum: '0.00',
      water: water.toFixed(2),
      total: totalSubstrate.toFixed(2)
    };
  }
}