import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";

import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";


let counter = 0;
function createData(date, day, timeslot, address, location) {
  return { id: counter, date, day, timeslot, address, location };
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc" ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  { id: "date", numeric: false, disablePadding: true, label: "날짜" },
  { id: "day", numeric: true, disablePadding: false, label: "요일" },
  { id: "timeslot", numeric: true, disablePadding: false, label: "시간대" },
  { id: "address", numeric: true, disablePadding: false, label: "주소" },
  { id: "location", numeric: true, disablePadding: false, label: "장소" },
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align={row.numeric ? "right" : "left"}
                padding={row.disablePadding ? "none" : "default"}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? "bottom-end" : "bottom-start"}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this,
          )}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    width: "100%",
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: "auto",
  },
});

class EnhancedTable extends React.Component {
  state = {
    order: "asc",
    orderBy: "day",
    selected: [],
    data: [
      createData("2019-03-01", "월요일", "00:00 ~ 01:00", "경기도 성남시 분당구 삼평동", "-"),
      createData("2019-03-01", "월요일", "01:00 ~ 02:00", "경기도 성남시 분당구 삼평동", "-"),
      createData("2019-03-01", "월요일", "02:00 ~ 03:00", "경기도 성남시 분당구 삼평동", "-"),
      createData("2019-03-01", "월요일", "03:00 ~ 04:00", "경기도 성남시 분당구 삼평동", "H스퀘어"),
      createData("2019-03-01", "월요일", "04:00 ~ 05:00", "서울시 송파구 잠실동", "-"),
      createData("2019-03-01", "월요일", "05:00 ~ 06:00", "서울시 송파구 잠실동", "-"),
      createData("2019-03-01", "월요일", "00:00 ~ 01:00", "서울시 송파구 잠실동", "-"),
      createData("2019-03-01", "화요일", "01:00 ~ 02:00", "서울시 송파구 잠실동", "-"),
      createData("2019-03-01", "화요일", "02:00 ~ 03:00", "서울시 송파구 잠실동", "-"),
      createData("2019-03-01", "화요일", "03:00 ~ 04:00", "서울시 송파구 잠실동", "H스퀘어"),
      createData("2019-03-02", "화요일", "04:00 ~ 05:00", "경기도 성남시 분당구 삼평동", "-"),
      createData("2019-03-02", "화요일", "05:00 ~ 06:00", "경기도 성남시 분당구 삼평동", "-"),
      createData("2019-03-02", "수요일", "00:00 ~ 01:00", "경기도 성남시 분당구 삼평동", "-"),
      createData("2019-03-02", "수요일", "01:00 ~ 02:00", "경기도 성남시 분당구 삼평동", "-"),
      createData("2019-03-02", "수요일", "02:00 ~ 03:00", "경기도 성남시 분당구 삼평동", "-"),
      createData("2019-03-02", "수요일", "03:00 ~ 04:00", "경기도 성남시 분당구 삼평동", "H스퀘어"),
      createData("2019-03-03", "수요일", "04:00 ~ 05:00", "경기도 성남시 분당구 삼평동", "-"),
      createData("2019-03-03", "수요일", "05:00 ~ 06:00", "경기도 성남시 분당구 삼평동", "-"),
      createData("2019-03-03", "목요일", "00:00 ~ 01:00", "경기도 성남시 분당구 삼평동", "-"),
      createData("2019-03-03", "목요일", "01:00 ~ 02:00", "경기도 성남시 분당구 삼평동", "-"),
      createData("2019-03-03", "목요일", "02:00 ~ 03:00", "경기도 성남시 분당구 삼평동", "-"),
      createData("2019-03-03", "목요일", "03:00 ~ 04:00", "경기도 성남시 분당구 삼평동", "H스퀘어"),
      createData("2019-03-04", "목요일", "04:00 ~ 05:00", "경기도 성남시 분당구 삼평동", "-"),
      createData("2019-03-04", "목요일", "05:00 ~ 06:00", "경기도 성남시 분당구 삼평동", "-")
    ],
    page: 0,
    rowsPerPage: 5,
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Grid className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
            />
            <TableBody>
              {stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n.id);
                  return (
                    <TableRow hover>
                      <TableCell component="th" scope="row" padding="none">
                        {n.date}
                      </TableCell>
                      <TableCell align="right">{n.day}</TableCell>
                      <TableCell align="right">{n.timeslot}</TableCell>
                      <TableCell align="right">{n.address}</TableCell>
                      <TableCell align="right">{n.location}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "Previous Page",
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page",
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Grid>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);

