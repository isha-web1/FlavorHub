import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user } = UseAuth();
    const [axiosSecure] = useAxiosSecure();

    console.log("AxiosSecure in useAdmin:", axiosSecure);

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: [user?.email, "isAdmin"],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/users/admin/${user.email}`);
                console.log("API Response:", res.data);
                return res.data?.admin;
            } catch (error) {
                console.error("Failed to fetch admin status:", error);
                return false; // Default to non-admin in case of error
            }
        },
        staleTime: 0, // Always fetch fresh data
        refetchOnWindowFocus: true, // Refetch on window focus
    });

    return [isAdmin, isAdminLoading];
};

export default useAdmin;