const PostPrestasi = async (title, lomba, img, lokasi, tanggal) => {
    const db = "https://gebyar-it-ftsuikabogor-justine-default-rtdb.firebaseio.com/";
    try {
        const response = await fetch(`${db}/prestasi.json`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
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
