import { useParams } from "react-router"

function BlogDetail() {

    const { id } = useParams();

    const blogData = {
        1: "React Router başlanğıc",
        2: "React Router middle",
        3: " React Router advanced"
    }

    return (
        <div>
            <h2>Blog yazısı</h2>
            <span>Daxil olduğumuz blogun id-si: {id}</span>
            <p>
                {
                    blogData[id] || "Blogun haqqında məlumat tapılmadı"
                }
            </p>
        </div>
    )
}

export default BlogDetail