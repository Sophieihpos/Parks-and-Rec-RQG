const quoteList = [
  ["If there were more food and fewer people, this would be a perfect party.", "Ron Swanson"],
  ["When April was born I was already in third grade, which means if we were friends back then I would have been hanging out with a baby. I don't know anything about infant care. Oh my god I could have killed her.", "Andy Dwyer"],
  ["I don’t want to do things. I want to not do things.", "April Ludgate"],
  ["I also think it's pointless for a human to paint scenes of nature when they can go outside and stand in it.", "Ron Swanson"],
  ["Oh dude, you forgot to put a shirt on. Don't worry I do it all the time.", "Andy Dwyer"],
  ["Love… love fades away, but things… things are forever.", "Tom Haverford"],
  ["Guys love it when you can show them you're better than they are at something they love.", "Leslie Knope"],
  ["You know my code. Hoes before bros. Uteruses before duderuses. Ovaries before Brovaries.", "Leslie Knope"],
  ["I think Comic Sans always screams FUN.", "Jerry Gergich"],
  ["TREAT YO SELF", "Donna Meagle"],
  ["Do I look like I drink water?", "Donna Meagle"],
  ["The less I know about other people’s affairs, the happier I am. I’m not interested in caring about people. I once worked with a guy for three years and never learned his name. Best friend I ever had. We still never talk sometimes.", "Ron Swanson"],
  ["Dude that is the coolest sentence I have ever heard somebody talk.", "Andy Dwyer"],
  ["I don't want to paint with a broad brush here, but every single contractor in the world is a miserable, incompetent thief.", "Ron Swanson"],
  ["I hate talking to people about things.", "April Ludgate"],
  ["Of all my coworkers he is one of a small number of whom I do not actively root against…uh, there I go again getting all sappy.", "Ron Swanson"],
  ["One time I accidentally drank an entire bottle of vinegar. I thought it was terrible wine.", "Leslie Knope"],
  ["You may have thought you heard me say I wanted a lot of bacon and eggs, but what I said was: Give me all the bacon and eggs you have.", "Ron Swanson"],
  ["Fishing relaxes me. It’s like yoga, except I still get to kill something.", "Ron Swanson"],
  ["We have to remember what’s important in life: friends, waffles, and work. Or waffles, friends, work. But work has to come third.", "Leslie Knope"],
  ["There has never been a sadness that can’t be cured by breakfast food.", "Ron Swanson"],
  ["I'm allergic to sushi. Every time I eat more than 80 pieces, I barf.", "Andy Dwyer"],
  ["I stand behind my decision to avoid salad and other disgusting things.", "Leslie Knope"],
  ["Just remember every time you look up at the moon, I too will be looking at a moon. Not the same moon, obviously, that’s impossible.", "Andy Dwyer"],
  ["What I hear when I'm being yelled at is people caring loudly at me.", "Leslie Knope"],
  ["Behind every successful man is me, smiling and taking partial credit.", "Tom Haverford"],
  ["I don’t care about that prize. But I’m gonna win because I want his happiness to go away.", "April Ludgate"],
  ["I hope no one minds if I live tweet this bitch.", "Donna Meagle"],
  ["I have never taken the high road. But I tell other people to, ‘cause then there’s more room for me on the low road.", "Tom Haverford"],
  ["Calzones are pointless. They're just pizza that's harder to eat. No one likes them. Good day, sir.", "Leslie Knope"],
  ["Any dog under fifty pounds is a cat and cats are useless.", "Ron Swanson"],
  ["Do you have a first date outfit I could borrow? Like, I don't know, a pair of cargo pants?", "Leslie Knope"],
  ["I am big enough to admit that I am often inspired by myself.", "Leslie Knope"],
  ["Well I am not usually one for speeches. So, Goodbye.", "Ron Swanson"],
  ["Punk-ass book jockeys!", "Leslie Knope"],
  ["Hey Leslie. It's Leslie. Hang in there. I love you. Bye", "Leslie Knope"],
  ["The thing about youth culture is- I don't understand it", "Leslie Knope"],
  ["There's only one thing I hate more than lying: skim milk. Which is water lying about being milk", "Ron Swanson"],
  ["Time is money; Money is power; Power is pizza; Pizza is knowledge. Let's go!", "April Ludgate"],
  ["Dear frozen yogurt, you are the celery of desserts. Be icecream or be nothing. Zero stars", "Ron Swanson"],
  ["If I keep my body moving, and my mind occupied at all times, I will avoid falling into a bottomless pit of despair.", "Chris Traeger"],
  ["It's like I always say: When life gives you lemons, you sell some of your grandma's jewelry and go clubbing", "Jean-Ralphio Saperstein"],
  ["Jogging is the worst. I know it keeps you healthy, but God, at what cost?", "Ann Perkins"],
  ["When life gives you lemons, make lemonade. I read that once on a can of lemonade. I like to think it applies to life", "Andy Dwyer"],
  ["Windows are the eyes to the house", "Andy Dwyer"],
  ["Oh babe, thank God you're here. I got so bored I started thinking about existence", "Andy Dwyer"],
  ["If you rearrange the letters of Peru, you can spell Europe.", "Andy Dwyer"],
  ["I tried to make ramen in the coffee pot and I broke everything", "Andy Dwyer"],
  ["Leslie, I typed your symptoms into the thing up here and it says you could have network connectivity problems.", "Andy Dwyer"],
  ["Honestly, you'd look hot naked", "Andy Dwyer"],
  ["When I get bummed out I take my shirt off because the bad feelings make me feel sweaty", "Andy Dwyer"],
  ["I once threw a beer at a swan and then it attacked my niece Rebecca", "Andy Dwyer"],
  ["I didn't actually sell my last car, I just forgot where I parked it.", "Andy Dwyer"],
  ["I don't know who Al Gore is, and at this point, I'm too afraid to ask.", "Andy Dwyer"],
  ["When they say 2% milk, I don't know what the other 98% is.", "Andy Dwyer"],
  ["I cannot emphasize enough how little I was thinking", "Andy Dwyer"],
  ["No home is complete without a proper toolbox. Here’s April and Andy’s: A hammer, a half-eaten pretzel, a baseball card, some cartridge that says Sonic and Hedgehog, a scissor half, a flashlight filled with jellybeans.", "Ron Swanson"],
  ["I once worked with a guy for three years and never learned his name. Best friend I ever had. We still never talk sometimes.", "Ron Swanson"],
  ["Boss man, I wanna go home early. Ooh, hold on actually, hang on. Yeah, no, I wanna quit and never come here again.", "Mona-Lisa Saperstein"],
  ["I totally hear you, but, erm, I also don’t like what you’re saying. So if you say no, I will start a fire in the bathroom.", "Mona-Lisa Saperstein"],
  ["[On bowling] Straight down the middle. No hook, no spin, no fuss. Anything more and this becomes figure skating.", "Ron Swanson"],
  ["Put some alcohol in your mouth to block with words from coming out.", "Ron Swanson"],
  ["Are you going to tell a man that he can’t fart in his own car?", "Ron Swanson"],
  ["You had me at 'Meat Tornado,'", "Ron Swanson"],
  ["I like saying 'No,' it lowers their enthusiasm.", "Ron Swanson"],
  ["You know, in the 1880's, there were a few years that were pretty rough and tumble in Pawnee. This depicts kind of a famous fight between Reverend Bradley and Annabeth Stevenson, a widowed mother of seven. The original title of this was 'A Lively Fisting.' But y'know, they had to change it for...obvious reasons.", "Leslie Knope"],
  ["Everything hurts and I'm dying.", "Leslie Knope"],
  ["I wasn't listening but I strongly disagree with Ann.", "April Ludgate"],
  ["I was born ready. I'm Ron Fucking Swanson", "Ron Swanson"],
  ["I really am amazing.", "Tom Haverford"],
  ["You are awesome and everyone else sucks.", "April Ludgate"],
  ["So, you’ve gone insane. That’s fun.", "April Ludgate"],
  ["When I bet on horses, I never lose. Why? Because I bet on all the horses.", "Tom Haverford"],
  ["I am very powerful and feared by many.", "April Ludgate"],
  ["Oh no, no, no. I’m not lonely, I have me!", "Chris Traeger"],
  ["The only things I like are dogs, sleeping late, and weird birthmarks.", "April Ludgate"],
  ["I’m super chill all the time.", "Leslie Knope"],
  ["Ann, you beautiful, sassy mannequin come to life.", "Leslie Knope"],
  ["I’m like an elephant, OK? If I walk into a room it’s like, OK, he’s in there.", "Tom Haverford"],
  ["When people get too chummy with me, I like to call them by the wrong name to let them know I don’t really care about them.", "Ron Swanson"],
  ["Can’t make a good soup, can’t do a handstand in a pool. Can’t spell the word lieutenant. There are a lot of can'ts in my life right now.", "Leslie Knope"],
  ["Just hit a fire hydrant, but I survived. #Unbreakable.", "Tom Haverford"],
  ["Fleetwood Mac Sex Pants. New band name. I call it. Ooh, you know what? Maybe just Fleetwood Mac.", "Andy Dwyer"],
  ["Scientists believe that the first human being who will live 150 years has already been born. I believe I am that human being.", "Chris Traeger"],
  ["If any of you need anything at all, too bad. Deal with your problems yourselves, like adults.", "Ron Swanson"],
  ["Stay away from wine. Wine is crying juice.", "Donna Meagle"],
  ["Sometimes when you make an omelet you’ve gotta break a few eggs. What’s the alternative? No omelets at all? Who wants to live in that kind of world? Maybe birds. Then all their babies would live.", "Leslie Knope"],
  ["I’m sorry. I have to ask this, but how many legs did that dog have when you found him?", "Ben Wyatt"],
  ["Pawnee is the opposite of hip. People in this town are just now getting into Nirvana. I don’t have the heart to tell them what’s gonna happen to Kurt Cobain in 1994.", "Tom Haverford"],
  ["Most people would say ‘the deets’, but I say ‘the tails’. Just another example of innovation.", "Tom Haverford"],
  ["Oh, Ann, I always forget because you’re so pretty, you’re not used to rejection.", "Leslie Knope"],
  ["Ann, you beautiful tropical fish. You’re smart as a whip and you’re cool under pressure.", "Leslie Knope"],
  ["Oh, Ann, you beautiful spinster. I will find you love.", "Leslie Knope"],
  ["Oh, Ann, you beautiful, rule-breaking moth.", "Leslie Knope"],
  ["Ann, you are such a good friend, you’re a beautiful, talented, brilliant, powerful musk-ox. Thank you, ox.", "Leslie Knope"],
  ["Ann, you cunning, pliable, chestnut-haired sunfish.", "Leslie Knope"],
  ["Ann, you poetic, noble land-mermaid.", "Leslie Knope"]
];

export default quoteList;