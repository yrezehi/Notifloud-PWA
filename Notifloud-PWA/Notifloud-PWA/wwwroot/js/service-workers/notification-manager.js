var notificationManager = function () {

    var publicKey = null;

    var worker = function () {
        var workerInstance = null;

        function register(endpoint) {
            navigator.serviceWorker.register(endpoint)
                .then(function (registeration) {
                    workerInstance = registeration;
                    console.info("Worker is registered!");
                }).catch(function (error) {
                    console.error("Worker was not able to be registered!");
                });
        }

        return function () {
            return {
                register: register,
                instance: function () {
                    if (workerInstance == null) {
                        console.error("Worker is not registered yet!");
                        return;
                    }

                    return workerInstance;
                }
            };
        }();
    }();


    function instance() {
        worker.pushManager.subscribe({

        });
    }

    return function () {
        return {
            publicKey: publicKey,
            setup: worker.register,
        };
    }();
}();