import {useState, useEffect} from 'react';

import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_DATA = [
//     {
//         id:'m1',
//         title:'This is a first meetup',
//         image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/1200px-Golde33443.jpg',
//         address:'Some address 5, 12345 Some City',
//         description:'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
//     },
//     {
//         id:'m2',
//         title:'This is a second meetup',
//         image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/1200px-Golde33443.jpg',
//         address:'Some address 10, 12345 Some City',
//         description:'This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!'
//     }
// ];

function AllMeetupsPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://react-getting-started-fbd5f-default-rtdb.firebaseio.com/meetups.json'
        ).then(response => {
                return response.json();
            }).then(data => {

                const meetups = [];

                for(const key in data) {
                    const meetup ={
                        id: key,
                        ...data[key]
                    };

                    meetups.push(meetup);
                }

                setIsLoading(false);
                setLoadedMeetups(meetups);
            });
    }, []);

    

        if (isLoading) {
            return (
                <section>
                    <p>Loading...</p>
                </section>
            );
        }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />           
        </section>
        
        
    );
}

export default AllMeetupsPage;