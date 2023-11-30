class Snake {
  element: HTMLElement;
  head: HTMLElement;
  bodies: HTMLCollection;

  constructor() {
    this.element = document.getElementById("snake")!;
    this.head = document.querySelector("#snake >div")!;
    this.bodies = this.element.getElementsByTagName("div");
  }

  get X() {
    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
  }

  set X(value: number) {
    if (this.X === value) {
      return;
    }
    if (value < 0 || value > 290) {
      throw new Error("蛇撞墙了！");
    }
    if (
      this.bodies[1] &&
      (this.bodies[1] as HTMLElement).offsetLeft === value
    ) {
      // console.log("调头了！", value, this.X);
      if (value > this.X) {
        value = this.X - 10;
      } else if (value < this.X) {
        value = this.X + 10;
      }
    }
    this.moveBody();
    this.head.style.left = value + "px";
    this.checkHeadBody();
  }

  set Y(value: number) {
    if (this.Y === value) {
      return;
    }
    if (value < 0 || value > 290) {
      throw new Error("蛇撞墙了！");
    }
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      if (value > this.Y) {
        value = this.Y - 10;
      } else if (value < this.Y) {
        value = this.Y + 10;
      }
    }
    this.moveBody();
    this.head.style.top = value + "px";
    this.checkHeadBody();
  }

  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }

  moveBody() {
    // console.log(this.bodies, "moveBody");
    for (let index = this.bodies.length - 1; index > 0; index--) {
      let x = (this.bodies[index - 1] as HTMLElement).offsetLeft;
      let y = (this.bodies[index - 1] as HTMLElement).offsetTop;
      // console.log(x, y, "moveBody");
      (this.bodies[index] as HTMLElement).style.top = y + "px";
      (this.bodies[index] as HTMLElement).style.left = x + "px";
    }
  }

  checkHeadBody() {
    for (let index = 1; index < this.bodies.length; index++) {
      let bd = this.bodies[index] as HTMLElement;
      let x = bd.offsetLeft;
      let y = bd.offsetTop;
      if (x === this.X && y === this.Y) {
        throw new Error("蛇撞到自己了！");
      }
    }
  }
}

export default Snake;
