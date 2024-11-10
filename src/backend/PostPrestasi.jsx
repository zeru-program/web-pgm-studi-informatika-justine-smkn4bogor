import React, { useEffect, useState } from 'react'

const PostPrestasi = ({title, lomba, img, lokasi, tanggal}) => { 
    const [dataPrestasi, setDataPrestasi] = useState([]);
    const db = "https://gebyar-it-ftsuikabogor-justine-default-rtdb.firebaseio.com/"
    const result = false
    useEffect(() => {
        fetch(db + "prestasi.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

            })
        })
        .then((res) => res.ok ? result = true : result = false);
    }, [])

    return result
}

export default PostPrestasi