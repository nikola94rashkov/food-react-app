const GridColumns = ({children}) => {
    return (
        <div className="grid__col grid__col--1of4">
            { children }
        </div>
    );
}

export default GridColumns