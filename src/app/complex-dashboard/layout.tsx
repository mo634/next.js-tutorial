import React from 'react'

export default function layout({ children
    , user
    , analytics

}: any) {
    return (
        <div>
            {children}

            {/* render slots */}

            {user}


            {analytics}
        </div>
    )
}

