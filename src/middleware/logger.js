
const logger = (store) => (next) => (action) => {
    console.group(action.type)
        console.log('action:', action)
        console.log()
        const returnValue = next(action)
        console.log('New Store State:', store.getState())
    console.group(action.type)
    return returnValue
}

export default logger;