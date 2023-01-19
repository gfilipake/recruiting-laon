export function useTimeCalculator(d: string | number | undefined) {
  if (d === undefined || d === null) {
    return "-";
  }

  const formattedD = Number(d);
  const h = Math.floor(formattedD / 3600);
  const m = Math.floor((formattedD % 3600) / 60);

  const hDisplay = h > 0 ? `${h}h` : "";
  const mDisplay = m > 0 ? `${m}min` : "";
  return `${hDisplay} ${mDisplay}`;
}
