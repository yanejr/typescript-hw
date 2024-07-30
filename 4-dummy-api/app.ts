interface Response {
    OK: boolean,
    STATUS: number;
    json(): Promise<any>
}

enum Roles {
    moderator,
    admin,
    user
}

enum Gender {
    female,
    male
}

type adress = {
    address: string,
    city: string,
    state: string,
    stateCode: string,
    postalCode: string,
    coordinates: {
        lat: number,
        lng: number
    },
    country: string
}

interface UserData {
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    gender: Gender,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodgroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: { color: string, type: string },
    ip: string,
    address: adress,
    macAddress: string,
    university: string,
    bank: {
        cardExpire: string,
        cardNumber: string,
        cardType: string,
        currency: string,
        iban: string
    },
    company: {
        department: string,
        name: string,
        title: string,
        address: adress
    },
    ein: string,
    ssn: string,
    userAgent: string,
    crypto: {
        coin: string,
        wallet: string,
        network: string
    },
    role: Roles

}

interface Data {
    users: UserData[],
    total: number,
    skip: number,
    limit: number
}

interface ErrorResponse {
    error: string;
    statusCode: number;
}
async function fetchData(url: string): Promise<Data | null> {
    try {
        const res: Response = await fetch(url);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data: Data = await res.json();
        console.log(data)
        return data;
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error(error)
        }
        return null
    }

}

