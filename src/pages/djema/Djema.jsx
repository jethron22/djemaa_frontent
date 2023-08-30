import React, { useState, useEffect } from "react";
import "./djema.scss";
import 'react-slideshow-image/dist/styles.css'
import { AiFillStar } from "react-icons/ai"
import { AiOutlineLike } from "react-icons/ai"
import { AiFillCheckCircle, AiOutlineProfile } from "react-icons/ai"
import { AiOutlineMessage } from "react-icons/ai"
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import Reviews from "../../components/reviews/Reviews";


function Djema() {

  const { id } = useParams()

  const { error, data, isLoading } = useQuery({

    queryKey: ["djemaa"],
    queryFn: () =>
      newRequest.get(`/djemas/single/${id}`).then((res) => {
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

  const [open, setOpen] = useState(false)

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/messages")
    
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

              {isLoadingUser ?

                "chargement encours"

                : erroUser ?

                  "chargement de l'utilisateur..."

                  : <div className="user">
                    <img
                      className="pp"
                      src="https://img.freepik.com/photos-gratuite/concept-banniere-homme-affaires-espace-copie_23-2149601460.jpg?w=740&t=st=1691255807~exp=1691256407~hmac=1c50bf0e0d5b7c070cd7159ddcd36eb50a27ad7c52c9056978bc48ac233fc940"
                      alt=""
                    />

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

              <h2>Au sujet de ce Djema</h2>
              <p>
                {data?.desc}
              </p>
              {isLoadingUser ? "Chargement en cours.." : erroUser ? "chargement de l'utilisateur..." : <div className="seller">
                <h2>Au sujet du prestataire </h2>
                <div className="user">
                  <img
                    src={dataUser?.img}
                  />
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

                    <button>Contacter ce prestataire</button>

                  </div>
                </div>
                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="title">Habite à </span>
                      <span className="desc font-bold">{dataUser.country}</span>
                    </div>
                    <div className="item">
                      <span className="title">Membre depuis</span>
                      <span className="desc font-bold">Aout 2022</span>
                    </div>
                    <div className="item">
                      <span className="title">Taux de reponse</span>
                      <span className="desc font-bold">4 heures</span>
                    </div>
                    <div className="item">
                      <span className="title">Derniere livraison</span>
                      <span className="desc font-bold">il y a 1 jour</span>
                    </div>
                    <div className="item">
                      <span className="title">Languages</span>
                      <span className="desc font-bold">English</span>
                      <span className="desc font-bold">Français</span>
                    </div>
                  </div>
                  <hr />
                  <p>
                    {data?.desc}
                  </p>
                </div>
              </div>}
              <Reviews djemaId={id} />
            </div>
            <div className="right">


              {!open && (

                <div>

                  <div className="">
                    <div class="max-w-2xl top-0  mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white rounded-lg text-gray-900">

                      <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                        <img class="object-cover object-center h-32" src="https://img.freepik.com/photos-gratuite/concept-banniere-homme-affaires-espace-copie_23-2149601460.jpg?w=740&t=st=1691255807~exp=1691256407~hmac=1c50bf0e0d5b7c070cd7159ddcd36eb50a27ad7c52c9056978bc48ac233fc940" alt='Woman looking front' />
                      </div>
                      <div class="text-center mt-2">
                        <h2 class="font-semibold">{dataUser?.username}</h2>
                        <p class="text-gray-500">{dataUser?.desc}</p>
                      </div>
                      <ul class="py-4 mt-2 text-gray-700 flex items-center justify-around">
                        <li class="flex flex-col items-center justify-around">
                          <svg class="w-4 fill-current text-green-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                          <div>2k</div>
                        </li>
                        <li class="flex flex-col items-center justify-between">
                          <svg class="w-4 fill-current text-green-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                          </svg>
                          <div>10k</div>
                        </li>
                        <li class="flex flex-col items-center justify-around">
                          <svg class="w-4 fill-current text-green-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                          </svg>
                          <div>15</div>
                        </li>
                      </ul>

                      <div class=" flex p-4 border-t mx-8  mt-5">
                        <div className=" w-full">
                          <p className=""><button onClick={() => setOpen(!open)} className="flex justify-center  items-center  font-semibold p-3  text-white gap-1 w-full rounded bg-slate-600"><span><AiOutlineProfile /></span> Détails de ce service <span></span></button></p>
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

                    <div className="flex items-center justify-between">
                      <span><button onClick={() => handleNavigate()} className=" flex bg-slate-700 mt-5  text-white font-semibold p-3 items-center gap-1 rounded w-32"><span><AiOutlineMessage /></span> Message <span></span></button></span>


                      <button className="bg-green-700 p-3 w-36 text-white font-semibold rounded mt-5">Continuer</button>
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