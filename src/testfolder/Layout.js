import { NavLink, Outlet } from "react-router-dom"

function Layout(){
  return <>
  <div style={{position:'relative',top:0,left:0}}>
    <h6>im h6 tag</h6>
    <div style={{position:'absolute',top:0,left:0}}>
      <Outlet />
    </div>
    <Outlet />
  </div>
  <div className="row bg-dark mt-5 fixed-top">
    <div className="col text-white"><NavLink to='/home'>home</NavLink></div>
    <div className="col text-white"><NavLink to='/about'>about</NavLink></div>
    <div className="col text-white"><NavLink to='/contact'>contact</NavLink></div>
    <div className="col text-white"><NavLink to='/post'>post</NavLink></div>
  </div>

  </>
}
export default Layout