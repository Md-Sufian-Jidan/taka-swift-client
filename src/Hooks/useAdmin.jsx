import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const { user, isLoading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !isLoading && !!user?.email,
        queryFn: async () => {
            // console.log('asking or checking use admin 2', user);
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            // console.log(res.data.admin);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading];
};

export default useAdmin;