addLayer("Skins", {
    startData() {
        return {
            unlocked: false,
            points: new Decimal(0),
            Robber: false,
        }
    },
    name: "Skins", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Sk", // This appears on the layer's node. Default is the id with the first letter capitalized

    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "prestige points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },

    layerShown(){return true},

    achievements: {
        11: {
            tooltip(){if (options.Lang === true) return player.name + " is on a symbolenture."
        else return player.name + " 踏上了符号冒险。"},
        name() {if(options.Lang === true) return "A symbol on a symbolenture."
        else return "一个符号踏上了符号冒险。"},
            textStyle: { "color": "#000000" },
            componentStyle() {return {"background-size": "100% 100%", "background-position": "center center", "border-color": "#008000"}},
            image() { if (hasAchievement('Skins', 11)) return "https://i.postimg.cc/vT0sB0bX/Slate.png"
        else return "https://i.postimg.cc/9fwcMztv/pixil-frame-0-3-1.png"}, //BASE IMAGE FRAME
            done() { return player.skin === 0 && player.skinInverse === 1},
            on() { if (player.skin === 0 && player.skinInverse === 1) return true
            else return false},
            onClick(){
                if (hasAchievement('Skins', 11)) player.skin = 0, player.skinInverse = 1, player.reset = true
            }
        },
        12: {
            tooltip() {if(hasAchievement('Skins', 12) && options.Lang === true) return "Gerdio: The Forest Of Monotonous Desolation"
        else if (hasAchievement('Skins', 12) && options.Lang === false) return "Gerdio: 荒凉单调之林"},
        name() {if(options.Lang === true) return "Gerdio: The Forest Of Monotonous Desolation"
        else return "Gerdio: 荒凉单调之林"},
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%", "background-position": "center center"},
            done() { return player.Zone === -1 && C4_LIST.includes(player.Twentytwo)},
            on() { if (player.skin === 2 && player.skinInverse === 3) return true
            else return false},
            image() { if (hasAchievement('Skins', 12)) return 'https://i.postimg.cc/m2mtPGw3/Slate-1.png'
            else return 'https://i.postimg.cc/9fwcMztv/pixil-frame-0-3-1.png'},
            onClick(){
                if (hasAchievement('Skins', 12)) player.skin = 2, player.skinInverse = 3, player.reset = true
            }
        },
        13: {
            tooltip() {if(hasAchievement('Skins', 13) && options.Lang === true) return "Clowned"
            else if (hasAchievement('Skins', 13) && options.Lang === false) return "知名的"},
        name() {if(options.Lang === true) return "Clowned"
        else return "知名的"},
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%", "background-position": "center center"},
            done() { return player.Zone === -1 && C4_LIST.includes(player.Nine)},
            on() { if (player.skin === 4 && player.skinInverse === 5) return true
            else return false},
            image() { if (hasAchievement('Skins', 13)) return 'https://i.postimg.cc/8zg8hZby/Slate.png'
            else return 'https://i.postimg.cc/9fwcMztv/pixil-frame-0-3-1.png'},
            onClick(){
                if (hasAchievement('Skins', 13)) player.skin = 4, player.skinInverse = 5, player.reset = true
            }
        },
        14: {
            tooltip() {if(hasAchievement('Skins', 14) && options.Lang === true) return "Ratio Robber"
            else if (hasAchievement('Skins', 14) && options.Lang === false) return "比例强盗"},
            name() {if(options.Lang === true) return "Ratio Robber"
            else return "比例强盗"},
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%", "background-position": "center center"},
            done() { return player.Skins.Robber == true},
            on() { if (player.skin === 6 && player.skinInverse === 7) return true
            else return false},
            image() { if (hasAchievement('Skins', 14)) return 'https://i.postimg.cc/65YjQzm2/Slate-1.png'
            else return 'https://i.postimg.cc/9fwcMztv/pixil-frame-0-3-1.png'},
            onClick(){
                if (hasAchievement('Skins', 14)) player.skin = 6, player.skinInverse = 7, player.reset = true
            }
        },
        15: {
            tooltip() {if(hasAchievement('Skins', 15) && options.Lang === true) return `"yeah, it's not well coded, Bilboy's done extremely impressive work for not knowing basic coding"`
            else if (hasAchievement('Skins', 15) && options.Lang === false) return `"对，这玩意没被好好编写。对于不懂基础编程的Bilboy（原作者）来说这玩意做的还挺不错的。"`},
            name() {if(options.Lang === true) return "Globalist"
            else return "全球主义者"},
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%", "background-position": "center center"},
            done() { return player.name.toLowerCase() === 'Escapee'.toLowerCase()},
            on() { if (player.skin === 8 && player.skinInverse === 9) return true
            else return false},
            image() { if (hasAchievement('Skins', 15)) return 'https://i.postimg.cc/wv5v51CP/Slate-2.png'
            else return 'https://i.postimg.cc/9fwcMztv/pixil-frame-0-3-1.png'},
            onClick(){
                if (hasAchievement('Skins', 15)) player.skin = 8, player.skinInverse = 9, player.reset = true
            }
        },
        16: {
            tooltip() {if(hasAchievement('Skins', 16) && options.Lang === true) return `"EW"`
            else if (hasAchievement('Skins', 16) && options.Lang === false) return `"<i>噫</i>"`},
            name() {if(options.Lang === true) return "The Troll"
            else return "巨魔"},
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%", "background-position": "center center"},
            done() { return player.name.toLowerCase() === 'Jakub'.toLowerCase() && player['tree-tab'].saved === true},
            on() { if (player.skin === 10 && player.skinInverse === 11) return true
            else return false},
            image() { if (hasAchievement('Skins', 16)) return 'https://i.postimg.cc/LsD6QJ4Z/Slate-3.png'
            else return 'https://i.postimg.cc/9fwcMztv/pixil-frame-0-3-1.png'},
            onClick(){
                if (hasAchievement('Skins', 16)) player.skin = 10, player.skinInverse = 11, player.reset = true
            }
        },
        17: {
            tooltip() {if(hasAchievement('Skins', 17) && options.Lang === true) return `"you can make that adjustPopupTime (Math.min(trueDiff ,1)) or something similar"`
            else if (hasAchievement('Skins', 17) && options.Lang === false) return `"你可以用 adjustPopupTime (Math.min(trueDiff ,1)) 或者相似的什么东西"`},
            name() {if(options.Lang === true) return "WOW, sooooo smart."
            else return "哇~真聪明啊（棒读）"},
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%", "background-position": "center center"},
            done() { return player.name.toLowerCase() === 'Smiley'.toLowerCase() && player['tree-tab'].saved === true},
            on() { if (player.skin === 12 && player.skinInverse === 13) return true
            else return false},
            image() { if (hasAchievement('Skins', 17)) return 'https://i.postimg.cc/htxDzR7P/Slate.png'
            else return 'https://i.postimg.cc/9fwcMztv/pixil-frame-0-3-1.png'},
            onClick(){
                if (hasAchievement('Skins', 17)) player.skin = 12, player.skinInverse = 13, player.reset = true
            }
        },
        18: {
            tooltip() {if(hasAchievement('Skins', 18) && options.Lang === true) return `Vulton: Toxic Decor`
            else if (hasAchievement('Skins', 18) && options.Lang === false) return `Vulton: 毒性装饰`},
            name() {if(options.Lang === true) return "Vulton: Toxic Decor"
            else return "Vulton: 毒性装饰"},
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%", "background-position": "center center"},
            done() { return player.Zone === 7 && C4_LIST.includes(player.Twentytwo)},
            on() { if (player.skin === 14 && player.skinInverse === 15) return true
            else return false},
            image() { if (hasAchievement('Skins', 18)) return 'https://i.postimg.cc/3RNVHpdC/Slate-1.png'
            else return 'https://i.postimg.cc/9fwcMztv/pixil-frame-0-3-1.png'},
            onClick(){
                if (hasAchievement('Skins', 18)) player.skin = 14, player.skinInverse = 15, player.reset = true
            }
        },
        19: {
            tooltip() {if(hasAchievement('Skins', 19) && options.Lang === true) return `"increlution is goated"`
            else if (hasAchievement('Skins', 19) && options.Lang === false) return `"increlution是今年的最佳游戏"`},
            name() {if(options.Lang === true) return "The Paper Manlet"
            else return "纸壮汉"},
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%", "background-position": "center center"},
            done() { return player.name.toLowerCase() === 'The Paper Pilot'.toLowerCase() && player['tree-tab'].saved === true},
            on() { if (player.skin === 16 && player.skinInverse === 17) return true
            else return false},
            image() { if (hasAchievement('Skins', 19)) return 'https://i.postimg.cc/kgP0tBpq/Slate.png'
            else return 'https://i.postimg.cc/9fwcMztv/pixil-frame-0-3-1.png'},
            onClick(){
                if (hasAchievement('Skins', 19)) player.skin = 16, player.skinInverse = 17, player.reset = true
            }
        },
        21: {
            tooltip() {if(hasAchievement('Skins', 21) && options.Lang === true) return `What A Dark Knight`
            else if (hasAchievement('Skins', 21) && options.Lang === false) return `如此黑暗的骑士`},
            name() {if(options.Lang === true) return "The Batman"
            else return "蝙蝠侠"},
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%", "background-position": "center center"},
            done() { return player.Zone === 4 && C4_LIST.includes(player.Fifty)},
            on() { if (player.skin === 18 && player.skinInverse === 19) return true
            else return false},
            image() { if (hasAchievement('Skins', 21)) return 'https://i.postimg.cc/MTzVL2Kh/Slate-2.png'
            else return 'https://i.postimg.cc/9fwcMztv/pixil-frame-0-3-1.png'},
            onClick(){
                if (hasAchievement('Skins', 21)) player.skin = 18, player.skinInverse = 19, player.reset = true
            }
        },
    },

    tabFormat: [
        "blank", "blank", "blank", "blank", "blank", "blank",
        'achievements'
    ]
})

addLayer("Letters", {
    startData() {
        return {
            unlocked: true,
            points: new Decimal(0),
            Letters: [],
            hasLetter: false,
        }
    },

    songOn: false,
    Song: new Audio('resources/Hymn.wav'),

    name: "Letters", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "L", // This appears on the layer's node. Default is the id with the first letter capitalized
    color: "#ff0000",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "prestige points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },

    clickables: {
        11: {
            unlocked(){
                if (player.Letters.Letters[1] === 1) return true
            },
            canClick(){
                return true
            },
            title() {if (tmp.Letters.songOn === true) return "♫ ||"
        else return "♫ ▶"},
            style: { "background-color": "#ff0000", color: "#000000", "font-size": "40px"},
            onClick() {
                if (tmp.Letters.songOn === false) tmp.Letters.Song.loop = true,  tmp.Letters.Song.play(), tmp.Letters.songOn = true
                else tmp.Letters.Song.pause(), tmp.Letters.songOn = false
            },
        },
    },

    layerShown(){return true},

    update() {
        if (player.inConsole === 11 && console.logs[21] !== undefined) player.inConsole = 12, console.log("So basically, this one time " + console.logs[1] + " decided it would be a good idea to " + console.logs[3] + " " + console.logs[5] + " and " + console.logs[7] + "! I know, " + console.logs[9] + " is pretty " + console.logs[11] + ". Then this " + console.logs[13] + " came along and was all like " + console.logs[15] + ". That really made " + console.logs[1] + " " + console.logs[17] + ". All of a sudden, " + console.logs[1] + " and " + console.logs[13] + " were both " + console.logs[19] + " and it was " + console.logs[21] + ".  That's all I can remember. I am currently yelling at the top of my lungs because I have a broken s key and my internet connectivity fails every few days. Thanks for sticking through till the end. <._.> Now, as the great amogus would say, go to hell!")
        if (player.inConsole === 10 && console.logs[19] !== undefined) player.inConsole = 11, console.log("Just one final emotion to sum it all up is needed. An adjective please.")
        if (player.inConsole === 9 && console.logs[17] !== undefined) player.inConsole = 10, console.log("Ok, so the two nouns meet and what happens? A present continuous verb is in order.")
        if (player.inConsole === 8 && console.logs[15] !== undefined) player.inConsole = 9, console.log("So how did the first noun react to the quote? Give me an adjective.")
        if (player.inConsole === 7 && console.logs[13] !== undefined) player.inConsole = 8, console.log("Oh and what about a quote, what did the noun say? A QUOTE PLEASE.")
        if (player.inConsole === 6 && console.logs[11] !== undefined) player.inConsole = 7, console.log("Ok let's introduce something or someone new into the mix. I'll need another noun.")
        if (player.inConsole === 5 && console.logs[9] !== undefined) player.inConsole = 6, console.log("And how did their verbs make you feel? Give me an adjective... Please?")
        if (player.inConsole === 4 && console.logs[7] !== undefined) player.inConsole = 5, console.log("Oh and I almost forgot, we need a pronoun for our original noun.")
        if (player.inConsole === 3 && console.logs[5] !== undefined) player.inConsole = 4, console.log("There must be another present tense verb here... right?")
        if (player.inConsole === 2 && console.logs[3] !== undefined) player.inConsole = 3, console.log("Cool, cool. Now think about that adjective and apply a present tense verb.")
        if (player.inConsole == true && console.logs[1] !== undefined) player.inConsole = 2, console.log("Alright, you're on board. Next, I'll need a adjective.")
        if (player.Letters.Letters[0] === 1 || player.Letters.Letters[1] === 1) player.Letters.hasLetter = true
    },

    tabFormat: [
        "blank", "blank", "blank", "blank", "blank", "blank",
        ['display-image',
        function(){ if (player.Letters.Letters[0] === 1 && options.Lang == true) return 'resources/Letter1.png'
        if (player.Letters.Letters[0] === 1 && options.Lang == false) return 'resources/Letter1ch.png'}],
    ['display-image',
    function(){ if (player.Letters.Letters[1] === 1 && options.Lang == true) return 'resources/Letter2.png'
    if (player.Letters.Letters[1] === 1 && options.Lang == false) return '未翻译'}],
    ['clickable', 11],
    ]
})


console.stdlog = console.log.bind(console);
console.logs = [];

console.log = function(){  
    console.stdlog.apply(console, arguments);
    console.logs.push(Array.from(arguments));
  
}
