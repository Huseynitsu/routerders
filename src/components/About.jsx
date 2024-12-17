import { useNavigate } from 'react-router'

function About() {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/")
    }

    return (
        <div>
            <h2>Haqqımızda</h2>
            <button onClick={goToHome}>Ana səhifəyə qayıt</button>
        </div>
    )
}

export default About