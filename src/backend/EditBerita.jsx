const EditBerita = async (id, id_berita, img, title, deskripsi, content, lokasi, tanggal, created_by) => {
    const db = "https://gebyar-it-ftsuikabogor-justine-default-rtdb.firebaseio.com/";
    try {
        const response = await fetch(`${db}/berita/${id}.json`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_berita,
                img,
                title,
                deskripsi,
                content,
                lokasi,
                tanggal,
                created_by
            })
        });
        return response.ok;
    } catch (error) {
        console.error("Error editing data:", error);
        return false;
    }
}

export default EditBerita;
