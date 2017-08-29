app.controller("FormController", ["$scope", function($scope) {
    $scope.vm = this; //view model
    $scope.vm.contact = {};
    
    $scope.vm.contactFields = [
        {
            key: "name",
            type: "input", 
            templateOptions: {
                label: "Full Name",
                placeholder: "Name", 
                required: true, 
                description: "Please enter your full name"
            }
        },
        {
            key: "email",
            type: "input", 
            templateOptions: {
                label: "Email",
                placeholder: "email@address.com",
                required: true,
                description: "Please enter the best email to contact you at"
            }
        },
        {
            key: "phone",
            type: "input", 
            templateOptions: {
                label: "Phone Number",
                placeholder: "xxx-xxx-xxxx",
                required: true,
                description: "Please enter the best phone number to contact you at"
            }
        },
        {
            key: "year",
            type: "input", 
            templateOptions: {
                label: "Your vehicles year",
                placeholder: "xxxx",
                required: true,
            }
        },
        {
            key: "make",
            type: "input", 
            templateOptions: {
                label: "Your vehicles make",
                placeholder: "Ex: Honda, Harley Davidson, etc",
                required: true,
            }
        },
        {
            key: "model",
            type: "input", 
            templateOptions: {
                label: "Your vehicles model",
                placeholder: "Ex: Shadow Spirit VT750C2A",
                required: true,
                description: "Please be as accurate as possible. Include submodel if known"
            }
        },
        {
            key: "question",
            type: "textarea",
            templateOptions: {
                label: "What do you need?",
                placeholder: "Ask your question here",
                required: true,
                description: "Please include as much detail as you can when asking a question. We will get back to you as soon as we can either via email or phone. Thank you!"
            }
        }
    ];
    
    $scope.vm.onSubmit = onSubmit;
    
    function onSubmit() {
        console.log("form submitted:", $scope.vm.contact);
    }
}])