export const Welcome = () => {

    const name = sessionStorage.getItem('user')
    return (
        <h1 className="text-purple-800 font-bold text-4xl text-right text-right p-4">Welcome {name}</h1>
    )
}