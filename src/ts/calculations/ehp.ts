/**
 * This function calculates the Effective Health of the player (the total amount of damage the player can absorb before dying) using the following equation (taken from the [Hypixel Skyblock wiki page on Effective health](https://hypixel-skyblock.fandom.com/wiki/Effective_Health)):
 *
 * ![Effective Health Equation](https://wikimedia.org/api/rest_v1/media/math/render/png/281ff16fabb4759b03dbc232a76bd7e85b86efeb)
 *
 * @param health - The health value of the player
 * @param defense - The defense of the player
 * @returns - The amount of effective health the player has
 */
export const calcEhp = (health: number, defense: number): number => {
  return (1 + defense / 100) * health;
};
