
export type UserDataType = {
  success: boolean,
  token: string,
  username: string
}
export type UserContextType = { userData: UserDataType; setUserData: React.Dispatch<React.SetStateAction<UserDataType>>; } | null

