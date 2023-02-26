// 输入： '1','2','3',（未知个数）  
// 输出：分别在1,3,4秒（可自定义时间）后输出'1','2','3'

class Queue {
  constructor() {
    this.taskQueue = [];
    this.timeQueue = [];
  }
  // 为确保可以链式调用，必须返回this；
  addTask(callback, time) {
    this.taskQueue.push(callback);
    this.timeQueue.push(time);
    return this;
  }

  start() {
    while (this.taskQueue.length > 0) {
      const item = this.taskQueue.shift();
      const timer = setTimeout(() => {
        item();
        clearTimeout(timer);
      }, this.timeQueue.shift());
    }

  }
}

const taskInsure = new Queue()
  .addTask(() => { console.log('1') }, 1000)
  .addTask(() => { console.log('2') }, 3000)
  .addTask(() => { console.log('3') }, 4000);

taskInsure.start();