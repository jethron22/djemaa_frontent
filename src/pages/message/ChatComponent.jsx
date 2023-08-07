import React from 'react'

function ChatComponent() {
    return (
        <div >
            <div className="container w-[90%] mx-24 m-auto overflow-hidden shadow-lg rounded-lg">
               
                <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
                    <span className="font-semibold text-2xl">Messages</span>

                    <div
                        className="h-12 w-12 p-2 bg-green-700 rounded-full text-white font-semibold flex items-center justify-center"
                    >
                        Je

                    </div>
                </div>
              
                <div className="flex  flex-row justify-between bg-white">
                    
                    <div className="flex flex-col w-2/5 border-r-2 overflow-y-scroll">
                     
                        <div className="border-b-2 py-4 px-2">
                            <input
                                type="text"
                                placeholder="Rechercher un utilisateur"
                                className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
                            />
                        </div>
                       
                        <div
                            className="flex cursor-pointer gap-2 flex-row py-4 px-2 justify-center items-center border-b-2"
                        >
                            <div className="w-1/4">
                                <img
                                    src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                                    className="object-cover h-12 w-12 rounded-full"
                                    alt=""
                                />
                            </div>
                            <div className="w-full">
                                <div className="text-lg font-semibold">Christian Shevo</div>
                                <span className="text-gray-500">J'ai passé la commande</span>
                            </div>
                        </div>
                        <div className="flex cursor-pointer gap-2  flex-row py-4 px-2 items-center border-b-2">
                            <div className="w-1/4">
                                <img
                                    src="https://source.unsplash.com/otT2199XwI8/600x600"
                                    className="object-cover h-12 w-12 rounded-full"
                                    alt=""
                                />
                            </div>
                            <div className="w-full">
                                <div className="text-lg font-semibold">Samuel Rego</div>
                                <span className="text-gray-500">Bonsoir Sam,</span>
                            </div>
                        </div>
                        <div
                            className=" cursor-pointer gap-2 flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-green-700"
                        >
                            <div className="w-1/4">
                                <img
                                    src="https://img.freepik.com/photos-gratuite/concept-banniere-homme-affaires-espace-copie_23-2149601460.jpg?w=740&t=st=1691255807~exp=1691256407~hmac=1c50bf0e0d5b7c070cd7159ddcd36eb50a27ad7c52c9056978bc48ac233fc940"
                                    className="object-cover h-12 w-12 rounded-full"
                                    alt=""
                                />
                            </div>
                            <div className="w-full">
                                <div className="text-lg font-semibold">Jean-Luc</div>
                                <span className="text-gray-500">Merci pour la commande</span>
                            </div>
                        </div>
                        <div className="flex cursor-pointer gap-2 flex-row py-4 px-2 items-center border-b-2">
                            <div className="w-1/4">
                                <img
                                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                    className="object-cover h-12 w-12 rounded-full"
                                    alt=""
                                />
                            </div>
                            <div className="w-full">
                                <div className="text-lg font-semibold">Benjamin B.</div>
                                <span className="text-gray-500">Je t'envois ça maintenant</span>
                            </div>
                        </div>
                        <div className="flex cursor-pointer gap-2 flex-row py-4 px-2 items-center border-b-2">
                            <div className="w-1/4">
                                <img
                                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                    className="object-cover h-12 w-12 rounded-full"
                                    alt=""
                                />
                            </div>
                            <div className="w-full">
                                <div className="text-lg font-semibold">Yvonne Kavira</div>
                                <span className="text-gray-500">Je fais la commande ??</span>
                            </div>
                        </div>

                        <div className="flex cursor-pointer gap-2 flex-row py-4 px-2 items-center border-b-2">
                            <div className="w-1/4">
                                <img
                                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                    className="object-cover h-12 w-12 rounded-full"
                                    alt=""
                                />
                            </div>
                            <div className="w-full">
                                <div className="text-lg font-semibold">Celia Butera</div>
                                <span className="text-gray-500">La capture du site svp!!</span>
                            </div>
                        </div>

                        {/* <!-- end user list --> */}

                    </div>

                    {/* <!-- end chat list -->

                        <!-- message --> */}

                    <div className="w-full px-5 overflow-y-scroll bg-slate-100 flex flex-col justify-between">
                        <div className="flex flex-col mt-5">
                            <div className="flex justify-end mb-4">
                                <div
                                    className="mr-2 py-3 px-4 bg-green-700 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                                >
                                    Hey, Guys !
                                </div>
                                <img
                                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                    className="object-cover h-8 w-8 rounded-full"
                                    alt=""
                                />
                            </div>
                            <div className="flex justify-start mb-4">
                                <img
                                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                    className="object-cover h-8 w-8 rounded-full"
                                    alt=""
                                />
                                <div
                                    className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
                                >
                                    Hey, salut, Je viens de passer la commande sur ton service !
                                </div>
                            </div>
                            <div className="flex justify-end mb-4">
                                <div>
                                    <div
                                        className="mr-2 py-3 px-4 bg-green-700 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                                    >
                                        D'accord attends je vérifie.
                                    </div>

                                    <div
                                        className="mt-4 mr-2 py-3 px-4 bg-green-700 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                                    >
                                        C'est correct, je viens de voir !
                                    </div>
                                </div>
                                <img
                                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                    className="object-cover h-8 w-8 rounded-full"
                                    alt=""
                                />
                            </div>
                            <div className="flex justify-start mb-4">
                                <img
                                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                    className="object-cover h-8 w-8 rounded-full"
                                    alt=""
                                />
                                <div
                                    className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
                                >
                                    D'accord, c'est pour 3 jours tu termine, c'est ça ?
                                </div>
                            </div>
                            <div className="flex justify-end mb-4">
                                <div>

                                    <div
                                        className="mt-4 mr-2 py-3 px-4 bg-green-700 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">

                                        Oui, dans trois jours je termine et tu débloque la commande.
                                    </div>
                                </div>
                                <img
                                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                    className="object-cover h-8 w-8 rounded-full"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="mb-20 mt-0">
                            <input
                                className="w-full bg-gray-300 py-5 px-3 rounded-xl"
                                type="text"
                                placeholder="type your message here..."
                            />
                        </div>
                    </div>
                    {/* <!-- end message --> */}
                    <div className="w-2/5 border-l-2 px-5">
                        <div className="flex flex-col">
                            <div className="font-semibold text-xl py-4">Jean-Luc</div>
                            <img
                                src="https://img.freepik.com/photos-gratuite/concept-banniere-homme-affaires-espace-copie_23-2149601460.jpg?w=740&t=st=1691255807~exp=1691256407~hmac=1c50bf0e0d5b7c070cd7159ddcd36eb50a27ad7c52c9056978bc48ac233fc940"
                                alt=""
                            />
                            <div className="font-semibold py-4">Membre depuis le 22 Sept 2021</div>
                            <div className="font-semibold py-4">Habite à <span>Kinshasa</span></div>
                            <div className="font-light">
                                Je suis freelance avec 5 ans d'expérience en Photographie et marketing digital.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ChatComponent