const dialogSelectStyle = theme => ({
    dialogContents: {
      position: 'relative',
      display: 'flex',
      float: 'left',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    dialogButton: {
        width: '100px',
        height: '56px',
        color: '#389eff',
        borderColor: '#389eff',
          '&:hover': {
          backgroundColor: '#cee1ff',
        },
        margin: "0px 10px 0px 10px"
    },
    searchButton: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        border: 0,
        borderRadius: 3,
        color: 'white',
        height: 56,
        padding: '0px 50px 0px 50px',
        margin: '0 20px 0 20px'
    },
    randomButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        border: 0,
        borderRadius: 3,
        color: 'white',
        height: 56,
        padding: '0 50px',
        marginLeft: '20px'
    },
  });
    
  export default dialogSelectStyle;