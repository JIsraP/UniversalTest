import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText, ListItemIcon, Avatar, Grid, Box, ListItemButton } from '@mui/material';

export const APICall = () => {
    // const [teams, setTeams] = useState([]);
    // const [players, setPlayers] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState(null);

    // useEffect(() => {
    //     const fetchTeams = async () => {
    //         try {
    //             const response = await fetch(`https://v1.american-football.api-sports.io/teams?league=1&season=2020`, {
    //                 method: "GET",
    //                 headers: {
    //                     "x-rapidapi-host": "v1.american-football.api-sports.io",
    //                     "x-rapidapi-key": "19ae5326c631e1499ad80aae692eef10"
    //                 }
    //             });
    //             const data = await response.json()
    //             const dataTeam = data.response
    //             setTeams(dataTeam);
    //         } catch (error) {
    //             console.error('Error fetching teams:', error);
    //         }
    //     };

    //     fetchTeams();
    // }, []);

    // useEffect(() => {
    //     const fetchPlayers = async () => {
    //         if (selectedTeam) {
    //             try {
    //                 const response = await fetch(`https://v1.american-football.api-sports.io/players?season=2020&team=${selectedTeam.id}`, {
    //                     method: "GET",
    //                     headers: {
    //                         "x-rapidapi-host": "v1.american-football.api-sports.io",
    //                         "x-rapidapi-key": "19ae5326c631e1499ad80aae692eef10"
    //                     }
    //                 });
    //                 const data = await response.json()
    //                 const dataPlayer = data.response
    //                 setPlayers(dataPlayer);
    //             } catch (error) {
    //                 console.error('Error fetching players:', error);
    //             }
    //         }
    //     };

    //     fetchPlayers();
    // }, [selectedTeam]);

    const teams = [
        {
            id: 1,
            name: "Las Vegas Raiders",
            code: "LV",
            city: "Las Vegas",
            coach: "Antonio Pierce (interim)",
            owner: "Carol and Mark Davis",
            stadium: "Allegiant Stadium",
            established: 1960,
            logo: "https://media.api-sports.io/american-football/teams/1.png",
            country: {
                name: "USA",
                code: "US",
                flag: "https://media.api-sports.io/flags/us.svg",
            }
        },
        {
            id: 2,
            name: "Jacksonville Jaguars",
            code: "JAX",
            city: "Jacksonville",
            coach: "Doug Pederson",
            owner: "Shahid Khan",
            stadium: "EverBank Stadium",
            established: 1995,
            logo: "https://media.api-sports.io/american-football/teams/2.png",
            country: {
                name: "USA",
                code: "US",
                flag: "https://media.api-sports.io/flags/us.svg"
            }
        },
        {
            id: 3,
            name: "New England Patriots",
            code: "NE",
            city: "Foxborough",
            coach: "Bill Belichick",
            owner: "Robert Kraft",
            stadium: "Gillette Stadium",
            established: 1960,
            logo: "https://media.api-sports.io/american-football/teams/3.png",
            country: {
                name: "USA",
                code: "US",
                flag: "https://media.api-sports.io/flags/us.svg"
            }
        },
        {
            id: 4,
            name: "New York Giants",
            code: "NYG",
            city: "New York",
            coach: "Brian Daboll",
            owner: "John Mara, Steve Tisch",
            stadium: "MetLife Stadium",
            established: 1925,
            logo: "https://media.api-sports.io/american-football/teams/4.png",
            country: {
                name: "USA",
                code: "US",
                flag: "https://media.api-sports.io/flags/us.svg"
            }
        },
        {
            id: 5,
            name: "Baltimore Ravens",
            code: "BAL",
            city: "Baltimore",
            coach: "John Harbaugh",
            owner: "Steve Bisciotti",
            stadium: "M&T Bank Stadium",
            established: 1996,
            logo: "https://media.api-sports.io/american-football/teams/5.png",
            country: {
                name: "USA",
                code: "US",
                flag: "https://media.api-sports.io/flags/us.svg"
            }
        },
        {
            id: 6,
            name: "Tennessee Titans",
            code: "TEN",
            city: "Nashville",
            coach: "Mike Vrabel",
            owner: "Amy Adams Strunk",
            stadium: "Nissan Stadium",
            established: 1960,
            logo: "https://media.api-sports.io/american-football/teams/6.png",
            country: {
                name: "USA",
                code: "US",
                flag: "https://media.api-sports.io/flags/us.svg"
            }
        },
        {
            id: 7,
            name: "Detroit Lions",
            code: "DET",
            city: "Detroit",
            coach: "Dan Campbell",
            owner: "Sheila Ford Hamp",
            stadium: "Ford Field",
            established: 1930,
            logo: "https://media.api-sports.io/american-football/teams/7.png",
            country: {
                name: "USA",
                code: "US",
                flag: "https://media.api-sports.io/flags/us.svg"
            }
        },
        {
            id: 8,
            name: "Atlanta Falcons",
            code: "ATL",
            city: "Atlanta",
            coach: "Arthur Smith",
            owner: "Arthur Blank",
            stadium: "Mercedes-Benz Stadium",
            established: 1966,
            logo: "https://media.api-sports.io/american-football/teams/8.png",
            country: {
                name: "USA",
                code: "US",
                flag: "https://media.api-sports.io/flags/us.svg"
            }
        },
        {
            id: 9,
            name: "Cleveland Browns",
            code: "CLE",
            city: "Cleveland",
            coach: "Kevin Stefanski",
            owner: "Dee and Jimmy Haslam",
            stadium: "Cleveland Browns Stadium",
            established: 1946,
            logo: "https://media.api-sports.io/american-football/teams/9.png",
            country: {
                name: "USA",
                code: "US",
                flag: "https://media.api-sports.io/flags/us.svg"
            }
        },
        {
            id: 10,
            name: "Cincinnati Bengals",
            code: "CIN",
            city: "Cincinnati",
            coach: "Zac Taylor",
            owner: "Mike Brown",
            stadium: "Paycor Stadium",
            established: 1968,
            logo: "https://media.api-sports.io/american-football/teams/10.png",
            country: {
                name: "USA",
                code: "US",
                flag: "https://media.api-sports.io/flags/us.svg"
            }
        },
        {
            id: 11,
            name: "Arizona Cardinals",
            code: "ARI",
            city: "Glendale",
            coach: "Jonathan Gannon",
            owner: "Michael Bidwill",
            stadium: "State Farm Stadium",
            established: 1920,
            logo: "https://media.api-sports.io/american-football/teams/11.png",
            country: {
                name: "USA",
                code: "US",
                flag: "https://media.api-sports.io/flags/us.svg"
            }
        },
        {
            id: 12,
            name: "Philadelphia Eagles",
            code: "PHI",
            city: "Philadelphia",
            coach: "Nick Sirianni",
            owner: "Jeffrey Lurie",
            stadium: "Lincoln Financial Field",
            established: 1933,
            logo: "https://media.api-sports.io/american-football/teams/12.png",
            country: {
                name: "USA",
                code: "US",
                flag: "https://media.api-sports.io/flags/us.svg"
            }
        },
        {
            id: 13,
            name: "New York Jets",
            code: "NYJ",
            city: "New York",
            coach: "Robert Saleh",
            owner: "Robert Wood Johnson IV",
            stadium: "MetLife Stadium",
            established: 1960,
            logo: "https://media.api-sports.io/american-football/teams/13.png",
            country: {
                name: "USA",
                code: "US",
                flag: "https://media.api-sports.io/flags/us.svg"
            }
        },
        {
            id: 14,
            name: "San Francisco 49ers",
            code: "SF",
            city: "San Francisco",
            coach: "Kyle Shanahan",
            owner: "Jed York",
            stadium: "Levi's® Stadium",
            established: 1946,
            logo: "https://media.api-sports.io/american-football/teams/14.png",
            country: {
                name: "USA",
                code: "US",
                flag: "https://media.api-sports.io/flags/us.svg"
            }
        },
        {
            id: 15,
            name: "Green Bay Packers",
            code: "GB",
            city: "Green Bay",
            coach: "Matt LaFleur",
            owner: "Green Bay Packers, Inc.",
            stadium: "Lambeau Field",
            established: 1921,
            logo: "https://media.api-sports.io/american-football/teams/15.png",
            country: {
                name: "USA",
                code: "US",
                flag: "https://media.api-sports.io/flags/us.svg"
            }
        }
    ]

    const players = [
        {
            id: 1,
            name: "Derek Carr",
            age: 32,
            height: "6' 3'",
            weight: "215 lbs",
            college: "Fresno State",
            group: "Offense",
            position: "QB",
            number: 4,
            salary: "($52,800,000)",
            experience: 10,
            image: "https://media.api-sports.io/american-football/players/1.png",
        },
        {
            id: 6,
            name: "Josh Jacobs",
            age: 25,
            height: "5' 10'",
            weight: "223 lbs",
            college: "Alabama",
            group: "Offense",
            position: "RB",
            number: 8,
            salary: "0-",
            experience: 5,
            image: "https://media.api-sports.io/american-football/players/6.png",
        },
        {
            id: 14,
            name: "Hunter Renfrow",
            age: 27,
            height: "5' 10'",
            weight: "185 lbs",
            college: "Clemson",
            group: "Offense",
            position: "WR",
            number: 13,
            salary: "($18,164,000)",
            experience: 5,
            image: "https://media.api-sports.io/american-football/players/14.png",
        },
        {
            id: 18,
            name: "Foster Moreau",
            age: 26,
            height: "6' 4'",
            weight: "250 lbs",
            college: "LSU",
            group: "Offense",
            position: "TE",
            number: 87,
            salary: "($3,420,000)",
            experience: 5,
            image: "https://media.api-sports.io/american-football/players/18.png",
        },
        {
            id: 19,
            name: "Darren Waller",
            age: 31,
            height: "6' 6'",
            weight: "245 lbs",
            college: "Georgia Tech",
            group: "Offense",
            position: "TE",
            number: 12,
            salary: "($7,868,000)",
            experience: 7,
            image: "https://media.api-sports.io/american-football/players/19.png",
        },
        {
            id: 30,
            name: "Kolton Miller",
            age: 27,
            height: "6' 8'",
            weight: "325 lbs",
            college: "UCLA",
            group: "Offense",
            position: "OT",
            number: 74,
            salary: "($24,350,000)",
            experience: 6,
            image: "https://media.api-sports.io/american-football/players/30.png",
        },
        {
            id: 32,
            name: "Brandon Parker",
            age: 27,
            height: "6' 8'",
            weight: "320 lbs",
            college: "North Carolina A&T",
            group: "Offense",
            position: "OT",
            number: 75,
            salary: "($475,000)",
            experience: 6,
            image: "https://media.api-sports.io/american-football/players/32.png",
        },
        {
            id: 34,
            name: "Maxx Crosby",
            age: 25,
            height: "6' 5'",
            weight: "255 lbs",
            college: "Eastern Michigan",
            group: "Defense",
            position: "DE",
            number: 98,
            salary: "($46,965,000)",
            experience: 5,
            image: "https://media.api-sports.io/american-football/players/34.png",
        },
        {
            id: 35,
            name: "Clelin Ferrell",
            age: 26,
            height: "6' 4'",
            weight: "265 lbs",
            college: "Clemson",
            group: "Defense",
            position: "DE",
            number: 94,
            salary: null,
            experience: 5,
            image: "https://media.api-sports.io/american-football/players/35.png",
        },
        {
            id: 42,
            name: "Johnathan Hankins",
            age: 31,
            height: "6' 2'",
            weight: "320 lbs",
            college: "Ohio State",
            group: "Defense",
            position: "DT",
            number: 95,
            salary: null,
            experience: 11,
            image: "https://media.api-sports.io/american-football/players/42.png",
        },
        {
            id: 44,
            name: "Kendal Vickers",
            age: 28,
            height: "6' 3'",
            weight: "295 lbs",
            college: "Tennessee",
            group: "Defense",
            position: "DE",
            number: 75,
            salary: "$161,000",
            experience: 3,
            image: "https://media.api-sports.io/american-football/players/44.png"
        }
    ]

    const handleTeamSelect = (team) => {
        setSelectedTeam(team);
    };

    return (
        <Container maxWidth='lg'>
            <Grid container spacing={2} justifyContent='center' alignItems='center'>
                <Grid item xs={6}>
                    <Box boxShadow={2} height='80vh' sx={{
                        overflow: 'auto',
                        '&::-webkit-scrollbar': {
                            width: '8px',
                        },
                        '&::-webkit-scrollbar-track': {
                            backgroundColor: 'App.grey',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: "secondary.main",
                            borderRadius: '10px',
                        },
                    }}>
                        <Typography variant="h6" align='center' sx={{
                            position: 'sticky',
                            top: 0,
                            zIndex: 1,
                            backgroundColor: 'App.white',
                            boxShadow: 2,
                            height: '10vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            color: 'primary.main'
                        }}>
                            Equipos
                        </Typography>
                        <List component="ul">
                            {teams.map((team) => (
                                <ListItemButton key={team.id} onClick={() => handleTeamSelect(team)}>
                                    <ListItemIcon>
                                        <Avatar alt={team.name} src={team.logo} />
                                    </ListItemIcon>
                                    <ListItemText primary={team.name} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Box>
                </Grid>
                {selectedTeam && (
                    <Grid item xs={6} alignItems='center'>
                        <Box boxShadow={2} height='80vh' sx={{
                            overflow: 'auto',
                            '&::-webkit-scrollbar': {
                                width: '8px',
                            },
                            '&::-webkit-scrollbar-track': {
                                backgroundColor: 'App.grey',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: "secondary.main",
                                borderRadius: '10px',
                            },
                        }}>
                            <Grid item xs={12}>
                                <Typography variant="h6" align='center' sx={{
                                    position: 'sticky',
                                    top: 0,
                                    zIndex: 1,
                                    boxShadow: 2,
                                    backgroundColor: 'App.white',
                                    height: '10vh',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    color: 'primary.main'
                                }}>
                                    Jugadores de {selectedTeam.name}
                                </Typography>
                                <List>
                                    {players.map((player) => (
                                        <ListItem key={player.id}>
                                            <ListItemIcon>
                                                <Avatar alt={player.name} src={player.image} />
                                            </ListItemIcon>
                                            <ListItemText primary={player.name} secondary={player.position} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Grid>
                        </Box>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
};