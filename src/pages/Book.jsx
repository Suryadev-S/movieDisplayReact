import { useLocation, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
const Book = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [name, setName] = useState(localStorage.getItem("name"));
    const { show } = location.state;
    const handleBooking = (e) => {
        e.preventDefault();
        alert("booking done");
        navigate('/');
    }
    return (
        <>
            <main>
                <form onSubmit={handleBooking}>
                    <h1 className="section-heading">Booking for {show.name}</h1>
                    <div>
                        <input
                            type="text"
                            placeholder="your name"
                            className="input-bar"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div>
                        <div>Select no. of tickets</div>
                        <input type="number" className="input-bar" min={1} defaultValue={1} />
                    </div>
                    <div>
                        <button className="btn" type="submit">confirm booking</button>
                    </div>
                </form>
            </main>
        </>
    );
}

export default Book;