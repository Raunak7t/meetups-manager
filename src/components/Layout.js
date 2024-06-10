import MainNav from "./MainNav";

function Layout(props) {
  return (
    <>
      <MainNav />
      <main className="main-body">
        <div className="card-container">{props.children}</div>
      </main>
    </>
  );
}
export default Layout;
