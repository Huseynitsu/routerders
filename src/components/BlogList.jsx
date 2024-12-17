import { Link } from "react-router"

function BlogList() {

    const blogs = [
        { id: 1, title: "Birinci bloqum" },
        { id: 2, title: "Ikinci bloqum" },
        { id: 3, title: "Ucuncu bloqum" }
    ]

    return (
        <div>
            <h2>Bloqlarım</h2>
            <ul className="blogAll">
                {
                    blogs.map((blog) => {
                        return <li key={blog.id}>
                            <Link to={`/bloqlar/${blog.id}`}>{blog.title}</Link>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default BlogList