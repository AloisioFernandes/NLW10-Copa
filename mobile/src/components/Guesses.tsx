import { Box, useToast } from 'native-base';
import { useEffect, useState } from 'react';

import { api } from '../services/api'

import { Game, GameProps } from "../components/Game"

interface Props {
  poolId: string;
}

export function Guesses({ poolId }: Props) {
  const [isLoading, setIsLoading] = useState(true)
  const [games, setGames] = useState<GameProps[]>([])

  const toast = useToast()

  async function fetchGuesses() {
    try {
      setIsLoading(true)

      const response = await api.get(`/pools/${poolId}/games`)
      setGames(response.data.games)
    } catch (error) {
      console.log(error)

      toast.show({
        title: 'Não foi possível carregar os jogos',
        placement: 'top',
        bgColor: 'red.500'
      })

    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchGuesses()
  }, [poolId])

  return (
    <Box>

    </Box>
  );
}