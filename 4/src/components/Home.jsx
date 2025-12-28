import { useState } from "react";

export default function Home() {
    const [input, setInput] = useState("");
    const [members, setMembers] = useState([]);
    const [search, setSearch] = useState("");
    const [mode, setMode] = useState("add"); // add | search | display

    function addUser() {
        if (!input) return;
        setMembers([...members, input]);
        setInput("");
        setMode("");
    }

    const filteredMembers = members.filter((m) =>
        m.toLowerCase().includes(search.toLowerCase())
    );

    function setNew(){
        setMembers([]);
    }

    return (
        <div className="min-h-screen bg-linear-to-br flex flex-col items-center py-10">

            {/* Header */}
            <h1 className="text-3xl font-bold mb-8 tracking-wide">
                User Details
            </h1>

            <div className="flex gap-4 mb-8">
                <button
                    onClick={setNew}
                    className="px-6 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 transition"
                >
                    RE-RENDER
                </button>

                <button
                    onClick={() => setMode("add")}
                    className="px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
                >
                    Add User
                </button>

                <button
                    onClick={() => setMode("search")}
                    className="px-6 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 transition"
                >
                    Search
                </button>

                <button
                    onClick={() => setMode("display")}
                    className="px-6 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
                >
                    Display All
                </button>
            </div>

            <div className="w-full max-w-md bg-slate-900/70 backdrop-blur rounded-2xl p-6 shadow-xl">

                {mode === "add" && (
                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Enter name"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        />
                        <button
                            onClick={addUser}
                            className="py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
                        >
                            Add User
                        </button>
                    </div>
                )}

                {mode === "search" && (
                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Search name"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                        />

                        <ul className="space-y-2">
                            {filteredMembers.map((m, i) => (
                                <li
                                    key={i}
                                    className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700"
                                >
                                    {m}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {mode === "display" && (
                    <ul className="space-y-2">
                        {members.map((m, i) => (
                            <li
                                key={i}
                                className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white"
                            >
                                {m}
                            </li>
                        ))}
                    </ul>
                )}

                {mode == ''}
            </div>
        </div>
    );
}
