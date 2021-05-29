export const timeout = (prom: Promise<any>, time: number) =>
  Promise.race([prom, new Promise((_r, rej) => setTimeout(rej, time))]);
