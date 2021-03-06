const React = require("react");

const Table = require("@material-ui/core/Table").default;
const TableBody = require("@material-ui/core/TableBody").default;
const TableCell = require("@material-ui/core/TableCell").default;
const TableRow = require("@material-ui/core/TableRow").default;
const TextField = require("@material-ui/core/TextField").default;

const ClosableDialog = require("./closable-dialog.js");

module.exports = ({
    logindialog: {
        Id, Password
    }, ...props
}) => {
  return (
    <ClosableDialog {...props}>
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell component="th" scope="row" variant="head">아이디
                    </TableCell>
                    <TextField
                    id="standard-basic"
                    label="Id"
                    error={this.data== "" ? true : false }
                    helperText="Please input"
                    />
                </TableRow>
                <TableRow>
                    <TableCell component="th" scope="row" variant="head">비밀번호</TableCell>
                    <TextField
                    id="standard-basic"
                    label="Password"
                    error={this.data == "" ? true : false }
                    helperText="Please input"
                    />
                </TableRow>
            </TableBody>
        </Table>
    </ClosableDialog>
  );
}
