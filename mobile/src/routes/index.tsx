import { NavigationContainer } from '@react-navigation/native'
import { useAuth } from '../hooks/useAuth'

import { AppRoutes } from "./app.routes"

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}