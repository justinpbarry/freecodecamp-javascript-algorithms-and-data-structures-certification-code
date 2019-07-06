let testObj = {
    "a": "hi",
    "b": "cool",
    "c": "yeah",
    test: function() {
        this.forEach(function(el) {
            console.log(el);
        })
    }
}
