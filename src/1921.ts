function checkOnDeath(dist: number[]) {
  for (const monster of dist) {
    if (monster <= 0) return true;
  }
  return false;
}

function killMonster(dist: number[], speed: number[]) {
  let min = Infinity;
  let minInd = Infinity;
  for (let i = 0; i < dist.length; i++) {
    if (dist[i] < min) {
      min = dist[i];
      minInd = i;
    }
    if (dist[i] - speed[i] <=0) {
      min = dist[i];
      minInd = i;
      break;
    }
  }
  console.log(min, minInd);
  delete dist[minInd];
  delete speed[minInd];
}

function monsterStep(dist: number[], speed: number[]) {
  for (const i in dist) {
    dist[i] -= speed[i];
  }
}

async function eliminateMaximum(
  dist: number[],
  speed: number[]
): Promise<number> {
  let eliminated = 0;
  while (true) {
    console.log(dist, speed);
    // await delay(2e3);

    if (checkOnDeath(dist) || !dist.length) break;
    killMonster(dist, speed);
    dist = dist.filter((a) => !!a);
    speed = speed.filter((a) => !!a);
    eliminated += 1;

    monsterStep(dist, speed);
  }
  return eliminated;
}

// function delay(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

const dist = [8,5,7,8,5,6,10,8,5];
const speed = [5,1];
eliminateMaximum(dist, speed).then((res) => console.log(res));
