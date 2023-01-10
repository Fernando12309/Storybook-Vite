import React from "react";

import '../css/tailwind.css';

//updated fuction with object deconstruction in App.jsx
export default function EmoteCard({ unlocked, emoteName, imageAlt, imageUrl, backgroundColor, color }) {
  return (
    <div className={"emotecard"}
    style={backgroundColor && {backgroundColor}}>
      <img className="emote-image"  
      src={imageUrl} 
      alt={imageAlt} 
      />
      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold text-gray-800"
        style={color && {color}}>{emoteName}</h3>

        <p className="text-lg text-gray-600"
        style={color && {color}}>
          {unlocked} </p>
        
      </div>
    </div>
  );
};

// export const emoteCard = ({unlocked, emoteName, color, backgroundColor, imageAlt, imageUrl}) => {
//   return (
//     <div className={"emotecard"}
//     style={backgroundColor && {backgroundColor}}>
//       <img
//       className={"emote-image"}
//        src={imageUrl}
//        alt={imageAlt}/>
//       <div className="px-6 py-4">
//         <h3 className="text-xl font-semibold text-gray-800"
//         style={color && {color}}>
//           {emoteName}
//           </h3>

//         <p className="text-lg text-gray-600">{unlocked} </p>
        
//       </div>
//     </div>
//   );
// };

// emoteCard.proptypes = {
//   imagePath: PropTypes.string.isRequired,
//   altImage: PropTypes.string.isRequired,
//   emoteName: PropTypes.string.isRequired,
//   unlocked: PropTypes.string.isRequired,
// };

/* Original EmoteCard 
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
}; */