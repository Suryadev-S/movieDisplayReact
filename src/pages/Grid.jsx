import axios from 'axios'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
const Grid = () => {
    const [dataArray, setDataArray] = useState([]);

    async function getData() {
        const response = await axios.get("https://api.tvmaze.com/search/shows?q=all");
        setDataArray([...response.data]);
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <>
            <main>
                <section className='result-grid'>
                    {dataArray.map((item) => {
                        return (
                            <div className="card" key={item.show.id}>
                                <Link to={'/info'} state={{ show: item.show }}>
                                    {item.show.image && item.show.image.original && (
                                        <img src={item.show.image.original} alt={item.show.name} className='poster' />
                                    )}
                                    <div className="card-content">
                                        <h1 className="card-title">{item.show.name}</h1>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </section>
            </main>
        </>
    );
}

export default Grid;