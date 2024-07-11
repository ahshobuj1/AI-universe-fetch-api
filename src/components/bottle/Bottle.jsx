const Bottle = ({tool}) => {
    const {published_in, name, description, image, features, links} = tool;
    console.log(tool);
    return (
        <div className="p-2 space-y-1 border-2 border-red-600 rounded-xl">
            <div className="w-80 pb-6">
                <img src={image} alt={name} className="rounded-xl w-80" />
            </div>

            <h2 className="text-2xl font-semibold">Features</h2>
            <ol className="list-disc pl-5 text-[#585858] pb-6">
                {features.map((item) => (
                    <li>{item}</li>
                ))}
            </ol>
            <hr className="text-[#585858] pb-6 " />

            <h2 className="text-2xl font-semibold">{name}</h2>
            <div className="pl-3">
                <p className="text-base text-[#585858]">{published_in}</p>
                <button class="btn btn-neutral btn-sm">Bookmark</button>
            </div>
        </div>
    );
};

export default Bottle;
