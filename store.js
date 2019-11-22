module.exports = {
    store (initialState) {
        let state = initialState;

        function setState(data) {
            state = {
                ...state,
                ...data
            }
        }

        function getState() {
            return state;
        }

        return {
            setState, getState
        }
    },

    componentStore(store) {
        let props;

        function setProps() {
            props = store.getState();
        }

        setProps();

        const getProps = () => props;

        return {
            setProps,
            getProps,
        }
    }
}