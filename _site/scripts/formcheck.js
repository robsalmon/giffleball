/*jshint globalstrict: true */
"use strict";

if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}

var contactMeSpace = {
    //create a new array to hold the validations
    validations: []
};


contactMeSpace.validations[0] = ["document.forms[0].fullName", "checkName"];
contactMeSpace.validations[1] = ["document.forms[0].email", "checkEmail"];
contactMeSpace.validations[2] = ["document.forms[0].email", "checkValidEmail"];
contactMeSpace.validations[3] = ["document.forms[0].subject", "checkSubject"];
contactMeSpace.validations[4] = ["document.forms[0].formMessage", "checkMessage"];


/**
 * Check to see if a string is empty
 * @param {string} s
 * @returns {Boolean}
 */
function isEmpty(s) {
    
return !s || !s.trim();

}

/**
 * Check that a name has been entered in the field but displays an error message if not
 * @param {object} field
 * @returns {Boolean}
 */
function checkName(field) {
var a = field.value, nameErr = document.getElementById("nameErr"), nameErrText = nameErr.firstChild, newText, ThankYouText;
    if (isEmpty(a)) {
        if (nameErr && document.createTextNode) {
            nameErr.className = "formError";
            newText = document.createTextNode("Please enter your name");
            nameErr.replaceChild(newText, nameErrText);

        } else {
            alert("Please enter your name");
        }
        return false;
    }
    if (nameErr && document.createTextNode) {
        nameErr.className = "formThankYou";
        ThankYouText = document.createTextNode("Thank you!");
        nameErr.replaceChild(ThankYouText, nameErrText);
    }
    return true;
}

/**
 * Check that the email address field is not empty and display an error message if not
 * @param {object} field
 * @returns {Boolean}
 */
function emailNotBlank(field) {
    var b = field.value, emailErr = document.getElementById("emailErr"), emailErrText = emailErr.firstChild, newText;
    if (isEmpty(b)) {
        if (emailErr && document.createTextNode) {
            emailErr.className = "formError";
            newText = document.createTextNode("Please enter a valid email address");
            emailErr.replaceChild(newText, emailErrText);
        } else {
            alert("Please enter a valid email address");
        }
        return false;
    }
    return true;
}

/**
 * Check that a valid email address has been entered but display an error message is not
 * @param {object} field
 * @returns {Boolean}
 */
function validEmail(field) {
    var c = field.value, 
            emailErr = document.getElementById("emailErr"), 
            emailErrText = emailErr.firstChild, 
            pattern = /[^@]+@\w+/, 
            newText = document.createTextNode("Please enter a valid email address");
    if (isEmpty(c)) {

        if (emailErr && newText) {
            emailErr.className = "formError";
            emailErr.replaceChild(newText, emailErrText);
        } else {
            alert("Please enter a valid email address");
        }
        return false;
    }
    if (pattern.test(c)) {
        return true;
    } else {
        if (emailErr && newText) {
            emailErr.className = "formError";
            emailErr.replaceChild(newText, emailErrText);

        } else {
            alert("Please enter a valid email address");
        }
        return false;
    }
  
}

/**
 * If a telephone number is entered in field say thank you
 * @param {object} field
 * @returns {Boolean}
 */
function isOptTelNumber(field) {
    var d = field.value, telErr = document.getElementById("telErr"), telErrText = telErr.firstChild, thankYouText;
    if (!isEmpty(d)) {
        if (telErr && document.createTextNode) {
            telErr.className = "formThankYou";
            thankYouText = document.createTextNode("Thank you!");
            telErr.replaceChild(thankYouText, telErrText);
        }
        return true;
    }
}

/**
 * If a job title has been entered in the field, say thank you
 * @param {object} field
 * @returns {Boolean}
 */
function isOptJobTitle(field) {
    var d = field.value, labeljobTitle = document.getElementById("jobTitleTh"), labeljobTitleText = labeljobTitle.firstChild, ThankYouText, spaceText;
    if (!isEmpty(d)) {
        if (labeljobTitle && document.createTextNode) {
            labeljobTitle.className = "formThankYou";
            ThankYouText = document.createTextNode("Thank you!");
            labeljobTitle.replaceChild(ThankYouText, labeljobTitleText);

        }
        return true;
    }
    if (labeljobTitle && document.createTextNode) {
        spaceText = document.createTextNode("\u00a0");
        labeljobTitle.replaceChild(spaceText, labeljobTitleText);
    }
    return true;
}

/**
 * If the name of an organisation is entered in field, say thank you
 * @param {object} field
 * @returns {Boolean}
 */
function isOptOrg(field) {
    var e = field.value, labelOrg = document.getElementById("orgNameTh"), labelOrgText = labelOrg.firstChild;
    if (!isEmpty(e)) {
        if (labelOrg && document.createTextNode) {
            labelOrg.className = "formThankYou";
            var ThankYouOrgText = document.createTextNode("Thank you!");
            labelOrg.replaceChild(ThankYouOrgText, labelOrgText);
            
        }
        return true;
    } else {
        if (labelOrg && document.createTextNode) {
            var spaceOrgText = document.createTextNode("\u00a0");
            labelOrg.replaceChild(spaceOrgText, labelOrgText);
        }
    }
    return true;
}

/** 
 * Check that a subject has been entered but display an error message if not
 * @param {object} field
 * @returns {Boolean}
 */
function checkSub(field) {
    var f = field.value, errSub = document.getElementById("subErr"), errSubText = errSub.firstChild;
    if (isEmpty(f)) {
        if (errSub && document.createTextNode) {
            errSub.className = "formError";
            var newSubErrText = document.createTextNode("Please enter a subject for your message");
            errSub.replaceChild(newSubErrText, errSubText);
           
        } else {
            alert("Please enter a subject for your message");
        }
        return false;
    } else {
        return true;
    }
}

/**
 * Check that a message has been entered in field but display an error message if not
 * @param {object} field
 * @returns {Boolean}
 */
function checkMess(field) {
    var g = field.value;
    var errMess = document.getElementById("messErr");
    var errMessText = errMess.firstChild;
    if (isEmpty(g))
    {
        if (errMess && document.createTextNode) {
            var newErrMessText = document.createTextNode("You will need to enter your message before you can submit this form");
            errMess.replaceChild(newErrMessText, errMessText);
            errMess.style.color = "red";
            errMess.style.fontWeight = "bold";
        } else {
            alert("You will need to enter your message before you can submit this form");
        }
        return false;
    } else {
        if (errMess && document.createTextNode)
        {
            var messThankText = document.createTextNode("Thank you!");
            errMess.replaceChild(messThankText, errMessText);
            errMess.style.color = "#99cc33";
            errMess.style.fontWeight = "bold";
        }
        return true;
    }
}
/**
 * When the fullname field is exited or changed check to see if it is empty or not
 * @returns {Boolean}
 */
function chkFNevent() {
    var chFullName = document.getElementById("fullName");
    if (chFullName) {
        chFullName.onblur = function () {
            checkName(chFullName);
        };
        chFullName.onchange = function () {
            checkName(chFullName);
        };
        return true;
    } else
    {
        return true;
    }
    return true;
}

/**
 *  When the email field is exited or changed check to see if it is empty or not
 * @returns {Boolean} */
function chEmailEvent()
{
    var chEmail = document.getElementById("email");
    if (chEmail) {
        chEmail.onblur = function () {
            emailNotBlank(chEmail);
        };
        chEmail.onchange = function () {
            emailNotBlank(chEmail);
        };
        return true;
    } else
    {
        return true;
    }
}

/**
 *  When the email field is exited or changed check to see if it a valid email has been entered
 * @returns {Boolean} */
function chValidEmailEvent()
{
    var chValidEmail = document.getElementById("email");
    if (chValidEmail) {
        chValidEmail.onblur = function () {
            validEmail(chValidEmail);
        };
        chValidEmail.onchange = function () {
            validEmail(chValidEmail);
        };
        return true;
    } else
    {
        return true;
    }
}

/**
 *  When the telephone field is exited or changed check to see if it is empty or not
 * @returns {Boolean} 
 */
function chValidTelEvent()
{
    var chTel = document.getElementById("telephone");
    if (chTel) {
        chTel.onblur = function () {
            isOptTelNumber(chTel);
        };
        chTel.onchange = function () {
            isOptTelNumber(chTel);
        };
        return true;
    } else
    {
        return true;
    }
}
/**
 * When the Job title field is exited or changed check to see if it is empty or not
 * @returns {Boolean} */
function chOptJTevent()
{
    var chOptJT = document.getElementById("jobTitle");
    if (chOptJT) {
        chOptJT.onblur = function () {
            isOptJobTitle(chOptJT);
        };
        chOptJT.onchange = function () {
            isOptJobTitle(chOptJT);
        };
        return true;
    } else
    {
        return true;
    }
}
/**
 * When the Organisation field is exited or changed check to see if it is empty or not
 * @returns {Boolean} */
function chOpOrgevent()
{
    var chOrgName = document.getElementById("orgName");
    if (chOrgName) {
        chOrgName.onblur = function () {
            isOptOrg(chOrgName);
        };
        chOrgName.onchange = function () {
            isOptOrg(chOrgName);
        };
        return true;
    } else
    {
        return true;
    }
}

/**
 * When the subject field is exited or changed check to see if it is empty or not
 
 * @returns {Boolean} */
function chSubEvent()
{
    var chSub = document.getElementById("subject");
    if (chSub) {
        chSub.onblur = function () {
            checkSub(chSub);
        };
        chSub.onchange = function () {
            checkSub(chSub);
        };
        return true;
    } else
    {
        return true;
    }
}

/**
 * When the Message field is exited or changed check to see if it is empty or not
 * @returns {Boolean} */
function chkMessEvent() {
    var chformMessage = document.getElementById("formMessage");
    if (chformMessage) {
        chformMessage.onblur = function () {
            checkMess(chformMessage);
        };
        chformMessage.onchange = function () {
            checkMess(chformMessage);
        };
        return true;
    } else
    {
        return true;
    }
    return true;
}

/**
 *  When the form is submitted loop through the validations for each form field
 * @returns {Boolean} 
 */
function validate()
{
    document.forms[0].onsubmit = function ()
    {
        var i, checkToMake, field, vlength = contactMeSpace.validations.length;
        for (i = 0; i < vlength; i++)
        {
       
          field = Function('"use strict;"; return (' + contactMeSpace.validations[i][0] + ')')();
          console.log(field);
            checkToMake = contactMeSpace.validations[i][1];
            switch (checkToMake)
            {
                case "checkName":
                    if (!checkName(field))
                    {
                        field.focus();
                        return false;
                    }
                    break;
                case "checkEmail":
                    if (!emailNotBlank(field))
                    {
                        field.focus();
                        return false;
                    }
                    break;
                case "checkValidEmail":
                    if (!validEmail(field))
                    {
                        field.focus();
                        return false;
                    }
                    break;
                case "checkSubject":
                    if (!checkSub(field))
                    {
                        field.focus();
                        return false;
                    }
                    break;
                case "checkMessage":
                    if (!checkMess(field))
                    {
                        field.focus();
                        return false;
                    }
                    break;
                default:
                    return false;
        
            }
        }
        return true;
    };
    return true;
}


window.onload = function () {
    chkFNevent();
    chEmailEvent();
    chValidEmailEvent();
    chValidTelEvent();
    chOptJTevent();
    chSubEvent();
    chkMessEvent();
    validate();
    chOpOrgevent();
};