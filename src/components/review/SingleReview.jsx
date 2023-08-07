import React from 'react'
import "./Review.scss"
import { AiFillStar, AiOutlineLike } from 'react-icons/ai'
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';


function SingleReview({review}) {


  const { error, data, isLoading } = useQuery({

    queryKey: [review.userId],
    queryFn: () =>
        newRequest.get(`/users/${review.userId}`).then((res) => {
            return res.data;
        }),

});
 


  return (
    <div>
    <div className="review">
    {isLoading ? "Loading" : error ? "Erreur lors du chargement" : <div className="user">
      <img
        className="pp"
        src={data.img}
       
      />
      <div className="info">
        <span>{data?.username} </span>
        <div className="country">
         
          <span>{data?.country}</span>
        </div>
      </div>
    </div>}
    <div className="stars">
      {Array(review.star).fill().map((item, i)=> (
      <AiFillStar key={i} />
      ))}
      <span>{review.star}</span>
    </div>
    <p>
  {review.desc}
    </p>
    <div className="helpful">
      <span>Helpful?</span>
      <AiOutlineLike />
      <span>Yes</span>
      <AiFillStar />
      <span>No</span>
    </div>
  </div>
  <hr />
  </div>
  )
}

export default SingleReview