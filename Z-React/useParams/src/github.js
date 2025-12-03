import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Github(){

    const {name} = useParams();
    const [profile, setProfile] = useState(null);

    async function fetchUser(){
        const res = await fetch(`https://api.github.com/users/${name}`);
        const data = await res.json();
        setProfile(data);
    }

    useEffect(() => {
        fetchUser();
    }, [name]); // Add name here so it refetches when the URL changes


    return (
        <>
            <h1>My Github Profile</h1>
            <div>
                <img 
                    src={profile?.avatar_url} 
                    alt="avatar"
                    width="100px" 
                    height="100px"
                />
                <h2>{profile?.login}</h2>
            </div>
        </>
    )
}