import { observable, action, makeObservable } from "mobx";

class MyStore {
  flag = null;
  segmented = false;

  constructor() {
    makeObservable(this, {
      flag: observable,
      segmented: observable,
      updateFlag: action,
      updateSegmentedValue: action,
    });
  }
  updateFlag(newVal) {
    this.flag = newVal;
  }
  updateSegmentedValue(newVal) {
    this.segmented = newVal;
  }
}

const myStore = new MyStore();
export default myStore;
