import { VStack } from "native-base";
import { Header } from "../components/Header";

export function Details() {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Título do bolão" showBackButton showShareButton/>

    </VStack>
  )
}