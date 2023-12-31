import React from 'react'
import "./Review.scss"
import { AiFillStar, AiOutlineLike } from 'react-icons/ai'
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import { BsPersonCircle } from "react-icons/bs";

function SingleReview({ review }) {


  const { error, data, isLoading } = useQuery({

    queryKey: [review.userId],
    queryFn: () =>
      newRequest.get(`/users/${review.userId}`).then((res) => {
        return res.data;
      }),

  });

  console.log(data)


  return (
    <div>
      <div className="review">
        {isLoading ? "Loading" : error ? "Erreur lors du chargement" : <div className="user">


          <div className='w-10 h-10'>
            
            <img

              className='rounded-3xl'
              src={data.img}

            />
          </div>


          <div className="info">
            <span>{data?.username} </span>
            <div className="country">

              <span>{data?.country}</span>
            </div>
          </div>
        </div>}
        <div className="stars">
          {Array(review.star).fill().map((item, i) => (
            <AiFillStar key={i} />
          ))}
          <span className='text-green-600'>{review.star}</span>
        </div>
        <p>
          {review.desc}
        </p>
      </div>
      <hr />
    </div>
  )
}

export default SingleReview