import Twitch from "./TwitchCard";
import "../css/tailwind.css";

export default{
    title: 'Deezy/Page',
    component: Twitch,
    argTypes: {
        backgroundColor: { control: 'color' },
        color: {control: 'color'},
    },
};



export const card = {
    args:{

    }
};