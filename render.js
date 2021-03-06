(function (global) {
    "use strict";
    // Class ------------------------------------------------
    function Render() { }

    // Header -----------------------------------------------
    global.Render = Render;
    global.Render.render = render;
    global.Render.RECT_BOARD = RECT_BOARD;
    global.Render.CELL_SIZE = CELL_SIZE;

    //-------------------------------------
    var COL = 9;
    var RECT_CANV = {
        x: 0,
        y: 0,
        w: 500,
        h: 500
    };
    var RECT_BOARD = {
        x: 0,
        y: 0,
        w: 500,
        h: 500
    };
    var CELL_SIZE = RECT_CANV.w / COL | 0;
    var COLOR_LINE = "#FFFFFF";
    var COLOR_WHITE = "#FFFFFF";
    var COLOR_BLACK = "#000000";
    var COLOR_SELECT = "#FFFFFF";

    var COLOR_PANEL_4 = "#006400 ";
    var COLOR_PANEL_5 = "#03a803 ";
    var COLOR_PANEL_6 = "#04cb04";

    var state_cache = null;
    var prev_revision = -1;
    var canv_cache = {
        canv_board: null,
        canv_pieaces: null
    };

    function render(ctx, state, point) {
        if (prev_revision < 0) {
            canv_cache.canv_board = drawBoard(state);
            canv_cache.canv_pieaces = drawPieceALL(state);
            Render.RECT_BOARD = RECT_BOARD;
            Render.CELL_SIZE = CELL_SIZE;
        } else {
            if (state.revision != prev_revision) {
                canv_cache.canv_pieaces = drawPieceALL(state);
            }
        }

        ctx.clearRect(0, 0, RECT_CANV.w, RECT_CANV.h);
        ctx.drawImage(canv_cache.canv_board, 0, 0, RECT_CANV.w, RECT_CANV.h);
        ctx.drawImage(canv_cache.canv_pieaces, 0, 0, RECT_CANV.w, RECT_CANV.h);
        prev_revision = state.revision;
    }

    function drawBoard(state) {
        if (!canv_cache.canv_board) {
            canv_cache.canv_board = document.createElement("canvas");
            canv_cache.canv_board.width = RECT_CANV.w;
            canv_cache.canv_board.height = RECT_CANV.h;
        }
        var ctx = canv_cache.canv_board.getContext('2d');
        ctx.clearRect(0, 0, RECT_CANV.w, RECT_CANV.h);

        var grad = ctx.createLinearGradient(0, 0, RECT_CANV.w, RECT_CANV.h);
        grad.addColorStop(0, COLOR_PANEL_6);
        grad.addColorStop(0.3, COLOR_PANEL_5);
        grad.addColorStop(1, COLOR_PANEL_4);
        ctx.fillStyle = grad

        for (var x = 0; x < COL; x++) {
            for (var y = 0; y < COL; y++) {
                ctx.strokeStyle = COLOR_LINE;
                ctx.beginPath();
                ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
                ctx.strokeRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
            }
        }
        var canv_board2 = document.createElement("canvas");
        var ctx_board2 = canv_board2.getContext('2d');
        canv_board2.width = RECT_CANV.w;
        canv_board2.height = RECT_CANV.h;
        ctx_board2.clearRect(0, 0, RECT_CANV.w, RECT_CANV.h);
        ctx_board2.globalAlpha = 0.07;
        ctx_board2.fillStyle = COLOR_WHITE;
        ctx_board2.beginPath();
        ctx_board2.arc(CELL_SIZE * 1, -3 * CELL_SIZE, 7 * CELL_SIZE, 0, Math.PI * 2, false);
        ctx_board2.fill();
        ctx.drawImage(canv_board2, 0, 0, RECT_CANV.w, RECT_CANV.h);


        return canv_cache.canv_board;
    }

    function drawPieceALL(state) {
        if (!canv_cache.canv_pieaces) {
            canv_cache.canv_pieaces = document.createElement("canvas");
            canv_cache.canv_pieaces.width = RECT_CANV.w;
            canv_cache.canv_pieaces.height = RECT_CANV.h;
        }
        var ctx = canv_cache.canv_pieaces.getContext('2d');
        ctx.clearRect(0, 0, RECT_CANV.w, RECT_CANV.h);

        for (var x = 0; x < COL; x++) {
            for (var y = 0; y < COL; y++) {
                if (state.map[y * COL + x] != 0) {
                    drawPiece(ctx, x * CELL_SIZE, y * CELL_SIZE, state.map[y * COL + x]);
                }
            }
        }
        return canv_cache.canv_pieaces;
    }

    function drawPiece(ctx, x, y, number) {

        var grad = ctx.createLinearGradient(x, y, x + CELL_SIZE, y + CELL_SIZE);
        var font_color;
        var fill_color;
        if (number > 0) {
            font_color = COLOR_BLACK;
            fill_color = COLOR_WHITE;
            grad.addColorStop(0, 'rgb(180, 180, 180)');
            grad.addColorStop(0.4, fill_color);
            grad.addColorStop(1, fill_color);
        }


        ctx.shadowBlur = 20;
        ctx.shadowColor = "rgba(0, 0, 0, 1)";
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.fillRect(x + CELL_SIZE / 10, y + CELL_SIZE / 10, CELL_SIZE - 1 * CELL_SIZE / 5, CELL_SIZE - 1 * CELL_SIZE / 5);


        ctx.shadowColor = "rgba(0, 0, 0, 0)";;
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        ctx.font = '30pt Arial';
        ctx.fillStyle = font_color;
        ctx.fillText(number, x + (CELL_SIZE * 1 / 4), y + (CELL_SIZE * 3 / 4));

        return ctx;
    }


    function objCopy(obj) {
        return JSON.parse(JSON.stringify(obj));
    }


})((this || 0).self || global);