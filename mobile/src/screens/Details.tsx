import { VStack } from "native-base";
import { useRoute } from '@react-navigation/native'

import { Header } from "../components/Header";

export function Details() {
  const route = useRoute()

  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Título" showBackButton showShareButton/>

    </VStack>
  )
}
// 1:03:00