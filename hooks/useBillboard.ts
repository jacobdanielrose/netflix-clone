import useSWR from 'swr'
import fetcher from '@/lib/fetcher'

export default function useBillBoard() {
    const { data, error, isLoading } = useSWR('/api/random', fetcher, {
        revalidateIfStale: false,
        revalidateOnReconnect: false,
        revalidateOnFocus: false
    })

    return {
        data,
        error,
        isLoading
    }
}