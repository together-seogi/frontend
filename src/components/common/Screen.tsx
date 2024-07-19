import {ReactNode} from "react";

export default function Screen({children}: {children: ReactNode}) {
    return(
        <div style={{
            display: 'flex',
            padding: '0 20px',
            height: '100dvh',
            width: '100%',
            flexDirection: 'column',
        }}>
            {children}
        </div>
    )
}
