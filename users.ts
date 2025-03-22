export interface User{
    id: string,
    name: string,
    email: string,
    password: string;
}


export const users: User[]=[
    {
        id: "1",
        name: "Enamul Marzun",
        email: "marzun9620@gmail.com",
        password: "12345678"
    }
]

export const loginUser=(user: User)=>{

}

export const findUser=(id: string)=>{

}

export const findUserByEmailPassword=(email: string, password: string)=>{

}

export const deleteUsers=(id: string)=>{
    
}
