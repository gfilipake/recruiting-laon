import { NavigateFunction } from "react-router-dom";

export function usePreventDefault(
  e: React.MouseEvent<HTMLElement, MouseEvent>,
  functionToExecute: Function
) {
  e.preventDefault();
  functionToExecute();
}
