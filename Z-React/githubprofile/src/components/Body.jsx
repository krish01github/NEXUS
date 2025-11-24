import { useEffect, useState } from "react";

// https://api.github.com/users/per_page=${count} // {count} ? 
// https://api.github.com/users/taylorotwell
// https://api.github.com/users/since=6000&per_page=20

function Body() {
    const [Profile, setProfile] = useState([]);
    const [numberOfProfile, setnumpro] = useState('');
    async function genProfile(profileCount) {
        const promise1 = await fetch(`https://api.github.com/users?per_page=${profileCount}`);
        const data = await promise1.json(); // convert to json
        setProfile(data);
    }
    // This will work at last s
    useEffect(() => {
        genProfile(10);
    }, []);//one time.

    return (
        <div className="main-cont">
            {/* Okay, YOU (the developer) are controlling this input. So I will NOT change the value myself. */}
            <input type="text" placeholder="Enter a number.." value={numberOfProfile} onChange={(e)=>{setnumpro(e.target.value)}}/>
            <button id="search" onClick={()=>genProfile(Number(numberOfProfile))}>Search</button>
            <div className="griding">
                {
                    // Json, .map() return array ! jsx can read array and display all.
                    // If profile didn't get fetch then it won't display
                    Profile.map(value => {
                        return (
                            <div key={value.id} className="cards">
                                <img src={value.avatar_url} alt="Not-Found" />
                                <h2>{value.login}</h2>
                                <a href={value.html_url} target="_blank">Profile</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body;