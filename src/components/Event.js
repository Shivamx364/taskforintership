import React, { useState } from 'react';
import axios from 'axios';

const Event = ({ event }) => {
    const [isLiked, setIsLiked] = useState(event.is_liked);

    const toggleLike = () => {
        setIsLiked(!isLiked);
        axios.patch(`/api/events/${event.id}/`, { is_liked: !isLiked });
    };

    return (
        <div>
            <h3>{event.event_name}</h3>
            <p>{event.location}</p>
            <p>{event.date} {event.time}</p>
            <img src={event.image} alt={event.event_name} />
            <button onClick={toggleLike} style={{ color: isLiked ? 'red' : 'white' }}>❤️</button>
        </div>
    );
};

export default Event;
