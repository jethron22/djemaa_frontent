import React from 'react'
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import { useParams } from 'react-router-dom';
import getCurrentUser from '../../utils/getCurrentUser';

function UserCardPayement() {


    const { id } = useParams()


    const { error, data, isLoading } = useQuery({

        queryKey: ["djemaa"],
        queryFn: () =>
            newRequest.get(`/djemas/single/${id}`).then((res) => {
                return res.data;

            }),

    });

    const commission = () => {
        
    }

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


    return (


        <section class="antialiased  text-gray-600 min-h-screen w-full">
            <div class="h-full" />

            <div>

                <div class="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto" x-data="{ card: true }">
                    <div class="bg-white px-8 pb-6 rounded-b shadow-lg">

                        
                            <div className="text-center flex p-5 w-full  mb-6">

                                <div className='bg-gray-100 p-5 w-[100%] font-semibold text-gray-500 rounded'><span className='text-green-600'>{currentUser.username}</span>, vous etes sur le point de payer {data?.price}$ pour le service <span className='text-green-600 italic'>"{data?.desc}"</span> crée par {dataUser?.username} </div>
                            </div>
                        




                        <div x-show="card">
                            <div class="space-y-4">

                                <div>
                                    <label class="block text-sm font-medium mb-1" for="card-nr">Numéro de carte de Crédit<span class="text-red-500">*</span></label>
                                    <input id="card-nr" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="1234 1234 1234 1234" />
                                </div>

                                <div class="flex space-x-4">
                                    <div class="flex-1">
                                        <label class="block text-sm font-medium mb-1" for="card-expiry">Date d'expiration <span class="text-red-500">*</span></label>
                                        <input id="card-expiry" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="MM/YY" />
                                    </div>
                                    <div class="flex-1">
                                        <label class="block text-sm font-medium mb-1" for="card-cvc">CVC <span class="text-red-500">*</span></label>
                                        <input id="card-cvc" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="CVC" />
                                    </div>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium mb-1" for="card-name">Nom sur la carte <span class="text-red-500">*</span></label>
                                    <input id="card-name" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="John Doe" />
                                </div>

                                <div>
                                    <label class="block text-sm font-medium mb-1" for="card-email">Email <span class="text-red-500">*</span></label>
                                    <input id="card-email" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="email" placeholder="john@company.com" />
                                </div>
                            </div>


                        </div>


                        <div x-show="!card" className='mt-6' x-cloak>
                            <div>
                                <div class="mb-4">
                                    <button class="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-green-700 hover:bg-green-600 text-white focus:outline-none focus-visible:ring-2">Payer maintenant {data?.price} $</button>
                                </div>
                                <div class="text-xs text-gray-500 italic text-center">Vous allez payer {data?.price} $, inclus 3$ de commission.</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>


    )
}

export default UserCardPayement