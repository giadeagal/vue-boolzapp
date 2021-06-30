const app = new Vue({
    el: '#app',
    data: {
        target:{
            name: "Mario Draghi",
            avatar: "../img/mario-draghi-1.jpg",
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Imposte troppo elevate si traducono in meno autofinanziamento, meno patrimonio, minor capacità di far credito.',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Una mortalità eccessiva che colpisca per asfissia finanziaria anche aziende che avrebbero il potenziale per tornare a prosperare dopo la crisi è uno dei gravi rischi per la nostra economia.',
                    status: "sent"
                },
                {
                    date:"10/01/2020 15:50:32",
                    text:"Le banche italiane non hanno eredità pesanti nei loro bilanci. Utilizzino questo vantaggio nei confronti dei concorrenti per affrontare un presente e un futuro non facili. Valutino il merito di credito dei loro clienti con lungimiranza. Prendano esempio dai banchieri che finanziarono la ricostruzione e la crescita degli anni Cinquanta e Sessanta.",
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:56:00',
                    text: 'Mai dimenticando di affermare che lui non era un politico, Carlo Azeglio Ciampi ha restituito alla politica la sua dignità più alta. ',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:00:26',
                    text: 'L\'Euro è irrevocabile.',
                    status: 'sent'
                },
                {
                    date: '11/01/2020 00:01:03',
                    text: 'Nell\'ambito del nostro mandato, la BCE  è pronta a fare tutto il necessario per preservare l\'Euro. E credetemi: sarà abbastanza.',
                    status: 'sent'
                }
            ]
        },
        contacts: [
            {
                name: "Mario Draghi",
                avatar: "../img/mario-draghi-1.jpg",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Imposte troppo elevate si traducono in meno autofinanziamento, meno patrimonio, minor capacità di far credito.',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Una mortalità eccessiva che colpisca per asfissia finanziaria anche aziende che avrebbero il potenziale per tornare a prosperare dopo la crisi è uno dei gravi rischi per la nostra economia.',
                        status: "sent"
                    },
                    {
                        date:"10/01/2020 15:50:32",
                        text:"Le banche italiane non hanno eredità pesanti nei loro bilanci. Utilizzino questo vantaggio nei confronti dei concorrenti per affrontare un presente e un futuro non facili. Valutino il merito di credito dei loro clienti con lungimiranza. Prendano esempio dai banchieri che finanziarono la ricostruzione e la crescita degli anni Cinquanta e Sessanta.",
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:56:00',
                        text: 'Mai dimenticando di affermare che lui non era un politico, Carlo Azeglio Ciampi ha restituito alla politica la sua dignità più alta. ',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:00:26',
                        text: 'L\'Euro è irrevocabile.',
                        status: 'sent'
                    },
                    {
                        date: '11/01/2020 00:01:03',
                        text: 'Nell\'ambito del nostro mandato, la BCE  è pronta a fare tutto il necessario per preservare l\'Euro. E credetemi: sarà abbastanza.',
                        status: 'sent'
                    }
                ]
            },
            {
                name: "Angela Merkel",
                avatar: "../img/Angela_Merkel_2019_cropped.jpg",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Der Staat muss fördern und darf nicht einschränken. In diesem Sinne muss er Gärtner sein und nicht Zaun. Wir sollten den Menschen zutrauen, dass sie sich engagieren und Verantwortung übernehmen wollen.',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Nicht die Welt muss dem Iran nachweisen, dass er eine Bombe baut, sondern der Iran muss die Welt überzeugen, dass er die Atombombe nicht will.',
                        status: "sent"
                    },
                    {
                        date:"10/01/2020 15:50:32",
                        text:"Ist mir egal, ob ich schuld am Zustrom der Flüchtlinge bin, nun sind sie halt da.",
                        status: 'sent'
                    }
                ]
            },
            {
                name: "Xavier Bettel",
                avatar: "../img/Xavier_Bettel,_2017.jpg",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'We are not on Facebook, where things are complicated. We are married or divorced but not something in between.',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Se iniziamo a parlare del prezzo di un migrante, è una vergogna per tutti. … Non parliamo di mercati, non parliamo di tappeti o di merci. Parliamo di essere umani.',
                        status: "sent"
                    },
                    {
                        date:"10/01/2020 15:50:32",
                        text:"Being intolerant is a choice. I would stay intolerant to intolerance and this would be today my fight. I am going to tell Orban that what he is doing in his country is intolerant and that being gay is not a choice.",
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:56:00',
                        text: 'The most difficult thing for me was to accept myself when I realised that I was in love with a person of my sex, was how to say to my parents, how to say to my family,I didn\'t get up one morning after having seen an advert on the TV of some brand... That\'s not how life works. It\'s in me, I didn\'t choose it. And to accept oneself is hard enough, so to be stigmatised too that\'s too much.',
                        status: 'sent'
                    },
                ]
            },
            {
                name: "Emmanuel Macron",
                avatar: "../img/Emmanuel_Macron_(cropped).jpg",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Ce soir, on sait qu\'au moins un policier a été tué, qu’un autre a été blessé. Cet impondérable, cette menace fera partie du quotidien des prochaines années. Je témoigne toute ma solidarité à l’égard de nos forces de police, de nos forces de l’ordre. J\'ai une pensée pour la famille de la victime. ',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Nous sommes entrés dans un monde de grandes migrations. Et on en aura de plus en plus. Parce que la planète est en profond déséquilibre, nous auront dans les décennies qui viennent des migrations dues à des conflits géopolitiques qui vont continuer à se jouer et nous aurons des migrations climatiques... La France ne pourra pas l\'endiguer... des phénomènes migratoires beaucoup plus forts que ce qu\'on a vécu avec la Syrie. ',
                        status: "sent"
                    },
                    {
                        date:"10/01/2020 15:50:32",
                        text:"l faut pouvoir tenir. Si on prend des mesures qui sont très contraignantes, ce n'est pas tenable dans la durée.",
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:56:00',
                        text: 'La vie continue. Il n\'y a aucune raison, mis à part pour les populations fragilisées, de modifier nos habitudes de sortie.',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:00:26',
                        text: 'Make our planet great again. ',
                        status: 'sent'
                    },
                    {
                        date: '11/01/2020 00:01:03',
                        text: 'Déléguer notre alimentation, notre protection, notre capacité à soigner notre cadre de vie au fond à d\'autres est une folie. Nous devons en reprendre le contrôle, construire plus encore que nous ne le faisons déjà une France, une Europe souveraine, une France et une Europe qui tiennent fermement leur destin en main. ',
                        status: 'sent'
                    }
                ]
            },
            {
                name: "Mark Rutte",
                avatar: "../img/Mark_Rutte,_2017.jpg",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Dé manier om kwijt te raken wat we hebben, is vast te houden aan wat we hebben.',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ik heb zestien miljoen bazen.',
                        status: "sent"
                    },
                    {
                        date:"10/01/2020 15:50:32",
                        text:"Voor de heer Roemer is het een belastingparadijs als de belastingen hoog zijn. Voor mij als de belastingen laag zijn.",
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:00:26',
                        text: 'We weten uit het Romeinse Rijk: als je je buitengrenzen niet bewaakt, is dat het begin van het einde.',
                        status: 'sent'
                    }
                ]
            },
            {
                name: "Charles Michel",
                avatar: "../img/Charles_Michel_(49467991288).jpg",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'At the European table, we are systematically the most determined to advance a strategy of increased cooperation.',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'I think we mustn\'t be afraid of the truth.',
                        status: "sent"
                    },
                    {
                        date:"10/01/2020 15:50:32",
                        text:"Belgium is a safe country.",
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:56:00',
                        text: 'We are a country that met successes in the fight against terrorism.',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:00:26',
                        text: 'I am a rational person. I am moderate. I am humble.',
                        status: 'sent'
                    },
                    {
                        date: '11/01/2020 00:01:03',
                        text: 'the law of the people is above god\'s law.',
                        status: 'sent'
                    }
                ]
            }
        ]
    }, 
    methods : {
        selectTarget: function (x) {
            this.target=x;
        } 
    } 
  }
  )


