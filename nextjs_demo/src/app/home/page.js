'use client'
import { getProductAPI } from '@/apis/fetchAPI';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const page = (props) => {
    const router = useRouter()
    let { p_name } = props.searchParams;

    let [data, setData] = useState([])

    useEffect(() => {
        getProductAPI().then(result => {
            setData(result.content)
        })
    }, [])

    return (
        <div class="container mx-auto px-4 py-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {data.map(item => {
                    return <p>
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <img src={`${item.image}`} alt="Product 1" className="w-full h-48 object-cover rounded-md" />
                            <h2 className="mt-4 text-xl font-semibold">{item.name}</h2>
                            <p className="mt-2 text-gray-600">{item.price}</p>
                            <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700" onClick={() => {
                                router.push(`/detail/${item.id}`)
                            }}>Add to Cart</button>
                        </div>


                    </p>
                })}
            </div>
        </div>
    )
}

export default page