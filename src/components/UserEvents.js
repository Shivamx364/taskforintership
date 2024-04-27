import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Event from './Event';

const UserEvents = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('/api/events/?user=current').then((response) => {
            setEvents(response.data);
        });
    }, []);

    return (
        <div>
            <h2>User Specific Events</h2>
            {events.map((event) => (
                <Event key={event.id} event={event} />
            ))}
        </div>
    );
};

export default UserEvents;
