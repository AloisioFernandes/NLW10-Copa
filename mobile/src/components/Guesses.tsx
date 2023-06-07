import { Box, useToast } from 'native-base';
import { useState } from 'react';

interface Props {
  poolId: string;
}

export function Guesses({ poolId }: Props) {
  const [isLoading, setIsLoading] = useState(true)
  const [games, setGames] = useState([])

  const toast = useToast()

  async function fetchGuesses() {
    try {
      
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


  return (
    <Box>

    </Box>
  );
}
