import React from 'react'
const VoteContext = React.createContext()

function useVote() {
    const context = React.useContext(VoteContext)
    if (!context) {
        throw new Error('Use vote must be used within a Vote Provider')
    }

    const [votes, setVotes] = context
    
    const onVoteClick = (candidate) => {
        setVotes({ ...votes, [candidate]: votes[candidate] + 1 })
    }
    return {
        context,
        votes,
        setVotes,
        onVoteClick,
    }
}

function VoteProvider(props) {
    const [votes, setVotes] = React.useState({
        Biden: 0,
        Trump: 0,
    })
    const value = React.useMemo(() => [votes, setVotes], [votes])
    return <VoteContext.Provider value={value} {...props}/>
}

export {useVote, VoteProvider}