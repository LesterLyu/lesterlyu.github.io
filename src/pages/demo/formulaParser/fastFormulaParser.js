import React, {useState, useEffect} from 'react';
import {Container, makeStyles, Paper, Typography, TextField} from '@material-ui/core';
import AppBar from '../../../components/AppBar';
import FormulaParser from 'fast-formula-parser';
// import FormulaParser from 'fast-formula-parser/build/parser.min';
import {FixedSizeGrid as Grid} from 'react-window';

const useStyles = makeStyles(theme => ({
    root: {
        padding: 20,
        marginTop: 20,
    },
    title: {
        paddingBottom: 20,
        paddingTop: 20,
    },
    cellDefault: {
        borderRight: '1px solid #ccc',
        borderBottom: '1px solid #ccc',
        padding: '0 4px 0 4px',
        lineHeight: 'normal',
        textAlign: 'left',
        whiteSpace: 'pre',
        boxSizing: 'border-box'
    },
    input: {
        paddingBottom: 10,
        paddingRight: 10,
    }
}));


/**
 * Convert a column name to a number.
 * @param {string} name - The column name.
 * @returns {number} The number.
 */
function columnNameToNumber(name) {
    if (!name || typeof name !== "string") return;

    name = name.toUpperCase();
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        sum = sum * 26;
        sum = sum + (name[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1);
    }

    return sum;
}

/**
 * Convert a column number to a name.
 * @param {number} number - The column number.
 * @returns {string} The name.
 */
function columnNumberToName(number) {
    let dividend = number;
    let name = '';
    let modulo = 0;

    while (dividend > 0) {
        modulo = (dividend - 1) % 26;
        name = String.fromCharCode('A'.charCodeAt(0) + modulo) + name;
        dividend = Math.floor((dividend - modulo) / 26);
    }

    return name;
}

const emptyData = () => {
    const data = [];
    let cnt = 0;
    for (let i = 0; i < 50; i++) {
        const row = [];
        for (let j = 0; j < 50; j++) {
            row.push(cnt++);
        }
        data.push(row);
    }
    data[0][0] = 'hello';
    data[0][1] = 'world';
    data[0][2] = true;
    return data;
};

const data = emptyData();

const Cell = ({columnIndex, rowIndex, style}) => {
    const classes = useStyles();
    if (columnIndex === 0) {
        return <div style={style} className={classes.cellDefault}>
            {rowIndex === 0 ? null : rowIndex}
        </div>
    } else if (rowIndex === 0) {
        return <div style={style} className={classes.cellDefault}>
            {columnNumberToName(columnIndex)}
        </div>
    }
    return (
        <div style={style} className={classes.cellDefault}>
            {data[rowIndex - 1][columnIndex - 1] === true ? 'TRUE' : data[rowIndex - 1][columnIndex - 1]}
        </div>
    );
};

export default function FastFormulaParser() {
    const classes = useStyles();
    const [formula, setFormula] = useState('CONCAT(SUM(A2:C4), VARIABLE1)');
    const [result, setResult] = useState('');

    const parser = new FormulaParser({
        // Variable used in formulas (defined name)
        onVariable: (name, sheetName) => {
            if (name === 'VARIABLE1')
                return {
                    sheet: 'Sheet 1',
                    row: 1,
                    col: 1
                };
            else if (name === 'VARIABLE2')
                return {
                    sheet: 'Sheet 1',
                    from: {
                        row: 2,
                        col: 1,
                    },
                    to: {
                        row: 3,
                        col: 3,
                    }
                };
        },
        // retrieve cell value
        onCell: ({sheet, row, col}) => {
            // using 1-based index
            // return the cell value, see possible types in next section.
            return data[row - 1][col - 1];
        },

        // retrieve range values
        onRange: (ref) => {
            // using 1-based index
            // Be careful when ref.to.col is MAX_COLUMN or ref.to.row is MAX_ROW, this will result in
            // unnecessary loops in this approach.
            const arr = [];
            for (let row = ref.from.row; row <= ref.to.row; row++) {
                const innerArr = [];
                if (data[row - 1]) {
                    for (let col = ref.from.col; col <= ref.to.col; col++) {
                        innerArr.push(data[row - 1][col - 1]);
                    }
                }
                arr.push(innerArr);
            }
            return arr;
        }
    });

    useEffect(() => {
        try {
            const FormulaResult = parser.parse(formula, {sheet: 'Sheet 1', row: 50, col: 50});
            setResult(FormulaResult);
        } catch (e) {
            setResult(e.toString());
        }
    }, [formula, setResult, parser]);

    const onFormulaChange = e => {
        const formula = e.target.value;
        setFormula(formula);
    };

    return (
        <div>
            <AppBar title="Fast Formula Parser"/>
            <Container maxWidth="lg">
                <Paper className={classes.root}>
                    <Typography variant="h5" style={{paddingTop: 0}} className={classes.title}>
                        Data (Sheet 1)
                    </Typography>
                    <Grid
                        className="Grid"
                        height={300}
                        width={400}
                        columnCount={51}
                        columnWidth={100}
                        rowCount={51}
                        rowHeight={35}
                    >
                        {Cell}
                    </Grid>

                    <Typography variant="h6" className={classes.title}>
                        Variables
                    </Typography>
                    <TextField disabled label="VARIABLE1" value="'Sheet 1'!$A$1" className={classes.input}/>
                    <TextField disabled label="VARIABLE2" value="'Sheet 1'!$A$2:$C$3" className={classes.input}/>

                    <Typography variant="h6" className={classes.title}>
                        Formula Located In
                    </Typography>
                    <TextField disabled label="Row" value="50" className={classes.input}/>
                    <TextField disabled label="Column" value="AX" className={classes.input}/>
                    <TextField disabled label="Sheet" value="Sheet 1" className={classes.input}/>
                    <Typography variant="h6" className={classes.title}>
                        Formula Input
                    </Typography>
                    <TextField fullWidth label="Formula" value={formula} onChange={onFormulaChange}
                               className={classes.input}/>
                    <TextField multiline label="Result" fullWidth value={result} style={{whiteSpace: 'pre'}}
                               className={classes.input}/>

                    <Typography variant="h6" className={classes.title}>
                        Supported Formulas
                    </Typography>
                    <Typography variant="body2">
                        {parser.supportedFunctions().join(', ')}
                    </Typography>
                </Paper>

            </Container>

        </div>
    );
}


