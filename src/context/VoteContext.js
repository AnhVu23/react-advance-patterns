import React, {useContext} from 'react'
const VoteContext = React.createContext()

function useVote() {
    const context = React.useContext(VoteContext)
}

function VoteProvider(props) {
    const [votes, setVotes] = React.useState({
        Biden: 0,
        Trump: 0
    })
    return <VoteContext.Provider value={votes} {...props}/>
}

export {useVote, VoteProvider}