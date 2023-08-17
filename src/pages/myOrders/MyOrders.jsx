import React from 'react';
import { Link } from 'react-router-dom';
import "./myorders.scss";
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import {BsChatRightDots} from "react-icons/bs"

function MyOrders() {


  const currentUser = JSON.parse(localStorage.getItem("currentUser"))


  const { error, data, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest
        .get(`/orders`)
        .then((res) => {

          return res.data;

        }),

  });

 


  return (
    <div className="orders">
      {

        isLoading
          ?
          <div className="flex justify-center items-center m-auto mt-20 ">
         
         <div
           class=" flex text-green-600 h-8 w-8 animate-spin  rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-danger motion-reduce:animate-[spin_1.5s_linear_infinite]"
           role="status">

           <span
             class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
           ></span
           >
         </div>
         <span className="mr-3 ml-3 font-semibold text-green-600"> Chargement.. </span>
       </div>
          :
          error
            ?
            "Erreur lors du chargement des commandes"
            :

            <div className="container">
              <div className="title">
                <h1>Orders</h1>
              </div>
              <table>
                <tr>
                  <th>Image</th>
                  <th>Titre</th>
                  <th>Prix</th>
                  <th>Message</th>
                </tr>

                {data.map( order => 
                    (<tr key={order._id}>
                      <td>
                        <img
                          className="image"
                          src={order.img}
                          alt=""
                        />
                      </td>
                      <td>{order.title}</td>
                      <td>{order.price}</td>

                      <td>
                        <BsChatRightDots />
                      </td>
                    </tr>)

                  )}

              </table>
            </div>}
    </div>
  )
}

export default MyOrders