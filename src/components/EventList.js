import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Event from './Event';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('/api/events/').then((response) => {
            setEvents(response.data);
        });
    }, []);

    return (
        <div>
            <h2>Global Events</h2>
            {events.map((event) => (
                <Event key={event.id} event={event} />
            ))}
        </div>
    );
};

export default EventList;
