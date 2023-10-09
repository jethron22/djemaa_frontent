import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./mydjemas.scss";
import getCurrentUser from "../../utils/getCurrentUser";
import { BsFillTrash3Fill, BsPlusCircleFill } from "react-icons/bs";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import DeleteModal from "./DeleteModal";


function MyDjemas() {

  const currentUser = getCurrentUser()

  const queryClient = useQueryClient()


  const { error, data, isLoading, refetch } = useQuery({

    queryKey: ["myDjemas"],
    queryFn: () =>
      newRequest.get(`/djemas?userId=${currentUser._id}`).then((res) => {
        return res.data;
      })

  });
  const DeleteDjema = DeleteModal()

  useEffect(() => {
    refetch()
  }, [data])


  const mutation = useMutation({
    mutationFn: (id) => {
      newRequest.delete(`/djemas/${id}`)
    },

    onSuccess: () => {

      queryClient.invalidateQueries(["myDjemas"])

    }


  })


  const handleDelete = (id) => {
    
    mutation.mutate(id)

  }

  console.log(data)


  return (
    <div className="myGigs">
      {isLoading ? <div className="flex justify-center items-center m-auto mt-20 ">

        <div
          class=" flex text-green-600 h-8 w-8 animate-spin  rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-danger motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">

          <span
            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          ></span
          >
        </div>
        <span className="mr-3 ml-3 font-semibold text-green-600"> Chargement de vos services </span>
      </div> : error ? <div className="flex justify-center items-center m-auto mt-20 ">


        <span className="mr-3 ml-3 font-semibold text-red-600"> Erreur lors de chargement de vos services..</span>
      </div> : (<div className="container">
        <div className="title">
          <h1>{currentUser.isSeller ? "Djemas" : "Commandes"}</h1>
          {currentUser.isSeller && (
            <div className="gap-5 flex">

              <span className="">
                <Link to="/djemas?cat">
                  <button className="rounded" value="Tous les Services">Tous les Djemas</button>
                </Link>
              </span>

              <span>
                <Link to="/add-djemaa">
                  <button className="rounded"> + Ajouter un nouveau Djema</button>
                </Link>
              </span>
            </div>
          )}
        </div>

        {isLoading ? "Loading" : error ? "Erreur lors de chargement de vos services" : <table>
          <tr>
            <th>Image</th>
            <th>Titre du service</th>
            <th>Prix</th>
            <th>Terminés</th>
            <th>Supprimer</th>
          </tr>


          {data?.map(djema =>

          (
            <tr key={djema._id}>
              <td>
                <img
                  className="image"
                  src={djema.cover}
                  alt=""
                />
              </td>
              <td>{djema?.title}</td>
              <td>{djema?.price}$</td>
              <td>{djema?.sales}</td>
              <td onClick={handleDelete} >
                {isLoading ? <div >
                 
                </div> : error ? "erreur lors de la supression de ce djema" : <BsFillTrash3Fill size={20} className="ml-3 cursor-pointer" color="red" onClick={() => handleDelete(djema._id)} refetch />}
              </td>
            </tr>
          ))}

        </table>}


        <div className="flex justify-center mt-20">

          {data.length === 0 &&
            <div className=''>
              <div  >
                <p>
                  <span>
                    <Link to={"/add-djemaa"}>
                      <span className="underline text-green-600 font-semibold">
                        <BsPlusCircleFill size={50} /></span></Link>
                  </span>
                </p>

              </div>
            </div>

          }
        </div>


      </div>)}
    </div>
  );
}

export default MyDjemas;