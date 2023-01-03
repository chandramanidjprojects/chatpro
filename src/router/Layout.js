import {NavLink,Outlet} from 'react-router-dom';

function Layout(){
  
  return <><div className="">
  <div className="col text-white"><NavLink to='/home'
       style={({isActive})=>isActive ? ({color:'red',textDecoration:'none'}):({color:'black',textDecoration:'none'})}
    >home</NavLink></div>
  <div className="col text-white"><NavLink to='/about'
  
    >about </NavLink></div>
  
</div>

    <div >
      <Outlet />
      
    </div>
    </>
}
export default Layout
