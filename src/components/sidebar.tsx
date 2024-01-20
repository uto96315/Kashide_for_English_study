import menuData from "@/data/menuData";


const Sidebar = () => {
    return (
        <div className="shadow">
            {menuData.map((data, index) => (
                <div key={index} className="flex px-10 items-center py-2 border-b border-gray-200 space-x-2">
                    <div className=" text-gray-500">{data.icon}</div>
                    <div className="text-gray-500">{data.name}</div>
                </div>
            ))}
        </div>
    )
}

export default Sidebar;