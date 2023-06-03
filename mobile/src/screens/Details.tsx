import { useEffect, useState } from "react"

import { useToast, VStack } from "native-base";
import { useRoute } from '@react-navigation/native'

import { api } from "../services/api";

import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { EmptyMyPoolList } from "../components/EmptyMyPoolList";
import { PoolCardProps } from "../components/PoolCard"
import { PoolHeader } from "../components/PoolHeader";

interface RouteParams {
  id: string;
}

export function Details() {
  const [isLoading, setIsLoading] = useState(true)
  const [poolDetails, setPoolDetails] = useState<PoolCardProps>({} as PoolCardProps)

  const route = useRoute()
  const toast = useToast()
  const { id } = route.params as RouteParams

  async function fetchPoolDetails(){
    try {
      setIsLoading(true)

      const response = await api.get(`/pools/${id}`)
      setPoolDetails(response.data.pool)

    } catch (error) {
      console.log(error)

      toast.show({
        title: 'Não foi possível carregar os detalhes do bolão',
        placement: 'top',
        bgColor: 'red.500'
      })

    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPoolDetails()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title={id} showBackButton showShareButton/>
      {
        poolDetails._count?.participants > 0 ?
        <VStack px={5} flex={1}>
          <PoolHeader data={poolDetails} />
        </VStack>
        :
        <EmptyMyPoolList code={poolDetails.code} />
      }
    </VStack>
  )
}