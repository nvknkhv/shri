class LSRequest {
  setItem(...args) {
    return this.__makeRequest(localStorage.setItem.bind(localStorage), ...args);
  }

  getItem(...args) {
    return this.__makeRequest(localStorage.getItem.bind(localStorage), ...args);
  }

  removeItem(...args) {
    return this.__makeRequest(localStorage.removeItem.bind(localStorage), ...args);
  }

  __makeRequest(handler, ...args) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const response = handler(...args);
        resolve(response || { message: 'ok' });
      }, 1000);
    });
  }
}

export default new LSRequest();
