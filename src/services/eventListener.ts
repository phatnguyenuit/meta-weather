export class EventListener<TArgs extends any[]> {
  private listeners: ((...args: TArgs) => void)[] = [];

  addListener(listener: (...args: TArgs) => void) {
    this.listeners.push(listener);
  }

  raiseEvent(...args: TArgs) {
    this.listeners.forEach((listener) => listener?.(...args));
  }

  removeListener(listener: (...args: TArgs) => void) {
    const index = this.listeners.findIndex((l) => l === listener);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }
}
