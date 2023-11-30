import Food from "./Food";
import Snake from "./Snake";
import ScorePanel from "./ScorePanel";

class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  direction: string = "";
  // isLive: boolean = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();

    this.init();
  }

  init() {
    document.addEventListener("keydown", this.keyDownHandler.bind(this));
    this.run();
  }

  keyDownHandler(event: KeyboardEvent) {
    switch (event.key) {
      // 避免按下其他键，停止移动
      case "ArrowLeft":
      case "ArrowRight":
      case "ArrowDown":
      case "ArrowUp":
        // 避免多个数时发生调头
        if (this.snake.bodies[1]) {
          if (event.key === "ArrowLeft" && this.direction === "ArrowRight") {
            break;
          }
          if (event.key === "ArrowRight" && this.direction === "ArrowLeft") {
            break;
          }
          if (event.key === "ArrowDown" && this.direction === "ArrowUp") {
            break;
          }
          if (event.key === "ArrowUp" && this.direction === "ArrowDown") {
            break;
          }
        }
        this.direction = event.key;
        break;
      default:
        break;
    }
  }

  run() {
    // console.log('run---')
    let x = this.snake.X;
    let y = this.snake.Y;
    switch (this.direction) {
      case "ArrowLeft":
        x -= 10;
        break;
      case "ArrowRight":
        x += 10;
        break;
      case "ArrowDown":
        y += 10;
        break;
      case "ArrowUp":
        y -= 10;
        break;
      default:
        break;
    }

    this.checkEat(x, y);

    try {
      this.snake.X = x;
      this.snake.Y = y;
    } catch (e) {
      alert((e as Error).message + " Game Over！");
      // this.isLive = false;
      return;
    }

    setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }

  checkEat(x: number, y: number) {
    if (this.food.X === x && this.food.Y === y) {
      // console.log("吃到食物！");
      this.food.change();
      this.scorePanel.addScore();
      this.snake.addBody();
    }
  }
}

export default GameControl;
