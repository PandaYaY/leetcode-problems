function checkOnDeath(dist: number[]) {
  for (const monster of dist) {
    if (monster === 0) {
      return true;
    }
  }
  return false;
}

function killMonster(dist: number[]) {
  const min = Math.min(...dist);
  delete dist.
}

function eliminateMaximum(dist: number[], speed: number[]): number {
  let eliminated = 0;
  while (true) {
    if (checkOnDeath(dist)) break;
    
    killMonster(dist);
  }
}
