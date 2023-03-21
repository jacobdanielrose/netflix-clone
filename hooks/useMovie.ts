import useSWR from 'swr'
import fetcher from '@/lib/fetcher'

export default function useMovie(movieId: string) {
    const { data, error, isLoading } = useSWR(movieId ? `/api/movie/${movieId}` : null, fetcher, {
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