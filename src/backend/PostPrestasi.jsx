const PostPrestasi = async (title, lomba, img, lokasi, tanggal) => {

    const db = import.meta.env.VITE_DB;

    try {
        const response = await fetch(`${db}/prestasi.json`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: Math.floor(Math.random() * 500 - 100) + 1,
                title,
                lomba,
                img,
                lokasi,
                tanggal
            })
        });
        return response.ok;
    } catch (error) {
        console.error("Error posting data:", error);
        return false;
    }
}

export default PostPrestasi;
