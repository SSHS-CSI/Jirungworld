const React = require("react");

const Table = require("@material-ui/core/Table").default;
const TableBody = require("@material-ui/core/TableBody").default;
const TableCell = require("@material-ui/core/TableCell").default;
const TableRow = require("@material-ui/core/TableRow").default;


const ClosableDialog = require("./closable-dialog.js");

module.exports = ({
    foodmenu: {
        breakfast, lunch, dinner
    }, ...props
}) => {
  return (
    <ClosableDialog {...props}>
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell component="th" scope="row" variant="head">아침
                    </TableCell>
                    <TableCell>{breakfast}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell component="th" scope="row" variant="head">점심</TableCell>
                    <TableCell>{lunch}</TableCell>

                </TableRow>
                <TableRow>
                    <TableCell component="th" scope="row" variant="head">저녁</TableCell>
                    <TableCell>{dinner}</TableCell>

                </TableRow>
            </TableBody>
        </Table>
    </ClosableDialog>
  );
}
