export default function (fn, delay = 300, immediate = false) {
  let timer = null;

  return function (...args) {
    const context = this;

    const callNow = immediate && !timer;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      if (!immediate) {
        fn.apply(context, args);
      }
      timer = null;
    }, delay);

    if (callNow) {
      fn.apply(context, args);
    }
  };
}