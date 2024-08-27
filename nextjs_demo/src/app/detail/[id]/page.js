// rafce
'use client'
import { getProductIdAPI } from '@/apis/fetchAPI'
import React, { useEffect, useState } from 'react'

const page = (props) => {

    let { id } = props.params
    let [data, setData] = useState(null)

    useEffect(() => {
        getProductIdAPI(id).then(result => {
            setData(result.content)
        })
    }, [id])

    return (
        <h1 className='text-9xl'>

            <img src={data?.image} />
        </h1>
    )
}

export default page