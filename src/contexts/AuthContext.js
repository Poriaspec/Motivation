import React, { Children, useContext } from 'react'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export  function AuthProvider() {
  return (
    <div>
    <AuthContext.Provider>
        {Children}
    </AuthContext.Provider>
    </div>
  )
}
