// components/MDXComponents.jsx
import Link from 'next/link';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import { CopyBlock, dracula } from "react-code-blocks";
import { Table } from '@mantine/core';

function CustomCodeBlock({ code, language }) {
    return (
        <div className="overflow-x-scroll md:overflow-x-auto my-4 text-sm sm:text-base md:text-lg">
            { language==="language-text" 
                ? (
                    <div className='my-4'>
                        <CopyBlock
                            text={code}
                            language="text"
                            showLineNumbers={false}
                            theme={dracula}
                            codeBlock
                        />
                    </div>
                ) 
                : (
                    <div className='my-4'>
                        <CopyBlock
                            text={code}
                            language="python"
                            showLineNumbers={true}
                            startingLineNumber={1}
                            theme={dracula}
                            codeBlock
                        />
                    </div>
                )
            }
        </div>
    );
}

const MDXComponents = {
    h1: (props) => <h1 className="mb-4 mt-8 text-2xl sm:text-3xl md:text-4xl font-extrabold">{props.children}</h1>,
    h2: (props) => <h2 className="mb-4 mt-8 text-xl sm:text-2xl md:text-3xl font-extrabold">{props.children}</h2>,
    h3: (props) => <h3 className="mb-4 mt-8 text-lg sm:text-xl md:text-2xl font-bold">{props.children}</h3>,
    h4: (props) => <h4 className="mb-4 mt-8 text-md sm:text-lg md:text-xl font-bold">{props.children}</h4>,
    h5: (props) => <h5 className="mb-4 mt-8 text-sm sm:text-md md:text-lg font-semibold">{props.children}</h5>,
    h6: (props) => <h6 className="mb-4 mt-8 text-xs sm:text-sm md:text-md font-semibold">{props.children}</h6>,
    p: (props) => <p className="text-sm sm:text-md md:text-lg text-slate-600 my-4">{props.children}</p>,
    blockquote: (props) => (
    <blockquote className="border-l-4 mx-2 sm:mx-6 md:mx-12 px-4">
        <p className="text-sm sm:text-md md:text-lg text-sky-700 italic my-4">{props.children}</p>
    </blockquote>
    ),
    ol: (props) => <ol className="text-sm sm:text-md md:text-lg text-slate-600 list-decimal list-inside my-4 ml-4 space-y-4 list-inside">{props.children}</ol>,
    ul: (props) => <ul className="text-sm sm:text-md md:text-lg text-slate-600 list-disc list-inside my-4 ml-4 space-y-4 list-inside">{props.children}</ul>,
    a: (props) => (
        <Link href={props.href}>
            {props.children}
        </Link>
    ),
    hr: (props) => <hr className="my-4" />,
    inlineCode: (props) => <code className="text-sm sm:text-md md:text-lg bg-gray-100 px-2 py-1 rounded-md">{props.children}</code>,
    code: (props) => <CustomCodeBlock code={props.children} language={props.className} />,
    InlineMath,
    BlockMath,
    Table,
    img: (props) => <img className="mx-auto my-4" src={props.src} alt={props.alt} />,
};

export default MDXComponents;
