'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const About = () => {
    const [name, setName] = useState('')

    useEffect(() => {
        const response = axios.get('/api/hello').then((data) => {
            setName(data.data.name)
        }).catch((error) => {
            console.log('Error fetching data from api route: ', error)
        })
        // fetch('/api/hello')
        //     .then((response) => response.json())
        //     .then((data) => {
        //         setName(data.name)
        //     })
        //     .catch((error) => {
        //         console.log('Error fetching data from api route: ', error)
        //     })
    }, [])
    return (
        <div>
            Hello {name}
        </div>
    )
}

export default About