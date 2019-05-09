import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
// core
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchButton from '../Button/SearchButton'
// style
import dialogSelectStyle from './styles/DialogSelectStyle';


class DialogSelect extends React.Component {
  state = {
    open: false,
    do: '',
    city: '',
    gu: '',
    dong: '',
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = name => event => {
    this.setState({ [name]: Number(event.target.value) });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.dialogContents}>
        <DialogContent >
          {/* <form className={classes.container}> */}

          {/* 도 */}
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref;
              }}
              htmlFor="outlined-native-simple"
              style={{color: '#b05fc3'}}
            >
              도
            </InputLabel>
            <Select
              native
              value={this.state.do}
              onChange={this.handleChange('do')}
              input={
                <OutlinedInput
                  name="do"
                  labelWidth={this.state.labelWidth}
                  id="outlined-native-simple"
                />
              }
            >
              <option value="" />
              <option value={10}>경기도</option>
              <option value={20}>서울특별시</option>
            </Select>
          </FormControl>

          {/* 시/도 */}
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref;
              }}
              htmlFor="outlined-native-simple"
              style={{color: '#b05fc3'}}
            >
              시
            </InputLabel>
            <Select
              native
              value={this.state.city}
              onChange={this.handleChange('city')}
              input={
                <OutlinedInput
                  name="시/도"
                  labelWidth={this.state.labelWidth}
                  id="outlined-native-simple"
                />
              }
            >
              <option value="" />
              <option value={10}>서울시</option>
              <option value={20}>경기도</option>
            </Select>
          </FormControl>

          {/* 구 */}
          <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel
                ref={ref => {
                  this.InputLabelRef = ref;
                }}
                htmlFor="outlined-native-simple"
                style={{color: '#b05fc3'}}
              >
                구
              </InputLabel>
              <Select
                native
                value={this.state.gu}
                onChange={this.handleChange('gu')}
                input={
                  <OutlinedInput
                    name="구"
                    labelWidth={this.state.labelWidth}
                    id="outlined-native-simple"
                  />
                }
              >
                <option value="" />
                <option value={10}>서초구</option>
                <option value={20}>강남구</option>
                <option value={30}>송파구</option>
              </Select>
            </FormControl>

          {/* 동 */}

          <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel
                ref={ref => {
                  this.InputLabelRef = ref;
                }}
                htmlFor="outlined-native-simple"
                style={{color: '#b05fc3'}}
              >
                동
              </InputLabel>
              <Select
                native
                value={this.state.dong}
                onChange={this.handleChange('dong')}
                input={
                  <OutlinedInput
                    name="dong"
                    labelWidth={this.state.labelWidth}
                    id="outlined-native-simple"
                  />
                }
              >
                <option value="" />
                <option value={10}>잠실동</option>
                <option value={20}>방이동</option>
                <option value={30}>송파동</option>
              </Select>
            </FormControl>
          {/* </form> */}
        </DialogContent>
        <DialogActions style={{marginLeft:"30px"}}>
          <Button onClick={this.handleClose} variant="outlined"
          className={classes.dialogButton}
          >
            일별
          </Button>
          <Button onClick={this.handleClose} variant="outlined"
            className={classes.dialogButton}
          >
            주별
          </Button>
          <Button onClick={this.handleClose} variant="outlined"
            className={classes.dialogButton}
          >
            월별
          </Button>
          <Button className={classes.searchButton}>SEARCH</Button>
          <hr style={{height: "50px", color: "#cecece"}}/>
          <Button className={classes.randomButton}>RANDOM</Button>
        </DialogActions>
      </div>
    );
  }
}

DialogSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(dialogSelectStyle)(DialogSelect);