import { MDXProvider } from '@mdx-js/react';
import Heading from '../mdx/Heading';
import Para from '../mdx/Para';
import Quotes from '../mdx/Quotes';
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import Head from 'next/head';

const components = {
	h1: Heading.H1,
	h2: Heading.H2,
	h3: Heading.H3,
	h4: Heading.H4,
	h5: Heading.H5,
	h6: Heading.H6,
	p: Para,
	blockquote: Quotes,
};

function Layout({ children, ...props }) {
	return (
		<>
			<Head>
				<title>{props.meta.title}</title>
				<meta name="description" content={props.meta.title} />
			</Head>
			<Header />
			<MDXProvider components={components}>
				<div className="w-3/5 mx-auto p-6 blog text-slate-600 mb-8">
					<h1 className="text-center text-4xl font-extrabold">{props.meta.title}</h1>
					{children}
				</div>
			</MDXProvider>
			<Footer />
		</>
	)
}

export default Layout;