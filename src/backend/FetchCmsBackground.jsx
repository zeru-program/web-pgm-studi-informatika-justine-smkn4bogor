import { useState, useEffect } from 'react';

const FetchCmsBackground = () => {
    const [dataCmsImg, setDataCmsImg] = useState([]);
    const db = import.meta.env.VITE_DB;
    useEffect(() => {
        fetch(db + "cms_img.json")
            .then((res) => res.json())
            .then((data) => setDataCmsImg(Object.entries(data).map(([key, value]) => ({ key, ...value }))));
    }, []);

    return { dataCmsImg, setDataCmsImg };
}

export default FetchCmsBackground;