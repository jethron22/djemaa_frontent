import React, { useRef, useState, useEffect } from "react";
import './djemas.scss'
import DjemaCard from "../../components/djemaCard/DjemaCard";
import { AiFillCaretDown } from "react-icons/ai"
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest.js";
import { useLocation, useNavigate } from "react-router-dom";
// import { AiFillExclamationCircle } from "react-icons/ai";
import { AiFillAlert } from "react-icons/ai";
import { useParams } from "react-router-dom";
import getCurrentUser from "../../utils/getCurrentUser";
import logi_djemaa from "../djema/logi_djemaa.gif"

function Djemas() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState();
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation()
  const { cat } = useParams();
  const { name } = useParams();
  const { id } = useParams();

  const { error, data, isLoading, refetch } = useQuery({
    queryKey: ["djemas"],
    queryFn: () =>
      newRequest
        .get(`/djemas${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`)
        .then((res) => {

          return res.data;

        }),

  });

  const curentUser = getCurrentUser()

  console.log(data)

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch()
  }, [sort])

  const apply = () => {
    refetch()
  }

  const navigate = useNavigate()

  const handlerLoginNavigate = () => {
    navigate("/login")
  }


  return (
    <div className="djemas">

      {!curentUser && isLoading ?

        <div className="flex items-center mt-20 justify-center gap-4 flex-wrap">

<div role="status" class="max-w-sm p-4 border rounded shadow animate-pulse md:p-6 dark:border-gray-400">
            <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400">
              <svg class="w-10 h-10 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
              
            </div>

            <div class="flex items-center mt-4 mb-4 space-x-3">
              <svg class="w-10 h-10 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"></div>
                <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
              </div>
            </div>

            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400">

            </div>
            
            <span class="sr-only">Loading...</span>
          </div>

          <div role="status" class="max-w-sm p-4 border rounded shadow animate-pulse md:p-6 dark:border-gray-400">
            <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400">
              <svg class="w-10 h-10 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
              
            </div>

            <div class="flex items-center mt-4 mb-4 space-x-3">
              <svg class="w-10 h-10 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"></div>
                <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
              </div>
            </div>

            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400">

            </div>
            
            <span class="sr-only">Loading...</span>
          </div>


          <div role="status" class="max-w-sm p-4 border rounded shadow animate-pulse md:p-6 dark:border-gray-400">
            <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400">
              <svg class="w-10 h-10 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
              
            </div>

            <div class="flex items-center mt-4 mb-4 space-x-3">
              <svg class="w-10 h-10 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"></div>
                <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
              </div>
            </div>

            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400">

            </div>
            
            <span class="sr-only">Loading...</span>
          </div>

          <div role="status" class="max-w-sm p-4 border rounded shadow animate-pulse md:p-6 dark:border-gray-400">
            <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400">
              <svg class="w-10 h-10 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
              
            </div>

            <div class="flex items-center mt-4 mb-4 space-x-3">
              <svg class="w-10 h-10 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"></div>
                <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
              </div>
            </div>

            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400">

            </div>
            
            <span class="sr-only">Loading...</span>
          </div>

          <div role="status" class="max-w-sm p-4 border rounded shadow animate-pulse md:p-6 dark:border-gray-400">
            <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400">
              <svg class="w-10 h-10 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
              
            </div>

            <div class="flex items-center mt-4 mb-4 space-x-3">
              <svg class="w-10 h-10 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"></div>
                <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
              </div>
            </div>

            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400">

            </div>
            
            <span class="sr-only">Loading...</span>
          </div>


          <div role="status" class="max-w-sm p-4 border rounded shadow animate-pulse md:p-6 dark:border-gray-400">
            <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400">
              <svg class="w-10 h-10 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
              
            </div>

            <div class="flex items-center mt-4 mb-4 space-x-3">
              <svg class="w-10 h-10 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"></div>
                <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
              </div>
            </div>

            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400">

            </div>
            
            <span class="sr-only">Loading...</span>
          </div>

          <div role="status" class="max-w-sm p-4 border rounded shadow animate-pulse md:p-6 dark:border-gray-400">
            <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400">
              <svg class="w-10 h-10 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
              
            </div>

            <div class="flex items-center mt-4 mb-4 space-x-3">
              <svg class="w-10 h-10 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"></div>
                <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
              </div>
            </div>

            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400">

            </div>
            
            <span class="sr-only">Loading...</span>
          </div>


          <div role="status" class="max-w-sm p-4 border rounded shadow animate-pulse md:p-6 dark:border-gray-400">
            <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400">
              <svg class="w-10 h-10 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
              
            </div>

            <div class="flex items-center mt-4 mb-4 space-x-3">
              <svg class="w-10 h-10 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"></div>
                <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
              </div>
            </div>

            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400">

            </div>
            
            <span class="sr-only">Loading...</span>
          </div>

        </div>

        : error ? <div className="mt-20 text-red-500 flex justify-center flex-col font-semibold">

          <p className="flex justify-center">
            <img className="w-32 h-30" src={logi_djemaa} />
          </p>
          <p className="text-green-700 font-light flex justify-center mt-5">
            <span onClick={handlerLoginNavigate} className="flex underline cursor-pointer ">Connectez-vous pour voir cette page </span>
          </p>
        </div> : <div className="container">
          <span className="breadcrumbs">{id}</span>
          <p className="text-3xl">{cat}</p>
          <p>
            {name}
          </p>
          <div className="menu">

            <div className="right">
              <span className="sortBy">Trier selon: </span>
              <span className="sortType">
                {sort === "sales" ? "Meilleures ventes" : "Nouveautés"}
              </span>
              <span className="cursor-pointer" onClick={() => setOpen(!open)}><AiFillCaretDown color="green" /></span>
              {open && (
                <div className="rightMenu">
                  {sort === "sales" ? (
                    <span onClick={() => reSort("createdAt")}>Nouveautés</span>
                  ) : (
                    <span onClick={() => reSort("sales")}>Meilleures ventes</span>
                  )}

                </div>

              )}
            </div>
            <div className="left">
              <span>Budget</span>
              <input ref={minRef} type="number" placeholder="Min." />
              <input ref={maxRef} type="number" placeholder="Max." />
              <button onClick={apply}>Trouver</button>
            </div>
          </div>
          <div className="cards flex justify-center w-[1200px]">

            {isLoading ?
              <div className="flex justify-center items-center m-auto mt-12 ">

                <div
                  class=" flex text-green-600 h-8 w-8 animate-spin  rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-danger motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status">

                  <span
                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                  ></span>

                </div>
                <span className="mr-3 ml-3 font-semibold text-green-600"> Chargement.. </span>
              </div> : error ?

                <div className="justify-center animate-pulse items-center m-auto mt-20"><div className="font-semibold gap-2 flex items-center text-red-700"><span className="  flex"> <AiFillAlert size={25} /></span><span className="mt-1">Erreur lors de chargement des djemas...</span></div></div> : data.map((djema) => (
                  <DjemaCard key={djema._id} item={djema} />
                ))}
          </div>
          <div>

          </div>
        </div>}
    </div>

  )
}

export default Djemas