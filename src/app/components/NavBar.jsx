import { AppBar, Badge, Button, Grid, IconButton, Popover, Toolbar, useMediaQuery } from "@mui/material"
import { GridMenuIcon } from '@mui/x-data-grid';
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AccountCircleOutlined, Logout, ShoppingBagOutlined } from "@mui/icons-material";

export const NavBar = ({ pages }) => {

    const location = useLocation();
    const currentPage = pages.find(page => page.route === location.pathname);

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const [menuAnchor, setMenuAnchor] = useState(null);

    const handleMenuOpen = (event) => {
        setMenuAnchor(event.currentTarget);
    }

    const handleMenuClose = () => {
        setMenuAnchor(null);
    }

    return (
        <AppBar
            sx={{
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                bgcolor: 'App.white',
                height: '10vh'
            }}
        >
            <Toolbar>
                <Grid container
                    alignItems='center'
                    justifyContent='space-between'
                    spacing={0}
                >

                    <Grid item xs={4} >
                        <img src="/ElUniversalLogo.svg" width="100" height="70" />
                    </Grid>

                    {isSmallScreen ?
                        <Grid item>
                            <IconButton onClick={handleMenuOpen}>
                                <GridMenuIcon />
                            </IconButton>
                            <Popover
                                open={Boolean(menuAnchor)}
                                anchorEl={menuAnchor}
                                onClose={handleMenuClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                {pages.map((page) =>
                                    <Button fullWidth component={Link} to={page.route} sx={{
                                        color: 'primary.main',
                                        textTransform: 'capitalize',
                                        fontSize: '15px',
                                        height: '25px',
                                        bgcolor: 'transparent',
                                        '&:hover': {
                                            backgroundColor: 'primary.light',
                                            color: 'App.white'
                                        }
                                    }}>
                                        {page.name}
                                    </Button>
                                )}
                            </Popover>
                        </Grid>
                        :
                        <Grid item xs={8}>
                            <Grid container justifyContent='flex-end'>
                                {pages.map((page) =>
                                    <Grid item key={page.name} sx={{ ml: 1 }}>
                                        <Button component={Link} to={page.route} sx={{
                                            color: 'App.text',
                                            textTransform: 'capitalize',
                                            fontSize: '15px',
                                            borderRadius: '22px',
                                            height: '25px',
                                            bgcolor: 'transparent',
                                            '&:hover': {
                                                backgroundColor: 'primary.light',
                                                color: 'App.white'
                                            }
                                        }}>
                                            {page.name}
                                        </Button>
                                    </Grid>
                                )}
                            </Grid>

                        </Grid>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}