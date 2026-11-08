const backend = {
  appName: 'raedev',
  status: 'ready',
  getMessage() {
    return 'Everything is ready for the next idea.';
  },
  log(message) {
    if (typeof console !== 'undefined') {
      console.log(`[${this.appName}] ${message}`);
    }
  }
};

if (typeof window !== 'undefined') {
  window.backend = backend;
}

if (typeof module !== 'undefined') {
  module.exports = backend;
}
