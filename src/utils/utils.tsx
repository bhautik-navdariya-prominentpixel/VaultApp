const FORMATTER = new Intl.NumberFormat("en-IN", {
  currency: "INR",
  style: "currency",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
export function getId() {
  return (+(Date.now() * parseInt(Math.random() * 100 + "")).toFixed(11)).toString();
}

export function convertFirebaseObject<T>(object: any): T {
  return Object.entries(object).map(([id, user]) => ({
    id,
    ...(user as object),
  })) as T;
}

export function getFormattedRuppies(amount: number): string{
  return FORMATTER.format(amount);
}
// export function convertFirebaseObject<T>(object: any): T {
//   return Object.entries(object).map(([id, user]) => ({
//     id,
//     ...(user as object),
//   })) as T;
// }
