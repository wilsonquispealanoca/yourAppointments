import Footer from "./footer";
import Meta from "./meta";

function Layout({children}) {
  return (
		<>
			<Meta/>
			<div className="min-h-screen">
				<main>{children}</main>
			</div>
			<Footer/>
		</>
  );
}

export default Layout;