const persistPlugin = () => {
    return {
        onStoreCreated(store) {
            if (localStorage.getItem('___persist')) {
                const initialState = JSON.parse(localStorage.getItem('___persist'));
                store.dispatch({ type: '__INIT_STATE', payload: initialState })
            }
            store.subscribe(() => {
                setTimeout(() => {
                    try {
                        localStorage.setItem('___persist', JSON.stringify(store.getState()))
                    } catch { }
                }, 1000)
            })
        }
    }
}

export default persistPlugin;