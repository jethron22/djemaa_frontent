import React, { useState } from "react";
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
import FreelancesItem from "../../components/Freelancers/Sellers";


function Djema() {


  const { id } = useParams()

  const { error, data, isLoading } = useQuery({

    queryKey: ["djemaa"],
    queryFn: () =>
      newRequest.get(`/djemas/single/${id}`).then((res) => {
        return res.data;

      }),

  });

  

  const currentUser = getCurrentUser()


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

  console.log(data)

  const dayDiff = (date) => {
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days;
  }

  return (
    <div className="djema">
      {isLoading

        ?

        <div className="flex items-center mt-20">
          <div
            class=" flex text-green-600 h-8 w-8 animate-spin  rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-danger motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">

            <span
              class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            ></span
            >
          </div>
          <span className="mr-3 ml-3 font-semibold text-green-600"> Chargement du Djemaa.. </span>
        </div>

        : error

          ?

          <div className="mt-20 text-red-500 font-semibold">
            <p>

              Erreur lors de chargement de ce djema

            </p>
          </div>
          :

          <div className="container">
            <div className="left">
              <span className="breadcrumbs"> {data?.cat} </span>
              <h1 className="text-3xl">{data?.title}</h1>
              <p>service publié il y a {dayDiff(new Date(data?.updatedAt))} jours</p>
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

                    <span className="p-3 font-semibold cursor-pointer text-white rounded bg-green-600">Écrire un message à {dataUser?.username}</span>

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
                          <p className=""><button onClick={() => setOpen(!open)} className="flex justify-center  items-center  font-semibold p-3  text-gray-600 gap-1 w-full rounded border-2 border-gray-600 hover:bg-gray-200 duration-300"><span></span>Continuer avec {dataUser?.username}<span></span></button></p>
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

                      <button className="bg-green-700 w-full p-3 text-white font-semibold rounded mt-5">Passer la commande</button>
                    </div>

                  </div>

                )
              }


            </div>
          </div>}
    </div>
  );
}

export default Djema;