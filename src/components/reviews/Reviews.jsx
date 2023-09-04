import React, { useState, useRef } from 'react'
import "./Reviews.scss"
import SingleReview from '../review/SingleReview'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';




function Reviews({ djemaId }) {

    const [Error, setError] = useState(null)
    const queryClient = useQueryClient()


    const { error, data, isLoading } = useQuery({

        queryKey: ["reviews"],
        queryFn: () =>
            newRequest.get(`/reviews/${djemaId}`).then((res) => {
                return res.data;
            }).catch((error) => {
                setError(error.response.data)
            }),

    });

    const userId = data?.userId;

    const {data: dataUser} = useQuery({
  
      queryKey: ["user"],
      queryFn: () =>
        newRequest.get(`/users/${userId}`).then((res) => {
          return res.data;
        }),
      enabled: !!userId,
    });



    const mutation = useMutation({
        mutationFn: (review) => {
            return newRequest.post('/reviews', review)
        },

        onSuccess: () => {

            queryClient.invalidateQueries(["reviews"])

        }

    })

    const handleSubmit = (e) => {

        e.preventDefault();

        const desc = e.target[0].value;
        const star = e.target[1].value;
        mutation.mutate({ djemaId, desc, star })

    }

    return (
        <div className="reviews">
            <h2>Commentaires sur ce service</h2>
            {isLoading
                ? "Chargement en cours"
                : error
                    ? "Quelque chose n'a pas marché"
                    : data.map((review) => <SingleReview key={review._id} review={review} />

                    )}
            <div className='add-reviews'>
                <p>Ajouter un commentaire sur ce service de {dataUser?.username}</p>
                <div className='mt-5'>


                    {isLoading ? "Loading" : error ? "Vous avez déjà déposé un commentaire pour ce service ! " : <form onSubmit={handleSubmit}>

                        <div>
                            <label for="Commentaires" class="sr-only">Commentaires</label>

                            <div
                                class="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-green-800 focus-within:ring-1 focus-within:ring-green-700"
                            >
                                <textarea
                                    id="OrderNotes"
                                    class="w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
                                    rows="4"
                                    placeholder="Que pensez-vous de ce prestataire ?..."
                                ></textarea>

                                <div class="flex items-center justify-end gap-2 bg-white p-3">

                                    <select name="" id="">
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                    </select>
                                    <button
                                        type="button"
                                        class="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
                                    >
                                        Effacer
                                    </button>
                                    <button
                                        type="submit"
                                        class="rounded bg-green-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-green-700"
                                    >
                                        Envoyer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>}
                    <div className='flex w-32'>
                        <p>
                        {Error && error}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews