import { createContext, useState } from 'react'
import { getItem } from '../utils/storage'

type AppContextType = {
  userData: any
  setUserData: (value: any) => void
  openUserForm: boolean
  setOpenUserForm: (value: boolean) => void
  openModalLogout: boolean
  setOpenModalLogout: (value: boolean) => void
  openMovieModal: boolean
  setOpenMovieModal: (value: boolean) => void
  selectedMovieId: string | null
  setSelectedMovieId: (value: string) => void
  themeLocalStorage: string
  setThemeLocalStorage: (value: string) => void
  searchQuery: string
  setSearchQuery: (value: string) => void
  favorites: any
  setFavorites: (value: any) => void
}

export const AppContext = createContext<AppContextType>({
  userData: {},
  setUserData: () => {},
  openUserForm: false,
  setOpenUserForm: () => {},
  openModalLogout: false,
  setOpenModalLogout: () => {},
  openMovieModal: false,
  setOpenMovieModal: () => {},
  selectedMovieId: '',
  setSelectedMovieId: () => {},
  themeLocalStorage: 'light',
  setThemeLocalStorage: () => {},
  searchQuery: '',
  setSearchQuery: () => {},
  favorites: [],
  setFavorites: () => {}
})

export default function AppProvider({ children }: any) {
  const [userData, setUserData] = useState({})
  const [openUserForm, setOpenUserForm] = useState(false)
  const [openModalLogout, setOpenModalLogout] = useState(false)
  const [openMovieModal, setOpenMovieModal] = useState(false)
  const [selectedMovieId, setSelectedMovieId] = useState('')
  const [themeLocalStorage, setThemeLocalStorage] = useState(getItem('theme') || 'light')
  const [searchQuery, setSearchQuery] = useState('')
  const [favorites, setFavorites] = useState([])

  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,
        openUserForm,
        setOpenUserForm,
        openModalLogout,
        setOpenModalLogout,
        openMovieModal,
        setOpenMovieModal,
        selectedMovieId,
        setSelectedMovieId,
        themeLocalStorage,
        setThemeLocalStorage,
        searchQuery,
        setSearchQuery,
        favorites,
        setFavorites
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
