// Song data structure with 48 songs
const songs = [
    { id: 1, title: "Trouble", audioFile: "songs/b01.mp3", lyrics: "<span class='lyrics-center'>PETER</span>\nWhat's wrong?\n\n<span class='lyrics-center'>LERI</span>\nI've had a vision…\n\n<span class='lyrics-center'>PETER</span>\nTell me, what did you see?\n\n<span class='lyrics-center'>LERI</span>\nLast night as I was lying in bed, \nthis vision came to me.\nI was lying alone, strumming my guitar, peaceful in my bed,\nwhen suddenly I fell into a trance\na dream that would not leave my head.\n\nTrouble, trouble, \ntrouble in the place I love best.\nTrouble, trouble, \nunable to return to rest.\n\n<span class='lyrics-center'>PETER</span>\nI think I know what you mean.\n\n<span class='lyrics-center'>LERI</span>\nYou've seen the things I've seen?\n\n<span class='lyrics-center'>PETER</span>\nWell last night as I was sitting on the curb,\nthe same dream did disturb.\nI was sitting alone, outside Chang's, when I fell into the same trance.\nAlarmed I was at the vicious cause of this frightful circumstance.\n\n<span class='lyrics-center'>PETER</span>\nTrouble, trouble, \ntrouble in the place I love best.\nTrouble, trouble, \nunable to return to rest.\n\n<span class='lyrics-center'>PETER and LERI</span>\nBingo is our heaven,\nbut Bemidji is our earthly paradise.\nWe must protect it from vice…\nLast night, we had a vision,\nand this is what we saw…" },
    { id: 2, title: "3.2 Beer", audioFile: "songs/b02.mp3", lyrics: "<span class='lyrics-center'>HAROLD</span>\nThis is the perfect place\n\n<span class='lyrics-center'>MINDY</span>\nHeadquarters for our fascist regime.\n\n<span class='lyrics-center'>HAROLD</span>\nOur surveillance cameras\n\n<span class='lyrics-center'>MINDY</span>\nHide behind Bavarian Crème.\n\n<span class='lyrics-center'>HAROLD and MINDY</span>\nSoon we'll have Bemidji on its knees.\nThe city will be ours, we'll do what we please.\n\n<span class='lyrics-center'>HAROLD</span>\nHere's where I'll put the gum.\n\n<span class='lyrics-center'>MINDY</span>\nHere's where I'll stock the bait.\n\n<span class='lyrics-center'>HAROLD</span>\nWe'll toast ourselves with rum.\n\n<span class='lyrics-center'>MINDY</span>\nAll we have to do is wait.\n\n<span class='lyrics-center'>HAROLD and MINDY</span>\nSoon we'll have Bemidji in our hands.\nThe city will be ours, fulfilling our demands.\n\n<span class='lyrics-center'>MINDY</span>\nWe've been planning our take over for so many years.\n\n<span class='lyrics-center'>MINDY</span>\nFinally it's our time, finally we're here.\n\n<span class='lyrics-center'>HAROLD and MINDY</span>\nFinally it's our time, finally we're here\nto sell pixie sticks and push 3.2 beer\n\n<span class='lyrics-center'>HAROLD</span>\nCome into the back room.\n\n<span class='lyrics-center'>MINDY</span>\nAnd see the monitor screens.\n\n<span class='lyrics-center'>HAROLD</span>\nWe'll plan Bemidji's doom.\n\n<span class='lyrics-center'>MINDY</span>\nWe'll be the unseen fiends.\n\n<span class='lyrics-center'>HAROLD and MINDY</span>\nSoon we'll have Bemidji at our feet.\nThe city will be ours, and we its elite.\n\n<span class='lyrics-center'>MINDY</span>\nWe've been planning our take over for so many years.\n\n<span class='lyrics-center'>HAROLD</span>\nFinally it's our time, finally we're here.\n\n<span class='lyrics-center'>HAROLD and MINDY</span>\nFinally it's our time, finally we're here\nto sell pixie sticks and push 3.2 beer\n\n<span class='lyrics-center'>HAROLD</span>\nHiding the surveillance cameras\n\n<span class='lyrics-center'>MINDY</span>\nBehind boxes of Cracker Jacks.\n\n<span class='lyrics-center'>HAROLD</span>\nCover up with biscuits and Twinkies\n\n<span class='lyrics-center'>MINDY</span>\nCustomers coming in for a little snack.\n\n<span class='lyrics-center'>HAROLD and MINDY</span>\nWe'll watch, we'll watch them in secret.\nWe'll watch them on video tape.\nWe'll get, we'll get them eating.\n\n<span class='lyrics-center'>BARBARA and CLAUDE</span>\nAsparagus Asparagus crepes" },
    { id: 3, title: "Asparagus Crepes", audioFile: "songs/b03.mp3", lyrics: "<span class='lyrics-center'>BARBARA</span>\nWe'll get them\n\n<span class='lyrics-center'>CLAUDE</span>\nWe'll get them\n\n<span class='lyrics-center'>BARBARA and CLAUDE</span>\nEating asparagus crepes.\n\n<span class='lyrics-center'>BARBARA</span>\nWe'll help them\n\n<span class='lyrics-center'>CLAUDE</span>\nAplenty,\n\n<span class='lyrics-center'>BARBARA and CLAUDE</span>\nWe'll help them fill up their plates.\n\n<span class='lyrics-center'>BARBARA</span>\nThey're eating junk food,\n\n<span class='lyrics-center'>CLAUDE</span>\nWe'll make them atone.\n\n<span class='lyrics-center'>BARBARA</span>\nWe're democrats\n\n<span class='lyrics-center'>CLAUDE</span>\nnot fascists\n\n<span class='lyrics-center'>BARBARA and CLAUDE</span>\nAnd we're not alone.\n\n<span class='lyrics-center'>CLAUDE</span>\nWe'll get them eating crepes\n\n<span class='lyrics-center'>BARBARA</span>\nbut we'll give them a choice.\n\n<span class='lyrics-center'>CLAUDE</span>\nOf sauces\n\n<span class='lyrics-center'>BARBARA</span>\nnot content\n\n<span class='lyrics-center'>BARBARA and CLAUDE</span>\nand then we'll rejoice.\n\n<span class='lyrics-center'>BARBARA</span>\nWe'll get them\n\n<span class='lyrics-center'>CLAUDE</span>\nwe'll get them\n\n<span class='lyrics-center'>BARBARA and CLAUDE</span>\nwith fashionable cuisine.\n\n<span class='lyrics-center'>BARABARA</span>\nWe'll meld them\n\n<span class='lyrics-center'>CLAUDE</span>\nand mold them\n\n<span class='lyrics-center'>BARBARA and CLAUDE</span>\nLike Gourmet magazine .\n\n<span class='lyrics-center'>BARBARA</span>\nWe'll give them choices,\n\n<span class='lyrics-center'>CLAUDE</span>\nWe'll give them a bunch.\n\n<span class='lyrics-center'>BARBARA</span>\nConfuse them with the menu\n\n<span class='lyrics-center'>BARBARA and CLAUDE</span>\nfrom supper to lunch.\n\n<span class='lyrics-center'>CLAUDE</span>\nSo many choices\n\n<span class='lyrics-center'>BARBARA</span>\nbut it's always the same.\n\n<span class='lyrics-center'>CLAUDE</span>\nThey'll end up with asparagus\n\n<span class='lyrics-center'>BARBARA and CLAUDE</span>\nthe people's bane.\n\n<span class='lyrics-center'>CLAUDE</span>\nWe'll get them all eating what we have to serve.\n\n<span class='lyrics-center'>BARBARA</span>\nAsparagus!\n\n<span class='lyrics-center'>CLAUDE</span>\nAsparagus?\n\n<span class='lyrics-center'>BARBARA and CLAUDE</span>\nThey'll eat it with verve.\n\n<span class='lyrics-center'>BARBARA</span>\nWe'll get them\n\n<span class='lyrics-center'>CLAUDE</span>\nwe'll get them\n\n<span class='lyrics-center'>BARBARA and CLAUDE</span>\nEating asparagus crepes.\n\n<span class='lyrics-center'>BARBARA</span>\nWe'll help them\n\n<span class='lyrics-center'>CLAUDE</span>\naplenty,\n\n<span class='lyrics-center'>BARBARA and CLAUDE</span>\nWe'll help them fill up their plates.\n\n<span class='lyrics-center'>CLAUDE</span>\nAll of Bemidji will flock to our store.\n\n<span class='lyrics-center'>BARBARA</span>\nWe'll rule & control them with asparagus galore\n\n<span class='lyrics-center'>HAROLD and MINDY</span>\nWho's that over there?\n\n<span class='lyrics-center'>BARBARA and CLAUDE</span>\nDo they offer us a dare?\n\n<span class='lyrics-center'>HAROLD AND MINDY</span>\nTrying to dominate Bemidji?\n\n<span class='lyrics-center'>BARBARA and CLAUDE and HAROLD and MINDY</span>\nThey can't ignore the likes of you and me!" },
    { id: 4, title: "Collision", audioFile: "songs/b04.mp3", lyrics: "<span class='lyrics-center'>CLAUDE</span>\nWe have competition.\n\n<span class='lyrics-center'>HAROLD</span>\nIt'll be a demolition.\n\n<span class='lyrics-center'>BARBARA</span>\nWe'll cook with precision.\n\n<span class='lyrics-center'>MINDY</span>\nWe'll win the collision.\n\n<span class='lyrics-center'>CLAUDE</span>\nWe will trap the mindless masses.\n\n<span class='lyrics-center'>HAROLD</span>\nWe will make them kiss our asses\n\n<span class='lyrics-center'>BARBARA</span>\nEating crepes with molasses.\n\n<span class='lyrics-center'>MINDY</span>\nDrinking 3.2 by the glasses.\n\n<span class='lyrics-center'>PETER</span>\nOur dreams are bound for perdition.\n\n<span class='lyrics-center'>LERI</span>\nWhat a terrible, terrible vision.\nThese evil villains take position.\nAnd they offer no contrition.\n\n<span class='lyrics-center'>LERI</span>\nWhere is the hope?\n\n<span class='lyrics-center'>PETER</span>\nCan there be any hope?\n\n<span class='lyrics-center'>LERI</span>\nWe're at the end of our rope.\n\n<span class='lyrics-center'>PETER</span>\nAnd it's a very short rope.\n\n<span class='lyrics-center'>LERI</span>\nDanger's near on the scope.\n\n<span class='lyrics-center'>PETER</span>\nThat's a pretty keen scope.\n\n<span class='lyrics-center'>LERI</span>\nWhere is the hope?\n\n<span class='lyrics-center'>PETER</span>\nWhat can we do? Is there any salvation?\n\n<span class='lyrics-center'>LERI</span>\nThis turn of events means pain for the nation.\n\n<span class='lyrics-center'>PETER</span>\nTrouble in Bemidji\n<span class='lyrics-center'>LERI</span>\nmeans trouble all around.\n\n<span class='lyrics-center'>PETER</span>\nWe're all walking\n\n<span class='lyrics-center'>LERI</span>\non perilous ground.\n\n<span class='lyrics-center'>PETER</span>\nSurveillance cameras\n\n<span class='lyrics-center'>LERI</span>\nAnd crepes in the air.\n\n<span class='lyrics-center'>PETER</span>\nCan you feel yourself falling into Despair…" },
    { id: 5, title: "Stop Wait, Do Not Fear", audioFile: "songs/b05.mp3", lyrics: "<span class='lyrics-center'>LERI</span>\nStop wait do not fear.\nBefore you fall to far, this you must hear\nThere is hope, there is salvation.\nThere are two who can save this nation.\nTonight they'll stand in line, outside this Bingo parlor.\nTonight they'll wish for luck, hands clenched around a dauber.\n\nThere are two who can rescue sweet Bemidji\nConoco from its demise\nThey are young ladies but we must\nMake them our allies\n\n<span class='lyrics-center'>PETER</span>\nCan we be sure that they'll go?\nIs it certain they will triumph?\nWill they be on our side?\nThis problem's the size of Goliath.\n\n<span class='lyrics-center'>PETER and LERI</span>\nThey're our only hope at this point\nThey are all we've got.\nWe'll send them with our guidance, council\nAnd know that they've a shot\n\n<span class='lyrics-center'>LERI</span>\nThey must win at Bingo.\nThey must win it big.\nThey must take the jackpot\nor our hope's not worth a fig.\n\n<span class='lyrics-center'>PETER</span>\nThey are here I can sense\ntheir presence very near\nThey are here, they'll teach these folks\nsome lessons very clear.\n\n<span class='lyrics-center'>LERI</span>\nLet the door open up\n\n<span class='lyrics-center'>PETER</span>\nI'll let them in, they're ready to sup.\n\n<span class='lyrics-center'>PETER and LERI</span>\nAt the great bingo table\nIn the great bingo hall." },
    { id: 6, title: "Let's Begin", audioFile: "songs/b06.mp3", lyrics: "<span class='lyrics-center'>CHORUS</span>\nThey are here,\nthey must win.\nLet them in,\nlet's begin.\n\n<span class='lyrics-center'>PETER</span>\nOh bingo's a special something\nA special game of chance\nAnd what of the luck of our heroines?\nIs it all out of our hands?\n\nFor millions play at bingo\nand no one knows who'll win\nbut that is not the case here\nWhen Leri's magic begins.\n\n<span class='lyrics-center'>CHORUS</span>\nThey are here,\nthey must win.\nLet them in,\nlet's begin.\n\n<span class='lyrics-center'>PETER</span>\nFor Leri's the bingo caller\non nights momentous like this\nwhen the world needs intervention\nand things have gone amiss\n\n<span class='lyrics-center'>LERI</span>\nYes I am the bingo caller.\nEndowed with immortality,\nomnipotence, omniscience,\nit's all been left up to me\n\n<span class='lyrics-center'>CHORUS</span>\nThey are here,\nthey must win.\nLet them in,\nlet's begin." },
    { id: 7, title: "This Line Is Too Long", audioFile: "songs/b07.mp3", lyrics: "<span class='lyrics-center'>JOSH</span>\nThis line is too long.\nWhy don't we just leave?\nI'm so sick of waiting, you'd better believe.\nI know we're missing out on a Bev. Hills rerun.\nLet's get home to the TV and start having some fun.\nThey've got TV's in this parlor,\nbut the stations are all wrong.\nWhy don't they change the channel to Bev Hills\nand start singing a different song?\n\nAnyway,\nI'm worried about you both and this whole Bingo thing.\nHaven't you seen the episode where Brandon got addicted to gambling?" },
    { id: 8, title: "Good God!", audioFile: "songs/b08.mp3", lyrics: "<span class='lyrics-center'>ABBY</span>\nGood God!\n\n<span class='lyrics-center'>HOLLY</span>\nThat's enough!\n\n<span class='lyrics-center'>ABBY and HOLLY</span>\nWe'll have no more of your 90210 stuff.\n\n<span class='lyrics-center'>ABBY</span>\nThat's right!\n\n<span class='lyrics-center'>HOLLY</span>\nWe're through!\n\n<span class='lyrics-center'>ABBY and HOLLY</span>\nThere's so much more in life to do.\n\n<span class='lyrics-center'>ABBY</span>\nWe'll play\n\n<span class='lyrics-center'>HOLLY</span>\nBingo's the name\n\n<span class='lyrics-center'>ABBY and HOLLY</span>\nAnd winning big prizes that's our game\n\n<span class='lyrics-center'>ABBY</span>\nSo stop!\n\n<span class='lyrics-center'>HOLLY</span>\nListen to us!\n\n<span class='lyrics-center'>ABBY and HOLLY</span>\nWe'll tell you to stop your Bev Hills fuss.\nThat show stopped taping a dozen years ago.\nWe've seen every episode 50 times or more.\n\n<span class='lyrics-center'>JOSH</span>\nBut with 90210, every time is like the first.\n\n<span class='lyrics-center'>ABBY and HOLLY</span>\nAs far as we're concerned the first time was the worst!\n\n<span class='lyrics-center'>JOSH</span>\nGood God!  Infidel!\nYou'll both burn in 90210 HELL!\nDylan, won't be pleased.\nSo don't tell me that the show is deceased.\nIt lives on in memory.  In a time when we all need belief.\n\n<span class='lyrics-center'>ABBY</span>\nBut Josh\n\n<span class='lyrics-center'>HOLLY</span>\nIt's gone\n\n<span class='lyrics-center'>ABBY and HOLLY</span>\nBelief and Nostalgia ring the funeral gong.\n\n<span class='lyrics-center'>JOSH</span>\nI can't believe it, have you lost your faith?\n\n<span class='lyrics-center'>ABBY and HOLLY</span>\n(wha-oooh)\n\n<span class='lyrics-center'>JOSH</span>\nIt seems in this day and age no belief is safe.\n\n<span class='lyrics-center'>ABBY and HOLLY</span>\n(wha-oooh)\n\n<span class='lyrics-center'>JOSH</span>\nI'm hurt the way that Donna was\nWhen David was sleeping around\nI'm hurt the way that Brandon was\nWhen his valentine left town\n\n<span class='lyrics-center'>ABBY and HOLLY</span>\nWell we're bored Josh it's been so many years\nAnd after all this time we'd like to switch some gears\n\n<span class='lyrics-center'>ABBY</span>\nGood God!\n\n<span class='lyrics-center'>HOLLY</span>\nThat's enough!\n\n<span class='lyrics-center'>ABBY and HOLLY</span>\nWe'll have no more of your 90210 stuff.\n\n<span class='lyrics-center'>ABBY</span>\nThat's right!\n\n<span class='lyrics-center'>HOLLY</span>\nWe're through!\n\n<span class='lyrics-center'>ABBY and HOLLY</span>\nThere's so much more in life to do.\n\n<span class='lyrics-center'>ABBY</span>\nWe'll play\n\n<span class='lyrics-center'>HOLLY</span>\nBingo's the name\n\n<span class='lyrics-center'>ABBY and HOLLY</span>\nAnd winning big prizes that's our game\n\n<span class='lyrics-center'>ABBY</span>\nSo stop!\n\n<span class='lyrics-center'>HOLLY</span>\nListen to us!\n\n<span class='lyrics-center'>ABBY and HOLLY</span>\nWe'll tell you to stop your Bev Hills fuss.\n\n<span class='lyrics-center'>JOSH</span>\nI'm so bewildered, the way David was.\nWhen his girlfriend Valerie was busted by the fuzz.\nI'm lost the way that Kelly was, when she took cocaine.\nThen drove away leaving Brandon standing in the rain.\n\nI'm far from home, like Brandon and Brenda,\nWhen they first moved out to California\nI'm scared the way that David was\nWhen he took crystal meth\nAnd I'm peeved the way that Steve was\nWhen his friend died a heroine death\n\nI'm shocked the way that Donna was when she found her mom had\nbeen a Rose Princess\nWho got pregnant from by Donna's father\nand had to drop out with no success.\nI'm confused the way that Dylan was\nwhen he couldn't choose between Kelly and Brenda.\nFirst he chose Brenda,  Then he chose Kelly,\nThen left them both for somebody else,\nWho got killed, Then he left town,  wearing a frown,\nand his dead wife's nightgown.  He looked like a clown,\nbut I cried as he drove down the road.\n\n<span class='lyrics-center'>ABBY</span>\nJosh, calm down.\nYou're as worked up as Brandon was\nover Susan's ex-boyfriend.\n\n<span class='lyrics-center'>HOLLY</span>\nYou're going to have chest pains\nlike Donna's boyfriend, Joe, and they won't mend.\n\n<span class='lyrics-center'>ABBY and HOLLY</span>\nWe want to play Bingo tonight.\nWe're going to play so just sit tight.\nWe'll win some money, hit the road.\nUp North to Bemidji, so away we'll go.\n\n<span class='lyrics-center'>HOLLY</span>\nJosh your hearts in California,\nbut we're in Minnesota, do you see all this snow?\n\n<span class='lyrics-center'>ABBY</span>\nYour heart should be where you are.\nNot somewhere you're not,\nso to Bemidji we'll go.\n\n<span class='lyrics-center'>HOLLY</span>\nThe Walshes were from Minnesota\n\n<span class='lyrics-center'>ABBY</span>\nBut they went away to a Pagoda.\n\n<span class='lyrics-center'>HOLLY</span>\nThis is where they'd want you to be.\n\n<span class='lyrics-center'>ABBY</span>\nThe Mississippi's headwaters – where you can be free.\n\n<span class='lyrics-center'>HOLLY</span>\nLet it go Josh…\n\n<span class='lyrics-center'>ABBY</span>\nLet's be like Dylan and run away.\nThis is real life; it's not just a play.\nGo up North where we can stay.\nWe'll leave in the morning, as soon as it's day.\n\n<span class='lyrics-center'>JOSH</span>\nGood God!  You're right.\nI was blind but now have sight.\n\n<span class='lyrics-center'>ABBY</span>\nBingo's\n\n<span class='lyrics-center'>HOLLY</span>\nthe light to see.\n\n<span class='lyrics-center'>ABBY and HOLLY</span>\nWe'll win the dough and then be free.\nGood God!  You came through.\nThat's something we thought you couldn't do\nBingo's our lucky sport.\nNow we find ourselves at its happy port.\n\n<span class='lyrics-center'>JOSH</span>\nI'll be like Dylan…\n\n<span class='lyrics-center'>HOLLY</span>\nYou're right!\n\n<span class='lyrics-center'>JOSH</span>\nWe'll win a million…\n\n<span class='lyrics-center'>ABBY</span>\nLet's not fight.\n\n<span class='lyrics-center'>ABBY and HOLLY</span>\nIn the morning we'll be on our way.\nWe'll play bingo now, so we can pay…" },
    { id: 9, title: "Ready or Not", audioFile: "songs/b09.mp3", lyrics: "<span class='lyrics-center'>PETER</span>\nHello everybody\nWelcome and come in.\nI can tell that you're ready by how you grin.\nIt's just about time for the game to get going\nI can tell that you ready by the way that you're glowing\nOh no, it's not any ordinary night\nWhen you sit at home forgetting to fight.\n\nTonight, tonight! \nThe bingo balls are hot and the feelings so right\nSo here we go here we go\nIt's time to get started so step into the light.\n\n<span class='lyrics-center'>ABBY</span>\nHolly I found three seats together!\n\n<span class='lyrics-center'>HOLLY</span>\nOh Abby, can there be anything better?\n\n<span class='lyrics-center'>JOSH</span>\nAre you kidding?\nDonna in a tight summer sweater.\n\n<span class='lyrics-center'>PETER</span>\nAs the cashier's ready \nand I'm making the rounds\nSelling extra speedos and specials, \nwhat a magical sound.\n\nYes I'll pay it out if you got what it takes\nFour Corners, diagonals, even plain old straight\nI'll pay it out to the lucky few.\nToo folks old to Bingo and some brand new.\n\nYes tonight tonight, \nthe jackpot's getting higher and the\nfeelings so right.\nSo here we go here we go, \nIt's time to get started so step on\ninto the light.\n\nAnd it's a Bingo Bingo Bingo called out\nAnd Bingo yell and scream and Bingo we shout.\nAnd Bingo Bingo in case you forgot\nBingo players are you ready or not?\n\n<span class='lyrics-center'>PETER</span>\nOK, a check list, before we get started\nMake sure all is in place for the Bingo hearted.\nDaubers?\n\n<span class='lyrics-center'>CHORUS</span>\nCheck!\n\n<span class='lyrics-center'>PETER</span>\nSmokes?\n\n<span class='lyrics-center'>CHORUS</span>\nCheck!\n\n<span class='lyrics-center'>PETER</span>\nCandy? \n\n<span class='lyrics-center'>CHORUS</span>\nCheck!\n\n<span class='lyrics-center'>PETER</span>\nBaskets?\n\n<span class='lyrics-center'>CHORUS</span>\nCheck!\n\n<span class='lyrics-center'>PETER</span>\nGlue stick?\n\n<span class='lyrics-center'>CHORUS</span>\nCheck!\n\n<span class='lyrics-center'>PETER</span>\nDandy!!\n\n<span class='lyrics-center'>CHORUS</span>\nCheck!\n\n<span class='lyrics-center'>PETER</span>\nYes tonight tonight, the jackpots getting higher \nand the feeling's so right.\nSo here we go here we go\nIt's time to get started so step on into the light.\nAnd it's a Bingo Bingo Bingo called out\nAnd Bingo yell and scream and Bingo we shout.\nAnd Bingo Bingo in case you forgot\nCome on bingo players are you ready or not?" },
    { id: 10, title: "Daub", audioFile: "songs/b10.mp3", lyrics: "We gather at the barber shop\nTo talk of days when we were young\nThe old timers never stop\nThese songs must always be sung..." },
    { id: 11, title: "Ninety-nine Dollars", audioFile: "songs/b11.mp3", lyrics: "Our love was never meant to be\nFrom different worlds, you and me\nBut in the darkness of the pines\nOur hearts crossed all the lines..." },
    { id: 12, title: "Come Outside", audioFile: "songs/b12.mp3", lyrics: "Thunder on the lake tonight\nStorm clouds gathering in the sky\nLightning strikes with furious might\nOur passions reaching way up high..." },
    { id: 13, title: "Traveling Clothes", audioFile: "songs/b13.mp3", lyrics: "Behind the smile and pressed suit\nLies a secret buried deep\nThe mayor's past has taken root\nIn promises he couldn't keep..." },
    { id: 14, title: "Lovely Clothing Stora (Part 1)", audioFile: "songs/b14.mp3", lyrics: "When the harvest moon is rising\nOver fields of gold and amber\nIt's a sight so mesmerizing\nI will always remember..." },
    { id: 15, title: "Lovely Clothing Stora (Part 2)", audioFile: "songs/b15.mp3", lyrics: "The whole town gathers for the festival tonight\nMusic and laughter under string lights\nWe dance and celebrate our northern pride\nWith all our troubles cast aside..." },
    { id: 16, title: "At Perkins of Brainerd", audioFile: "songs/b16.mp3", lyrics: "Round and round the carousel goes\nPainted horses in endless rows\nIn my dreams I'm riding free\nCarousel of memory..." },
    { id: 17, title: "Kim, The Friendly Waiter", audioFile: "songs/b17.mp3", lyrics: "Can you hear the river's call?\nIt's telling us to let go\nTo surrender to the waterfall\nAnd follow where it flows..." },
    { id: 18, title: "Perkins Has Got it All", audioFile: "songs/b18.mp3", lyrics: "Winter's grip is cold and tight\nThirty below, another frozen night\nBut we endure, we northern souls\nThe cold can't freeze what makes us whole..." },
    { id: 19, title: "The Late Great Perkins Debate", audioFile: "songs/b19.mp3", lyrics: "I trusted you with everything\nMy heart, my hopes, my dreams\nBut betrayal has a bitter sting\nNothing's ever as it seems..." },
    { id: 20, title: "'Shrooms", audioFile: "songs/b20.mp3", lyrics: "The loon cries out across the lake\nA haunting sound at break of day\nAccording to the legends that we make\nThe loon shows us the way..." },
    { id: 21, title: "Buenos Noching", audioFile: "songs/b21.mp3", lyrics: "Main Street at midnight, empty and still\nStreetlights glowing on the window sill\nThis is when the town reveals its soul\nWhen the midnight bells toll..." },
    { id: 22, title: "No Time To Lose", audioFile: "songs/b22.mp3", lyrics: "I'm the fisherman's daughter, born by the bay\nI mend the nets at the end of the day\nDreaming of a life beyond these shores\nBut these waters are forever ours..." },
    { id: 23, title: "Full of Beans", audioFile: "songs/b23.mp3", lyrics: "The tension's been building for far too long\nTwo rivals facing off at dawn\nWho's right, who's wrong?\nBy sunrise, one will be gone..." },
    { id: 24, title: "Oh! Bemidji!", audioFile: "songs/b24.mp3", lyrics: "Standing at the crossroads now\nEvery path leads somewhere new\nI'll make my choice, I'll make my vow\nI'll see this journey through...\n\n[Full company joins]\n\nAt the crossroads, at the crossroads\nWhere all our stories meet\nAt the crossroads, at the crossroads\nOur destinies complete!" },
    { id: 25, title: "Bemidji At Arms", audioFile: "songs/b25.mp3", lyrics: "[Instrumental themes reprising motifs from Act One,\nbuilding towards the dramatic second half]" },
    { id: 26, title: "Paradise", audioFile: "songs/b26.mp3", lyrics: "The ice is melting, spring has come at last\nThe grip of winter finally past\nNew beginnings, fresh and clean\nThe most beautiful spring I've ever seen..." },
    { id: 27, title: "Highway 8 (Built for Death)", audioFile: "songs/b27.mp3", lyrics: "I left this town so long ago\nSwore I'd never come back\nBut now I've returned to what I know\nFollowing memory's track..." },
    { id: 28, title: "Lions and Tigers and Bears", audioFile: "songs/b28.mp3", lyrics: "The truth will set you free, they say\nBut first it cuts like a knife\nNow I face the consequences of that day\nThe choices that changed my life..." },
    { id: 29, title: "Fa La La Lonely", audioFile: "songs/b29.mp3", lyrics: "For fifty years the mill has stood\nProviding jobs and livelihood\nBut now the gates are closing down\nWhat will become of this town?" },
    { id: 30, title: "Too Many Choices", audioFile: "songs/b30.mp3", lyrics: "Walk deep enough into the trees\nYou'll hear the whispers on the breeze\nThe ghosts of the forest speaking low\nOf things only the old pines know..." },
    { id: 31, title: "Arrival", audioFile: "songs/b31.mp3", lyrics: "Sarah: \"Stay with me, don't leave at dawn\"\nDrifter: \"My wandering days aren't done\"\nSarah: \"I'm asking you to stay\"\nDrifter: \"I'm not built that way...\"\n\n[Together]\nTwo souls who can't be one..." },
    { id: 32, title: "Lament for Josh", audioFile: "songs/b32.mp3", lyrics: "Order! Order! Let's begin!\nEveryone wants their say\nThe future of our town at stake\nWhat decision will we make today?" },
    { id: 33, title: "Welcome Home, Holly", audioFile: "songs/b33.mp3", lyrics: "Look up at the northern lights\nDancing green across the sky\nIn their mysterious flights\nWe see the reasons why..." },
    { id: 34, title: "Get Mean", audioFile: "songs/b34.mp3", lyrics: "The old church bell rings out on Sunday morn\nCalling the faithful, the weary and worn\nIts sound carries across the frozen land\nA reminder of where we stand..." },
    { id: 35, title: "Hey, Luke Perry", audioFile: "songs/b35.mp3", lyrics: "Walking down redemption road\nTrying to lighten my heavy load\nSeeking forgiveness for what I've done\nHoping that I'm not the only one..." },
    { id: 36, title: "Bemidji 90210", audioFile: "songs/b36.mp3", lyrics: "They're coming back from near and far\nTo the place where they started out\nThe grand reunion under the stars\nThat's what this town is all about..." },
    { id: 37, title: "Where is He Now?", audioFile: "songs/b37.mp3", lyrics: "You thought old Babe was just a myth?\nA statue standing by the lake?\nWell legends come to life forthwith\nWhen there's justice at stake!" },
    { id: 38, title: "Hey There, My Friends", audioFile: "songs/b38.mp3", lyrics: "The storm breaks over Bemidji tonight\nWith thunder, rain, and lightning bright\nAll our secrets washed into the light\nNothing left to hide from sight..." },
    { id: 39, title: "Night Falls (Part 1)", audioFile: "songs/b39.mp3", lyrics: "I have to tell you what I've done\nThe lies I've told, the pain I've spun\nThis confession tears me apart\nBut truth must come from the heart..." },
    { id: 40, title: "Armageddon's Proper Introduction", audioFile: "songs/b40.mp3", lyrics: "Slowly, gently, we begin to mend\nThe broken pieces, make amends\nThe healing doesn't happen overnight\nBut together we'll make it right..." },
    { id: 41, title: "Late Great Twist of Fate", audioFile: "songs/b41.mp3", lyrics: "I may be just a statue made of stone\nBut I've watched this town from my throne\nI've seen the good times and the bad\nThe happy moments and the sad...\n\nRemember: Stand tall like the pines\nBe strong through changing times\nTogether you'll survive\nKeep the spirit of Bemidji alive!" },
    { id: 42, title: "Night Falls (Part 2)", audioFile: "songs/b42.mp3", lyrics: "Give me one last chance to make things right\nI know I've failed you before\nBut I'll fight with all my might\nI can't lose you anymore..." },
    { id: 43, title: "Up Over the Hills", audioFile: "songs/b43.mp3", lyrics: "Gather round the bonfire bright\nSharing stories through the night\nThe flames reach high into the dark\nCarrying every burning spark..." },
    { id: 44, title: "Bemidji Needs You Now", audioFile: "songs/b44.mp3", lyrics: "Tomorrow holds a promise new\nOf better days ahead\nWe've made it through the darkness\nBy the path we're being led..." },
    { id: 45, title: "What Have We Done?", audioFile: "songs/b45.mp3", lyrics: "This town has shaped who we are\nThrough struggle, joy, and pain\nWe carry Bemidji in our hearts\nNo matter where we remain..." },
    { id: 46, title: "Answers, Sometimes", audioFile: "songs/b46.mp3", lyrics: "Some must leave and some must stay\nThat's the nature of our way\nThe final goodbye is never easy\nBut it's time for me to be free..." },
    { id: 47, title: "The Sweater of Time", audioFile: "songs/b47.mp3", lyrics: "[Company takes their bows]\n\nThank you for joining us on this journey\nThrough Bemidji's heart and soul\nMay you carry these songs with you\nAs you continue down your road..." },
    { id: 48, title: "The Curtain Falls", audioFile: "songs/b48.mp3", lyrics: "The story ends but life goes on\nIn Bemidji, Minnesota\nWhere legends live and new tales are born\nThe road goes on, the road goes on...\n\n[Final chorus fades]\n\nThe road goes on forever..." }
];

// State management
let currentSongIndex = 0;
const totalSongs = songs.length;

// DOM elements
const audioPlayer = document.getElementById('audioPlayer');
const currentSongTitle = document.getElementById('currentSongTitle');
const lyricsDisplay = document.getElementById('lyricsDisplay');
const trackList = document.getElementById('trackList');
const progressBar = document.getElementById('progressBar');
const currentSongNumber = document.getElementById('currentSongNumber');
const totalSongsDisplay = document.getElementById('totalSongs');
const prevBtn = document.getElementById('prevBtn');
const playPauseBtn = document.getElementById('playPauseBtn');
const nextBtn = document.getElementById('nextBtn');

// Initialize the application
function init() {
    totalSongsDisplay.textContent = totalSongs;
    populateTrackList();
    loadSong(0);
    setupEventListeners();
}

// Populate the track listing
function populateTrackList() {
    trackList.innerHTML = '';
    songs.forEach((song, index) => {
        const trackItem = document.createElement('div');
        trackItem.className = 'track-item';
        trackItem.dataset.index = index;

        const trackNumber = document.createElement('span');
        trackNumber.className = 'track-number';
        trackNumber.textContent = `${index + 1}.`;

        const trackTitle = document.createElement('span');
        trackTitle.className = 'track-title';
        trackTitle.textContent = song.title;

        trackItem.appendChild(trackNumber);
        trackItem.appendChild(trackTitle);

        trackItem.addEventListener('click', () => {
            loadSong(index);
            audioPlayer.play();
        });

        trackList.appendChild(trackItem);
    });
}

// Load a specific song
function loadSong(index) {
    if (index < 0 || index >= totalSongs) return;

    currentSongIndex = index;
    const song = songs[index];

    // Update player
    currentSongTitle.textContent = `Song ${index + 1}: ${song.title}`;
    audioPlayer.src = song.audioFile;

    // Update lyrics
    lyricsDisplay.innerHTML = `<p>${song.lyrics}</p>`;

    // Update progress
    updateProgress();

    // Update track list highlighting
    updateTrackListHighlight();
}

// Update progress indicator
function updateProgress() {
    const progress = ((currentSongIndex + 1) / totalSongs) * 100;
    progressBar.style.width = `${progress}%`;
    currentSongNumber.textContent = currentSongIndex + 1;
}

// Update track list highlighting
function updateTrackListHighlight() {
    const allTracks = document.querySelectorAll('.track-item');
    allTracks.forEach((track, index) => {
        if (index === currentSongIndex) {
            track.classList.add('active');
            // Scroll the active track into view
            track.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            track.classList.remove('active');
        }
    });
}

// Play previous song
function playPrevious() {
    if (currentSongIndex > 0) {
        loadSong(currentSongIndex - 1);
        audioPlayer.play();
    }
}

// Play next song
function playNext() {
    if (currentSongIndex < totalSongs - 1) {
        loadSong(currentSongIndex + 1);
        audioPlayer.play();
    }
}

// Toggle play/pause
function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

// Setup event listeners
function setupEventListeners() {
    // Control buttons
    prevBtn.addEventListener('click', playPrevious);
    nextBtn.addEventListener('click', playNext);
    playPauseBtn.addEventListener('click', togglePlayPause);

    // Auto-advance to next song when current song ends
    audioPlayer.addEventListener('ended', () => {
        if (currentSongIndex < totalSongs - 1) {
            playNext();
        } else {
            // Opera complete
            console.log('Opera complete!');
        }
    });

    // Update highlighting when song plays
    audioPlayer.addEventListener('play', updateTrackListHighlight);

    // Handle audio loading errors gracefully
    audioPlayer.addEventListener('error', (e) => {
        console.log('Audio file not found:', songs[currentSongIndex].audioFile);
        console.log('Note: Add your audio files to the songs/ directory');
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
