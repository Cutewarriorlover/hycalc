export const enum BankLevel {
  STARTER,
  GOLD,
  DELUXE,
  SUPER_DELUXE,
  PREMIER,
}

class BankStats {
  public caps: Array<{ coins: number; percent: number }>;
  public maxBalance: number;

  constructor(
    caps: Array<{ coins: number; percent: number }>,
    maxBalance: number
  ) {
    this.caps = caps;
    this.maxBalance = maxBalance;
  }
}

const bankStats = {
  [BankLevel.STARTER]: new BankStats(
    [
      { coins: 10_000_000, percent: 0.02 },
      { coins: 15_000_000, percent: 0.01 },
    ],
    50_000_000
  ),

  [BankLevel.GOLD]: new BankStats(
    [
      { coins: 10_000_000, percent: 0.02 },
      { coins: 20_000_000, percent: 0.01 },
    ],
    100_000_000
  ),

  [BankLevel.DELUXE]: new BankStats(
    [
      { coins: 10_000_000, percent: 0.02 },
      { coins: 20_000_000, percent: 0.01 },
      { coins: 30_000_000, percent: 0.005 },
    ],
    250_000_000
  ),
  [BankLevel.SUPER_DELUXE]: new BankStats(
    [
      { coins: 10_000_000, percent: 0.02 },
      { coins: 20_000_000, percent: 0.01 },
      { coins: 30_000_000, percent: 0.005 },
      { coins: 50_000_000, percent: 0.002 },
    ],
    500_000_000
  ),
  [BankLevel.PREMIER]: new BankStats(
    [
      { coins: 10_000_000, percent: 0.02 },
      { coins: 20_000_000, percent: 0.01 },
      { coins: 30_000_000, percent: 0.005 },
      { coins: 50_000_000, percent: 0.002 },
      { coins: 160_000_000, percent: 0.001 },
    ],
    1_000_000_000
  ),
};

/**
 * Calculate the amount of interest earned in `afkHours` hours.
 *
 * @param {number} startCoins - The amount of coins the player has before interest.
 * @param {number} afkHours - The amount of hours the player waits.
 * @param {BankLevel} bankLevel - The level of the bank of the player.
 * @return {*}  {{finalCoins: number, earnedCoins: number}}
 */
export const calcInterest = (
  startCoins: number,
  afkHours: number,
  bankLevel: BankLevel
): { finalCoins: number; earnedCoins: number } => {
  let finalCoins = startCoins;

  for (let i = 0; i < Math.floor(afkHours / 31); i++) {
    const result = getCoinsForLevel(startCoins, bankLevel);
    finalCoins += result;
  }

  finalCoins = Math.min(finalCoins, bankStats[bankLevel].maxBalance)
  let earnedCoins = finalCoins - startCoins

  return { finalCoins, earnedCoins };
};

const getCoinsForLevel = (
  startCoins: number,
  bankLevel: BankLevel
): number => {
  let coins = startCoins;

  const currentBankStats: BankStats = bankStats[bankLevel];

  for (const cap of currentBankStats.caps) {
    if (coins <= cap.coins) {
      coins += coins * cap.percent;
    } else {
      coins += cap.coins * cap.percent;
    }
  }

  const finalCoins = Math.min(coins, bankStats[bankLevel].maxBalance);

  return finalCoins;
};
