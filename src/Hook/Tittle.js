import { useEffect } from 'react';

const Tittle = title => {
    useEffect(() => {
        document.title = ` ${title} -Doctors-Portal`;
    }, [title])
}


export default Tittle;