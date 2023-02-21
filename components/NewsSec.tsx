/* eslint-disable react/jsx-key */
import React from 'react'
import axios from 'axios'
import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react'
import Image from 'next/image'
import Link from 'next/link'
import { CircleLoader } from 'react-spinners'
import HashLoader from 'react-spinners/HashLoader'
import { useRouter } from 'next/router'
import { error } from 'console'
import Head from 'next/head'

interface Props {
    topic: string
}

// how to send props to this component sample code
// <NewsSec topic={pid} />

const NewsSec = ({ topic }: Props) => {


    const [news, setNews] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    // const router = useRouter()

    React.useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=${topic}&language=en&sortBy=publishedAt&apiKey=eb634d3d41ca4a48b7379ba3936bc1f2`)
            .then(res => {
                setNews(res.data.articles)
                setLoading(false)
                // alert(`https://newsapi.org/v2/everything?q=${topic}&language=en&sortBy=publishedAt&apiKey=eb634d3d41ca4a48b7379ba3936bc1f2`)
            })
            .catch(err => {
                setError(false)
                setLoading(false)
                console.log(err)
            })
    }, [topic])

    return (
        <>
        <Head>
            <title>Fenil-{topic?.charAt(0).toUpperCase() + topic?.slice(1)}</title>
            {/* attach logo */}
            <link rel="icon" href="/logo.png" />
        </Head>
            {/* code that will covert topic into camel case */}
            <h1 className='text-3xl font-bold text-center mt-10'>{topic?.charAt(0).toUpperCase() + topic?.slice(1)}</h1>
            <div className='flex flex-wrap gap-10 mt-20 justify-center'>
                {/* why m-auto is not working */}
                {/* answer is because of the flex-wrap */}
                {/* how to use flex wrap and m-auto bot wroking */}
                {/* answer is to use flex-wrap */}
                {loading ? <HashLoader size={70} color='black' /> : error ? <h1>error</h1> : news.map((item, index) => (
                    <Link target={'_blank'} href={item.url} key={index}>
                        <Card className="w-96 my-10 hover:bg-gray-100 transition-all ease-in duration-200">
                            <CardHeader color="gray" className="relative h-56 rounded-2xl">
                                <img
                                    src={item.urlToImage}
                                    alt="Image Not Found"
                                    className="h-full w-full shadow-inner drop-shadow-2xl border-gray-600 border-[1px]"
                                />
                            </CardHeader>
                            <CardBody className="text-center">
                                <Typography variant="h5" className="mb-2">
                                    {item.title ? item.title : 'No Title'}
                                </Typography>
                                <Typography>
                                    {item.description}
                                </Typography>
                            </CardBody>
                            <CardFooter divider className="flex items-center justify-between py-3">
                                <Typography variant="small"><h1 className=""><h1 className='font-bold'>{item.publishedAt.substring(0, 10)}</h1><h1 className='font-semibold'>{item.publishedAt.substring(11, 19)}</h1>
                                </h1></Typography>
                                <Typography variant="small" color="gray" className="flex gap-1">
                                    <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                                    <span className='font-bold'>Source:</span>{item.source.name}
                                </Typography>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}

            </div>
        </>
    )
}

export default NewsSec