import React from "react";
import PropTypes from 'prop-types';
import '../css/tailwind.css';

export default function EmoteCard({ emote }) {
  return (
    <div className={"emotecard"}>
      <img className="emote-image" 
      src={emote.imageUrl} 
      alt={emote.imageAlt} />
      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold text-gray-800">{emote.emoteName}</h3>

        <p className="text-lg text-gray-600">{emote.unlocked} </p>
        
      </div>
    </div>
  );
};

export const emoteCard = ({label1, label2, color, backgroundColor, imagePath, altImage}) => {
  return (
    <div className={"emotecard"}
    style={backgroundColor && {backgroundColor}}>
      <img
      className={"emote-image"}
       src={imagePath}
       alt={altImage}/>
      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold text-gray-800"
        style={color && {color}}>
          {label1}
          </h3>

        <p className="text-lg text-gray-600">{label2} </p>
        
      </div>
    </div>
  );
};

emoteCard.proptypes = {
  imagePath: PropTypes.string.isRequired,
  altImage: PropTypes.string.isRequired,
  label1: PropTypes.string.isRequired,
  label2: PropTypes.string.isRequired,
};

