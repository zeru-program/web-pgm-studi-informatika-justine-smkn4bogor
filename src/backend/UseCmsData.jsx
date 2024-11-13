import { useState, useEffect } from 'react';

function useCmsData() {
    const [dataCms, setDataCms] = useState([]);
    const db = import.meta.env.VITE_DB;
    useEffect(() => {
        fetch(db + "cms.json")
            .then((res) => res.json())
            .then((data) => setDataCms(data));
    }, []);

    return { dataCms, setDataCms };
}

export default useCmsData;
