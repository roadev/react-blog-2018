import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { HeaderContainer, StyledTypography } from './styles';

const Header = () => (
  <HeaderContainer>
    <AppBar position="static" color="primary">
      <Toolbar>
        <StyledTypography variant="title" color="inherit">
            DevhackBlog
        </StyledTypography>
        <Button href="/" color="inherit">Home</Button>
        <Button href="/posts" color="inherit">Posts</Button>
        <Button href="/tags" color="inherit">Tags</Button>
        <Button href="/contact" color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  </HeaderContainer>
);

export default Header;
