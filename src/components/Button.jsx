import React from 'react'

const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
    if (href) {
        return (
            <a href={href}
                target={target}
                className={"btn btn-primary" + classes}
            >
                {label}

                {icon ?
                    <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : undefined
                }
            </a>
        )
    }else{

        return (
            <div className={"btn btn-primary " + classes}>
                {label}

                {icon ?
                    <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : undefined
                }
            </div>
        )
    }
}


const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
    if (href) {
        return (
            <a href={href}
                target={target}
                className={"btn btn-outline " + classes}
            >
                {label}

                {icon ?
                    <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : undefined
                }
            </a>
        )
    }else{

        return (
            <div className={"btn btn-outline " + classes}>
                {label}

                {icon ?
                    <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : undefined
                }
            </div>
        )
    }
}




export  {
    
    ButtonPrimary,
    ButtonOutline
}