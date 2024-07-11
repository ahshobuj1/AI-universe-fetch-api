import Bottle from '../bottle/Bottle';

const Bottles = ({tools}) => {
    return (
        <>
            {tools.map((tool) => (
                <Bottle key={tool.id} tool={tool} />
            ))}
        </>
    );
};

export default Bottles;
