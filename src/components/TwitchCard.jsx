import React from "react";
import "../css/tailwind.css";


export default function Twitch({backgroundColor, color}) {
 return (
        <div className="card-twitch " 
            style={backgroundColor && {backgroundColor}}>
            <div className="xl:max-w-xl">
                <img className=" h-[102] w-[102] inline" src="/img/logo.png" alt="logo" />
                <h1 className="inline m-4 text-4xl font-extrabold"
                    style={{color}}>LordDeezy</h1>
                    <img className="object-center mt-6 rounded-lg shadow-xl h-70 w-96 sm:mt-8 sm:h-64 sm:w-full sm:object-cover lg:hidden"  
                    src="/img/gaming is not a crime.jpg" alt="not-a-crime" />
                    <h1 className="mt-6 text-2xl font-bold text-gray-800 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
                    Small Time 
                    <br className="hidden lg:inline" />
                    <span className="text-purple-500">
                        Twitch Streamer.
                    </span>
                </h1>
                <p className="mt-3 text-gray-600 sm:mt-4 sm:text-xl"
                style={color && {color}}>
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
    );
};