import fetcher from "@/lib/fetcher";
import useSWR from "swr";

export default function useFavorites() {
    const { data, error, isLoading } = useSWR('/api/favorites', fetcher, {
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