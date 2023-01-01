import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { api } from "../services/api";
import { database } from "../database";
import { User as ModelUser } from "../database/model/User"

type AuthContextProviderProps = {
  children: ReactNode;
}

type User = {
  id: string;
  user_id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
  token: string;
}

type SignInCredentials = {
  email: string;
  password: string;
}

type AuthContextData = {
  user: User;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => Promise<void>;
  updateUser: (user: User) => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext({} as AuthContextData);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [data, setData] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);

  const signIn = async ({ email, password }: SignInCredentials) => {

    try {
      const response = await api.post('/sessions', {
        email,
        password
      });
  
      const { token, user } = response.data;
      
      api.defaults.headers.authorization = `Bearer ${token}`;

      await database.write(async () => {
        const userCollection = database.get<ModelUser>('users');
        const userData = await userCollection.create((newUser) => {
          newUser.user_id = user.id,
          newUser.name = user.name,
          newUser.email = user.email,
          newUser.driver_license = user.driver_license,
          newUser.avatar = user.avatar,
          newUser.token = token
        });

        setData({
          id: userData.id,
          user_id: userData.user_id,
          name: userData.name,
          email: userData.email,
          avatar: userData.avatar,
          driver_license: userData.driver_license, 
          token,
        })

        console.log(userData)
        
      })
    } catch (error) {
      console.log(error)
      throw new Error(error);
    }
  }

  const signOut = async () => {

    try {
      await database.write(async () => {
        const users = await database.get('users').find(data.id)
        await users.destroyPermanently();
      })

      setData({} as User)

    } catch (error) {
      throw new Error(error);
    }
  }

  const updateUser = async (user: User) => {

    try {
      const userCollection = database.get<ModelUser>('users');
      await database.write( async () => {
        const userSelected = await userCollection.find(user.id);

        await userSelected.update((userData) => {
          userData.name = user.name,
          userData.driver_license = user.driver_license,
          userData.avatar = user.avatar
        })
      })

      setData(user);

    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    const loadUserData = async () => {
      const userCollection = database.get<ModelUser>('users');
      const response = await userCollection.query().fetch();

      if (response.length > 0) {
        const userData = response[0]._raw as unknown as User;
        api.defaults.headers.authorization = `Bearer ${userData.token}`;
        setData(userData);
        setLoading(false);
      }
    }
    
    loadUserData();
  }, [])

  return (
    <AuthContext.Provider value={{ 
      user: data,
      signIn,
      signOut,
      updateUser,
      loading
     }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
}