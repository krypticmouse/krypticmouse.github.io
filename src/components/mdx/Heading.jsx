const Heading = {
    H1: ({ children }) => <h1 className="text-4xl font-extrabold">{children}</h1>,
    H2: ({ children }) => <h2 className="text-3xl font-extrabold">{children}</h2>,
    H3: ({ children }) => <h3 className="text-2xl font-bold">{children}</h3>,
    H4: ({ children }) => <h4 className="text-xl font-bold">{children}</h4>,
    H5: ({ children }) => <h5 className="text-lg font-semibold">{children}</h5>,
    H6: ({ children }) => <h6 className="text-md font-semibold">{children}</h6>,
};

export default Heading;