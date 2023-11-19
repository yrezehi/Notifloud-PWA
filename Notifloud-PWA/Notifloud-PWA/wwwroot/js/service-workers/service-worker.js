var serviceWorker = function () {
    var worker = null;

    function register(endpoint) {
        navigator.serviceWorker.register(endpoint)
            .then(function (registeration) {
                worker = registeration;
                console.info("Worker is registered!");
            }).catch(function (error) {
                console.error("Worker was not able to be registered!");
            });
    }

   return function () {
        return {
            register: register,
            worker: function () {
                if (worker == null) {
                    console.error("Worker is not registered yet!");
                    return;
                }

                return worker;
            }
        };
    }();
}();