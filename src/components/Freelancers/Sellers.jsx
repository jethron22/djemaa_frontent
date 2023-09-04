import React from "react";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import getCurrentUser from "../../utils/getCurrentUser";

const FreelancesItem = ({ item }) => {

    const { error, data, isLoading } = useQuery({

        queryKey: [item.userId],
        queryFn: () =>
            newRequest.get(`/users/${item.userId}`).then((res) => {
                return res.data;
            }),
    });

    const currentUser = getCurrentUser()

    return (
        // <Link to={`/djema/${item._id}`} target="blank" className="link">

            <div>
             {
                isLoading ? "chargement" : error ? "erreur lors de chargement" : (
                    <p>{item?.username}</p>
                )
             }
            </div>

        // </Link>
    );
};

export default FreelancesItem;