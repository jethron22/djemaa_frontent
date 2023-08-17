import React from 'react';
import './messages.scss';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import moment from "moment"

export default function Messages() {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"))

  const { error, data, isLoading } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      newRequest
        .get(`/conversations`)
        .then((res) => {

          return res.data;

        }),

  });

  console.log(data)


  return (
    
    <div className="messages">

      {isLoading
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
          <span className="mr-3 ml-3 font-semibold text-green-600"> Chargement des messages... </span>
        </div>
        :
        error
          ?
          "Erreur lors de chargement des messages"
          :


          <div className="container">
            <div className="title">
              <h1>Messages</h1>
            </div>
            <table>
              <tr>
                <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                <th>Message récent</th>
                <th>Date</th>
                <th>Action</th>
              </tr>

              {data.map((c) => (
                <tr className="active" key={c.id}>
                  <td></td>
                  <td>
                    <Link to="/message/123" className="link">
                      {c?.lastMessage?.substring(0, 100)}...
                    </Link>
                  </td>
                  <td>{moment(c.updatedAt).fromNow()}</td>

                  <td>
                    {(currentUser.isSeller && !c.readBySeller) || (!currentUser.isSeller && !c.readByBuyer) && 

                      <button>Marquer comme lu</button>

                    }
                  </td>

                </tr>
              ))}


            </table>
          </div>}
    </div>
  )
}
