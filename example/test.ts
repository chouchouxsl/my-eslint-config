interface IPerson {
    name: string
    age: number
    sex: 'male' | 'female'
}

const getPerson = (): IPerson => {
    return {
        name: 'John',
        age: 18,
        sex: 'male'
    }
}

getPerson()
