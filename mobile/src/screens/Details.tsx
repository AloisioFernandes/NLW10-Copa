import { VStack } from "native-base";
import { useRoute } from '@react-navigation/native'

import { Header } from "../components/Header";

interface RouteParams {
  id: string;
}

export function Details() {
  const route = useRoute()
  const { id } = route.params as RouteParams

  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title={id} showBackButton showShareButton/>

    </VStack>
  )
}
// 1:05:30