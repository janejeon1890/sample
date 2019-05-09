const UserHeaderStyles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: "white",
    },
    title: {
      flexGrow: 1,
      padding: "10px 30px 10px 110px",
    },
    divheaderIcon: {
      position: "relative",
      display: "flex",
      float: "left",
  
      verticalAlign: "middle",
      justifyContent: "center",
      alignItems: "center",
    },
    divheaderTitle: {
      position: "relative",
      display: "flex",
      float: "left",
      paddingTop: "5px",
      verticalAlign: "middle",
      justifyContent: "center",
      alignItems: "center",

      color: "#A1A1A1",
      fontFamily: "'Lato', sans-serif",
      fontSize: "1.5em",
      letterSpacing: "4px",
    },
    headerTitle: {
      textDecoration: "none",
    },
    tabsIndicator: {
      backgroundColor: '#1890ff',
    },
    tabRoot: {
      textTransform: 'initial',
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing.unit * 4,
      '&:hover': {
        color: '#40a9ff',
        opacity: 1,
      },
      '&$tabSelected': {
        color: '#1890ff',
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#40a9ff',
      },
    },
    typography: {
      padding: theme.spacing.unit * 3,
    },
    toolbar: {
      marginLeft: 10,
      marginRight: 80,
    },
    buttonStyle: {
      display: "inline-block",
      textDecoration: "none",
      color: "#4089F9",
      fontSize: "1em",
      position: "relative",
      padding: "1em 3em",
      overflow: "hidden",
      transition: "0.3s ease",
    }
  });
  
export default UserHeaderStyles;