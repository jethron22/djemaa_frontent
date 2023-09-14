import React from 'react'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Chat.scss"
import getCurrentUser from "../../utils/getCurrentUser"
import {AiOutlineSend} from "react-icons/ai"

function ChatComponent() {


    const queryClient = useQueryClient()

    const { error, data, isLoading } = useQuery({

        queryKey: ["messages"],
        queryFn: () =>
            newRequest
                .get(`/messages/${id}`)
                .then((res) => {

                    return res.data;

                }),

    });


  const userId = data?.userId;

  const { error: erroUser, data: dataUser, isLoading: isLoadingUser } = useQuery({

    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });


  

    const currentUser = getCurrentUser()

    const mutation = useMutation({
        mutationFn: (message) => {
            return newRequest.post(`/messages`, message);
        },

        onSuccess: () => {

            queryClient.invalidateQueries(["messages"])

        }

    })

    console.log(dataUser)


    const handleSubmit = (e) => {
        e.preventDefault()

        mutation.mutate({

            conversationId: id,
            desc: e.target[0].value,

        })

        desc: e.target[0].value = ""
    }

    const { id } = useParams()

    return (
        <div className="message">
            <div className="container">

                <span className="breadcrumbs">
                    <Link to="/messages">Messages</Link>
                    <span></span>
                </span>
                {isLoading
                    ?
                    "Loading"
                    :
                    error
                        ?
                        "erreur lors de chargement des messages"
                        :
                        <div>
                        <div className="messages">
                            {data?.map(m => (
                                <div className={m.userId === currentUser._id ? "owner item" : "item"} key={m._id}>
                                    <img
                                        src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                        alt=""
                                    />
                                    <p>
                                        {m.desc}
                                    </p>
                                    
                                </div>
                               
                            ))}
                            
                        </div>
                        
                        </div>
                        }
               
                <form className="write" onSubmit={handleSubmit}>
                    <textarea type="text" placeholder="écrivez un message.." />
                    <button type='submit' className='btn-msg cursor-pointer'><AiOutlineSend className='text-[#020d30] cursor-pointer' size={40} /></button>
                </form>
            </div>
        </div>

    )
}

export default ChatComponent