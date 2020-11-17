import * as Phaser from 'phaser';

export class CreateWorld extends Phaser.Scene {
  // propetry

  constructor() {
    super('CreateWorld');
  }

  preload() {
  }

  create() {
    const worldSize = 500;
    const seed = `${Math.random()}`;
    const groundData: Promise<any[]> = this.createGround(worldSize, seed);
  }

  update(time: number, delta: number) {
  }

  end() {
  }

  // 大地データ作成
  async createGround(worldSize: number, seed: string) {
    const executePromise = (y: number) => {
      return new Promise((resolve, reject) => {
        const chars: string[] = [...Array(worldSize)].map((_, x) =>{
          const val = perlin2D.get([ x / worldSize, y / worldSize ]);
          const char: string =
            val >= 0.9 ? '4': // 山
            val >= 0.7 ? '3': // 丘
            val >= 0.4 ? '2': // 平地
            val >= 0.3 ? '1': // 砂地
                         '0'; // 海・川
            return char;
        })
        resolve(chars);
      })
    };

    const Perlin = require('pf-perlin');
    const perlin2D = new Perlin({seed: seed});
    const promiseList: any[] = [];
    [...Array(worldSize)].map((_, y) =>{
      promiseList.push(executePromise(y));
    })

    return await Promise.all(promiseList);
  }
}
