import React, { useState } from "react";
import "./djema.scss";
import 'react-slideshow-image/dist/styles.css'
import { AiFillStar } from "react-icons/ai"
import { AiOutlineLike } from "react-icons/ai"
import { AiFillCheckCircle, AiOutlineProfile } from "react-icons/ai"
import jethron from "../../components/img/jethron.jpg"
import UserCardPayement from "./UserCardPayement";
import {AiOutlineMessage} from "react-icons/ai"


function Djema() {

  const [open, setOpen] = useState(false)



  return (
    <div className="djema">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">Djemaa  Photographie </span>
          <h1>I will create photo capture art for you </h1>
          <div className="user">
            <img
              className="pp"
              src={jethron}
              alt=""
            />
            <span>Jethron Kashira</span>
            <div className="stars">
              < AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span>5</span>
            </div>
          </div>
          <div>
            {/* <Slider {...settings}> */}
            <div className="slider">
              {/* <img 
                src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              /> */}
            </div>
            <div >
              <img
                src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
            <div>
              {/* <img 
                src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              /> */}
            </div>
            {/* </Slider> */}
          </div>


          <h2>Au sujet de ce Djema</h2>
          <p>
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.
          </p>
          <div className="seller">
            <h2>Au sujet du prestataire </h2>
            <div className="user">
              <img
                src={jethron}
                alt=""
              />
              <div className="info">
                <span>Jethron Kashira</span>
                <div className="stars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <span>5</span>
                </div>
                <button>Contacter ce prestataire</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">Habite à </span>
                  <span className="desc font-bold">Goma</span>
                </div>
                <div className="item">
                  <span className="title">Membre depuis</span>
                  <span className="desc font-bold">Aout 2022</span>
                </div>
                <div className="item">
                  <span className="title">Taux de reponse</span>
                  <span className="desc font-bold">4 heures</span>
                </div>
                <div className="item">
                  <span className="title">Derniere livraison</span>
                  <span className="desc font-bold">il y a 1 jour</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc font-bold">English</span>
                  <span className="desc font-bold">Français</span>
                </div>
              </div>
              <hr />
              <p>
                My name is Jethron, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Garner David</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <span>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
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
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Sidney Owen</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                      alt=""
                    />
                    <span>Germany</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <span>5</span>
              </div>
              <p>
                The designer took my photo for my book cover to the next level!
                Professionalism and ease of working with designer along with
                punctuality is above industry standards!! Whatever your project
                is, you need this designer!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <AiOutlineLike />
                <span>Yes</span>
                <AiOutlineLike />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Lyle Giles </span>
                  <div className="country">
                    <img
                      src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <im />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <span>5</span>
              </div>
              <p>
                Amazing work! Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <AiOutlineLike />
                <span>Yes</span>
                <AiOutlineLike />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">


          {!open && (

            <div>
              <div className="">
                <div class="max-w-2xl top-0  mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white rounded-lg text-gray-900">
                  
                  <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                    <img class="object-cover object-center h-32" src={jethron} alt='Woman looking front' />
                  </div>
                  <div class="text-center mt-2">
                    <h2 class="font-semibold">Jethron Kashira</h2>
                    <p class="text-gray-500">Freelance Web Designer</p>
                  </div>
                  <ul class="py-4 mt-2 text-gray-700 flex items-center justify-around">
                    <li class="flex flex-col items-center justify-around">
                      <svg class="w-4 fill-current text-green-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <div>2k</div>
                    </li>
                    <li class="flex flex-col items-center justify-between">
                      <svg class="w-4 fill-current text-green-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                      </svg>
                      <div>10k</div>
                    </li>
                    <li class="flex flex-col items-center justify-around">
                      <svg class="w-4 fill-current text-green-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                      </svg>
                      <div>15</div>
                    </li>
                  </ul>
                  <div class=" flex justify-between p-4 border-t mx-8  mt-2">
                    <span><button className=" flex bg-green-700 border-2 border-green-700 text-white font-semibold p-3 items-center gap-1 rounded w-32"><span><AiOutlineMessage /></span> Message <span></span></button></span>

                    <span className=""><button onClick={()=> setOpen(!open)} className="flex  items-center  font-semibold p-3 border-gray-600 border-2 text-slate-600 gap-1 rounded w-32"><span><AiOutlineProfile /></span> Mon tarif <span></span></button></span>
                  
                  </div>
                </div>
              </div>
             
            </div>
          )

          }

          {
            open && (
              <div>
                <div className="price">
                  <p className="font-semibold text-1xl">Photographie professionnelle</p>
                  <h2>$ 59.99</h2>
                </div>
                <p>
                  I will create a unique high quality AI generated image based on a
                  description that you give me
                </p>
                <div className="details">
                  <div className="item">
                    <AiOutlineLike />
                    <span>Livraison dans deux jours</span>
                  </div>
                  <div className="item">
                    <AiOutlineLike />
                    <span>3 Revisions</span>
                  </div>
                </div>
                <div className="features">
                  <div className="item">
                    <AiFillCheckCircle />
                    <span>Prompt writing</span>
                  </div>
                  <div className="item">
                    <AiFillCheckCircle />
                    <span>Artwork delivery</span>
                  </div>
                  <div className="item">
                    <AiFillCheckCircle />
                    <span>Image upscaling</span>
                  </div>
                  <div className="item">
                    <AiFillCheckCircle />
                    <span>Additional design</span>
                  </div>
                </div>
                <button className="bg-green-700 p-3 w-full text-white font-semibold rounded mt-5">Continuer</button>
              </div>

            )
          }


        </div>
      </div>
    </div>
  );
}

export default Djema;