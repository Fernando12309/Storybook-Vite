import React from "react";
import clsx from "clsx";
//import Link from 'next/link';

const baseStyles = {
    solid:
    'inline-block px-5 py-3 rounded-xl uppercase tracking-wider font-semibold text-sm sm:text-base hover:-translate-y-0.5 transform transition focus:outline-none focus:ring focus:ring-offset-2 focus:ring-opacity-50',
    outline:
    'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none',
}

const variantStyles = {
    solid: {
        purple:
        'bg-purple-600 text-white hover:bg-purple-400 hover:text-purple-100 active:bg-purple-800 active:text-purple-300 focus-visible:outline-purple-900',
        blue: 
        'bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
    },
    outline: {
        purple:
        'ring-purple-200 text-purple-700 hover:text-purple-900 hover:ring-purple-300 active:bg-purple-100 active:text-purple-600 focus-visible:outline-blue-600 focus-visible:ring-purple-300',
        
    },
}

export function Button ({variant = 'solid', color = 'slate', className, ...props}) {
    return (
        <button 
          className={clsx(baseStyles[variant], 
            variantStyles[variant][color], className)}
            {...props}
        />
    )
}

export function ButtonLink({variant = 'solid', color = 'slate', href, className, ...props}) {
    return (
      <Link href={href}>
        <a
          className={clsx(
            baseStyles[variant],
            variantStyles[variant][color],
            className
          )}
          {...props}
        />
      </Link>
    )
  }

// export const Button = ({primary, secondary, third, label, color, backgroundColor, ...props}) => {
//     let mode = '';
//     if (primary == true){
//          mode = 'btn-primary';
//     } else if (secondary == true){
//          mode = 'btn-secondary';
//     }else if (third == true){
//          mode = 'btn-gradient';
//     }

//     return (
//         <button type="button"
//         className={['btn', mode].join(' ')} 
        
//         style={backgroundColor && {color,backgroundColor}} 
//         {...props}
//         >
//             {label}
//         </button>
//     );
// };

// Button.proptypes = {
//     primary: PropTypes.bool,
//     /**
//      * What background color to use
//      */
//     backgroundColor: PropTypes.string,
//     /**
//      * Button contents
//      */
//     label: PropTypes.string.isRequired,
//     /**
//      * Optional click handler
//      */
//     onClick: PropTypes.func,
//   };
  
//   Button.defaultProps = {
//     backgroundColor: null,
//     primary: false,
//     onClick: undefined,
//   };
  