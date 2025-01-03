const EditBerita = async (id, img, title, deskripsi, content, lokasi, tanggal, created_by) => {
    const db = import.meta.env.VITE_DB;
    try {
        const response = await fetch(`${db}/berita/${id}.json`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
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
