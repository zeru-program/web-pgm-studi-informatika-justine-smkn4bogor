import { useState, useEffect } from 'react';

function useCmsData() {
    const [dataCms, setDataCms] = useState([]);

    useEffect(() => {
        fetch("https://gebyar-it-ftsuikabogor-justine-default-rtdb.firebaseio.com/cms.json")
            .then((res) => res.json())
            .then((data) => setDataCms(data));
    }, []);

    return { dataCms, setDataCms };
}

export default useCmsData;
