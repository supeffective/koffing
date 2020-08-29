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
  addListener(callback) {
    window.addEventListener("popstate", callback, false);
  },
  removeListener(callback) {
    window.removeEventListener("popstate", callback, false);
  }
}
