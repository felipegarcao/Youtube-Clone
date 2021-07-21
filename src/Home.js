import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  ListSubheader,
  ListItemText,
  Box,
  Grid,
  Hidden,
  useTheme,
  Switch,
} from "@material-ui/core";

// Menu Hamburguer
import MenuIcon from "@material-ui/icons/Menu";
// Avatar Circulado Para Colocar dentro do Button de Fazer Login
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

// Icons do meu Header
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";

// icones para a parte da Barra Lateral (Drawer)
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";

// Icones apos o Divider(Linha de Divisão)
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";

// icon da parte de login
import AddCircleIcon from "@material-ui/icons/AddCircle";

// icons do Melhor do Youtube
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import HdIcon from "@material-ui/icons/Hd";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import YouTubeIcon from "@material-ui/icons/YouTube";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.background.dark,
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 99,
  },
  logo: {
    height: 30,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: "none",
  },
  menuIcon: {
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
  icons: {
    paddingRight: theme.spacing(4),
  },
  grow: {
    flexGrow: 1,
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  subheader: {
    textTransform: "uppercase",
  },
}));

const videos = [
  {
    id: 1,
    title:
      "FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29",
    channel: "Lucas Nhimi",
    views: "11 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb1.png",
  },
  {
    id: 2,
    title:
      "COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02",
    channel: "Lucas Nhimi",
    views: "957 mil visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb2.png",
  },
  {
    id: 3,
    title:
      "CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27",
    channel: "Lucas Nhimi",
    views: "106 mil visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb3.png",
  },
  {
    id: 4,
    title:
      "CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27",
    channel: "Lucas Nhimi",
    views: "5,6 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb4.png",
  },
  {
    id: 5,
    title:
      "EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26",
    channel: "Lucas Nhimi",
    views: "2,2 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb5.png",
  },
  {
    id: 6,
    title: "COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01",
    channel: "Lucas Nhimi",
    views: "233 mil visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb6.png",
  },
  {
    id: 7,
    title:
      "PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01",
    channel: "Lucas Nhimi",
    views: "118 mil visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb7.png",
  },
  {
    id: 8,
    title:
      "GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04",
    channel: "Lucas Nhimi",
    views: "1,9 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb8.png",
  },
];


 

function Home({darkMode, setDarkMode}) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.icons}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img
            src={
              theme.palette.type === "dark"
                ? "/images/branco.png"
                : "/images/preto.png"
            }
            alt="logo"
            className={classes.logo}
          />
          <div className={classes.grow} />
          <Switch value={darkMode} onChange={() => setDarkMode(!darkMode)} className={classes.icons} />

          <IconButton className={classes.icons}>
            <VideoCallIcon />
          </IconButton>

          <IconButton className={classes.icons}>
            <AppsIcon />
          </IconButton>
          <IconButton className={classes.icons}>
            <NotificationsIcon />
          </IconButton>
          <Button
            startIcon={<AccountCircleIcon />}
            color="secondary"
            variant="outlined"
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>

      <Box display="flex">
        <Hidden mdDown>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Inicio"}
                  />
                </ListItem>
              </List>
              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Em Alta"}
                  />
                </ListItem>
              </List>
              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Inscrições"}
                  />
                </ListItem>
              </List>
              <Divider />

              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Biblioteca"}
                  />
                </ListItem>
              </List>

              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Historico"}
                  />
                </ListItem>
              </List>

              <Divider />

              <Box p={2}>
                <Typography variant="body2">
                  Faça o Login Para Curtir Videos, comentar e se Inscrever
                </Typography>
                <Box mt={2}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<AddCircleIcon />}
                  >
                    Fazer Login
                  </Button>
                </Box>
              </Box>

              <Divider />
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    className={classes.subheader}
                  >
                    Melhor do Youtube
                  </ListSubheader>
                }
              >
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <MusicNoteIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Música"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <SportsSoccerIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Esportes"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <SportsEsportsIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Jogos"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <HdIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Filmes"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AnnouncementIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Notícias"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <LiveTvIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Ao vivo"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <YouTubeIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Destaques"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <VideogameAssetIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Videos 360"}
                  />
                </ListItem>
              </List>
              <Divider />
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircleIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={"Procurar mais"}
                />
              </ListItem>
              <Divider />
            </div>
          </Drawer>
        </Hidden>

        <Box p={9}>
          <Typography
            variant="h5"
            color="textPrimary"
            style={{ fontWeight: 600 }}
          >
            Recomendados
          </Typography>

          <Grid container spacing={3}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                {console.log(item)}
                <Box>
                  <img
                    src={item.thumb}
                    alt={item.title}
                    style={{
                      width: "100%",
                      boxShadow: "3px 3px 4px #000",
                      marginTop: "15px",
                    }}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant="body1"
                      color="textPrimary"
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {`${item.views} * ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
