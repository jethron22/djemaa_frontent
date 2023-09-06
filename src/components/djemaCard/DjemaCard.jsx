import React from "react";
import "./DjemaCard.scss";
import { Link } from "react-router-dom";
import { AiOutlineSketch } from "react-icons/ai"
import { AiFillStar } from "react-icons/ai"
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { BsPersonCircle } from "react-icons/bs"
import getCurrentUser from "../../utils/getCurrentUser";

const DjemaCard = ({ item }) => {

  const { error, data, isLoading } = useQuery({

    queryKey: [item.userId],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  });



  const currentUser = getCurrentUser()

  return (
    <Link to={`/djema/${item._id}`} target="blank" className="link">
      <div className="djemaCard  hover:bg-slate-200 duration-200">
        <img src={item.cover} alt="" />

        <div className="info">

          {isLoading ? (<span className="text-green-500"><div class="h-12 mx-auto rounded-md w-60">
            <div class="flex flex-row items-center justify-center h-full space-x-5">
              <div class="w-12 h-12 bg-gray-300 rounded-full ">
              </div>
              <div class="flex flex-col space-y-3">
                <div class="h-6 bg-gray-300 rounded-md w-36 ">
                </div>
                <div class="w-12 h-6 bg-gray-300 rounded-md ">
                </div>
              </div>
            </div>
          </div></span>) : error ? (<span className="text-red-700">Une erreur s'est produite ici</span>)
            :

            (<div className="user flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BsPersonCircle color="gray" size={35} />
                <span className="font-semibold text-black">{data.username}</span>
              </div>
              <div className="flex bg-green-700 p-1 rounded text-white ">
                <span className="text-xs">{item.cat}</span>
              </div>
            </div>)

          }
          <p>{item.desc}</p>

          <div className="flex justify-between w-full items-center">
            <div className="flex items-center w-24">
              <span className="flex items-center"><AiFillStar size={17} /></span>
              <span className="font-bold">{!isNaN(item?.starNumber) && item?.starNumber !== 0 ? Math.round(item?.totalStars / item?.starNumber) : null}</span>
            </div>
            <div className="price font-semibold">
              <span>à partir de</span>
              <p className="text-2xl">${item.price}<sup>99</sup>
              </p>
            </div>


          </div>
        </div>
      </div>
    </Link>
  );
};

export default DjemaCard;