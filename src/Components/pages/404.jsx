

import { NavLink } from 'react-router-dom';

import './pages.css';
import './pagesMobile.css';

const Page404 = () => {
  return (
      <div>
        
          <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px' , 'color':'#fff'}}>Page doesn't exist</p>
          <NavLink  style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'color':'#fff', 'fontSize': '24px', 'marginTop': '30px'}} to="/eventos-deportivos">Back to main page</NavLink>
      </div>
  )
}

export default Page404; 