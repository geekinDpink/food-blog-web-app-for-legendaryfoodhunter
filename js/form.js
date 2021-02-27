function validateInput() {

    //I. Get value from the form
    //Alternate method: var contactNumber = document.forms["feedbackForm"]["contactNumber"].value;
    var name = document.getElementById("name").value;
    var contactNumber = document.getElementById("contactNumber").value;
    var email = document.getElementById("email").value;
    var eatery = document.getElementById("eatery").value;
    var postalcode = document.getElementById("postalcode").value;
    var description = document.getElementById("description").value;
    var foodType = document.getElementById("foodType").value;
    var isSubmit = true;

    //get the value of selected radio for area
    var areaGrp = document.getElementsByName("area");
    var area;
    for (var i of areaGrp) {
        if (i.checked) {
            area = i.value;
        }
    }

    //get the value of selected checkbox(es) for cuisinetype
    /* if there is more than one group of checkbox, use below
    var cuisinetypeGrp = document.querySelectorAll("input[type=checkbox][name=cuisinetype]:checked").value;
    */
    var cuisinetypeGrp = document.querySelectorAll("input[type=checkbox]:checked");



    //II. Validate fields
    //Name is Required
    if (!name) {
        document.getElementById("nameError").innerHTML = "Name required";
        document.getElementById("nameError").style.display = "block";
        isSubmit = false;
    }

    //Accept contact number that consist of numbers only and has 8 digit (length).
    if (!contactNumber) {
        document.getElementById("contactNumberError").innerHTML = "Contact number required";
        document.getElementById("contactNumberError").style.display = "block";
        isSubmit = false;
    }
    else if (isNaN(contactNumber)) {
        document.getElementById("contactNumberError").innerHTML = "Key in numbers only";
        document.getElementById("contactNumberError").style.display = "block";
        isSubmit = false;
    }
    else if (contactNumber.length < 8) {
        document.getElementById("contactNumberError").innerHTML = "Invalid Contact Number. Phone Number should have 8 digits instead of" + contactNumber.length + " digit(s).";
        document.getElementById("contactNumberError").style.display = "block";
        isSubmit = false;
    }

    //Accept email address with "@" and ".".
    if (!email) {
        document.getElementById("emailError").innerHTML = "Email required";
        document.getElementById("emailError").style.display = "block";
        isSubmit = false;
    }
    else if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").innerHTML = "Email is not valid";
        document.getElementById("emailError").style.display = "block";
        isSubmit = false;
    }

    //Name of eatery is required
    if (!eatery) {
        document.getElementById("eateryError").innerHTML = "Name of eatery required";
        document.getElementById("eateryError").style.display = "block";
        isSubmit = false;
    }

    //Accept 1 radio option. Reject submission if 0 radio option selected.
    if (!area) {
        document.getElementById("areaError").innerHTML = "Please select one radio option.";
        document.getElementById("areaError").style.display = "block";
        isSubmit = false;
    }

    //Accept only number and length to be 6 char long
    if(!postalcode){
        document.getElementById("postalcodeError").innerHTML = "Postal Code Required";
        document.getElementById("postalcodeError").style.display = "block";
        isSubmit = false;
    }
    else if (isNaN(postalcode)) {
        document.getElementById("postalcodeError").innerHTML = "Key in numbers only e.g. from 0 to 9";
        document.getElementById("postalcodeError").style.display = "block";
        isSubmit = false;
    }
    else if (postalcode.length < 6) {
        document.getElementById("postalcodeError").innerHTML = "Invalid Postal Code.Postal code should have 6 digits instead of " + postalcode.length + " digit(s).";
        document.getElementById("postalcodeError").style.display = "block";
        isSubmit = false;
    }

    //Accept at least 1 or more checkbox
    if (cuisinetypeGrp.length < 1) {
        document.getElementById("cuisinetypeError").innerHTML = "Please select one or more of the option (check box).";
        document.getElementById("cuisinetypeError").style.display = "block";
        isSubmit = false;
    }

    //Reject default value, "Please Select". User must select one option from dropdown.
    if (foodType=="default") {
        document.getElementById("foodTypeError").innerHTML = "Please select from dropdown.";
        document.getElementById("foodTypeError").style.display = "block";
        isSubmit = false;
    }

    //Description required.
    if(!description) {
        document.getElementById("descriptionError").innerHTML = "Description required.";
        document.getElementById("descriptionError").style.display = "block";
        isSubmit = false;
    }

    //III. Alert window for outcome of submission
    if (isSubmit == true) {
        alert("Submission is successful");
    }
    else {
        alert("Please fill up missing/incorrect particulars");
    }
}