console.log("Hello, game.js");

var Tiles = { "List" :
    [
        {
            "id": "1",
            "coords": "1,1",
            "colour": "BRN"
        },
        {
            "id": "2",
            "coords": "2,1",
            "colour": "BRN"
        },
        {
            "id": "3",
            "coords": "3,1",
            "colour": "BRN"
        },
        {
            "id": "4",
            "coords": "4,1",
            "colour": "GRN"
        },
        {
            "id": "5",
            "coords": "5,1",
            "colour": "GRN"
        },
        {
            "id": "6",
            "coords": "6,1",
            "colour": "YLW"
        },
        {
            "id": "7",
            "coords": "7,1",
            "colour": "GRN"
        },
        {
            "id": "8",
            "coords": "8,1",
            "colour": "GRN"
        },
        {
            "id": "9",
            "coords": "9,1",
            "colour": "GRN"
        },
        {
            "id": "10",
            "coords": "10,1",
            "colour": "GRN"
        },
        {
            "id": "11",
            "coords": "1,2",
            "colour": "BRN"
        },
        {
            "id": "12",
            "coords": "2,2",
            "colour": "GRN"
        },
        {
            "id": "13",
            "coords": "3,2",
            "colour": "GRN"
        },
        {
            "id": "14",
            "coords": "4,2",
            "colour": "GRN"
        },
        {
            "id": "15",
            "coords": "5,2",
            "colour": "BRN"
        },
        {
            "id": "16",
            "coords": "6,2",
            "colour": "GRN"
        },
        {
            "id": "17",
            "coords": "7,2",
            "colour": "GRN"
        },
        {
            "id": "18",
            "coords": "8,2",
            "colour": "BRN"
        },
        {
            "id": "19",
            "coords": "9,2",
            "colour": "BRN"
        },
        {
            "id": "20",
            "coords": "10,2",
            "colour": "GRN"
        },
        {
            "id": "21",
            "coords": "1,3",
            "colour": "BRN"
        },
        {
            "id": "22",
            "coords": "2,3",
            "colour": "GRN"
        },
        {
            "id": "23",
            "coords": "3,3",
            "colour": "BRN"
        },
        {
            "id": "24",
            "coords": "4,3",
            "colour": "GRN"
        },
        {
            "id": "25",
            "coords": "5,3",
            "colour": "GRN"
        },
        {
            "id": "26",
            "coords": "6,3",
            "colour": "GRN"
        },
        {
            "id": "27",
            "coords": "7,3",
            "colour": "BRN"
        },
        {
            "id": "28",
            "coords": "8,3",
            "colour": "GRN"
        },
        {
            "id": "29",
            "coords": "9,3",
            "colour": "GRN"
        },
        {
            "id": "30",
            "coords": "10,3",
            "colour": "GRN"
        },
        {
            "id": "31",
            "coords": "1,4",
            "colour": "BRN"
        },
        {
            "id": "32",
            "coords": "2,4",
            "colour": "GRN"
        },
        {
            "id": "33",
            "coords": "3,4",
            "colour": "GRN"
        },
        {
            "id": "34",
            "coords": "4,4",
            "colour": "BRN"
        },
        {
            "id": "35",
            "coords": "5,4",
            "colour": "BRN"
        },
        {
            "id": "36",
            "coords": "6,4",
            "colour": "BRN"
        },
        {
            "id": "37",
            "coords": "7,4",
            "colour": "BRN"
        },
        {
            "id": "38",
            "coords": "8,4",
            "colour": "GRN"
        },
        {
            "id": "39",
            "coords": "9,4",
            "colour": "BRN"
        },
        {
            "id": "40",
            "coords": "10,4",
            "colour": "BRN"
        },
        {
            "id": "41",
            "coords": "1,5",
            "colour": "BRN"
        },
        {
            "id": "42",
            "coords": "2,5",
            "colour": "BRN"
        },
        {
            "id": "43",
            "coords": "3,5",
            "colour": "GRN"
        },
        {
            "id": "44",
            "coords": "4,5",
            "colour": "GRN"
        },
        {
            "id": "45",
            "coords": "5,5",
            "colour": "GRN"
        },
        {
            "id": "46",
            "coords": "6,5",
            "colour": "GRN"
        },
        {
            "id": "47",
            "coords": "7,5",
            "colour": "GRN"
        },
        {
            "id": "48",
            "coords": "8,5",
            "colour": "GRN"
        },
        {
            "id": "49",
            "coords": "9,5",
            "colour": "GRN"
        },
        {
            "id": "50",
            "coords": "10,5",
            "colour": "BRN"
        },
        {
            "id": "51",
            "coords": "1,6",
            "colour": "GRN"
        },
        {
            "id": "52",
            "coords": "2,6",
            "colour": "BRN"
        },
        {
            "id": "53",
            "coords": "3,6",
            "colour": "GRN"
        },
        {
            "id": "54",
            "coords": "4,6",
            "colour": "BRN"
        },
        {
            "id": "55",
            "coords": "5,6",
            "colour": "GRN"
        },
        {
            "id": "56",
            "coords": "6,6",
            "colour": "BRN"
        },
        {
            "id": "57",
            "coords": "7,6",
            "colour": "BRN"
        },
        {
            "id": "58",
            "coords": "8,6",
            "colour": "BRN"
        },
        {
            "id": "59",
            "coords": "9,6",
            "colour": "GRN"
        },
        {
            "id": "60",
            "coords": "10,6",
            "colour": "BRN"
        },
        {
            "id": "61",
            "coords": "1,7",
            "colour": "GRN"
        },
        {
            "id": "62",
            "coords": "2,7",
            "colour": "BRN"
        },
        {
            "id": "63",
            "coords": "3,7",
            "colour": "GRN"
        },
        {
            "id": "64",
            "coords": "4,7",
            "colour": "BRN"
        },
        {
            "id": "65",
            "coords": "5,7",
            "colour": "GRN"
        },
        {
            "id": "66",
            "coords": "6,7",
            "colour": "BRN"
        },
        {
            "id": "67",
            "coords": "7,7",
            "colour": "BRN"
        },
        {
            "id": "68",
            "coords": "8,7",
            "colour": "BRN"
        },
        {
            "id": "69",
            "coords": "9,7",
            "colour": "GRN"
        },
        {
            "id": "70",
            "coords": "10,7",
            "colour": "GRN"
        },
        {
            "id": "71",
            "coords": "1,8",
            "colour": "GRN"
        },
        {
            "id": "72",
            "coords": "2,8",
            "colour": "GRN"
        },
        {
            "id": "73",
            "coords": "3,8",
            "colour": "GRN"
        },
        {
            "id": "74",
            "coords": "4,8",
            "colour": "BRN"
        },
        {
            "id": "75",
            "coords": "5,8",
            "colour": "GRN"
        },
        {
            "id": "76",
            "coords": "6,8",
            "colour": "GRN"
        },
        {
            "id": "77",
            "coords": "7,8",
            "colour": "GRN"
        },
        {
            "id": "78",
            "coords": "8,8",
            "colour": "BRN"
        },
        {
            "id": "79",
            "coords": "9,8",
            "colour": "BRN"
        },
        {
            "id": "80",
            "coords": "10,8",
            "colour": "GRN"
        },
        {
            "id": "81",
            "coords": "1,9",
            "colour": "GRN"
        },
        {
            "id": "82",
            "coords": "2,9",
            "colour": "BRN"
        },
        {
            "id": "83",
            "coords": "3,9",
            "colour": "BRN"
        },
        {
            "id": "84",
            "coords": "4,9",
            "colour": "BRN"
        },
        {
            "id": "85",
            "coords": "5,9",
            "colour": "BRN"
        },
        {
            "id": "86",
            "coords": "6,9",
            "colour": "GRN"
        },
        {
            "id": "87",
            "coords": "7,9",
            "colour": "BRN"
        },
        {
            "id": "88",
            "coords": "8,9",
            "colour": "BRN"
        },
        {
            "id": "89",
            "coords": "9,9",
            "colour": "BRN"
        },
        {
            "id": "90",
            "coords": "10,9",
            "colour": "GRN"
        },
        {
            "id": "91",
            "coords": "1,10",
            "colour": "GRN"
        },
        {
            "id": "92",
            "coords": "2,10",
            "colour": "GRN"
        },
        {
            "id": "93",
            "coords": "3,10",
            "colour": "GRN"
        },
        {
            "id": "94",
            "coords": "4,10",
            "colour": "GRN"
        },
        {
            "id": "95",
            "coords": "5,10",
            "colour": "BRN"
        },
        {
            "id": "96",
            "coords": "6,10",
            "colour": "GRN"
        },
        {
            "id": "97",
            "coords": "7,10",
            "colour": "GRN"
        },
        {
            "id": "98",
            "coords": "8,10",
            "colour": "GRN"
        },
        {
            "id": "99",
            "coords": "9,10",
            "colour": "GRN"
        },
        {
            "id": "100",
            "coords": "10,10",
            "colour": "GRN"
        }
]};

/*
var Tiles = { "List" : [
    {"id":"1", "coords": "1,0", "class":"cell cell1 BRN"},
    {"id":"2", "coords": "2,0", "class":"cell cell1 GRN"},
    {"id":"3", "coords": "3,0", "class":"cell cell1 GRN"},
    {"id":"4", "coords": "4,0", "class":"cell cell1 GRN"},
    {"id":"5", "coords": "5,0", "class":"cell cell1 BRN"},

    {"id":"6", "coords": "1,1", "class":"cell cell2 GRN"},
    {"id":"7", "coords": "2,1", "class":"cell cell2 GRN"},
    {"id":"8", "coords": "3,1", "class":"cell cell2 BRN"},
    {"id":"9", "coords": "4,1", "class":"cell cell2 GRN"},
    {"id":"10", "coords": "5,1", "class":"cell cell2 GRN"},

    {"id":"11", "coords": "1,2", "class":"cell cell3 GRN"},
    {"id":"12", "coords": "2,2", "class":"cell cell3 GRN"},
    {"id":"13", "coords": "3,2", "class":"cell cell3 BRN"},
    {"id":"14", "coords": "4,2", "class":"cell cell3 GRN"},
    {"id":"15", "coords": "5,2", "class":"cell cell3 GRN"},

    {"id":"16", "coords": "1,3", "class":"cell cell4 BRN"},
    {"id":"17", "coords": "2,3", "class":"cell cell4 GRN"},
    {"id":"18", "coords": "3,3", "class":"cell cell4 GRN"},
    {"id":"19", "coords": "4,3", "class":"cell cell4 GRN"},
    {"id":"20", "coords": "5,3", "class":"cell cell4 BRN"},

    {"id":"21", "coords": "1,4", "class":"cell cell5 GRN"},
    {"id":"22", "coords": "2,4", "class":"cell cell5 GRN"},
    {"id":"23", "coords": "3,4", "class":"cell cell5 GRN"},
    {"id":"24", "coords": "4,4", "class":"cell cell5 BRN"},
    {"id":"25", "coords": "5,4", "class":"cell cell5 GRN"}
    
]};
*/



// LOAD THE BOARD

var tiles = "";
var htmlElement = "";
var tileID = 1;

// Build up the Tile Array containing the HTML Board
for (var t = 0; t < Tiles.List.length; t++){

    // Load "row" div for first tile
    if (tileID === 1) {
        htmlElement = '<div class="row">'
        console.log(t + " " + htmlElement)
        tiles += '<div class="row">'
    }

    // Load "id" divs
/*    tiles += '<div id="' + Tiles.List[t].id + '" class="' + Tiles.List[t].class + '" onclick="replyClick(this.id)"><p>.</p></div>' 
    htmlElement = '<div id="' + Tiles.List[t].id + '" class="' + Tiles.List[t].class + '" onclick="replyClick(this.id)"><p>.</p></div>' 
    console.log(t + " " + htmlElement) */

    // Load "id" divs
    tiles += '<div id="' + Tiles.List[t].id + '" class="cell cell1 ' + Tiles.List[t].colour + '" onclick="replyClick(this.id)"><p>.</p></div>' 
    htmlElement = '<div id="' + Tiles.List[t].id + '" class="cell cell1 ' + Tiles.List[t].colour + '" onclick="replyClick(this.id)"><p>.</p></div>' 
    console.log(t + " " + htmlElement)




    // Only load "closing" div for last tile
    if (tileID === 100) {
        tiles += '</div>'
        htmlElement = '</div>'
        console.log(t + " " + htmlElement)

    // Otherwise load the "closing" div for the row section,
    // and start the next "row" div
    } else if (tileID % 10 === 0 && tileID !== 0) {
        tiles += '</div>'
        htmlElement = '</div>'
        console.log(t + " " + htmlElement)
        tiles += '<div class="row">'
        htmlElement = '<div class="row">'
        console.log(t + " " + htmlElement)
    }

    tileID++

}

// Load the Tile Squares to HTML (div container-left-panel) with jQuery
$(".container-left-panel").append(tiles);
    
// Output HTML code to the Browser Console
console.log(tiles)


// DETECT SQUARE CLICK
let changedCellColour = "black"

function replyClick(clicked_id) {
    // Determine if player on square

    // Change colour of clicked cell
    document.getElementById(clicked_id).style.backgroundColor = changedCellColour;

    // Output to Console the clicked cell
    console.log("Cell ID: ", clicked_id);
};

