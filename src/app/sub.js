const React = require("react");

const Table = require("@material-ui/core/Table").default;
const TableBody = require("@material-ui/core/TableBody").default;
const TableCell = require("@material-ui/core/TableCell").default;
const TableRow = require("@material-ui/core/TableRow").default;


const ClosableDialog = require("./closable-dialog.js");

module.exports = ({
     sub, ...props
}) => {
  return (
    <ClosableDialog {...props}>
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell component="th" scope="row" variant="head">수4
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell component="th" scope="row" variant="head">미적분학1</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell component="th" scope="row" variant="head">물4</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </ClosableDialog>
  );
}
