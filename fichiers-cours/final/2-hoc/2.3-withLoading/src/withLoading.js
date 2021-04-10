import { useState, useEffect } from 'react';

const Loading = () => <p>En cours de chargement ...</p>

const withLoading = Component => props => {
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 2500)
    }, [])
    return isLoading ? <Loading /> : <Component {...props} />
}
export default withLoading;