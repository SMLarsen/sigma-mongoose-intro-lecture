myApp.controller('PeopleController', ['$http', function($http) {
    var self = this;
    self.people = [];
    self.newPerson = {};
    self.niceLevels = ['Angelic', 'Great', 'NotTooBad', 'Weak', 'DamnedToHell'];

    // Start app
    getData();

    // Get all people
    function getData() {
        $http.get('/person')
            .then(function(response) {
                    self.people = response.data;
                    self.wishLists = self.people.wishlist;
                    console.log(self.wishLists);
                },
                function(response) {
                    console.log('get error:', response);
                });
    }

    // add person
    self.addPerson = function() {
        console.log('add person');
        $http.post('/person', self.newPerson)
            .then(function(response) {
                    // getData();
                    self.people.push(response.data);
                    console.log(response);
                },
                function(response) {
                    console.log('post error:', response);
                }
            );
    };

    // delete person
    self.deletePerson = function(id) {
        console.log('delete person');
        $http.delete('/person/' + id)
            .then(function(response) {
                    getData();
                },
                function(response) {
                    console.log('delete error:', response);
                }
            );
    };

    // update person
    self.updatePerson = function(id, person) {
        console.log('update person', id, person);
        var data = person;
        $http.put('/person/' + id, data)
            .then(function(response) {
                    getData();
                },
                function(response) {
                    console.log('update error:', response);
                }
            );
    };

    // add gift to wishlist
    self.addGift = function(id, wish) {
        console.log('add gift to:', id, '\ngift:', wish);
        var data = wish;
        $http.put('/gift/' + id, data)
            .then(function(response) {
                    getData();
                },
                function(response) {
                    console.log('add gift error:', response);
                }
        );
    };

}]);
