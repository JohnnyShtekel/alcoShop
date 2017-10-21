import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';
import { Link, IndexLink } from 'react-router';



const styles = {
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontWeight: 800,
  fontSize: 20 + 'px',
  color: '#08489D',
    marginBottom: 500 + 'px'
};

const AdminMenu = (props) => {

  return (
    <Navbar style={styles} fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a  href="#"><img src="http://www.whichcraft.com/wp-content/uploads/2015/05/WhichCraftLogoMediumGrey.png" weign="80" height="80"/>AlcoShop</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullLeft>
          <NavItem eventKey={1} href="#/admin/productcontrol">
          <button>
            <i className="ion-briefcase"></i>
          </button>
        </NavItem>


      </Nav>
      <Navbar.Form pullRight>
        <FormGroup>
          <FormControl className='search'
            type="text" placeholder="Search"
            onKeyPress={props.onSearch}/>
        </FormGroup>
      </Navbar.Form>

    </Navbar>
  );
};
export default AdminMenu;
