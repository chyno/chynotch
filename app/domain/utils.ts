import { useMatches } from "@remix-run/react"

export function useRouteData<T>(routeId: string)  {
  const matches = useMatches()
  const data = matches.find((match) => match.id === routeId)?.data
  return data as T | undefined
}