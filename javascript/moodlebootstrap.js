require(['core/first'], function() {
    require(['theme_bootstrap3/bootstrap', 'core/log'], function(bootstrap, log) {
        log.debug('Bootstrap3 initialised');
    });
});
