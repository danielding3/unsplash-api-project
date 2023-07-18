import React from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import fetchData from './utils'
import { useGlobalContext } from './context'
import { toast } from 'react-toastify';

const Gallery = () => {
    const { searchValue } = useGlobalContext();

    const copyToClipboard = async (url) => {
        try {
            await navigator.clipboard.writeText(url);
            toast.success('Image URL copied to clipboard!')
        } catch (error) {
            toast.error('Failed to copy text:', error)
        }
    }

    const {data, error, isLoading, isError} = useQuery({
        queryKey:['photos', searchValue],
        queryFn: async () => {
            const { data } = await fetchData.get(`/search/photos?query=${searchValue}`);
            console.log(data)
            return data;
        }
    })
    if (isLoading) {
        return <h4 className='image-container'>Loading...</h4>
    }

    if (error) {
        console.log(error.message);
        return <h4 className='image-container'>There was an error: {error.message}</h4>
    }

    const results = data.results;

    if (results.length < 1) {
        return <h4 className='image-container'>No results found</h4>
    }
    return (
        <section>
            <div className='image-container'>
                {results.map(result => {
                    return (
                        <img 
                            key={result.id} 
                            src={result.urls.regular} 
                            className='img' 
                            alt={result.alt_description}
                            onClick={() => copyToClipboard(result.urls.regular)}
                        />
                    );
                })}
            </div>
        </section>
    )
}

export default Gallery