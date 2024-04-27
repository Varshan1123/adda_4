function validate() {
                var name =
                    document.forms.Form.Name.value;
                
                var name =
                    document.forms.Form.FatherName.value;
                var name =
                    document.forms.Form.MotherName.value;
                var gender =
                    document.forms.Form.gender.value;
                var email =
                    document.forms.Form.EMail.value;
                var phone =
                    document.forms.Form.Mobilenumber.value;
                var course =
                    document.forms.Form.Subject.value;
                var address =
                    document.forms.Form.Address.value;
                var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  
                var regPhone=/^\d{10}$/;                                        
                var regName = /\d+$/g;                                   
                
                if (name == "" || regName.test(name)) {
                    window.alert("Please enter the valid name properly.");
                    name.focus();
                    return false;
                }
                if (address == "") {
                    window.alert("Please enter your address.");
                    address.focus();
                    return false;
                }
                 
                            align-items: center;
            }
 form { margin: 0 auto;
       width: 600px;
     }
        </style>
      </head>
 
       <body bgcolor="#ffd580">
        <h1 style="text-align: center; color:blueviolet ; font-size: 50px;">Javascript form validation for college application register</h1>
        <form name="Form" onsubmit="return validate()" method="post" action="script.url">
             
<p style="font-size: 30px;"><b>Name:</b><br> <input type="text"size="65" name="Name" /></p><br />
<p style="font-size: 30px;"><b>Date of Birth:</b><br><input type="text" name="dob" size="65"></p><br />

<p style="font-size: 30px;"><b>Father Name:</b><br><input type="text" size="65" name="FatherName"></p><br />
<p style="font-size: 30px;"><b>Mother Name:</b> <br><input type="text" size="65" name="MotherName"></p><br />
<p style="font-size: 30px;"><b> Gender:</b><br>
                <select type="text" value="" name="gender">
                  <option>options</option><br>
                                <option>Male</option><br>
                    <option>Female</option><br>
                   <option>Transgender</option><br>
                   
                if (email == "" || !regEmail.test(email)) {
                    window.alert("Please enter a valid e-mail address.");
                    email.focus();
                    return false;
                }
                if (phone == "" || !regPhone.test(phone)) {
                    alert("Please enter valid phone number.");
                    phone.focus();
                    return false;
                }
 
                if (course.selectedIndex == -1) {
                    alert("Please select your course.");
                    what.focus();
                    return false;
                }
                if (gender.selectedIndex == -1) {
                    alert("Please select the gender.");
                    what.focus();
                    return false;
                }
                return true;
                
            }