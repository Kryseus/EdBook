import {useState, useEffect, useCallback} from 'react'


const useContentful = ({skip,contentType,id,limit}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    limit = limit ? `&limit=${limit}` : '';
    skip = skip ? `&skip=${skip}` : '';

    const getDataFromContentful = useCallback(async ()=> {
        setLoading(true);
        console.log('Sending request to contentful...');

        const opt={
            space:'fadr7yw634uj',
            tkn:'access_token=NBHmeMI5XvdDHu6omsEMrabzvaL09Sqp_Ngg5vLKGmA',
        };
        const url=`https://cdn.contentful.com/spaces/${opt.space}`;
        
        try {
            let entries;
            if (contentType==='allRecs'){
                const response = await fetch(`${url}/entries?${opt.tkn}${skip}${limit}`);
                entries = await response.json();
                console.log('Got response.');
                for (let item of entries.items){
                    if (item.fields.photos){
                        const id=item.fields.photos[0].sys.id;
                        console.log('Getting a photo.');
                        const response = await fetch(`${url}/assets/${id}?${opt.tkn}`);
                        const photo = await response.json();
                        item.photo={url:photo.fields.file.url,alt:photo.fields.title};
                    }
                }
            }else if (contentType==='recipePage' && id){
                const response = await fetch(`${url}/entries/${id}?${opt.tkn}`);
                entries = await response.json();
                console.log(entries);
                if (entries.fields.photos){
                    for (let photo of entries.fields.photos){
                        const id=photo.sys.id;
                        console.log('Getting a photo.');
                        const response = await fetch(`${url}/assets/${id}?${opt.tkn}`);
                        const photoRes = await response.json();
                        photo.file={url:photoRes.fields.file.url,alt:photoRes.fields.title};
                    }
                }
            }
            setData(entries);
            setLoading(false);
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }, [skip,contentType,limit,id])

    useEffect(()=>{
        getDataFromContentful()
    },[getDataFromContentful])
    return {loading, error, data}
}

export default useContentful


/* const response = await fetch(`${url}/spaces/${opt.space}/entries/?access_token=${opt.tkn}&content_type=${contentType}&skip=${skip}&limit=${limit}`); */