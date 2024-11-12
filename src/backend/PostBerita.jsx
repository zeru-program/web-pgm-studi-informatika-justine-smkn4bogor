const PostBerita = async (title, deskripsi, img, content, created_by, lokasi, tanggal) => {
    const db = "https://gebyar-it-ftsuikabogor-justine-default-rtdb.firebaseio.com/";
    try {
        const response = await fetch(`${db}/berita.json`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_berita: Math.floor(Math.random() * 500 - 10) + 1,
                title,
                img,
                deskripsi,
                content,
                lokasi,
                tanggal,
                created_by,
                created_at: new Date()
            })
        }).catch(e => alert(e))
        return response.ok;
    } catch (error) {
        console.error("Error posting data:", error);
        return false;
    }
}

export default PostBerita;
