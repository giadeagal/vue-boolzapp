const app = new Vue({
    el: '#app',
    data: {
        target:"",
        contacts: [
            {
                name: "Mario Draghi",
                avatar: "../img/mario-draghi-1.jpg",
                visible: true,
                messages: []
            },
            {
                name: "Angela Merkel",
                avatar: "../img/Angela_Merkel_2019_cropped.jpg",
                visible: true,
                messages: []
            },
            {
                name: "Xavier Bettel",
                avatar: "../img/Xavier_Bettel,_2017.jpg",
                visible: true,
                messages: []
            },
            {
                name: "Emmanuel Macron",
                avatar: "../img/Emmanuel_Macron_(cropped).jpg",
                visible: true,
                messages: []
            },
            {
                name: "Mark Rutte",
                avatar: "../img/Mark_Rutte,_2017.jpg",
                visible: true,
                messages: []
            },
            {
                name: "Charles Michel",
                avatar: "../img/Charles_Michel_(49467991288).jpg",
                visible: true,
                messages: []
            }
        ],
    }, 
    methods : {
        selectTarget: function (x) {
            this.target=x;
        } 
    } 
  }
  )


