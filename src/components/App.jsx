import React from "react";
import Emotes from "../data/twitchEmotes";
import EmoteCard from "./EmoteCard";
import "../css/tailwind.css";

export default function Page({backgroundColor}) {
    return (
        <body class="bg-purple-400 " style={backgroundColor && {backgroundColor}}>
            <div>
                <div className="grid bg-teal-300 lg:grid-cols-2 2xl:grid-cols-5" >
                    <div className="max-w-md px-8 py-12 mx-auto mt-6 mb-5 text-center bg-gray-300 rounded-3xl sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2" >
                        <div className="xl:max-w-xl">
                            <img className=" h-[102] w-[102] inline" src="/img/logo.png" alt="logo" />
                                <h1 className="inline m-4 text-4xl font-extrabold">LordDeezy</h1>
                            <img className="object-center mt-6 rounded-lg shadow-xl h-70 w-96 sm:mt-8 sm:h-64 sm:w-full sm:object-cover lg:hidden"  
                                src="/img/gaming is not a crime.jpg" alt="not-a-crime" />
                            <h1 className="mt-6 text-2xl font-bold text-gray-800 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
                                Small Time 
                                <br className="hidden lg:inline" />
                                <span className="text-purple-500">
                                    Twitch Streamer.
                                </span>
                            </h1>
                            <p className="mt-3 text-gray-600 sm:mt-4 sm:text-xl">
                                Wassup everyone! I am a variety streamer that loves playing Apex regardless if it hurts my feelings.
                                I enjoy playing a lot of multiplayer games with my friend or the community but I also do enjoy single player games. I am trying to build a community where everyone is welcome.
                            </p>
                            <div className="mt-4 space-x-1 sm:mt-6">
                                <button className="btn btn-primary" href="https://www.twitch.tv/lorddeezy_">
                                    Watch Now
                                </button>
                                <button className="btn btn-secondary " href="https://discord.gg/pvHsCzty">
                                    Join Discord
                                </button>

                            </div>
                        </div>
                    </div>

                        <div className="relative hidden lg:block 2xl:col-span-3" >
                            <img className="absolute inset-0 object-cover object-center w-full h-full rounded-2xl" 
                            src="/img/gaming is not a crime.jpg" 
                            alt="not-a-crime" />
                        </div>
                
                </div>
                
                <div className="max-w-md px-8 py-8 mx-auto sm:max-w-xl lg:max-w-6xl lg:px-12">
                    <h2 className="text-2xl font-extrabold text-gray-900">
                        Lord Deezy's Emotes
                    </h2>
                    <p className="mt-2 font-semibold text-gray-700">
                        Subcribe to his twitch channel to gain access to these cool Emotes!
                    </p>
                    <div className="grid gap-6 mt-6 lg:grid-cols-2 xl:grid-cols-3">
                    {Emotes.map((emote) => (
                        <EmoteCard {...emote}  />
                    ))}
                    </div>
                </div>
            </div>
        </body>
    );
};