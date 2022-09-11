/* eslint-disable */
class SnapshotSandBox {
  windowSnapshot = {};
  modifyPropsMap = {};

  active() {
    for (const prop in window) {
      this.windowSnapshot[prop] = window[prop];
    }

    Object.keys(this.modifyPropsMap).forEach(prop => {
      window[prop] = this.modifyPropsMap[prop];
    });
  }

  inactive() {
    for (const prop in window) {
      if (window[prop] !== this.windowSnapshot[prop]) {
        this.modifyPropsMap[prop] = window[prop];
        window[prop] = this.windowSnapshot[prop];
      }
    }
  }
}

let snapshotSandBox = new SnapshotSandBox();
snapshotSandBox.active();
window.city = 'Beijing';
console.log('window.city-01: ', window.city);