import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function GithubCard() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users/LeonFen03')
            .then((response) => response.json())
            .then((data) => setUserData(data));
    }, []);

    if (!userData) return <div>Loading...</div>;
    console.log(userData)
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={userData.avatar_url} />
            <Card.Body>
                <Card.Title>{userData.login}</Card.Title>
                <Card.Text>
                    {userData.bio}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default GithubCard;
