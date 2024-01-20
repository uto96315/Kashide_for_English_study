

const Header = () => {
    const userName = "User01"
    return (
        <div className="w-full bg-pink-300 py-3 px-2">
            <div className="flex justify-between">
                <p className=" font-bold text-white">Kashide for English Study</p>
                <div className="text-white pr-4">{userName}</div>
            </div>
        </div>
    )
}

export default Header;