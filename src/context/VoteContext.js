import React from 'react'
const VoteContext = React.createContext()

function useVote() {
    const context = React.useContext(VoteContext)
    if (!context) {
        throw new Error('Use vote must be used within a Vote Provider')
    }
    return context
}

function VoteProvider(props) {
    const [votes, setVotes] = React.useState({
        Biden: 0,
        Trump: 0
    })
    return <VoteContext.Provider value={votes} {...props}/>
}

export {useVote, VoteProvider}