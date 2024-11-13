const EditCmsImg = async (id, img, title, created_by) => {
    const db = import.meta.env.VITE_DB;
    try {
        const response = await fetch(`${db}/cms_img/${id}.json`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                img,
                title,
                created_by
            })
        });
        return response.ok;
    } catch (error) {
        console.error("Error editing data:", error);
        return false;
    }
}

export default EditCmsImg;
