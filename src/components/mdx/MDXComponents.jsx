// components/MDXComponents.jsx
import Link from 'next/link';

const MDXComponents = {
    h1: (props) => <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">{props.children}</h1>,
    h2: (props) => <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold">{props.children}</h2>,
    h3: (props) => <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{props.children}</h3>,
    h4: (props) => <h4 className="text-md sm:text-lg md:text-xl font-bold">{props.children}</h4>,
    h5: (props) => <h5 className="text-sm sm:text-md md:text-lg font-semibold">{props.children}</h5>,
    h6: (props) => <h6 className="text-xs sm:text-sm md:text-md font-semibold">{props.children}</h6>,
    p: (props) => <p className="text-sm sm:text-md md:text-lg text-slate-600 my-4">{props.children}</p>,
    blockquote: (props) => (
    <blockquote className="border-l-4 mx-2 sm:mx-6 md:mx-12 px-4">
        <p className="text-sm sm:text-md md:text-lg text-sky-700 italic my-4">{props.children}</p>
    </blockquote>
    ),
    ol: (props) => <ol className="list-decimal list-inside my-4">{props.children}</ol>,
    ul: (props) => <ul className="list-disc list-inside my-4">{props.children}</ul>,
    li: (props) => <li className="text-sm sm:text-md md:text-lg text-slate-600 my-2">{props.children}</li>,
    a: (props) => (
        <Link href={props.href}>
            {props.children}
        </Link>
    ),
    hr: (props) => <hr className="my-4" />,
    inlineCode: (props) => <code className="text-sm sm:text-md md:text-lg bg-gray-100 px-2 py-1 rounded-md">{props.children}</code>,
    code: (props) => <code className="text-sm sm:text-md md:text-lg bg-gray-100 px-2 py-1 rounded-md">{props.children}</code>,
};


export default MDXComponents;
