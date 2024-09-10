export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count i11s ${counter}`
  }
  element.addEventListener('click', () => {
      if (window.Android) {
          setCounter(window.Android.number(toAndroid("id",counter,"222")));
      }
  })
  setCounter(0)
}
function toAndroid(id, ...args) {
    // 将所有参数转换为字符串并使用特定格式连接
    const paramsString = args.map(arg => String(arg)).join(", ");
    return `id=${String(id)}, params={${paramsString}}`;
}