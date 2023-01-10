import EmoteCard from './EmoteCard';


export default {
    title: 'Deezy/Card',
    component: EmoteCard,
    argTypes: {
        backgroundColor: { control: 'color' },
        color: {control: 'color'},
    },
};


//  const CardTemplate = ({args}) => (
//     Emotes.map((emote) => (
//         <EmoteCard {...emote}  />
//     ))
//  );

//  export const Card = CardTemplate.bind({});

export const GameOver = {
    args: {
        imageUrl: "../img/GameOver112.png",
        imageAlt: "game over man",
        emoteName: "Game Over",
        unlocked: "Tier 1 Sub",
    }
};
export const Heart = {
    args: {
        imageUrl: "../img/heart.png",
        imageAlt: "Me with a Heart",
        emoteName: "Me with a Heart",
        unlocked: "Tier 2 Sub",
    }
};
export const Hype = {
    args: {
        imageUrl: "../img/hype112.png",
        imageAlt: "Hype Hype",
        emoteName: "Hype",
        unlocked: "Tier 1 Sub",
    }
};

export const Lag ={
    args: {
        emoteName: "Lag",
        unlocked: "Tier 1 Sub",
        imageUrl: "/img/Lag112.png",
        imageAlt: "Laaaaaaag",
    }
};
export const Rage = {
    args: {
        emoteName: "Rage Quit",
        unlocked: "Tier 1 Sub",
        imageUrl: "/img/RageQuit112.png",
        imageAlt: "Rage",
    }
};
export const RIP = {
    args: {
        emoteName: "RIP",
        unlocked: "Tier 3 Sub",
        imageUrl: "/img/rip.png",
        imageAlt: "Rest in peace",
    }
};
export const Smoked = {
    args: {
        emoteName: "Smoked",
        unlocked: "Tier 1 Sub",
        imageUrl: "/img/Smoked112.png",
        imageAlt: "Damn you got smoked",
    }
};
// export function cardCount() {
//     //console.log(Emotes.length)
//     for (let i = 0; i < Emotes.length; i++ ){
        
//         return (
            
//         );
//         //return counter = CardTemplate.bind({});
//     }
// };


//  export const Empty = CardTemplate.bind({});
//  Empty.args = {emote: []};

//  export const OneCard = CardTemplate({});
//  OneCard.args = {...Emotes};

// let args = Emotes.map(args);

// const Template = args => <EmoteCard {...Emotes}/>

// export const Primary = Template.bind({})

/* for function to spit out the export skel of story

/*{twitchEmotes.map((emote) => (
    <EmoteCard emote={emote} key={emote.emoteName} />
    ))}*/
/*export const GameOver = {
    args: {
        imagePath: "../img/GameOver112.png",
        altImage: "game over man",
        label1: "Game Over",
        label2: "Tier 1 Sub",
    }
};
export const Heart = {
    args: {
        imagePath: "../img/heart.png",
        altImage: "Me with a Heart",
        label1: "Me with a Heart",
        label2: "Tier 2 Sub",
    }
};
export const Hype = {
    args: {
        imagePath: "../img/hype112.png",
        altImage: "Hype Hype",
        label1: "Hype",
        label2: "Tier 1 Sub",
    }
};*/