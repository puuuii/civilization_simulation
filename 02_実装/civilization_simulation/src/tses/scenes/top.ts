import * as Phaser from 'phaser';

export class Top extends Phaser.Scene {
  // propetry

  constructor() {
    super('Top');
  }

  preload() {
  }

  create() {
    const emitter = new Phaser.Events.EventEmitter();

    const game_width = this.sys.game.canvas.width;
    const game_height = this.sys.game.canvas.height;

    // ロゴ
    const logo = this.add.text(game_width/2, game_height/4, 'LOGO', { fontSize: '10rem' })
      .setOrigin(0.5);

    // 新規ゲーム開始メニュー
    const menu_game_start = this.add.text(game_width/2, game_height/2, '初めから', { fontSize: '2rem' })
      .setOrigin(0.5)
      .setInteractive()
      .once('pointerdown', () => {
        menu_game_start.setTint(0x00ffff);
      })

    // 継続ゲーム開始メニュー
    const menu_game_continue = this.add.text(game_width/2, game_height/2+menu_game_start.height*2, '続きから', { fontSize: '2rem' })
      .setOrigin(0.5)
      .setInteractive()
      .once('pointerdown', () => {
        menu_game_continue.setTint(0x00ffff);
      })

    // 世界創造メニュー
    const menu_create_world = this.add.text(game_width/2, game_height/2+menu_game_start.height*4, '世界創造', { fontSize: '2rem' })
      .setOrigin(0.5)
      .setInteractive()
      .once('pointerdown', () => {
        menu_create_world.setTint(0x00ffff);
      })

    // 設定メニュー
    const menu_setting = this.add.text(game_width/2, game_height/2+menu_game_start.height*6, '設定', { fontSize: '2rem' })
      .setOrigin(0.5)
      .setInteractive()
      .once('pointerdown', () => {
        menu_setting.setTint(0x00ffff);
      })
  }

  update(time: number, delta: number) {
  }

  end() {
  }
}
