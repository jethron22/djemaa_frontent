import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import getCurrentUser from '../../utils/getCurrentUser.js'
import { Link } from 'react-router-dom'
import { AiFillCheckCircle } from "react-icons/ai"



const SuccessModal = () => {
  const [open, setOpen] = useState(true)

  const currentUser = getCurrentUser()

  const cancelButtonRef = useRef(null)


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full md:w-full md:h-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h2" className="text-base font-semibold leading-6 text-gray-900">
                        <span className='text-3xl mx-10 '>Bienvenue <span className='text-green-600'> {currentUser?.username}</span></span>
                      </Dialog.Title>
                      <div className="mt-5 mb-3">

                        <p className="text-sm text-gray-500 flex gap-2  font-semibold ">

                          -Nous sommes la première plate-forme en ligne, sur lequel vous pouvez trouver et travailler avec des freelances,

                          <br /> <br />

                          -Où que vous soyez en Afrique, Filtrer les freelances selon le pays où vous vous localisez, est un simple Jeu..
                          <br /> <br />

                          -Peu importe votre budget, filtrez les services (djemaa) selon vos souhaits et trouvez quelqu'un pour le faire,
                          <br /> <br />

                          -Échangez avec le freelance (Djemadarii), directement sur Djemaa, pour engager une solide confiance entre vous !
                          <br /> <br />

                          -Choisissez un moyen de payement selon vos entente, et payez le freelance, une fois le travail terminé !

                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-4 sm:flex sm:flex-row-reverse sm:px-6">
                  
                    <div
                      type="button"
                      
                      className="inline-flex w-full cursor-pointer justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold  text-white shadow-sm hover:bg-green-800 sm:ml-3 sm:w-auto"
                      onClick={() => setOpen(false)}
                    >
                     Merci, j'ai compris

                    </div>
                 
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default SuccessModal
