export default {
  getState() {
    return window.location.hash.replace(/^#/, '');
  },
  createStateUrl(state) {
    return window.location.origin + window.location.pathname + '#' + state;
  },
  pushState(state) {
    window.history.pushState(null, null, state);
  },
  onPopState(callback) {
    window.addEventListener("popstate", (e) => {
      callback(e);
    });
  }
}
