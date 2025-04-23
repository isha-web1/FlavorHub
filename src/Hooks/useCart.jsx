import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './UseAuth';
const useCart = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user, loading } = useAuth();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
          
            return res.data;
        },
    })

    return [cart, refetch]

}
export default useCart;