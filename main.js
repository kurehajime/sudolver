let json = { "response": true, "size": "9", "squares": [{ "x": 0, "y": 0, "value": 6 }, { "x": 0, "y": 2, "value": 2 }, { "x": 0, "y": 3, "value": 5 }, { "x": 0, "y": 4, "value": 4 }, { "x": 0, "y": 8, "value": 1 }, { "x": 1, "y": 0, "value": 1 }, { "x": 1, "y": 3, "value": 6 }, { "x": 1, "y": 5, "value": 9 }, { "x": 1, "y": 6, "value": 3 }, { "x": 1, "y": 8, "value": 4 }, { "x": 2, "y": 5, "value": 3 }, { "x": 2, "y": 8, "value": 7 }, { "x": 3, "y": 2, "value": 6 }, { "x": 3, "y": 4, "value": 9 }, { "x": 3, "y": 5, "value": 1 }, { "x": 3, "y": 6, "value": 7 }, { "x": 4, "y": 1, "value": 8 }, { "x": 4, "y": 2, "value": 4 }, { "x": 4, "y": 4, "value": 3 }, { "x": 4, "y": 6, "value": 9 }, { "x": 4, "y": 7, "value": 1 }, { "x": 5, "y": 2, "value": 1 }, { "x": 5, "y": 3, "value": 8 }, { "x": 5, "y": 4, "value": 6 }, { "x": 5, "y": 6, "value": 2 }, { "x": 6, "y": 1, "value": 6 }, { "x": 6, "y": 4, "value": 5 }, { "x": 6, "y": 7, "value": 7 }, { "x": 6, "y": 8, "value": 9 }, { "x": 7, "y": 0, "value": 4 }, { "x": 7, "y": 3, "value": 9 }, { "x": 7, "y": 5, "value": 8 }, { "x": 7, "y": 6, "value": 5 }, { "x": 7, "y": 7, "value": 6 }, { "x": 7, "y": 8, "value": 2 }, { "x": 8, "y": 0, "value": 9 }, { "x": 8, "y": 1, "value": 7 }, { "x": 8, "y": 2, "value": 5 }, { "x": 8, "y": 3, "value": 1 }, { "x": 8, "y": 4, "value": 2 }, { "x": 8, "y": 8, "value": 8 }] }
let json2 = { "response": true, "size": "9", "squares": [{ "x": 0, "y": 3, "value": 4 }, { "x": 0, "y": 6, "value": 1 }, { "x": 0, "y": 8, "value": 6 }, { "x": 1, "y": 1, "value": 4 }, { "x": 1, "y": 4, "value": 1 }, { "x": 1, "y": 6, "value": 5 }, { "x": 2, "y": 1, "value": 6 }, { "x": 2, "y": 2, "value": 7 }, { "x": 2, "y": 7, "value": 9 }, { "x": 2, "y": 8, "value": 4 }, { "x": 3, "y": 1, "value": 2 }, { "x": 3, "y": 2, "value": 3 }, { "x": 3, "y": 6, "value": 8 }, { "x": 3, "y": 7, "value": 1 }, { "x": 4, "y": 2, "value": 1 }, { "x": 4, "y": 3, "value": 3 }, { "x": 4, "y": 5, "value": 8 }, { "x": 4, "y": 6, "value": 4 }, { "x": 5, "y": 0, "value": 9 }, { "x": 5, "y": 2, "value": 4 }, { "x": 5, "y": 4, "value": 7 }, { "x": 5, "y": 6, "value": 6 }, { "x": 6, "y": 1, "value": 1 }, { "x": 6, "y": 7, "value": 3 }, { "x": 6, "y": 8, "value": 5 }, { "x": 7, "y": 0, "value": 2 }, { "x": 7, "y": 4, "value": 5 }, { "x": 7, "y": 8, "value": 1 }, { "x": 8, "y": 0, "value": 7 }, { "x": 8, "y": 5, "value": 1 }] }
let json3 = { "response": true, "size": "9", "squares": [{ "x": 0, "y": 4, "value": 3 }, { "x": 1, "y": 0, "value": 1 }, { "x": 1, "y": 3, "value": 5 }, { "x": 1, "y": 5, "value": 8 }, { "x": 2, "y": 2, "value": 2 }, { "x": 2, "y": 7, "value": 3 }, { "x": 2, "y": 8, "value": 5 }, { "x": 3, "y": 1, "value": 3 }, { "x": 3, "y": 6, "value": 9 }, { "x": 4, "y": 3, "value": 9 }, { "x": 4, "y": 5, "value": 3 }, { "x": 5, "y": 4, "value": 7 }, { "x": 5, "y": 7, "value": 1 }, { "x": 5, "y": 8, "value": 3 }, { "x": 6, "y": 6, "value": 1 }, { "x": 7, "y": 0, "value": 5 }, { "x": 7, "y": 1, "value": 7 }, { "x": 8, "y": 0, "value": 2 }, { "x": 8, "y": 4, "value": 8 }, { "x": 8, "y": 7, "value": 7 }] }
const SIZE = 9
const AREA = Math.sqrt(SIZE)


class Cell {
    constructor(_r, _c, _value) {
        this.r = _r
        this.c = _c
        this.value = _value
        this.ignore = []
        this.isReach = false
    }
    AddIgnore(_value) {
        if (!this.ignore.includes(_value)) {
            this.ignore.push(_value)
        }
        this.isReach = (this.value === null && this.ignore.length === 8)
    }
}


// Cellの配列を生成する
function getEmpArray() {
    let arr = []
    for (let r = 0; r < SIZE; r++) {
        arr[r] = []
        for (let c = 0; c < SIZE; c++) {
            arr[r][c] = new Cell(r, c, null)
        }
    }
    return arr
}

//SquareをCellの配列に変換する
function squares2Array(squares) {
    let arr = getEmpArray()
    for (const item of squares) {
        arr[item.y][item.x].value = item.value
    }
    return arr
}

//#region 完了判定

// 0:Yet, 1:Success ,-1:Faild
function IsComplete(arr) {
    let isNull = false
    for (let r = 0; r < SIZE; r++) {
        for (let c = 0; c < SIZE; c++) {
            if (arr[r][c].isReach === true) {
                return 0
            }
            if (arr[r][c].value === null) {
                isNull = true
            }
        }
    }
    if (isNull) {
        return -1
    }
    return 1
}

//#endregion

//#region Reachを埋める

function ConvertReach(arr) {
    for (let r = 0; r < SIZE; r++) {
        for (let c = 0; c < SIZE; c++) {
            if (arr[r][c].isReach) {
                for (let i = 1; i <= SIZE; i++) {
                    if (!arr[r][c].ignore.includes(i)) {
                        arr[r][c].value = i
                        arr[r][c].isReach = false
                        console.log(`Puts  Row:${r} Column:${c} Value:${i}`)
                    }
                }
            }
        }
    }
    return arr
}

//#endregion

//#region 対象のエリアではありえない数字をignoreリストに格納する

function CalcIgnoreAreaAll(arr) {
    for (let r = 0; r < AREA; r++) {
        for (let c = 0; c < AREA; c++) {
            calcIgnoreArea(arr, r, c)
        }
    }
    return arr
}

function calcIgnoreArea(arr, ar, ac) {
    let area = getArea(arr, ar, ac)
    let ignoreList = []
    for (const item of area) {
        if (item.value !== null) {
            ignoreList.push(item.value)
        }
    }
    for (const ignore of ignoreList) {
        setIgnoreArea(arr, ar, ac, ignore)
    }
    return arr
}
function setIgnoreArea(arr, _ar, _ac, ignore) {
    let rtn = []
    let ar = AREA * _ar
    let ac = AREA * _ac
    for (let r = ar; r < AREA * (_ar + 1); r++) {
        for (let c = ac; c < AREA * (_ac + 1); c++) {
            arr[r][c].AddIgnore(ignore)
        }
    }
    return rtn
}

function getArea(arr, _ar, _ac) {
    let rtn = []
    let ar = AREA * _ar
    let ac = AREA * _ac
    for (let r = ar; r < AREA * (_ar + 1); r++) {
        for (let c = ac; c < AREA * (_ac + 1); c++) {
            rtn.push(arr[r][c])
        }
    }
    return rtn
}

//#endregion

//#region Ignore Line


//対象のLineではありえない数字をignoreリストに格納する
function CalcIgnoreLineAll(arr) {
    for (let i = 0; i < SIZE; i++) {
        calcIgnoreLine(arr, 0, i)
        calcIgnoreLine(arr, 1, i)
    }
    return arr
}
function calcIgnoreLine(arr, axis, index) {
    let line = getLine(arr, axis, index)
    let ignoreList = []
    for (const item of line) {
        if (item.value !== null) {
            ignoreList.push(item.value)
        }
    }
    for (const ignore of ignoreList) {
        setIgnoreLine(arr, axis, index, ignore)
    }
    return arr
}

function setIgnoreLine(arr, axis, index, ignore) {
    //axis => 0:横 ,1:縦
    for (let i = 0; i < SIZE; i++) {
        if (axis == 0) {
            arr[index][i].AddIgnore(ignore)
        } else {
            arr[i][index].AddIgnore(ignore)
        }
    }
    return arr
}

//指定したラインを取得する
function getLine(arr, axis, index) {
    //axis => 0:横 ,1:縦
    if (axis == 0) {
        return arr[index]
    } else {
        let rtn = []
        for (let r = 0; r < SIZE; r++) {
            rtn.push(arr[r][index])
        }
        return rtn
    }
}

//#endregion


//#region 

function ConvertSerial(arr) {
    let rtn = []
    for (let r = 0; r < SIZE; r++) {
        for (let c = 0; c < SIZE; c++) {
            rtn.push(arr[r][c].value)
        }
    }
    return rtn
}

//#endregion

let array = squares2Array(json.squares)
let initSerial = ConvertSerial(array)

for (let i = 0; i < SIZE * SIZE; i++) {
    console.log(`${i + 1}回目`)
    array = CalcIgnoreAreaAll(array) //エリアごとにignoreリストを更新
    array = CalcIgnoreLineAll(array) //縦横ごとにignoreリストを更新
    let result = IsComplete(array)//まだ続けられるか判定
    array = ConvertReach(array)//確実に置けるところに置く
    if (result === 1) {
        console.log(`成功`)
        break
    }
    if (result === -1) {
        console.log(`失敗`)
        break
    }
}

console.log(array)

let resultSerial = ConvertSerial(array)