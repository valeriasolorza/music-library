import {createContext} from 'react'

export const DataContext = createContext({
    term: '',
    handleSearch: () => {}
})

export default DataContext