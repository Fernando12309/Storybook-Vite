import {emoteCard} from './EmoteCard';

export default {
    title: 'Deezy/Card',
    component: emoteCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export const GameOver = {
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
};