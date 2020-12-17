import React from 'react';
import GenericTemplate from '../templates/GenericTemplate'
import { makeStyles } from '@material-ui/core/styles'
import Table from "@material-ui/core/Table";
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const createData = (
    name: string,
    category: string,
    weight: number,
    price: number
) => {
    return { name, category, weight, price }
}

const rows = [
    createData('チョコレート', 'お菓子', 100, 120),
    createData('バナナ', '果物', 200, 220),
    createData('みかん', '果物', 300, 320),
    createData('なし', '果物', 400, 420),
    createData('アイス', 'お菓子', 500, 520)
]

const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
})

const ProductPage: React.FC = () => {
    const classes = useStyles();

    return (
        <GenericTemplate title="商品ページ">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>商品名</TableCell>
                            <TableCell align="right">カテゴリ</TableCell>
                            <TableCell align="right">重量</TableCell>
                            <TableCell align="right">価格</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                                <TableCell component='th' scope='row'>
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.category}</TableCell>
                                <TableCell align="right">{row.weight}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </GenericTemplate>
    );
};

export default ProductPage;