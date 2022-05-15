export class DataItem {
  public constructor(init: Partial<DataItem>) {
    Object.assign(this, init);
  }

  public time!: string;
  public investment!: number;
  //public loss!: number;
  //public profit!: number;
  //public maintenance!: number;
}
export class DataYear extends Array<DataItem> {
  public constructor() {
    super();
    this.push(
      new DataItem({
        time: `Jan`,
        investment: 62,
        //loss: 13,
        //profit: 10,
        //maintenance:15
      })
    );
    this.push(
      new DataItem({
        time: `Feb`,
        investment: 68,
        //loss: 12,
        //profit: 15,
        //maintenance:7
      })
    );
    this.push(
      new DataItem({
        time: `Apr`,
        investment: 80,
        //loss: 17,
        //profit: 11,
        //maintenance:7
      })
    );
    this.push(
      new DataItem({
        time: `May`,
        investment: 77,
        //loss: 21,
        //profit: 12,
        //maintenance:7
      })
    );
    this.push(
      new DataItem({
        time: `Jun`,
        investment: 87,
        //loss: 24,
        //profit: 9,
        //maintenance:7
      })
    );
    this.push(
      new DataItem({
        time: `Aug`,
        investment: 79,
        //loss: 28,
        //profit: 8,
        //maintenance:7
      })
    );
    this.push(
      new DataItem({
        time: `Sep`,
        investment: 78,
        //loss: 35,
        //profit: 10,
        //maintenance:7
      })
    );
    this.push(
      new DataItem({
        time: `Oct`,
        investment: 75,
        //loss: 43,
        //profit: 7,
        //maintenance:8
      })
    );
    this.push(
      new DataItem({
        time: `Nov`,
        investment: 60,
        //loss: 20,
        //profit: 23,
        //maintenance:8
      })
    );
    this.push(
      new DataItem({
        time: `Dic`,
        investment: 75,
        //loss: 43,
        //profit: 7,
        //maintenance:8
      })
    );
  }
}
export class DataMoth extends Array<DataItem> {
  public constructor() {
      super();
      for (let i = 0; i < 30; i++) {
          this.push(
              new DataItem({
                time: `${i}`,
                investment: getRandomArbitrary(0,80),//62,
                //loss: getRandomArbitrary(0,40),//13,
                //profit: getRandomArbitrary(0,40),//10,
                //maintenance:getRandomArbitrary(0,30),//15
              })
          );  
      }
  }
}
export class DataToday extends Array<DataItem> {
  public constructor() {
      super();
      for (let i = 0; i < 24; i++) {
          this.push(
              new DataItem({
                time: `${i}`,
                investment: getRandomArbitrary(0,80),//62,
                //loss: getRandomArbitrary(0,40),//13,
                //profit: getRandomArbitrary(0,40),//10,
                //maintenance:getRandomArbitrary(0,30),//15
              })
          );  
      }
  }
}
function getRandomArbitrary(min:number, max:number) {
  return Math.random() * (max - min) + min;
}
