import React, { useState, useEffect } from "react";
import "./djema.scss";
import 'react-slideshow-image/dist/styles.css'
import { AiFillStar } from "react-icons/ai"
import { AiOutlineLike } from "react-icons/ai"
import { AiFillCheckCircle } from "react-icons/ai"
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import Reviews from "../../components/reviews/Reviews";
import getCurrentUser from "../../utils/getCurrentUser";
import { BsPersonCircle } from "react-icons/bs";
import logi_djemaa from "./logi_djemaa.gif"
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

import {
  TEInput,
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";

import { AiOutlineSend } from "react-icons/ai";
import UserCardPayement from "./UserCardPayement";







function Djema() {



  // THESE ARE SOME ADDITIONNAL TAILWIND STATES FOR TAILWIND-ELEMENTS CSS LIBRARIE, FOR MESSAGE MODAL

  const [showModalTopRight, setShowModalTopRight] = useState(false);
  const [showModalTopLeft, setShowModalTopLeft] = useState(false);
  const [showModalBottomRight, setShowModalBottomRight] = useState(false);
  const [showModalBottomLeft, setShowModalBottomLeft] = useState(false);

  // THESE ARE SOME ADDITIONNAL TAILWIND STATES FOR TAILWIND-ELEMENTS CSS LIBRARIE, FOR MESSAGE MODAL




  const { id } = useParams()


  const { error, data, isLoading } = useQuery({

    queryKey: ["djemaa"],
    queryFn: () =>
      newRequest.get(`/djemas/single/${id}`).then((res) => {
        return res.data;

      }),

  });


  const handlerLoginNavigate = () => {
    navigate("/login")
  }


  const userId = data?.userId;

  const { error: erroUser, data: dataUser, isLoading: isLoadingUser } = useQuery({

    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  const [open, setOpen] = useState(false)

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/messages")

  }


  const queryClient = useQueryClient()

  const { error: ErrorMessageData, data: messageData, isLoading: isLoadingMessage } = useQuery({

    queryKey: ["conversations"],
    queryFn: () =>
      newRequest
        .get(`/conversations`)
        .then((res) => {

          return res.data;

        }),

  });


  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/conversations/${id}`);
    },

    onSuccess: () => {

      queryClient.invalidateQueries(["conversations"])

    }

  })

  const handleSendMessage = (id) => {
    const extract = id.value
    mutation.mutate(id)
    navigate(`/message/${extract}`)
  }

  console.log(data)

  const dayDiff = (date) => {

    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days;



  }

  const currentUser = getCurrentUser()


  const { data: orderData } = useQuery({
    queryKey: ["order"],
    queryFn: () =>
      newRequest
        .get(`/orders`, order)
        .then((res) => {

          return res.data;

        }),

  });

  const handleContact = async (order) => {
    const sellerId = sellerId;
    const buyerId = buyerId;
    const id = sellerId + buyerId;

    try {

      const res = await newRequest.get(`/conversations/single/${id}`)


    } catch (error) {
      if (error.response.status === 404) {
        const res = await newRequest.post(`/conversations`, { to: currentUser.seller ? buyerId : sellerId })
      }

    }


  }

  console.log(data)

  return (
    <div className="djema">
      {!currentUser && isLoading

        ?

        <div className="flex items-center mt-10">
          <div
            class=" flex text-green h-8 w-8 animate-spin  rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-danger motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">


            <span
              class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            ></span
            >
          </div>
          <span className="mr-3 ml-3 font-semibold text-green-600"> Chargement du Djemaa..
          </span>
        </div>

        : error

          ?

          <div className="mt-20 text-green-700 flex justify-center flex-col font-semibold">
            <p className="flex justify-center">
              <img className="w-32 h-30" src={logi_djemaa} />
            </p>
            <p className="text-green-500 font-light flex justify-center mt-5">
              <span onClick={handlerLoginNavigate} className="flex underline cursor-pointer">Essayez de vous connecter pour voir cette page </span>
            </p>
          </div>
          :
          <div className="container">
            <div className="left">
              <div className="bg-green-700 flex w-40 justify-center rounded ">
                <span className="breadcrumbs "> {data?.cat} </span>
              </div>
              <h1 className="text-3xl">{data?.title}</h1>
              <p>Service publié par {dataUser?.username} il y a {dayDiff(new Date(data?.updatedAt))} jours</p>
              {isLoadingUser ?

                "chargement encours"

                : erroUser ?

                  "chargement de l'utilisateur..."

                  : <div className="user">
                    {currentUser.img || <BsPersonCircle color="gray" size={35} />}

                    <span>
                      {dataUser?.username}
                    </span>

                    <div className="stars items-center">
                      {!isNaN(data?.starNumber) && data?.starNumber !== 0 ? (

                        <div className="stars items-center">
                          {Array(Math.round(data?.totalStars / data?.starNumber))
                            .fill()
                            .map((item, i) => (
                              <AiFillStar key={i} />
                            ))}

                          <span>{Math.round(data?.totalStars / data?.starNumber)}
                          </span>

                        </div>
                      ) : null}
                    </div>
                  </div>}
              <div>
                {/* <Slider {...settings}> */}
                <div className="slider">
                </div>
                <div >
                  <img src="https://img.freepik.com/photos-premium/main-masculine-touchant-dans-concept-service_220873-7826.jpg?w=740" />
                </div>
                <div>

                </div>
                {/* </Slider> */}

              </div>

              {isLoadingUser ? "Chargement en cours.." : erroUser ? "chargement de l'utilisateur..." : <div className="seller">
                <h2>Au sujet du prestataire </h2>
                <div className="user">
                  {currentUser.img || <BsPersonCircle color="gray" size={65} />}
                  <div className="info">
                    <span>{dataUser?.username}</span>
                    <div className="stars items-center">
                      {!isNaN(data?.starNumber) && data?.starNumber !== 0 ? (
                        <div className="stars">
                          {Array(Math.round(data?.totalStars / data?.starNumber))
                            .fill()
                            .map((item, i) => (
                              <AiFillStar key={i} />
                            ))}

                          <span>{Math.round(data?.totalStars / data?.starNumber)}</span>
                        </div>
                      ) : null}
                    </div>

                    <span className="">
                      <TERipple >
                        <div className="" onClick={() => handleContact(order)}>
                          <button
                            type="button"
                            onClick={() => setShowModalBottomRight(true)}

                            className="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-sm font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
                          >
                            Envoyer un message

                          </button>
                        </div>
                      </TERipple >

                      {/* MESSAGE TAILWIND-ELEMENTS MODAL LIBRAIRIE */}

                      {/* <!--Bottom right modal--> */}
                      <TEModal show={showModalBottomRight} setShow={setShowModalBottomRight}>
                        <TEModalDialog
                          position="bottom-right"
                          theme={{
                            show: "translate-x-0 opacity-100",
                            hidden: "translate-x-[100%] opacity-0",
                          }}
                        >
                          <TEModalContent>
                            <TEModalHeader>
                              {/* <!--Modal title--> */}
                              <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                                Écrire à {dataUser.username}
                              </h5>
                              {/* <!--Close button--> */}
                              <button
                                type="button"
                                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                onClick={() => setShowModalBottomRight(false)}
                                aria-label="Close"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-6 w-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              </button>
                            </TEModalHeader>
                            {/* <!--Modal body--> */}
                            <TEModalBody className="h-[420px] overflow-y-scroll">







                            </TEModalBody>
                            <TEModalFooter>
                              <TERipple rippleColor="light">

                              </TERipple>
                              <TERipple rippleColor="light" className="w-full flex items-center justify-center gap-5 ">
                                <textarea
                                  className="peer border-2 block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:border-neutral-600 focus:border-success"
                                  id="exampleFormControlTextarea13"
                                  rows={2}
                                >
                                </textarea>
                                <span><AiOutlineSend className="cursor-pointer" size={40} /></span>
                              </TERipple>
                            </TEModalFooter>
                          </TEModalContent>
                        </TEModalDialog>
                      </TEModal>
                    </span>




                  </div>
                </div>
                <div className="box">
                  <p className="text-2xl mb-5">Description de ce service</p>
                  <p>
                    {data?.desc}
                  </p>
                </div>
              </div>}
              <Reviews djemaId={id} />

            </div>







            <div className="right">


              {!open && (

                <div className="">
                  <div className="">
                    <div class="max-w-2xl top-0  mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white rounded-lg text-gray-900">

                      <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">

                        {currentUser.img || <BsPersonCircle color="gray" size={118} />}

                      </div>
                      <div class="text-center mt-2">
                        <h2 class="font-semibold">{dataUser?.username}</h2>
                        <p class="text-gray-500">{dataUser?.desc}</p>
                      </div>
                      <ul class="py-4 mt-2 text-gray-700 flex items-center justify-around">
                        <li class="flex flex-col items-center justify-around">
                          <p className="font-semibold">Habite à :</p>
                          <div>{dataUser?.country}</div>
                        </li>
                        <li class="flex flex-col items-center justify-between">
                          <p>Téléphone :</p>
                          <div>{dataUser?.phone}</div>
                        </li>
                      </ul>

                      <div class=" flex border-t mx-8  mt-5">
                        <div className=" w-full">
                          <p className=""><button onClick={() => setOpen(!open)} className="flex justify-center  items-center  font-normal p-3  text-gray-600 gap-1 w-full rounded border-[1px] border-green-600 hover:bg-green-600 hover:text-white duration-300"><span></span>Continuer avec {dataUser?.username}<span></span></button></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )

              }

              {
                open && (
                  <div>

                    <div className="price">
                      <p className="font-semibold text-1xl">{data?.shortTitle}</p>
                      <h2>$ {data?.price}</h2>
                    </div>
                    <p>
                      {data?.shortDesc}
                    </p>
                    <div className="details">
                      <div className="item">
                        <AiOutlineLike />
                        <span>Livraison dans {data?.deliveryTime} jours</span>
                      </div>
                      <div className="item">
                        <AiOutlineLike />
                        <span> {data?.revisionNumber} Revisions</span>
                      </div>
                    </div>


                    {
                      data?.features.map((feature) => (
                        <div className="features" key={feature}>
                          <div className="item" >
                            <AiFillCheckCircle />
                            <span>{feature}</span>
                          </div>
                        </div>
                      ))
                    }
                    

                    <div className="flex items-center">

                      <button  className="bg-green-700 w-full p-3 text-white font-semibold rounded mt-5">Payer {data?.price} $ pour ce service
                      </button>
                    </div>
                    {/* <div className="w-full">
                      <UserCardPayement />
                    </div> */}
                  </div>

                )
              }


            </div>
          </div>}
    </div>
  );
}

export default Djema;