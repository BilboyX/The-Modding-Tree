"use strict";
var layoutInfo = {
    startTab: "none",
    startNavTab: "tree-tab",
	showTree: true,

    treeLayout: ""

  
}

function audio() {
    if (options.SFX == false) return

    if(player.prev === C2_LIST[1]) tmp['tree-tab'].audioPurpleRustle.loop = false, tmp['tree-tab'].audioPurpleRustle.play()

    if(player.prev === C1_LIST[2]) tmp['tree-tab'].audioSludge.loop = false, tmp['tree-tab'].audioSludge.play()

    if (player.portal == true){ player['tree-tab'].audioR = Math.floor(Math.random()*2)
    if (player['tree-tab'].audioR === 0) tmp['tree-tab'].audioPortal1.loop = false, tmp['tree-tab'].audioPortal1.play()
    if (player['tree-tab'].audioR === 1) tmp['tree-tab'].audioPortal2.loop = false, tmp['tree-tab'].audioPortal2.play()
    player.portal = false}

    if (player.prev === C3_LIST[1] || player.prev === C5_LIST[1]){ player['tree-tab'].audioR = Math.floor(Math.random()*3)
    if (player['tree-tab'].audioR === 0) tmp['tree-tab'].audioLine1.loop = false, tmp['tree-tab'].audioLine1.play()
    if (player['tree-tab'].audioR === 1) tmp['tree-tab'].audioLine2.loop = false, tmp['tree-tab'].audioLine2.play()
    if (player['tree-tab'].audioR === 2) tmp['tree-tab'].audioLine3.loop = false, tmp['tree-tab'].audioLine3.play()}

      if (player.prev === C1_LIST[player.stone]){ player['tree-tab'].audioR = Math.floor(Math.random()*3)
      if (player['tree-tab'].audioR === 0) tmp['tree-tab'].audioRock1.loop = false, tmp['tree-tab'].audioRock1.play()
    if (player['tree-tab'].audioR === 1) tmp['tree-tab'].audioRock2.loop = false, tmp['tree-tab'].audioRock2.play()
    if (player['tree-tab'].audioR === 2) tmp['tree-tab'].audioRock3.loop = false, tmp['tree-tab'].audioRock3.play()}

    if (player.prev === C2_LIST[0] || player.prev === C2_LIST[5]){ player['tree-tab'].audioR = Math.floor(Math.random()*3)
    if (player['tree-tab'].audioR === 0) tmp['tree-tab'].audioDirt1.loop = false, tmp['tree-tab'].audioDirt1.play()
    if (player['tree-tab'].audioR === 1) tmp['tree-tab'].audioDirt2.loop = false, tmp['tree-tab'].audioDirt2.play()
    if (player['tree-tab'].audioR === 2) tmp['tree-tab'].audioDirt3.loop = false, tmp['tree-tab'].audioDirt3.play()}

    if (player.prev === C2_LIST[player.wood]){ player['tree-tab'].audioR = Math.floor(Math.random()*3)
    if (player['tree-tab'].audioR === 0) tmp['tree-tab'].audioWood1.loop = false, tmp['tree-tab'].audioWood1.play()
    if (player['tree-tab'].audioR === 1) tmp['tree-tab'].audioWood2.loop = false, tmp['tree-tab'].audioWood2.play()
    if (player['tree-tab'].audioR === 2) tmp['tree-tab'].audioWood3.loop = false, tmp['tree-tab'].audioWood3.play()}

    if (player.prev === C2_LIST[player.island]) tmp['tree-tab'].audioSand.loop = false, tmp['tree-tab'].audioSand.play()
}

function save1() {
if (player.Zone === -1) player.Zones[-1] = {Sprev: player.Sprev, prev: player.prev, East: player.East, West: player.West, North: player.North, South: player.South, Zone: player.Zone, F1: player.F1, F2: player.F2, F5: player.F5, One: player.One, Two: player.Two, Three: player.Three, Four: player.Four, Five: player.Five, Six: player.Six, Seven: player.Seven, Eight: player.Eight, Nine: player.Nine, Ten: player.Ten, Eleven: player.Eleven, Twelve: player.Twelve, Thirteen: player.Thirteen, Fourteen: player.Fourteen, Fifteen: player.Fifteen, Sixteen: player.Sixteen, Seventeen: player.Seventeen, Eighteen: player.Eighteen, Nineteen: player.Nineteen, Twenty: player.Twenty, Twentyone: player.Twentyone, Twentytwo: player.Twentytwo, Twentythree: player.Twentythree, Twentyfour: player.Twentyfour, Twentyfive: player.Twentyfive, Twentysix: player.Twentysix, Twentyseven: player.Twentyseven, Twentyeight: player.Twentyeight, Twentynine: player.Twentynine, Thirty: player.Thirty, Thirtyone: player.Thirtyone, Thirtytwo: player.Thirtytwo, Thirtythree: player.Thirtythree, Thirtyseven: player.Thirtyseven, Thirtyfive: player.Thirtyfive, Thirtysix: player.Thirtysix, Thirtyfour: player.Thirtyfour, Thirtyeight: player.Thirtyeight, Thirtynine: player.Thirtynine, Fourty: player.Fourty, Fourtyone: player.Fourtyone, Fourtytwo: player.Fourtytwo, Fourtythree: player.Fourtythree, Fourtyfour: player.Fourtyfour, Fourtyfive: player.Fourtyfive, Fourtysix: player.Fourtysix, Fourtyseven: player.Fourtyseven, Fourtyeight: player.Fourtyeight, Fourtynine: player.Fourtynine, Fifty: player.Fifty, L1: player.L1, L2: player.L2, L3: player.L3, L4: player.L4, L5: player.L5, L6: player.L6, L7: player.L7, L8: player.L8, L9: player.L9, L10: player.L10, L11: player.L11, L12: player.L12}
if (player.Zone === 1) player.Zones[0] = {Sprev: player.Sprev, prev: player.prev, East: player.East, West: player.West, North: player.North, South: player.South, Zone: player.Zone, F1: player.F1, F2: player.F2, F5: player.F5, One: player.One, Two: player.Two, Three: player.Three, Four: player.Four, Five: player.Five, Six: player.Six, Seven: player.Seven, Eight: player.Eight, Nine: player.Nine, Ten: player.Ten, Eleven: player.Eleven, Twelve: player.Twelve, Thirteen: player.Thirteen, Fourteen: player.Fourteen, Fifteen: player.Fifteen, Sixteen: player.Sixteen, Seventeen: player.Seventeen, Eighteen: player.Eighteen, Nineteen: player.Nineteen, Twenty: player.Twenty, Twentyone: player.Twentyone, Twentytwo: player.Twentytwo, Twentythree: player.Twentythree, Twentyfour: player.Twentyfour, Twentyfive: player.Twentyfive, Twentysix: player.Twentysix, Twentyseven: player.Twentyseven, Twentyeight: player.Twentyeight, Twentynine: player.Twentynine, Thirty: player.Thirty, Thirtyone: player.Thirtyone, Thirtytwo: player.Thirtytwo, Thirtythree: player.Thirtythree, Thirtyseven: player.Thirtyseven, Thirtyfive: player.Thirtyfive, Thirtysix: player.Thirtysix, Thirtyfour: player.Thirtyfour, Thirtyeight: player.Thirtyeight, Thirtynine: player.Thirtynine, Fourty: player.Fourty, Fourtyone: player.Fourtyone, Fourtytwo: player.Fourtytwo, Fourtythree: player.Fourtythree, Fourtyfour: player.Fourtyfour, Fourtyfive: player.Fourtyfive, Fourtysix: player.Fourtysix, Fourtyseven: player.Fourtyseven, Fourtyeight: player.Fourtyeight, Fourtynine: player.Fourtynine, Fifty: player.Fifty, L1: player.L1, L2: player.L2, L3: player.L3, L4: player.L4, L5: player.L5, L6: player.L6, L7: player.L7, L8: player.L8, L9: player.L9, L10: player.L10, L11: player.L11, L12: player.L12}
if (player.Zone === 2) player.Zones[1] = {Sprev: player.Sprev, prev: player.prev, East: player.East, West: player.West, North: player.North, South: player.South, Zone: player.Zone, F1: player.F1, F2: player.F2, F5: player.F5, One: player.One, Two: player.Two, Three: player.Three, Four: player.Four, Five: player.Five, Six: player.Six, Seven: player.Seven, Eight: player.Eight, Nine: player.Nine, Ten: player.Ten, Eleven: player.Eleven, Twelve: player.Twelve, Thirteen: player.Thirteen, Fourteen: player.Fourteen, Fifteen: player.Fifteen, Sixteen: player.Sixteen, Seventeen: player.Seventeen, Eighteen: player.Eighteen, Nineteen: player.Nineteen, Twenty: player.Twenty, Twentyone: player.Twentyone, Twentytwo: player.Twentytwo, Twentythree: player.Twentythree, Twentyfour: player.Twentyfour, Twentyfive: player.Twentyfive, Twentysix: player.Twentysix, Twentyseven: player.Twentyseven, Twentyeight: player.Twentyeight, Twentynine: player.Twentynine, Thirty: player.Thirty, Thirtyone: player.Thirtyone, Thirtytwo: player.Thirtytwo, Thirtythree: player.Thirtythree, Thirtyseven: player.Thirtyseven, Thirtyfive: player.Thirtyfive, Thirtysix: player.Thirtysix, Thirtyfour: player.Thirtyfour, Thirtyeight: player.Thirtyeight, Thirtynine: player.Thirtynine, Fourty: player.Fourty, Fourtyone: player.Fourtyone, Fourtytwo: player.Fourtytwo, Fourtythree: player.Fourtythree, Fourtyfour: player.Fourtyfour, Fourtyfive: player.Fourtyfive, Fourtysix: player.Fourtysix, Fourtyseven: player.Fourtyseven, Fourtyeight: player.Fourtyeight, Fourtynine: player.Fourtynine, Fifty: player.Fifty, L1: player.L1, L2: player.L2, L3: player.L3, L4: player.L4, L5: player.L5, L6: player.L6, L7: player.L7, L8: player.L8, L9: player.L9, L10: player.L10, L11: player.L11, L12: player.L12}
if (player.Zone === 3) player.Zones[2] = {Sprev: player.Sprev, prev: player.prev, East: player.East, West: player.West, North: player.North, South: player.South, Zone: player.Zone, F1: player.F1, F2: player.F2, F5: player.F5, One: player.One, Two: player.Two, Three: player.Three, Four: player.Four, Five: player.Five, Six: player.Six, Seven: player.Seven, Eight: player.Eight, Nine: player.Nine, Ten: player.Ten, Eleven: player.Eleven, Twelve: player.Twelve, Thirteen: player.Thirteen, Fourteen: player.Fourteen, Fifteen: player.Fifteen, Sixteen: player.Sixteen, Seventeen: player.Seventeen, Eighteen: player.Eighteen, Nineteen: player.Nineteen, Twenty: player.Twenty, Twentyone: player.Twentyone, Twentytwo: player.Twentytwo, Twentythree: player.Twentythree, Twentyfour: player.Twentyfour, Twentyfive: player.Twentyfive, Twentysix: player.Twentysix, Twentyseven: player.Twentyseven, Twentyeight: player.Twentyeight, Twentynine: player.Twentynine, Thirty: player.Thirty, Thirtyone: player.Thirtyone, Thirtytwo: player.Thirtytwo, Thirtythree: player.Thirtythree, Thirtyseven: player.Thirtyseven, Thirtyfive: player.Thirtyfive, Thirtysix: player.Thirtysix, Thirtyfour: player.Thirtyfour, Thirtyeight: player.Thirtyeight, Thirtynine: player.Thirtynine, Fourty: player.Fourty, Fourtyone: player.Fourtyone, Fourtytwo: player.Fourtytwo, Fourtythree: player.Fourtythree, Fourtyfour: player.Fourtyfour, Fourtyfive: player.Fourtyfive, Fourtysix: player.Fourtysix, Fourtyseven: player.Fourtyseven, Fourtyeight: player.Fourtyeight, Fourtynine: player.Fourtynine, Fifty: player.Fifty, L1: player.L1, L2: player.L2, L3: player.L3, L4: player.L4, L5: player.L5, L6: player.L6, L7: player.L7, L8: player.L8, L9: player.L9, L10: player.L10, L11: player.L11, L12: player.L12}
if (player.Zone === 4) player.Zones[3] = {Sprev: player.Sprev, prev: player.prev, East: player.East, West: player.West, North: player.North, South: player.South, Zone: player.Zone, F1: player.F1, F2: player.F2, F5: player.F5, One: player.One, Two: player.Two, Three: player.Three, Four: player.Four, Five: player.Five, Six: player.Six, Seven: player.Seven, Eight: player.Eight, Nine: player.Nine, Ten: player.Ten, Eleven: player.Eleven, Twelve: player.Twelve, Thirteen: player.Thirteen, Fourteen: player.Fourteen, Fifteen: player.Fifteen, Sixteen: player.Sixteen, Seventeen: player.Seventeen, Eighteen: player.Eighteen, Nineteen: player.Nineteen, Twenty: player.Twenty, Twentyone: player.Twentyone, Twentytwo: player.Twentytwo, Twentythree: player.Twentythree, Twentyfour: player.Twentyfour, Twentyfive: player.Twentyfive, Twentysix: player.Twentysix, Twentyseven: player.Twentyseven, Twentyeight: player.Twentyeight, Twentynine: player.Twentynine, Thirty: player.Thirty, Thirtyone: player.Thirtyone, Thirtytwo: player.Thirtytwo, Thirtythree: player.Thirtythree, Thirtyseven: player.Thirtyseven, Thirtyfive: player.Thirtyfive, Thirtysix: player.Thirtysix, Thirtyfour: player.Thirtyfour, Thirtyeight: player.Thirtyeight, Thirtynine: player.Thirtynine, Fourty: player.Fourty, Fourtyone: player.Fourtyone, Fourtytwo: player.Fourtytwo, Fourtythree: player.Fourtythree, Fourtyfour: player.Fourtyfour, Fourtyfive: player.Fourtyfive, Fourtysix: player.Fourtysix, Fourtyseven: player.Fourtyseven, Fourtyeight: player.Fourtyeight, Fourtynine: player.Fourtynine, Fifty: player.Fifty, L1: player.L1, L2: player.L2, L3: player.L3, L4: player.L4, L5: player.L5, L6: player.L6, L7: player.L7, L8: player.L8, L9: player.L9, L10: player.L10, L11: player.L11, L12: player.L12}
if (player.Zone === 5) player.Zones[4] = {Sprev: player.Sprev, prev: player.prev, East: player.East, West: player.West, North: player.North, South: player.South, Zone: player.Zone, F1: player.F1, F2: player.F2, F5: player.F5, One: player.One, Two: player.Two, Three: player.Three, Four: player.Four, Five: player.Five, Six: player.Six, Seven: player.Seven, Eight: player.Eight, Nine: player.Nine, Ten: player.Ten, Eleven: player.Eleven, Twelve: player.Twelve, Thirteen: player.Thirteen, Fourteen: player.Fourteen, Fifteen: player.Fifteen, Sixteen: player.Sixteen, Seventeen: player.Seventeen, Eighteen: player.Eighteen, Nineteen: player.Nineteen, Twenty: player.Twenty, Twentyone: player.Twentyone, Twentytwo: player.Twentytwo, Twentythree: player.Twentythree, Twentyfour: player.Twentyfour, Twentyfive: player.Twentyfive, Twentysix: player.Twentysix, Twentyseven: player.Twentyseven, Twentyeight: player.Twentyeight, Twentynine: player.Twentynine, Thirty: player.Thirty, Thirtyone: player.Thirtyone, Thirtytwo: player.Thirtytwo, Thirtythree: player.Thirtythree, Thirtyseven: player.Thirtyseven, Thirtyfive: player.Thirtyfive, Thirtysix: player.Thirtysix, Thirtyfour: player.Thirtyfour, Thirtyeight: player.Thirtyeight, Thirtynine: player.Thirtynine, Fourty: player.Fourty, Fourtyone: player.Fourtyone, Fourtytwo: player.Fourtytwo, Fourtythree: player.Fourtythree, Fourtyfour: player.Fourtyfour, Fourtyfive: player.Fourtyfive, Fourtysix: player.Fourtysix, Fourtyseven: player.Fourtyseven, Fourtyeight: player.Fourtyeight, Fourtynine: player.Fourtynine, Fifty: player.Fifty, L1: player.L1, L2: player.L2, L3: player.L3, L4: player.L4, L5: player.L5, L6: player.L6, L7: player.L7, L8: player.L8, L9: player.L9, L10: player.L10, L11: player.L11, L12: player.L12}
if (player.Zone === 6) player.Zones[5] = {Sprev: player.Sprev, prev: player.prev, East: player.East, West: player.West, North: player.North, South: player.South, Zone: player.Zone, F1: player.F1, F2: player.F2, F5: player.F5, One: player.One, Two: player.Two, Three: player.Three, Four: player.Four, Five: player.Five, Six: player.Six, Seven: player.Seven, Eight: player.Eight, Nine: player.Nine, Ten: player.Ten, Eleven: player.Eleven, Twelve: player.Twelve, Thirteen: player.Thirteen, Fourteen: player.Fourteen, Fifteen: player.Fifteen, Sixteen: player.Sixteen, Seventeen: player.Seventeen, Eighteen: player.Eighteen, Nineteen: player.Nineteen, Twenty: player.Twenty, Twentyone: player.Twentyone, Twentytwo: player.Twentytwo, Twentythree: player.Twentythree, Twentyfour: player.Twentyfour, Twentyfive: player.Twentyfive, Twentysix: player.Twentysix, Twentyseven: player.Twentyseven, Twentyeight: player.Twentyeight, Twentynine: player.Twentynine, Thirty: player.Thirty, Thirtyone: player.Thirtyone, Thirtytwo: player.Thirtytwo, Thirtythree: player.Thirtythree, Thirtyseven: player.Thirtyseven, Thirtyfive: player.Thirtyfive, Thirtysix: player.Thirtysix, Thirtyfour: player.Thirtyfour, Thirtyeight: player.Thirtyeight, Thirtynine: player.Thirtynine, Fourty: player.Fourty, Fourtyone: player.Fourtyone, Fourtytwo: player.Fourtytwo, Fourtythree: player.Fourtythree, Fourtyfour: player.Fourtyfour, Fourtyfive: player.Fourtyfive, Fourtysix: player.Fourtysix, Fourtyseven: player.Fourtyseven, Fourtyeight: player.Fourtyeight, Fourtynine: player.Fourtynine, Fifty: player.Fifty, L1: player.L1, L2: player.L2, L3: player.L3, L4: player.L4, L5: player.L5, L6: player.L6, L7: player.L7, L8: player.L8, L9: player.L9, L10: player.L10, L11: player.L11, L12: player.L12}
if (player.Zone === 7) player.Zones[6] = {Sprev: player.Sprev, prev: player.prev, East: player.East, West: player.West, North: player.North, South: player.South, Zone: player.Zone, F1: player.F1, F2: player.F2, F5: player.F5, One: player.One, Two: player.Two, Three: player.Three, Four: player.Four, Five: player.Five, Six: player.Six, Seven: player.Seven, Eight: player.Eight, Nine: player.Nine, Ten: player.Ten, Eleven: player.Eleven, Twelve: player.Twelve, Thirteen: player.Thirteen, Fourteen: player.Fourteen, Fifteen: player.Fifteen, Sixteen: player.Sixteen, Seventeen: player.Seventeen, Eighteen: player.Eighteen, Nineteen: player.Nineteen, Twenty: player.Twenty, Twentyone: player.Twentyone, Twentytwo: player.Twentytwo, Twentythree: player.Twentythree, Twentyfour: player.Twentyfour, Twentyfive: player.Twentyfive, Twentysix: player.Twentysix, Twentyseven: player.Twentyseven, Twentyeight: player.Twentyeight, Twentynine: player.Twentynine, Thirty: player.Thirty, Thirtyone: player.Thirtyone, Thirtytwo: player.Thirtytwo, Thirtythree: player.Thirtythree, Thirtyseven: player.Thirtyseven, Thirtyfive: player.Thirtyfive, Thirtysix: player.Thirtysix, Thirtyfour: player.Thirtyfour, Thirtyeight: player.Thirtyeight, Thirtynine: player.Thirtynine, Fourty: player.Fourty, Fourtyone: player.Fourtyone, Fourtytwo: player.Fourtytwo, Fourtythree: player.Fourtythree, Fourtyfour: player.Fourtyfour, Fourtyfive: player.Fourtyfive, Fourtysix: player.Fourtysix, Fourtyseven: player.Fourtyseven, Fourtyeight: player.Fourtyeight, Fourtynine: player.Fourtynine, Fifty: player.Fifty, L1: player.L1, L2: player.L2, L3: player.L3, L4: player.L4, L5: player.L5, L6: player.L6, L7: player.L7, L8: player.L8, L9: player.L9, L10: player.L10, L11: player.L11, L12: player.L12}
}

function save2(){
    player.Undo[player.Undo.length] = {F1: player.F1, F2: player.F2, F5: player.F5, No: localStorage.getItem('No'), Lprev: player.Lprev, prevTab1: localStorage.getItem('prevTab1'), prev2: localStorage.getItem('prev2'), prev1: localStorage.getItem('prev1'), prev: localStorage.getItem('prev'), prevZone: localStorage.getItem('prevZone'), prevTab: localStorage.getItem('prevTab'), prevTab2: localStorage.getItem('prevTab2'), Area: localStorage.getItem('Area'), Log: localStorage.getItem('log'), Log1: 	localStorage.getItem('log1'), Log3: 	localStorage.getItem('log3'), Sprev: player.Sprev, prev: player.prev, East: player.East, West: player.West, North: player.North, South: player.South, Zone: player.Zone, One: player.One, Two: player.Two, Three: player.Three, Four: player.Four, Five: player.Five, Six: player.Six, Seven: player.Seven, Eight: player.Eight, Nine: player.Nine, Ten: player.Ten, Eleven: player.Eleven, Twelve: player.Twelve, Thirteen: player.Thirteen, Fourteen: player.Fourteen, Fifteen: player.Fifteen, Sixteen: player.Sixteen, Seventeen: player.Seventeen, Eighteen: player.Eighteen, Nineteen: player.Nineteen, Twenty: player.Twenty, Twentyone: player.Twentyone, Twentytwo: player.Twentytwo, Twentythree: player.Twentythree, Twentyfour: player.Twentyfour, Twentyfive: player.Twentyfive, Twentysix: player.Twentysix, Twentyseven: player.Twentyseven, Twentyeight: player.Twentyeight, Twentynine: player.Twentynine, Thirty: player.Thirty, Thirtyone: player.Thirtyone, Thirtytwo: player.Thirtytwo, Thirtythree: player.Thirtythree, Thirtyseven: player.Thirtyseven, Thirtyfive: player.Thirtyfive, Thirtysix: player.Thirtysix, Thirtyfour: player.Thirtyfour, Thirtyeight: player.Thirtyeight, Thirtynine: player.Thirtynine, Fourty: player.Fourty, Fourtyone: player.Fourtyone, Fourtytwo: player.Fourtytwo, Fourtythree: player.Fourtythree, Fourtyfour: player.Fourtyfour, Fourtyfive: player.Fourtyfive, Fourtysix: player.Fourtysix, Fourtyseven: player.Fourtyseven, Fourtyeight: player.Fourtyeight, Fourtynine: player.Fourtynine, Fifty: player.Fifty, L1: player.L1, L2: player.L2, L3: player.L3, L4: player.L4, L5: player.L5, L6: player.L6, L7: player.L7, L8: player.L8, L9: player.L9, L10: player.L10, L11: player.L11, L12: player.L12}
}

function import2(){
    player.isUndo = true 
    if (player.Undo.length > 1) audio()
    if (player.Undo.length > 0) player.Undo.length = player.Undo.length - 1
    if (player.Undo.length === 0) save2()
    if (player.Undo.length > 0) player.F1 = player.Undo[player.Undo.length - 1].F1, player.F2 = player.Undo[player.Undo.length - 1].F2, player.F5 = player.Undo[player.Undo.length - 1].F5, localStorage.setItem('prev2', player.Undo[player.Undo.length - 1].prev2), localStorage.setItem('No', player.Undo[player.Undo.length - 1].No), player.Lprev = player.Undo[player.Undo.length - 1].Lprev, localStorage.setItem('prev1', player.Undo[player.Undo.length - 1].prev1), localStorage.setItem('prevTab2', player.Undo[player.Undo.length - 1].prevTab2), localStorage.setItem('prevTab1', player.Undo[player.Undo.length - 1].prevTab1), localStorage.setItem('prev', player.Undo[player.Undo.length - 1].prev), localStorage.setItem('prevZone', player.Undo[player.Undo.length - 1].prevZone), localStorage.setItem('prevTab', player.Undo[player.Undo.length - 1].prevTab), localStorage.setItem('Area', player.Undo[player.Undo.length - 1].Area), localStorage.setItem('log3', player.Undo[player.Undo.length - 1].Log3), localStorage.setItem('log', player.Undo[player.Undo.length - 1].Log), localStorage.setItem('log1', player.Undo[player.Undo.length - 1].Log1), player.Sprev = player.Undo[player.Undo.length - 1].Sprev, player.prev = player.Undo[player.Undo.length - 1].prev, player.East = player.Undo[player.Undo.length - 1].East, player.West = player.Undo[player.Undo.length - 1].West, player.North = player.Undo[player.Undo.length - 1].North, player.South = player.Undo[player.Undo.length - 1].South, player.Zone = player.Undo[player.Undo.length - 1].Zone, player.One = player.Undo[player.Undo.length - 1].One, player.Two = player.Undo[player.Undo.length - 1].Two, player.Three = player.Undo[player.Undo.length - 1].Three, player.Four = player.Undo[player.Undo.length - 1].Four, player.Five = player.Undo[player.Undo.length - 1].Five, player.Six = player.Undo[player.Undo.length - 1].Six, player.Seven = player.Undo[player.Undo.length - 1].Seven, player.Eight = player.Undo[player.Undo.length - 1].Eight, player.Nine = player.Undo[player.Undo.length - 1].Nine, player.Ten = player.Undo[player.Undo.length - 1].Ten, player.Eleven = player.Undo[player.Undo.length - 1].Eleven, player.Twelve = player.Undo[player.Undo.length - 1].Twelve, player.Thirteen = player.Undo[player.Undo.length - 1].Thirteen, player.Fourteen = player.Undo[player.Undo.length - 1].Fourteen, player.Fifteen = player.Undo[player.Undo.length - 1].Fifteen, player.Sixteen = player.Undo[player.Undo.length - 1].Sixteen, player.Seventeen = player.Undo[player.Undo.length - 1].Seventeen, player.Eighteen = player.Undo[player.Undo.length - 1].Eighteen, player.Nineteen = player.Undo[player.Undo.length - 1].Nineteen, player.Twenty = player.Undo[player.Undo.length - 1].Twenty, player.Twentyone = player.Undo[player.Undo.length - 1].Twentyone, player.Twentytwo = player.Undo[player.Undo.length - 1].Twentytwo, player.Twentythree = player.Undo[player.Undo.length - 1].Twentythree, player.Twentyfour = player.Undo[player.Undo.length - 1].Twentyfour, player.Twentyfive = player.Undo[player.Undo.length - 1].Twentyfive, player.Twentysix = player.Undo[player.Undo.length - 1].Twentysix, player.Twentyseven = player.Undo[player.Undo.length - 1].Twentyseven, player.Twentyeight = player.Undo[player.Undo.length - 1].Twentyeight, player.Twentynine = player.Undo[player.Undo.length - 1].Twentynine, player.Thirty = player.Undo[player.Undo.length - 1].Thirty, player.Thirtyone = player.Undo[player.Undo.length - 1].Thirtyone, player.Thirtytwo = player.Undo[player.Undo.length - 1].Thirtytwo, player.Thirtythree = player.Undo[player.Undo.length - 1].Thirtythree, player.Thirtyseven = player.Undo[player.Undo.length - 1].Thirtyseven, player.Thirtyfive = player.Undo[player.Undo.length - 1].Thirtyfive, player.Thirtysix = player.Undo[player.Undo.length - 1].Thirtysix, player.Thirtyfour = player.Undo[player.Undo.length - 1].Thirtyfour, player.Thirtyeight = player.Undo[player.Undo.length - 1].Thirtyeight, player.Thirtynine = player.Undo[player.Undo.length - 1].Thirtynine, player.Fourty = player.Undo[player.Undo.length - 1].Fourty, player.Fourtyone = player.Undo[player.Undo.length - 1].Fourtyone, player.Fourtytwo = player.Undo[player.Undo.length - 1].Fourtytwo, player.Fourtythree = player.Undo[player.Undo.length - 1].Fourtythree, player.Fourtyfour = player.Undo[player.Undo.length - 1].Fourtyfour, player.Fourtyfive = player.Undo[player.Undo.length - 1].Fourtyfive, player.Fourtysix = player.Undo[player.Undo.length - 1].Fourtysix, player.Fourtyseven = player.Undo[player.Undo.length - 1].Fourtyseven, player.Fourtyeight = player.Undo[player.Undo.length - 1].Fourtyeight, player.Fourtynine = player.Undo[player.Undo.length - 1].Fourtynine, player.Fifty = player.Undo[player.Undo.length - 1].Fifty, player.L1 = player.Undo[player.Undo.length - 1].L1, player.L2 = player.Undo[player.Undo.length - 1].L2, player.L3 = player.Undo[player.Undo.length - 1].L3, player.L4 = player.Undo[player.Undo.length - 1].L4, player.L5 = player.Undo[player.Undo.length - 1].L5, player.L6 = player.Undo[player.Undo.length - 1].L6, player.L7 = player.Undo[player.Undo.length - 1].L7, player.L8 = player.Undo[player.Undo.length - 1].L8, player.L9 = player.Undo[player.Undo.length - 1].L9, player.L10 = player.Undo[player.Undo.length - 1].L10, player.L11 = player.Undo[player.Undo.length - 1].L11, player.L12 = player.Undo[player.Undo.length - 1].L12
    if (player.Undo.length > 1) audio()
    save1()
    player.intervaeae = false
    player.intervaea = false
    player.intervae = false
    player.interva = false

}


function import1() {
    if (player.Zone === -1){
        player.Sprev = player.Zones[-1].Sprev, player.prev = player.Zones[-1].prev, player.East = player.Zones[-1].East, player.West = player.Zones[-1].West, player.North = player.Zones[-1].North, player.South = player.Zones[-1].South, player.Zone = player.Zones[-1].Zone, player.One = player.Zones[-1].One, player.Two = player.Zones[-1].Two, player.Three = player.Zones[-1].Three, player.Four = player.Zones[-1].Four, player.Five = player.Zones[-1].Five, player.Six = player.Zones[-1].Six, player.Seven = player.Zones[-1].Seven, player.Eight = player.Zones[-1].Eight, player.Nine = player.Zones[-1].Nine, player.Ten = player.Zones[-1].Ten, player.Eleven = player.Zones[-1].Eleven, player.Twelve = player.Zones[-1].Twelve, player.Thirteen = player.Zones[-1].Thirteen, player.Fourteen = player.Zones[-1].Fourteen, player.Fifteen = player.Zones[-1].Fifteen, player.Sixteen = player.Zones[-1].Sixteen, player.Seventeen = player.Zones[-1].Seventeen, player.Eighteen = player.Zones[-1].Eighteen, player.Nineteen = player.Zones[-1].Nineteen, player.Twenty = player.Zones[-1].Twenty, player.Twentyone = player.Zones[-1].Twentyone, player.Twentytwo = player.Zones[-1].Twentytwo, player.Twentythree = player.Zones[-1].Twentythree, player.Twentyfour = player.Zones[-1].Twentyfour, player.Twentyfive = player.Zones[-1].Twentyfive, player.Twentysix = player.Zones[-1].Twentysix, player.Twentyseven = player.Zones[-1].Twentyseven, player.Twentyeight = player.Zones[-1].Twentyeight, player.Twentynine = player.Zones[-1].Twentynine, player.Thirty = player.Zones[-1].Thirty, player.Thirtyone = player.Zones[-1].Thirtyone, player.Thirtytwo = player.Zones[-1].Thirtytwo, player.Thirtythree = player.Zones[-1].Thirtythree, player.Thirtyseven = player.Zones[-1].Thirtyseven, player.Thirtyfive = player.Zones[-1].Thirtyfive, player.Thirtysix = player.Zones[-1].Thirtysix, player.Thirtyfour = player.Zones[-1].Thirtyfour, player.Thirtyeight = player.Zones[-1].Thirtyeight, player.Thirtynine = player.Zones[-1].Thirtynine, player.Fourty = player.Zones[-1].Fourty, player.Fourtyone = player.Zones[-1].Fourtyone, player.Fourtytwo = player.Zones[-1].Fourtytwo, player.Fourtythree = player.Zones[-1].Fourtythree, player.Fourtyfour = player.Zones[-1].Fourtyfour, player.Fourtyfive = player.Zones[-1].Fourtyfive, player.Fourtysix = player.Zones[-1].Fourtysix, player.Fourtyseven = player.Zones[-1].Fourtyseven, player.Fourtyeight = player.Zones[-1].Fourtyeight, player.Fourtynine = player.Zones[-1].Fourtynine, player.Fifty = player.Zones[-1].Fifty, player.L1 = player.Zones[-1].L1, player.L2 = player.Zones[-1].L2, player.L3 = player.Zones[-1].L3, player.L4 = player.Zones[-1].L4, player.L5 = player.Zones[-1].L5, player.L6 = player.Zones[-1].L6, player.L7 = player.Zones[-1].L7, player.L8 = player.Zones[-1].L8, player.L9 = player.Zones[-1].L9, player.L10 = player.Zones[-1].L10, player.L11 = player.Zones[-1].L11, player.L12 = player.Zones[-1].L12, player.F1 = player.Zones[-1].F1, player.F2 = player.Zones[-1].F2, player.F5 = player.Zones[-1].F5
if (player.prev === C2_LIST[player.wood]) player.prev = C2_LIST[5], player.Fourtynine = C2_LIST[player.wood]
player.portal = true
        audio()
    save2()
    return}

    if (player.Zone === 1){

         player.Sprev = player.Zones[0].Sprev, player.prev = player.Zones[0].prev, player.East = player.Zones[0].East, player.West = player.Zones[0].West, player.North = player.Zones[0].North, player.South = player.Zones[0].South, player.Zone = player.Zones[0].Zone, player.One = player.Zones[0].One, player.Two = player.Zones[0].Two, player.Three = player.Zones[0].Three, player.Four = player.Zones[0].Four, player.Five = player.Zones[0].Five, player.Six = player.Zones[0].Six, player.Seven = player.Zones[0].Seven, player.Eight = player.Zones[0].Eight, player.Nine = player.Zones[0].Nine, player.Ten = player.Zones[0].Ten, player.Eleven = player.Zones[0].Eleven, player.Twelve = player.Zones[0].Twelve, player.Thirteen = player.Zones[0].Thirteen, player.Fourteen = player.Zones[0].Fourteen, player.Fifteen = player.Zones[0].Fifteen, player.Sixteen = player.Zones[0].Sixteen, player.Seventeen = player.Zones[0].Seventeen, player.Eighteen = player.Zones[0].Eighteen, player.Nineteen = player.Zones[0].Nineteen, player.Twenty = player.Zones[0].Twenty, player.Twentyone = player.Zones[0].Twentyone, player.Twentytwo = player.Zones[0].Twentytwo, player.Twentythree = player.Zones[0].Twentythree, player.Twentyfour = player.Zones[0].Twentyfour, player.Twentyfive = player.Zones[0].Twentyfive, player.Twentysix = player.Zones[0].Twentysix, player.Twentyseven = player.Zones[0].Twentyseven, player.Twentyeight = player.Zones[0].Twentyeight, player.Twentynine = player.Zones[0].Twentynine, player.Thirty = player.Zones[0].Thirty, player.Thirtyone = player.Zones[0].Thirtyone, player.Thirtytwo = player.Zones[0].Thirtytwo, player.Thirtythree = player.Zones[0].Thirtythree, player.Thirtyseven = player.Zones[0].Thirtyseven, player.Thirtyfive = player.Zones[0].Thirtyfive, player.Thirtysix = player.Zones[0].Thirtysix, player.Thirtyfour = player.Zones[0].Thirtyfour, player.Thirtyeight = player.Zones[0].Thirtyeight, player.Thirtynine = player.Zones[0].Thirtynine, player.Fourty = player.Zones[0].Fourty, player.Fourtyone = player.Zones[0].Fourtyone, player.Fourtytwo = player.Zones[0].Fourtytwo, player.Fourtythree = player.Zones[0].Fourtythree, player.Fourtyfour = player.Zones[0].Fourtyfour, player.Fourtyfive = player.Zones[0].Fourtyfive, player.Fourtysix = player.Zones[0].Fourtysix, player.Fourtyseven = player.Zones[0].Fourtyseven, player.Fourtyeight = player.Zones[0].Fourtyeight, player.Fourtynine = player.Zones[0].Fourtynine, player.Fifty = player.Zones[0].Fifty, player.L1 = player.Zones[0].L1, player.L2 = player.Zones[0].L2, player.L3 = player.Zones[0].L3, player.L4 = player.Zones[0].L4, player.L5 = player.Zones[0].L5, player.L6 = player.Zones[0].L6, player.L7 = player.Zones[0].L7, player.L8 = player.Zones[0].L8, player.L9 = player.Zones[0].L9, player.L10 = player.Zones[0].L10, player.L11 = player.Zones[0].L11, player.L12 = player.Zones[0].L12, player.F1 = player.Zones[0].F1, player.F2 = player.Zones[0].F2, player.F5 = player.Zones[0].F5
        if (player.Thirty === C2_LIST[player.wood] && localStorage.getItem('prev1') === '2') player.Twentynine = C2_LIST[player.wood]
        if (localStorage.getItem('prev1') === '3' && player.Twenty === C2_LIST[player.wood]) player.prev = C2_LIST[player.wood]
        if (localStorage.getItem('prev1') === '1' && player.Fourty === C2_LIST[player.wood]) player.prev = C2_LIST[player.wood]

        if (localStorage.getItem('prev1') === '1') player.Fourty = C4_LIST[player.skin], player.North = 0, player.South = 0
        if (localStorage.getItem('prev1') === '1' && player.prev === C3_LIST[1]) player.prev = C2_LIST[player.floor]
        if (localStorage.getItem('prev1') !== '1'  && player.Fourty !== C2_LIST[player.wood]) player.Fourty = C2_LIST[0]
       
        if (localStorage.getItem('prev1') === '2') player.Thirty = C4_LIST[player.skin], player.North = 1, player.South = -1
        if (localStorage.getItem('prev1') === '2' && player.prev === C3_LIST[1]) player.prev = C2_LIST[player.floor]
        if (localStorage.getItem('prev1') !== '2' && player.Thirty !== C2_LIST[player.wood]) player.Thirty = C2_LIST[0]

        if (localStorage.getItem('prev1') === '3') player.Twenty = C4_LIST[player.skin], player.North = 2, player.South = -2
        if (localStorage.getItem('prev1') === '3' && player.prev === C3_LIST[1]) player.prev = C2_LIST[player.floor]
        if (localStorage.getItem('prev1') !== '3' && player.Twenty !== C2_LIST[player.wood]) player.Twenty = C2_LIST[0]

     

        if (localStorage.getItem('prev1') === '4') player.L11 = C4_LIST[player.skinInverse], player.North = -1, player.South = 1, player.prev = C3_LIST[1]
        if (localStorage.getItem('prev1') !== '4') player.L11 = C3_LIST[1]

        if (localStorage.getItem('prev1') === '5') player.Fourtyone = C4_LIST[player.skinInverse], player.prev = C1_LIST[player.stone], player.North = -1, player.South = 1
        if (localStorage.getItem('prev1') !== '5') player.Fourtyone = C1_LIST[player.stone]
        
        if (localStorage.getItem('prevTab') === '1' && localStorage.getItem('prev1') === '2') player.Twentynine = C2_LIST[player.wood], localStorage.setItem('prevTab', null)
        if (localStorage.getItem('prevTab') === '1' && localStorage.getItem('prev1') !== '2') player.Thirty = C2_LIST[player.wood], localStorage.setItem('prevTab', null)
        player.portal = true
        audio()
        save2()
        return
    }
        
    if (player.Zone === 2){
         player.Sprev = player.Zones[1].Sprev, player.prev = player.Zones[1].prev, player.East = player.Zones[1].East, player.West = player.Zones[1].West, player.North = player.Zones[1].North, player.South = player.Zones[1].South, player.Zone = player.Zones[1].Zone, player.One = player.Zones[1].One, player.Two = player.Zones[1].Two, player.Three = player.Zones[1].Three, player.Four = player.Zones[1].Four, player.Five = player.Zones[1].Five, player.Six = player.Zones[1].Six, player.Seven = player.Zones[1].Seven, player.Eight = player.Zones[1].Eight, player.Nine = player.Zones[1].Nine, player.Ten = player.Zones[1].Ten, player.Eleven = player.Zones[1].Eleven, player.Twelve = player.Zones[1].Twelve, player.Thirteen = player.Zones[1].Thirteen, player.Fourteen = player.Zones[1].Fourteen, player.Fifteen = player.Zones[1].Fifteen, player.Sixteen = player.Zones[1].Sixteen, player.Seventeen = player.Zones[1].Seventeen, player.Eighteen = player.Zones[1].Eighteen, player.Nineteen = player.Zones[1].Nineteen, player.Twenty = player.Zones[1].Twenty, player.Twentyone = player.Zones[1].Twentyone, player.Twentytwo = player.Zones[1].Twentytwo, player.Twentythree = player.Zones[1].Twentythree, player.Twentyfour = player.Zones[1].Twentyfour, player.Twentyfive = player.Zones[1].Twentyfive, player.Twentysix = player.Zones[1].Twentysix, player.Twentyseven = player.Zones[1].Twentyseven, player.Twentyeight = player.Zones[1].Twentyeight, player.Twentynine = player.Zones[1].Twentynine, player.Thirty = player.Zones[1].Thirty, player.Thirtyone = player.Zones[1].Thirtyone, player.Thirtytwo = player.Zones[1].Thirtytwo, player.Thirtythree = player.Zones[1].Thirtythree, player.Thirtyseven = player.Zones[1].Thirtyseven, player.Thirtyfive = player.Zones[1].Thirtyfive, player.Thirtysix = player.Zones[1].Thirtysix, player.Thirtyfour = player.Zones[1].Thirtyfour, player.Thirtyeight = player.Zones[1].Thirtyeight, player.Thirtynine = player.Zones[1].Thirtynine, player.Fourty = player.Zones[1].Fourty, player.Fourtyone = player.Zones[1].Fourtyone, player.Fourtytwo = player.Zones[1].Fourtytwo, player.Fourtythree = player.Zones[1].Fourtythree, player.Fourtyfour = player.Zones[1].Fourtyfour, player.Fourtyfive = player.Zones[1].Fourtyfive, player.Fourtysix = player.Zones[1].Fourtysix, player.Fourtyseven = player.Zones[1].Fourtyseven, player.Fourtyeight = player.Zones[1].Fourtyeight, player.Fourtynine = player.Zones[1].Fourtynine, player.Fifty = player.Zones[1].Fifty, player.L1 = player.Zones[1].L1, player.L2 = player.Zones[1].L2, player.L3 = player.Zones[1].L3, player.L4 = player.Zones[1].L4, player.L5 = player.Zones[1].L5, player.L6 = player.Zones[1].L6, player.L7 = player.Zones[1].L7, player.L8 = player.Zones[1].L8, player.L9 = player.Zones[1].L9, player.L10 = player.Zones[1].L10, player.L11 = player.Zones[1].L11, player.L12 = player.Zones[1].L12, player.F1 = player.Zones[1].F1, player.F2 = player.Zones[1].F2, player.F5 = player.Zones[1].F5
        
        if (localStorage.getItem('prevZone') === '1'){
      
            if (player.Twentyone === C2_LIST[player.wood] && localStorage.getItem('prev') === '2') player.Twentytwo = C2_LIST[player.wood]
        if (localStorage.getItem('prev') === '1') player.Thirtyone = C4_LIST[player.skinInverse], player.North = 0, player.South = 0
        if (localStorage.getItem('prev') !== '1') player.Thirtyone = C2_LIST[0]

        if (localStorage.getItem('prev') === '2') player.Twentyone = C4_LIST[player.skinInverse], player.North = 1, player.South = -1
        if (localStorage.getItem('prev') !== '2' && player.Twentyone !== C2_LIST[player.wood]) player.Twentyone = C2_LIST[0]

        if (localStorage.getItem('prev') === '3') player.Eleven = C4_LIST[player.skinInverse], player.North = 2, player.South = -2
        if (localStorage.getItem('prev') !== '3') player.Eleven = C2_LIST[0]

        if (localStorage.getItem('prev') === '4') player.L2 = C4_LIST[player.skinInverse], player.North = -1, player.South = 1, player.prev = C3_LIST[1]
        if (localStorage.getItem('prev') !== '4') player.L2 = C3_LIST[1], player.prev = C2_LIST[0]

        if (localStorage.getItem('prevTab') === '10' && localStorage.getItem('prev') === '3') player.prev = C2_LIST[player.wood]
        if (localStorage.getItem('prevTab') === '10' && localStorage.getItem('prev') !== '3') player.Eleven = C2_LIST[player.wood]

        if (localStorage.getItem('prevTab') === '1' && localStorage.getItem('prev') === '2') player.Twentytwo = C2_LIST[player.wood], localStorage.setItem('prevTab', null)
        if (localStorage.getItem('prevTab') === '1' && localStorage.getItem('prev') !== '2') player.Twentyone = C2_LIST[player.wood], localStorage.setItem('prevTab', null)
    }

        if (localStorage.getItem('prevZone') === '3'){
            if (localStorage.getItem('prevTab') === '1') player.Twentynine = C2_LIST[player.wood], localStorage.setItem('prevTab', null)
            player.Thirty = C4_LIST[player.skin]}
            player.portal = true
            audio()
            save2() 
            return}
    if (player.Zone === 3){
         player.Sprev = player.Zones[2].Sprev, player.prev = player.Zones[2].prev, player.East = player.Zones[2].East, player.West = player.Zones[2].West, player.North = player.Zones[2].North, player.South = player.Zones[2].South, player.Zone = player.Zones[2].Zone, player.One = player.Zones[2].One, player.Two = player.Zones[2].Two, player.Three = player.Zones[2].Three, player.Four = player.Zones[2].Four, player.Five = player.Zones[2].Five, player.Six = player.Zones[2].Six, player.Seven = player.Zones[2].Seven, player.Eight = player.Zones[2].Eight, player.Nine = player.Zones[2].Nine, player.Ten = player.Zones[2].Ten, player.Eleven = player.Zones[2].Eleven, player.Twelve = player.Zones[2].Twelve, player.Thirteen = player.Zones[2].Thirteen, player.Fourteen = player.Zones[2].Fourteen, player.Fifteen = player.Zones[2].Fifteen, player.Sixteen = player.Zones[2].Sixteen, player.Seventeen = player.Zones[2].Seventeen, player.Eighteen = player.Zones[2].Eighteen, player.Nineteen = player.Zones[2].Nineteen, player.Twenty = player.Zones[2].Twenty, player.Twentyone = player.Zones[2].Twentyone, player.Twentytwo = player.Zones[2].Twentytwo, player.Twentythree = player.Zones[2].Twentythree, player.Twentyfour = player.Zones[2].Twentyfour, player.Twentyfive = player.Zones[2].Twentyfive, player.Twentysix = player.Zones[2].Twentysix, player.Twentyseven = player.Zones[2].Twentyseven, player.Twentyeight = player.Zones[2].Twentyeight, player.Twentynine = player.Zones[2].Twentynine, player.Thirty = player.Zones[2].Thirty, player.Thirtyone = player.Zones[2].Thirtyone, player.Thirtytwo = player.Zones[2].Thirtytwo, player.Thirtythree = player.Zones[2].Thirtythree, player.Thirtyseven = player.Zones[2].Thirtyseven, player.Thirtyfive = player.Zones[2].Thirtyfive, player.Thirtysix = player.Zones[2].Thirtysix, player.Thirtyfour = player.Zones[2].Thirtyfour, player.Thirtyeight = player.Zones[2].Thirtyeight, player.Thirtynine = player.Zones[2].Thirtynine, player.Fourty = player.Zones[2].Fourty, player.Fourtyone = player.Zones[2].Fourtyone, player.Fourtytwo = player.Zones[2].Fourtytwo, player.Fourtythree = player.Zones[2].Fourtythree, player.Fourtyfour = player.Zones[2].Fourtyfour, player.Fourtyfive = player.Zones[2].Fourtyfive, player.Fourtysix = player.Zones[2].Fourtysix, player.Fourtyseven = player.Zones[2].Fourtyseven, player.Fourtyeight = player.Zones[2].Fourtyeight, player.Fourtynine = player.Zones[2].Fourtynine, player.Fifty = player.Zones[2].Fifty, player.L1 = player.Zones[2].L1, player.L2 = player.Zones[2].L2, player.L3 = player.Zones[2].L3, player.L4 = player.Zones[2].L4, player.L5 = player.Zones[2].L5, player.L6 = player.Zones[2].L6, player.L7 = player.Zones[2].L7, player.L8 = player.Zones[2].L8, player.L9 = player.Zones[2].L9, player.L10 = player.Zones[2].L10, player.L11 = player.Zones[2].L11, player.L12 = player.Zones[2].L12, player.F1 = player.Zones[2].F1, player.F2 = player.Zones[2].F2, player.F5 = player.Zones[2].F5
        if (localStorage.getItem('prevTab') === '1') player.Twentytwo = C2_LIST[player.wood], localStorage.setItem('prevTab', null)
        if (localStorage.getItem('prevTab1') === '2') player.Thirtyseven = C2_LIST[player.wood], localStorage.setItem('prevTab1', null)
        else player.Thirtyseven = C2_LIST[0]

        if (localStorage.getItem('prevZone') === '2'){
        player.Twentyone = C4_LIST[player.skinInverse]}

        if (localStorage.getItem('prevZone') === '4'){
          player.Fourtyseven = C4_LIST[player.skin]}
        player.portal = true
        audio()
        save2()
        return}

        if (player.Zone === 4){
          player.Sprev = player.Zones[3].Sprev, player.prev = player.Zones[3].prev, player.East = player.Zones[3].East, player.West = player.Zones[3].West, player.North = player.Zones[3].North, player.South = player.Zones[3].South, player.Zone = player.Zones[3].Zone, player.One = player.Zones[3].One, player.Two = player.Zones[3].Two, player.Three = player.Zones[3].Three, player.Four = player.Zones[3].Four, player.Five = player.Zones[3].Five, player.Six = player.Zones[3].Six, player.Seven = player.Zones[3].Seven, player.Eight = player.Zones[3].Eight, player.Nine = player.Zones[3].Nine, player.Ten = player.Zones[3].Ten, player.Eleven = player.Zones[3].Eleven, player.Twelve = player.Zones[3].Twelve, player.Thirteen = player.Zones[3].Thirteen, player.Fourteen = player.Zones[3].Fourteen, player.Fifteen = player.Zones[3].Fifteen, player.Sixteen = player.Zones[3].Sixteen, player.Seventeen = player.Zones[3].Seventeen, player.Eighteen = player.Zones[3].Eighteen, player.Nineteen = player.Zones[3].Nineteen, player.Twenty = player.Zones[3].Twenty, player.Twentyone = player.Zones[3].Twentyone, player.Twentytwo = player.Zones[3].Twentytwo, player.Twentythree = player.Zones[3].Twentythree, player.Twentyfour = player.Zones[3].Twentyfour, player.Twentyfive = player.Zones[3].Twentyfive, player.Twentysix = player.Zones[3].Twentysix, player.Twentyseven = player.Zones[3].Twentyseven, player.Twentyeight = player.Zones[3].Twentyeight, player.Twentynine = player.Zones[3].Twentynine, player.Thirty = player.Zones[3].Thirty, player.Thirtyone = player.Zones[3].Thirtyone, player.Thirtytwo = player.Zones[3].Thirtytwo, player.Thirtythree = player.Zones[3].Thirtythree, player.Thirtyseven = player.Zones[3].Thirtyseven, player.Thirtyfive = player.Zones[3].Thirtyfive, player.Thirtysix = player.Zones[3].Thirtysix, player.Thirtyfour = player.Zones[3].Thirtyfour, player.Thirtyeight = player.Zones[3].Thirtyeight, player.Thirtynine = player.Zones[3].Thirtynine, player.Fourty = player.Zones[3].Fourty, player.Fourtyone = player.Zones[3].Fourtyone, player.Fourtytwo = player.Zones[3].Fourtytwo, player.Fourtythree = player.Zones[3].Fourtythree, player.Fourtyfour = player.Zones[3].Fourtyfour, player.Fourtyfive = player.Zones[3].Fourtyfive, player.Fourtysix = player.Zones[3].Fourtysix, player.Fourtyseven = player.Zones[3].Fourtyseven, player.Fourtyeight = player.Zones[3].Fourtyeight, player.Fourtynine = player.Zones[3].Fourtynine, player.Fifty = player.Zones[3].Fifty, player.L1 = player.Zones[3].L1, player.L2 = player.Zones[3].L2, player.L3 = player.Zones[3].L3, player.L4 = player.Zones[3].L4, player.L5 = player.Zones[3].L5, player.L6 = player.Zones[3].L6, player.L7 = player.Zones[3].L7, player.L8 = player.Zones[3].L8, player.L9 = player.Zones[3].L9, player.L10 = player.Zones[3].L10, player.L11 = player.Zones[3].L11, player.L12 = player.Zones[3].L12, player.F1 = player.Zones[3].F1, player.F2 = player.Zones[3].F2, player.F5 = player.Zones[3].F5
          if (localStorage.getItem('prevTab1') === '1') player.Seventeen = C2_LIST[player.island], localStorage.setItem('prevTab1', null)
          else if (localStorage.getItem('prevTab1') === '0') player.Seventeen = C1_LIST[player.water]
          if (player.prev === C2_LIST[player.wood] && player.Seventeen === C2_LIST[player.island]) player.prev = C2_LIST[0], player.Seventeen = C2_LIST[player.wood], player.Sprev = C2_LIST[player.island]
  player.portal = true
  player.Sprev = C2_LIST[0]
  if (localStorage.getItem('prevZone') === '3'){
    player.Seven = C4_LIST[player.skinInverse]}

    if (localStorage.getItem('prevZone') === '5'){
      if(localStorage.getItem('prev2') === '1' && player.prev !== C2_LIST[player.wood]){  player.Fourtyone = C4_LIST[player.skin]
      if (player.prev === C5_LIST[1]) player.prev = C2_LIST[1]}
      if (localStorage.getItem('prev2') !== '1' && player.prev !== C2_LIST[player.wood]) player.Fourtyone = C2_LIST[1]
      if (localStorage.getItem('prev2') !== '1' && player.prev === C2_LIST[player.wood]) player.Fourtyone = C2_LIST[player.wood]
      if(localStorage.getItem('prev2') === '2' && player.Fourtynine !== C1_LIST[6])  player.Fourtynine = C4_LIST[player.skin], player.prev = C1_LIST[2], player.East = -23, player.West = 23
      if (localStorage.getItem('prev2') !== '2' && player.Fourtynine !== C1_LIST[6]) player.Fourtynine = C1_LIST[2]
      if(localStorage.getItem('prev2') === '3' && player.Fifty !== C2_LIST[player.wood]) player.Fifty = C4_LIST[player.skin], player.prev = C2_LIST[1], player.East = -22, player.West = 22
      if (localStorage.getItem('prev2') !== '3' && player.Fifty !== C2_LIST[player.wood]) player.Fifty = C2_LIST[1]
      if (localStorage.getItem('prev2') === '3' && player.Fifty === C2_LIST[player.wood]) player.Fifty = C4_LIST[player.skin], player.prev = C2_LIST[player.wood], player.East = -22, player.West = 22
      if(localStorage.getItem('prev2') === '4') player.F5 = C4_LIST[player.skin], player.prev = C5_LIST[1]
      if (localStorage.getItem('prev2') !== '4') player.F5 = C5_LIST[1]

      player.North = -7, player.South = 7
      if(localStorage.getItem('prevTab2') === '1') player.Fourtynine = C1_LIST[6], localStorage.setItem('log3', 3), localStorage.setItem('prevTab2', null)}
          audio()
      save2()
      return}

      if (player.Zone === 5){
        player.Sprev = player.Zones[4].Sprev, player.prev = player.Zones[4].prev, player.East = player.Zones[4].East, player.West = player.Zones[4].West, player.North = player.Zones[4].North, player.South = player.Zones[4].South, player.Zone = player.Zones[4].Zone, player.One = player.Zones[4].One, player.Two = player.Zones[4].Two, player.Three = player.Zones[4].Three, player.Four = player.Zones[4].Four, player.Five = player.Zones[4].Five, player.Six = player.Zones[4].Six, player.Seven = player.Zones[4].Seven, player.Eight = player.Zones[4].Eight, player.Nine = player.Zones[4].Nine, player.Ten = player.Zones[4].Ten, player.Eleven = player.Zones[4].Eleven, player.Twelve = player.Zones[4].Twelve, player.Thirteen = player.Zones[4].Thirteen, player.Fourteen = player.Zones[4].Fourteen, player.Fifteen = player.Zones[4].Fifteen, player.Sixteen = player.Zones[4].Sixteen, player.Seventeen = player.Zones[4].Seventeen, player.Eighteen = player.Zones[4].Eighteen, player.Nineteen = player.Zones[4].Nineteen, player.Twenty = player.Zones[4].Twenty, player.Twentyone = player.Zones[4].Twentyone, player.Twentytwo = player.Zones[4].Twentytwo, player.Twentythree = player.Zones[4].Twentythree, player.Twentyfour = player.Zones[4].Twentyfour, player.Twentyfive = player.Zones[4].Twentyfive, player.Twentysix = player.Zones[4].Twentysix, player.Twentyseven = player.Zones[4].Twentyseven, player.Twentyeight = player.Zones[4].Twentyeight, player.Twentynine = player.Zones[4].Twentynine, player.Thirty = player.Zones[4].Thirty, player.Thirtyone = player.Zones[4].Thirtyone, player.Thirtytwo = player.Zones[4].Thirtytwo, player.Thirtythree = player.Zones[4].Thirtythree, player.Thirtyseven = player.Zones[4].Thirtyseven, player.Thirtyfive = player.Zones[4].Thirtyfive, player.Thirtysix = player.Zones[4].Thirtysix, player.Thirtyfour = player.Zones[4].Thirtyfour, player.Thirtyeight = player.Zones[4].Thirtyeight, player.Thirtynine = player.Zones[4].Thirtynine, player.Fourty = player.Zones[4].Fourty, player.Fourtyone = player.Zones[4].Fourtyone, player.Fourtytwo = player.Zones[4].Fourtytwo, player.Fourtythree = player.Zones[4].Fourtythree, player.Fourtyfour = player.Zones[4].Fourtyfour, player.Fourtyfive = player.Zones[4].Fourtyfive, player.Fourtysix = player.Zones[4].Fourtysix, player.Fourtyseven = player.Zones[4].Fourtyseven, player.Fourtyeight = player.Zones[4].Fourtyeight, player.Fourtynine = player.Zones[4].Fourtynine, player.Fifty = player.Zones[4].Fifty, player.L1 = player.Zones[4].L1, player.L2 = player.Zones[4].L2, player.L3 = player.Zones[4].L3, player.L4 = player.Zones[4].L4, player.L5 = player.Zones[4].L5, player.L6 = player.Zones[4].L6, player.L7 = player.Zones[4].L7, player.L8 = player.Zones[4].L8, player.L9 = player.Zones[4].L9, player.L10 = player.Zones[4].L10, player.L11 = player.Zones[4].L11, player.L12 = player.Zones[4].L12, player.F1 = player.Zones[4].F1, player.F2 = player.Zones[4].F2, player.F5 = player.Zones[4].F5
player.portal = true
player.Lprev = C1_LIST[2]
if (localStorage.getItem('prevZone') === '4'){
  if (player.Nine !== C1_LIST[6]) player.Nine = C1_LIST[2]

  if(localStorage.getItem('prev2') === '1') player.One = C4_LIST[player.skin], player.prev = C2_LIST[1], player.East = -31, player.West = 31
  if (localStorage.getItem('prev2') !== '1') player.One = C2_LIST[1]
  if(localStorage.getItem('prev2') === '4') player.F1 = C4_LIST[player.skin], player.prev = C5_LIST[1], player.East = -21, player.West = 21
  if (localStorage.getItem('prev2') !== '4') player.F1 = C5_LIST[1]

  player.Ten = C1_LIST[2]}

if (localStorage.getItem('prevZone') === '6'){
  if(localStorage.getItem('prevTab2') === '1') player.Nineteen = C1_LIST[6], localStorage.setItem('log3', 2), localStorage.setItem('prevTab2', null)
 if (!C4_LIST.includes(player.Twelve)) player.Eleven = C4_LIST[player.skinInverse]
moveRight()}
        audio()
    save2()
    return}

    if (player.Zone === 6){
      player.Sprev = player.Zones[5].Sprev, player.prev = player.Zones[5].prev, player.East = player.Zones[5].East, player.West = player.Zones[5].West, player.North = player.Zones[5].North, player.South = player.Zones[5].South, player.Zone = player.Zones[5].Zone, player.One = player.Zones[5].One, player.Two = player.Zones[5].Two, player.Three = player.Zones[5].Three, player.Four = player.Zones[5].Four, player.Five = player.Zones[5].Five, player.Six = player.Zones[5].Six, player.Seven = player.Zones[5].Seven, player.Eight = player.Zones[5].Eight, player.Nine = player.Zones[5].Nine, player.Ten = player.Zones[5].Ten, player.Eleven = player.Zones[5].Eleven, player.Twelve = player.Zones[5].Twelve, player.Thirteen = player.Zones[5].Thirteen, player.Fourteen = player.Zones[5].Fourteen, player.Fifteen = player.Zones[5].Fifteen, player.Sixteen = player.Zones[5].Sixteen, player.Seventeen = player.Zones[5].Seventeen, player.Eighteen = player.Zones[5].Eighteen, player.Nineteen = player.Zones[5].Nineteen, player.Twenty = player.Zones[5].Twenty, player.Twentyone = player.Zones[5].Twentyone, player.Twentytwo = player.Zones[5].Twentytwo, player.Twentythree = player.Zones[5].Twentythree, player.Twentyfour = player.Zones[5].Twentyfour, player.Twentyfive = player.Zones[5].Twentyfive, player.Twentysix = player.Zones[5].Twentysix, player.Twentyseven = player.Zones[5].Twentyseven, player.Twentyeight = player.Zones[5].Twentyeight, player.Twentynine = player.Zones[5].Twentynine, player.Thirty = player.Zones[5].Thirty, player.Thirtyone = player.Zones[5].Thirtyone, player.Thirtytwo = player.Zones[5].Thirtytwo, player.Thirtythree = player.Zones[5].Thirtythree, player.Thirtyseven = player.Zones[5].Thirtyseven, player.Thirtyfive = player.Zones[5].Thirtyfive, player.Thirtysix = player.Zones[5].Thirtysix, player.Thirtyfour = player.Zones[5].Thirtyfour, player.Thirtyeight = player.Zones[5].Thirtyeight, player.Thirtynine = player.Zones[5].Thirtynine, player.Fourty = player.Zones[5].Fourty, player.Fourtyone = player.Zones[5].Fourtyone, player.Fourtytwo = player.Zones[5].Fourtytwo, player.Fourtythree = player.Zones[5].Fourtythree, player.Fourtyfour = player.Zones[5].Fourtyfour, player.Fourtyfive = player.Zones[5].Fourtyfive, player.Fourtysix = player.Zones[5].Fourtysix, player.Fourtyseven = player.Zones[5].Fourtyseven, player.Fourtyeight = player.Zones[5].Fourtyeight, player.Fourtynine = player.Zones[5].Fourtynine, player.Fifty = player.Zones[5].Fifty, player.L1 = player.Zones[5].L1, player.L2 = player.Zones[5].L2, player.L3 = player.Zones[5].L3, player.L4 = player.Zones[5].L4, player.L5 = player.Zones[5].L5, player.L6 = player.Zones[5].L6, player.L7 = player.Zones[5].L7, player.L8 = player.Zones[5].L8, player.L9 = player.Zones[5].L9, player.L10 = player.Zones[5].L10, player.L11 = player.Zones[5].L11, player.L12 = player.Zones[5].L12, player.F1 = player.Zones[5].F1, player.F2 = player.Zones[5].F2, player.F5 = player.Zones[5].F5
player.portal = true
clearTimeout(player.timeS)
if (localStorage.getItem('prevZone') === '5'){
  if(player.prev === C2_LIST[player.wood]) player.Nineteen = C2_LIST[player.wood], player.prev = C2_LIST[1]
  player.Twenty = C4_LIST[player.skin]
  player.Sludge = false}
      audio()
  save2()
  return}

  if (player.Zone === 7){
    player.Sprev = player.Zones[6].Sprev, player.prev = player.Zones[6].prev, player.East = player.Zones[6].East, player.West = player.Zones[6].West, player.North = player.Zones[6].North, player.South = player.Zones[6].South, player.Zone = player.Zones[6].Zone, player.One = player.Zones[6].One, player.Two = player.Zones[6].Two, player.Three = player.Zones[6].Three, player.Four = player.Zones[6].Four, player.Five = player.Zones[6].Five, player.Six = player.Zones[6].Six, player.Seven = player.Zones[6].Seven, player.Eight = player.Zones[6].Eight, player.Nine = player.Zones[6].Nine, player.Ten = player.Zones[6].Ten, player.Eleven = player.Zones[6].Eleven, player.Twelve = player.Zones[6].Twelve, player.Thirteen = player.Zones[6].Thirteen, player.Fourteen = player.Zones[6].Fourteen, player.Fifteen = player.Zones[6].Fifteen, player.Sixteen = player.Zones[6].Sixteen, player.Seventeen = player.Zones[6].Seventeen, player.Eighteen = player.Zones[6].Eighteen, player.Nineteen = player.Zones[6].Nineteen, player.Twenty = player.Zones[6].Twenty, player.Twentyone = player.Zones[6].Twentyone, player.Twentytwo = player.Zones[6].Twentytwo, player.Twentythree = player.Zones[6].Twentythree, player.Twentyfour = player.Zones[6].Twentyfour, player.Twentyfive = player.Zones[6].Twentyfive, player.Twentysix = player.Zones[6].Twentysix, player.Twentyseven = player.Zones[6].Twentyseven, player.Twentyeight = player.Zones[6].Twentyeight, player.Twentynine = player.Zones[6].Twentynine, player.Thirty = player.Zones[6].Thirty, player.Thirtyone = player.Zones[6].Thirtyone, player.Thirtytwo = player.Zones[6].Thirtytwo, player.Thirtythree = player.Zones[6].Thirtythree, player.Thirtyseven = player.Zones[6].Thirtyseven, player.Thirtyfive = player.Zones[6].Thirtyfive, player.Thirtysix = player.Zones[6].Thirtysix, player.Thirtyfour = player.Zones[6].Thirtyfour, player.Thirtyeight = player.Zones[6].Thirtyeight, player.Thirtynine = player.Zones[6].Thirtynine, player.Fourty = player.Zones[6].Fourty, player.Fourtyone = player.Zones[6].Fourtyone, player.Fourtytwo = player.Zones[6].Fourtytwo, player.Fourtythree = player.Zones[6].Fourtythree, player.Fourtyfour = player.Zones[6].Fourtyfour, player.Fourtyfive = player.Zones[6].Fourtyfive, player.Fourtysix = player.Zones[6].Fourtysix, player.Fourtyseven = player.Zones[6].Fourtyseven, player.Fourtyeight = player.Zones[6].Fourtyeight, player.Fourtynine = player.Zones[6].Fourtynine, player.Fifty = player.Zones[6].Fifty, player.L1 = player.Zones[6].L1, player.L2 = player.Zones[6].L2, player.L3 = player.Zones[6].L3, player.L6 = player.Zones[6].L6, player.L6 = player.Zones[6].L6, player.L6 = player.Zones[6].L6, player.L7 = player.Zones[6].L7, player.L8 = player.Zones[6].L8, player.L9 = player.Zones[6].L9, player.L10 = player.Zones[6].L10, player.L11 = player.Zones[6].L11, player.L12 = player.Zones[6].L12, player.F1 = player.Zones[6].F1, player.F2 = player.Zones[6].F2, player.F5 = player.Zones[6].F5
player.portal = true

if (localStorage.getItem('prevZone') === '5'){
player.Ten = C4_LIST[player.skin]
player.Sludge = false}
    audio()
save2()
return}
}

function woodLeft() {

  if(player.Two === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.One !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.One) || player.One === C1_LIST[2]) return player.Two = player.Lprev, player.Lprev = player.One, player.One = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.One === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.One = C2_LIST[player.wood]
  if(player.Three === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Two !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Two) || player.Two === C1_LIST[2]) return player.Three = player.Lprev, player.Lprev = player.Two, player.Two = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Two === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Two = C2_LIST[player.wood]
  if(player.Four === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Three !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Three) || player.Three === C1_LIST[2]) return player.Four = player.Lprev, player.Lprev = player.Three, player.Three = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Three === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Three = C2_LIST[player.wood]
  if(player.Five === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Four !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Four) || player.Four === C1_LIST[2]) return player.Five = player.Lprev, player.Lprev = player.Four, player.Four = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Four === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Four = C2_LIST[player.wood]
  if(player.Six === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Five !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Five) || player.Five === C1_LIST[2]) return player.Six = player.Lprev, player.Lprev = player.Five, player.Five = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Five === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Five = C2_LIST[player.wood]
  if(player.Seven === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Six !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Six) || player.Six === C1_LIST[2]) return player.Seven = player.Lprev, player.Lprev = player.Six, player.Six = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Six === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Six = C2_LIST[player.wood]
  if(player.Eight === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Seven !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Seven) || player.Seven === C1_LIST[2]) return player.Eight = player.Lprev, player.Lprev = player.Seven, player.Seven = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Seven === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Seven = C2_LIST[player.wood]
  if(player.Nine === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Eight !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Eight) || player.Eight === C1_LIST[2]) return player.Nine = player.Lprev, player.Lprev = player.Eight, player.Eight = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Eight === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Eight = C2_LIST[player.wood]
  if(player.Ten === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Nine !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Nine) || player.Nine === C1_LIST[2]) return player.Ten = player.Lprev, player.Lprev = player.Nine, player.Nine = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Nine === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Nine = C2_LIST[player.wood]

  if(player.Twelve === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Eleven !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Eleven) || player.Eleven === C1_LIST[2]) return player.Twelve = player.Lprev, player.Lprev = player.Eleven, player.Eleven = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Eleven === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Eleven = C2_LIST[player.wood]
  if(player.Thirteen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twelve !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twelve) || player.Twelve === C1_LIST[2]) return player.Thirteen = player.Lprev, player.Lprev = player.Twelve, player.Twelve = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Twelve === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twelve = C2_LIST[player.wood]
  if(player.Fourteen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirteen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirteen) || player.Thirteen === C1_LIST[2]) return player.Fourteen = player.Lprev, player.Lprev = player.Thirteen, player.Thirteen = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Thirteen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirteen = C2_LIST[player.wood]
  if(player.Fifteen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourteen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourteen) || player.Fourteen === C1_LIST[2]) return player.Fifteen = player.Lprev, player.Lprev = player.Fourteen, player.Fourteen = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Fourteen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourteen = C2_LIST[player.wood]
  if(player.Sixteen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fifteen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fifteen) || player.Fifteen === C1_LIST[2]) return player.Sixteen = player.Lprev, player.Lprev = player.Fifteen, player.Fifteen = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Fifteen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fifteen = C2_LIST[player.wood]
  if(player.Seventeen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Sixteen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Sixteen) || player.Sixteen === C1_LIST[2]) return player.Seventeen = player.Lprev, player.Lprev = player.Sixteen, player.Sixteen = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Sixteen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Sixteen = C2_LIST[player.wood]
  if(player.Eighteen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Seventeen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Seventeen) || player.Seventeen === C1_LIST[2]) return player.Eighteen = player.Lprev, player.Lprev = player.Seventeen, player.Seventeen = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Seventeen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Seventeen = C2_LIST[player.wood]
  if(player.Nineteen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Eighteen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Eighteen) || player.Eighteen === C1_LIST[2]) return player.Nineteen = player.Lprev, player.Lprev = player.Eighteen, player.Eighteen = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Eighteen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Eighteen = C2_LIST[player.wood]
  if(player.Twenty === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Nineteen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Nineteen) || player.Nineteen === C1_LIST[2]) return player.Twenty = player.Lprev, player.Lprev = player.Nineteen, player.Nineteen = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Nineteen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Nineteen = C2_LIST[player.wood]

  if(player.Twentytwo === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentyone !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentyone) || player.Twentyone === C1_LIST[2]) return player.Twentytwo = player.Lprev, player.Lprev = player.Twentyone, player.Twentyone = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Twentyone === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentyone = C2_LIST[player.wood]
  if(player.Twentythree === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentytwo !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentytwo) || player.Twentytwo === C1_LIST[2]) return player.Twentythree = player.Lprev, player.Lprev = player.Twentytwo, player.Twentytwo = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Twentytwo === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentytwo = C2_LIST[player.wood]
  if(player.Twentyfour === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentythree !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentythree) || player.Twentythree === C1_LIST[2]) return player.Twentyfour = player.Lprev, player.Lprev = player.Twentythree, player.Twentythree = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Twentythree === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentythree = C2_LIST[player.wood]
  if(player.Twentyfive === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentyfour !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentyfour) || player.Twentyfour === C1_LIST[2]) return player.Twentyfive = player.Lprev, player.Lprev = player.Twentyfour, player.Twentyfour = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Twentyfour === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentyfour = C2_LIST[player.wood]
  if(player.Twentysix === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentyfive !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentyfive) || player.Twentyfive === C1_LIST[2]) return player.Twentysix = player.Lprev, player.Lprev = player.Twentyfive, player.Twentyfive = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Twentyfive === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentyfive = C2_LIST[player.wood]
  if(player.Twentyseven === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentysix !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentysix) || player.Twentysix === C1_LIST[2]) return player.Twentyseven = player.Lprev, player.Lprev = player.Twentysix, player.Twentysix = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Twentysix === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentysix = C2_LIST[player.wood]
  if(player.Twentyeight === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentyseven !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentyseven) || player.Twentyseven === C1_LIST[2]) return player.Twentyeight = player.Lprev, player.Lprev = player.Twentyseven, player.Twentyseven = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Twentyseven === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentyseven = C2_LIST[player.wood]
  if(player.Twentynine === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentyeight !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentyeight) || player.Twentyeight === C1_LIST[2]) return player.Twentynine = player.Lprev, player.Lprev = player.Twentyeight, player.Twentyeight = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Twentyeight === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentyeight = C2_LIST[player.wood]
  if(player.Thirty === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentynine !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentynine) || player.Twentynine === C1_LIST[2]) return player.Thirty = player.Lprev, player.Lprev = player.Twentynine, player.Twentynine = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Twentynine === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentynine = C2_LIST[player.wood]

  if(player.Thirtytwo === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtyone !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtyone) || player.Thirtyone === C1_LIST[2]) return player.Thirtytwo = player.Lprev, player.Lprev = player.Thirtyone, player.Thirtyone = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Thirtyone === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtyone = C2_LIST[player.wood]
  if(player.Thirtythree === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtytwo !== C2_LIST[player.wood])
  if (!C1_LIST.includes(player.Thirtytwo) || player.Thirtytwo === C1_LIST[2]){ return player.Thirtythree = player.Lprev, player.Lprev = player.Thirtytwo, player.Thirtytwo = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
else if(player.Thirtytwo === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtytwo = C2_LIST[player.wood]
  if(player.Thirtyfour === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtythree !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtythree) || player.Thirtythree === C1_LIST[2]) return player.Thirtyfour = player.Lprev, player.Lprev = player.Thirtythree, player.Thirtythree = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Thirtythree === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtythree = C2_LIST[player.wood]
  if(player.Thirtyfive === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtyfour !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtyfour) || player.Thirtyfour === C1_LIST[2]) return player.Thirtyfive = player.Lprev, player.Lprev = player.Thirtyfour, player.Thirtyfour = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Thirtyfour === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtyfour = C2_LIST[player.wood]
  if(player.Thirtysix === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtyfive !== C2_LIST[player.wood]){ 
    if (!C1_LIST.includes(player.Thirtyfive) || player.Thirtyfive === C1_LIST[2]) return player.Thirtysix = player.Lprev, player.Lprev = player.Thirtyfive, player.Thirtyfive = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Thirtyfive === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtyfive = C2_LIST[player.wood]
  if(player.Thirtyseven === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtysix !== C2_LIST[player.wood]){ 
    if (!C1_LIST.includes(player.Thirtysix) || player.Thirtysix === C1_LIST[2]) return player.Thirtyseven = player.Lprev, player.Lprev = player.Thirtysix, player.Thirtysix = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Thirtysix === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtysix = C2_LIST[player.wood]
  if(player.Thirtyeight === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtyseven !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtyseven) || player.Thirtyseven === C1_LIST[2]) return player.Thirtyeight = player.Lprev, player.Lprev = player.Thirtyseven, player.Thirtyseven = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Thirtyseven === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtyseven = C2_LIST[player.wood]
  if(player.Thirtynine === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtyeight !== C2_LIST[player.wood]){ 
    if (!C1_LIST.includes(player.Thirtyeight) || player.Thirtyeight === C1_LIST[2]) return player.Thirtynine = player.Lprev, player.Lprev = player.Thirtyeight, player.Thirtyeight = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Thirtyeight === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtyeight = C2_LIST[player.wood]
  if(player.Fourty === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtynine !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtynine) || player.Thirtynine === C1_LIST[2]) return player.Fourty = player.Lprev, player.Lprev = player.Thirtynine, player.Thirtynine = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Thirtynine === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtynine = C2_LIST[player.wood]

  if(player.Fourtytwo === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourtyone !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourtyone) || player.Fourtyone === C1_LIST[2]) return player.Fourtytwo = player.Lprev, player.Lprev = player.Fourtyone, player.Fourtyone = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Fourtyone === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourtyone = C2_LIST[player.wood]
  if(player.Fourtythree === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourtytwo !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourtytwo) || player.Fourtytwo === C1_LIST[2]) return player.Fourtythree = player.Lprev, player.Lprev = player.Fourtytwo, player.Fourtytwo = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Fourtytwo === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourtytwo = C2_LIST[player.wood]
  if(player.Fourtyfour === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourtythree !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourtyfive) || player.Fourtythree === C1_LIST[2]) return player.Fourtyfour = player.Lprev, player.Lprev = player.Fourtythree, player.Fourtythree = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Fourtythree === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourtythree = C2_LIST[player.wood]
  if(player.Fourtyfive === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourtyfour !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourtyfour) || player.Fourtyfour === C1_LIST[2]) return player.Fourtyfive = player.Lprev, player.Lprev = player.Fourtyfour, player.Fourtyfour = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Fourtyfour === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourtyfour = C2_LIST[player.wood]
  if(player.Fourtysix === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourtyfive !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourtyfive) || player.Fourtyfive === C1_LIST[2]) return player.Fourtysix = player.Lprev, player.Lprev = player.Fourtyfive, player.Fourtyfive = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Fourtyfive === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourtyfive = C2_LIST[player.wood]
  if(player.Fourtyseven === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourtysix !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourtysix) || player.Fourtysix === C1_LIST[2]) return player.Fourtyseven = player.Lprev, player.Lprev = player.Fourtysix, player.Fourtysix = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Fourtysix === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourtysix = C2_LIST[player.wood]
  if(player.Fourtyeight === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourtyseven !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourtyseven) || player.Fourtyseven === C1_LIST[2]) return player.Fourtyeight = player.Lprev, player.Lprev = player.Fourtyseven, player.Fourtyseven = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Fourtyseven === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourtyseven = C2_LIST[player.wood]
  if(player.Fourtynine === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourtyeight !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourtyeight) || player.Fourtyeight === C1_LIST[2]) return player.Fourtynine = player.Lprev, player.Lprev = player.Fourtyeight, player.Fourtyeight = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Fourtyeight === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourtyeight = C2_LIST[player.wood]
  if(player.Fifty === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourtynine !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourtynine) || player.Fourtynine === C1_LIST[2]) return player.Fifty = player.Lprev, player.Lprev = player.Fourtynine, player.Fourtynine = C1_LIST[6],  player.timeF = setTimeout(woodLeft, 200)}
  else if(player.Fourtynine === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourtynine = C2_LIST[player.wood]

}

function moveLeft(){

  if (player.Fifteen === C1_LIST[6] && player.Zone === 6 && C4_LIST.includes(player.Sixteen)) player.Lprev = C1_LIST[2]

  if (C4_LIST.includes(player.Three)){
    if (player.Two === C2_LIST[player.wood] && player.One === C1_LIST[2]) player.Two = player.Sprev, player.Lprev = player.One, player.One = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Two === C1_LIST[6] && player.One !== C2_LIST[player.wood]){ 
      if (player.One === C1_LIST[2] || !C1_LIST.includes(player.One)) player.Two = player.Lprev, player.Lprev = player.One, player.One = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
      if (player.Two === C1_LIST[6] && player.One === C1_LIST[player.water]) player.One = C2_LIST[player.island], player.Two = player.Lprev
  }
  if (C4_LIST.includes(player.Four)){
    if (player.Three === C2_LIST[player.wood] && player.Two === C1_LIST[2]) player.Three = player.Sprev, player.Lprev = player.Two, player.Two = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Three === C1_LIST[6] && player.Two !== C2_LIST[player.wood]){ 
      if (player.Two === C1_LIST[2] || !C1_LIST.includes(player.Two)) player.Three = player.Lprev, player.Lprev = player.Two, player.Two = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Five)){
    if (player.Four === C2_LIST[player.wood] && player.Three === C1_LIST[2]) player.Four = player.Sprev, player.Lprev = player.Three, player.Three = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Four === C1_LIST[6] && player.Three !== C2_LIST[player.wood]){ 
      if (player.Three === C1_LIST[2] || !C1_LIST.includes(player.Three)) player.Four = player.Lprev, player.Lprev = player.Three, player.Three = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Six)){
    if (player.Five === C2_LIST[player.wood] && player.Four === C1_LIST[2]) player.Five = player.Sprev, player.Lprev = player.Four, player.Four = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Five === C1_LIST[6] && player.Four !== C2_LIST[player.wood]){ 
      if (player.Four === C1_LIST[2] || !C1_LIST.includes(player.Four)) player.Five = player.Lprev, player.Lprev = player.Four, player.Four = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Seven)){
    if (player.Six === C2_LIST[player.wood] && player.Five === C1_LIST[2]) player.Six = player.Sprev, player.Lprev = player.Five, player.Five = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Six === C1_LIST[6] && player.Five !== C2_LIST[player.wood]){ 
      if (player.Five === C1_LIST[2] || !C1_LIST.includes(player.Five)) player.Six = player.Lprev, player.Lprev = player.Five, player.Five = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Eight)){
    if (player.Seven === C2_LIST[player.wood] && player.Six === C1_LIST[2]) player.Seven = player.Sprev, player.Lprev = player.Six, player.Six = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Seven === C1_LIST[6] && player.Six !== C2_LIST[player.wood]){ 
      if (player.Six === C1_LIST[2] || !C1_LIST.includes(player.Six)) player.Seven = player.Lprev, player.Lprev = player.Six, player.Six = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Nine)){
    if (player.Eight === C2_LIST[player.wood] && player.Seven === C1_LIST[2]) player.Eight = player.Sprev, player.Lprev = player.Seven, player.Seven = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Eight === C1_LIST[6] && player.Seven !== C2_LIST[player.wood]){ 
      if (player.Seven === C1_LIST[2] || !C1_LIST.includes(player.Seven)) player.Eight = player.Lprev, player.Lprev = player.Seven, player.Seven = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Ten)){
    if (player.Nine === C2_LIST[player.wood] && player.Eight === C1_LIST[2]) player.Nine = player.Sprev, player.Lprev = player.Eight, player.Eight = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Nine === C1_LIST[6] && player.Eight !== C2_LIST[player.wood]){ 
      if (player.Eight === C1_LIST[2] || !C1_LIST.includes(player.Eight)) player.Nine = player.Lprev, player.Lprev = player.Eight, player.Eight = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }

  if (C4_LIST.includes(player.Thirteen)){
    if (player.Twelve === C2_LIST[player.wood] && player.Eleven === C1_LIST[2]) player.Twelve = player.Sprev, player.Lprev = player.Eleven, player.Eleven = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Twelve === C1_LIST[6] && player.Eleven !== C2_LIST[player.wood]){ 
      if (player.Eleven === C1_LIST[2] || !C1_LIST.includes(player.Eleven)) player.Twelve = player.Lprev, player.Lprev = player.Eleven, player.Eleven = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
      if (player.Twelve === C1_LIST[6] && player.Eleven === C1_LIST[player.water]) player.Eleven = C2_LIST[player.island], player.Twelve = player.Lprev
  }
  if (C4_LIST.includes(player.Fourteen)){
    if (player.Thirteen === C2_LIST[player.wood] && player.Twelve === C1_LIST[2]) player.Thirteen = player.Sprev, player.Lprev = player.Twelve, player.Twelve = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Thirteen === C1_LIST[6] && player.Twelve !== C2_LIST[player.wood]){ 
      if (player.Twelve === C1_LIST[2] || !C1_LIST.includes(player.Twelve)) player.Thirteen = player.Lprev, player.Lprev = player.Twelve, player.Twelve = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Fifteen)){
    if (player.Fourteen === C2_LIST[player.wood] && player.Thirteen === C1_LIST[2]) player.Fourteen = player.Sprev, player.Lprev = player.Thirteen, player.Thirteen = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Fourteen === C1_LIST[6] && player.Thirteen !== C2_LIST[player.wood]){ 
      if (player.Thirteen === C1_LIST[2] || !C1_LIST.includes(player.Thirteen)) player.Fourteen = player.Lprev, player.Lprev = player.Thirteen, player.Thirteen = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Sixteen)){
    if (player.Fifteen === C2_LIST[player.wood] && player.Fourteen === C1_LIST[2]) player.Fifteen = player.Sprev, player.Lprev = player.Fourteen, player.Fourteen = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Fifteen === C1_LIST[6] && player.Fourteen !== C2_LIST[player.wood]){ 
      if (player.Fourteen === C1_LIST[2] || !C1_LIST.includes(player.Fourteen)) player.Fifteen = player.Lprev, player.Lprev = player.Fourteen, player.Fourteen = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Seventeen)){
    if (player.Sixteen === C2_LIST[player.wood] && player.Fifteen === C1_LIST[2]) player.Sixteen = player.Sprev, player.Lprev = player.Fifteen, player.Fifteen = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Sixteen === C1_LIST[6] && player.Fifteen !== C2_LIST[player.wood]){ 
      if (player.Fifteen === C1_LIST[2] || !C1_LIST.includes(player.Fifteen)) player.Sixteen = player.Lprev, player.Lprev = player.Fifteen, player.Fifteen = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Eighteen)){
    if (player.Seventeen === C2_LIST[player.wood] && player.Sixteen === C1_LIST[2]) player.Seventeen = player.Sprev, player.Lprev = player.Sixteen, player.Sixteen = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Seventeen === C1_LIST[6] && player.Sixteen !== C2_LIST[player.wood]){ 
      if (player.Sixteen === C1_LIST[2] || !C1_LIST.includes(player.Sixteen)) player.Seventeen = player.Lprev, player.Lprev = player.Sixteen, player.Sixteen = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Nineteen)){
    if (player.Eighteen === C2_LIST[player.wood] && player.Seventeen === C1_LIST[2]) player.Eighteen = player.Sprev, player.Lprev = player.Seventeen, player.Seventeen = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Eighteen === C1_LIST[6] && player.Seventeen !== C2_LIST[player.wood]){ 
      if (player.Seventeen === C1_LIST[2] || !C1_LIST.includes(player.Seventeen)) player.Eighteen = player.Lprev, player.Lprev = player.Seventeen, player.Seventeen = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Twenty)){
    if (player.Nineteen === C2_LIST[player.wood] && player.Eighteen === C1_LIST[2]) player.Nineteen = player.Sprev, player.Lprev = player.Eighteen, player.Eighteen = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Nineteen === C1_LIST[6] && player.Eighteen !== C2_LIST[player.wood]){ 
      if (player.Eighteen === C1_LIST[2] || !C1_LIST.includes(player.Eighteen)) player.Nineteen = player.Lprev, player.Lprev = player.Eighteen, player.Eighteen = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }

  if (C4_LIST.includes(player.Twentythree)){
    if (player.Thirtytwo === C2_LIST[player.wood] && player.Thirtyone === C1_LIST[2]) player.Thirtytwo = player.Sprev, player.Lprev = player.Thirtyone, player.Thirtyone = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Thirtytwo === C1_LIST[6] && player.Thirtyone !== C2_LIST[player.wood]){ 
      if (player.Thirtyone === C1_LIST[2] || !C1_LIST.includes(player.Thirtyone)) player.Thirtytwo = player.Lprev, player.Lprev = player.Thirtyone, player.Thirtyone = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Twentyfour)){
    if (player.Thirtythree === C2_LIST[player.wood] && player.Thirtytwo === C1_LIST[2]) player.Thirtythree = player.Sprev, player.Lprev = player.Thirtytwo, player.Thirtytwo = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Thirtythree === C1_LIST[6] && player.Thirtytwo !== C2_LIST[player.wood]){ 
      if (player.Thirtytwo === C1_LIST[2] || !C1_LIST.includes(player.Thirtytwo)) player.Thirtythree = player.Lprev, player.Lprev = player.Thirtytwo, player.Thirtytwo = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Twentyfive)){
    if (player.Thirtyfour === C2_LIST[player.wood] && player.Thirtythree === C1_LIST[2]) player.Thirtyfour = player.Sprev, player.Lprev = player.Thirtythree, player.Thirtythree = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Thirtyfour === C1_LIST[6] && player.Thirtythree !== C2_LIST[player.wood]){ 
      if (player.Thirtythree === C1_LIST[2] || !C1_LIST.includes(player.Thirtythree)) player.Thirtyfour = player.Lprev, player.Lprev = player.Thirtythree, player.Thirtythree = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Twentysix)){
    if (player.Thirtyfive === C2_LIST[player.wood] && player.Thirtyfour === C1_LIST[2]) player.Thirtyfive = player.Sprev, player.Lprev = player.Thirtyfour, player.Thirtyfour = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Thirtyfive === C1_LIST[6] && player.Thirtyfour !== C2_LIST[player.wood]){ 
      if (player.Thirtyfour === C1_LIST[2] || !C1_LIST.includes(player.Thirtyfour)) player.Thirtyfive = player.Lprev, player.Lprev = player.Thirtyfour, player.Thirtyfour = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Twentyseven)){
    if (player.Thirtysix === C2_LIST[player.wood] && player.Thirtyfive === C1_LIST[2]) player.Thirtysix = player.Sprev, player.Lprev = player.Thirtyfive, player.Thirtyfive = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Thirtysix === C1_LIST[6] && player.Thirtyfive !== C2_LIST[player.wood]){ 
      if (player.Thirtyfive === C1_LIST[2] || !C1_LIST.includes(player.Thirtyfive)) player.Thirtysix = player.Lprev, player.Lprev = player.Thirtyfive, player.Thirtyfive = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Twentyeight)){
    if (player.Twentyseven === C2_LIST[player.wood] && player.Thirtysix === C1_LIST[2]) player.Twentyseven = player.Sprev, player.Lprev = player.Thirtysix, player.Thirtysix = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Twentyseven === C1_LIST[6] && player.Thirtysix !== C2_LIST[player.wood]){ 
      if (player.Thirtysix === C1_LIST[2] || !C1_LIST.includes(player.Thirtysix)) player.Twentyseven = player.Lprev, player.Lprev = player.Thirtysix, player.Thirtysix = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Twentynine)){
    if (player.Twentyeight === C2_LIST[player.wood] && player.Twentyseven === C1_LIST[2]) player.Twentyeight = player.Sprev, player.Lprev = player.Twentyseven, player.Twentyseven = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Twentyeight === C1_LIST[6] && player.Twentyseven !== C2_LIST[player.wood]){ 
      if (player.Twentyseven === C1_LIST[2] || !C1_LIST.includes(player.Twentyseven)) player.Twentyeight = player.Lprev, player.Lprev = player.Twentyseven, player.Twentyseven = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Thirty)){
    if (player.Twentynine === C2_LIST[player.wood] && player.Twentyeight === C1_LIST[2]) player.Twentynine = player.Sprev, player.Lprev = player.Twentyeight, player.Twentyeight = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Twentynine === C1_LIST[6] && player.Twentyeight !== C2_LIST[player.wood]){ 
      if (player.Twentyeight === C1_LIST[2] || !C1_LIST.includes(player.Twentyeight)) player.Twentynine = player.Lprev, player.Lprev = player.Twentyeight, player.Twentyeight = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }

  if (C4_LIST.includes(player.Thirtythree)){
    if (player.Thirtytwo === C2_LIST[player.wood] && player.Thirtyone === C1_LIST[2]) player.Thirtytwo = player.Sprev, player.Lprev = player.Thirtyone, player.Thirtyone = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Thirtytwo === C1_LIST[6] && player.Thirtyone !== C2_LIST[player.wood]){ 
      if (player.Thirtyone === C1_LIST[2] || !C1_LIST.includes(player.Thirtyone)) player.Thirtytwo = player.Lprev, player.Lprev = player.Thirtyone, player.Thirtyone = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
      if (player.Thirtytwo === C1_LIST[6] && player.Thirtyone === C1_LIST[player.water]) player.Thirtyone = C2_LIST[player.island], player.Thirtytwo = player.Lprev
  }
  if (C4_LIST.includes(player.Thirtyfour)){
    if (player.Thirtythree === C2_LIST[player.wood] && player.Thirtytwo === C1_LIST[2]) player.Thirtythree = player.Sprev, player.Lprev = player.Thirtytwo, player.Thirtytwo = C1_LIST[6],player.timeF = setTimeout(woodLeft, 200)
    if (player.Thirtythree === C1_LIST[6] && player.Thirtytwo !== C2_LIST[player.wood]){ 
      if (player.Thirtytwo === C1_LIST[2] || !C1_LIST.includes(player.Thirtytwo)) player.Thirtythree = player.Lprev, player.Lprev = player.Thirtytwo, player.Thirtytwo = C1_LIST[6],player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Thirtyfive)){
    if (player.Thirtyfour === C2_LIST[player.wood] && player.Thirtythree === C1_LIST[2]) player.Thirtyfour = player.Sprev, player.Lprev = player.Thirtythree, player.Thirtythree = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Thirtyfour === C1_LIST[6] && player.Thirtythree !== C2_LIST[player.wood]){ 
      if (player.Thirtythree === C1_LIST[2] || !C1_LIST.includes(player.Thirtythree)) player.Thirtyfour = player.Lprev, player.Lprev = player.Thirtythree, player.Thirtythree = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Thirtysix)){
    if (player.Thirtyfive === C2_LIST[player.wood] && player.Thirtyfour === C1_LIST[2]) player.Thirtyfive = player.Sprev, player.Lprev = player.Thirtyfour, player.Thirtyfour = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Thirtyfive === C1_LIST[6] && player.Thirtyfour !== C2_LIST[player.wood]){ 
      if (player.Thirtyfour === C1_LIST[2] || !C1_LIST.includes(player.Thirtyfour)) player.Thirtyfive = player.Lprev, player.Lprev = player.Thirtyfour, player.Thirtyfour = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Thirtyseven)){
    if (player.Thirtysix === C2_LIST[player.wood] && player.Thirtyfive === C1_LIST[2]) player.Thirtysix = player.Sprev, player.Lprev = player.Thirtyfive, player.Thirtyfive = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Thirtysix === C1_LIST[6] && player.Thirtyfive !== C2_LIST[player.wood]){ 
      if (player.Thirtyfive === C1_LIST[2] || !C1_LIST.includes(player.Thirtyfive)) player.Thirtysix = player.Lprev, player.Lprev = player.Thirtyfive, player.Thirtyfive = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Thirtyeight)){
    if (player.Thirtyseven === C2_LIST[player.wood] && player.Thirtysix === C1_LIST[2]) player.Thirtyseven = player.Sprev, player.Lprev = player.Thirtysix, player.Thirtysix = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Thirtyseven === C1_LIST[6] && player.Thirtysix !== C2_LIST[player.wood]){ 
      if (player.Thirtysix === C1_LIST[2] || !C1_LIST.includes(player.Thirtysix)) player.Thirtyseven = player.Lprev, player.Lprev = player.Thirtysix, player.Thirtysix = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Thirtynine)){
    if (player.Thirtyeight === C2_LIST[player.wood] && player.Thirtyseven === C1_LIST[2]) player.Thirtyeight = player.Sprev, player.Lprev = player.Thirtyseven, player.Thirtyseven = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Thirtyeight === C1_LIST[6] && player.Thirtyseven !== C2_LIST[player.wood]){ 
      if (player.Thirtyseven === C1_LIST[2] || !C1_LIST.includes(player.Thirtyseven)) player.Thirtyeight = player.Lprev, player.Lprev = player.Thirtyseven, player.Thirtyseven = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Fourty)){
    if (player.Thirtynine === C2_LIST[player.wood] && player.Thirtyeight === C1_LIST[2]) player.Thirtynine = player.Sprev, player.Lprev = player.Thirtyeight, player.Thirtyeight = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Thirtynine === C1_LIST[6] && player.Thirtyeight !== C2_LIST[player.wood]){ 
      if (player.Thirtyeight === C1_LIST[2] || !C1_LIST.includes(player.Thirtyeight)) player.Thirtynine = player.Lprev, player.Lprev = player.Thirtyeight, player.Thirtyeight = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  } 

  if (C4_LIST.includes(player.Fourtythree)){
    if (player.Fourtytwo === C2_LIST[player.wood] && player.Fourtyone === C1_LIST[2]) player.Fourtytwo = player.Sprev, player.Lprev = player.Fourtyone, player.Fourtyone = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Fourtytwo === C1_LIST[6] && player.Fourtyone !== C2_LIST[player.wood]){ 
      if (player.Fourtyone === C1_LIST[2] || !C1_LIST.includes(player.Fourtyone)) player.Fourtytwo = player.Lprev, player.Lprev = player.Fourtyone, player.Fourtyone = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Fourtyfour)){
    if (player.Fourtythree === C2_LIST[player.wood] && player.Fourtytwo === C1_LIST[2]) player.Fourtythree = player.Sprev, player.Lprev = player.Fourtytwo, player.Fourtytwo = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Fourtythree === C1_LIST[6] && player.Fourtytwo !== C2_LIST[player.wood]){ 
      if (player.Fourtytwo === C1_LIST[2] || !C1_LIST.includes(player.Fourtytwo)) player.Fourtythree = player.Lprev, player.Lprev = player.Fourtytwo, player.Fourtytwo = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Fourtyfive)){
    if (player.Fourtyfour === C2_LIST[player.wood] && player.Fourtythree === C1_LIST[2]) player.Fourtyfour = player.Sprev, player.Lprev = player.Fourtythree, player.Fourtythree = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Fourtyfour === C1_LIST[6] && player.Fourtythree !== C2_LIST[player.wood]){ 
      if (player.Fourtythree === C1_LIST[2] || !C1_LIST.includes(player.Fourtythree)) player.Fourtyfour = player.Lprev, player.Lprev = player.Fourtythree, player.Fourtythree = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Fourtysix)){
    if (player.Fourtyfive === C2_LIST[player.wood] && player.Fourtyfour === C1_LIST[2]) player.Fourtyseven = player.Sprev, player.Lprev = player.Fourtyfour, player.Fourtyfour = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Fourtyfive === C1_LIST[6] && player.Fourtyfour !== C2_LIST[player.wood]){ 
      if (player.Fourtyfour === C1_LIST[2] || !C1_LIST.includes(player.Fourtyfour)) player.Fourtyseven = player.Lprev, player.Lprev = player.Fourtyfour, player.Fourtyfour = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Fourtyseven)){
    if (player.Fourtysix === C2_LIST[player.wood] && player.Fourtyfive === C1_LIST[2]) player.Fourtysix = player.Sprev, player.Lprev = player.Fourtyfive, player.Fourtyfive = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Fourtysix === C1_LIST[6] && player.Fourtyfive !== C2_LIST[player.wood]){ 
      if (player.Fourtyfive === C1_LIST[2] || !C1_LIST.includes(player.Fourtyfive)) player.Fourtysix = player.Lprev, player.Lprev = player.Fourtyfive, player.Fourtyfive = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Fourtyeight)){
    if (player.Fourtyseven === C2_LIST[player.wood] && player.Fourtysix === C1_LIST[2]) player.Fourtyseven = player.Sprev, player.Lprev = player.Fourtysix, player.Fourtysix = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Fourtyseven === C1_LIST[6] && player.Fourtysix !== C2_LIST[player.wood]){ 
      if (player.Fourtysix === C1_LIST[2] || !C1_LIST.includes(player.Fourtysix)) player.Fourtyseven = player.Lprev, player.Lprev = player.Fourtysix, player.Fourtysix = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Fourtynine)){
    if (player.Fourtyeight === C2_LIST[player.wood] && player.Fourtyseven === C1_LIST[2]) player.Fourtyeight = player.Sprev, player.Lprev = player.Fourtyseven, player.Fourtyseven = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Fourtyeight === C1_LIST[6] && player.Fourtyseven !== C2_LIST[player.wood]){ 
      if (player.Fourtyseven === C1_LIST[2] || !C1_LIST.includes(player.Fourtyseven)) player.Fourtyeight = player.Lprev, player.Lprev = player.Fourtyseven, player.Fourtyseven = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }
  if (C4_LIST.includes(player.Fifty)){
    if (player.Fourtynine === C2_LIST[player.wood] && player.Fourtyeight === C1_LIST[2]) player.Fourtynine = player.Sprev, player.Lprev = player.Fourtyeight, player.Fourtyeight = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)
    if (player.Fourtynine === C1_LIST[6] && player.Fourtyeight !== C2_LIST[player.wood]){ 
      if (player.Fourtyeight === C1_LIST[2] || !C1_LIST.includes(player.Fourtyeight)) player.Fourtynine = player.Lprev, player.Lprev = player.Fourtyeight, player.Fourtyeight = C1_LIST[6], player.timeF = setTimeout(woodLeft, 200)}
  }

if(C4_LIST.includes(player.One) && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Two) && player.One === C1_LIST[2]) return player.Sdir = 1, player.Two = player.prev, player.prev = player.One, player.One = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Two) && player.One !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Three) && player.Two === C1_LIST[2]) return player.Sdir = 1, player.Three = player.prev, player.prev = player.Two, player.Two = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Three) && player.Two !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Four) && player.Three === C1_LIST[2]) return player.Sdir = 1, player.Four = player.prev, player.prev = player.Three, player.Three = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Four) && player.Three !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Five) && player.Four === C1_LIST[2]) return player.Sdir = 1, player.Five = player.prev, player.prev = player.Four, player.Four = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Five) && player.Four !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Six) && player.Five === C1_LIST[2]) return player.Sdir = 1, player.Six = player.prev, player.prev = player.Five, player.Five = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Six) && player.Five !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Seven) && player.Six === C1_LIST[2]) return player.Sdir = 1, player.Seven = player.prev, player.prev = player.Six, player.Six = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Seven) && player.Six !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Eight) && player.Seven === C1_LIST[2]) return player.Sdir = 1, player.Eight = player.prev, player.prev = player.Seven, player.Seven = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Eight) && player.Seven !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Nine) && player.Eight === C1_LIST[2]) return player.Sdir = 1, player.Nine = player.prev, player.prev = player.Eight, player.Eight = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Nine) && player.Eight !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Ten) && player.Nine === C1_LIST[2]) return player.Sdir = 1, player.Ten = player.prev, player.prev = player.Nine, player.Nine = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Ten) && player.Nine !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()

  if(C4_LIST.includes(player.Eleven) && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twelve) && player.Eleven === C1_LIST[2]) return player.Sdir = 1, player.Twelve = player.prev, player.prev = player.Eleven, player.Eleven = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twelve) && player.Eleven !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirteen) && player.Twelve === C1_LIST[2]) return player.Sdir = 1, player.Thirteen = player.prev, player.prev = player.Twelve, player.Twelve = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirteen) && player.Twelve !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Fourteen) && player.Thirteen === C1_LIST[2]) return player.Sdir = 1, player.Fourteen = player.prev, player.prev = player.Thirteen, player.Thirteen = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Fourteen) && player.Thirteen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Fifteen) && player.Fourteen === C1_LIST[2]) return player.Sdir = 1, player.Fifteen = player.prev, player.prev = player.Fourteen, player.Fourteen = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Fifteen) && player.Fourteen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Sixteen) && player.Fifteen === C1_LIST[2]) return player.Sdir = 1, player.Sixteen = player.prev, player.prev = player.Fifteen, player.Fifteen = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Sixteen) && player.Fifteen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Seventeen) && player.Sixteen === C1_LIST[2]) return player.Sdir = 1, player.Seventeen = player.prev, player.prev = player.Sixteen, player.Sixteen = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Seventeen) && player.Sixteen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Eighteen) && player.Seventeen === C1_LIST[2]) return player.Sdir = 1, player.Eighteen = player.prev, player.prev = player.Seventeen, player.Seventeen = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Eighteen) && player.Seventeen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Nineteen) && player.Eighteen === C1_LIST[2]) return player.Sdir = 1, player.Nineteen = player.prev, player.prev = player.Eighteen, player.Eighteen = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Nineteen) && player.Eighteen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twenty) && player.Nineteen === C1_LIST[2]) return player.Sdir = 1, player.Twenty = player.prev, player.prev = player.Nineteen, player.Nineteen = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twenty) && player.Nineteen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()

  if(C4_LIST.includes(player.Twentyone) && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentytwo) && player.Twentyone === C1_LIST[2]) return player.Sdir = 1, player.Twentytwo = player.prev, player.prev = player.Twentyone, player.Twentyone = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentytwo) && player.Twentyone !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentythree) && player.Twentytwo === C1_LIST[2]) return player.Sdir = 1, player.Twentythree = player.prev, player.prev = player.Twentytwo, player.Twentytwo = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentythree) && player.Twentytwo !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentyfour) && player.Twentythree === C1_LIST[2]) return player.Sdir = 1, player.Twentyfour = player.prev, player.prev = player.Twentythree, player.Twentythree = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentyfour) && player.Twentythree !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentyfive) && player.Twentyfour === C1_LIST[2]) return player.Sdir = 1, player.Twentyfive = player.prev, player.prev = player.Twentyfour, player.Twentyfour = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentyfive) && player.Twentyfour !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentysix) && player.Twentyfive === C1_LIST[2]) return player.Sdir = 1, player.Twentysix = player.prev, player.prev = player.Twentyfive, player.Twentyfive = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentysix) && player.Twentyfive !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentyseven) && player.Twentysix === C1_LIST[2]) return player.Sdir = 1, player.Twentyseven = player.prev, player.prev = player.Twentysix, player.Twentysix = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentyseven) && player.Twentysix !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentyeight) && player.Twentyseven === C1_LIST[2]) return player.Sdir = 1, player.Twentyeight = player.prev, player.prev = player.Twentyseven, player.Twentyseven = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentyeight) && player.Twentyseven !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentynine) && player.Twentyeight === C1_LIST[2]) return player.Sdir = 1, player.Twentynine = player.prev, player.prev = player.Twentyeight, player.Twentyeight = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentynine) && player.Twentyeight !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirty) && player.Twentynine === C1_LIST[2]) return player.Sdir = 1, player.Thirty = player.prev, player.prev = player.Twentynine, player.Twentynine = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirty) && player.Twentynine !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()

  if(C4_LIST.includes(player.Thirtyone) && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtytwo) && player.Thirtyone === C1_LIST[2]) return player.Sdir = 1, player.Thirtytwo = player.prev, player.prev = player.Thirtyone, player.Thirtyone = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtytwo) && player.Thirtyone !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtythree) && player.Thirtytwo === C1_LIST[2]) return player.Sdir = 1, player.Thirtythree = player.prev, player.prev = player.Thirtytwo, player.Thirtytwo = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtythree) && player.Thirtytwo !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtyfour) && player.Thirtythree === C1_LIST[2]) return player.Sdir = 1, player.Thirtyfour = player.prev, player.prev = player.Thirtythree, player.Thirtythree = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtyfour) && player.Thirtythree !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtyfive) && player.Thirtyfour === C1_LIST[2]) return player.Sdir = 1, player.Thirtyfive = player.prev, player.prev = player.Thirtyfour, player.Thirtyfour = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtyfive) && player.Thirtyfour !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtysix) && player.Thirtyfive === C1_LIST[2]) return player.Sdir = 1, player.Thirtysix = player.prev, player.prev = player.Thirtyfive, player.Thirtyfive = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtysix) && player.Thirtyfive !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtyseven) && player.Thirtysix === C1_LIST[2]) return player.Sdir = 1, player.Thirtyseven = player.prev, player.prev = player.Thirtysix, player.Thirtysix = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtyseven) && player.Thirtysix !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtyeight) && player.Thirtyseven === C1_LIST[2]) return player.Sdir = 1, player.Thirtyeight = player.prev, player.prev = player.Thirtyseven, player.Thirtyseven = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtyeight) && player.Thirtyseven !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtynine) && player.Thirtyeight === C1_LIST[2]) return player.Sdir = 1, player.Thirtynine = player.prev, player.prev = player.Thirtyeight, player.Thirtyeight = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtynine) && player.Thirtyeight !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Fourty) && player.Thirtynine === C1_LIST[2]) return player.Sdir = 1, player.Fourty = player.prev, player.prev = player.Thirtynine, player.Thirtynine = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Fourty) && player.Thirtynine !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()

  if(C4_LIST.includes(player.Fourtyone) && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
    if(C4_LIST.includes(player.Fourtytwo) && player.Fourtyone === C1_LIST[2]) return player.Sdir = 1, player.Fourtytwo = player.prev, player.prev = player.Fourtyone, player.Fourtyone = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
    else if (C4_LIST.includes(player.Fourtytwo) && player.Fourtyone !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
    if(C4_LIST.includes(player.Fourtythree) && player.Fourtytwo === C1_LIST[2]) return player.Sdir = 1, player.Fourtythree = player.prev, player.prev = player.Fourtytwo, player.Fourtytwo = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
    else if (C4_LIST.includes(player.Fourtythree) && player.Fourtytwo !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
    if(C4_LIST.includes(player.Fourtyfour) && player.Fourtythree === C1_LIST[2]) return player.Sdir = 1, player.Fourtyfour = player.prev, player.prev = player.Fourtythree, player.Fourtythree = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
    else if (C4_LIST.includes(player.Fourtyfour) && player.Fourtythree !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
    if(C4_LIST.includes(player.Fourtyfive) && player.Fourtyfour === C1_LIST[2]) return player.Sdir = 1, player.Fourtyfive = player.prev, player.prev = player.Fourtyfour, player.Fourtyfour = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
    else if (C4_LIST.includes(player.Fourtyfive) && player.Fourtyfour !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
    if(C4_LIST.includes(player.Fourtysix) && player.Fourtyfive === C1_LIST[2]) return player.Sdir = 1, player.Fourtysix = player.prev, player.prev = player.Fourtyfive, player.Fourtyfive = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
    else if (C4_LIST.includes(player.Fourtysix) && player.Fourtyfive !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
    if(C4_LIST.includes(player.Fourtyseven) && player.Fourtysix === C1_LIST[2]) return player.Sdir = 1, player.Fourtyseven = player.prev, player.prev = player.Fourtysix, player.Fourtysix = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
    else if (C4_LIST.includes(player.Fourtyseven) && player.Fourtysix !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
    if(C4_LIST.includes(player.Fourtyeight) && player.Fourtyseven === C1_LIST[2]) return player.Sdir = 1, player.Fourtyeight = player.prev, player.prev = player.Fourtyseven, player.Fourtyseven = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
    else if (C4_LIST.includes(player.Fourtyeight) && player.Fourtyseven !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
    if(C4_LIST.includes(player.Fourtynine) && player.Fourtyeight === C1_LIST[2]) return player.Sdir = 1, player.Fourtynine = player.prev, player.prev = player.Fourtyeight, player.Fourtyeight = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
    else if (C4_LIST.includes(player.Fourtynine) && player.Fourtyeight !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
    if(C4_LIST.includes(player.Fifty) && player.Fourtynine === C1_LIST[2]) return player.Sdir = 1, player.Fifty = player.prev, player.prev = player.Fourtynine, player.Fourtynine = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), player.timeS = setTimeout(moveLeft, 200), player.Sludge = true
    else if (C4_LIST.includes(player.Fifty) && player.Fourtynine !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()

    if (player.ML == false) return

  if (C4_LIST.includes(player.L2) && player.L1 === C3_LIST[1]) player.L2 = player.prev, player.prev = player.L1, player.L1 = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
   if (C4_LIST.includes(player.L3) && player.L2 === C3_LIST[1]) player.L3 = player.prev, player.prev = player.L2, player.L2 = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
  if (C4_LIST.includes(player.L4) && player.L3 === C3_LIST[1]) player.L4 = player.prev, player.prev = player.L3, player.L3 = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
  if (C4_LIST.includes(player.L5) && player.L4 === C3_LIST[1]) player.L5 = player.prev, player.prev = player.L4, player.L4 = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
  if (C4_LIST.includes(player.L6) && player.L5 === C3_LIST[1]) player.L6 = player.prev, player.prev = player.L5, player.L5 = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
  if (C4_LIST.includes(player.L7) && player.L6 === C3_LIST[1]) player.L7 = player.prev, player.prev = player.L6, player.L6 = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
  if (C4_LIST.includes(player.L8) && player.L7 === C3_LIST[1]) player.L8 = player.prev, player.prev = player.L7, player.L7 = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
  if (C4_LIST.includes(player.L9) && player.L8 === C3_LIST[1]) player.L9 = player.prev, player.prev = player.L8, player.L8 = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
 if (C4_LIST.includes(player.L10) && player.L9 === C3_LIST[1]) player.L10 = player.prev, player.prev = player.L9, player.L9 = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
  if (C4_LIST.includes(player.L11) && player.L10 === C3_LIST[1]) player.L11 = player.prev, player.prev = player.L10, player.L10 = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
  if (C4_LIST.includes(player.L12) && player.L11 === C3_LIST[1]) player.L12 = player.prev, player.prev = player.L11, player.L11 = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()

 if (C4_LIST.includes(player.Two) && player.One !== C1_LIST[player.tree] && player.One !== C1_LIST[player.water]) player.Two = player.prev, player.prev = player.One, player.One = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
  if (player.Two === C2_LIST[player.wood] && C4_LIST.includes(player.Three) && player.One !== C2_LIST[player.wood] || player.Two === C1_LIST[6] && C4_LIST.includes(player.Three) && player.One !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.One) || player.One === C1_LIST[player.water]) player.Two = player.Sprev, player.Sprev = player.One, player.One = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.One = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Three) && player.Two !== C1_LIST[player.tree] && player.Two !== C1_LIST[player.water]) player.Three = player.prev, player.prev = player.Two, player.Two = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
 if (player.Three === C2_LIST[player.wood] && C4_LIST.includes(player.Four) && player.Two !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Two) || player.Two === C1_LIST[player.water]) player.Three = player.Sprev, player.Sprev = player.Two, player.Two = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Two = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Four) && player.Three !== C1_LIST[player.tree] && player.Three  !== C1_LIST[player.water]) player.Four = player.prev, player.prev = player.Three, player.Three = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
  if (player.Four === C2_LIST[player.wood] && C4_LIST.includes(player.Five) && player.Three !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Three) || player.Three === C1_LIST[player.water]) player.Four = player.Sprev, player.Sprev = player.Three, player.Three = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Three = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Five) && player.Four !== C1_LIST[player.tree] && player.Four  !== C1_LIST[player.water]) player.Five = player.prev, player.prev = player.Four, player.Four = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
if (player.Five === C2_LIST[player.wood] && C4_LIST.includes(player.Six) && player.Four !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Four) || player.Four === C1_LIST[player.water]) player.Five = player.Sprev, player.Sprev = player.Four, player.Four = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Four = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Six) && player.Five !== C1_LIST[player.tree] && player.Five  !== C1_LIST[player.water]) player.Six = player.prev, player.prev = player.Five, player.Five = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
    if (player.Six === C2_LIST[player.wood] && C4_LIST.includes(player.Seven) && player.Five !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Five) || player.Five === C1_LIST[player.water]) player.Six = player.Sprev, player.Sprev = player.Five, player.Five = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Five = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Seven) && player.Six !== C1_LIST[player.tree] && player.Six !== C1_LIST[player.water]) player.Seven = player.prev, player.prev = player.Six, player.Six = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
if (player.Seven === C2_LIST[player.wood] && C4_LIST.includes(player.Eight) && player.Six !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Six) || player.Six === C1_LIST[player.water]) player.Seven = player.Sprev, player.Sprev = player.Six, player.Six = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Six = C2_LIST[player.island]
 if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Eight) && player.Seven !== C1_LIST[player.tree] && player.Seven !== C1_LIST[player.water]) player.Eight = player.prev, player.prev = player.Seven, player.Seven = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
 if (player.Eight === C2_LIST[player.wood] && C4_LIST.includes(player.Nine) && player.Seven !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Seven) || player.Seven === C1_LIST[player.water]) player.Eight = player.Sprev, player.Sprev = player.Seven, player.Seven = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Seven = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Nine) && player.Eight !== C1_LIST[player.tree] && player.Eight !== C1_LIST[player.water]) player.Nine = player.prev, player.prev = player.Eight, player.Eight = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
 if (player.Nine === C2_LIST[player.wood] && C4_LIST.includes(player.Ten) && player.Eight !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Eight) || player.Eight === C1_LIST[player.water]) player.Nine = player.Sprev, player.Sprev = player.Eight, player.Eight = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Eight = C2_LIST[player.island]
     if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
if (C4_LIST.includes(player.Ten) && player.Nine !== C1_LIST[player.tree] && player.Nine !== C1_LIST[player.water]) player.Ten = player.prev, player.prev = player.Nine, player.Nine = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()

 if (C4_LIST.includes(player.Twelve) && player.Eleven !== C1_LIST[player.tree] && player.Eleven !== C1_LIST[player.water]) player.Twelve = player.prev, player.prev = player.Eleven, player.Eleven = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
 if (player.Twelve === C2_LIST[player.wood] && C4_LIST.includes(player.Thirteen) && player.Eleven !== C2_LIST[player.wood] || player.Twelve === C1_LIST[6] && C4_LIST.includes(player.Thirteen) && player.Eleven !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Eleven) || player.Eleven === C1_LIST[player.water]) player.Twelve = player.Sprev, player.Sprev = player.Eleven, player.Eleven = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Eleven = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Thirteen) && player.Twelve !== C1_LIST[player.tree] && player.Twelve !== C1_LIST[player.water]) player.Thirteen = player.prev, player.prev = player.Twelve, player.Twelve = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
 if (player.Thirteen === C2_LIST[player.wood] && C4_LIST.includes(player.Fourteen) && player.Twelve !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Twelve) || player.Twelve === C1_LIST[player.water]) player.Thirteen = player.Sprev, player.Sprev = player.Twelve, player.Twelve = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twelve = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Fourteen) && player.Thirteen !== C1_LIST[player.tree] && player.Thirteen !== C1_LIST[player.water]) player.Fourteen = player.prev, player.prev = player.Thirteen, player.Thirteen = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
 if (player.Fourteen === C2_LIST[player.wood] && C4_LIST.includes(player.Fifteen) && player.Thirteen !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Thirteen) || player.Thirteen === C1_LIST[player.water]) player.Fourteen = player.Sprev, player.Sprev = player.Thirteen, player.Thirteen = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirteen = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Fifteen) && player.Fourteen !== C1_LIST[player.tree] && player.Fourteen !== C1_LIST[player.water]) player.Fifteen = player.prev, player.prev = player.Fourteen, player.Fourteen = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
 if (player.Fifteen === C2_LIST[player.wood] && C4_LIST.includes(player.Sixteen) && player.Fourteen !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Fourteen) || player.Fourteen === C1_LIST[player.water]) player.Fifteen = player.Sprev, player.Sprev = player.Fourteen, player.Fourteen = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourteen = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Sixteen) && player.Fifteen !== C1_LIST[player.tree] && player.Fifteen !== C1_LIST[player.water]) player.Sixteen = player.prev, player.prev = player.Fifteen, player.Fifteen = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
  if (player.Sixteen === C2_LIST[player.wood] && C4_LIST.includes(player.Seventeen) && player.Fifteen !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Fifteen) || player.Fifteen === C1_LIST[player.water]) player.Sixteen = player.Sprev, player.Sprev = player.Fifteen, player.Fifteen = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fifteen = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Seventeen) && player.Sixteen !== C1_LIST[player.tree] && player.Sixteen !== C1_LIST[player.water]) player.Seventeen = player.prev, player.prev = player.Sixteen, player.Sixteen = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
if (player.Seventeen === C2_LIST[player.wood] && C4_LIST.includes(player.Eighteen) && player.Sixteen !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Sixteen) || player.Sixteen === C1_LIST[player.water]) player.Seventeen = player.Sprev, player.Sprev = player.Sixteen, player.Sixteen = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Sixteen = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Eighteen) && player.Seventeen !== C1_LIST[player.tree] && player.Seventeen !== C1_LIST[player.water]) player.Eighteen = player.prev, player.prev = player.Seventeen, player.Seventeen = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
   if (player.Eighteen === C2_LIST[player.wood] && C4_LIST.includes(player.Nineteen) && player.Seventeen !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Seventeen) || player.Seventeen === C1_LIST[player.water]) player.Eighteen = player.Sprev, player.Sprev = player.Seventeen, player.Seventeen = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Seventeen = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Nineteen) && player.Eighteen !== C1_LIST[player.tree] && player.Eighteen !== C1_LIST[player.water]) player.Nineteen = player.prev, player.prev = player.Eighteen, player.Eighteen = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
if (player.Nineteen === C2_LIST[player.wood] && C4_LIST.includes(player.Twenty) && player.Eighteen !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Eighteen) || player.Eighteen === C1_LIST[player.water]) player.Nineteen = player.Sprev, player.Sprev = player.Eighteen, player.Eighteen = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Eighteen = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Twenty) && player.Nineteen !== C1_LIST[player.tree] && player.Nineteen !== C1_LIST[player.water]) player.Twenty = player.prev, player.prev = player.Nineteen, player.Nineteen = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()

   if (C4_LIST.includes(player.Twentytwo) && player.Twentyone === C2_LIST[player.wood] && player.Zone === 3) localStorage.setItem('prevTab', 1), localStorage.setItem('log', 2), localStorage.setItem('log1', 0),  player.Twentyone = C2_LIST[0]
   if (C4_LIST.includes(player.Twentytwo) && player.Twentyone === C2_LIST[player.wood] && player.Zone === 2) localStorage.setItem('prevTab', 1), localStorage.setItem('log', 1), player.Twentyone = C2_LIST[0]
 if (C4_LIST.includes(player.Twentytwo) && player.Twentyone !== C1_LIST[player.tree] && player.Twentyone !== C1_LIST[player.water]) player.Twentytwo = player.prev, player.prev = player.Twentyone, player.Twentyone = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
 if (player.Twentytwo === C2_LIST[player.wood] && C4_LIST.includes(player.Twentythree) && player.Twentyone !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Twentyone) || player.Twentyone === C1_LIST[player.water]) player.Twentytwo = player.Sprev, player.Sprev = player.Twentyone, player.Twentyone = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentyone = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Twentythree) && player.Twentytwo !== C1_LIST[player.tree] && player.Twentytwo !== C1_LIST[player.water]) player.Twentythree = player.prev, player.prev = player.Twentytwo, player.Twentytwo = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
     if (player.Twentythree === C2_LIST[player.wood] && C4_LIST.includes(player.Twentyfour) && player.Twentytwo !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Twentytwo) || player.Twentytwo === C1_LIST[player.water]) player.Twentythree = player.Sprev, player.Sprev = player.Twentytwo, player.Twentytwo = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentytwo = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Twentyfour) && player.Twentythree !== C1_LIST[player.tree] && player.Twentythree !== C1_LIST[player.water]) player.Twentyfour = player.prev, player.prev = player.Twentythree, player.Twentythree = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
 if (player.Twentyfour === C2_LIST[player.wood] && C4_LIST.includes(player.Twentyfive) && player.Twentythree !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Twentythree) || player.Twentythree === C1_LIST[player.water]) player.Twentyfour = player.Sprev, player.Sprev = player.Twentythree, player.Twentythree = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentythree = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Twentyfive) && player.Twentyfour !== C1_LIST[player.tree] && player.Twentyfour !== C1_LIST[player.water]) player.Twentyfive = player.prev, player.prev = player.Twentyfour, player.Twentyfour = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
 if (player.Twentyfive === C2_LIST[player.wood] && C4_LIST.includes(player.Twentysix) && player.Twentyfour !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Twentyfour) || player.Twentyfour === C1_LIST[player.water]) player.Twentyfive = player.Sprev, player.Sprev = player.Twentyfour, player.Twentyfour = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentyfour = C2_LIST[player.island]
 if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Twentysix) && player.Twentyfive !== C1_LIST[player.tree] && player.Twentyfive !== C1_LIST[player.water]) player.Twentysix = player.prev, player.prev = player.Twentyfive, player.Twentyfive = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
if (player.Twentysix === C2_LIST[player.wood] && C4_LIST.includes(player.Twentyseven) && player.Twentyfive !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Twentyfive) || player.Twentyfive === C1_LIST[player.water]) player.Twentysix = player.Sprev, player.Sprev = player.Twentyfive, player.Twentyfive = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentyfive = C2_LIST[player.island]
 if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Twentyseven) && player.Twentysix !== C1_LIST[player.tree] && player.Twentysix !== C1_LIST[player.water]) player.Twentyseven = player.prev, player.prev = player.Twentysix, player.Twentysix = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
 if (player.Twentyseven === C2_LIST[player.wood] && C4_LIST.includes(player.Twentyeight) && player.Twentysix !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Twentysix) || player.Twentysix === C1_LIST[player.water]) player.Twentyseven = player.Sprev, player.Sprev = player.Twentysix, player.Twentysix = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentysix = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Twentyeight) && player.Twentyseven !== C1_LIST[player.tree] && player.Twentyseven !== C1_LIST[player.water]) player.Twentyeight = player.prev, player.prev = player.Twentyseven, player.Twentyseven = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
 if (player.Twentyeight === C2_LIST[player.wood] && C4_LIST.includes(player.Twentynine) && player.Twentyseven !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Twentyseven) || player.Twentyseven === C1_LIST[player.water]) player.Twentyeight = player.Sprev, player.Sprev = player.Twentyseven, player.Twentyseven = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentyseven = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Twentynine) && player.Twentyeight !== C1_LIST[player.tree] && player.Twentyeight !== C1_LIST[player.water]) player.Twentynine = player.prev, player.prev = player.Twentyeight, player.Twentyeight = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
   if (player.Twentynine === C2_LIST[player.wood] && C4_LIST.includes(player.Thirty) && player.Twentyeight !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Twentyeight) || player.Twentyeight === C1_LIST[player.water]) player.Twentynine = player.Sprev, player.Sprev = player.Twentyeight, player.Twentyeight = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentyeight = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Thirty) && player.Twentynine !== C1_LIST[player.tree] && player.Twentynine !== C1_LIST[player.water]) player.Thirty = player.prev, player.prev = player.Twentynine, player.Twentynine = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()

 if (C4_LIST.includes(player.Thirtytwo) && player.Thirtyone !== C1_LIST[player.tree] && player.Thirtyone !== C1_LIST[player.water]) player.Thirtytwo = player.prev, player.prev = player.Thirtyone, player.Thirtyone = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
 if (player.Thirtytwo === C2_LIST[player.wood] && C4_LIST.includes(player.Thirtythree) && player.Thirtyone !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Thirtyone) || player.Thirtyone === C1_LIST[player.water]) player.Thirtytwo = player.Sprev, player.Sprev = player.Thirtyone, player.Thirtyone = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirtyone = C2_LIST[player.island]
 if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Thirtythree) && player.Thirtytwo !== C1_LIST[player.tree] && player.Thirtytwo !== C1_LIST[player.water]) player.Thirtythree = player.prev, player.prev = player.Thirtytwo, player.Thirtytwo = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
    if (player.Thirtythree === C2_LIST[player.wood] && C4_LIST.includes(player.Thirtyfour) && player.Thirtytwo !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Thirtytwo) || player.Thirtytwo === C1_LIST[player.water]) player.Thirtythree = player.Sprev, player.Sprev = player.Thirtytwo, player.Thirtytwo = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirtytwo = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Thirtyfour) && player.Thirtythree !== C1_LIST[player.tree] && player.Thirtythree !== C1_LIST[player.water]) player.Thirtyfour = player.prev, player.prev = player.Thirtythree, player.Thirtythree = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
  if (player.Thirtyfour === C2_LIST[player.wood] && C4_LIST.includes(player.Thirtyfive) && player.Thirtythree !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Thirtythree) || player.Thirtythree === C1_LIST[player.water]) player.Thirtyfour = player.Sprev, player.Sprev = player.Thirtythree, player.Thirtythree = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirtythree = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Thirtyfive) && player.Thirtyfour !== C1_LIST[player.tree] && player.Thirtyfour !== C1_LIST[player.water]) player.Thirtyfive = player.prev, player.prev = player.Thirtyfour, player.Thirtyfour = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
  if (player.Thirtyfive === C2_LIST[player.wood] && C4_LIST.includes(player.Thirtysix) && player.Thirtyfour !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Thirtyfour) || player.Thirtyfour === C1_LIST[player.water]) player.Thirtyfive = player.Sprev, player.Sprev = player.Thirtyfour, player.Thirtyfour = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirtyfour = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Thirtysix) && player.Thirtyfive !== C1_LIST[player.tree] && player.Thirtyfive !== C1_LIST[player.water]) player.Thirtysix = player.prev, player.prev = player.Thirtyfive, player.Thirtyfive = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
  if (player.Thirtysix === C2_LIST[player.wood] && C4_LIST.includes(player.Thirtyseven) && player.Thirtyfive !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Thirtyfive) || player.Thirtyfive === C1_LIST[player.water]) player.Thirtysix = player.Sprev, player.Sprev = player.Thirtyfive, player.Thirtyfive = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirtyfive = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Thirtyseven) && player.Thirtysix !== C1_LIST[player.tree] && player.Thirtysix !== C1_LIST[player.water]) player.Thirtyseven = player.prev, player.prev = player.Thirtysix, player.Thirtysix = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
 if (player.Thirtyseven === C2_LIST[player.wood] && C4_LIST.includes(player.Thirtyeight) && player.Thirtysix !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Thirtysix) || player.Thirtysix === C1_LIST[player.water]) player.Thirtyseven = player.Sprev, player.Sprev = player.Thirtysix, player.Thirtysix = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirtysix = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Thirtyeight) && player.Thirtyseven !== C1_LIST[player.tree] && player.Thirtyseven !== C1_LIST[player.water]) player.Thirtyeight = player.prev, player.prev = player.Thirtyseven, player.Thirtyseven = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
 if (player.Thirtyeight === C2_LIST[player.wood] && C4_LIST.includes(player.Thirtynine) && player.Thirtyseven !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Thirtyseven) || player.Thirtyseven === C1_LIST[player.water]) player.Thirtyeight = player.Sprev, player.Sprev = player.Thirtyseven, player.Thirtyseven = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirtyseven = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Thirtynine) && player.Thirtyeight !== C1_LIST[player.tree] && player.Thirtyeight !== C1_LIST[player.water]) player.Thirtynine = player.prev, player.prev = player.Thirtyeight, player.Thirtyeight = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
if (player.Thirtynine === C2_LIST[player.wood] && C4_LIST.includes(player.Fourty) && player.Thirtyeight !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Thirtyeight) || player.Thirtyeight === C1_LIST[player.water]) player.Thirtynine = player.Sprev, player.Sprev = player.Thirtyeight, player.Thirtyeight = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirtyeight = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
   if (C4_LIST.includes(player.Fourty) && player.Thirtynine !== C1_LIST[player.tree] && player.Thirtynine !== C1_LIST[player.water]) player.Fourty = player.prev, player.prev = player.Thirtynine, player.Thirtynine = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()

 if (C4_LIST.includes(player.Fourtytwo) && player.Fourtyone !== C1_LIST[player.tree] && player.Fourtyone !== C1_LIST[player.water]) player.Fourtytwo = player.prev, player.prev = player.Fourtyone, player.Fourtyone = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
  if (player.Fourtytwo === C2_LIST[player.wood] && C4_LIST.includes(player.Fourtythree) && player.Fourtyone !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Fourtyone) || player.Fourtyone === C1_LIST[player.water]) player.Fourtytwo = player.Sprev, player.Sprev = player.Fourtyone, player.Fourtyone = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourtyone = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Fourtythree) && player.Fourtytwo !== C1_LIST[player.tree] && player.Fourtytwo !== C1_LIST[player.water]) player.Fourtythree = player.prev, player.prev = player.Fourtytwo, player.Fourtytwo = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
 if (player.Fourtythree === C2_LIST[player.wood] && C4_LIST.includes(player.Fourtyfour) && player.Fourtytwo !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Fourtytwo) || player.Fourtytwo === C1_LIST[player.water]) player.Fourtythree = player.Sprev, player.Sprev = player.Fourtytwo, player.Fourtytwo = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourtytwo = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Fourtyfour) && player.Fourtythree !== C1_LIST[player.tree] && player.Fourtythree !== C1_LIST[player.water]) player.Fourtyfour = player.prev, player.prev = player.Fourtythree, player.Fourtythree = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
     if (player.Fourtyfour === C2_LIST[player.wood] && C4_LIST.includes(player.Fourtyfive) && player.Fourtythree !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Fourtythree) || player.Fourtythree === C1_LIST[player.water]) player.Fourtyfour = player.Sprev, player.Sprev = player.Fourtythree, player.Fourtythree = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourtythree = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Fourtyfive) && player.Fourtyfour !== C1_LIST[player.tree] && player.Fourtyfour !== C1_LIST[player.water]) player.Fourtyfive = player.prev, player.prev = player.Fourtyfour, player.Fourtyfour = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
 if (player.Fourtyfive === C2_LIST[player.wood] && C4_LIST.includes(player.Fourtysix) && player.Fourtyfour !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Fourtyfour) || player.Fourtyfour === C1_LIST[player.water]) player.Fourtyfive = player.Sprev, player.Sprev = player.Fourtyfour, player.Fourtyfour = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourtyfour = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Fourtysix) && player.Fourtyfive !== C1_LIST[player.tree] && player.Fourtyfive !== C1_LIST[player.water]) player.Fourtysix = player.prev, player.prev = player.Fourtyfive, player.Fourtyfive = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
 if (player.Fourtysix === C2_LIST[player.wood] && C4_LIST.includes(player.Fourtyseven) && player.Fourtyfive !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Fourtyfive) || player.Fourtyfive === C1_LIST[player.water]) player.Fourtysix = player.Sprev, player.Sprev = player.Fourtyfive, player.Fourtyfive = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourtyfive = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Fourtyseven) && player.Fourtysix !== C1_LIST[player.tree] && player.Fourtysix !== C1_LIST[player.water]) player.Fourtyseven = player.prev, player.prev = player.Fourtysix, player.Fourtysix = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
    if (player.Fourtyseven === C2_LIST[player.wood] && C4_LIST.includes(player.Fourtyeight) && player.Fourtysix !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Fourtysix) || player.Fourtysix === C1_LIST[player.water]) player.Fourtyseven = player.Sprev, player.Sprev = player.Fourtysix, player.Fourtysix = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourtysix = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Fourtyeight) && player.Fourtyseven !== C1_LIST[player.tree] && player.Fourtyseven !== C1_LIST[player.water]) player.Fourtyeight = player.prev, player.prev = player.Fourtyseven, player.Fourtyseven = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
if (player.Fourtyeight === C2_LIST[player.wood] && C4_LIST.includes(player.Fourtynine) && player.Fourtyseven !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Fourtyseven) || player.Fourtyseven === C1_LIST[player.water]) player.Fourtyeight = player.Sprev, player.Sprev = player.Fourtyseven, player.Fourtyseven = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourtyseven = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Fourtynine) && player.Fourtyeight !== C1_LIST[player.tree] && player.Fourtyeight !== C1_LIST[player.water]) player.Fourtynine = player.prev, player.prev = player.Fourtyeight, player.Fourtyeight = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
   if (player.Fourtynine === C2_LIST[player.wood] && C4_LIST.includes(player.Fifty) && player.Fourtyeight !== C2_LIST[player.wood]){ 
    if (C2_LIST.includes(player.Fourtyeight) || player.Fourtyeight === C1_LIST[player.water]) player.Fourtynine = player.Sprev, player.Sprev = player.Fourtyeight, player.Fourtyeight = C2_LIST[player.wood]
if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourtyeight = C2_LIST[player.island] 
if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
 if (C4_LIST.includes(player.Fifty) && player.Fourtynine !== C1_LIST[player.tree] && player.Fourtynine !== C1_LIST[player.water]) player.Fifty = player.prev, player.prev = player.Fourtynine, player.Fourtynine = C4_LIST[player.skin],  player.East -= 1,  player.West += 1, audio(), save2()
   
 if (C4_LIST.includes(player.F1) && player.Ten !== C1_LIST[player.tree] && player.Ten !== C1_LIST[player.water]) player.F1 = player.prev, player.prev = player.Ten, player.Ten = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), save2()
 if (C4_LIST.includes(player.F2) && player.Twenty !== C1_LIST[player.tree] && player.Twenty !== C1_LIST[player.water]) player.F2 = player.prev, player.prev = player.Twenty, player.Twenty = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), save2()
 if (C4_LIST.includes(player.F5) && player.Fifty !== C1_LIST[player.tree] && player.Fifty !== C1_LIST[player.water]) player.F5 = player.prev, player.prev = player.Fifty, player.Fifty = C4_LIST[player.skin], player.East -= 1,  player.West += 1, audio(), save2()
}

function woodRight() {

  if(player.Nine === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Ten !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Ten) || player.Ten === C1_LIST[2]) return player.Nine = player.Lprev, player.Lprev = player.Ten, player.Ten = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Ten === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Ten = C2_LIST[player.wood]
  if(player.Eight === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Nine !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Nine) || player.Nine === C1_LIST[2]) return player.Eight = player.Lprev, player.Lprev = player.Nine, player.Nine = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Nine === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Nine = C2_LIST[player.wood]
  if(player.Seven === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Eight !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Eight) || player.Eight === C1_LIST[2]) return player.Seven = player.Lprev, player.Lprev = player.Eight, player.Eight = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Eight === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Eight = C2_LIST[player.wood]
  if(player.Six === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Seven !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Seven) || player.Seven === C1_LIST[2]) return player.Six = player.Lprev, player.Lprev = player.Seven, player.Seven = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Seven === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Seven = C2_LIST[player.wood]
  if(player.Five === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Six !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Six) || player.Six === C1_LIST[2]) return player.Five = player.Lprev, player.Lprev = player.Six, player.Six = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Six === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Six = C2_LIST[player.wood]
  if(player.Four === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Five !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Five) || player.Five === C1_LIST[2]) return player.Four = player.Lprev, player.Lprev = player.Five, player.Five = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Five === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Five = C2_LIST[player.wood]
  if(player.Three === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Four !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Four) || player.Four === C1_LIST[2]) return player.Three = player.Lprev, player.Lprev = player.Four, player.Four = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Four === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Four = C2_LIST[player.wood]
  if(player.Two === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Three !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Three) || player.Three === C1_LIST[2]) return player.Two = player.Lprev, player.Lprev = player.Three, player.Three = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Three === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Three = C2_LIST[player.wood]
  if(player.One === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Two !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Two) || player.Two === C1_LIST[2]) return player.One = player.Lprev, player.Lprev = player.Two, player.Two = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Two === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Two = C2_LIST[player.wood]

  if(player.Nineteen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twenty !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twenty) || player.Twenty === C1_LIST[2]) return player.Nineteen = player.Lprev, player.Lprev = player.Twenty, player.Twenty = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Twenty === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twenty = C2_LIST[player.wood]
  if(player.Eighteen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Nineteen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Nineteen) || player.Nineteen === C1_LIST[2]) return player.Eighteen = player.Lprev, player.Lprev = player.Nineteen, player.Nineteen = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Nineteen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Nineteen = C2_LIST[player.wood]
  if(player.Seventeen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Eighteen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Eighteen) || player.Eighteen === C1_LIST[2]) return player.Seventeen = player.Lprev, player.Lprev = player.Eighteen, player.Eighteen = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Eighteen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Eighteen = C2_LIST[player.wood]
  if(player.Sixteen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Seventeen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Seventeen) || player.Seventeen === C1_LIST[2]) return player.Sixteen = player.Lprev, player.Lprev = player.Seventeen, player.Seventeen = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Seventeen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Seventeen = C2_LIST[player.wood]
  if(player.Fifteen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Sixteen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Sixteen) || player.Sixteen === C1_LIST[2]) return player.Fifteen = player.Lprev, player.Lprev = player.Sixteen, player.Sixteen = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Sixteen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Sixteen = C2_LIST[player.wood]
  if(player.Fourteen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fifteen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fifteen) || player.Fifteen === C1_LIST[2]) return player.Fourteen = player.Lprev, player.Lprev = player.Fifteen, player.Fifteen = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Fifteen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fifteen = C2_LIST[player.wood]
  if(player.Thirteen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourteen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourteen) || player.Fourteen === C1_LIST[2]) return player.Thirteen = player.Lprev, player.Lprev = player.Fourteen, player.Fourteen = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Fourteen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourteen = C2_LIST[player.wood]
  if(player.Twelve === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirteen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirteen) || player.Thirteen === C1_LIST[2]) return player.Twelve = player.Lprev, player.Lprev = player.Thirteen, player.Thirteen = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Thirteen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirteen = C2_LIST[player.wood]
  if(player.Eleven === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twelve !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twelve) || player.Twelve === C1_LIST[2]) return player.Eleven = player.Lprev, player.Lprev = player.Twelve, player.Twelve = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Twelve === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twelve = C2_LIST[player.wood]

  if(player.Twentynine === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirty !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirty) || player.Thirty === C1_LIST[2]) return player.Twentynine = player.Lprev, player.Lprev = player.Thirty, player.Thirty = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Thirty === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirty = C2_LIST[player.wood]
  if(player.Twentyeight === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentynine !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentynine) || player.Twentynine === C1_LIST[2]) return player.Twentyeight = player.Lprev, player.Lprev = player.Twentynine, player.Twentynine = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Twentynine === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentynine = C2_LIST[player.wood]
  if(player.Twentyseven === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentyeight !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentyeight) || player.Twentyeight === C1_LIST[2]) return player.Twentyseven = player.Lprev, player.Lprev = player.Twentyeight, player.Twentyeight = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Twentyeight === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentyeight = C2_LIST[player.wood]
  if(player.Twentysix === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentyseven !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentyseven) || player.Twentyseven === C1_LIST[2]) return player.Twentysix = player.Lprev, player.Lprev = player.Twentyseven, player.Twentyseven = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Twentyseven === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentyseven = C2_LIST[player.wood]
  if(player.Twentyfive === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentysix !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentysix) || player.Twentysix === C1_LIST[2]) return player.Twentyfive = player.Lprev, player.Lprev = player.Twentysix, player.Twentysix = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Twentysix === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentysix = C2_LIST[player.wood]
  if(player.Twentyfour === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentyfive !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentyfive) || player.Twentyfive === C1_LIST[2]) return player.Twentyfour = player.Lprev, player.Lprev = player.Twentyfive, player.Twentyfive = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Twentyfive === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentyfive = C2_LIST[player.wood]
  if(player.Twentythree === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentyfour !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentyfour) || player.Twentyfour === C1_LIST[2]) return player.Twentythree = player.Lprev, player.Lprev = player.Twentyfour, player.Twentyfour = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Twentyfour === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentyfour = C2_LIST[player.wood]
  if(player.Twentytwo === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentythree !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentythree) || player.Twentythree === C1_LIST[2]) return player.Twentytwo = player.Lprev, player.Lprev = player.Twentythree, player.Twentythree = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Twentythree === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentythree = C2_LIST[player.wood]
  if(player.Twentyone === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentytwo !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentytwo) || player.Twentytwo === C1_LIST[2]) return player.Twentyone = player.Lprev, player.Lprev = player.Twentytwo, player.Twentytwo = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Twentytwo === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentytwo = C2_LIST[player.wood]

  if(player.Thirtynine === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourty !== C2_LIST[player.wood]){ 
    if (!C1_LIST.includes(player.Fourty) || player.Fourty === C1_LIST[2]) return player.Thirtynine = player.Lprev, player.Lprev = player.Fourty, player.Fourty = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Fourty === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourty = C2_LIST[player.wood]
  if(player.Thirtyeight === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtynine !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtynine) || player.Thirtynine === C1_LIST[2]) return player.Thirtyeight = player.Lprev, player.Lprev = player.Thirtynine, player.Thirtynine = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Thirtynine === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtynine = C2_LIST[player.wood]
  if(player.Thirtyseven === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtyeight !== C2_LIST[player.wood]){ 
    if (!C1_LIST.includes(player.Thirtyeight) || player.Thirtyeight === C1_LIST[2]) return player.Thirtyseven = player.Lprev, player.Lprev = player.Thirtyeight, player.Thirtyeight = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Thirtyeight === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtyeight = C2_LIST[player.wood]
  if(player.Thirtysix === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtyseven !== C2_LIST[player.wood]){ 
    if (!C1_LIST.includes(player.Thirtyseven) || player.Thirtyseven === C1_LIST[2]) return player.Thirtysix = player.Lprev, player.Lprev = player.Thirtyseven, player.Thirtyseven = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Thirtyseven === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtyseven = C2_LIST[player.wood]
  if(player.Thirtyfive === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtysix !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtysix) || player.Thirtysix === C1_LIST[2]) return player.Thirtyfive = player.Lprev, player.Lprev = player.Thirtysix, player.Thirtysix = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Thirtysix === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtysix = C2_LIST[player.wood]
  if(player.Thirtyfour === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtyfive !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtyfive) || player.Thirtyfive === C1_LIST[2]) return player.Thirtyfour = player.Lprev, player.Lprev = player.Thirtyfive, player.Thirtyfive = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Thirtyfive === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtyfive = C2_LIST[player.wood]
  if(player.Thirtythree === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtyfour !== C2_LIST[player.wood])
    if (!C1_LIST.includes(player.Thirtyfour) || player.Thirtyfour === C1_LIST[2]){ return player.Thirtythree = player.Lprev, player.Lprev = player.Thirtyfour, player.Thirtyfour = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Thirtyfour === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtyfour = C2_LIST[player.wood]
  if(player.Thirtytwo === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtythree !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtythree) || player.Thirtythree === C1_LIST[2]) return player.Thirtytwo = player.Lprev, player.Lprev = player.Thirtythree, player.Thirtythree = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Thirtythree === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtythree = C2_LIST[player.wood]
  if(player.Thirtyone === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtytwo !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtytwo) || player.Thirtytwo === C1_LIST[2]) return player.Thirtyone = player.Lprev, player.Lprev = player.Thirtytwo, player.Thirtytwo = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Thirtytwo === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtytwo = C2_LIST[player.wood]

  if(player.Fourtynine === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fifty !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fifty) || player.Fifty === C1_LIST[2]) return player.Fourtynine = player.Lprev, player.Lprev = player.Fifty, player.Fifty = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Fifty === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fifty = C2_LIST[player.wood]
  if(player.Fourtyeight === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourtynine !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourtynine) || player.Fourtynine === C1_LIST[2]) return player.Fourtyeight = player.Lprev, player.Lprev = player.Fourtynine, player.Fourtynine = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Fourtynine === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourtynine = C2_LIST[player.wood]
  if(player.Fourtyseven === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourtyeight !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourtyeight) || player.Fourtyeight === C1_LIST[2]) return player.Fourtyseven = player.Lprev, player.Lprev = player.Fourtyeight, player.Fourtyeight = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Fourtyeight === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourtyeight = C2_LIST[player.wood]
  if(player.Fourtysix === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourtyseven !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourtyseven) || player.Fourtyseven === C1_LIST[2]) return player.Fourtysix = player.Lprev, player.Lprev = player.Fourtyseven, player.Fourtyseven = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Fourtyseven === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourtyseven = C2_LIST[player.wood]
  if(player.Fourtyfive === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourtysix !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourtysix) || player.Fourtysix === C1_LIST[2]) return player.Fourtyfive = player.Lprev, player.Lprev = player.Fourtysix, player.Fourtysix = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Fourtysix === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourtysix = C2_LIST[player.wood]
  if(player.Fourtyfour === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourtyfive !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourtyfive) || player.Fourtyfive === C1_LIST[2]) return player.Fourtyfour = player.Lprev, player.Lprev = player.Fourtyfive, player.Fourtyfive = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Fourtyfive === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourtyfive = C2_LIST[player.wood]
  if(player.Fourtythree === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourtyfour !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourtyfour) || player.Fourtyfour === C1_LIST[2]) return player.Fourtythree = player.Lprev, player.Lprev = player.Fourtyfour, player.Fourtyfour = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Fourtyfour === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourtyfour = C2_LIST[player.wood]
  if(player.Fourtytwo === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourtythree !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourtythree) || player.Fourtythree === C1_LIST[2]) return player.Fourtytwo = player.Lprev, player.Lprev = player.Fourtythree, player.Fourtythree = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Fourtythree === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourtythree = C2_LIST[player.wood]
  if(player.Fourtyone === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourtytwo !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourtytwo) || player.Fourtytwo === C1_LIST[2]) return player.Fourtyone = player.Lprev, player.Lprev = player.Fourtytwo, player.Fourtytwo = C1_LIST[6],  player.timeF = setTimeout(woodRight, 200)}
  else if(player.Fourtytwo === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourtytwo = C2_LIST[player.wood]

}

function moveRight(){

  if (player.Fifteen === C1_LIST[6] && player.Zone === 6 && C4_LIST.includes(player.Fourteen)) player.Lprev = C1_LIST[2]

  if (C4_LIST.includes(player.Eight)){
    if (player.Nine === C2_LIST[player.wood] && player.Ten === C1_LIST[2]) player.Nine = player.Sprev, player.Lprev = player.Ten, player.Ten = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Nine === C1_LIST[6] && player.Ten !== C2_LIST[player.wood]){ 
      if (player.Ten === C1_LIST[2] || !C1_LIST.includes(player.Ten)) player.Nine = player.Lprev, player.Lprev = player.Ten, player.Ten = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Seven)){
    if (player.Eight === C2_LIST[player.wood] && player.Nine === C1_LIST[2]) player.Eight = player.Sprev, player.Lprev = player.Nine, player.Nine = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Eight === C1_LIST[6] && player.Nine !== C2_LIST[player.wood]){ 
      if (player.Nine === C1_LIST[2] || !C1_LIST.includes(player.Nine)) player.Eight = player.Lprev, player.Lprev = player.Nine, player.Nine = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Six)){
    if (player.Seven === C2_LIST[player.wood] && player.Eight === C1_LIST[2]) player.Seven = player.Sprev, player.Lprev = player.Eight, player.Eight = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Seven === C1_LIST[6] && player.Eight !== C2_LIST[player.wood]){ 
      if (player.Eight === C1_LIST[2] || !C1_LIST.includes(player.Eight)) player.Seven = player.Lprev, player.Lprev = player.Eight, player.Eight = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Five)){
    if (player.Six === C2_LIST[player.wood] && player.Seven === C1_LIST[2]) player.Six = player.Sprev, player.Lprev = player.Seven, player.Seven = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Six === C1_LIST[6] && player.Seven !== C2_LIST[player.wood]){ 
      if (player.Seven === C1_LIST[2] || !C1_LIST.includes(player.Seven)) player.Six = player.Lprev, player.Lprev = player.Seven, player.Seven = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Four)){
    if (player.Five === C2_LIST[player.wood] && player.Six === C1_LIST[2]) player.Five = player.Sprev, player.Lprev = player.Six, player.Six = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Five === C1_LIST[6] && player.Six !== C2_LIST[player.wood]){ 
      if (player.Six === C1_LIST[2] || !C1_LIST.includes(player.Six)) player.Five = player.Lprev, player.Lprev = player.Six, player.Six = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Three)){
    if (player.Four === C2_LIST[player.wood] && player.Five === C1_LIST[2]) player.Four = player.Sprev, player.Lprev = player.Five, player.Five = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Four === C1_LIST[6] && player.Five !== C2_LIST[player.wood]){ 
      if (player.Five === C1_LIST[2] || !C1_LIST.includes(player.Five)) player.Four = player.Lprev, player.Lprev = player.Five, player.Five = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Two)){
    if (player.Three === C2_LIST[player.wood] && player.Four === C1_LIST[2]) player.Three = player.Sprev, player.Lprev = player.Four, player.Four = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Three === C1_LIST[6] && player.Four !== C2_LIST[player.wood]){ 
      if (player.Four === C1_LIST[2] || !C1_LIST.includes(player.Four)) player.Three = player.Lprev, player.Lprev = player.Four, player.Four = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.One)){
    if (player.Two === C2_LIST[player.wood] && player.Three === C1_LIST[2]) player.Two = player.Sprev, player.Lprev = player.Three, player.Three = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Two === C1_LIST[6] && player.Three !== C2_LIST[player.wood]){ 
      if (player.Three === C1_LIST[2] || !C1_LIST.includes(player.Three)) player.Two = player.Lprev, player.Lprev = player.Three, player.Three = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }

  if (C4_LIST.includes(player.Eighteen)){
    if (player.Nineteen === C2_LIST[player.wood] && player.Twenty === C1_LIST[2]) player.Nineteen = player.Sprev, player.Lprev = player.Twenty, player.Twenty = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Nineteen === C1_LIST[6] && player.Twenty !== C2_LIST[player.wood]){ 
      if (player.Twenty === C1_LIST[2] || !C1_LIST.includes(player.Twenty)) player.Nineteen = player.Lprev, player.Lprev = player.Twenty, player.Twenty = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Seventeen)){
    if (player.Eighteen === C2_LIST[player.wood] && player.Nineteen === C1_LIST[2]) player.Eighteen = player.Sprev, player.Lprev = player.Nineteen, player.Nineteen = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Eighteen === C1_LIST[6] && player.Nineteen !== C2_LIST[player.wood]){ 
      if (player.Nineteen === C1_LIST[2] || !C1_LIST.includes(player.Nineteen)) player.Eighteen = player.Lprev, player.Lprev = player.Nineteen, player.Nineteen = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Sixteen)){
    if (player.Seventeen === C2_LIST[player.wood] && player.Eighteen === C1_LIST[2]) player.Seventeen = player.Sprev, player.Lprev = player.Eighteen, player.Eighteen = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Seventeen === C1_LIST[6] && player.Eighteen !== C2_LIST[player.wood]){ 
      if (player.Eighteen === C1_LIST[2] || !C1_LIST.includes(player.Eighteen)) player.Seventeen = player.Lprev, player.Lprev = player.Eighteen, player.Eighteen = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Fifteen)){
    if (player.Sixteen === C2_LIST[player.wood] && player.Seventeen === C1_LIST[2]) player.Sixteen = player.Sprev, player.Lprev = player.Seventeen, player.Seventeen = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Sixteen === C1_LIST[6] && player.Seventeen !== C2_LIST[player.wood]){ 
      if (player.Seventeen === C1_LIST[2] || !C1_LIST.includes(player.Seventeen)) player.Sixteen = player.Lprev, player.Lprev = player.Seventeen, player.Seventeen = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Fourteen)){
    if (player.Fifteen === C2_LIST[player.wood] && player.Sixteen === C1_LIST[2]) player.Fifteen = player.Sprev, player.Lprev = player.Sixteen, player.Sixteen = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Fifteen === C1_LIST[6] && player.Sixteen !== C2_LIST[player.wood]){ 
      if (player.Sixteen === C1_LIST[2] || !C1_LIST.includes(player.Sixteen)) player.Fifteen = player.Lprev, player.Lprev = player.Sixteen, player.Sixteen = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Thirteen)){
    if (player.Fourteen === C2_LIST[player.wood] && player.Fifteen === C1_LIST[2]) player.Fourteen = player.Sprev, player.Lprev = player.Fifteen, player.Fifteen = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Fourteen === C1_LIST[6] && player.Fifteen !== C2_LIST[player.wood]){ 
      if (player.Fifteen === C1_LIST[2] || !C1_LIST.includes(player.Fifteen)) player.Fourteen = player.Lprev, player.Lprev = player.Fifteen, player.Fifteen = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Twelve)){
    if (player.Thirteen === C2_LIST[player.wood] && player.Fourteen === C1_LIST[2]) player.Thirteen = player.Sprev, player.Lprev = player.Fourteen, player.Fourteen = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Thirteen === C1_LIST[6] && player.Fourteen !== C2_LIST[player.wood]){ 
      if (player.Fourteen === C1_LIST[2] || !C1_LIST.includes(player.Fourteen)) player.Thirteen = player.Lprev, player.Lprev = player.Fourteen, player.Fourteen = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Eleven)){
    if (player.Twelve === C2_LIST[player.wood] && player.Thirteen === C1_LIST[2]) player.Twelve = player.Sprev, player.Lprev = player.Thirteen, player.Thirteen = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Twelve === C1_LIST[6] && player.Thirteen !== C2_LIST[player.wood]){ 
      if (player.Thirteen === C1_LIST[2] || !C1_LIST.includes(player.Thirteen)) player.Twelve = player.Lprev, player.Lprev = player.Thirteen, player.Thirteen = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }

  if (C4_LIST.includes(player.Twentyeight)){
    if (player.Twentynine === C2_LIST[player.wood] && player.Thirty === C1_LIST[2]) player.Twentynine = player.Sprev, player.Lprev = player.Thirty, player.Thirty = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Twentynine === C1_LIST[6] && player.Thirty !== C2_LIST[player.wood]){ 
      if (player.Thirty === C1_LIST[2] || !C1_LIST.includes(player.Thirty)) player.Twentynine = player.Lprev, player.Lprev = player.Thirty, player.Thirty = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Twentyseven)){
    if (player.Twentyeight === C2_LIST[player.wood] && player.Twentynine === C1_LIST[2]) player.Twentyeight = player.Sprev, player.Lprev = player.Twentynine, player.Twentynine = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Twentyeight === C1_LIST[6] && player.Twentynine !== C2_LIST[player.wood]){ 
      if (player.Twentynine === C1_LIST[2] || !C1_LIST.includes(player.Twentynine)) player.Twentyeight = player.Lprev, player.Lprev = player.Twentynine, player.Twentynine = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Twentysix)){
    if (player.Twentyseven === C2_LIST[player.wood] && player.Twentyeight === C1_LIST[2]) player.Twentyseven = player.Sprev, player.Lprev = player.Twentyeight, player.Twentyeight = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Twentyseven === C1_LIST[6] && player.Twentyeight !== C2_LIST[player.wood]){ 
      if (player.Twentyeight === C1_LIST[2] || !C1_LIST.includes(player.Twentyeight)) player.Twentyseven = player.Lprev, player.Lprev = player.Twentyeight, player.Twentyeight = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Twentyfive)){
    if (player.Twentysix === C2_LIST[player.wood] && player.Twentyseven === C1_LIST[2]) player.Twentysix = player.Sprev, player.Lprev = player.Twentyseven, player.Twentyseven = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Twentysix === C1_LIST[6] && player.Twentyseven !== C2_LIST[player.wood]){ 
      if (player.Twentyseven === C1_LIST[2] || !C1_LIST.includes(player.Twentyseven)) player.Twentysix = player.Lprev, player.Lprev = player.Twentyseven, player.Twentyseven = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Twentyfour)){
    if (player.Twentyfive === C2_LIST[player.wood] && player.Twentysix === C1_LIST[2]) player.Twentyfive = player.Sprev, player.Lprev = player.Twentysix, player.Twentysix = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Twentyfive === C1_LIST[6] && player.Twentysix !== C2_LIST[player.wood]){ 
      if (player.Twentysix === C1_LIST[2] || !C1_LIST.includes(player.Twentysix)) player.Twentyfive = player.Lprev, player.Lprev = player.Twentysix, player.Twentysix = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Twentythree)){
    if (player.Twentyfour === C2_LIST[player.wood] && player.Twentyfive === C1_LIST[2]) player.Twentyfour = player.Sprev, player.Lprev = player.Twentyfive, player.Twentyfive = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Twentyfour === C1_LIST[6] && player.Twentyfive !== C2_LIST[player.wood]){ 
      if (player.Twentyfive === C1_LIST[2] || !C1_LIST.includes(player.Twentyfive)) player.Twentyfour = player.Lprev, player.Lprev = player.Twentyfive, player.Twentyfive = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Twentytwo)){
    if (player.Twentythree === C2_LIST[player.wood] && player.Twentyfour === C1_LIST[2]) player.Twentythree = player.Sprev, player.Lprev = player.Twentyfour, player.Twentyfour = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Twentythree === C1_LIST[6] && player.Twentyfour !== C2_LIST[player.wood]){ 
      if (player.Twentyfour === C1_LIST[2] || !C1_LIST.includes(player.Twentyfour)) player.Twentythree = player.Lprev, player.Lprev = player.Twentyfour, player.Twentyfour = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Twentyone)){
    if (player.Twentytwo === C2_LIST[player.wood] && player.Twentythree === C1_LIST[2]) player.Twentytwo = player.Sprev, player.Lprev = player.Twentythree, player.Twentythree = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Twentytwo === C1_LIST[6] && player.Twentythree !== C2_LIST[player.wood]){ 
      if (player.Twentythree === C1_LIST[2] || !C1_LIST.includes(player.Twentythree)) player.Twentytwo = player.Lprev, player.Lprev = player.Twentythree, player.Twentythree = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }

  if (C4_LIST.includes(player.Thirtyeight)){
    if (player.Thirtynine === C2_LIST[player.wood] && player.Fourty === C1_LIST[2]) player.Thirtynine = player.Sprev, player.Lprev = player.Fourty, player.Fourty = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Thirtynine === C1_LIST[6] && player.Fourty !== C2_LIST[player.wood]){ 
      if (player.Fourty === C1_LIST[2] || !C1_LIST.includes(player.Fourty)) player.Thirtynine = player.Lprev, player.Lprev = player.Fourty, player.Fourty = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Thirtyseven)){
    if (player.Thirtyeight === C2_LIST[player.wood] && player.Thirtynine === C1_LIST[2]) player.Thirtyeight = player.Sprev, player.Lprev = player.Thirtynine, player.Thirtynine = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Thirtyeight === C1_LIST[6] && player.Thirtynine !== C2_LIST[player.wood]){ 
      if (player.Thirtynine === C1_LIST[2] || !C1_LIST.includes(player.Thirtynine)) player.Thirtyeight = player.Lprev, player.Lprev = player.Thirtynine, player.Thirtynine = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Thirtysix)){
    if (player.Thirtyseven === C2_LIST[player.wood] && player.Thirtyeight === C1_LIST[2]) player.Thirtyseven = player.Sprev, player.Lprev = player.Thirtyeight, player.Thirtyeight = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Thirtyseven === C1_LIST[6] && player.Thirtyeight !== C2_LIST[player.wood]){ 
      if (player.Thirtyeight === C1_LIST[2] || !C1_LIST.includes(player.Thirtyeight)) player.Thirtyseven = player.Lprev, player.Lprev = player.Thirtyeight, player.Thirtyeight = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Thirtyfive)){
    if (player.Thirtysix === C2_LIST[player.wood] && player.Thirtyseven === C1_LIST[2]) player.Thirtysix = player.Sprev, player.Lprev = player.Thirtyseven, player.Thirtyseven = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Thirtysix === C1_LIST[6] && player.Thirtyseven !== C2_LIST[player.wood]){ 
      if (player.Thirtyseven === C1_LIST[2] || !C1_LIST.includes(player.Thirtyseven)) player.Thirtysix = player.Lprev, player.Lprev = player.Thirtyseven, player.Thirtyseven = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Thirtyfour)){
    if (player.Thirtyfive === C2_LIST[player.wood] && player.Thirtysix === C1_LIST[2]) player.Thirtyfive = player.Sprev, player.Lprev = player.Thirtysix, player.Thirtysix = C1_LIST[6],player.timeF = setTimeout(woodRight, 200)
    if (player.Thirtyfive === C1_LIST[6] && player.Thirtysix !== C2_LIST[player.wood]){ 
      if (player.Thirtysix === C1_LIST[2] || !C1_LIST.includes(player.Thirtysix)) player.Thirtyfive = player.Lprev, player.Lprev = player.Thirtysix, player.Thirtysix = C1_LIST[6],player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Thirtythree)){
    if (player.Thirtyfour === C2_LIST[player.wood] && player.Thirtyfive === C1_LIST[2]) player.Thirtyfour = player.Sprev, player.Lprev = player.Thirtyfive, player.Thirtyfive = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Thirtyfour === C1_LIST[6] && player.Thirtyfive !== C2_LIST[player.wood]){ 
      if (player.Thirtyfive === C1_LIST[2] || !C1_LIST.includes(player.Thirtyfive)) player.Thirtyfour = player.Lprev, player.Lprev = player.Thirtyfive, player.Thirtyfive = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Thirtytwo)){
    if (player.Thirtythree === C2_LIST[player.wood] && player.Thirtyfour === C1_LIST[2]) player.Thirtythree = player.Sprev, player.Lprev = player.Thirtyfour, player.Thirtyfour = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Thirtythree === C1_LIST[6] && player.Thirtyfour !== C2_LIST[player.wood]){ 
      if (player.Thirtyfour === C1_LIST[2] || !C1_LIST.includes(player.Thirtyfour)) player.Thirtythree = player.Lprev, player.Lprev = player.Thirtyfour, player.Thirtyfour = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  } 
  if (C4_LIST.includes(player.Thirtyone)){
    if (player.Thirtytwo === C2_LIST[player.wood] && player.Thirtythree === C1_LIST[2]) player.Thirtytwo = player.Sprev, player.Lprev = player.Thirtythree, player.Thirtythree = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Thirtytwo === C1_LIST[6] && player.Thirtythree !== C2_LIST[player.wood]){ 
      if (player.Thirtythree === C1_LIST[2] || !C1_LIST.includes(player.Thirtythree)) player.Thirtytwo = player.Lprev, player.Lprev = player.Thirtythree, player.Thirtythree = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }

  if (C4_LIST.includes(player.Fourtyeight)){
    if (player.Fourtynine === C2_LIST[player.wood] && player.Fifty === C1_LIST[2]) player.Fourtynine = player.Sprev, player.Lprev = player.Fifty, player.Fifty = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Fourtynine === C1_LIST[6] && player.Fifty !== C2_LIST[player.wood]){ 
      if (player.Fifty === C1_LIST[2] || !C1_LIST.includes(player.Fifty)) player.Fourtynine = player.Lprev, player.Lprev = player.Fifty, player.Fifty = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Fourtyseven)){
    if (player.Fourtyeight === C2_LIST[player.wood] && player.Fourtynine === C1_LIST[2]) player.Fourtyeight = player.Sprev, player.Lprev = player.Fourtynine, player.Fourtynine = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Fourtyeight === C1_LIST[6] && player.Fourtynine !== C2_LIST[player.wood]){ 
      if (player.Fourtynine === C1_LIST[2] || !C1_LIST.includes(player.Fourtynine)) player.Fourtyeight = player.Lprev, player.Lprev = player.Fourtynine, player.Fourtynine = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Fourtysix)){
    if (player.Fourtyseven === C2_LIST[player.wood] && player.Fourtyeight === C1_LIST[2]) player.Fourtyseven = player.Sprev, player.Lprev = player.Fourtyeight, player.Fourtyeight = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Fourtyseven === C1_LIST[6] && player.Fourtyeight !== C2_LIST[player.wood]){ 
      if (player.Fourtyeight === C1_LIST[2] || !C1_LIST.includes(player.Fourtyeight)) player.Fourtyseven = player.Lprev, player.Lprev = player.Fourtyeight, player.Fourtyeight = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Fourtyfive)){
    if (player.Fourtysix === C2_LIST[player.wood] && player.Fourtyseven === C1_LIST[2]) player.Fourtyseven = player.Sprev, player.Lprev = player.Fourtysix, player.Fourtysix = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Fourtysix === C1_LIST[6] && player.Fourtyseven !== C2_LIST[player.wood]){ 
      if (player.Fourtysix === C1_LIST[2] || !C1_LIST.includes(player.Fourtysix)) player.Fourtyseven = player.Lprev, player.Lprev = player.Fourtysix, player.Fourtysix = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Fourtyfour)){
    if (player.Fourtyfive === C2_LIST[player.wood] && player.Fourtysix === C1_LIST[2]) player.Fourtyfive = player.Sprev, player.Lprev = player.Fourtysix, player.Fourtysix = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Fourtyfive === C1_LIST[6] && player.Fourtysix !== C2_LIST[player.wood]){ 
      if (player.Fourtysix === C1_LIST[2] || !C1_LIST.includes(player.Fourtysix)) player.Fourtyfive = player.Lprev, player.Lprev = player.Fourtysix, player.Fourtysix = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Fourtythree)){
    if (player.Fourtyfour === C2_LIST[player.wood] && player.Fourtyfive === C1_LIST[2]) player.Fourtyfour = player.Sprev, player.Lprev = player.Fourtyfive, player.Fourtyfive = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Fourtyfour === C1_LIST[6] && player.Fourtyfive !== C2_LIST[player.wood]){ 
      if (player.Fourtyfive === C1_LIST[2] || !C1_LIST.includes(player.Fourtyfive)) player.Fourtyfour = player.Lprev, player.Lprev = player.Fourtyfive, player.Fourtyfive = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Fourtytwo)){
    if (player.Fourtythree === C2_LIST[player.wood] && player.Fourtyfour === C1_LIST[2]) player.Fourtythree = player.Sprev, player.Lprev = player.Fourtyfour, player.Fourtyfour = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Fourtythree === C1_LIST[6] && player.Fourtyfour !== C2_LIST[player.wood]){ 
      if (player.Fourtyfour === C1_LIST[2] || !C1_LIST.includes(player.Fourtyfour)) player.Fourtythree = player.Lprev, player.Lprev = player.Fourtyfour, player.Fourtyfour = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }
  if (C4_LIST.includes(player.Fourtyone)){
    if (player.Fourtytwo === C2_LIST[player.wood] && player.Fourtythree === C1_LIST[2]) player.Fourtytwo = player.Sprev, player.Lprev = player.Fourtythree, player.Fourtythree = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)
    if (player.Fourtytwo === C1_LIST[6] && player.Fourtythree !== C2_LIST[player.wood]){ 
      if (player.Fourtythree === C1_LIST[2] || !C1_LIST.includes(player.Fourtythree)) player.Fourtytwo = player.Lprev, player.Lprev = player.Fourtythree, player.Fourtythree = C1_LIST[6], player.timeF = setTimeout(woodRight, 200)}
  }

  if(C4_LIST.includes(player.Ten) && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Nine) && player.Ten === C1_LIST[2]) return player.Sdir = 2, player.Nine = player.prev, player.prev = player.Ten, player.Ten = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Nine) && player.Ten !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Eight) && player.Nine === C1_LIST[2]) return player.Sdir = 2, player.Eight = player.prev, player.prev = player.Nine, player.Nine = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Eight) && player.Nine !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Seven) && player.Eight === C1_LIST[2]) return player.Sdir = 2, player.Seven = player.prev, player.prev = player.Eight, player.Eight = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Seven) && player.Eight !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Six) && player.Seven === C1_LIST[2]) return player.Sdir = 2, player.Six = player.prev, player.prev = player.Seven, player.Seven = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Six) && player.Seven !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Five) && player.Six === C1_LIST[2]) return player.Sdir = 2, player.Five = player.prev, player.prev = player.Six, player.Six = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Five) && player.Six !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Four) && player.Five === C1_LIST[2]) return player.Sdir = 2, player.Four = player.prev, player.prev = player.Five, player.Five = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Four) && player.Five !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Three) && player.Four === C1_LIST[2]) return player.Sdir = 2, player.Three = player.prev, player.prev = player.Four, player.Four = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Three) && player.Four !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Two) && player.Three === C1_LIST[2]) return player.Sdir = 2, player.Two = player.prev, player.prev = player.Three, player.Three = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Two) && player.Three !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.One) && player.Two === C1_LIST[2]) return player.Sdir = 2, player.One = player.prev, player.prev = player.Two, player.Two = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.One) && player.Two !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()

  if(C4_LIST.includes(player.Twenty) && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Nineteen) && player.Twenty === C1_LIST[2]) return player.Sdir = 2, player.Nineteen = player.prev, player.prev = player.Twenty, player.Twenty = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Nineteen) && player.Twenty !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Eighteen) && player.Nineteen === C1_LIST[2]) return player.Sdir = 2, player.Eighteen = player.prev, player.prev = player.Nineteen, player.Nineteen = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Eighteen) && player.Nineteen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Seventeen) && player.Eighteen === C1_LIST[2]) return player.Sdir = 2, player.Seventeen = player.prev, player.prev = player.Eighteen, player.Eighteen = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Seventeen) && player.Eighteen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Sixteen) && player.Seventeen === C1_LIST[2]) return player.Sdir = 2, player.Sixteen = player.prev, player.prev = player.Seventeen, player.Seventeen = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Sixteen) && player.Seventeen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Fifteen) && player.Sixteen === C1_LIST[2]) return player.Sdir = 2, player.Fifteen = player.prev, player.prev = player.Sixteen, player.Sixteen = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Fifteen) && player.Sixteen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Fourteen) && player.Fifteen === C1_LIST[2]) return player.Sdir = 2, player.Fourteen = player.prev, player.prev = player.Fifteen, player.Fifteen = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Fourteen) && player.Fifteen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirteen) && player.Fourteen === C1_LIST[2]) return player.Sdir = 2, player.Thirteen = player.prev, player.prev = player.Fourteen, player.Fourteen = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirteen) && player.Fourteen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twelve) && player.Thirteen === C1_LIST[2]) return player.Sdir = 2, player.Twelve = player.prev, player.prev = player.Thirteen, player.Thirteen = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twelve) && player.Thirteen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Eleven) && player.Twelve === C1_LIST[2]) return player.Sdir = 2, player.Eleven = player.prev, player.prev = player.Twelve, player.Twelve = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Eleven) && player.Twelve !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()

  if(C4_LIST.includes(player.Thirty) && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentynine) && player.Thirty === C1_LIST[2]) return player.Sdir = 2, player.Twentynine = player.prev, player.prev = player.Thirty, player.Thirty = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentynine) && player.Thirty !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentyeight) && player.Twentynine === C1_LIST[2]) return player.Sdir = 2, player.Twentyeight = player.prev, player.prev = player.Twentynine, player.Twentynine = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentyeight) && player.Twentynine !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentyseven) && player.Twentyeight === C1_LIST[2]) return player.Sdir = 2, player.Twentyseven = player.prev, player.prev = player.Twentyeight, player.Twentyeight = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentyseven) && player.Twentyeight !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentysix) && player.Twentyseven === C1_LIST[2]) return player.Sdir = 2, player.Twentysix = player.prev, player.prev = player.Twentyseven, player.Twentyseven = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentysix) && player.Twentyseven !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentyfive) && player.Twentysix === C1_LIST[2]) return player.Sdir = 2, player.Twentyfive = player.prev, player.prev = player.Twentysix, player.Twentysix = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentyfive) && player.Twentysix !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentyfour) && player.Twentyfive === C1_LIST[2]) return player.Sdir = 2, player.Twentyfour = player.prev, player.prev = player.Twentyfive, player.Twentyfive = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentyfour) && player.Twentyfive !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentythree) && player.Twentyfour === C1_LIST[2]) return player.Sdir = 2, player.Twentythree = player.prev, player.prev = player.Twentyfour, player.Twentyfour = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentythree) && player.Twentyfour !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentytwo) && player.Twentythree === C1_LIST[2]) return player.Sdir = 2, player.Twentytwo = player.prev, player.prev = player.Twentythree, player.Twentythree = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentytwo) && player.Twentythree !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentyone) && player.Twentytwo === C1_LIST[2]) return player.Sdir = 2, player.Twentyone = player.prev, player.prev = player.Twentytwo, player.Twentytwo = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentyone) && player.Twentytwo !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()

  if(C4_LIST.includes(player.Fourty) && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtynine) && player.Fourty === C1_LIST[2]) return player.Sdir = 2, player.Thirtynine = player.prev, player.prev = player.Fourty, player.Fourty = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtynine) && player.Fourty !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtyeight) && player.Thirtynine === C1_LIST[2]) return player.Sdir = 2, player.Thirtyeight = player.prev, player.prev = player.Thirtynine, player.Thirtynine = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtyeight) && player.Thirtynine !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtyseven) && player.Thirtyeight === C1_LIST[2]) return player.Sdir = 2, player.Thirtyseven = player.prev, player.prev = player.Thirtyeight, player.Thirtyeight = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtyseven) && player.Thirtyeight !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtysix) && player.Thirtyseven === C1_LIST[2]) return player.Sdir = 2, player.Thirtysix = player.prev, player.prev = player.Thirtyseven, player.Thirtyseven = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtysix) && player.Thirtyseven !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtyfive) && player.Thirtysix === C1_LIST[2]) return player.Sdir = 2, player.Thirtyfive = player.prev, player.prev = player.Thirtysix, player.Thirtysix = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtyfive) && player.Thirtysix !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtyfour) && player.Thirtyfive === C1_LIST[2]) return player.Sdir = 2, player.Thirtyfour = player.prev, player.prev = player.Thirtyfive, player.Thirtyfive = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtyfour) && player.Thirtyfive !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtythree) && player.Thirtyfour === C1_LIST[2]) return player.Sdir = 2, player.Thirtythree = player.prev, player.prev = player.Thirtyfour, player.Thirtyfour = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtythree) && player.Thirtyfour !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtytwo) && player.Thirtythree === C1_LIST[2]) return player.Sdir = 2, player.Thirtytwo = player.prev, player.prev = player.Thirtythree, player.Thirtythree = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtytwo) && player.Thirtythree !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtyone) && player.Thirtytwo === C1_LIST[2]) return player.Sdir = 2, player.Thirtyone = player.prev, player.prev = player.Thirtytwo, player.Thirtytwo = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtyone) && player.Thirtytwo !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()

  if(C4_LIST.includes(player.Fifty) && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
    if(C4_LIST.includes(player.Fourtynine) && player.Fifty === C1_LIST[2]) return player.Sdir = 2, player.Fourtynine = player.prev, player.prev = player.Fifty, player.Fifty = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
    else if (C4_LIST.includes(player.Fourtynine) && player.Fifty !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
    if(C4_LIST.includes(player.Fourtyeight) && player.Fourtynine === C1_LIST[2]) return player.Sdir = 2, player.Fourtyeight = player.prev, player.prev = player.Fourtynine, player.Fourtynine = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
    else if (C4_LIST.includes(player.Fourtyeight) && player.Fourtynine !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
    if(C4_LIST.includes(player.Fourtyseven) && player.Fourtyeight === C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Fourtyseven = player.prev, player.prev = player.Fourtyeight, player.Fourtyeight = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
    else if (C4_LIST.includes(player.Fourtyseven) && player.Fourtyeight !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
    if(C4_LIST.includes(player.Fourtysix) && player.Fourtyseven === C1_LIST[2]) return player.Sdir = 2, player.Fourtysix = player.prev, player.prev = player.Fourtyseven, player.Fourtyseven = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
    else if (C4_LIST.includes(player.Fourtysix) && player.Fourtyseven !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
    if(C4_LIST.includes(player.Fourtyfive) && player.Fourtysix === C1_LIST[2]) return player.Sdir = 2, player.Fourtyfive = player.prev, player.prev = player.Fourtysix, player.Fourtysix = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
    else if (C4_LIST.includes(player.Fourtyfive) && player.Fourtysix !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
    if(C4_LIST.includes(player.Fourtyfour) && player.Fourtyfive === C1_LIST[2]) return player.Sdir = 2, player.Fourtyfour = player.prev, player.prev = player.Fourtyfive, player.Fourtyfive = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
    else if (C4_LIST.includes(player.Fourtyfour) && player.Fourtyfive !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
    if(C4_LIST.includes(player.Fourtythree) && player.Fourtyfour === C1_LIST[2]) return player.Sdir = 2, player.Fourtythree = player.prev, player.prev = player.Fourtyfour, player.Fourtyfour = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
    else if (C4_LIST.includes(player.Fourtythree) && player.Fourtyfour !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
    if(C4_LIST.includes(player.Fourtytwo) && player.Fourtythree === C1_LIST[2]) return player.Sdir = 2, player.Fourtytwo = player.prev, player.prev = player.Fourtythree, player.Fourtythree = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
    else if (C4_LIST.includes(player.Fourtytwo) && player.Fourtythree !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
    if(C4_LIST.includes(player.Fourtyone) && player.Fourtytwo === C1_LIST[2]) return player.Sdir = 2, player.Fourtyone = player.prev, player.prev = player.Fourtytwo, player.Fourtytwo = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), player.timeS = setTimeout(moveRight, 200), player.Sludge = true
    else if (C4_LIST.includes(player.Fourtyone) && player.Fourtytwo !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()

    if (player.MR == false) return

    if (C4_LIST.includes(player.Twenty) && player.F2 === C5_LIST[1] && player.prev === C1_LIST[player.stone]) player.Twenty = player.prev, player.prev = player.F2, player.F2 = C4_LIST[player.skinInverse],  player.East += 1,  player.West -= 1, audio(), save2()
    if (C4_LIST.includes(player.Fifty) && player.F5 === C5_LIST[1] && player.prev === C2_LIST[player.wood]) player.Fifty = player.prev, player.prev = player.F5, player.F5 = C4_LIST[player.skinInverse],  player.East += 1,  player.West -= 1, audio(), save2()

  if (C4_LIST.includes(player.L11) && player.L12 === C3_LIST[1]) player.L11 = player.prev, player.prev = player.L12, player.L12 = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
  if (C4_LIST.includes(player.L10) && player.L11 === C3_LIST[1]) player.L10 = player.prev, player.prev = player.L11, player.L11 = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
  if (C4_LIST.includes(player.L9) && player.L10 === C3_LIST[1]) player.L9 = player.prev, player.prev = player.L10, player.L10 = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
  if (C4_LIST.includes(player.L8) && player.L9 === C3_LIST[1]) player.L8 = player.prev, player.prev = player.L9, player.L9 = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
  if (C4_LIST.includes(player.L7) && player.L8 === C3_LIST[1]) player.L7 = player.prev, player.prev = player.L8, player.L8 = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
  if (C4_LIST.includes(player.L6) && player.L7 === C3_LIST[1]) player.L6 = player.prev, player.prev = player.L7, player.L7 = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
  if (C4_LIST.includes(player.L5) && player.L6 === C3_LIST[1]) player.L5 = player.prev, player.prev = player.L6, player.L6 = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
  if (C4_LIST.includes(player.L4) && player.L5 === C3_LIST[1]) player.L4 = player.prev, player.prev = player.L5, player.L5 = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
  if (C4_LIST.includes(player.L3) && player.L4 === C3_LIST[1]) player.L3 = player.prev, player.prev = player.L4, player.L4 = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
  if (C4_LIST.includes(player.L2) && player.L3 === C3_LIST[1]) player.L2 = player.prev, player.prev = player.L3, player.L3 = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
  if (C4_LIST.includes(player.L1) && player.L2 === C3_LIST[1]) player.L1 = player.prev, player.prev = player.L2, player.L2 = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()

  if (C4_LIST.includes(player.Fourtynine) && player.Fifty !== C1_LIST[player.tree] && player.Fifty !== C1_LIST[player.water]) player.Fourtynine = player.prev, player.prev = player.Fifty, player.Fifty = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Fourtynine === C2_LIST[player.wood] && C4_LIST.includes(player.Fourtyeight) && player.Fifty !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Fifty) || player.Fifty === C1_LIST[player.water]) player.Fourtynine = player.Sprev, player.Sprev = player.Fifty, player.Fifty = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fifty = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Fourtyeight) && player.Fourtynine !== C1_LIST[player.tree] && player.Fourtynine !== C1_LIST[player.water]) player.Fourtyeight = player.prev, player.prev = player.Fourtynine, player.Fourtynine = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Fourtyeight === C2_LIST[player.wood] && C4_LIST.includes(player.Fourtyseven) && player.Fourtynine !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Fourtynine) || player.Fourtynine === C1_LIST[player.water]) player.Fourtyeight = player.Sprev, player.Sprev = player.Fourtynine, player.Fourtynine = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourtynine = C2_LIST[player.island]
     if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Fourtyseven) && player.Fourtyeight !== C1_LIST[player.tree] && player.Fourtyeight !== C1_LIST[player.water]) player.Fourtyseven = player.prev, player.prev = player.Fourtyeight, player.Fourtyeight = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Fourtyseven === C2_LIST[player.wood] && C4_LIST.includes(player.Fourtysix) && player.Fourtyeight !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Fourtyeight) || player.Fourtyeight === C1_LIST[player.water]) player.Fourtyseven = player.Sprev, player.Sprev = player.Fourtyeight, player.Fourtyeight = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourtyeight = C2_LIST[player.island]
     if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Fourtysix) && player.Fourtyseven !== C1_LIST[player.tree] && player.Fourtyseven !== C1_LIST[player.water]) player.Fourtysix = player.prev, player.prev = player.Fourtyseven, player.Fourtyseven = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Fourtysix === C2_LIST[player.wood] && C4_LIST.includes(player.Fourtyfive) && player.Fourtyseven !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Fourtyseven) || player.Fourtyseven === C1_LIST[player.water]) player.Fourtysix = player.Sprev, player.Sprev = player.Fourtyseven, player.Fourtyseven = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourtyseven = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Fourtyfive) && player.Fourtysix !== C1_LIST[player.tree] && player.Fourtysix !== C1_LIST[player.water]) player.Fourtyfive = player.prev, player.prev = player.Fourtysix, player.Fourtysix = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Fourtyfive === C2_LIST[player.wood] && C4_LIST.includes(player.Fourtyfour) && player.Fourtysix !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Fourtysix) || player.Fourtysix === C1_LIST[player.water]) player.Fourtyfive = player.Sprev, player.Sprev = player.Fourtysix, player.Fourtysix = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourtysix = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Fourtyfour) && player.Fourtyfive !== C1_LIST[player.tree] && player.Fourtyfive !== C1_LIST[player.water]) player.Fourtyfour = player.prev, player.prev = player.Fourtyfive, player.Fourtyfive = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Fourtyfour === C2_LIST[player.wood] && C4_LIST.includes(player.Fourtythree) && player.Fourtyfive !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Fourtyfive) || player.Fourtyfive === C1_LIST[player.water]) player.Fourtyfour = player.Sprev, player.Sprev = player.Fourtyfive, player.Fourtyfive = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourtyfive = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Fourtythree) && player.Fourtyfour !== C1_LIST[player.tree] && player.Fourtyfour !== C1_LIST[player.water]) player.Fourtythree = player.prev, player.prev = player.Fourtyfour, player.Fourtyfour = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Fourtythree === C2_LIST[player.wood] && C4_LIST.includes(player.Fourtytwo) && player.Fourtyfour !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Fourtyfour) || player.Fourtyfour === C1_LIST[player.water]) player.Fourtythree = player.Sprev, player.Sprev = player.Fourtyfour, player.Fourtyfour = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourtyfour = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Fourtytwo) && player.Fourtythree !== C1_LIST[player.tree] && player.Fourtythree !== C1_LIST[player.water]) player.Fourtytwo = player.prev, player.prev = player.Fourtythree, player.Fourtythree = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Fourtytwo === C2_LIST[player.wood] && C4_LIST.includes(player.Fourtyone) && player.Fourtythree !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Fourtythree) || player.Fourtythree === C1_LIST[player.water]) player.Fourtytwo = player.Sprev, player.Sprev = player.Fourtythree, player.Fourtythree = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourtythree = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Fourtyone) && player.Fourtytwo !== C1_LIST[player.tree] && player.Fourtytwo !== C1_LIST[player.water]) player.Fourtyone = player.prev, player.prev = player.Fourtytwo, player.Fourtytwo = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()

  if (C4_LIST.includes(player.Thirtynine) && player.Fourty !== C1_LIST[player.tree] && player.Fourty !== C1_LIST[player.water]) player.Thirtynine = player.prev, player.prev = player.Fourty, player.Fourty = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Thirtynine === C2_LIST[player.wood] && C4_LIST.includes(player.Thirtyeight) && player.Fourty !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Fourty) || player.Fourty === C1_LIST[player.water]) player.Thirtynine = player.Sprev, player.Sprev = player.Fourty, player.Fourty = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourty = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Thirtyeight) && player.Thirtynine !== C1_LIST[player.tree] && player.Thirtynine !== C1_LIST[player.water]) player.Thirtyeight = player.prev, player.prev = player.Thirtynine, player.Thirtynine = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Thirtyeight === C2_LIST[player.wood] && C4_LIST.includes(player.Thirtyseven) && player.Thirtynine !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Thirtynine) || player.Thirtynine === C1_LIST[player.water]) player.Thirtyeight = player.Sprev, player.Sprev = player.Thirtynine, player.Thirtynine = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirtynine = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Thirtyseven) && player.Thirtyeight !== C1_LIST[player.tree] && player.Thirtyeight !== C1_LIST[player.water]) player.Thirtyseven = player.prev, player.prev = player.Thirtyeight, player.Thirtyeight = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Thirtyseven === C2_LIST[player.wood] && C4_LIST.includes(player.Thirtysix) && player.Thirtyeight !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Thirtyeight) || player.Thirtyeight === C1_LIST[player.water]) player.Thirtyseven = player.Sprev, player.Sprev = player.Thirtyeight, player.Thirtyeight = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirtyeight = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Thirtysix) && player.Thirtyseven !== C1_LIST[player.tree] && player.Thirtyseven !== C1_LIST[player.water]) player.Thirtysix = player.prev, player.prev = player.Thirtyseven, player.Thirtyseven = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Thirtysix === C2_LIST[player.wood] && C4_LIST.includes(player.Thirtyfive) && player.Thirtyseven !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Thirtyseven) || player.Thirtyseven === C1_LIST[player.water]) player.Thirtysix = player.Sprev, player.Sprev = player.Thirtyseven, player.Thirtyseven = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirtyseven = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Thirtyfive) && player.Thirtysix !== C1_LIST[player.tree] && player.Thirtysix !== C1_LIST[player.water]) player.Thirtyfive = player.prev, player.prev = player.Thirtysix, player.Thirtysix = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Thirtyfive === C2_LIST[player.wood] && C4_LIST.includes(player.Thirtyfour) && player.Thirtysix !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Thirtysix) || player.Thirtysix === C1_LIST[player.water]) player.Thirtyfive = player.Sprev, player.Sprev = player.Thirtysix, player.Thirtysix = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirtysix = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Thirtyfour) && player.Thirtyfive !== C1_LIST[player.tree] && player.Thirtyfive !== C1_LIST[player.water]) player.Thirtyfour = player.prev, player.prev = player.Thirtyfive, player.Thirtyfive = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Thirtyfour === C2_LIST[player.wood] && C4_LIST.includes(player.Thirtythree) && player.Thirtyfive !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Thirtyfive) || player.Thirtyfive === C1_LIST[player.water]) player.Thirtyfour = player.Sprev, player.Sprev = player.Thirtyfive, player.Thirtyfive = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirtyfive = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Thirtythree) && player.Thirtyfour !== C1_LIST[player.tree] && player.Thirtyfour !== C1_LIST[player.water]) player.Thirtythree = player.prev, player.prev = player.Thirtyfour, player.Thirtyfour = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Thirtythree === C2_LIST[player.wood] && C4_LIST.includes(player.Thirtytwo) && player.Thirtyfour !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Thirtyfour) || player.Thirtyfour === C1_LIST[player.water]) player.Thirtythree = player.Sprev, player.Sprev = player.Thirtyfour, player.Thirtyfour = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirtyfour = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Thirtytwo) && player.Thirtythree !== C1_LIST[player.tree] && player.Thirtythree !== C1_LIST[player.water]) player.Thirtytwo = player.prev, player.prev = player.Thirtythree, player.Thirtythree = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Thirtytwo === C2_LIST[player.wood] && C4_LIST.includes(player.Thirtyone) && player.Thirtythree !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Thirtythree) || player.Thirtythree === C1_LIST[player.water]) player.Thirtytwo = player.Sprev, player.Sprev = player.Thirtythree, player.Thirtythree = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirtythree = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Thirtyone) && player.Thirtytwo !== C1_LIST[player.tree] && player.Thirtytwo !== C1_LIST[player.water]) player.Thirtyone = player.prev, player.prev = player.Thirtytwo, player.Thirtytwo = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()

    if (C4_LIST.includes(player.Twentynine) == C4_LIST[player.skin] && player.Thirty === C2_LIST[player.wood] && player.Zone === 2) localStorage.setItem('prevTab', 1), localStorage.setItem('log1', 1), player.Thirty = C2_LIST[0]
    if (C4_LIST.includes(player.Nineteen) && player.Twenty === C2_LIST[player.wood] && player.Zone === 1) localStorage.setItem('prevTab', 10), localStorage.setItem('log', 2), player.Twenty = C2_LIST[0]
    if (C4_LIST.includes(player.Nineteen) && player.Twenty === C2_LIST[player.wood] && player.Zone === 6) localStorage.setItem('prevTab2', 1), localStorage.setItem('log3', 2), player.Twenty = C2_LIST[1]
    if (C4_LIST.includes(player.Twentynine) && player.Thirty === C2_LIST[player.wood] && player.Zone === 1) localStorage.setItem('prevTab', 1), localStorage.setItem('log', 2), player.Thirty = C2_LIST[0]
  if (C4_LIST.includes(player.Twentynine) && player.Thirty !== C1_LIST[player.tree] && player.Thirty !== C1_LIST[player.water]) player.Twentynine = player.prev, player.prev = player.Thirty, player.Thirty = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Twentynine === C2_LIST[player.wood] && C4_LIST.includes(player.Twentyeight) && player.Thirty !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Thirty) || player.Thirty === C1_LIST[player.water]) player.Twentynine = player.Sprev, player.Sprev = player.Thirty, player.Thirty = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirty = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Twentyeight) && player.Twentynine !== C1_LIST[player.tree] && player.Twentynine !== C1_LIST[player.water]) player.Twentyeight = player.prev, player.prev = player.Twentynine, player.Twentynine = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Twentyeight === C2_LIST[player.wood] && C4_LIST.includes(player.Twentyseven) && player.Twentynine !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Twentynine) || player.Twentynine === C1_LIST[player.water]) player.Twentyeight = player.Sprev, player.Sprev = player.Twentynine, player.Twentynine = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentynine = C2_LIST[player.island]
     if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Twentyseven) && player.Twentyeight !== C1_LIST[player.tree] && player.Twentyeight !== C1_LIST[player.water]) player.Twentyseven = player.prev, player.prev = player.Twentyeight, player.Twentyeight = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Twentyseven === C2_LIST[player.wood] && C4_LIST.includes(player.Twentysix) && player.Twentyeight !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Twentyeight) || player.Twentyeight === C1_LIST[player.water]) player.Twentyseven = player.Sprev, player.Sprev = player.Twentyeight, player.Twentyeight = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentyeight = C2_LIST[player.island]
     if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Twentysix) && player.Twentyseven !== C1_LIST[player.tree] && player.Twentyseven !== C1_LIST[player.water]) player.Twentysix = player.prev, player.prev = player.Twentyseven, player.Twentyseven = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Twentysix === C2_LIST[player.wood] && C4_LIST.includes(player.Twentyfive) && player.Twentyseven !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Twentyseven) || player.Twentyseven === C1_LIST[player.water]) player.Twentysix = player.Sprev, player.Sprev = player.Twentyseven, player.Twentyseven = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentyseven = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Twentyfive) && player.Twentysix !== C1_LIST[player.tree] && player.Twentysix !== C1_LIST[player.water]) player.Twentyfive = player.prev, player.prev = player.Twentysix, player.Twentysix = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Twentyfive === C2_LIST[player.wood] && C4_LIST.includes(player.Twentyfour) && player.Twentysix !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Twentysix) || player.Twentysix === C1_LIST[player.water]) player.Twentyfive = player.Sprev, player.Sprev = player.Twentysix, player.Twentysix = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentysix = C2_LIST[player.island]
     if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Twentyfour) && player.Twentyfive !== C1_LIST[player.tree] && player.Twentyfive !== C1_LIST[player.water]) player.Twentyfour = player.prev, player.prev = player.Twentyfive, player.Twentyfive = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Twentyfour === C2_LIST[player.wood] && C4_LIST.includes(player.Twentythree) && player.Twentyfive !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Twentyfive) || player.Twentyfive === C1_LIST[player.water]) player.Twentyfour = player.Sprev, player.Sprev = player.Twentyfive, player.Twentyfive = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentyfive = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Twentythree) && player.Twentyfour !== C1_LIST[player.tree] && player.Twentyfour !== C1_LIST[player.water]) player.Twentythree = player.prev, player.prev = player.Twentyfour, player.Twentyfour = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Twentythree === C2_LIST[player.wood] && C4_LIST.includes(player.Twentytwo) && player.Twentyfour !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Twentyfour) || player.Twentyfour === C1_LIST[player.water]) player.Twentythree = player.Sprev, player.Sprev = player.Twentyfour, player.Twentyfour = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentyfour = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Twentytwo) && player.Twentythree !== C1_LIST[player.tree] && player.Twentythree !== C1_LIST[player.water]) player.Twentytwo = player.prev, player.prev = player.Twentythree, player.Twentythree = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Twentytwo === C2_LIST[player.wood] && C4_LIST.includes(player.Twentyone) && player.Twentythree !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Twentythree) || player.Twentythree === C1_LIST[player.water]) player.Twentytwo = player.Sprev, player.Sprev = player.Twentythree, player.Twentythree = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentythree = C2_LIST[player.island]
     if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Twentyone) && player.Twentytwo !== C1_LIST[player.tree] && player.Twentytwo !== C1_LIST[player.water]) player.Twentyone = player.prev, player.prev = player.Twentytwo, player.Twentytwo = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()

  if (C4_LIST.includes(player.Nineteen) && player.Twenty !== C1_LIST[player.tree] && player.Twenty !== C1_LIST[player.water]) player.Nineteen = player.prev, player.prev = player.Twenty, player.Twenty = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Nineteen === C2_LIST[player.wood] && C4_LIST.includes(player.Eighteen) && player.Twenty !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Twenty) || player.Twenty === C1_LIST[player.water]) player.Nineteen = player.Sprev, player.Sprev = player.Twenty, player.Twenty = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twenty = C2_LIST[player.island]
     if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Eighteen) && player.Nineteen !== C1_LIST[player.tree] && player.Nineteen !== C1_LIST[player.water]) player.Eighteen = player.prev, player.prev = player.Nineteen, player.Nineteen = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Eighteen === C2_LIST[player.wood] && C4_LIST.includes(player.Seventeen) && player.Nineteen !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Nineteen) || player.Nineteen === C1_LIST[player.water]) player.Eighteen = player.Sprev, player.Sprev = player.Nineteen, player.Nineteen = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Nineteen = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Seventeen) && player.Eighteen !== C1_LIST[player.tree] && player.Eighteen !== C1_LIST[player.water]) player.Seventeen = player.prev, player.prev = player.Eighteen, player.Eighteen = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Seventeen === C2_LIST[player.wood] && C4_LIST.includes(player.Sixteen) && player.Eighteen !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Eighteen) || player.Eighteen === C1_LIST[player.water]) player.Seventeen = player.Sprev, player.Sprev = player.Eighteen, player.Eighteen = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Eighteen = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Sixteen) && player.Seventeen !== C1_LIST[player.tree] && player.Seventeen !== C1_LIST[player.water]) player.Sixteen = player.prev, player.prev = player.Seventeen, player.Seventeen = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Sixteen === C2_LIST[player.wood] && C4_LIST.includes(player.Fifteen) && player.Seventeen !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Seventeen) || player.Seventeen === C1_LIST[player.water]) player.Sixteen = player.Sprev, player.Sprev = player.Seventeen, player.Seventeen = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Seventeen = C2_LIST[player.island]
     if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Fifteen) && player.Sixteen !== C1_LIST[player.tree] && player.Sixteen !== C1_LIST[player.water]) player.Fifteen = player.prev, player.prev = player.Sixteen, player.Sixteen = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Fifteen === C2_LIST[player.wood] && C4_LIST.includes(player.Fourteen) && player.Sixteen !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Sixteen) || player.Sixteen === C1_LIST[player.water]) player.Fifteen = player.Sprev, player.Sprev = player.Sixteen, player.Sixteen = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Sixteen = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Fourteen) && player.Fifteen !== C1_LIST[player.tree] && player.Fifteen !== C1_LIST[player.water]) player.Fourteen = player.prev, player.prev = player.Fifteen, player.Fifteen = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Fourteen === C2_LIST[player.wood] && C4_LIST.includes(player.Thirteen) && player.Fifteen !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Fifteen) || player.Fifteen === C1_LIST[player.water]) player.Fourteen = player.Sprev, player.Sprev = player.Fifteen, player.Fifteen = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fifteen = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Thirteen) && player.Fourteen !== C1_LIST[player.tree] && player.Fourteen !== C1_LIST[player.water]) player.Thirteen = player.prev, player.prev = player.Fourteen, player.Fourteen = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Thirteen === C2_LIST[player.wood] && C4_LIST.includes(player.Twelve) && player.Fourteen !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Fourteen) || player.Fourteen === C1_LIST[player.water]) player.Thirteen = player.Sprev, player.Sprev = player.Fourteen, player.Fourteen = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourteen = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Twelve) && player.Thirteen !== C1_LIST[player.tree] && player.Thirteen !== C1_LIST[player.water]) player.Twelve = player.prev, player.prev = player.Thirteen, player.Thirteen = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Twelve === C2_LIST[player.wood] && C4_LIST.includes(player.Eleven) && player.Thirteen !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Thirteen) || player.Thirteen === C1_LIST[player.water]) player.Twelve = player.Sprev, player.Sprev = player.Thirteen, player.Thirteen = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirteen = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
   if (C4_LIST.includes(player.Eleven) && player.Twelve !== C1_LIST[player.tree] && player.Twelve !== C1_LIST[player.water]) player.Eleven = player.prev, player.prev = player.Twelve, player.Twelve = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    
  if (C4_LIST.includes(player.Nine) && player.Ten !== C1_LIST[player.tree] && player.Ten !== C1_LIST[player.water]) player.Nine = player.prev, player.prev = player.Ten, player.Ten = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Nine === C2_LIST[player.wood] && C4_LIST.includes(player.Eight) && player.Ten !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Ten) || player.Ten === C1_LIST[player.water]) player.Nine = player.Sprev, player.Sprev = player.Ten, player.Ten = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Ten = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Eight) && player.Nine !== C1_LIST[player.tree] && player.Nine !== C1_LIST[player.water]) player.Eight = player.prev, player.prev = player.Nine, player.Nine = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Eight === C2_LIST[player.wood] && C4_LIST.includes(player.Seven) && player.Nine !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Nine) || player.Nine === C1_LIST[player.water]) player.Eight = player.Sprev, player.Sprev = player.Nine, player.Nine = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Nine = C2_LIST[player.island]
     if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Seven) && player.Eight !== C1_LIST[player.tree] && player.Eight !== C1_LIST[player.water]) player.Seven = player.prev, player.prev = player.Eight, player.Eight = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Seven === C2_LIST[player.wood] && C4_LIST.includes(player.Six) && player.Eight !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Eight) || player.Eight === C1_LIST[player.water]) player.Seven = player.Sprev, player.Sprev = player.Eight, player.Eight = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Eight = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Six) && player.Seven !== C1_LIST[player.tree] && player.Seven !== C1_LIST[player.water]) player.Six = player.prev, player.prev = player.Seven, player.Seven = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Six === C2_LIST[player.wood] && C4_LIST.includes(player.Five) && player.Seven !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Seven) || player.Seven === C1_LIST[player.water]) player.Six = player.Sprev, player.Sprev = player.Seven, player.Seven = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Seven = C2_LIST[player.island]
     if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Five) && player.Six !== C1_LIST[player.tree] && player.Six !== C1_LIST[player.water]) player.Five = player.prev, player.prev = player.Six, player.Six = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Five === C2_LIST[player.wood] && C4_LIST.includes(player.Four) && player.Six !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Six) || player.Six === C1_LIST[player.water]) player.Five = player.Sprev, player.Sprev = player.Six, player.Six = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Six = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Four) && player.Five !== C1_LIST[player.tree] && player.Five  !== C1_LIST[player.water]) player.Four = player.prev, player.prev = player.Five, player.Five = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Four === C2_LIST[player.wood] && C4_LIST.includes(player.Three) && player.Five !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Five) || player.Five === C1_LIST[player.water]) player.Four = player.Sprev, player.Sprev = player.Five, player.Five = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Five = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Three) && player.Four !== C1_LIST[player.tree] && player.Four  !== C1_LIST[player.water]) player.Three = player.prev, player.prev = player.Four, player.Four = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Three === C2_LIST[player.wood] && C4_LIST.includes(player.Two) && player.Four !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Four) || player.Four === C1_LIST[player.water]) player.Three = player.Sprev, player.Sprev = player.Four, player.Four = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Four = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Two) && player.Three !== C1_LIST[player.tree] && player.Three  !== C1_LIST[player.water]) player.Two = player.prev, player.prev = player.Three, player.Three = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
    if (player.Two === C2_LIST[player.wood] && C4_LIST.includes(player.One) && player.Three !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Three) || player.Three === C1_LIST[player.water]) player.Two = player.Sprev, player.Sprev = player.Three, player.Three = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Three = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.One)&& player.Two !== C1_LIST[player.tree] && player.Two !== C1_LIST[player.water]) player.One = player.prev, player.prev = player.Two, player.Two = C4_LIST[player.skinInverse], player.East += 1,  player.West -= 1, audio(), save2()
   
    
}

function woodUp() {

  if(player.Twenty === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Ten !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Ten) || player.Ten === C1_LIST[2]) return player.Twenty = player.Lprev, player.Lprev = player.Ten, player.Ten = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Ten === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Ten = C2_LIST[player.wood]
  if(player.Nineteen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Nine !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Nine) || player.Nine === C1_LIST[2]) return player.Nineteen = player.Lprev, player.Lprev = player.Nine, player.Nine = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Nine === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Nine = C2_LIST[player.wood]
  if(player.Eighteen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Eight !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Eight) || player.Eight === C1_LIST[2]) return player.Eighteen = player.Lprev, player.Lprev = player.Eight, player.Eight = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Eight === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Eight = C2_LIST[player.wood]
  if(player.Seventeen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Seven !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Seven) || player.Seven === C1_LIST[2]) return player.Seventeen = player.Lprev, player.Lprev = player.Seven, player.Seven = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Seven === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Seven = C2_LIST[player.wood]
  if(player.Sixteen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Six !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Six) || player.Six === C1_LIST[2]) return player.Sixteen = player.Lprev, player.Lprev = player.Six, player.Six = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Six === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Six = C2_LIST[player.wood]
  if(player.Fifteen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Five !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Five) || player.Five === C1_LIST[2]) return player.Fifteen = player.Lprev, player.Lprev = player.Five, player.Five = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Five === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Five = C2_LIST[player.wood]
  if(player.Fourteen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Four !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Four) || player.Four === C1_LIST[2]) return player.Fourteen = player.Lprev, player.Lprev = player.Four, player.Four = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Four === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Four = C2_LIST[player.wood]
  if(player.Thirteen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Three !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Three) || player.Three === C1_LIST[2]) return player.Thirteen = player.Lprev, player.Lprev = player.Three, player.Three = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Three === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Three = C2_LIST[player.wood]
  if(player.Twelve === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Two !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Two) || player.Two === C1_LIST[2]) return player.Twelve = player.Lprev, player.Lprev = player.Two, player.Two = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Two === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Two = C2_LIST[player.wood]
  if(player.Eleven === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.One !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.One) || player.One === C1_LIST[2]) return player.Eleven = player.Lprev, player.Lprev = player.One, player.One = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.One === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.One = C2_LIST[player.wood]

  if(player.Thirty === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twenty !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twenty) || player.Twenty === C1_LIST[2]) return player.Thirty = player.Lprev, player.Lprev = player.Twenty, player.Twenty = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Twenty === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twenty = C2_LIST[player.wood]
  if(player.Twentynine === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Nineteen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Nineteen) || player.Nineteen === C1_LIST[2]) return player.Twentynine = player.Lprev, player.Lprev = player.Nineteen, player.Nineteen = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Nineteen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Nineteen = C2_LIST[player.wood]
  if(player.Twentyeight === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Eighteen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Eighteen) || player.Eighteen === C1_LIST[2]) return player.Twentyeight = player.Lprev, player.Lprev = player.Eighteen, player.Eighteen = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Eighteen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Eighteen = C2_LIST[player.wood]
  if(player.Twentyseven === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Seventeen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Seventeen) || player.Seventeen === C1_LIST[2]) return player.Twentyseven = player.Lprev, player.Lprev = player.Seventeen, player.Seventeen = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Seventeen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Seventeen = C2_LIST[player.wood]
  if(player.Twentysix === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Sixteen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Sixteen) || player.Sixteen === C1_LIST[2]) return player.Twentysix = player.Lprev, player.Lprev = player.Sixteen, player.Sixteen = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Sixteen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Sixteen = C2_LIST[player.wood]
  if(player.Twentyfive === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fifteen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fifteen) || player.Fifteen === C1_LIST[2]) return player.Twentyfive = player.Lprev, player.Lprev = player.Fifteen, player.Fifteen = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Fifteen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fifteen = C2_LIST[player.wood]
  if(player.Twentyfour === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourteen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourteen) || player.Fourteen === C1_LIST[2]) return player.Twentyfour = player.Lprev, player.Lprev = player.Fourteen, player.Fourteen = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Fourteen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourteen = C2_LIST[player.wood]
  if(player.Twentythree === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirteen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirteen) || player.Thirteen === C1_LIST[2]) return player.Twentythree = player.Lprev, player.Lprev = player.Thirteen, player.Thirteen = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Thirteen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirteen = C2_LIST[player.wood]
  if(player.Twentytwo === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twelve !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twelve) || player.Twelve === C1_LIST[2]) return player.Twentytwo = player.Lprev, player.Lprev = player.Twelve, player.Twelve = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Twelve === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twelve = C2_LIST[player.wood]
  if(player.Twentyone === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Eleven !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Eleven) || player.Eleven === C1_LIST[2]) return player.Twentyone = player.Lprev, player.Lprev = player.Eleven, player.Eleven = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Eleven === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Eleven = C2_LIST[player.wood]

  if(player.Fourty === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirty !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirty) || player.Thirty === C1_LIST[2]) return player.Fourty = player.Lprev, player.Lprev = player.Thirty, player.Thirty = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Thirty === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirty = C2_LIST[player.wood]
  if(player.Thirtynine === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentynine !== C2_LIST[player.wood]){ 
    if (!C1_LIST.includes(player.Twentynine) || player.Twentynine === C1_LIST[2]) return player.Thirtynine = player.Lprev, player.Lprev = player.Twentynine, player.Twentynine = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Twentynine === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentynine = C2_LIST[player.wood]
  if(player.Thirtyeight === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentyeight !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentyeight) || player.Twentyeight === C1_LIST[2]) return player.Thirtyeight = player.Lprev, player.Lprev = player.Twentyeight, player.Twentyeight = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Twentyeight === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentyeight = C2_LIST[player.wood]
  if(player.Thirtyseven === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentyseven !== C2_LIST[player.wood]){ 
    if (!C1_LIST.includes(player.Twentyseven) || player.Twentyseven === C1_LIST[2]) return player.Thirtyseven = player.Lprev, player.Lprev = player.Twentyseven, player.Twentyseven = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Twentyseven === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentyseven = C2_LIST[player.wood]
  if(player.Thirtysix === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentysix !== C2_LIST[player.wood]){ 
    if (!C1_LIST.includes(player.Twentysix) || player.Twentysix === C1_LIST[2]) return player.Thirtysix = player.Lprev, player.Lprev = player.Twentysix, player.Twentysix = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Twentysix === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentysix = C2_LIST[player.wood]
  if(player.Thirtyfive === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentyfive !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentyfive) || player.Twentyfive === C1_LIST[2]) return player.Thirtyfive = player.Lprev, player.Lprev = player.Twentyfive, player.Twentyfive = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Twentyfive === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentyfive = C2_LIST[player.wood]
  if(player.Thirtyfour === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentyfour !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentyfour) || player.Twentyfour === C1_LIST[2]) return player.Thirtyfour = player.Lprev, player.Lprev = player.Twentyfour, player.Twentyfour = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Twentyfour === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentyfour = C2_LIST[player.wood]
  if(player.Thirtythree === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentythree !== C2_LIST[player.wood])
    if (!C1_LIST.includes(player.Twentythree) || player.Twentythree === C1_LIST[2]){ return player.Thirtythree = player.Lprev, player.Lprev = player.Twentythree, player.Twentythree = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Twentythree === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentythree = C2_LIST[player.wood]
  if(player.Thirtytwo === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentytwo !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentytwo) || player.Twentytwo === C1_LIST[2]) return player.Thirtytwo = player.Lprev, player.Lprev = player.Twentytwo, player.Twentytwo = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Twentytwo === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentytwo = C2_LIST[player.wood]
  if(player.Thirtyone === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentyone !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentyone) || player.Twentyone === C1_LIST[2]) return player.Thirtyone = player.Lprev, player.Lprev = player.Twentyone, player.Twentyone = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Twentyone === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentyone = C2_LIST[player.wood]

  if(player.Fifty === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourty !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourty) || player.Fourty === C1_LIST[2]) return player.Fifty = player.Lprev, player.Lprev = player.Fourty, player.Fourty = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Fourty === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourty = C2_LIST[player.wood]
  if(player.Fourtynine === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtynine !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtynine) || player.Thirtynine === C1_LIST[2]) return player.Fourtynine = player.Lprev, player.Lprev = player.Thirtynine, player.Thirtynine = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Thirtynine === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtynine = C2_LIST[player.wood]
  if(player.Fourtyeight === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtyeight !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtyeight) || player.Thirtyeight === C1_LIST[2]) return player.Fourtyeight = player.Lprev, player.Lprev = player.Thirtyeight, player.Thirtyeight = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Thirtyeight === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtyeight = C2_LIST[player.wood]
  if(player.Fourtyseven === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtyseven !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtyseven) || player.Thirtyseven === C1_LIST[2]) return player.Fourtyseven = player.Lprev, player.Lprev = player.Thirtyseven, player.Thirtyseven = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Thirtyseven === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtyseven = C2_LIST[player.wood]
  if(player.Fourtysix === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtysix !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtysix) || player.Thirtysix === C1_LIST[2]) return player.Fourtysix = player.Lprev, player.Lprev = player.Thirtysix, player.Thirtysix = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Thirtysix === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtysix = C2_LIST[player.wood]
  if(player.Fourtyfive === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtyfive !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtyfive) || player.Thirtyfive === C1_LIST[2]) return player.Fourtyfive = player.Lprev, player.Lprev = player.Thirtyfive, player.Thirtyfive = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Thirtyfive === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtyfive = C2_LIST[player.wood]
  if(player.Fourtyfour === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtyfour !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtyfour) || player.Thirtyfour === C1_LIST[2]) return player.Fourtyfour = player.Lprev, player.Lprev = player.Thirtyfour, player.Thirtyfour = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Thirtyfour === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtyfour = C2_LIST[player.wood]
  if(player.Fourtythree === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtythree !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtythree) || player.Thirtythree === C1_LIST[2]) return player.Fourtythree = player.Lprev, player.Lprev = player.Thirtythree, player.Thirtythree = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Thirtythree === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtythree = C2_LIST[player.wood]
  if(player.Fourtytwo === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtytwo !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtytwo) || player.Thirtytwo === C1_LIST[2]) return player.Fourtytwo = player.Lprev, player.Lprev = player.Thirtytwo, player.Thirtytwo = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Thirtytwo === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtytwo = C2_LIST[player.wood]
  if(player.Fourtyone === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtyone !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtyone) || player.Thirtyone === C1_LIST[2]) return player.Fourtyone = player.Lprev, player.Lprev = player.Thirtyone, player.Thirtyone = C1_LIST[6],  player.timeF = setTimeout(woodUp, 200)}
  else if(player.Thirtyone === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtyone = C2_LIST[player.wood]

}

function moveUp(){

  if (C4_LIST.includes(player.Thirty)){
    if (player.Twenty === C2_LIST[player.wood] && player.Ten === C1_LIST[2]) player.Twenty = player.Sprev, player.Lprev = player.Ten, player.Ten = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Twenty === C1_LIST[6] && player.Ten !== C2_LIST[player.wood]){ 
      if (player.Ten === C1_LIST[2] || !C1_LIST.includes(player.Ten)) player.Twenty = player.Lprev, player.Lprev = player.Ten, player.Ten = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }
  if (C4_LIST.includes(player.Twentynine)){ 
  if (player.Nineteen === C2_LIST[player.wood] && player.Nine === C1_LIST[2]) player.Nineteen = player.Sprev, player.Lprev = player.Nine, player.Nine = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
  if (player.Nineteen === C1_LIST[6] && player.Nine !== C2_LIST[player.wood]){
  if (player.Nine === C1_LIST[2] || !C1_LIST.includes(player.Nine)) player.Nineteen = player.Lprev, player.Lprev = player.Nine, player.Nine = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
}
  if (C4_LIST.includes(player.Twentyeight)){
    if (player.Eighteen === C2_LIST[player.wood] && player.Eight === C1_LIST[2]) player.Eighteen = player.Sprev, player.Lprev = player.Eight, player.Eight = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Eighteen === C1_LIST[6] && player.Eight !== C2_LIST[player.wood]){ 
      if (player.Eight === C1_LIST[2] || !C1_LIST.includes(player.Eight)) player.Eighteen = player.Lprev, player.Lprev = player.Eight, player.Eight = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }
  if (C4_LIST.includes(player.Twentyseven)){
    if (player.Seventeen === C2_LIST[player.wood] && player.Seven === C1_LIST[2]) player.Seventeen = player.Sprev, player.Lprev = player.Seven, player.Seven = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Seventeen === C1_LIST[6] && player.Seven !== C2_LIST[player.wood]){ 
      if (player.Seven === C1_LIST[2] || !C1_LIST.includes(player.Seven)) player.Seventeen = player.Lprev, player.Lprev = player.Seven, player.Seven = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }
  if (C4_LIST.includes(player.Twentysix)){
    if (player.Sixteen === C2_LIST[player.wood] && player.Six === C1_LIST[2]) player.Sixteen = player.Sprev, player.Lprev = player.Six, player.Six = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Sixteen === C1_LIST[6] && player.Six !== C2_LIST[player.wood]){ 
      if (player.Six === C1_LIST[2] || !C1_LIST.includes(player.Six)) player.Sixteen = player.Lprev, player.Lprev = player.Six, player.Six = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }
  if (C4_LIST.includes(player.Twentyfive)){
    if (player.Fifteen === C2_LIST[player.wood] && player.Five === C1_LIST[2]) player.Fifteen = player.Sprev, player.Lprev = player.Five, player.Five = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Fifteen === C1_LIST[6] && player.Five !== C2_LIST[player.wood]){ 
      if (player.Five === C1_LIST[2] || !C1_LIST.includes(player.Five)) player.Fifteen = player.Lprev, player.Lprev = player.Five, player.Five = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }
  if (C4_LIST.includes(player.Twentyfour)){
    if (player.Fourteen === C2_LIST[player.wood] && player.Four === C1_LIST[2]) player.Fourteen = player.Sprev, player.Lprev = player.Four, player.Four = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Fourteen === C1_LIST[6] && player.Four !== C2_LIST[player.wood]){ 
      if (player.Four === C1_LIST[2] || !C1_LIST.includes(player.Four)) player.Fourteen = player.Lprev, player.Lprev = player.Four, player.Four = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }
  if (C4_LIST.includes(player.Twentythree)){
    if (player.Thirteen === C2_LIST[player.wood] && player.Three === C1_LIST[2]) player.Thirteen = player.Sprev, player.Lprev = player.Three, player.Three = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Thirteen === C1_LIST[6] && player.Three !== C2_LIST[player.wood]){ 
      if (player.Three === C1_LIST[2] || !C1_LIST.includes(player.Three)) player.Thirteen = player.Lprev, player.Lprev = player.Three, player.Three = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }
  if (C4_LIST.includes(player.Twentytwo)){
    if (player.Twelve === C2_LIST[player.wood] && player.Two === C1_LIST[2]) player.Twelve = player.Sprev, player.Lprev = player.Two, player.Two = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Twelve === C1_LIST[6] && player.Two !== C2_LIST[player.wood]){ 
      if (player.Two === C1_LIST[2] || !C1_LIST.includes(player.Two)) player.Twelve = player.Lprev, player.Lprev = player.Two, player.Two = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }
  if (C4_LIST.includes(player.Twentyone)){
    if (player.Eleven === C2_LIST[player.wood] && player.One === C1_LIST[2]) player.Eleven = player.Sprev, player.Lprev = player.One, player.One = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Eleven === C1_LIST[6] && player.One !== C2_LIST[player.wood]){ 
      if (player.One === C1_LIST[2] || !C1_LIST.includes(player.One)) player.Eleven = player.Lprev, player.Lprev = player.One, player.One = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }

  if (C4_LIST.includes(player.Fourty)){
    if (player.Thirty === C2_LIST[player.wood] && player.Twenty === C1_LIST[2]) player.Thirty = player.Sprev, player.Lprev = player.Twenty, player.Twenty = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Thirty === C1_LIST[6] && player.Twenty !== C2_LIST[player.wood]){ 
      if (player.Twenty === C1_LIST[2] || !C1_LIST.includes(player.Thirty)) player.Thirty = player.Lprev, player.Lprev = player.Twenty, player.Twenty = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }
  if (C4_LIST.includes(player.Thirtynine)){
    if (player.Twentynine === C2_LIST[player.wood] && player.Nineteen === C1_LIST[2]) player.Twentynine = player.Sprev, player.Lprev = player.Nineteen, player.Nineteen = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Twentynine === C1_LIST[6] && player.Nineteen !== C2_LIST[player.wood]){ 
      if (player.Nineteen === C1_LIST[2] || !C1_LIST.includes(player.Nineteen) && player.Zone !== 6) player.Twentynine = player.Lprev, player.Lprev = player.Nineteen, player.Nineteen = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
      if (player.Nineteen === C1_LIST[2] || !C1_LIST.includes(player.Nineteen) && player.Zone === 6) player.Twentynine = C1_LIST[2], player.Lprev = player.Nineteen, player.Nineteen = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }
  if (C4_LIST.includes(player.Thirtyeight)){
    if (player.Twentyeight === C2_LIST[player.wood] && player.Eighteen === C1_LIST[2]) player.Twentyeight = player.Sprev, player.Lprev = player.Eighteen, player.Eighteen = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Twentyeight === C1_LIST[6] && player.Eighteen !== C2_LIST[player.wood]){ 
      if (player.Eighteen === C1_LIST[2] || !C1_LIST.includes(player.Eighteen)) player.Twentyeight = player.Lprev, player.Lprev = player.Eighteen, player.Eighteen = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }
  if (C4_LIST.includes(player.Thirtyseven)){
    if (player.Twentyseven === C2_LIST[player.wood] && player.Seventeen === C1_LIST[2]) player.Twentyseven = player.Sprev, player.Lprev = player.Seventeen, player.Seventeen = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Twentyseven === C1_LIST[6] && player.Seventeen !== C2_LIST[player.wood]){ 
      if (player.Seventeen === C1_LIST[2] || !C1_LIST.includes(player.Seventeen)) player.Twentyseven = player.Lprev, player.Lprev = player.Seventeen, player.Seventeen = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }
  if (C4_LIST.includes(player.Thirtysix)){
    if (player.Twentysix === C2_LIST[player.wood] && player.Sixteen === C1_LIST[2]) player.Twentysix = player.Sprev, player.Lprev = player.Sixteen, player.Sixteen = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Twentysix === C1_LIST[6] && player.Sixteen !== C2_LIST[player.wood]){ 
      if (player.Sixteen === C1_LIST[2] || !C1_LIST.includes(player.Sixteen)) player.Twentysix = player.Lprev, player.Lprev = player.Sixteen, player.Sixteen = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }
  if (C4_LIST.includes(player.Thirtyfive)){
    if (player.Twentyfive === C2_LIST[player.wood] && player.Fifteen === C1_LIST[2]) player.Twentyfive = player.Sprev, player.Lprev = player.Fifteen, player.Fifteen = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Twentyfive === C1_LIST[6] && player.Fifteen !== C2_LIST[player.wood]){ 
      if (player.Fifteen === C1_LIST[2] || !C1_LIST.includes(player.Fifteen)) player.Twentyfive = player.Lprev, player.Lprev = player.Fifteen, player.Fifteen = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }
  if (C4_LIST.includes(player.Thirtyfour)){
    if (player.Twentyfour === C2_LIST[player.wood] && player.Fourteen === C1_LIST[2]) player.Twentyfour = player.Sprev, player.Lprev = player.Fourteen, player.Fourteen = C1_LIST[6],player.timeF = setTimeout(woodUp, 200)
    if (player.Twentyfour === C1_LIST[6] && player.Fourteen !== C2_LIST[player.wood]){ 
      if (player.Fourteen === C1_LIST[2] || !C1_LIST.includes(player.Fourteen)) player.Twentyfour = player.Lprev, player.Lprev = player.Fourteen, player.Fourteen = C1_LIST[6],player.timeF = setTimeout(woodUp, 200)}
  }
  if (C4_LIST.includes(player.Thirtythree)){
    if (player.Twentythree === C2_LIST[player.wood] && player.Thirteen === C1_LIST[2]) player.Twentythree = player.Sprev, player.Lprev = player.Thirteen, player.Thirteen = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Twentythree === C1_LIST[6] && player.Thirteen !== C2_LIST[player.wood]){ 
      if (player.Thirteen === C1_LIST[2] || !C1_LIST.includes(player.Thirteen)) player.Twentythree = player.Lprev, player.Lprev = player.Thirteen, player.Thirteen = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }
  if (C4_LIST.includes(player.Thirtytwo)){
    if (player.Twentytwo === C2_LIST[player.wood] && player.Twelve === C1_LIST[2]) player.Twentytwo = player.Sprev, player.Lprev = player.Twelve, player.Twelve = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Twentytwo === C1_LIST[6] && player.Twelve !== C2_LIST[player.wood]){ 
      if (player.Twelve === C1_LIST[2] || !C1_LIST.includes(player.Twelve)) player.Twentytwo = player.Lprev, player.Lprev = player.Twelve, player.Twelve = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  } 
  if (C4_LIST.includes(player.Thirtyone)){
    if (player.Twentyone === C2_LIST[player.wood] && player.Eleven === C1_LIST[2]) player.Twentyone = player.Sprev, player.Lprev = player.Eleven, player.Eleven = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Twentyone === C1_LIST[6] && player.Eleven !== C2_LIST[player.wood]){ 
      if (player.Eleven === C1_LIST[2] || !C1_LIST.includes(player.Eleven)) player.Twentyone = player.Lprev, player.Lprev = player.Eleven, player.Eleven = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }

  if (C4_LIST.includes(player.Fifty)){
    if (player.Fourty === C2_LIST[player.wood] && player.Thirty === C1_LIST[2]) player.Fourty = player.Sprev, player.Lprev = player.Thirty, player.Thirty = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Fourty === C1_LIST[6] && player.Thirty !== C2_LIST[player.wood]){ 
      if (player.Thirty === C1_LIST[2] || !C1_LIST.includes(player.Thirty)) player.Fourty = player.Lprev, player.Lprev = player.Thirty, player.Thirty = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }
  if (C4_LIST.includes(player.Fourtynine)){
    if (player.Thirtynine === C2_LIST[player.wood] && player.Twentynine === C1_LIST[2]) player.Thirtynine = player.Sprev, player.Lprev = player.Twentynine, player.Twentynine = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Thirtynine === C1_LIST[6] && player.Twentynine !== C2_LIST[player.wood]){ 
      if (player.Twentynine === C1_LIST[2] || !C1_LIST.includes(player.Twentynine)) player.Thirtynine = player.Lprev, player.Lprev = player.Twentynine, player.Twentynine = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }
  if (C4_LIST.includes(player.Fourtyeight)){
    if (player.Thirtyeight === C2_LIST[player.wood] && player.Twentyeight === C1_LIST[2]) player.Thirtyeight = player.Sprev, player.Lprev = player.Twentyeight, player.Twentyeight = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Thirtyeight === C1_LIST[6] && player.Twentyeight !== C2_LIST[player.wood]){ 
      if (player.Twentyeight === C1_LIST[2] || !C1_LIST.includes(player.Twentyeight)) player.Thirtyeight = player.Lprev, player.Lprev = player.Twentyeight, player.Twentyeight = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }
  if (C4_LIST.includes(player.Fourtyseven)){
    if (player.Thirtyseven === C2_LIST[player.wood] && player.Twentyseven === C1_LIST[2]) player.Thirtyseven = player.Sprev, player.Lprev = player.Twentyseven, player.Twentyseven = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Thirtyseven === C1_LIST[6] && player.Twentyseven !== C2_LIST[player.wood]){ 
      if (player.Twentyseven === C1_LIST[2] || !C1_LIST.includes(player.Twentyseven)) player.Thirtyseven = player.Lprev, player.Lprev = player.Twentyseven, player.Twentyseven = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }
  if (C4_LIST.includes(player.Fourtysix)){
    if (player.Twentysix === C2_LIST[player.wood] && player.Thirtysix === C1_LIST[2]) player.Twentysix = player.Sprev, player.Lprev = player.Thirtysix, player.Thirtysixs = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Twentysix === C1_LIST[6] && player.Thirtysix !== C2_LIST[player.wood]){ 
      if (player.Thirtysix === C1_LIST[2] || !C1_LIST.includes(player.Thirtysix)) player.Twentysix = player.Lprev, player.Lprev = player.Thirtysix, player.Thirtysix = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }
  if (C4_LIST.includes(player.Fourtyfive)){
    if (player.Thirtyfive === C2_LIST[player.wood] && player.Twentyfive === C1_LIST[2]) player.Thirtyfive = player.Sprev, player.Lprev = player.Twentyfive, player.Twentyfive = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Thirtyfive === C1_LIST[6] && player.Twentyfive !== C2_LIST[player.wood]){ 
      if (player.Twentyfive === C1_LIST[2] || !C1_LIST.includes(player.Twentyfive)) player.Thirtyfive = player.Lprev, player.Lprev = player.Twentyfive, player.Twentyfive = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }
  if (C4_LIST.includes(player.Fourtyfour)){
    if (player.Thirtyfour === C2_LIST[player.wood] && player.Twentyfour === C1_LIST[2]) player.Thirtyfour = player.Sprev, player.Lprev = player.Twentyfour, player.Twentyfour = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Thirtyfour === C1_LIST[6] && player.Twentyfour !== C2_LIST[player.wood]){ 
      if (player.Twentyfour === C1_LIST[2] || !C1_LIST.includes(player.Twentyfour)) player.Thirtyfour = player.Lprev, player.Lprev = player.Twentyfour, player.Twentyfour = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }
  if (C4_LIST.includes(player.Fourtythree)){
    if (player.Thirtythree === C2_LIST[player.wood] && player.Twentythree === C1_LIST[2]) player.Thirtythree = player.Sprev, player.Lprev = player.Twentythree, player.Twentythree = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Thirtythree === C1_LIST[6] && player.Twentythree !== C2_LIST[player.wood]){ 
      if (player.Twentythree === C1_LIST[2] || !C1_LIST.includes(player.Twentythree)) player.Thirtythree = player.Lprev, player.Lprev = player.Twentythree, player.Twentythree = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }
  if (C4_LIST.includes(player.Fourtytwo)){
    if (player.Thirtytwo === C2_LIST[player.wood] && player.Twentytwo === C1_LIST[2]) player.Thirtytwo = player.Sprev, player.Lprev = player.Twentytwo, player.Twentytwo = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Thirtytwo === C1_LIST[6] && player.Twentytwo !== C2_LIST[player.wood]){ 
      if (player.Twentytwo === C1_LIST[2] || !C1_LIST.includes(player.Twentytwo)) player.Thirtytwo = player.Lprev, player.Lprev = player.Twentytwo, player.Twentytwo = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }
  if (C4_LIST.includes(player.Fourtyone)){
    if (player.Thirtyone === C2_LIST[player.wood] && player.Twentyone === C1_LIST[2]) player.Thirtyone = player.Sprev, player.Lprev = player.Twentyone, player.Twentyone = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)
    if (player.Thirtyone === C1_LIST[6] && player.Twentyone !== C2_LIST[player.wood]){ 
      if (player.Twentyone === C1_LIST[2] || !C1_LIST.includes(player.Twentyone)) player.Thirtyone = player.Lprev, player.Lprev = player.Twentyone, player.Twentyone = C1_LIST[6], player.timeF = setTimeout(woodUp, 200)}
  }

  if(C4_LIST.includes(player.One) && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Eleven) && player.One === C1_LIST[2]) return player.Sdir = 3, player.Eleven = player.prev, player.prev = player.One, player.One = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Eleven) && player.One !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Two)) player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twelve) && player.Two === C1_LIST[2]) return player.Sdir = 3, player.Twelve = player.prev, player.prev = player.Two, player.Two = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twelve) && player.Two !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Three)) player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirteen) && player.Three === C1_LIST[2]) return player.Sdir = 3, player.Thirteen = player.prev, player.prev = player.Three, player.Three = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirteen) && player.Three !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Four)) player.Sludge = false, save2()
  if(C4_LIST.includes(player.Fourteen) && player.Four === C1_LIST[2]) return player.Sdir = 3, player.Fourteen = player.prev, player.prev = player.Four, player.Four = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Fourteen) && player.Four !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Five)) player.Sludge = false, save2()
  if(C4_LIST.includes(player.Fifteen) && player.Five === C1_LIST[2]) return player.Sdir = 3, player.Fifteen = player.prev, player.prev = player.Five, player.Five = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Fifteen) && player.Five !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Six)) player.Sludge = false, save2()
  if(C4_LIST.includes(player.Sixteen) && player.Six === C1_LIST[2]) return player.Sdir = 3, player.Sixteen = player.prev, player.prev = player.Six, player.Six = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Sixteen) && player.Six !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Seven)) player.Sludge = false, save2()
  if(C4_LIST.includes(player.Seventeen) && player.Seven === C1_LIST[2]) return player.Sdir = 3, player.Seventeen = player.prev, player.prev = player.Seven, player.Seven = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Seventeen) && player.Seven !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Eight)) player.Sludge = false, save2()
  if(C4_LIST.includes(player.Eighteen) && player.Eight === C1_LIST[2]) return player.Sdir = 3, player.Eighteen = player.prev, player.prev = player.Eight, player.Eight = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Eighteen) && player.Eight !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Nine)) player.Sludge = false, save2()
  if(C4_LIST.includes(player.Nineteen) && player.Nine === C1_LIST[2]) return player.Sdir = 3, player.Nineteen = player.prev, player.prev = player.Nine, player.Nine = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Nineteen) && player.Nine !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Ten)) player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twenty) && player.Ten === C1_LIST[2]) return player.Sdir = 3, player.Twenty = player.prev, player.prev = player.Ten, player.Ten = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twenty) && player.Ten !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()

  if(C4_LIST.includes(player.Twentyone) && player.Eleven === C1_LIST[2]) return player.Sdir = 3, player.Twentyone = player.prev, player.prev = player.Eleven, player.Eleven = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentyone) && player.Eleven !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentytwo) && player.Twelve === C1_LIST[2]) return player.Sdir = 3, player.Twentytwo = player.prev, player.prev = player.Twelve, player.Twelve = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentytwo) && player.Twelve !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentythree) && player.Thirteen === C1_LIST[2]) return player.Sdir = 3, player.Twentythree = player.prev, player.prev = player.Thirteen, player.Thirteen = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentythree) && player.Thirteen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentyfour) && player.Fourteen === C1_LIST[2]) return player.Sdir = 3, player.Twentyfour = player.prev, player.prev = player.Fourteen, player.Fourteen = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentyfour) && player.Fourteen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentyfive) && player.Fifteen === C1_LIST[2]) return player.Sdir = 3, player.Twentyfive = player.prev, player.prev = player.Fifteen, player.Fifteen = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentyfive) && player.Fifteen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentysix) && player.Sixteen === C1_LIST[2]) return player.Sdir = 3, player.Twentysix = player.prev, player.prev = player.Sixteen, player.Sixteen = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentysix) && player.Sixteen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentyseven) && player.Seventeen === C1_LIST[2]) return player.Sdir = 3, player.Twentyseven = player.prev, player.prev = player.Seventeen, player.Seventeen = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentyseven) && player.Seventeen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentyeight) && player.Eighteen === C1_LIST[2]) return player.Sdir = 3, player.Twentyeight = player.prev, player.prev = player.Eighteen, player.Eighteen = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentyeight) && player.Eighteen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentynine) && player.Nineteen === C1_LIST[2]) return player.Sdir = 3, player.Twentynine = player.prev, player.prev = player.Nineteen, player.Nineteen = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentynine) && player.Nineteen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirty) && player.Twenty === C1_LIST[2]) return player.Sdir = 3, player.Thirty = player.prev, player.prev = player.Twenty, player.Twenty = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirty) && player.Twenty !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()

  if(C4_LIST.includes(player.Thirtyone) && player.Twentyone === C1_LIST[2]) return player.Sdir = 3, player.Thirtyone = player.prev, player.prev = player.Twentyone, player.Twentyone = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtyone) && player.Twentyone !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtytwo) && player.Twentytwo === C1_LIST[2]) return player.Sdir = 3, player.Thirtytwo = player.prev, player.prev = player.Twentytwo, player.Twentytwo = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtytwo) && player.Twentytwo !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtythree) && player.Twentythree === C1_LIST[2]) return player.Sdir = 3, player.Thirtythree = player.prev, player.prev = player.Twentythree, player.Twentythree = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtythree) && player.Twentythree !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtyfour) && player.Twentyfour === C1_LIST[2]) return player.Sdir = 3, player.Thirtyfour = player.prev, player.prev = player.Twentyfour, player.Twentyfour = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtyfour) && player.Twentyfour !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtyfive) && player.Twentyfive === C1_LIST[2]) return player.Sdir = 3, player.Thirtyfive = player.prev, player.prev = player.Twentyfive, player.Twentyfive = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtyfive) && player.Twentyfive !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtysix) && player.Twentysix === C1_LIST[2]) return player.Sdir = 3, player.Thirtysix = player.prev, player.prev = player.Twentysix, player.Twentysix = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtysix) && player.Twentysix !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtyseven) && player.Twentyseven === C1_LIST[2]) return player.Sdir = 3, player.Thirtyseven = player.prev, player.prev = player.Twentyseven, player.Twentyseven = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtyseven) && player.Twentyseven !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtyeight) && player.Twentyeight === C1_LIST[2]) return player.Sdir = 3, player.Thirtyeight = player.prev, player.prev = player.Twentyeight, player.Twentyeight = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtyeight) && player.Twentyeight !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtynine) && player.Twentynine === C1_LIST[2]) return player.Sdir = 3, player.Thirtynine = player.prev, player.prev = player.Twentynine, player.Twentynine = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtynine) && player.Twentynine !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Fourty) && player.Thirty === C1_LIST[2]) return player.Sdir = 3, player.Fourty = player.prev, player.prev = player.Thirty, player.Thirty = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Fourty) && player.Thirty !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()

  if(C4_LIST.includes(player.Fourtyone) && player.Thirtyone === C1_LIST[2]) return player.Sdir = 3, player.Fourtyone = player.prev, player.prev = player.Thirtyone, player.Thirtyone = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Fourtyone) && player.Thirtyone !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Fourtytwo) && player.Thirtytwo === C1_LIST[2]) return player.Sdir = 3, player.Fourtytwo = player.prev, player.prev = player.Thirtytwo, player.Thirtytwo = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Fourtytwo) && player.Thirtytwo !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Fourtythree) && player.Thirtythree === C1_LIST[2]) return player.Sdir = 3, player.Fourtythree = player.prev, player.prev = player.Thirtythree, player.Thirtythree = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Fourtythree) && player.Thirtythree !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Fourtyfour) && player.Thirtyfour === C1_LIST[2]) return player.Sdir = 3, player.Fourtyfour = player.prev, player.prev = player.Thirtyfour, player.Thirtyfour = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Fourtyfour) && player.Thirtyfour !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Fourtyfive) && player.Thirtyfive === C1_LIST[2]) return player.Sdir = 3, player.Fourtyfive = player.prev, player.prev = player.Thirtyfive, player.Thirtyfive = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Fourtyfive) && player.Thirtyfive !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Fourtysix) && player.Thirtysix === C1_LIST[2]) return player.Sdir = 3, player.Fourtysix = player.prev, player.prev = player.Thirtysix, player.Thirtysix = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Fourtysix) && player.Thirtysix !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Fourtyseven) && player.Thirtyseven === C1_LIST[2]) return player.Sdir = 3, player.Fourtyseven = player.prev, player.prev = player.Thirtyseven, player.Thirtyseven = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Fourtyseven) && player.Thirtyseven !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Fourtyeight) && player.Thirtyeight === C1_LIST[2]) return player.Sdir = 3, player.Fourtyeight = player.prev, player.prev = player.Thirtyeight, player.Thirtyeight = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Fourtyeight) && player.Thirtyeight !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Fourtynine) && player.Thirtynine === C1_LIST[2]) return player.Sdir = 3, player.Fourtynine = player.prev, player.prev = player.Thirtynine, player.Thirtynine = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Fourtynine) && player.Thirtynine !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Fifty) && player.Fourty === C1_LIST[2]) return player.Sdir = 3, player.Fifty = player.prev, player.prev = player.Fourty, player.Fourty = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), player.timeS = setTimeout(moveUp, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Fifty) && player.Fourty !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()

  if (C4_LIST.includes(player.Nineteen) && player.Nine === C1_LIST[6] && player.Zone === 5) localStorage.setItem('prevTab2', 1), localStorage.setItem('No', 1), localStorage.setItem('log3', 3), player.Nineteen = player.prev, player.prev = C1_LIST[2], player.Nine = C4_LIST[player.skin]

      if (player.MU == false) return 

    if (C4_LIST.includes(player.Twenty) && player.Ten !== C1_LIST[player.tree] && player.Ten !== C1_LIST[player.water]) player.Twenty = player.prev, player.prev = player.Ten, player.Ten = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
    if (C4_LIST.includes(player.Nineteen) && player.Nine !== C1_LIST[player.tree] && player.Nine !== C1_LIST[player.water]) player.Nineteen = player.prev, player.prev = player.Nine, player.Nine = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
    if (C4_LIST.includes(player.Eighteen) && player.Eight !== C1_LIST[player.tree] && player.Eight !== C1_LIST[player.water]) player.Eighteen = player.prev, player.prev = player.Eight, player.Eight = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
    if (C4_LIST.includes(player.Seventeen) && player.Seven === C2_LIST[player.wood] && player.Zone === 4) localStorage.setItem('prevTab1', 2), player.Seven = C2_LIST[0]
    if (C4_LIST.includes(player.Seventeen) && player.Seven !== C1_LIST[player.tree] && player.Seven !== C1_LIST[player.water]) player.Seventeen = player.prev, player.prev = player.Seven, player.Seven = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
    if (C4_LIST.includes(player.Sixteen) && player.Six !== C1_LIST[player.tree] && player.Six !== C1_LIST[player.water]) player.Sixteen = player.prev, player.prev = player.Six, player.Six = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
    if (C4_LIST.includes(player.Fifteen) && player.Five !== C1_LIST[player.tree] && player.Five  !== C1_LIST[player.water]) player.Fifteen = player.prev, player.prev = player.Five, player.Five = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
    if (C4_LIST.includes(player.Fourteen) && player.Four !== C1_LIST[player.tree] && player.Four  !== C1_LIST[player.water]) player.Fourteen = player.prev, player.prev = player.Four, player.Four = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
    if (C4_LIST.includes(player.Thirteen) && player.Three !== C1_LIST[player.tree] && player.Three  !== C1_LIST[player.water]) player.Thirteen = player.prev, player.prev = player.Three, player.Three = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
    if (C4_LIST.includes(player.Twelve) && player.Two !== C1_LIST[player.tree] && player.Two !== C1_LIST[player.water]) player.Twelve = player.prev, player.prev = player.Two, player.Two = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
     if (C4_LIST.includes(player.Eleven) && player.One !== C1_LIST[player.tree] && player.One !== C1_LIST[player.water]) player.Eleven = player.prev, player.prev = player.One, player.One = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      
      if (player.Twenty === C2_LIST[player.wood] && C4_LIST.includes(player.Thirty) && player.Ten !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Ten) || player.Ten === C1_LIST[player.water]) player.Twenty = player.Sprev, player.Sprev = player.Ten, player.Ten = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Ten = C2_LIST[player.island]
     if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Thirty) && player.Twenty !== C1_LIST[player.tree] && player.Twenty !== C1_LIST[player.water]) player.Thirty = player.prev, player.prev = player.Twenty, player.Twenty = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Nineteen === C2_LIST[player.wood] && C4_LIST.includes(player.Twentynine) && player.Nine !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Nine) || player.Nine === C1_LIST[player.water]) player.Nineteen = player.Sprev, player.Sprev = player.Nine, player.Nine = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Nine = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Twentynine) && player.Nineteen !== C1_LIST[player.tree] && player.Nineteen !== C1_LIST[player.water]) player.Twentynine = player.prev, player.prev = player.Nineteen, player.Nineteen = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Eighteen === C2_LIST[player.wood] && C4_LIST.includes(player.Twentyeight) && player.Eight !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Eight) || player.Eight === C1_LIST[player.water]) player.Eighteen = player.Sprev, player.Sprev = player.Eight, player.Eight = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Eight = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Twentyeight) && player.Eighteen !== C1_LIST[player.tree] && player.Eighteen !== C1_LIST[player.water]) player.Twentyeight = player.prev, player.prev = player.Eighteen, player.Eighteen = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Seventeen === C2_LIST[player.wood] && C4_LIST.includes(player.Twentyseven) && player.Seven !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Seven) || player.Seven === C1_LIST[player.water]) player.Seventeen = player.Sprev, player.Sprev = player.Seven, player.Seven = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Seven = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Twentyseven) && player.Seventeen !== C1_LIST[player.tree] && player.Seventeen !== C1_LIST[player.water]) player.Twentyseven = player.prev, player.prev = player.Seventeen, player.Seventeen = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Sixteen === C2_LIST[player.wood] && C4_LIST.includes(player.Twentysix) && player.Six !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Six) || player.Six === C1_LIST[player.water]) player.Sixteen = player.Sprev, player.Sprev = player.Six, player.Six = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Six = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Twentysix) && player.Sixteen !== C1_LIST[player.tree] && player.Sixteen !== C1_LIST[player.water]) player.Twentysix = player.prev, player.prev = player.Sixteen, player.Sixteen = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Fifteen === C2_LIST[player.wood] && C4_LIST.includes(player.Twentyfive) && player.Five !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Five) || player.Five === C1_LIST[player.water]) player.Fifteen = player.Sprev, player.Sprev = player.Five, player.Five = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Five = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Twentyfive) && player.Fifteen !== C1_LIST[player.tree] && player.Fifteen !== C1_LIST[player.water]) player.Twentyfive = player.prev, player.prev = player.Fifteen, player.Fifteen = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Fourteen === C2_LIST[player.wood] && C4_LIST.includes(player.Twentyfour) && player.Four !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Four) || player.Four === C1_LIST[player.water]) player.Fourteen = player.Sprev, player.Sprev = player.Four, player.Four = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Four = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Twentyfour) && player.Fourteen !== C1_LIST[player.tree] && player.Fourteen !== C1_LIST[player.water]) player.Twentyfour = player.prev, player.prev = player.Fourteen, player.Fourteen = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Thirteen === C2_LIST[player.wood] && C4_LIST.includes(player.Twentythree) && player.Three !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Three) || player.Three === C1_LIST[player.water]) player.Thirteen = player.Sprev, player.Sprev = player.Three, player.Three = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Three = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Twentythree) && player.Thirteen !== C1_LIST[player.tree] && player.Thirteen !== C1_LIST[player.water]) player.Twentythree = player.prev, player.prev = player.Thirteen, player.Thirteen = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Twelve === C2_LIST[player.wood] && C4_LIST.includes(player.Twentytwo) && player.Two !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Two) || player.Two === C1_LIST[player.water]) player.Twelve = player.Sprev, player.Sprev = player.Two, player.Two = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Two = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Twentytwo) && player.Twelve !== C1_LIST[player.tree] && player.Twelve !== C1_LIST[player.water]) player.Twentytwo = player.prev, player.prev = player.Twelve, player.Twelve = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Eleven === C2_LIST[player.wood] && C4_LIST.includes(player.Twentyone) && player.One !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.One) || player.One === C1_LIST[player.water]) player.Eleven = player.Sprev, player.Sprev = player.One, player.One = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.One = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Twentyone) && player.Eleven !== C1_LIST[player.tree] && player.Eleven !== C1_LIST[player.water]) player.Twentyone = player.prev, player.prev = player.Eleven, player.Eleven = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()

      if (player.Thirty === C2_LIST[player.wood] && C4_LIST.includes(player.Fourty) && player.Twenty !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Twenty) || player.Twenty === C1_LIST[player.water]) player.Thirty = player.Sprev, player.Sprev = player.Twenty, player.Twenty = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twenty = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Fourty) && player.Thirty !== C1_LIST[player.tree] && player.Thirty !== C1_LIST[player.water]) player.Fourty = player.prev, player.prev = player.Thirty, player.Thirty = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Twentynine === C2_LIST[player.wood] && C4_LIST.includes(player.Thirtynine) && player.Nineteen !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Nineteen) || player.Nineteen === C1_LIST[player.water]) player.Twentynine = player.Sprev, player.Sprev = player.Nineteen, player.Nineteen = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Nineteen = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Thirtynine) && player.Twentynine !== C1_LIST[player.tree] && player.Twentynine !== C1_LIST[player.water]) player.Thirtynine = player.prev, player.prev = player.Twentynine, player.Twentynine = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Twentyeight === C2_LIST[player.wood] && C4_LIST.includes(player.Thirtyeight) && player.Eighteen !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Eighteen) || player.Eighteen === C1_LIST[player.water]) player.Twentyeight = player.Sprev, player.Sprev = player.Eighteen, player.Eighteen = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Eighteen = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Thirtyeight) && player.Twentyeight !== C1_LIST[player.tree] && player.Twentyeight !== C1_LIST[player.water]) player.Thirtyeight = player.prev, player.prev = player.Twentyeight, player.Twentyeight = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Twentyseven === C2_LIST[player.wood] && C4_LIST.includes(player.Thirtyseven) && player.Seventeen !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Seventeen) || player.Seventeen === C1_LIST[player.water]) player.Twentyseven = player.Sprev, player.Sprev = player.Seventeen, player.Seventeen = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Seventeen = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Thirtyseven) && player.Twentyseven !== C1_LIST[player.tree] && player.Twentyseven !== C1_LIST[player.water]) player.Thirtyseven = player.prev, player.prev = player.Twentyseven, player.Twentyseven = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Twentysix === C2_LIST[player.wood] && C4_LIST.includes(player.Thirtysix) && player.Sixteen !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Sixteen) || player.Sixteen === C1_LIST[player.water]) player.Twentysix = player.Sprev, player.Sprev = player.Sixteen, player.Sixteen = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Sixteen = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Thirtysix) && player.Twentysix !== C1_LIST[player.tree] && player.Twentysix !== C1_LIST[player.water]) player.Thirtysix = player.prev, player.prev = player.Twentysix, player.Twentysix = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Twentyfive === C2_LIST[player.wood] && C4_LIST.includes(player.Thirtyfive) && player.Fifteen !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Fifteen) || player.Fifteen === C1_LIST[player.water]) player.Twentyfive = player.Sprev, player.Sprev = player.Fifteen, player.Fifteen = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fifteen = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Thirtyfive) && player.Twentyfive !== C1_LIST[player.tree] && player.Twentyfive !== C1_LIST[player.water]) player.Thirtyfive = player.prev, player.prev = player.Twentyfive, player.Twentyfive = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Twentyfour === C2_LIST[player.wood] && C4_LIST.includes(player.Thirtyfour) && player.Fourteen !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Fourteen) || player.Fourteen === C1_LIST[player.water]) player.Twentyfour = player.Sprev, player.Sprev = player.Fourteen, player.Fourteen = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourteen = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Thirtyfour) && player.Twentyfour !== C1_LIST[player.tree] && player.Twentyfour !== C1_LIST[player.water]) player.Thirtyfour = player.prev, player.prev = player.Twentyfour, player.Twentyfour = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Twentythree === C2_LIST[player.wood] && C4_LIST.includes(player.Thirtythree) && player.Thirteen !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Thirteen) || player.Thirteen === C1_LIST[player.water]) player.Twentythree = player.Sprev, player.Sprev = player.Thirteen, player.Thirteen = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirteen = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Thirtythree) && player.Twentythree !== C1_LIST[player.tree] && player.Twentythree !== C1_LIST[player.water]) player.Thirtythree = player.prev, player.prev = player.Twentythree, player.Twentythree = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Twentytwo === C2_LIST[player.wood] && C4_LIST.includes(player.Thirtytwo) && player.Twelve !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Twelve) || player.Twelve === C1_LIST[player.water]) player.Twentytwo = player.Sprev, player.Sprev = player.Twelve, player.Twelve = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twelve = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Thirtytwo) && player.Twentytwo !== C1_LIST[player.tree] && player.Twentytwo !== C1_LIST[player.water]) player.Thirtytwo = player.prev, player.prev = player.Twentytwo, player.Twentytwo = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Twentyone === C2_LIST[player.wood] && C4_LIST.includes(player.Thirtyone) && player.Eleven !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Eleven) || player.Eleven === C1_LIST[player.water]) player.Twentyone = player.Sprev, player.Sprev = player.Eleven, player.Eleven = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Eleven = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Thirtyone) && player.Twentyone !== C1_LIST[player.tree] && player.Twentyone !== C1_LIST[player.water]) player.Thirtyone = player.prev, player.prev = player.Twentyone, player.Twentyone = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()

      if (player.Fourty === C2_LIST[player.wood] && C4_LIST.includes(player.Fifty) && player.Thirty !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Thirty) || player.Thirty === C1_LIST[player.water]) player.Fourty = player.Sprev, player.Sprev = player.Thirty, player.Thirty = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirty = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Fifty) && player.Fourty !== C1_LIST[player.tree] && player.Fourty !== C1_LIST[player.water]) player.Fifty = player.prev, player.prev = player.Fourty, player.Fourty = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Thirtynine === C2_LIST[player.wood] && C4_LIST.includes(player.Fourtynine) && player.Twentynine !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Twentynine) || player.Twentynine === C1_LIST[player.water]) player.Thirtynine = player.Sprev, player.Sprev = player.Twentynine, player.Twentynine = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentynine = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Fourtynine) && player.Thirtynine !== C1_LIST[player.tree] && player.Thirtynine !== C1_LIST[player.water]) player.Fourtynine = player.prev, player.prev = player.Thirtynine, player.Thirtynine = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Thirtyeight === C2_LIST[player.wood] && C4_LIST.includes(player.Fourtyeight) && player.Twentyeight !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Twentyeight) || player.Twentyeight === C1_LIST[player.water]) player.Thirtyeight = player.Sprev, player.Sprev = player.Twentyeight, player.Twentyeight = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentyeight = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Fourtyeight) && player.Thirtyeight !== C1_LIST[player.tree] && player.Thirtyeight !== C1_LIST[player.water]) player.Fourtyeight = player.prev, player.prev = player.Thirtyeight, player.Thirtyeight = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Thirtyseven === C2_LIST[player.wood] && C4_LIST.includes(player.Fourtyseven) && player.Twentyseven !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Twentyseven) || player.Twentyseven === C1_LIST[player.water]) player.Thirtyseven = player.Sprev, player.Sprev = player.Twentyseven, player.Twentyseven = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentyseven = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Fourtyseven) && player.Thirtyseven !== C1_LIST[player.tree] && player.Thirtyseven !== C1_LIST[player.water]) player.Fourtyseven = player.prev, player.prev = player.Thirtyseven, player.Thirtyseven = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Thirtysix === C2_LIST[player.wood] && C4_LIST.includes(player.Fourtysix) && player.Twentysix !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Twentysix) || player.Twentysix === C1_LIST[player.water]) player.Thirtysix = player.Sprev, player.Sprev = player.Twentysix, player.Twentysix = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentysix = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Fourtysix) && player.Thirtysix !== C1_LIST[player.tree] && player.Thirtysix !== C1_LIST[player.water]) player.Fourtysix = player.prev, player.prev = player.Thirtysix, player.Thirtysix = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Thirtyfive === C2_LIST[player.wood] && C4_LIST.includes(player.Fourtyfive) && player.Twentyfive !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Twentyfive) || player.Twentyfive === C1_LIST[player.water]) player.Thirtyfive = player.Sprev, player.Sprev = player.Twentyfive, player.Twentyfive = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentyfive = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Fourtyfive) && player.Thirtyfive !== C1_LIST[player.tree] && player.Thirtyfive !== C1_LIST[player.water]) player.Fourtyfive = player.prev, player.prev = player.Thirtyfive, player.Thirtyfive = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Thirtyfour === C2_LIST[player.wood] && C4_LIST.includes(player.Fourtyfour) && player.Twentyfour !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Twentyfour) || player.Twentyfour === C1_LIST[player.water]) player.Thirtyfour = player.Sprev, player.Sprev = player.Twentyfour, player.Twentyfour = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentyfour = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Fourtyfour) && player.Thirtyfour !== C1_LIST[player.tree] && player.Thirtyfour !== C1_LIST[player.water]) player.Fourtyfour= player.prev, player.prev = player.Thirtyfour, player.Thirtyfour = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Thirtythree === C2_LIST[player.wood] && C4_LIST.includes(player.Fourtythree) && player.Twentythree !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Twentythree) || player.Twentythree === C1_LIST[player.water]) player.Thirtythree = player.Sprev, player.Sprev = player.Twentythree, player.Twentythree = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentythree = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Fourtythree) && player.Thirtythree !== C1_LIST[player.tree] && player.Thirtythree !== C1_LIST[player.water]) player.Fourtythree = player.prev, player.prev = player.Thirtythree, player.Thirtythree = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Thirtytwo === C2_LIST[player.wood] && C4_LIST.includes(player.Fourtytwo) && player.Twentytwo !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Twentytwo) || player.Twentytwo === C1_LIST[player.water]) player.Thirtytwo = player.Sprev, player.Sprev = player.Twentytwo, player.Twentytwo = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentytwo = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Fourtytwo) && player.Thirtytwo !== C1_LIST[player.tree] && player.Thirtytwo !== C1_LIST[player.water]) player.Fourtytwo = player.prev, player.prev = player.Thirtytwo, player.Thirtytwo = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      if (player.Thirtyone === C2_LIST[player.wood] && C4_LIST.includes(player.Fourtyone) && player.Twentyone !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Twentyone) || player.Twentyone === C1_LIST[player.water]) player.Thirtyone = player.Sprev, player.Sprev = player.Twentyone, player.Twentyone = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentyone = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
    if (C4_LIST.includes(player.Fourtyone) && player.Thirtyone !== C1_LIST[player.tree] && player.Thirtyone !== C1_LIST[0] && player.Thirtyone !== C1_LIST[player.water]) player.Fourtyone = player.prev, player.prev = player.Thirtyone, player.Thirtyone = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()  
    
    if (C4_LIST.includes(player.F2) && player.F1 === C5_LIST[1]) player.F2 = player.prev, player.prev = player.F1, player.F1 = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
    
    if (C4_LIST.includes(player.L2) && player.Fourtyone !== C1_LIST[player.tree] && player.Fourtyone !== C1_LIST[player.water]) player.L2 = player.prev, player.prev = player.Fourtyone, player.Fourtyone = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
    if (C4_LIST.includes(player.L3) && player.Fourtytwo !== C1_LIST[player.tree] && player.Fourtytwo !== C1_LIST[player.water]) player.L3 = player.prev, player.prev = player.Fourtytwo, player.Fourtytwo = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
    if (C4_LIST.includes(player.L4) && player.Fourtythree !== C1_LIST[player.tree] && player.Fourtythree !== C1_LIST[player.water]) player.L4 = player.prev, player.prev = player.Fourtythree, player.Fourtythree = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
    if (C4_LIST.includes(player.L5) && player.Fourtyfour !== C1_LIST[player.tree] && player.Fourtyfour !== C1_LIST[player.water]) player.L5 = player.prev, player.prev = player.Fourtyfour, player.Fourtyfour = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
    if (C4_LIST.includes(player.L6) && player.Fourtyfive !== C1_LIST[player.tree] && player.Fourtyfive !== C1_LIST[player.water]) player.L6 = player.prev, player.prev = player.Fourtyfive, player.Fourtyfive = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
    if (C4_LIST.includes(player.L7) && player.Fourtysix !== C1_LIST[player.tree] && player.Fourtysix !== C1_LIST[player.water]) player.L7 = player.prev, player.prev = player.Fourtysix, player.Fourtysix = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
    if (C4_LIST.includes(player.L8) && player.Fourtyseven !== C1_LIST[player.tree] && player.Fourtyseven !== C1_LIST[player.water]) player.L8 = player.prev, player.prev = player.Fourtyseven, player.Fourtyseven = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
    if (C4_LIST.includes(player.L9) && player.Fourtyeight !== C1_LIST[player.tree] && player.Fourtyeight !== C1_LIST[player.water]) player.L9 = player.prev, player.prev = player.Fourtyeight, player.Fourtyeight = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
    if (C4_LIST.includes(player.L10) && player.Fourtynine !== C1_LIST[player.tree] && player.Fourtynine !== C1_LIST[player.water]) player.L10 = player.prev, player.prev = player.Fourtynine, player.Fourtynine = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
    if (C4_LIST.includes(player.L11) && player.Fifty !== C1_LIST[player.tree] && player.Fifty !== C1_LIST[player.water]) player.L11 = player.prev, player.prev = player.Fifty, player.Fifty = C4_LIST[player.skin], player.North += 1,  player.South -= 1, audio(), save2()
      
}
function woodDown() {


  if(player.Fourty === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fifty !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fifty) || player.Fifty === C1_LIST[2]) return player.Fourty = player.Lprev, player.Lprev = player.Fifty, player.Fifty = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Fifty === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fifty = C2_LIST[player.wood]
  if(player.Thirtynine === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourtynine !== C2_LIST[player.wood]){ 
    if (!C1_LIST.includes(player.Fourtynine) || player.Fourtynine === C1_LIST[2]) return player.Thirtynine = player.Lprev, player.Lprev = player.Fourtynine, player.Fourtynine = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Fourtynine === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourtynine = C2_LIST[player.wood]
  if(player.Thirtyeight === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourtyeight !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourtyeight) || player.Fourtyeight === C1_LIST[2]) return player.Thirtyeight = player.Lprev, player.Lprev = player.Fourtyeight, player.Fourtyeight = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Fourtyeight === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourtyeight = C2_LIST[player.wood]
  if(player.Thirtyseven === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourtyseven !== C2_LIST[player.wood]){ 
    if (!C1_LIST.includes(player.Fourtyseven) || player.Fourtyseven === C1_LIST[2]) return player.Thirtyseven = player.Lprev, player.Lprev = player.Fourtyseven, player.Fourtyseven = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Fourtyseven === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourtyseven = C2_LIST[player.wood]
  if(player.Thirtysix === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourtysix !== C2_LIST[player.wood]){ 
    if (!C1_LIST.includes(player.Fourtysix) || player.Fourtysix === C1_LIST[2]) return player.Thirtysix = player.Lprev, player.Lprev = player.Fourtysix, player.Fourtysix = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Fourtysix === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourtysix = C2_LIST[player.wood]
  if(player.Thirtyfive === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourtyfive !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourtyfive) || player.Fourtyfive === C1_LIST[2]) return player.Thirtyfive = player.Lprev, player.Lprev = player.Fourtyfive, player.Fourtyfive = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Fourtyfive === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourtyfive = C2_LIST[player.wood]
  if(player.Thirtyfour === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourtyfour !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourtyfour) || player.Fourtyfour === C1_LIST[2]) return player.Thirtyfour = player.Lprev, player.Lprev = player.Fourtyfour, player.Fourtyfour = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Fourtyfour === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourtyfour = C2_LIST[player.wood]
  if(player.Thirtythree === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourtythree !== C2_LIST[player.wood])
    if (!C1_LIST.includes(player.Fourtythree) || player.Fourtythree === C1_LIST[2]){ return player.Thirtythree = player.Lprev, player.Lprev = player.Fourtythree, player.Fourtythree = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Fourtythree === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourtythree = C2_LIST[player.wood]
  if(player.Thirtytwo === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourtytwo !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourtytwo) || player.Fourtytwo === C1_LIST[2]) return player.Thirtytwo = player.Lprev, player.Lprev = player.Fourtytwo, player.Fourtytwo = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Fourtytwo === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourtytwo = C2_LIST[player.wood]
  if(player.Thirtyone === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourtyone !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourtyone) || player.Fourtyone === C1_LIST[2]) return player.Thirtyone = player.Lprev, player.Lprev = player.Fourtyone, player.Fourtyone = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Fourtyone === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourtyone = C2_LIST[player.wood]

  if(player.Thirty === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourty !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourty) || player.Fourty === C1_LIST[2]) return player.Thirty = player.Lprev, player.Lprev = player.Fourty, player.Fourty = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Fourty === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourty = C2_LIST[player.wood]
  if(player.Twentynine === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtynine !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtynine) || player.Thirtynine === C1_LIST[2]) return player.Twentynine = player.Lprev, player.Lprev = player.Thirtynine, player.Thirtynine = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Thirtynine === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtynine = C2_LIST[player.wood]
  if(player.Twentyeight === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtyeight !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtyeight) || player.Thirtyeight === C1_LIST[2]) return player.Twentyeight = player.Lprev, player.Lprev = player.Thirtyeight, player.Thirtyeight = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Thirtyeight === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtyeight = C2_LIST[player.wood]
  if(player.Twentyseven === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtyseven !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtyseven) || player.Thirtyseven === C1_LIST[2]) return player.Twentyseven = player.Lprev, player.Lprev = player.Thirtyseven, player.Thirtyseven = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Thirtyseven === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtyseven = C2_LIST[player.wood]
  if(player.Twentysix === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtysix !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtysix) || player.Thirtysix === C1_LIST[2]) return player.Twentysix = player.Lprev, player.Lprev = player.Thirtysix, player.Thirtysix = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Thirtysix === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtysix = C2_LIST[player.wood]
  if(player.Twentyfive === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtyfive !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtyfive) || player.Thirtyfive === C1_LIST[2]) return player.Twentyfive = player.Lprev, player.Lprev = player.Thirtyfive, player.Thirtyfive = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Thirtyfive === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtyfive = C2_LIST[player.wood]
  if(player.Twentyfour === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtyfour !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtyfour) || player.Thirtyfour === C1_LIST[2]) return player.Twentyfour = player.Lprev, player.Lprev = player.Thirtyfour, player.Thirtyfour = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Thirtyfour === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtyfour = C2_LIST[player.wood]
  if(player.Twentythree === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtythree !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtythree) || player.Thirtythree === C1_LIST[2]) return player.Twentythree = player.Lprev, player.Lprev = player.Thirtythree, player.Thirtythree = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Thirtythree === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtythree = C2_LIST[player.wood]
  if(player.Twentytwo === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtytwo !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtytwo) || player.Thirtytwo === C1_LIST[2]) return player.Twentytwo = player.Lprev, player.Lprev = player.Thirtytwo, player.Thirtytwo = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Thirtytwo === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtytwo = C2_LIST[player.wood]
  if(player.Twentyone === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirtyone !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirtyone) || player.Thirtyone === C1_LIST[2]) return player.Twentyone = player.Lprev, player.Lprev = player.Thirtyone, player.Thirtyone = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Thirtyone === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirtyone = C2_LIST[player.wood]

  if(player.Twenty === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirty !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirty) || player.Thirty === C1_LIST[2]) return player.Twenty = player.Lprev, player.Lprev = player.Thirty, player.Thirty = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Thirty === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirty = C2_LIST[player.wood]
  if(player.Nineteen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentynine !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentynine) || player.Twentynine === C1_LIST[2]) return player.Nineteen = player.Lprev, player.Lprev = player.Twentynine, player.Twentynine = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Twentynine === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentynine = C2_LIST[player.wood]
  if(player.Eighteen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentyeight !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentyeight) || player.Twentyeight === C1_LIST[2]) return player.Eighteen = player.Lprev, player.Lprev = player.Twentyeight, player.Twentyeight = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Twentyeight === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentyeight = C2_LIST[player.wood]
  if(player.Seventeen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentyseven !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentyseven) || player.Twentyseven === C1_LIST[2]) return player.Seventeen = player.Lprev, player.Lprev = player.Twentyseven, player.Twentyseven = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Twentyseven === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentyseven = C2_LIST[player.wood]
  if(player.Sixteen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentysix !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentysix) || player.Twentysix === C1_LIST[2]) return player.Sixteen = player.Lprev, player.Lprev = player.Twentysix, player.Twentysix = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Twentysix === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentysix = C2_LIST[player.wood]
  if(player.Fifteen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentyfive !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentyfive) || player.Twentyfive === C1_LIST[2]) return player.Fifteen = player.Lprev, player.Lprev = player.Twentyfive, player.Twentyfive = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Twentyfive === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentyfive = C2_LIST[player.wood]
  if(player.Fourteen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentyfour !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentyfour) || player.Twentyfour === C1_LIST[2]) return player.Fourteen = player.Lprev, player.Lprev = player.Twentyfour, player.Twentyfour = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Twentyfour === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentyfour = C2_LIST[player.wood]
  if(player.Thirteen === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentythree !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentythree) || player.Twentythree === C1_LIST[2]) return player.Thirteen = player.Lprev, player.Lprev = player.Twentythree, player.Twentythree = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Twentythree === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentythree = C2_LIST[player.wood]
  if(player.Twelve === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentytwo !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentytwo) || player.Twentytwo === C1_LIST[2]) return player.Twelve = player.Lprev, player.Lprev = player.Twentytwo, player.Twentytwo = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Twentytwo === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentytwo = C2_LIST[player.wood]
  if(player.Eleven === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twentyone !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twentyone) || player.Twentyone === C1_LIST[2]) return player.Eleven = player.Lprev, player.Lprev = player.Twentyone, player.Twentyone = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Twentyone === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twentyone = C2_LIST[player.wood]

  if(player.Ten === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twenty !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twenty) || player.Twenty === C1_LIST[2]) return player.Ten = player.Lprev, player.Lprev = player.Twenty, player.Twenty = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Twenty === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twenty = C2_LIST[player.wood]
  if(player.Nine === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Nineteen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Nineteen) || player.Nineteen === C1_LIST[2]) return player.Nine = player.Lprev, player.Lprev = player.Nineteen, player.Nineteen = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Nineteen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Nineteen = C2_LIST[player.wood]
  if(player.Eight === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Eighteen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Eighteen) || player.Eighteen === C1_LIST[2]) return player.Eight = player.Lprev, player.Lprev = player.Eighteen, player.Eighteen = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Eighteen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Eighteen = C2_LIST[player.wood]
  if(player.Seven === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Seventeen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Seventeen) || player.Seventeen === C1_LIST[2]) return player.Seven = player.Lprev, player.Lprev = player.Seventeen, player.Seventeen = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Seventeen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Seventeen = C2_LIST[player.wood]
  if(player.Six === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Sixteen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Sixteen) || player.Sixteen === C1_LIST[2]) return player.Six = player.Lprev, player.Lprev = player.Sixteen, player.Sixteen = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Sixteen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Sixteen = C2_LIST[player.wood]
  if(player.Five === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fifteen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fifteen) || player.Fifteen === C1_LIST[2]) return player.Five = player.Lprev, player.Lprev = player.Fifteen, player.Fifteen = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Fifteen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fifteen = C2_LIST[player.wood]
  if(player.Four === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Fourteen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Fourteen) || player.Fourteen === C1_LIST[2]) return player.Four = player.Lprev, player.Lprev = player.Fourteen, player.Fourteen = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Fourteen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Fourteen = C2_LIST[player.wood]
  if(player.Three === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Thirteen !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Thirteen) || player.Thirteen === C1_LIST[2]) return player.Three = player.Lprev, player.Lprev = player.Thirteen, player.Thirteen = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Thirteen === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Thirteen = C2_LIST[player.wood]
  if(player.Two === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Twelve !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Twelve) || player.Twelve === C1_LIST[2]) return player.Two = player.Lprev, player.Lprev = player.Twelve, player.Twelve = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Twelve === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Twelve = C2_LIST[player.wood]
  if(player.One === C1_LIST[6] && player.Lprev === C1_LIST[2] && player.Eleven !== C2_LIST[player.wood]){
    if (!C1_LIST.includes(player.Eleven) || player.Eleven === C1_LIST[2]) return player.One = player.Lprev, player.Lprev = player.Eleven, player.Eleven = C1_LIST[6],  player.timeF = setTimeout(woodDown, 200)}
  else if(player.Eleven === C1_LIST[6] && player.Lprev !== C1_LIST[2]) player.Eleven = C2_LIST[player.wood]

}

function moveDown(){
   
  if (C4_LIST.includes(player.Thirty)){
    if (player.Fourty === C2_LIST[player.wood] && player.Fifty === C1_LIST[2]) player.Fourty = player.Sprev, player.Lprev = player.Fifty, player.Fifty = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Fourty === C1_LIST[6] && player.Fifty !== C2_LIST[player.wood]){ 
      if (player.Fifty === C1_LIST[2] || !C1_LIST.includes(player.Fifty)) player.Fourty = player.Lprev, player.Lprev = player.Fifty, player.Fifty = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }
  if (C4_LIST.includes(player.Twentynine)){ 
  if (player.Thirtynine === C2_LIST[player.wood] && player.Fourtynine === C1_LIST[2]) player.Thirtynine = player.Sprev, player.Lprev = player.Fourtynine, player.Fourtynine = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
  if (player.Thirtynine === C1_LIST[6] && player.Fourtynine !== C2_LIST[player.wood]){
  if (player.Fourtynine === C1_LIST[2] || !C1_LIST.includes(player.Fourtynine)) player.Thirtynine = player.Lprev, player.Lprev = player.Fourtynine, player.Fourtynine = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
}
  if (C4_LIST.includes(player.Twentyeight)){
    if (player.Thirtyeight === C2_LIST[player.wood] && player.Fourtyeight === C1_LIST[2]) player.Thirtyeight = player.Sprev, player.Lprev = player.Fourtyeight, player.Fourtyeight = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Thirtyeight === C1_LIST[6] && player.Fourtyeight !== C2_LIST[player.wood]){ 
      if (player.Fourtyeight === C1_LIST[2] || !C1_LIST.includes(player.Fourtyeight)) player.Thirtyeight = player.Lprev, player.Lprev = player.Fourtyeight, player.Fourtyeight = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }
  if (C4_LIST.includes(player.Twentyseven)){
    if (player.Thirtyseven === C2_LIST[player.wood] && player.Fourtyseven === C1_LIST[2]) player.Thirtyseven = player.Sprev, player.Lprev = player.Fourtyseven, player.Fourtyseven = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Thirtyseven === C1_LIST[6] && player.Fourtyseven !== C2_LIST[player.wood]){ 
      if (player.Fourtyseven === C1_LIST[2] || !C1_LIST.includes(player.Fourtyseven)) player.Thirtyseven = player.Lprev, player.Lprev = player.Fourtyseven, player.Fourtyseven = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }
  if (C4_LIST.includes(player.Twentysix)){
    if (player.Thirtysix === C2_LIST[player.wood] && player.Fourtysix === C1_LIST[2]) player.Thirtysix = player.Sprev, player.Lprev = player.Fourtysix, player.Fourtysix = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Thirtysix === C1_LIST[6] && player.Fourtysix !== C2_LIST[player.wood]){ 
      if (player.Fourtysix === C1_LIST[2] || !C1_LIST.includes(player.Fourtysix)) player.Thirtysix = player.Lprev, player.Lprev = player.Fourtysix, player.Fourtysix = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }
  if (C4_LIST.includes(player.Twentyfive)){
    if (player.Thirtyfive === C2_LIST[player.wood] && player.Fourtyfive === C1_LIST[2]) player.Thirtyfive = player.Sprev, player.Lprev = player.Fourtyfive, player.Fourtyfive = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Thirtyfive === C1_LIST[6] && player.Fourtyfive !== C2_LIST[player.wood]){ 
      if (player.Fourtyfive === C1_LIST[2] || !C1_LIST.includes(player.Fourtyfive)) player.Thirtyfive = player.Lprev, player.Lprev = player.Fourtyfive, player.Fourtyfive = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }
  if (C4_LIST.includes(player.Twentyfour)){
    if (player.Thirtyfour === C2_LIST[player.wood] && player.Fourtyfour === C1_LIST[2]) player.Thirtyfour = player.Sprev, player.Lprev = player.Fourtyfour, player.Fourtyfour = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Thirtyfour === C1_LIST[6] && player.Fourtyfour !== C2_LIST[player.wood]){ 
      if (player.Fourtyfour === C1_LIST[2] || !C1_LIST.includes(player.Fourtyfour)) player.Thirtyfour = player.Lprev, player.Lprev = player.Fourtyfour, player.Fourtyfour = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }
  if (C4_LIST.includes(player.Twentythree)){
    if (player.Thirtythree === C2_LIST[player.wood] && player.Fourtythree === C1_LIST[2]) player.Thirtythree = player.Sprev, player.Lprev = player.Fourtythree, player.Fourtythree = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Thirtythree === C1_LIST[6] && player.Fourtythree !== C2_LIST[player.wood]){ 
      if (player.Fourtythree === C1_LIST[2] || !C1_LIST.includes(player.Fourtythree)) player.Thirtythree = player.Lprev, player.Lprev = player.Fourtythree, player.Fourtythree = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }
  if (C4_LIST.includes(player.Twentytwo)){
    if (player.Thirtytwo === C2_LIST[player.wood] && player.Fourtytwo === C1_LIST[2]) player.Thirtytwo = player.Sprev, player.Lprev = player.Fourtytwo, player.Fourtytwo = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Thirtytwo === C1_LIST[6] && player.Fourtytwo !== C2_LIST[player.wood]){ 
      if (player.Fourtytwo === C1_LIST[2] || !C1_LIST.includes(player.Fourtytwo)) player.Thirtytwo = player.Lprev, player.Lprev = player.Fourtytwo, player.Fourtytwo = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }
  if (C4_LIST.includes(player.Twentyone)){
    if (player.Thirtyone === C2_LIST[player.wood] && player.Fourtyone === C1_LIST[2]) player.Thirtyone = player.Sprev, player.Lprev = player.Fourtyone, player.Fourtyone = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Thirtyone === C1_LIST[6] && player.Fourtyone !== C2_LIST[player.wood]){ 
      if (player.Fourtyone === C1_LIST[2] || !C1_LIST.includes(player.Fourtyone)) player.Thirtyone = player.Lprev, player.Lprev = player.Fourtyone, player.Fourtyone = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }

  if (C4_LIST.includes(player.Twenty)){
    if (player.Thirty === C2_LIST[player.wood] && player.Fourty === C1_LIST[2]) player.Thirty = player.Sprev, player.Lprev = player.Fourty, player.Fourty = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Thirty === C1_LIST[6] && player.Fourty !== C2_LIST[player.wood]){ 
      if (player.Fourty === C1_LIST[2] || !C1_LIST.includes(player.Fourty)) player.Thirty = player.Lprev, player.Lprev = player.Fourty, player.Fourty = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }
  if (C4_LIST.includes(player.Nineteen)){
    if (player.Twentynine === C2_LIST[player.wood] && player.Thirtynine === C1_LIST[2]) player.Twentynine = player.Sprev, player.Lprev = player.Thirtynine, player.Thirtynine = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Twentynine === C1_LIST[6] && player.Thirtynine !== C2_LIST[player.wood]){ 
      if (player.Thirtynine === C1_LIST[2] || !C1_LIST.includes(player.Thirtynine) && player.Zone !== 6) player.Twentynine = player.Lprev, player.Lprev = player.Thirtynine, player.Thirtynine = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
      if (player.Thirtynine === C1_LIST[2] || !C1_LIST.includes(player.Thirtynine) && player.Zone === 6) player.Twentynine = C1_LIST[2], player.Lprev = player.Thirtynine, player.Thirtynine = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }
  if (C4_LIST.includes(player.Eighteen)){
    if (player.Twentyeight === C2_LIST[player.wood] && player.Thirtyeight === C1_LIST[2]) player.Twentyeight = player.Sprev, player.Lprev = player.Thirtyeight, player.Thirtyeight = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Twentyeight === C1_LIST[6] && player.Thirtyeight !== C2_LIST[player.wood]){ 
      if (player.Thirtyeight === C1_LIST[2] || !C1_LIST.includes(player.Thirtyeight)) player.Twentyeight = player.Lprev, player.Lprev = player.Thirtyeight, player.Thirtyeight = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }
  if (C4_LIST.includes(player.Seventeen)){
    if (player.Twentyseven === C2_LIST[player.wood] && player.Thirtyseven === C1_LIST[2]) player.Twentyseven = player.Sprev, player.Lprev = player.Thirtyseven, player.Thirtyseven = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Twentyseven === C1_LIST[6] && player.Thirtyseven !== C2_LIST[player.wood]){ 
      if (player.Thirtyseven === C1_LIST[2] || !C1_LIST.includes(player.Thirtyseven)) player.Twentyseven = player.Lprev, player.Lprev = player.Thirtyseven, player.Thirtyseven = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }
  if (C4_LIST.includes(player.Sixteen)){
    if (player.Twentysix === C2_LIST[player.wood] && player.Thirtysix === C1_LIST[2]) player.Twentysix = player.Sprev, player.Lprev = player.Thirtysix, player.Thirtysix = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Twentysix === C1_LIST[6] && player.Thirtysix !== C2_LIST[player.wood]){ 
      if (player.Thirtysix === C1_LIST[2] || !C1_LIST.includes(player.Thirtysix)) player.Twentysix = player.Lprev, player.Lprev = player.Thirtysix, player.Thirtysix = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }
  if (C4_LIST.includes(player.Fifteen)){
    if (player.Twentyfive === C2_LIST[player.wood] && player.Thirtyfive === C1_LIST[2]) player.Twentyfive = player.Sprev, player.Lprev = player.Thirtyfive, player.Thirtyfive = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Twentyfive === C1_LIST[6] && player.Thirtyfive !== C2_LIST[player.wood]){ 
      if (player.Thirtyfive === C1_LIST[2] || !C1_LIST.includes(player.Thirtyfive)) player.Twentyfive = player.Lprev, player.Lprev = player.Thirtyfive, player.Thirtyfive = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }
  if (C4_LIST.includes(player.Fourteen)){
    if (player.Twentyfour === C2_LIST[player.wood] && player.Thirtyfour === C1_LIST[2]) player.Twentyfour = player.Sprev, player.Lprev = player.Thirtyfour, player.Thirtyfour = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Twentyfour === C1_LIST[6] && player.Thirtyfour !== C2_LIST[player.wood]){ 
      if (player.Thirtyfour === C1_LIST[2] || !C1_LIST.includes(player.Thirtyfour)) player.Twentyfour = player.Lprev, player.Lprev = player.Thirtyfour, player.Thirtyfour = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }
  if (C4_LIST.includes(player.Thirteen)){
    if (player.Twentythree === C2_LIST[player.wood] && player.Thirtythree === C1_LIST[2]) player.Twentythree = player.Sprev, player.Lprev = player.Thirtythree, player.Thirtythree = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Twentythree === C1_LIST[6] && player.Thirtythree !== C2_LIST[player.wood]){ 
      if (player.Thirtythree === C1_LIST[2] || !C1_LIST.includes(player.Thirtythree)) player.Twentythree = player.Lprev, player.Lprev = player.Thirtythree, player.Thirtythree = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }
  if (C4_LIST.includes(player.Twelve)){
    if (player.Twentytwo === C2_LIST[player.wood] && player.Thirtytwo === C1_LIST[2]) player.Twentytwo = player.Sprev, player.Lprev = player.Thirtytwo, player.Thirtytwo = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Twentytwo === C1_LIST[6] && player.Thirtytwo !== C2_LIST[player.wood]){ 
      if (player.Thirtytwo === C1_LIST[2] || !C1_LIST.includes(player.Thirtytwo)) player.Twentytwo = player.Lprev, player.Lprev = player.Thirtytwo, player.Thirtytwo = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }
  if (C4_LIST.includes(player.Eleven)){
    if (player.Twentyone === C2_LIST[player.wood] && player.Thirtyone === C1_LIST[2]) player.Twentyone = player.Sprev, player.Lprev = player.Thirtyone, player.Thirtyone = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Twentyone === C1_LIST[6] && player.Thirtyone !== C2_LIST[player.wood]){ 
      if (player.Thirtyone === C1_LIST[2] || !C1_LIST.includes(player.Thirtyone)) player.Twentyone = player.Lprev, player.Lprev = player.Thirtyone, player.Thirtyone = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }

  if (C4_LIST.includes(player.Ten)){
    if (player.Twenty === C2_LIST[player.wood] && player.Thirty === C1_LIST[2]) player.Twenty = player.Sprev, player.Lprev = player.Thirty, player.Thirty = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Twenty === C1_LIST[6] && player.Thirty !== C2_LIST[player.wood]){ 
      if (player.Thirty === C1_LIST[2] || !C1_LIST.includes(player.Thirty)) player.Twenty = player.Lprev, player.Lprev = player.Thirty, player.Thirty = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }
  if (C4_LIST.includes(player.Nine)){
    if (player.Nineteen === C2_LIST[player.wood] && player.Twentynine === C1_LIST[2]) player.Nineteen = player.Sprev, player.Lprev = player.Twentynine, player.Twentynine = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Nineteen === C1_LIST[6] && player.Twentynine !== C2_LIST[player.wood]){ 
      if (player.Twentynine === C1_LIST[2] || !C1_LIST.includes(player.Twentynine)) player.Nineteen = player.Lprev, player.Lprev = player.Twentynine, player.Twentynine = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }
  if (C4_LIST.includes(player.Eight)){
    if (player.Eighteen === C2_LIST[player.wood] && player.Twentyeight === C1_LIST[2]) player.Eighteen = player.Sprev, player.Lprev = player.Twentyeight, player.Twentyeight = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Eighteen === C1_LIST[6] && player.Twentyeight !== C2_LIST[player.wood]){ 
      if (player.Twentyeight === C1_LIST[2] || !C1_LIST.includes(player.Twentyeight)) player.Eighteen = player.Lprev, player.Lprev = player.Twentyeight, player.Twentyeight = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }
  if (C4_LIST.includes(player.Seven)){
    if (player.Seventeen === C2_LIST[player.wood] && player.Twentyseven === C1_LIST[2]) player.Seventeen = player.Sprev, player.Lprev = player.Twentyseven, player.Twentyseven = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Seventeen === C1_LIST[6] && player.Twentyseven !== C2_LIST[player.wood]){ 
      if (player.Twentyseven === C1_LIST[2] || !C1_LIST.includes(player.Twentyseven)) player.Seventeen = player.Lprev, player.Lprev = player.Twentyseven, player.Twentyseven = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }
  if (C4_LIST.includes(player.Six)){
    if (player.Sixteen === C2_LIST[player.wood] && player.Twentysix === C1_LIST[2]) player.Sixteen = player.Sprev, player.Lprev = player.Twentysix, player.Twentysix = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Sixteen === C1_LIST[6] && player.Twentysix !== C2_LIST[player.wood]){ 
      if (player.Twentysix === C1_LIST[2] || !C1_LIST.includes(player.Twentysix)) player.Sixteen = player.Lprev, player.Lprev = player.Twentysix, player.Twentysix = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }
  if (C4_LIST.includes(player.Five)){
    if (player.Fifteen === C2_LIST[player.wood] && player.Twentyfive === C1_LIST[2]) player.Fifteen = player.Sprev, player.Lprev = player.Twentyfive, player.Twentyfive = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Fifteen === C1_LIST[6] && player.Twentyfive !== C2_LIST[player.wood]){ 
      if (player.Twentyfive === C1_LIST[2] || !C1_LIST.includes(player.Twentyfive)) player.Fifteen = player.Lprev, player.Lprev = player.Twentyfive, player.Twentyfive = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }
  if (C4_LIST.includes(player.Four)){
    if (player.Fourteen === C2_LIST[player.wood] && player.Twentyfour === C1_LIST[2]) player.Fourteen = player.Sprev, player.Lprev = player.Twentyfour, player.Twentyfour = C1_LIST[6],player.timeF = setTimeout(woodDown, 200)
    if (player.Fourteen === C1_LIST[6] && player.Twentyfour !== C2_LIST[player.wood]){ 
      if (player.Twentyfour === C1_LIST[2] || !C1_LIST.includes(player.Twentyfour)) player.Fourteen = player.Lprev, player.Lprev = player.Twentyfour, player.Twentyfour = C1_LIST[6],player.timeF = setTimeout(woodDown, 200)}
  }
  if (C4_LIST.includes(player.Three)){
    if (player.Thirteen === C2_LIST[player.wood] && player.Twentythree === C1_LIST[2]) player.Thirteen = player.Sprev, player.Lprev = player.Twentythree, player.Twentythree = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Thirteen === C1_LIST[6] && player.Twentythree !== C2_LIST[player.wood]){ 
      if (player.Twentythree === C1_LIST[2] || !C1_LIST.includes(player.Twentythree)) player.Thirteen = player.Lprev, player.Lprev = player.Twentythree, player.Twentythree = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }
  if (C4_LIST.includes(player.Two)){
    if (player.Twelve === C2_LIST[player.wood] && player.Twentytwo === C1_LIST[2]) player.Twelve = player.Sprev, player.Lprev = player.Twentytwo, player.Twentytwo = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Twelve === C1_LIST[6] && player.Twentytwo !== C2_LIST[player.wood]){ 
      if (player.Twentytwo === C1_LIST[2] || !C1_LIST.includes(player.Twentytwo)) player.Twelve = player.Lprev, player.Lprev = player.Twentytwo, player.Twentytwo = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  } 
  if (C4_LIST.includes(player.One)){
    if (player.Eleven === C2_LIST[player.wood] && player.Twentyone === C1_LIST[2]) player.Eleven = player.Sprev, player.Lprev = player.Twentyone, player.Twentyone = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)
    if (player.Eleven === C1_LIST[6] && player.Twentyone !== C2_LIST[player.wood]){ 
      if (player.Twentyone === C1_LIST[2] || !C1_LIST.includes(player.Twentyone)) player.Eleven = player.Lprev, player.Lprev = player.Twentyone, player.Twentyone = C1_LIST[6], player.timeF = setTimeout(woodDown, 200)}
  }

  if (C4_LIST.includes(player.Fifty) && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Fourty) && player.Fifty === C1_LIST[2]) return player.Sdir = 4, player.Fourty = player.prev, player.prev = player.Fifty, player.Fifty = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Fourty) && player.Fifty !== C1_LIST[2] && player.Sludge == true) player.Sludge = false, save2()
  if (C4_LIST.includes(player.Fourtynine) && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtynine) && player.Fourtynine === C1_LIST[2]) return player.Sdir = 4, player.Thirtynine = player.prev, player.prev = player.Fourtynine, player.Fourtynine = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtynine) && player.Fourtynine !== C1_LIST[2] && player.Sludge == true) player.Sludge = false, save2()
  if (C4_LIST.includes(player.Fourtyeight) && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtyeight) && player.Fourtyeight === C1_LIST[2]) return player.Sdir = 4, player.Thirtyeight = player.prev, player.prev = player.Fourtyeight, player.Fourtyeight = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtyeight) && player.Fourtyeight !== C1_LIST[2] && player.Sludge == true) player.Sludge = false, save2()
  if (C4_LIST.includes(player.Fourtyseven) && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtyseven) && player.Fourtyseven === C1_LIST[2]) return player.Sdir = 4, player.Thirtyseven = player.prev, player.prev = player.Fourtyseven, player.Fourtyseven = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtyseven) && player.Fourtyseven !== C1_LIST[2] && player.Sludge == true) player.Sludge = false, save2()
  if (C4_LIST.includes(player.Fourtysix) && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtysix) && player.Fourtysix === C1_LIST[2]) return player.Sdir = 4, player.Thirtysix = player.prev, player.prev = player.Fourtysix, player.Fourtysix = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtysix) && player.Fourtysix !== C1_LIST[2] && player.Sludge == true) player.Sludge = false, save2()
  if (C4_LIST.includes(player.Fourtyfive) && player.Sludge == true) player.Sdir = 0, player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtyfive) && player.Fourtyfive === C1_LIST[2]) return player.Sdir = 4, player.Thirtyfive = player.prev, player.prev = player.Fourtyfive, player.Fourtyfive = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtyfive) && player.Fourtyfive !== C1_LIST[2] && player.Sludge == true) player.Sludge = false, save2()
  if (C4_LIST.includes(player.Fourtyfour) && player.Sludge == true) player.Sdir = 0, player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtyfour) && player.Fourtyfour === C1_LIST[2]) return player.Sdir = 4, player.Thirtyfour = player.prev, player.prev = player.Fourtyfour, player.Fourtyfour = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtyfour) && player.Fourtyfour !== C1_LIST[2] && player.Sludge == true) player.Sludge = false, save2()
  if (C4_LIST.includes(player.Fourtythree) && player.Sludge == true) player.Sdir = 0, player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtythree) && player.Fourtythree === C1_LIST[2]) return player.Sdir = 4, player.Thirtythree = player.prev, player.prev = player.Fourtythree, player.Fourtythree = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtythree) && player.Fourtythree !== C1_LIST[2] && player.Sludge == true) player.Sludge = false, save2()
  if (C4_LIST.includes(player.Fourtytwo) && player.Sludge == true) player.Sdir = 0, player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtytwo) && player.Fourtytwo === C1_LIST[2]) return player.Sdir = 4, player.Thirtytwo = player.prev, player.prev = player.Fourtytwo, player.Fourtytwo = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtytwo) && player.Fourtytwo !== C1_LIST[2] && player.Sludge == true) player.Sludge = false, save2()
  if (C4_LIST.includes(player.Fourtyone) && player.Sludge == true) player.Sdir = 0, player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirtyone) && player.Fourtyone === C1_LIST[2]) return player.Sdir = 4, player.Thirtyone = player.prev, player.prev = player.Fourtyone, player.Fourtyone = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirtyone) && player.Fourtyone !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()

  if(C4_LIST.includes(player.Thirty) && player.Fourty === C1_LIST[2]) return player.Sdir = 4, player.Thirty = player.prev, player.prev = player.Fourty, player.Fourty = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirty) && player.Fourty !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentynine) && player.Thirtynine === C1_LIST[2]) return player.Sdir = 4, player.Twentynine = player.prev, player.prev = player.Thirtynine, player.Thirtynine = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentynine) && player.Thirtynine !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentyeight) && player.Thirtyeight === C1_LIST[2]) return player.Sdir = 4, player.Twentyeight = player.prev, player.prev = player.Thirtyeight, player.Thirtyeight = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentyeight) && player.Thirtyeight !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentyseven) && player.Thirtyseven === C1_LIST[2]) return player.Sdir = 4, player.Twentyseven = player.prev, player.prev = player.Thirtyseven, player.Thirtyseven = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentyseven) && player.Thirtyseven !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentysix) && player.Thirtysix === C1_LIST[2]) return player.Sdir = 4, player.Twentysix = player.prev, player.prev = player.Thirtysix, player.Thirtysix = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentysix) && player.Thirtysix !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentyfive) && player.Thirtyfive === C1_LIST[2]) return player.Sdir = 4, player.Twentyfive = player.prev, player.prev = player.Thirtyfive, player.Thirtyfive = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentyfive) && player.Thirtyfive !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentyfour) && player.Thirtyfour === C1_LIST[2]) return player.Sdir = 4, player.Twentyfour = player.prev, player.prev = player.Thirtyfour, player.Thirtyfour = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentyfour) && player.Thirtyfour !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentythree) && player.Thirtythree === C1_LIST[2]) return player.Sdir = 4, player.Twentythree = player.prev, player.prev = player.Thirtythree, player.Thirtythree = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentythree) && player.Thirtythree !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentytwo) && player.Thirtytwo === C1_LIST[2]) return player.Sdir = 4, player.Twentytwo = player.prev, player.prev = player.Thirtytwo, player.Thirtytwo = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentytwo) && player.Thirtytwo !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twentyone) && player.Thirtyone === C1_LIST[2]) return player.Sdir = 4, player.Twentyone = player.prev, player.prev = player.Thirtyone, player.Thirtyone = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twentyone) && player.Thirtyone !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()

  if(C4_LIST.includes(player.Twenty) && player.Thirty === C1_LIST[2]) return player.Sdir = 4, player.Twenty = player.prev, player.prev = player.Thirty, player.Thirty = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twenty) && player.Thirty !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Nineteen) && player.Twentynine === C1_LIST[2]) return player.Sdir = 4, player.Nineteen = player.prev, player.prev = player.Twentynine, player.Twentynine = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Nineteen) && player.Twentynine !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Eighteen) && player.Twentyeight === C1_LIST[2]) return player.Sdir = 4, player.Eighteen = player.prev, player.prev = player.Twentyeight, player.Twentyeight = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Eighteen) && player.Twentyeight !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Seventeen) && player.Twentyseven === C1_LIST[2]) return player.Sdir = 4, player.Seventeen = player.prev, player.prev = player.Twentyseven, player.Twentyseven = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Seventeen) && player.Twentyseven !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Sixteen) && player.Twentysix === C1_LIST[2]) return player.Sdir = 4, player.Sixteen = player.prev, player.prev = player.Twentysix, player.Twentysix = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Sixteen) && player.Twentysix !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Fifteen) && player.Twentyfive === C1_LIST[2]) return player.Sdir = 4, player.Fifteen = player.prev, player.prev = player.Twentyfive, player.Twentyfive = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirty) && player.Twentyfive !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Fourteen) && player.Twentyfour === C1_LIST[2]) return player.Sdir = 4, player.Fourteen = player.prev, player.prev = player.Twentyfour, player.Twentyfour = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Fourteen) && player.Twentyfour !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Thirteen) && player.Twentythree === C1_LIST[2]) return player.Sdir = 4, player.Thirteen = player.prev, player.prev = player.Twentythree, player.Twentythree = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Thirteen) && player.Twentythree !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Twelve) && player.Twentytwo === C1_LIST[2]) return player.Sdir = 4, player.Twelve = player.prev, player.prev = player.Twentytwo, player.Twentytwo = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twelve) && player.Twentytwo !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Eleven) && player.Twentyone === C1_LIST[2]) return player.Sdir = 4, player.Eleven = player.prev, player.prev = player.Twentyone, player.Twentyone = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Eleven) && player.Twentyone !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()

  if(C4_LIST.includes(player.Ten) && player.Twenty === C1_LIST[2]) return player.Sdir = 4, player.Ten = player.prev, player.prev = player.Twenty, player.Twenty = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Ten) && player.Twenty !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Nine) && player.Nineteen === C1_LIST[2]) return player.Sdir = 4, player.Nine = player.prev, player.prev = player.Nineteen, player.Nineteen = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Nine) && player.Nineteen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Eight) && player.Eighteen === C1_LIST[2]) return player.Sdir = 4, player.Eight = player.prev, player.prev = player.Eighteen, player.Eighteen = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Eight) && player.Eighteen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Seven) && player.Seventeen === C1_LIST[2]) return player.Sdir = 4, player.Seven = player.prev, player.prev = player.Seventeen, player.Seventeen = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Seven) && player.Seventeen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Six) && player.Sixteen === C1_LIST[2]) return player.Sdir = 4, player.Six = player.prev, player.prev = player.Sixteen, player.Sixteen = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Six) && player.Sixteen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Five) && player.Fifteen === C1_LIST[2]) return player.Sdir = 4, player.Five = player.prev, player.prev = player.Fifteen, player.Fifteen = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Five) && player.Fifteen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Four) && player.Fourteen === C1_LIST[2]) return player.Sdir = 4, player.Four = player.prev, player.prev = player.Fourteen, player.Fourteen = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Four) && player.Fourteen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Three) && player.Thirteen === C1_LIST[2]) return player.Sdir = 4, player.Three = player.prev, player.prev = player.Thirteen, player.Thirteen = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Three) && player.Thirteen !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.Two) && player.Twelve === C1_LIST[2]) return player.Sdir = 4, player.Two = player.prev, player.prev = player.Twelve, player.Twelve = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.Twi) && player.Twelve !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()
  if(C4_LIST.includes(player.One) && player.Eleven === C1_LIST[2]) return player.Sdir = 4, player.One = player.prev, player.prev = player.Eleven, player.Eleven = C4_LIST[player.skin], player.North -= 1,  player.South += 1, audio(), player.timeS = setTimeout(moveDown, 200), player.Sludge = true
  else if (C4_LIST.includes(player.One) && player.Eleven !== C1_LIST[2] && player.Sludge == true) player.Sdir = 0,  player.Sludge = false, save2()

    if (player.MD == false) return

    if (C4_LIST.includes(player.F1) && player.F2 === C5_LIST[1]) player.F1 = player.prev, player.prev = player.F2, player.F2 = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()

    if (player.prev === C1_LIST[player.stone] && C4_LIST.includes(player.Fifty) && player.L11 === C3_LIST[1]) player.Fifty = player.prev, player.prev = player.L11, player.L11 = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.prev === C1_LIST[player.stone] && C4_LIST.includes(player.Fourtynine) && player.L10 === C3_LIST[1]) player.Fourtynine = player.prev, player.prev = player.L10, player.L10 = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.prev === C1_LIST[player.stone] && C4_LIST.includes(player.Fourtyeight) && player.L9 === C3_LIST[1]) player.Fourtyeight = player.prev, player.prev = player.L9, player.L9 = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (C4_LIST.includes(player.Thirtyseven) && player.Fourtyseven === C2_LIST[player.wood] && player.Zone === 3) localStorage.setItem('prevTab1', 1), player.Fourtyseven = C2_LIST[player.island]
    if (player.prev === C1_LIST[player.stone] && C4_LIST.includes(player.Fourtyseven) && player.L8 === C3_LIST[1]) player.Fourtyseven = player.prev, player.prev = player.L8, player.L8 = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.prev === C1_LIST[player.stone] && C4_LIST.includes(player.Fourtysix) && player.L7 === C3_LIST[1]) player.Fourtysix = player.prev, player.prev = player.L7, player.L7 = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.prev === C1_LIST[player.stone] && C4_LIST.includes(player.Fourtyfive) && player.L6 === C3_LIST[1]) player.Fourtyfive = player.prev, player.prev = player.L6, player.L6 = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.prev === C1_LIST[player.stone] && C4_LIST.includes(player.Fourtyfour) && player.L5 === C3_LIST[1]) player.Fourtyfour = player.prev, player.prev = player.L5, player.L5 = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.prev === C1_LIST[player.stone] && C4_LIST.includes(player.Fourtythree) && player.L4 === C3_LIST[1]) player.Fourtythree = player.prev, player.prev = player.L4, player.L4 = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.prev === C1_LIST[player.stone] && C4_LIST.includes(player.Fourtytwo) && player.L3 === C3_LIST[1]) player.Fourtytwo = player.prev, player.prev = player.L3, player.L3 = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.prev === C1_LIST[player.stone] && C4_LIST.includes(player.Fourtyone) && player.L2 === C3_LIST[1]) player.Fourtyone = player.prev, player.prev = player.L2, player.L2 = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()

  if (C4_LIST.includes(player.Fourty) && player.Fifty !== C1_LIST[player.tree] && player.Fifty !== C1_LIST[player.water]) player.Fourty = player.prev, player.prev = player.Fifty, player.Fifty = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
  if (C4_LIST.includes(player.Thirtynine) && player.Fourtynine !== C1_LIST[player.tree] && player.Fourtynine !== C1_LIST[player.water]) player.Thirtynine = player.prev, player.prev = player.Fourtynine, player.Fourtynine = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
  if (C4_LIST.includes(player.Thirtyeight) && player.Fourtyeight !== C1_LIST[player.tree] && player.Fourtyeight !== C1_LIST[player.water]) player.Thirtyeight = player.prev, player.prev = player.Fourtyeight, player.Fourtyeight = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
  if (C4_LIST.includes(player.Thirtyseven) && player.Fourtyseven !== C1_LIST[player.tree] && player.Fourtyseven !== C1_LIST[player.water]) player.Thirtyseven = player.prev, player.prev = player.Fourtyseven, player.Fourtyseven = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
  if (C4_LIST.includes(player.Thirtysix) && player.Fourtysix !== C1_LIST[player.tree] && player.Fourtysix !== C1_LIST[player.water]) player.Thirtysix = player.prev, player.prev = player.Fourtysix, player.Fourtysix = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
  if (C4_LIST.includes(player.Thirtyfive) && player.Fourtyfive !== C1_LIST[player.tree] && player.Fourtyfive !== C1_LIST[player.water]) player.Thirtyfive = player.prev, player.prev = player.Fourtyfive, player.Fourtyfive = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
  if (C4_LIST.includes(player.Thirtyfour) && player.Fourtyfour !== C1_LIST[player.tree] && player.Fourtyfour !== C1_LIST[player.water]) player.Thirtyfour = player.prev, player.prev = player.Fourtyfour, player.Fourtyfour = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
  if (C4_LIST.includes(player.Thirtythree) && player.Fourtythree !== C1_LIST[player.tree] && player.Fourtythree !== C1_LIST[player.water]) player.Thirtythree = player.prev, player.prev = player.Fourtythree, player.Fourtythree = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
  if (C4_LIST.includes(player.Thirtytwo) && player.Fourtytwo !== C1_LIST[player.tree] && player.Fourtytwo !== C1_LIST[player.water]) player.Thirtytwo = player.prev, player.prev = player.Fourtytwo, player.Fourtytwo = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
  if (C4_LIST.includes(player.Thirtyone) && player.Fourtyone !== C1_LIST[player.tree] && player.Fourtyone !== C1_LIST[player.water]) player.Thirtyone = player.prev, player.prev = player.Fourtyone, player.Fourtyone = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()


    if (player.Fourty === C2_LIST[player.wood] && C4_LIST.includes(player.Thirty) && player.Fifty !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Fifty) || player.Fifty === C1_LIST[player.water]) player.Fourty = player.Sprev, player.Sprev = player.Fifty, player.Fifty = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fifty = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Thirty) && player.Fourty !== C1_LIST[player.tree] && player.Fourty !== C1_LIST[player.water]) player.Thirty = player.prev, player.prev = player.Fourty, player.Fourty = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.Thirtynine === C2_LIST[player.wood] && C4_LIST.includes(player.Twentynine) && player.Fourtynine !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Fourtynine) || player.Fourtynine === C1_LIST[player.water]) player.Thirtynine = player.Sprev, player.Sprev = player.Fourtynine, player.Fourtynine = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourtynine = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Twentynine) && player.Thirtynine !== C1_LIST[player.tree] && player.Thirtynine !== C1_LIST[player.water]) player.Twentynine = player.prev, player.prev = player.Thirtynine, player.Thirtynine = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.Thirtyeight === C2_LIST[player.wood] && C4_LIST.includes(player.Twentyeight) && player.Fourtyeight !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Fourtyeight) || player.Fourtyeight === C1_LIST[player.water]) player.Thirtyeight = player.Sprev, player.Sprev = player.Fourtyeight, player.Fourtyeight = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourtyeight = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Twentyeight) && player.Thirtyeight !== C1_LIST[player.tree] && player.Thirtyeight !== C1_LIST[player.water]) player.Twentyeight = player.prev, player.prev = player.Thirtyeight, player.Thirtyeight = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.Thirtyseven === C2_LIST[player.wood] && C4_LIST.includes(player.Twentyseven) && player.Fourtyseven !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Fourtyseven) && player.Zone !== 3 || player.Fourtyseven === C1_LIST[player.water] && player.Zone !== 3) player.Thirtyseven = player.Sprev, player.Sprev = player.Fourtyseven, player.Fourtyseven = C2_LIST[player.wood]
        if (player.Fourtyseven !== C1_LIST[player.water] && player.Zone === 3) player.Thirtyseven = player.Sprev, player.Sprev = C2_LIST[0], player.Fourtyseven = C2_LIST[player.wood]
        if (player.Fourtyseven === C1_LIST[player.water] && player.Zone === 3) player.Thirtyseven = player.Sprev, player.Sprev = player.Fourtyseven, player.Fourtyseven = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourtyseven = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Twentyseven) && player.Thirtyseven !== C1_LIST[player.tree] && player.Thirtyseven !== C1_LIST[player.water]) player.Twentyseven = player.prev, player.prev = player.Thirtyseven, player.Thirtyseven = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.Thirtysix === C2_LIST[player.wood] && C2_LIST.includes(player.Fourtysix) && C4_LIST.includes(player.Twentysix) && player.Fourtysix !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Fourtysix) || player.Fourtysix === C1_LIST[player.water]) player.Thirtysix = player.Sprev, player.Sprev = player.Fourtysix, player.Fourtysix = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourtysix = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Twentysix)  && player.Thirtysix !== C1_LIST[player.tree] && player.Thirtysix !== C1_LIST[player.water]) player.Twentysix = player.prev, player.prev = player.Thirtysix, player.Thirtysix = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.Thirtyfive === C2_LIST[player.wood] && C4_LIST.includes(player.Twentyfive) && player.Fourtyfive !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Fourtyfive) || player.Fourtyfive === C1_LIST[player.water]) player.Thirtyfive = player.Sprev, player.Sprev = player.Fourtyfive, player.Fourtyfive = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourtyfive = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Twentyfive) && player.Thirtyfive !== C1_LIST[player.tree] && player.Thirtyfive !== C1_LIST[player.water]) player.Twentyfive = player.prev, player.prev = player.Thirtyfive, player.Thirtyfive = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.Thirtyfour === C2_LIST[player.wood] && C4_LIST.includes(player.Twentyfour) && player.Fourtyfour !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Fourtyfour) || player.Fourtyfour === C1_LIST[player.water]) player.Thirtyfour = player.Sprev, player.Sprev = player.Fourtyfour, player.Fourtyfour = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourtyfour = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Twentyfour) && player.Thirtyfour !== C1_LIST[player.tree] && player.Thirtyfour !== C1_LIST[player.water]) player.Twentyfour = player.prev, player.prev = player.Thirtyfour, player.Thirtyfour = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.Thirtythree === C2_LIST[player.wood] && C4_LIST.includes(player.Twentythree) && player.Fourtythree !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Fourtythree) || player.Fourtythree === C1_LIST[player.water]) player.Thirtythree = player.Sprev, player.Sprev = player.Fourtythree, player.Fourtythree = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourtythree = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Twentythree) && player.Thirtythree !== C1_LIST[player.tree] && player.Thirtythree !== C1_LIST[player.water]) player.Twentythree = player.prev, player.prev = player.Thirtythree, player.Thirtythree = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.Thirtytwo === C2_LIST[player.wood] && C4_LIST.includes(player.Twentytwo) && player.Fourtytwo !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Fourtytwo) || player.Fourtytwo === C1_LIST[player.water]) player.Thirtytwo = player.Sprev, player.Sprev = player.Fourtytwo, player.Fourtytwo = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourtytwo = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Twentytwo) && player.Thirtytwo !== C1_LIST[player.tree] && player.Thirtytwo !== C1_LIST[player.water]) player.Twentytwo = player.prev, player.prev = player.Thirtytwo, player.Thirtytwo = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.Thirtyone === C2_LIST[player.wood] && C4_LIST.includes(player.Twentyone) && player.Fourtyone !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Fourtyone) || player.Fourtyone === C1_LIST[player.water]) player.Thirtyone = player.Sprev, player.Sprev = player.Fourtyone, player.Fourtyone = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourtyone = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Twentyone)  && player.Thirtyone !== C1_LIST[player.tree] && player.Thirtyone !== C1_LIST[player.water]) player.Twentyone = player.prev, player.prev = player.Thirtyone, player.Thirtyone = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    
    if (player.Thirty === C2_LIST[player.wood] && C4_LIST.includes(player.Twenty) && player.Fourty !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Fourty) || player.Fourty === C1_LIST[player.water]) player.Thirty = player.Sprev, player.Sprev = player.Fourty, player.Fourty = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Fourty = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Twenty) && player.Thirty !== C1_LIST[player.tree] && player.Thirty !== C1_LIST[player.water]) player.Twenty = player.prev, player.prev = player.Thirty, player.Thirty = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.Twentynine === C2_LIST[player.wood] && C4_LIST.includes(player.Nineteen) && player.Thirtynine !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Thirtynine) || player.Thirtynine === C1_LIST[player.water]) player.Twentynine = player.Sprev, player.Sprev = player.Thirtynine, player.Thirtynine = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirtynine = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Nineteen) && player.Twentynine !== C1_LIST[player.tree] && player.Twentynine !== C1_LIST[player.water]) player.Nineteen = player.prev, player.prev = player.Twentynine, player.Twentynine = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.Twentyeight === C2_LIST[player.wood] && C4_LIST.includes(player.Eighteen) && player.Thirtyeight !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Thirtyeight) || player.Thirtyeight === C1_LIST[player.water]) player.Twentyeight = player.Sprev, player.Sprev = player.Thirtyeight, player.Thirtyeight = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirtyeight = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Eighteen) && player.Twentyeight !== C1_LIST[player.tree] && player.Twentyeight !== C1_LIST[player.water]) player.Eighteen = player.prev, player.prev = player.Twentyeight, player.Twentyeight = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.Twentyseven === C2_LIST[player.wood] && C4_LIST.includes(player.Seventeen) && player.Thirtyseven !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Thirtyseven) || player.Thirtyseven === C1_LIST[player.water]) player.Twentyseven = player.Sprev, player.Sprev = player.Thirtyseven, player.Thirtyseven = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirtyseven = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Seventeen) && player.Twentyseven !== C1_LIST[player.tree] && player.Twentyseven !== C1_LIST[player.water]) player.Seventeen = player.prev, player.prev = player.Twentyseven, player.Twentyseven = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.Twentysix === C2_LIST[player.wood] && C4_LIST.includes(player.Sixteen) && player.Thirtysix !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Thirtysix) || player.Thirtysix === C1_LIST[player.water]) player.Twentysix = player.Sprev, player.Sprev = player.Thirtysix, player.Thirtysix = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirtysix = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Sixteen) && player.Twentysix !== C1_LIST[player.tree] && player.Twentysix !== C1_LIST[player.water]) player.Sixteen = player.prev, player.prev = player.Twentysix, player.Twentysix = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.Twentyfive === C2_LIST[player.wood] && C4_LIST.includes(player.Fifteen) && player.Thirtyfive !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Thirtyfive) || player.Thirtyfive === C1_LIST[player.water]) player.Twentyfive = player.Sprev, player.Sprev = player.Thirtyfive, player.Thirtyfive = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirtyfive = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Fifteen) && player.Twentyfive !== C1_LIST[player.tree] && player.Twentyfive !== C1_LIST[player.water]) player.Fifteen = player.prev, player.prev = player.Twentyfive, player.Twentyfive = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.Twentyfour === C2_LIST[player.wood] && C4_LIST.includes(player.Fourteen) && player.Thirtyfour !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Thirtyfour) || player.Thirtyfour === C1_LIST[player.water]) player.Twentyfour = player.Sprev, player.Sprev = player.Thirtyfour, player.Thirtyfour = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirtyfour = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Fourteen) && player.Twentyfour !== C1_LIST[player.tree] && player.Twentyfour !== C1_LIST[player.water]) player.Fourteen = player.prev, player.prev = player.Twentyfour, player.Twentyfour = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.Twentythree === C2_LIST[player.wood] && C4_LIST.includes(player.Thirteen) && player.Thirtythree !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Thirtythree) || player.Thirtythree === C1_LIST[player.water]) player.Twentythree = player.Sprev, player.Sprev = player.Thirtythree, player.Thirtythree = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirtythree = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Thirteen) && player.Twentythree !== C1_LIST[player.tree] && player.Twentythree !== C1_LIST[player.water]) player.Thirteen = player.prev, player.prev = player.Twentythree, player.Twentythree = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.Twentytwo === C2_LIST[player.wood] && C4_LIST.includes(player.Twelve) && player.Thirtytwo !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Thirtytwo) || player.Thirtytwo === C1_LIST[player.water]) player.Twentytwo = player.Sprev, player.Sprev = player.Thirtytwo, player.Thirtytwo = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirtytwo = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Twelve) && player.Twentytwo !== C1_LIST[player.tree] && player.Twentytwo !== C1_LIST[player.water]) player.Twelve = player.prev, player.prev = player.Twentytwo, player.Twentytwo = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.Twentyone === C2_LIST[player.wood] && player.Eleven === C4_LIST[player.skinInverse] && player.Thirtyone !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Thirtyone) || player.Thirtyone === C1_LIST[player.water]) player.Twentyone = player.Sprev, player.Sprev = player.Thirtyone, player.Thirtyone = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirtyone = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
   if (C4_LIST.includes(player.Eleven) && player.Twentyone !== C1_LIST[player.tree] && player.Twentyone !== C1_LIST[player.water]) player.Eleven = player.prev, player.prev = player.Twentyone, player.Twentyone = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()

    if (player.Twenty === C2_LIST[player.wood] && C4_LIST.includes(player.Ten) && player.Thirty !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Thirty) || player.Thirty === C1_LIST[player.water]) player.Twenty = player.Sprev, player.Sprev = player.Thirty, player.Thirty = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Thirty = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Ten) && player.Twenty !== C1_LIST[player.tree] && player.Twenty !== C1_LIST[player.water]) player.Ten = player.prev, player.prev = player.Twenty, player.Twenty = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.Nineteen === C2_LIST[player.wood] && C4_LIST.includes(player.Nine) && player.Twentynine !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Twentynine) || player.Twentynine === C1_LIST[player.water]) player.Nineteen = player.Sprev, player.Sprev = player.Twentynine, player.Twentynine = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentynine = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Nine) && player.Nineteen !== C1_LIST[player.tree] && player.Nineteen !== C1_LIST[player.water]) player.Nine = player.prev, player.prev = player.Nineteen, player.Nineteen = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.Eighteen === C2_LIST[player.wood] && C4_LIST.includes(player.Eight) && player.Twentyeight !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Twentyeight) || player.Twentyeight === C1_LIST[player.water]) player.Eighteen = player.Sprev, player.Sprev = player.Twentyeight, player.Twentyeight = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentyeight = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Eight) && player.Eighteen !== C1_LIST[player.tree] && player.Eighteen !== C1_LIST[player.water]) player.Eight = player.prev, player.prev = player.Eighteen, player.Eighteen = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.Seventeen === C2_LIST[player.wood] && C4_LIST.includes(player.Seven) && player.Twentyseven !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Twentyseven) || player.Twentyseven === C1_LIST[player.water]) player.Seventeen = player.Sprev, player.Sprev = player.Twentyseven, player.Twentyseven = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentyseven = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Seven) && player.Seventeen !== C1_LIST[player.tree] && player.Seventeen !== C1_LIST[player.water]) player.Seven = player.prev, player.prev = player.Seventeen, player.Seventeen = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.Sixteen === C2_LIST[player.wood] && C4_LIST.includes(player.Six) && player.Twentysix !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Twentysix) || player.Twentysix === C1_LIST[player.water]) player.Sixteen = player.Sprev, player.Sprev = player.Twentysix, player.Twentysix = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentysix = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Six) && player.Sixteen !== C1_LIST[player.tree] && player.Sixteen !== C1_LIST[player.water]) player.Six = player.prev, player.prev = player.Sixteen, player.Sixteen = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.Fifteen === C2_LIST[player.wood] && C4_LIST.includes(player.Five) && player.Twentyfive !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Twentyfive) || player.Twentyfive === C1_LIST[player.water]) player.Fifteen = player.Sprev, player.Sprev = player.Twentyfive, player.Twentyfive = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentyfive = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Five) && player.Fifteen !== C1_LIST[player.tree] && player.Fifteen !== C1_LIST[player.water]) player.Five = player.prev, player.prev = player.Fifteen, player.Fifteen = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()    
    if (player.Fourteen === C2_LIST[player.wood] && C4_LIST.includes(player.Four) && player.Twentyfour !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Twentyfour) || player.Twentyfour === C1_LIST[player.water]) player.Fourteen = player.Sprev, player.Sprev = player.Twentyfour, player.Twentyfour = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentyfour = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Four) && player.Fourteen !== C1_LIST[player.tree] && player.Fourteen !== C1_LIST[player.water]) player.Four = player.prev, player.prev = player.Fourteen, player.Fourteen = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.Thirteen === C2_LIST[player.wood] && C4_LIST.includes(player.Three) && player.Twentythree !== C2_LIST[player.wood]){
        if (C2_LIST.includes(player.Twentythree) || player.Twentythree === C1_LIST[player.water]) player.Thirteen = player.Sprev, player.Sprev = player.Twentythree, player.Twentythree = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentythree = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Three) && player.Thirteen !== C1_LIST[player.tree] && player.Thirteen !== C1_LIST[player.water]) player.Three = player.prev, player.prev = player.Thirteen, player.Thirteen = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.Twelve === C2_LIST[player.wood] && C4_LIST.includes(player.Two) && player.Twentytwo !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Twentytwo) || player.Twentytwo === C1_LIST[player.water]) player.Twelve = player.Sprev, player.Sprev = player.Twentytwo, player.Twentytwo = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){ player.Sprev = C2_LIST[player.floor], player.Twentytwo = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.Two) && player.Twelve !== C1_LIST[player.tree] && player.Twelve !== C1_LIST[player.water]) player.Two = player.prev, player.prev = player.Twelve, player.Twelve = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()
    if (player.Eleven === C2_LIST[player.wood] && C4_LIST.includes(player.One) && player.Twentyone !== C2_LIST[player.wood]){ 
        if (C2_LIST.includes(player.Twentyone) || player.Twentyone === C1_LIST[player.water]) player.Eleven = player.Sprev, player.Sprev = player.Twentyone, player.Twentyone = C2_LIST[player.wood]
    if (player.Sprev === C1_LIST[player.water]){player.Sprev = C2_LIST[player.floor], player.Twentyone = C2_LIST[player.island] 
    if (options.SFX == true) tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}}
  if (C4_LIST.includes(player.One)&& player.Eleven !== C1_LIST[player.tree] && player.Eleven !== C1_LIST[player.water]) player.One = player.prev, player.prev = player.Eleven, player.Eleven = C4_LIST[player.skinInverse], player.North -= 1,  player.South += 1, audio(), save2()

}

// A "ghost" layer which offsets other layers in the tree
addNode("blank", {
    layerShown: "ghost",
},
)


addLayer("tree-tab", {
    tabFormat: [["tree", function() {return (layoutInfo.treeLayout ? layoutInfo.treeLayout : TREE_LAYERS)}]],
    previousTab: "",
    leftTab: true,

    startData() {
        return {
	audioR: 0,
    saved: false,
    prevArea: 1,
        }},

        audioPurpleRustle: new Audio('resources/PurpleRustle.wav'),
        audioSludge: new Audio('resources/Sludge.wav'),
        audioBubbles: new Audio('resources/Bubbles.wav'),
        audioForest: new Audio('resources/Forest.mp3'),
        audioOpening: new Audio('resources/Opening.mp3'),
        audioPortal1: new Audio('resources/Portal1.wav'),
        audioPortal2: new Audio('resources/Portal2.wav'),
        audioLine1: new Audio('resources/Line1.wav'),
        audioLine2: new Audio('resources/Line2.wav'),
        audioLine3: new Audio('resources/Line3.wav'),
        audioRock1: new Audio('resources/Rock1.wav'),
        audioRock2: new Audio('resources/Rock2.wav'),
        audioRock3: new Audio('resources/Rock3.wav'),
        audioWood1: new Audio('resources/Wood1.wav'),
        audioWood2: new Audio('resources/Wood2.wav'),
        audioWood3: new Audio('resources/Wood3.wav'),
        audioDirt1: new Audio('resources/Dirt1.wav'),
        audioDirt2: new Audio('resources/Dirt2.wav'),
        audioDirt3: new Audio('resources/Dirt3.wav'),
        audioSand: new Audio('resources/Sand.wav'),
        audioWater: new Audio('resources/Water.wav'),
        Nature: true,
        Bubbles: true,
        
    clickables: {
        11: {
            unlocked(){
                if (localStorage.getItem('Mode') === '3') return true
            },
            canClick(){
                return true
            },
            title: "↑",
            style: { "background-color": "#808080", color: "#000000", "font-size": "40px"},
            onHold() {
                player.intervaeae = true
            },
        },
        21: {
            unlocked(){
                if (localStorage.getItem('Mode') === '3') return true
            },
            canClick(){
                return true
            },
            title: "←",
            style: { "background-color": "#808080", color: "#000000", "font-size": "40px"},
            onHold() {
                player.interva = true
            },
        },
        22: {
            unlocked(){
                if (localStorage.getItem('Mode') === '3') return true
            },
            canClick(){
                return true
            },
            title: "↓",
            style: { "background-color": "#808080", color: "#000000", "font-size": "40px"},
            onHold() {
                player.intervaea = true
            },
        },
        23: {
            unlocked(){
                if (localStorage.getItem('Mode') === '3') return true
            },
            canClick(){
                return true
            },
            title: "→",
            style: { "background-color": "#808080", color: "#000000", "font-size": "40px"},
            onHold() {
                player.intervae = true
            },
        },
        31: {
            unlocked(){
                if (localStorage.getItem('Mode') === '3') return true
            },
            canClick(){
                return true
            },
            title() {return (options.Lang?'Reset Zone':'重置区域')},
            style: { "background-color": "#808080", color: "#000000", "font-size": "10px"},
            onClick() {
                player.reset = true
            },
        },
        32: {
            unlocked(){
                if (localStorage.getItem('Mode') === '3') return true
            },
            canClick(){
                return true
            },
            title() {return (options.Lang?'Reset One Move':'撤回一步')},
            style: { "background-color": "#808080", color: "#000000", "font-size": "10px"},
            onClick() {
                import2()
            },
        },
    },

    hotkeys: [
        { key: "w", description: "W: Go Up One Space", desc: "W: 向上走一格", onPress() { if (localStorage.getItem('Mode') === '1') player.intervaeae = true},
        unlocked() { if (localStorage.getItem('Mode') === '1') return true}},
        { key: "a", description: "A: Go Left One Space", desc: "A: 向左走一格", onPress() { if (localStorage.getItem('Mode') === '1') player.interva = true},
        unlocked() { if (localStorage.getItem('Mode') === '1') return true}},
        { key: "s", description: "S: Go Down One Space", desc: "S: 向下走一格", onPress() { if (localStorage.getItem('Mode') === '1') player.intervaea = true},
        unlocked() { if (localStorage.getItem('Mode') === '1') return true}},
        { key: "d", description: "D: Go Right One Space", desc: "D: 向后走一格", onPress() { if (localStorage.getItem('Mode') === '1') player.intervae = true},
        unlocked() { if (localStorage.getItem('Mode') === '1') return true}},
        { key: "ArrowUp", description: "↑: Go Up One Space", desc: "↑: 向上走一格", onPress() { if (localStorage.getItem('Mode') === '2') player.intervaeae = true},
        unlocked() { if (localStorage.getItem('Mode') === '2') return true}},
        { key: "ArrowLeft", description: "←: Go Left One Space", desc: "←: 向左走一格", onPress() { if (localStorage.getItem('Mode') === '2') player.interva = true},
        unlocked() { if (localStorage.getItem('Mode') === '2') return true}},
        { key: "ArrowDown", description: "↓: Go Down One Space", desc: "↓: 向下走一格", onPress() { if (localStorage.getItem('Mode') === '2') player.intervaea = true},
        unlocked() { if (localStorage.getItem('Mode') === '2') return true}},
        { key: "ArrowRight", description: "→: Go Right One Space", desc: "→: 向后走一格", onPress() { if (localStorage.getItem('Mode') === '2') player.intervae = true},
        unlocked() { if (localStorage.getItem('Mode') === '2') return true}},
        { key: "r", description: "R: Reset Zone", desc: "R: 重置区域", onPress() { if (localStorage.getItem('Mode') === '1' || localStorage.getItem('Mode') === '2') player.reset = true},
        unlocked() { if (localStorage.getItem('Mode') === '1' || localStorage.getItem('Mode') === '2') return true}},
        { key: "u", description: "U: Reset One Move", desc: "U: 撤回一步", onPress() { if (localStorage.getItem('Mode') === '1' || localStorage.getItem('Mode') === '2') import2()},
        unlocked() { if (localStorage.getItem('Mode') === '1' || localStorage.getItem('Mode') === '2') return true}},
    ],
    tabFormat: [
        'Map-row0',
        'Map-row1',
        'Map-row2',
        'Map-row3',
        'Map-row4',
        'Map-row5',
        'Map-row6',
        'clickables'
    ],

    update() {
     
        if (options.Lang === true){
        if(player.name.length > 24 || player.name.length < 1) player.name = prompt("Name your Symbol (Please don't input more than 24 characters or less than 1 character)")
        if (player.name === null) player.name = []
        if (player.name.length > 24 || player.name.length < 1) player.name = prompt("Uh less than 25 characters and more than 0... ok?")
        if (player.name === null) player.name = []
        if (player.name.length > 24 || player.name.length < 1) player.name = prompt("Maybe you didn't hear me, LESS THAN 25 CHARACTERS AND MORE THAN 0, OK?")
        if (player.name === null) player.name = []
        if (player.name.length > 24 || player.name.length < 1) player.name = prompt("Holy, you're like a child. Do you really want to name your Symbol " + player.name + " that badly?")
        if (player.name === null) player.name = []
        if (player.name.length > 24 || player.name.length < 1) player.name = prompt("You clearly don't respect me so I'll ignore whatever you just said, in fact, I'll now loop through everything I have said previously until you input a name that is below 25 characters and more than 0 since you clearly only desire to be a nuisance.")
        if (player.name === null) player.name = []
        if (player.name.length < 25 && player.name.length > 0 && player['tree-tab'].saved === false) player['tree-tab'].saved = true, save()}

        if (options.Lang === false){
        if(player.name.length > 24 || player.name.length < 1) player.name = prompt("输入你的名称（不大于12中文字符/24英文字符）")
        if (player.name === null) player.name = []
        if (player.name.length > 24 || player.name.length < 1) player.name = prompt("呃，小于25字符/12中文字符然后大于0字...好吗？")
        if (player.name === null) player.name = []
        if (player.name.length > 24 || player.name.length < 1) player.name = prompt("你可能没听见我说啥，小　于　２　５　字　符　／　１　２　中　文　字　符　并　大　于　０　字　，　好　吗　？")
        if (player.name === null) player.name = []
        if (player.name.length > 24 || player.name.length < 1) player.name = prompt("天哪，你像个孩子一样。你真的有那么想把你的符号叫做" + player.name + "吗")
        if (player.name === null) player.name = []
        if (player.name.length > 24 || player.name.length < 1) player.name = prompt("很明显你不尊重我所以我就无视你刚才说的玩意了。事实上，我现在就要循环我之前说过的话直到你输入一个小于25字符/12中文字符并大于0字的名字为止，因为你显然只想成为一个讨厌鬼。")
        if (player.name === null) player.name = []
        if (player.name.length < 25 && player.name.length > 0 && player['tree-tab'].saved === false) player['tree-tab'].saved = true, save()}

        let current = new Date();
        let cDate = current.getFullYear() + '/' + (current.getMonth() + 1) + '/' + current.getDate();
        let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
        player.dateTime = cDate + ' ' + cTime;

        if (options.Music == false) tmp['tree-tab'].audioForest.pause(), tmp['tree-tab'].audioOpening.pause(), tmp['tree-tab'].audioBubbles.pause()  

        if (player.inOpen == true){tmp['tree-tab'].audioOpening.loop = true, tmp['tree-tab'].audioOpening.play() 
        .then(() => {
            player.inOpen = false
        })
        .catch(error => {
          
        });
    }

    if (tmp['tree-tab'].Bubbles == true && localStorage.getItem('Area') === '2' &&  player.inOpen == false) tmp['tree-tab'].audioOpening.pause(),  tmp['tree-tab'].audioForest.pause(), tmp['tree-tab'].audioBubbles.loop = true, tmp['tree-tab'].audioBubbles.play() 
    .then(() => {
        tmp['tree-tab'].Bubbles = false
    })
    .catch(error => {
      
    });

        if (tmp['tree-tab'].Nature == true && localStorage.getItem('Area') === '1' &&  player.inOpen == false) tmp['tree-tab'].audioOpening.pause(), tmp['tree-tab'].audioBubbles.pause(), tmp['tree-tab'].audioForest.loop = true, tmp['tree-tab'].audioForest.play() 
        .then(() => {
            tmp['tree-tab'].Nature = false
        })
        .catch(error => {
          
        });

        if (player.Zone === 4 && C4_LIST.includes(player.Fourty)) localStorage.setItem('Area', 1), tmp['tree-tab'].Bubbles = true
       if (player.Zone === 4 && C4_LIST.includes(player.Fifty)) localStorage.setItem('Area', 2), tmp['tree-tab'].Nature = true //Area


        if (localStorage.getItem('Area') === '2') options.theme = themes[2], changeTheme(), player.tree = 3, player.wood = 3, player.floor = 1, player.island = 7, player.water = 8, player.stone = 7, player['tree-tab'].prevArea = 2
        if (localStorage.getItem('Area') === '1') options.theme = themes[1], changeTheme(), player.tree = 0, player.wood = 2, player.floor = 0, player.island = 4, player.water = 4, player.stone = 1, player['tree-tab'].prevArea = 1
       if (player.prev === C2_LIST[0] || player.prev === C2_LIST[1] || player.prev === C2_LIST[player.island] || player.prev === C2_LIST[5] || player.prev === C1_LIST[2]) player.Level = 1
       if (player.prev === C1_LIST[player.stone] || player.prev === C2_LIST[player.wood] || player.prev === C3_LIST[1] || player.prev === C5_LIST[1]) player.Level = 2


      if (C4_LIST.includes(player.One) && C2_LIST.includes(player.Two ) || C4_LIST.includes(player.Two) && C2_LIST.includes(player.Three ) || C4_LIST.includes(player.Three) && C2_LIST.includes(player.Four ) || C4_LIST.includes(player.Four) && C2_LIST.includes(player.Five ) || C4_LIST.includes(player.Five) && C2_LIST.includes(player.Six ) || C4_LIST.includes(player.Six) && C2_LIST.includes(player.Seven ) || C4_LIST.includes(player.Seven) && C2_LIST.includes(player.Eight ) || C4_LIST.includes(player.Eight) && C2_LIST.includes(player.Nine ) || C4_LIST.includes(player.Nine) && C2_LIST.includes(player.Ten ) ||   C4_LIST.includes(player.Eleven) && C2_LIST.includes(player.Twelve ) || C4_LIST.includes(player.Twelve) && C2_LIST.includes(player.Thirteen ) || C4_LIST.includes(player.Thirteen) && C2_LIST.includes(player.Fourteen ) || C4_LIST.includes(player.Fourteen) && C2_LIST.includes(player.Fifteen ) || C4_LIST.includes(player.Fifteen) && C2_LIST.includes(player.Sixteen ) || C4_LIST.includes(player.Sixteen) && C2_LIST.includes(player.Seventeen ) || C4_LIST.includes(player.Seventeen) && C2_LIST.includes(player.Eighteen ) || C4_LIST.includes(player.Eighteen) && C2_LIST.includes(player.Nineteen ) || C4_LIST.includes(player.Nineteen) && C2_LIST.includes(player.Twenty ) || C4_LIST.includes(player.Twentyone) && C2_LIST.includes(player.Twentytwo ) || C4_LIST.includes(player.Twentytwo) && C2_LIST.includes(player.Twentythree ) || C4_LIST.includes(player.Twentythree) && C2_LIST.includes(player.Twentyfour ) || C4_LIST.includes(player.Twentyfour) && C2_LIST.includes(player.Twentyfive ) || C4_LIST.includes(player.Twentyfive) && C2_LIST.includes(player.Twentysix ) || C4_LIST.includes(player.Twentysix) && C2_LIST.includes(player.Twentyseven ) || C4_LIST.includes(player.Twentyseven) && C2_LIST.includes(player.Twentyeight ) || C4_LIST.includes(player.Twentyeight) && C2_LIST.includes(player.Twentynine ) || C4_LIST.includes(player.Twentynine) && C2_LIST.includes(player.Thirty ) || C4_LIST.includes(player.Thirtyone) && C2_LIST.includes(player.Thirtytwo ) || C4_LIST.includes(player.Thirtytwo) && C2_LIST.includes(player.Thirtythree ) || C4_LIST.includes(player.Thirtythree) && C2_LIST.includes(player.Thirtyfour ) || C4_LIST.includes(player.Thirtyfour) && C2_LIST.includes(player.Thirtyfive ) || C4_LIST.includes(player.Thirtyfive) && C2_LIST.includes(player.Thirtysix ) || C4_LIST.includes(player.Thirtysix) && C2_LIST.includes(player.Thirtyseven ) || C4_LIST.includes(player.Thirtyseven) && C2_LIST.includes(player.Thirtyeight ) || C4_LIST.includes(player.Thirtyeight) && C2_LIST.includes(player.Thirtynine ) || C4_LIST.includes(player.Thirtynine) && C2_LIST.includes(player.Fourty ) || C4_LIST.includes(player.Fourtyone) && C2_LIST.includes(player.Fourtytwo ) || C4_LIST.includes(player.Fourtytwo) && C2_LIST.includes(player.Fourtythree ) || C4_LIST.includes(player.Fourtythree) && C2_LIST.includes(player.Fourtyfour ) || C4_LIST.includes(player.Fourtyfour) && C2_LIST.includes(player.Fourtyfive ) || C4_LIST.includes(player.Fourtyfive) && C2_LIST.includes(player.Fourtysix ) || C4_LIST.includes(player.Fourtysix) && C2_LIST.includes(player.Fourtyseven ) || C4_LIST.includes(player.Fourtyseven) && C2_LIST.includes(player.Fourtyeight ) || C4_LIST.includes(player.Fourtyeight) && C2_LIST.includes(player.Fourtynine ) || C4_LIST.includes(player.Fourtynine) && C2_LIST.includes(player.Fifty) || player.Level === 2) player.MR = true
        else player.MR = false

        if (C2_LIST.includes(player.One) && C4_LIST.includes(player.Two) || C2_LIST.includes(player.Two) && C4_LIST.includes(player.Three) || C2_LIST.includes(player.Three) && C4_LIST.includes(player.Four) || C2_LIST.includes(player.Four) && C4_LIST.includes(player.Five) || C2_LIST.includes(player.Five) && C4_LIST.includes(player.Six) || C2_LIST.includes(player.Six) && C4_LIST.includes(player.Seven) || C2_LIST.includes(player.Seven) && C4_LIST.includes(player.Eight) || C2_LIST.includes(player.Eight) && C4_LIST.includes(player.Nine) || C2_LIST.includes(player.Nine) && C4_LIST.includes(player.Ten) || C2_LIST.includes(  player.Eleven) && C4_LIST.includes(player.Twelve) || C2_LIST.includes(player.Twelve) && C4_LIST.includes(player.Thirteen) || C2_LIST.includes(player.Thirteen) && C4_LIST.includes(player.Fourteen) || C2_LIST.includes(player.Fourteen) && C4_LIST.includes(player.Fifteen) || C2_LIST.includes(player.Fifteen) && C4_LIST.includes(player.Sixteen) || C2_LIST.includes(player.Sixteen) && C4_LIST.includes(player.Seventeen) || C2_LIST.includes(player.Seventeen) && C4_LIST.includes(player.Eighteen) || C2_LIST.includes(player.Eighteen) && C4_LIST.includes(player.Nineteen) || C2_LIST.includes(player.Nineteen) && C4_LIST.includes(player.Twenty) || C2_LIST.includes(player.Twentyone) && C4_LIST.includes(player.Twentytwo) || C2_LIST.includes(player.Twentytwo) && C4_LIST.includes(player.Twentythree) || C2_LIST.includes(player.Twentythree) && C4_LIST.includes(player.Twentyfour) || C2_LIST.includes(player.Twentyfour) && C4_LIST.includes(player.Twentyfive) || C2_LIST.includes(player.Twentyfive) && C4_LIST.includes(player.Twentysix) || C2_LIST.includes(player.Twentysix) && C4_LIST.includes(player.Twentyseven) || C2_LIST.includes(player.Twentyseven) && C4_LIST.includes(player.Twentyeight) || C2_LIST.includes(player.Twentyeight) && C4_LIST.includes(player.Twentynine) || C2_LIST.includes(player.Twentynine) && C4_LIST.includes(player.Thirty) || C2_LIST.includes(player.Thirtyone) && C4_LIST.includes(player.Thirtytwo) || C2_LIST.includes(player.Thirtytwo) && C4_LIST.includes(player.Thirtythree) || C2_LIST.includes(player.Thirtythree) && C4_LIST.includes(player.Thirtyfour) || C2_LIST.includes(player.Thirtyfour) && C4_LIST.includes(player.Thirtyfive) || C2_LIST.includes(player.Thirtyfive) && C4_LIST.includes(player.Thirtysix) || C2_LIST.includes(player.Thirtysix) && C4_LIST.includes(player.Thirtyseven) || C2_LIST.includes(player.Thirtyseven) && C4_LIST.includes(player.Thirtyeight) || C2_LIST.includes(player.Thirtyeight) && C4_LIST.includes(player.Thirtynine) || C2_LIST.includes(player.Thirtynine) && C4_LIST.includes(player.Fourty) || C2_LIST.includes(player.Fourtyone) && C4_LIST.includes(player.Fourtytwo) || C2_LIST.includes(player.Fourtytwo) && C4_LIST.includes(player.Fourtythree) || C2_LIST.includes(player.Fourtythree) && C4_LIST.includes(player.Fourtyfour) || C2_LIST.includes(player.Fourtyfour) && C4_LIST.includes(player.Fourtyfive) || C2_LIST.includes(player.Fourtyfive) && C4_LIST.includes(player.Fourtysix) || C2_LIST.includes(player.Fourtysix) && C4_LIST.includes(player.Fourtyseven) || C2_LIST.includes(player.Fourtyseven) && C4_LIST.includes(player.Fourtyeight) || C2_LIST.includes(player.Fourtyeight) && C4_LIST.includes(player.Fourtynine) || C2_LIST.includes(player.Fourtynine) && C4_LIST.includes(player.Fifty) || player.Level === 2) player.ML = true
        else player.ML = false

      if (C4_LIST.includes(player.One) && C2_LIST.includes(player.Eleven) || C4_LIST.includes(player.Two) && C2_LIST.includes(player.Twelve ) || C4_LIST.includes(player.Three) && C2_LIST.includes(player.Thirteen ) || C4_LIST.includes(player.Four) && C2_LIST.includes(player.Fourteen ) || C4_LIST.includes(player.Five) && C2_LIST.includes(player.Fifteen ) || C4_LIST.includes(player.Six) && C2_LIST.includes(player.Sixteen ) || C4_LIST.includes(player.Seven) && C2_LIST.includes(player.Seventeen ) || C4_LIST.includes(player.Eight) && C2_LIST.includes(player.Eighteen ) || C4_LIST.includes(player.Nine) && C2_LIST.includes(player.Nineteen ) ||  C4_LIST.includes(player.Ten) && C2_LIST.includes(player.Twenty ) || C4_LIST.includes(player.Eleven) && C2_LIST.includes(player.Twentyone ) || C4_LIST.includes(player.Twelve) && C2_LIST.includes(player.Twentytwo ) || C4_LIST.includes(player.Thirteen) && C2_LIST.includes(player.Twentythree ) || C4_LIST.includes(player.Fourteen) && C2_LIST.includes(player.Twentyfour ) || C4_LIST.includes(player.Fifteen) && C2_LIST.includes(player.Twentyfive ) || C4_LIST.includes(player.Sixteen) && C2_LIST.includes(player.Twentysix ) || C4_LIST.includes(player.Seventeen) && C2_LIST.includes(player.Twentyseven ) || C4_LIST.includes(player.Eighteen) && C2_LIST.includes(player.Twentyeight ) || C4_LIST.includes(player.Nineteen) && C2_LIST.includes(player.Twentynine ) || C4_LIST.includes(player.Twenty) && C2_LIST.includes(player.Thirty ) || C4_LIST.includes(player.Twentyone) && C2_LIST.includes(player.Thirtyone ) || C4_LIST.includes(player.Twentytwo) && C2_LIST.includes(player.Thirtytwo ) || C4_LIST.includes(player.Twentythree) && C2_LIST.includes(player.Thirtythree ) || C4_LIST.includes(player.Twentyfour) && C2_LIST.includes(player.Thirtyfour ) || C4_LIST.includes(player.Twentyfive) && C2_LIST.includes(player.Thirtyfive ) || C4_LIST.includes(player.Twentysix) && C2_LIST.includes(player.Thirtysix ) || C4_LIST.includes(player.Twentyseven) && C2_LIST.includes(player.Thirtyseven ) || C4_LIST.includes(player.Twentyeight) && C2_LIST.includes(player.Thirtyeight ) || C4_LIST.includes(player.Twentynine) && C2_LIST.includes(player.Thirtynine ) || C4_LIST.includes(player.Thirty) && C2_LIST.includes(player.Fourty ) || C4_LIST.includes(player.Thirtyone) && C2_LIST.includes(player.Fourtyone ) || C4_LIST.includes(player.Thirtytwo) && C2_LIST.includes(player.Fourtytwo ) || C4_LIST.includes(player.Thirtythree) && C2_LIST.includes(player.Fourtythree ) || C4_LIST.includes(player.Thirtyfour) && C2_LIST.includes(player.Fourtyfour ) || C4_LIST.includes(player.Thirtyfive) && C2_LIST.includes(player.Fourtyfive ) || C4_LIST.includes(player.Thirtysix) && C2_LIST.includes(player.Fourtysix ) || C4_LIST.includes(player.Thirtyseven) && C2_LIST.includes(player.Fourtyseven ) || C4_LIST.includes(player.Thirtyeight) && C2_LIST.includes(player.Fourtyeight ) || C4_LIST.includes(player.Thirtynine) && C2_LIST.includes(player.Fourtynine ) || C4_LIST.includes(player.Fourty) && C2_LIST.includes(player.Fifty) || player.Level === 2) player.MD = true
        else player.MD = false

        if (C2_LIST.includes(player.One) && C4_LIST.includes(player.Eleven) || C2_LIST.includes(player.Two) && C4_LIST.includes(player.Twelve) || C2_LIST.includes(player.Three) && C4_LIST.includes(player.Thirteen) || C2_LIST.includes(player.Four) && C4_LIST.includes(player.Fourteen) || C2_LIST.includes(player.Five) && C4_LIST.includes(player.Fifteen) || C2_LIST.includes(player.Six) && C4_LIST.includes(player.Sixteen) || C2_LIST.includes(player.Seven) && C4_LIST.includes(player.Seventeen) || C2_LIST.includes(player.Eight) && C4_LIST.includes(player.Eighteen) || C2_LIST.includes(player.Nine) && C4_LIST.includes(player.Nineteen) || C2_LIST.includes( player.Ten) && C4_LIST.includes(player.Twenty) || C2_LIST.includes(player.Eleven) && C4_LIST.includes(player.Twentyone) || C2_LIST.includes(player.Twelve) && C4_LIST.includes(player.Twentytwo) || C2_LIST.includes(player.Thirteen) && C4_LIST.includes(player.Twentythree) || C2_LIST.includes(player.Fourteen) && C4_LIST.includes(player.Twentyfour) || C2_LIST.includes(player.Fifteen) && C4_LIST.includes(player.Twentyfive) || C2_LIST.includes(player.Sixteen) && C4_LIST.includes(player.Twentysix) || C2_LIST.includes(player.Seventeen) && C4_LIST.includes(player.Twentyseven) || C2_LIST.includes(player.Eighteen) && C4_LIST.includes(player.Twentyeight) || C2_LIST.includes(player.Nineteen) && C4_LIST.includes(player.Twentynine) || C2_LIST.includes(player.Twenty) && C4_LIST.includes(player.Thirty) || C2_LIST.includes(player.Twentyone) && C4_LIST.includes(player.Thirtyone) || C2_LIST.includes(player.Twentytwo) && C4_LIST.includes(player.Thirtytwo) || C2_LIST.includes(player.Twentythree) && C4_LIST.includes(player.Thirtythree) || C2_LIST.includes(player.Twentyfour) && C4_LIST.includes(player.Thirtyfour) || C2_LIST.includes(player.Twentyfive) && C4_LIST.includes(player.Thirtyfive) || C2_LIST.includes(player.Twentysix) && C4_LIST.includes(player.Thirtysix) || C2_LIST.includes(player.Twentyseven) && C4_LIST.includes(player.Thirtyseven) || C2_LIST.includes(player.Twentyeight) && C4_LIST.includes(player.Thirtyeight) || C2_LIST.includes(player.Twentynine) && C4_LIST.includes(player.Thirtynine) || C2_LIST.includes(player.Thirty) && C4_LIST.includes(player.Fourty) || C2_LIST.includes(player.Thirtyone) && C4_LIST.includes(player.Fourtyone) || C2_LIST.includes(player.Thirtytwo) && C4_LIST.includes(player.Fourtytwo) || C2_LIST.includes(player.Thirtythree) && C4_LIST.includes(player.Fourtythree) || C2_LIST.includes(player.Thirtyfour) && C4_LIST.includes(player.Fourtyfour) || C2_LIST.includes(player.Thirtyfive) && C4_LIST.includes(player.Fourtyfive) || C2_LIST.includes(player.Thirtysix) && C4_LIST.includes(player.Fourtysix) || C2_LIST.includes(player.Thirtyseven) && C4_LIST.includes(player.Fourtyseven) || C2_LIST.includes(player.Thirtyeight) && C4_LIST.includes(player.Fourtyeight) || C2_LIST.includes(player.Thirtynine) && C4_LIST.includes(player.Fourtynine) || C2_LIST.includes(player.Fourty) && C4_LIST.includes(player.Fifty) || player.Level === 2) player.MU = true
        else player.MU = false

        if (player.interva == true || player.intervae == true || player.intervaea == true || player.intervaeae == true){
            player.timeX += 1
            if (player.Sludge == true) return player.timeX = 0
            if (player.timeX >= 3 && player.interva == true) moveLeft(), player.timeX = 0
            if (player.timeX >= 3 && player.intervae == true) moveRight(), player.timeX = 0
            if (player.timeX >= 3 && player.intervaeae == true) moveUp(), player.timeX = 0
            if (player.timeX >= 3 && player.intervaea == true) moveDown(), player.timeX = 0
        }

        if (player.Zone === -1 && player.prev === C2_LIST[8]) player.prev = C2_LIST[5], player.Letters.Letters[0] = 1, player.Undo.length = 0, save2()
        if (player.Zone === 7 && player.prev === C2_LIST[8]) player.prev = C2_LIST[1], player.Letters.Letters[1] = 1, player.Undo.length = 0, save2()
        if (player.Zone === 4 && player.Fourtynine !== C1_LIST[6]) localStorage.setItem('No', null)
        if (localStorage.getItem('log3') === 3 && player.Fourtynine === C1_LIST[6]) localStorage.setItem('No', 1)
        if (C4_LIST.includes(player.Thirtyone) && player.Zone === 6 && player.prev !== C2_LIST[player.wood]) player.prev = C2_LIST[player.island]
        if (player.Twentynine === C2_LIST[player.wood] && player.Zone === 6) player.Twentynine = C1_LIST[6] 
        if (player.Fifteen === C2_LIST[player.wood] && player.Zone === 6) player.Fifteen = C1_LIST[6] 

        if (player.reset == true && player.Zone === 3){
        player.Sprev = C2_LIST[player.floor]
        player.prev = C2_LIST[player.floor]
        localStorage.setItem('prevTab1', 0)
        player.East = 19,
            player.West = -19,
            player.North = 1,
            player.South = -1,
        player.Zone = 3,
        player.One = C1_LIST[player.tree],
        player.Two = C1_LIST[player.tree],
        player.Three = C1_LIST[player.tree],
        player.Four = C2_LIST[0],
        player.Five = C1_LIST[player.tree],
        player.Six = C1_LIST[player.tree],
        player.Seven = C2_LIST[0],
        player.Eight = C1_LIST[player.tree],
        player.Nine = C1_LIST[player.tree],
        player.Ten = C1_LIST[player.tree],
        player.Eleven = C1_LIST[player.tree],
        player.Twelve = C1_LIST[player.tree],
        player.Thirteen = C2_LIST[player.wood],
        player.Fourteen = C2_LIST[0],
        player.Fifteen = C2_LIST[player.wood],
        player.Sixteen = C2_LIST[player.wood],
        player.Seventeen = C2_LIST[0],
        player.Eighteen = C2_LIST[0]
        if (localStorage.getItem('log1') === '1') player.Nineteen = C2_LIST[player.wood]
        player.Twenty = C2_LIST[player.wood],
        player.Twentyone = C4_LIST[player.skinInverse],
        player.Twentytwo = C2_LIST[0],
        player.Twentythree = C2_LIST[0],
        player.Twentyfour = C2_LIST[0],
        player.Twentyfive = C1_LIST[player.tree],
        player.Twentysix = C1_LIST[player.tree],
        player.Twentyseven = C2_LIST[0],
        player.Twentyeight = C1_LIST[player.tree],
        player.Twentynine = C1_LIST[player.tree],
        player.Thirty = C1_LIST[player.tree],
        player.Thirtyone = C2_LIST[0],
        player.Thirtytwo = C2_LIST[0],
        player.Thirtythree = C2_LIST[0],
        player.Thirtyfour = C2_LIST[0],
        player.Thirtyfive = C2_LIST[0],
        player.Thirtysix = C1_LIST[player.tree],
        player.Thirtyseven = C2_LIST[0],
        player.Thirtyeight = C1_LIST[player.tree],
        player.Thirtynine = C1_LIST[player.tree],
        player.Fourty = C1_LIST[player.tree],
        player.Fourtyone = C1_LIST[player.tree],
        player.Fourtytwo = C2_LIST[0],
        player.Fourtythree = C1_LIST[player.tree],
        player.Fourtyfour = C2_LIST[0],
        player.Fourtyfive = C1_LIST[player.tree],
        player.Fourtysix = C1_LIST[player.tree],
        player.Fourtyseven = C1_LIST[player.water],
        player.Fourtyeight = C1_LIST[player.tree],
        player.Fourtynine = C1_LIST[player.tree],
        player.Fifty = C1_LIST[player.tree],
        player.F1 = C5_LIST[0],
        player.F2 = C5_LIST[0],
        player.F5 = C5_LIST[0],
        player.Undo.length = 0
        save2()
        player.reset = false}

        if (player.reset == true && player.Zone === 7){
        player.Sprev = C2_LIST[1]
        player.prev = C2_LIST[1]
        player.East = -22,
        player.West = 22,
        player.North = -12,
        player.South = 12,
        player.Zone = 7,
        player.One = C1_LIST[player.stone],
        player.Two = C2_LIST[player.wood],
        player.Three = C2_LIST[1],
        player.Four = C1_LIST[2],
        player.Five = C1_LIST[2],
        player.Six = C2_LIST[1],
        player.Seven = C2_LIST[1],
        player.Eight = C1_LIST[player.stone],
        player.Nine = C2_LIST[player.wood],
        player.Ten = C4_LIST[player.skin],
        player.Eleven = C1_LIST[player.tree],
        player.Twelve = C1_LIST[player.tree],
        player.Thirteen = C1_LIST[player.tree],
        player.Fourteen = C2_LIST[1],
        player.Fifteen = C1_LIST[2],
        player.Sixteen = C2_LIST[player.wood],
        player.Seventeen = C1_LIST[2],
        player.Eighteen = C2_LIST[player.wood],
        player.Nineteen = C1_LIST[player.tree],
        player.Twenty = C1_LIST[player.tree],
        player.Twentyone = C1_LIST[5]
        if (player.Letters.Letters[1] === 1) player.Twentytwo = C2_LIST[1]
        else player.Twentytwo = C2_LIST[8]
        player.Twentythree = C1_LIST[player.stone],
        player.Twentyfour = C2_LIST[player.wood],
        player.Twentyfive = C1_LIST[player.stone],
        player.Twentysix = C1_LIST[2],
        player.Twentyseven = C1_LIST[player.stone],
        player.Twentyeight = C2_LIST[player.wood],
        player.Twentynine = C1_LIST[player.stone],
        player.Thirty = C1_LIST[player.stone],
        player.Thirtyone = C1_LIST[player.tree],
        player.Thirtytwo = C1_LIST[player.tree],
        player.Thirtythree = C1_LIST[player.tree],
        player.Thirtyseven = C1_LIST[player.tree],
        player.Thirtyfive = C1_LIST[player.tree],
        player.Thirtysix = C2_LIST[player.wood],
        player.Thirtyfour = C2_LIST[1],
        player.Thirtyeight = C1_LIST[2],
        player.Thirtynine = C1_LIST[player.tree],
        player.Fourty = C1_LIST[player.stone],
        player.Fourtyone = C2_LIST[1],
        player.Fourtytwo = C2_LIST[1],
        player.Fourtythree = C2_LIST[1],
        player.Fourtyfour = C2_LIST[1],
        player.Fourtyfive = C1_LIST[2],
        player.Fourtysix = C1_LIST[2],
        player.Fourtyseven = C1_LIST[2],
        player.Fourtyeight = C2_LIST[1],
        player.Fourtynine = C2_LIST[player.wood],
        player.Fifty = C2_LIST[1],
        player.L1 = C3_LIST[0],
        player.L2 = C3_LIST[0],
        player.L3 = C3_LIST[0],
        player.L4 = C3_LIST[0],
        player.L5 = C3_LIST[0],
        player.L6 = C3_LIST[0],
        player.L7 = C3_LIST[0],
        player.L8 = C3_LIST[0],
        player.L9 = C3_LIST[0],
        player.L10 = C3_LIST[0],
        player.L11 = C3_LIST[0],
        player.L12 = C3_LIST[0],
        player.F1 = C5_LIST[0],
        player.F2 = C5_LIST[0],
        player.F5 = C5_LIST[0]
        save2()
        player.Sludge = false
        player.Sdir = 0
            player.reset = false}

        if (player.reset == true && player.Zone === 6){
        player.Sprev = C2_LIST[1]
        player.prev = C2_LIST[1]
        clearTimeout(player.timeS)
        player.East = -32,
        player.West = 32,
        player.North = -8,
        player.South = 8,
        player.Zone = 6,
        player.One = C2_LIST[1],
        player.Two = C1_LIST[player.tree],
        player.Three = C2_LIST[1],
        player.Four = C2_LIST[1],
        player.Five = C1_LIST[player.tree],
        player.Six = C2_LIST[1],
        player.Seven = C2_LIST[1],
        player.Eight = C1_LIST[player.tree],
        player.Nine = C2_LIST[1],
        player.Ten = C2_LIST[1],
        player.Eleven = C2_LIST[1],
        player.Twelve = C1_LIST[2],
        player.Thirteen = C2_LIST[1],
        player.Fourteen = C2_LIST[player.wood],
        player.Fifteen = C1_LIST[2],
        player.Sixteen = C2_LIST[player.wood],
        player.Seventeen = C2_LIST[1],
        player.Eighteen = C1_LIST[2]
        if (localStorage.getItem('log3') === '1') player.Nineteen = C2_LIST[player.wood]
        else player.Nineteen = C2_LIST[1]
        player.Twenty = C4_LIST[player.skinInverse],
        player.Twentyone = C1_LIST[player.water],
        player.Twentytwo = C1_LIST[player.tree],
        player.Twentythree = C1_LIST[player.tree],
        player.Twentyfour = C1_LIST[2],
        player.Twentyfive = C1_LIST[player.tree],
        player.Twentysix = C1_LIST[2],
        player.Twentyseven = C1_LIST[player.tree],
        player.Twentyeight = C1_LIST[player.tree],
        player.Twentynine = C1_LIST[2],
        player.Thirty = C1_LIST[player.tree],
        player.Thirtyone = C1_LIST[player.water],
        player.Thirtytwo = C1_LIST[2],
        player.Thirtythree = C2_LIST[1],
        player.Thirtyfour = C2_LIST[1],
        player.Thirtyfive = C1_LIST[2],
        player.Thirtysix = C2_LIST[1],
        player.Thirtyseven = C2_LIST[player.wood],
        player.Thirtyeight = C1_LIST[2],
        player.Thirtynine = C2_LIST[player.wood],
        player.Fourty = C2_LIST[1],
        player.Fourtyone = C1_LIST[player.water],
        player.Fourtytwo = C1_LIST[player.tree],
        player.Fourtythree = C2_LIST[1],
        player.Fourtyfour = C2_LIST[1],
        player.Fourtyfive = C1_LIST[player.tree],
        player.Fourtysix = C2_LIST[1],
        player.Fourtyseven = C2_LIST[1],
        player.Fourtyeight = C1_LIST[player.tree],
        player.Fourtynine = C2_LIST[1],
        player.Fifty = C2_LIST[1],
        player.L1 = C3_LIST[0],
        player.L2 = C3_LIST[0],
        player.L3 = C3_LIST[0],
        player.L4 = C3_LIST[0],
        player.L5 = C3_LIST[0],
        player.L6 = C3_LIST[0],
        player.L7 = C3_LIST[0],
        player.L8 = C3_LIST[0],
        player.L9 = C3_LIST[0],
        player.L10 = C3_LIST[0],
        player.L11 = C3_LIST[0],
        player.L12 = C3_LIST[0],
        player.F1 = C5_LIST[0],
        player.F2 = C5_LIST[2],
        player.F5 = C5_LIST[0]
        save2()
        player.Sludge = false
        player.Sdir = 0
            player.reset = false}

        if (player.reset == true && player.Zone === 5){
        player.Sprev = C2_LIST[1]
        player.prev = C2_LIST[1]
        clearTimeout(player.timeS)
        player.East = -31,
        player.West = 31,
        player.North = -7,
        player.South = 7,
        player.Zone = 5,
        player.One = C4_LIST[player.skin],
        player.Two = C1_LIST[2],
        player.Three = C1_LIST[2],
        player.Four = C1_LIST[2],
        player.Five = C1_LIST[2],
        player.Six = C1_LIST[2],
        player.Seven = C1_LIST[2],
        player.Eight = C1_LIST[player.tree],
        player.Nine = C1_LIST[2],
        player.Ten = C1_LIST[2],
        player.Eleven = C1_LIST[2],
        player.Twelve = C1_LIST[2],
        player.Thirteen = C1_LIST[2],
        player.Fourteen = C1_LIST[2],
        player.Fifteen = C1_LIST[2],
        player.Sixteen = C1_LIST[2],
        player.Seventeen = C1_LIST[2],
        player.Eighteen = C1_LIST[2],
        player.Nineteen = C1_LIST[2],
        player.Twenty = C1_LIST[player.stone],
        player.Twentyone = C1_LIST[2],
        player.Twentytwo = C1_LIST[2],
        player.Twentythree = C1_LIST[2],
        player.Twentyfour = C1_LIST[2],
        player.Twentyfive = C1_LIST[2],
        player.Twentysix = C1_LIST[player.tree],
        player.Twentyseven = C1_LIST[2],
        player.Twentyeight = C1_LIST[2],
        player.Twentynine = C1_LIST[2],
        player.Thirty = C1_LIST[player.stone],
        player.Thirtyone = C1_LIST[2],
        player.Thirtytwo = C1_LIST[player.tree],
        player.Thirtythree = C1_LIST[2],
        player.Thirtyfour = C1_LIST[2],
        player.Thirtyfive = C1_LIST[2],
        player.Thirtysix = C1_LIST[2],
        player.Thirtyseven = C1_LIST[player.tree],
        player.Thirtyeight = C1_LIST[2],
        player.Thirtynine = C1_LIST[2],
        player.Fourty = C1_LIST[player.stone],
        player.Fourtyone = C1_LIST[2],
        player.Fourtytwo = C1_LIST[2],
        player.Fourtythree = C1_LIST[2],
        player.Fourtyfour = C1_LIST[2],
        player.Fourtyfive = C1_LIST[2],
        player.Fourtysix = C1_LIST[2],
        player.Fourtyseven = C1_LIST[player.tree],
        player.Fourtyeight = C1_LIST[2],
        player.Fourtynine = C1_LIST[2],
        player.Fifty = C1_LIST[player.stone],
        player.L1 = C3_LIST[0],
        player.L2 = C3_LIST[0],
        player.L3 = C3_LIST[0],
        player.L4 = C3_LIST[0],
        player.L5 = C3_LIST[0],
        player.L6 = C3_LIST[0],
        player.L7 = C3_LIST[0],
        player.L8 = C3_LIST[0],
        player.L9 = C3_LIST[0],
        player.L10 = C3_LIST[0],
        player.L11 = C3_LIST[2],
        player.L12 = C3_LIST[0],
        player.F1 = C5_LIST[1],
        player.F2 = C5_LIST[1],
        player.F5 = C5_LIST[0]
        player.Undo.length = 0
        save2()
        player.Sludge = false
        player.Sdir = 0
        if (localStorage.getItem('log3') === '2') localStorage.setItem('log3', 1)
            player.reset = false}

        if (player.reset == true && player.Zone === 4){
          localStorage.setItem('Area', 1), tmp['tree-tab'].Bubbles = true
          player.wood = 2,
          player.tree = 0,
          player.island = 4, 
          player.water = 4,
          player.stone = 1
          player.Sprev = C2_LIST[0]
          player.prev = C2_LIST[0]
          player.East = -25,
          player.West = 25,
          player.North = -2,
          player.South = 2,
          player.Zone = 4,
          player.One = C1_LIST[player.water],
          player.Two = C2_LIST[player.wood],
          player.Three = C2_LIST[0],
          player.Four = C2_LIST[0],
          player.Five = C1_LIST[player.water],
          player.Six = C2_LIST[player.wood],
          player.Seven = C4_LIST[player.skin],
          player.Eight = C1_LIST[player.tree],
          player.Nine = C2_LIST[0],
          player.Ten = C2_LIST[0],
          player.Eleven = C2_LIST[player.wood],
          player.Twelve = C1_LIST[player.tree],
          player.Thirteen = C2_LIST[0],
          player.Fourteen = C1_LIST[player.tree],
          player.Fifteen = C2_LIST[0],
          player.Sixteen = C1_LIST[player.stone],
          player.Seventeen = C1_LIST[player.water],
          player.Eighteen = C2_LIST[0],
          player.Nineteen = C1_LIST[player.water],
          player.Twenty = C2_LIST[player.wood],
          player.Twentyone = C2_LIST[0],
          player.Twentytwo = C2_LIST[player.wood],
          player.Twentythree = C1_LIST[player.stone],
          player.Twentyfour = C1_LIST[player.stone],
          player.Twentyfive = C2_LIST[0],
          player.Twentysix = C2_LIST[player.wood],
          player.Twentyseven = C2_LIST[0],
          player.Twentyeight = C2_LIST[0],
          player.Twentynine = C2_LIST[0],
          player.Thirty = C1_LIST[player.water],
          player.Thirtyone = C1_LIST[player.tree],
          player.Thirtytwo = C1_LIST[player.tree],
          player.Thirtythree = C1_LIST[player.tree],
          player.Thirtyfour = C1_LIST[player.tree],
          player.Thirtyfive = C1_LIST[player.tree],
          player.Thirtysix = C1_LIST[player.tree],
          player.Thirtyseven = C1_LIST[player.tree],
          player.Thirtyeight = C1_LIST[player.tree],
          player.Thirtynine = C1_LIST[player.tree],
          player.Fourty = C1_LIST[player.stone],
          player.Fourtyone = C2_LIST[1],
          player.Fourtytwo = C1_LIST[2],
          player.Fourtythree = C1_LIST[2],
          player.Fourtyfour = C1_LIST[2],
          player.Fourtyfive = C1_LIST[2],
          player.Fourtysix = C1_LIST[2],
          player.Fourtyseven = C1_LIST[2],
          player.Fourtyeight = C1_LIST[2],
          player.Fourtynine = C1_LIST[2],
          player.Fifty = C2_LIST[1],
          player.L1 = C3_LIST[0],
          player.L2 = C3_LIST[2],
          player.L3 = C3_LIST[0],
          player.L4 = C3_LIST[0],
          player.L5 = C3_LIST[0],
          player.L6 = C3_LIST[0],
          player.L7 = C3_LIST[0],
          player.L8 = C3_LIST[0],
          player.L9 = C3_LIST[0],
          player.L10 = C3_LIST[0],
          player.L11 = C3_LIST[0],
          player.L12 = C3_LIST[2],
          player.F1 = C5_LIST[0],
          player.F2 = C5_LIST[0],
          player.F5 = C5_LIST[1]
          if (localStorage.getItem('log3') === '3') localStorage.setItem('log3', 1)
          player.Undo.length = 0
      save2()
          player.reset = false}

        if (player.reset == true && player.Zone === -1){
            player.Sprev = C2_LIST[5]
            player.prev = C2_LIST[5]
            player.East = -2,
                player.West = 2,
                player.North = -1,
                player.South = 1,
            player.Zone = -1,
            player.One = C1_LIST[player.stone],
            player.Two = C2_LIST[player.wood],
            player.Three = C2_LIST[5],
            player.Four = C2_LIST[5],
            player.Five = C2_LIST[5],
            player.Six = C2_LIST[5],
            player.Seven = C2_LIST[5],
            player.Eight = C1_LIST[player.stone],
            player.Nine = C2_LIST[5],
            player.Ten = C2_LIST[5],
            player.Eleven = C1_LIST[player.tree],
            player.Twelve = C1_LIST[player.tree],
            player.Thirteen = C1_LIST[player.tree],
            player.Fourteen = C2_LIST[player.wood],
            player.Fifteen = C1_LIST[player.tree],
            player.Sixteen = C2_LIST[player.wood],
            player.Seventeen = C1_LIST[player.tree],
            player.Eighteen = C2_LIST[player.wood],
            player.Nineteen = C1_LIST[player.tree],
            player.Twenty = C1_LIST[player.tree],
            player.Twentyone = C1_LIST[5]
            if (player.Letters.Letters[0] === 1) player.Twentytwo = C2_LIST[5]
            else player.Twentytwo = C2_LIST[8]
            player.Twentythree = C1_LIST[player.stone],
            player.Twentyfour = C2_LIST[5],
            player.Twentyfive = C1_LIST[player.stone],
            player.Twentysix = C2_LIST[5],
            player.Twentyseven = C1_LIST[player.stone],
            player.Twentyeight = C2_LIST[5],
            player.Twentynine = C1_LIST[player.stone],
            player.Thirty = C1_LIST[player.stone],
            player.Thirtyone = C1_LIST[player.tree],
            player.Thirtytwo = C1_LIST[player.tree],
            player.Thirtythree = C1_LIST[player.tree],
            player.Thirtyseven = C1_LIST[player.tree],
            player.Thirtyfive = C1_LIST[player.tree],
            player.Thirtysix = C2_LIST[5],
            player.Thirtyfour = C2_LIST[5],
            player.Thirtyeight = C2_LIST[5],
            player.Thirtynine = C1_LIST[player.tree],
            player.Fourty = C1_LIST[player.stone],
            player.Fourtyone = C2_LIST[5],
            player.Fourtytwo = C2_LIST[5],
            player.Fourtythree = C2_LIST[5],
            player.Fourtyfour = C2_LIST[5],
            player.Fourtyfive = C2_LIST[5],
            player.Fourtysix = C2_LIST[5],
            player.Fourtyseven = C2_LIST[5],
            player.Fourtyeight = C2_LIST[5],
            player.Fourtynine = C2_LIST[player.wood],
            player.Fifty = C4_LIST[player.skin],
            player.L1 = C3_LIST[0],
            player.L2 = C3_LIST[0],
            player.L3 = C3_LIST[0],
            player.L4 = C3_LIST[0],
            player.L5 = C3_LIST[0],
            player.L6 = C3_LIST[0],
            player.L7 = C3_LIST[0],
            player.L8 = C3_LIST[0],
            player.L9 = C3_LIST[0],
            player.L10 = C3_LIST[0],
            player.L11 = C3_LIST[0],
            player.L12 = C3_LIST[0],
            player.F1 = C5_LIST[0],
            player.F2 = C5_LIST[0],
            player.F5 = C5_LIST[2],
            player.Undo.length = 0
        save2()
            player.reset = false}

             if (player.reset == true && player.Zone === 2){
        if (player.reset == true && player.Zone === 2){
            player.Sprev = C2_LIST[player.floor]
            player.prev = C2_LIST[player.floor]
            player.East = 9,
                player.West = -9,
                player.North = 1,
                player.South = -1,
            player.Zone = 2,
            player.One = C1_LIST[player.tree],
        player.Two = C1_LIST[player.tree],
        player.Three = C1_LIST[player.tree],
        player.Four = C2_LIST[0],
        player.Five = C2_LIST[0],
        player.Six = C2_LIST[0],
        player.Seven = C2_LIST[0],
        player.Eight = C2_LIST[0],
        player.Nine = C1_LIST[player.water],
        player.Ten = C1_LIST[player.tree],
        player.Eleven = C2_LIST[0],
        player.Twelve = C1_LIST[player.tree],
        player.Thirteen = C1_LIST[player.tree],
        player.Fourteen = C2_LIST[0],
        player.Fifteen = C2_LIST[0],
        player.Sixteen = C2_LIST[0],
        player.Seventeen = C1_LIST[player.tree],
        player.Eighteen = C1_LIST[player.tree],
        player.Nineteen = C2_LIST[0],
        player.Twenty = C1_LIST[player.tree],
        player.Twentyone = C4_LIST[player.skinInverse],
        player.Twentytwo = C2_LIST[0],
        player.Twentythree = C2_LIST[0],
        player.Twentyfour = C2_LIST[0],
        player.Twentyfive = C2_LIST[0],
        player.Twentysix = C2_LIST[0],
        player.Twentyseven = C2_LIST[0],
        player.Twentyeight = C1_LIST[player.tree],
        player.Twentynine = C2_LIST[0],
        player.Thirty = C2_LIST[0],
        player.Thirtyone = C2_LIST[0],
        player.Thirtytwo = C1_LIST[player.tree],
        player.Thirtythree = C1_LIST[player.tree],
        player.Thirtyseven = C2_LIST[player.wood],
        player.Thirtyfive = C1_LIST[player.tree],
        player.Thirtysix = C2_LIST[0]
        if (localStorage.getItem('log') === '2') player.Thirtyfour = C2_LIST[player.wood]
        player.Thirtyeight = C1_LIST[player.tree],
        player.Thirtynine = C2_LIST[0],
        player.Fourty = C1_LIST[player.stone],
        player.Fourtyone = C1_LIST[player.tree],
        player.Fourtytwo = C1_LIST[player.tree],
        player.Fourtythree = C1_LIST[player.tree],
        player.Fourtyfour = C1_LIST[player.water],
        player.Fourtyfive = C2_LIST[0],
        player.Fourtysix = C2_LIST[0],
        player.Fourtyseven = C2_LIST[0],
        player.Fourtyeight = C2_LIST[0],
        player.Fourtynine = C1_LIST[player.tree],
        player.Fifty = C1_LIST[player.stone],
        player.L1 = C3_LIST[2],
        player.L2 = C3_LIST[1],
        player.L3 = C3_LIST[1],
        player.L4 = C3_LIST[1],
        player.L5 = C3_LIST[1],
        player.L6 = C3_LIST[1],
        player.L7 = C3_LIST[1],
        player.L8 = C3_LIST[1],
        player.L9 = C3_LIST[1],
        player.L10 = C3_LIST[1],
        player.L11 = C3_LIST[1],
        player.L12 = C3_LIST[0],
        player.F1 = C5_LIST[0],
        player.F2 = C5_LIST[0],
        player.F5 = C5_LIST[0]
        localStorage.setItem('log1', 1),
        player.Undo.length = 0
        if (localStorage.getItem('log') === '1') localStorage.setItem('prevTab', '1')
        save2()
    player.reset = false}}

        if (player.reset == true && player.Zone === 1){
            if (localStorage.getItem('prevZone') === null || localStorage.getItem('prevZone') === '1') player.East = 0, player.North = 0, player.South = 0
            localStorage.setItem('log', 2) 
            player.Sprev = C2_LIST[player.floor],
            player.prev = C2_LIST[player.floor],
        player.Zone = 1,
        player.One = C1_LIST[player.tree],
        player.Two = C1_LIST[player.tree],
        player.Three = C1_LIST[player.tree],
        player.Four = C1_LIST[player.tree],
        player.Five = C1_LIST[player.tree],
        player.Six = C1_LIST[player.tree],
        player.Seven = C1_LIST[player.tree],
        player.Eight = C1_LIST[player.tree],
        player.Nine = C1_LIST[player.tree],
        player.Ten = C1_LIST[player.tree],
        player.Eleven = C1_LIST[player.tree],
        player.Twelve = C2_LIST[0],
        player.Thirteen = C2_LIST[0],
        player.Fourteen = C2_LIST[0],
        player.Fifteen = C2_LIST[0],
        player.Sixteen = C1_LIST[player.water],
        player.Seventeen = C2_LIST[0],
        player.Eighteen = C2_LIST[0],
        player.Nineteen = C2_LIST[0],
        player.Twenty = C2_LIST[0],
        player.Twentyone = C1_LIST[player.tree],
        player.Twentytwo = C1_LIST[player.tree],
        player.Twentythree = C2_LIST[player.wood],
        player.Twentyfour = C2_LIST[0],
        player.Twentyfive = C1_LIST[player.stone],
        player.Twentysix = C1_LIST[player.stone],
        player.Twentyseven = C1_LIST[player.tree],
        player.Twentyeight = C2_LIST[0],
        player.Twentynine = C2_LIST[0],
        player.Thirty = C2_LIST[0],
        player.Thirtyone = C1_LIST[player.tree],
        player.Thirtytwo = C4_LIST[player.skinInverse],
        player.Thirtythree = C2_LIST[0],
        player.Thirtyfour = C1_LIST[player.stone],
        player.Thirtyfive = C1_LIST[player.stone],
        player.Thirtysix = C2_LIST[player.island],
        player.Thirtyseven = C1_LIST[player.tree],
        player.Thirtyeight = C1_LIST[player.tree],
        player.Thirtynine = C1_LIST[player.tree],
        player.Fourty = C2_LIST[0],
        player.Fourtyone = C1_LIST[player.stone],
        player.Fourtytwo = C1_LIST[player.stone],
        player.Fourtythree = C1_LIST[player.stone],
        player.Fourtyfour = C1_LIST[player.stone],
        player.Fourtyfive = C1_LIST[player.stone],
        player.Fourtysix = C1_LIST[player.stone],
        player.Fourtyseven = C1_LIST[player.stone],
        player.Fourtyeight = C1_LIST[player.stone],
        player.Fourtynine = C1_LIST[player.tree],
        player.Fifty = C1_LIST[player.tree]
        player.L1 = C3_LIST[0],
        player.L2 = C3_LIST[0],
        player.L3 = C3_LIST[0],
        player.L4 = C3_LIST[0],
        player.L5 = C3_LIST[0],
        player.L6 = C3_LIST[0],
        player.L7 = C3_LIST[0],
        player.L8 = C3_LIST[0],
        player.L9 = C3_LIST[1],
        player.L10 = C3_LIST[1],
        player.L11 = C3_LIST[1],
        player.L12 = C3_LIST[2],
        player.F1 = C5_LIST[0],
        player.F2 = C5_LIST[2],
        player.F5 = C5_LIST[0],
        player.Undo.length = 0
        save2()
        player.reset = false}

        if (player.Zone === 7 && player.intervaeae == true && player.timeX >= 2){
          if (C4_LIST.includes(player.Ten)){
                localStorage.setItem('prevZone', 7)
                player.Zone = 7
                  save1()
                player.Zone = 5
                import1()}}

        if (player.Zone === 5 && player.intervaea == true && player.timeX >= 2){
          if (C4_LIST.includes(player.Fifty)){
                save1()
                localStorage.setItem('prevZone', 5)
                if (player.Zones[6] !== undefined) return  player.Zone = 7, import1()
                player.Sprev = C2_LIST[1]
    player.prev = C2_LIST[1]
    player.East = -22,
    player.West = 22,
    player.North = -12,
    player.South = 12,
    player.Zone = 7,
    player.One = C1_LIST[player.stone],
    player.Two = C2_LIST[player.wood],
    player.Three = C2_LIST[1],
    player.Four = C1_LIST[2],
    player.Five = C1_LIST[2],
    player.Six = C2_LIST[1],
    player.Seven = C2_LIST[1],
    player.Eight = C1_LIST[player.stone],
    player.Nine = C2_LIST[player.wood],
    player.Ten = C4_LIST[player.skin],
    player.Eleven = C1_LIST[player.tree],
    player.Twelve = C1_LIST[player.tree],
    player.Thirteen = C1_LIST[player.tree],
    player.Fourteen = C2_LIST[1],
    player.Fifteen = C1_LIST[2],
    player.Sixteen = C2_LIST[player.wood],
    player.Seventeen = C1_LIST[2],
    player.Eighteen = C2_LIST[player.wood],
    player.Nineteen = C1_LIST[player.tree],
    player.Twenty = C1_LIST[player.tree],
    player.Twentyone = C1_LIST[5],
    player.Twentytwo = C2_LIST[8],
    player.Twentythree = C1_LIST[player.stone],
    player.Twentyfour = C2_LIST[player.wood],
    player.Twentyfive = C1_LIST[player.stone],
    player.Twentysix = C1_LIST[2],
    player.Twentyseven = C1_LIST[player.stone],
    player.Twentyeight = C2_LIST[player.wood],
    player.Twentynine = C1_LIST[player.stone],
    player.Thirty = C1_LIST[player.stone],
    player.Thirtyone = C1_LIST[player.tree],
    player.Thirtytwo = C1_LIST[player.tree],
    player.Thirtythree = C1_LIST[player.tree],
    player.Thirtyseven = C1_LIST[player.tree],
    player.Thirtyfive = C1_LIST[player.tree],
    player.Thirtysix = C2_LIST[player.wood],
    player.Thirtyfour = C2_LIST[1],
    player.Thirtyeight = C1_LIST[2],
    player.Thirtynine = C1_LIST[player.tree],
    player.Fourty = C1_LIST[player.stone],
    player.Fourtyone = C2_LIST[1],
    player.Fourtytwo = C2_LIST[1],
    player.Fourtythree = C2_LIST[1],
    player.Fourtyfour = C2_LIST[1],
    player.Fourtyfive = C1_LIST[2],
    player.Fourtysix = C1_LIST[2],
    player.Fourtyseven = C1_LIST[2],
    player.Fourtyeight = C2_LIST[1],
    player.Fourtynine = C2_LIST[player.wood],
    player.Fifty = C2_LIST[1],
    player.L1 = C3_LIST[0],
    player.L2 = C3_LIST[0],
    player.L3 = C3_LIST[0],
    player.L4 = C3_LIST[0],
    player.L5 = C3_LIST[0],
    player.L6 = C3_LIST[0],
    player.L7 = C3_LIST[0],
    player.L8 = C3_LIST[0],
    player.L9 = C3_LIST[0],
    player.L10 = C3_LIST[0],
    player.L11 = C3_LIST[0],
    player.L12 = C3_LIST[0],
    player.F1 = C5_LIST[0],
    player.F2 = C5_LIST[0],
    player.F5 = C5_LIST[0]
    save2()}}

        if (player.Zone === 6 && player.intervae == true && player.timeX >= 2){
          if (C4_LIST.includes(player.Twenty)){
                localStorage.setItem('prevZone', 6)
                player.Zone = 6
                  save1()
                player.Zone = 5
                import1()}}

        if (player.Zone === 5 && player.Eleven === C4_LIST[player.skin] && player.Sdir === 1){
          if (C4_LIST.includes(player.Eleven)){
                save1()
                localStorage.setItem('prevZone', 5)
                if (player.Zones[5] !== undefined) return  player.Zone = 6,  setTimeout(import1, 150)
                else setTimeout(zone6, 150)
             }}

        if (player.Zone === 5 && player.intervaeae == true && player.timeX >= 2){
          if (C4_LIST.includes(player.One) || C4_LIST.includes(player.Nine) && localStorage.getItem('No') !== '1' || C4_LIST.includes(player.Ten) || C4_LIST.includes(player.F1)){
            if (C4_LIST.includes(player.One)) localStorage.setItem('prev2', 1)
            if (C4_LIST.includes(player.Nine) && localStorage.getItem('No') !== '1') localStorage.setItem('prev2', 2)
            if (C4_LIST.includes(player.Ten)) localStorage.setItem('prev2', 3)
            if (C4_LIST.includes(player.F1)) localStorage.setItem('prev2', 4)
                localStorage.setItem('prevZone', 5)
                player.Zone = 5
                  save1()
                player.Zone = 4
                import1()}}

        if (player.Zone === 4 && player.intervaea == true && player.timeX >= 2){
          if (C4_LIST.includes(player.Fourtyone) || C4_LIST.includes(player.F5)){
            if (C4_LIST.includes(player.Fourtyone)) localStorage.setItem('prev2', 1)
            if (C4_LIST.includes(player.F5)) localStorage.setItem('prev2', 4)
                save1()
                localStorage.setItem('prevZone', 4)
                if (player.Zones[4] !== undefined) return  player.Zone = 5, import1()
                player.Sprev = C2_LIST[1]
    player.prev = C2_LIST[1]
    player.East = -31,
    player.West = 31,
    player.North = -7,
    player.South = 7,
    player.Zone = 5,
    player.One = C4_LIST[player.skin],
    player.Two = C1_LIST[2],
    player.Three = C1_LIST[2],
    player.Four = C1_LIST[2],
    player.Five = C1_LIST[2],
    player.Six = C1_LIST[2],
    player.Seven = C1_LIST[2],
    player.Eight = C1_LIST[player.tree],
    player.Nine = C1_LIST[2],
    player.Ten = C1_LIST[2],
    player.Eleven = C1_LIST[2],
    player.Twelve = C1_LIST[2],
    player.Thirteen = C1_LIST[2],
    player.Fourteen = C1_LIST[2],
    player.Fifteen = C1_LIST[2],
    player.Sixteen = C1_LIST[2],
    player.Seventeen = C1_LIST[2],
    player.Eighteen = C1_LIST[2],
    player.Nineteen = C1_LIST[2],
    player.Twenty = C1_LIST[player.stone],
    player.Twentyone = C1_LIST[2],
    player.Twentytwo = C1_LIST[2],
    player.Twentythree = C1_LIST[2],
    player.Twentyfour = C1_LIST[2],
    player.Twentyfive = C1_LIST[2],
    player.Twentysix = C1_LIST[player.tree],
    player.Twentyseven = C1_LIST[2],
    player.Twentyeight = C1_LIST[2],
    player.Twentynine = C1_LIST[2],
    player.Thirty = C1_LIST[player.stone],
    player.Thirtyone = C1_LIST[2],
    player.Thirtytwo = C1_LIST[player.tree],
    player.Thirtythree = C1_LIST[2],
    player.Thirtyfour = C1_LIST[2],
    player.Thirtyfive = C1_LIST[2],
    player.Thirtysix = C1_LIST[2],
    player.Thirtyseven = C1_LIST[player.tree],
    player.Thirtyeight = C1_LIST[2],
    player.Thirtynine = C1_LIST[2],
    player.Fourty = C1_LIST[player.stone],
    player.Fourtyone = C1_LIST[2],
    player.Fourtytwo = C1_LIST[2],
    player.Fourtythree = C1_LIST[2],
    player.Fourtyfour = C1_LIST[2],
    player.Fourtyfive = C1_LIST[2],
    player.Fourtysix = C1_LIST[2],
    player.Fourtyseven = C1_LIST[player.tree],
    player.Fourtyeight = C1_LIST[2],
    player.Fourtynine = C1_LIST[2],
    player.Fifty = C1_LIST[player.stone],
    player.L1 = C3_LIST[0],
    player.L2 = C3_LIST[0],
    player.L3 = C3_LIST[0],
    player.L4 = C3_LIST[0],
    player.L5 = C3_LIST[0],
    player.L6 = C3_LIST[0],
    player.L7 = C3_LIST[0],
    player.L8 = C3_LIST[0],
    player.L9 = C3_LIST[0],
    player.L10 = C3_LIST[0],
    player.L11 = C3_LIST[2],
    player.L12 = C3_LIST[0],
    player.F1 = C5_LIST[1],
    player.F2 = C5_LIST[1],
    player.F5 = C5_LIST[0]
    save2()}}

        if (player.Zone === 4 && player.intervaeae == true && player.timeX >= 2){
          if (C4_LIST.includes(player.Seven)){
                localStorage.setItem('prevZone', 4)
                player.Zone = 4
                  save1()
                player.Zone = 3
                import1()}}

        if (player.Zone === 3 && player.intervaea == true && player.timeX >= 2){
          if (C4_LIST.includes(player.Fourtyseven)){
                save1()
                localStorage.setItem('prevZone', 3)
                if (player.Zones[3] !== undefined) return  player.Zone = 4, import1()
                player.Sprev = C2_LIST[0]
    player.prev = C2_LIST[0]
    player.East = 25,
    player.West = -25,
    player.North = -2,
    player.South = 2,
    player.Zone = 4,
    player.One = C1_LIST[player.water],
    player.Two = C2_LIST[player.wood],
    player.Three = C2_LIST[0],
    player.Four = C2_LIST[0],
    player.Five = C1_LIST[player.water],
    player.Six = C2_LIST[player.wood],
    player.Seven = C4_LIST[player.skin],
    player.Eight = C1_LIST[player.tree],
    player.Nine = C2_LIST[0],
    player.Ten = C2_LIST[0],
    player.Eleven = C2_LIST[player.wood],
    player.Twelve = C1_LIST[player.tree],
    player.Thirteen = C2_LIST[0],
    player.Fourteen = C1_LIST[player.tree],
    player.Fifteen = C2_LIST[0],
    player.Sixteen = C1_LIST[player.stone]
    if (localStorage.getItem('prevTab1') !== '1') player.Seventeen = C1_LIST[player.water]
    else player.Seventeen = C2_LIST[player.island]
    player.Eighteen = C2_LIST[0],
    player.Nineteen = C1_LIST[player.water],
    player.Twenty = C2_LIST[player.wood],
    player.Twentyone = C2_LIST[0],
    player.Twentytwo = C2_LIST[player.wood],
    player.Twentythree = C1_LIST[player.stone],
    player.Twentyfour = C1_LIST[player.stone],
    player.Twentyfive = C2_LIST[0],
    player.Twentysix = C2_LIST[player.wood],
    player.Twentyseven = C2_LIST[0],
    player.Twentyeight = C2_LIST[0],
    player.Twentynine = C2_LIST[0],
    player.Thirty = C1_LIST[player.water],
    player.Thirtyone = C1_LIST[player.tree],
    player.Thirtytwo = C1_LIST[player.tree],
    player.Thirtythree = C1_LIST[player.tree],
    player.Thirtyfour = C1_LIST[player.tree],
    player.Thirtyfive = C1_LIST[player.tree],
    player.Thirtysix = C1_LIST[player.tree],
    player.Thirtyseven = C1_LIST[player.tree],
    player.Thirtyeight = C1_LIST[player.tree],
    player.Thirtynine = C1_LIST[player.tree],
    player.Fourty = C1_LIST[player.stone],
    player.Fourtyone = C2_LIST[1],
    player.Fourtytwo = C1_LIST[2],
    player.Fourtythree = C1_LIST[2],
    player.Fourtyfour = C1_LIST[2],
    player.Fourtyfive = C1_LIST[2],
    player.Fourtysix = C1_LIST[2],
    player.Fourtyseven = C1_LIST[2],
    player.Fourtyeight = C1_LIST[2],
    player.Fourtynine = C1_LIST[2],
    player.Fifty = C2_LIST[1],
    player.L1 = C3_LIST[0],
    player.L2 = C3_LIST[2],
    player.L3 = C3_LIST[0],
    player.L4 = C3_LIST[0],
    player.L5 = C3_LIST[0],
    player.L6 = C3_LIST[0],
    player.L7 = C3_LIST[0],
    player.L8 = C3_LIST[0],
    player.L9 = C3_LIST[0],
    player.L10 = C3_LIST[0],
    player.L11 = C3_LIST[0],
    player.L12 = C3_LIST[2],
    player.F1 = C5_LIST[0],
    player.F2 = C5_LIST[0],
    player.F5 = C5_LIST[1]
    save2()}}

        if (player.Zone === 3 && player.interva == true && player.timeX >= 2){
          if (C4_LIST.includes(player.Twentyone)){
                localStorage.setItem('prevZone', 3)
                player.Zone = 3
                  save1()
                player.Zone = 2
                import1()}}
                
        if (player.Zone === 2 && player.intervae == true && player.timeX >= 2){
          if (C4_LIST.includes(player.Thirty)){
                save1()
                localStorage.setItem('prevZone', 2)
                if (player.Zones[2] !== undefined) return  player.Zone = 3, import1()
                player.Sprev = C2_LIST[player.floor]
                player.prev = C2_LIST[player.floor]
                player.East = 19,
                    player.West = -19,
                    player.North = 1,
                    player.South = -1,
                player.Zone = 3,
                player.One = C1_LIST[player.tree],
                player.Two = C1_LIST[player.tree],
                player.Three = C1_LIST[player.tree],
                player.Four = C2_LIST[0],
                player.Five = C1_LIST[player.tree],
                player.Six = C1_LIST[player.tree],
                player.Seven = C2_LIST[0],
                player.Eight = C1_LIST[player.tree],
                player.Nine = C1_LIST[player.tree],
                player.Ten = C1_LIST[player.tree],
                player.Eleven = C1_LIST[player.tree],
                player.Twelve = C1_LIST[player.tree],
                player.Thirteen = C2_LIST[player.wood],
                player.Fourteen = C2_LIST[0],
                player.Fifteen = C2_LIST[player.wood],
                player.Sixteen = C2_LIST[player.wood],
                player.Seventeen = C2_LIST[0],
                player.Eighteen = C2_LIST[0],
                player.Nineteen = C2_LIST[player.wood],
                player.Twenty = C2_LIST[player.wood],
                player.Twentyone = C4_LIST[player.skinInverse],
                player.Twentytwo = C2_LIST[0],
                player.Twentythree = C2_LIST[0],
                player.Twentyfour = C2_LIST[0],
                player.Twentyfive = C1_LIST[player.tree],
                player.Twentysix = C1_LIST[player.tree],
                player.Twentyseven = C2_LIST[0],
                player.Twentyeight = C1_LIST[player.tree],
                player.Twentynine = C1_LIST[player.tree],
                player.Thirty = C1_LIST[player.tree],
                player.Thirtyone = C2_LIST[0],
                player.Thirtytwo = C2_LIST[0],
                player.Thirtythree = C2_LIST[0],
                player.Thirtyfour = C2_LIST[0],
                player.Thirtyfive = C2_LIST[0],
                player.Thirtysix = C1_LIST[player.tree],
                player.Thirtyseven = C2_LIST[0],
                player.Thirtyeight = C1_LIST[player.tree],
                player.Thirtynine = C1_LIST[player.tree],
                player.Fourty = C1_LIST[player.tree],
                player.Fourtyone = C1_LIST[player.tree],
                player.Fourtytwo = C2_LIST[0],
                player.Fourtythree = C1_LIST[player.tree],
                player.Fourtyfour = C2_LIST[0],
                player.Fourtyfive = C1_LIST[player.tree],
                player.Fourtysix = C1_LIST[player.tree],
                player.Fourtyseven = C1_LIST[player.water],
                player.Fourtyeight = C1_LIST[player.tree],
                player.Fourtynine = C1_LIST[player.tree],
                player.Fifty = C1_LIST[player.tree]
                player.L1 = C3_LIST[0],
                player.L2 = C3_LIST[0],
                player.L3 = C3_LIST[0],
                player.L4 = C3_LIST[0],
                player.L5 = C3_LIST[0],
                player.L6 = C3_LIST[0],
                player.L7 = C3_LIST[0],
                player.L8 = C3_LIST[2],
                player.L9 = C3_LIST[0],
                player.L10 = C3_LIST[0],
                player.L11 = C3_LIST[0],
                player.L12 = C3_LIST[0],
                player.F1 = C5_LIST[0],
                player.F2 = C5_LIST[0],
                player.F5 = C5_LIST[0]
                save2()}}

                if (player.Zone === 1 && player.interva == true && player.timeX >= 2){
                  if (C4_LIST.includes(player.Fourtyone)){
                        save1()
                        localStorage.setItem('prevZone', 1)
                        if (player.Zones[-1] !== undefined) return  player.Zone = -1, import1()
                        player.Sprev = C2_LIST[5]
            player.prev = C2_LIST[5]
            player.East = -2,
            player.West = 2,
            player.North = -1,
            player.South = 1,
            player.Zone = -1,
            player.One = C1_LIST[player.stone],
            player.Two = C2_LIST[player.wood],
            player.Three = C2_LIST[5],
            player.Four = C2_LIST[5],
            player.Five = C2_LIST[5],
            player.Six = C2_LIST[5],
            player.Seven = C2_LIST[5],
            player.Eight = C1_LIST[player.stone],
            player.Nine = C2_LIST[5],
            player.Ten = C2_LIST[5],
            player.Eleven = C1_LIST[player.tree],
            player.Twelve = C1_LIST[player.tree],
            player.Thirteen = C1_LIST[player.tree],
            player.Fourteen = C2_LIST[player.wood],
            player.Fifteen = C1_LIST[player.tree],
            player.Sixteen = C2_LIST[player.wood],
            player.Seventeen = C1_LIST[player.tree],
            player.Eighteen = C2_LIST[player.wood],
            player.Nineteen = C1_LIST[player.tree],
            player.Twenty = C1_LIST[player.tree],
            player.Twentyone = C1_LIST[5],
            player.Twentytwo = C2_LIST[8],
            player.Twentythree = C1_LIST[player.stone],
            player.Twentyfour = C2_LIST[5],
            player.Twentyfive = C1_LIST[player.stone],
            player.Twentysix = C2_LIST[5],
            player.Twentyseven = C1_LIST[player.stone],
            player.Twentyeight = C2_LIST[5],
            player.Twentynine = C1_LIST[player.stone],
            player.Thirty = C1_LIST[player.stone],
            player.Thirtyone = C1_LIST[player.tree],
            player.Thirtytwo = C1_LIST[player.tree],
            player.Thirtythree = C1_LIST[player.tree],
            player.Thirtyseven = C1_LIST[player.tree],
            player.Thirtyfive = C1_LIST[player.tree],
            player.Thirtysix = C2_LIST[5],
            player.Thirtyfour = C2_LIST[5],
            player.Thirtyeight = C2_LIST[5],
            player.Thirtynine = C1_LIST[player.tree],
            player.Fourty = C1_LIST[player.stone],
            player.Fourtyone = C2_LIST[5],
            player.Fourtytwo = C2_LIST[5],
            player.Fourtythree = C2_LIST[5],
            player.Fourtyfour = C2_LIST[5],
            player.Fourtyfive = C2_LIST[5],
            player.Fourtysix = C2_LIST[5],
            player.Fourtyseven = C2_LIST[5],
            player.Fourtyeight = C2_LIST[5],
            player.Fourtynine = C2_LIST[player.wood],
            player.Fifty = C4_LIST[player.skin],
            player.L1 = C3_LIST[0],
            player.L2 = C3_LIST[0],
            player.L3 = C3_LIST[0],
            player.L4 = C3_LIST[0],
            player.L5 = C3_LIST[0],
            player.L6 = C3_LIST[0],
            player.L7 = C3_LIST[0],
            player.L8 = C3_LIST[0],
            player.L9 = C3_LIST[0],
            player.L10 = C3_LIST[0],
            player.L11 = C3_LIST[0],
            player.L12 = C3_LIST[0],
            player.F1 = C5_LIST[0],
            player.F2 = C5_LIST[0],
            player.F5 = C5_LIST[2]
            save2()}}


        if (player.Zone === 1 && player.intervae == true && player.timeX >= 2){
      if (C4_LIST.includes(player.Fourty) || C4_LIST.includes(player.Thirty) || C4_LIST.includes(player.Twenty) || C4_LIST.includes(player.L11)){
            save1()
            localStorage.setItem('prevZone', 1)
          if (C4_LIST.includes(player.Fourty)) localStorage.setItem('prev', 1)
          if (C4_LIST.includes(player.Thirty)) localStorage.setItem('prev', 2)
          if (C4_LIST.includes(player.Twenty)) localStorage.setItem('prev', 3)
          if (C4_LIST.includes(player.L11)) localStorage.setItem('prev', 4)

            if (player.Zones[1] !== undefined) return player.Zone = 2, import1()
          if (C4_LIST.includes(player.Fourty)) player.Thirtyone = C4_LIST[player.skinInverse]
            else player.Thirtyone = C2_LIST[0]
          if (C4_LIST.includes(player.Thirty)) player.Twentyone = C4_LIST[player.skinInverse]
            else player.Twentyone = C2_LIST[0]
          if (C4_LIST.includes(player.Twenty)) player.Eleven = C4_LIST[player.skinInverse]
            else player.Eleven = C2_LIST[0]
        player.Sprev = C2_LIST[player.floor]
            player.prev = C2_LIST[player.floor]
            player.East += 1,
                player.West -= 1,
            player.Zone = 2,
            player.One = C1_LIST[player.tree],
        player.Two = C1_LIST[player.tree],
        player.Three = C1_LIST[player.tree],
        player.Four = C2_LIST[0],
        player.Five = C2_LIST[0],
        player.Six = C2_LIST[0],
        player.Seven = C2_LIST[0],
        player.Eight = C2_LIST[0],
        player.Nine = C1_LIST[player.water],
        player.Ten = C1_LIST[player.tree],
        player.Twelve = C1_LIST[player.tree],
        player.Thirteen = C1_LIST[player.tree],
        player.Fourteen = C2_LIST[0],
        player.Fifteen = C2_LIST[0],
        player.Sixteen = C2_LIST[0],
        player.Seventeen = C1_LIST[player.tree],
        player.Eighteen = C1_LIST[player.tree],
        player.Nineteen = C2_LIST[0],
        player.Twenty = C1_LIST[player.tree],
        player.Twentytwo = C2_LIST[0],
        player.Twentythree = C2_LIST[0],
        player.Twentyfour = C2_LIST[0],
        player.Twentyfive = C2_LIST[0],
        player.Twentysix = C2_LIST[0],
        player.Twentyseven = C2_LIST[0],
        player.Twentyeight = C1_LIST[player.tree],
        player.Twentynine = C2_LIST[0],
        player.Thirty = C2_LIST[0],
        player.Thirtytwo = C1_LIST[player.tree],
        player.Thirtythree = C1_LIST[player.tree],
        player.Thirtyseven = C2_LIST[player.wood],
        player.Thirtyfive = C1_LIST[player.tree],
        player.Thirtysix = C2_LIST[0]
        player.Thirtyfour = C2_LIST[player.wood]
        player.Thirtyeight = C1_LIST[player.tree],
        player.Thirtynine = C2_LIST[0],
        player.Fourty = C1_LIST[player.stone],
        player.Fourtyone = C1_LIST[player.tree],
        player.Fourtytwo = C1_LIST[player.tree],
        player.Fourtythree = C1_LIST[player.tree],
        player.Fourtyfour = C1_LIST[player.water],
        player.Fourtyfive = C2_LIST[0],
        player.Fourtysix = C2_LIST[0],
        player.Fourtyseven = C2_LIST[0],
        player.Fourtyeight = C2_LIST[0],
        player.Fourtynine = C1_LIST[player.tree],
        player.Fifty = C1_LIST[player.stone]
        player.L1 = C3_LIST[2],
        player.L2 = C3_LIST[1],
        player.L3 = C3_LIST[1],
        player.L4 = C3_LIST[1],
        player.L5 = C3_LIST[1],
        player.L6 = C3_LIST[1],
        player.L7 = C3_LIST[1],
        player.L8 = C3_LIST[1],
        player.L9 = C3_LIST[1],
        player.L10 = C3_LIST[1],
        player.L11 = C3_LIST[1],
        player.L12 = C3_LIST[0]
        player.F1 = C5_LIST[0],
        player.F2 = C5_LIST[0],
        player.F5 = C5_LIST[0]
        save2()}}

        if (player.Zone === -1 && player.intervae == true && player.timeX >= 2){
          if (C4_LIST.includes(player.Fifty)){
                player.Zone = -1
                localStorage.setItem('prevZone', -1)
                  save1()
                player.Zone = 1
                localStorage.setItem('prev1', 5)
                import1()}
            }
        

        if (player.Zone === 2 && player.interva == true && player.timeX >= 2){
          if (C4_LIST.includes(player.Twentyone) || C4_LIST.includes(player.Eleven) || C4_LIST.includes(player.Thirtyone) || C4_LIST.includes(player.L2)){
                player.Zone = 2
                localStorage.setItem('prevZone', 2)
                  save1()
            
                if (C4_LIST.includes(player.Thirtyone)) localStorage.setItem('prev1', 1)
                if (C4_LIST.includes(player.Twentyone)) localStorage.setItem('prev1', 2)
                 if (C4_LIST.includes(player.Eleven)) localStorage.setItem('prev1', 3)
                if (C4_LIST.includes(player.L2)) localStorage.setItem('prev1', 4)
                player.Zone = 1
                import1()}
            }
        }
})

function zone6() {
  player.Sprev = C2_LIST[1]
  player.prev = C2_LIST[1]
  player.East = -32,
  player.West = 32,
  player.North = -8,
  player.South = 8,
  player.Zone = 6,
  player.One = C2_LIST[1],
  player.Two = C1_LIST[player.tree],
  player.Three = C2_LIST[1],
  player.Four = C2_LIST[1],
  player.Five = C1_LIST[player.tree],
  player.Six = C2_LIST[1],
  player.Seven = C2_LIST[1],
  player.Eight = C1_LIST[player.tree],
  player.Nine = C2_LIST[1],
  player.Ten = C2_LIST[1],
  player.Eleven = C2_LIST[1],
  player.Twelve = C1_LIST[2],
  player.Thirteen = C2_LIST[1],
  player.Fourteen = C2_LIST[player.wood],
  player.Fifteen = C1_LIST[2],
  player.Sixteen = C2_LIST[player.wood],
  player.Seventeen = C2_LIST[1],
  player.Eighteen = C1_LIST[2],
  player.Nineteen = C2_LIST[player.wood],
  player.Twenty = C4_LIST[player.skinInverse],
  player.Twentyone = C1_LIST[player.water],
  player.Twentytwo = C1_LIST[player.tree],
  player.Twentythree = C1_LIST[player.tree],
  player.Twentyfour = C1_LIST[2],
  player.Twentyfive = C1_LIST[player.tree],
  player.Twentysix = C1_LIST[2],
  player.Twentyseven = C1_LIST[player.tree],
  player.Twentyeight = C1_LIST[player.tree],
  player.Twentynine = C1_LIST[2],
  player.Thirty = C1_LIST[player.tree],
  player.Thirtyone = C1_LIST[player.water],
  player.Thirtytwo = C1_LIST[2],
  player.Thirtythree = C2_LIST[1],
  player.Thirtyfour = C2_LIST[1],
  player.Thirtyfive = C1_LIST[2],
  player.Thirtysix = C2_LIST[1],
  player.Thirtyseven = C2_LIST[player.wood],
  player.Thirtyeight = C1_LIST[2],
  player.Thirtynine = C2_LIST[player.wood],
  player.Fourty = C2_LIST[1],
  player.Fourtyone = C1_LIST[player.water],
  player.Fourtytwo = C1_LIST[player.tree],
  player.Fourtythree = C2_LIST[1],
  player.Fourtyfour = C2_LIST[1],
  player.Fourtyfive = C1_LIST[player.tree],
  player.Fourtysix = C2_LIST[1],
  player.Fourtyseven = C2_LIST[1],
  player.Fourtyeight = C1_LIST[player.tree],
  player.Fourtynine = C2_LIST[1],
  player.Fifty = C2_LIST[1],
  player.L1 = C3_LIST[0],
  player.L2 = C3_LIST[0],
  player.L3 = C3_LIST[0],
  player.L4 = C3_LIST[0],
  player.L5 = C3_LIST[0],
  player.L6 = C3_LIST[0],
  player.L7 = C3_LIST[0],
  player.L8 = C3_LIST[0],
  player.L9 = C3_LIST[0],
  player.L10 = C3_LIST[0],
  player.L11 = C3_LIST[0],
  player.L12 = C3_LIST[0],
  player.F1 = C5_LIST[0],
	player.F2 = C5_LIST[2],
	player.F5 = C5_LIST[0]
  save2()
}
