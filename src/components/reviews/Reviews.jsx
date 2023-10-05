import React, { useState, useRef } from 'react'
import "./Reviews.scss"
import SingleReview from '../review/SingleReview'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import getCurrentUser from "../../utils/getCurrentUser"
import { TEInput, TERipple } from "tw-elements-react";




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

    const currentUser = getCurrentUser()

    const userId = data?.userId;

    const { data: dataUser } = useQuery({

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
        mutation.mutate({ djemaId, desc, star }
        )
        e.target[0].value = ""
    }

    return (
        <div className="reviews">
            <h2>Des avis sur le service de <span className='font-semibold'>{dataUser?.username}</span> </h2>
            {isLoading
                ? "Chargement en cours"
                : error
                    ? "Quelque chose n'a pas marché"
                    : data.map((review) => <SingleReview key={review._id} review={review} />

                    )}
            <div className='add-reviews'>
                <p>Ajouter un avis sur ce service</p>
                <div className='mt-5'>


                    {isLoading ? "Loading" : error ? "Vous avez déjà déposé un commentaire pour ce service ! " : <form onSubmit={handleSubmit}>

                        <div>
                            <label for="Commentaires" class="sr-only">Commentaires</label>

                          
                         

                              

                                <div className="relative mb-6">
                                    <textarea

                                        placeholder={`   ...${currentUser.username}, Que pensez vous de ${dataUser?.username} ?`}
                                        className="peer border-2 block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:border-neutral-600 focus:border-success"
                                        id="exampleFormControlTextarea13"
                                        rows={3}
                                    ></textarea>
                                    <label
                                        htmlFor="exampleFormControlTextarea13"
                                        className="peer-focus:bg-white pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-success motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-success dark:peer-focus:bg-neutral-700"
                                    >
                                    
                                    </label>
                                </div>

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