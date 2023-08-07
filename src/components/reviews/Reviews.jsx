import React, { useState } from 'react'
import "./Reviews.scss"
import SingleReview from '../review/SingleReview'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';





function Reviews({ djemaId }) {


    const queryClient = useQueryClient()


    const { error, data, isLoading } = useQuery({

        queryKey: ["reviews"],
        queryFn: () =>
            newRequest.get(`/reviews/${djemaId}`).then((res) => {
                return res.data;
            }),

    });

    const mutation = useMutation({
        mutationFn: (review) => {
          return newRequest.post('/reviews', review)
        },

        onSuccess:()=> {

            queryClient.invalidateQueries(["reviews"])

        }
      })

    const handleSubmit =(e)=> {

        e.preventDefault();

        const desc = e.target[0].value;
        const star = e.target[1].value;
        mutation.mutate({djemaId, desc, star})

    }


    return (
        <div className="reviews">
            <h2>Critiques</h2>
            {isLoading
                ? "Chargement en cours"
                : error
                    ? "Quelque chose n'a pas marché"
                    : data.map((review) => <SingleReview key={review._id} review={review} />



                    )}
            <div className='add-reviews'>

                <p>Ajouter une Critique</p>
                <div className='mt-5'>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Que pensez-vous de ce prestataire ?' />
                    <select name="" id="">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <button>envoyer</button>
                </form>
                <div></div>
                </div>
            </div>
        </div>
    )
}

export default Reviews