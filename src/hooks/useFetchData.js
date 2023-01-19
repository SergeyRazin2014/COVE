import { useEffect, useState } from 'react';

export const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        setIsloading(true);

        fetch(url)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(err => console.log(err))
            .finally(() => setIsloading(false));
    }, [url]);

    return { isLoading, data }
}