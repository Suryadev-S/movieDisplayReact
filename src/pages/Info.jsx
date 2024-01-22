import { useLocation, useNavigate } from "react-router-dom";

const Info = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { show } = location.state;
    return (
        <>
            <main>
                <section>
                    <div className="info">
                        <div className="card">
                            <img src={show.image.medium} alt={show.name} />
                            <div className="card-content">
                                <h1 className="card-title">{show.name}</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className="section-heading">{show.name}</h1>
                            <table className="table">
                                <tr>
                                    <td>runtime</td>
                                    <td>{show.runtime}</td>
                                </tr>
                                <tr>
                                    <td>language</td>
                                    <td>{show.language}</td>
                                </tr>
                                <tr>
                                    <td>status</td>
                                    <td>{show.status}</td>
                                </tr>
                                <tr>
                                    <td>premiered</td>
                                    <td>{show.premiered}</td>
                                </tr>
                                <tr>
                                    <td>ended</td>
                                    <td>{show.ended}</td>
                                </tr>
                                <tr>
                                    <td>rating</td>
                                    <td>{show.rating.average}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div>
                        <h1 className="section-heading">Synopsis</h1>
                        <section className="synopsis">
                            <div dangerouslySetInnerHTML={{__html: show.summary}}></div>
                            <div>
                                <button className="btn" onClick={ ()=> navigate('/book',{state: {show: show}})}>book ticket</button>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Info;