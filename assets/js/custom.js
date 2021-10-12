$( document ).ready(function() {
    
    setTimeout(function (){
        $(".lazyload").each(function (index){
            $(this).attr("src", $(this).attr("data-src"));
        })
    },1500);
    
    
jQuery('.destination-slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerPadding: '0px',
  centerMode: false,
  dots:true,
   responsive: [
   {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false 
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
      }
    },
     {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        arrows: false
      }
    }    
  ]
});

$(document).ready(function(){
    $( document ).on( 'focus', ':input', function(){
        $( this ).attr( 'autocomplete', 'off' );
    });
});

jQuery('.testimonial-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll:1,
    arrows: false,  
});
jQuery('.address-slider').slick({
   infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots:true,
     responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        arrows: false
      }
    },
        {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
      }
    }
  ]
});
jQuery('.plan-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
   responsive: [
     {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
         centerMode: true,
        centerPadding: '30px',
      }
    }
  ]
});
if ($(window).width() < 764){
    var slider = $('.plan-slider');
    slider[0].slick.slickGoTo(1);
}

 $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });

//    $(document).on("scroll", onScroll)
    
//     //smoothscroll
//     $('a[href^="#"]').on('click', function (e) {
//         e.preventDefault();
//         $(document).off("scroll");
        
//         $('a').each(function () {
//             $(this).removeClass('active');
//         })
//         $(this).addClass('active');
      
//         var target = this.hash,
//             menu = target;
//         $target = $(target);
//         if ($target.length) {
//              $('html, body').stop().animate({
//             'scrollTop': $target.offset().top - 98
//         }, 500, 'swing', function () {
//             window.location.hash = target;
//             $(document).on("scroll", onScroll);
//         });
//         }
     
//     });
//        $('html,body').animate({
//   scrollTop: $(window.location.hash).offset().top - 95
// }); 
  


  


// function onScroll(event){
//     var scrollPos = $(document).scrollTop();
//     $('.navbar-nav a').each(function () {
//         var currLink = $(this);

//         var refElement = $(currLink.attr("href"));
  
//         if (refElement.position().top - 98 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('.navbar-nav ul li a').removeClass("active");
//             currLink.addClass("active");
//         }
//         else{
//             currLink.removeClass("active");
//         }
//     });
// }

});

jQuery(document).ready(function(){
     $('.location-gallery-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.location-gallery-thumb'
  });
  $('.location-gallery-thumb').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.location-gallery-top',
    focusOnSelect: true,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
       {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
           }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  });
});

$(document).ready(function () {
    var url = window.location;
    $('ul.footer_nav a[href="'+ url +'"]').addClass('active');
    $('ul.navbar-nav a[href="'+ url +'"]').addClass('active');

    $(".chosen-select").chosen({
        no_results_text: "Oops, try again!",
        // width: "100%"
    });
    
    
    $.validator.setDefaults({ ignore: ":hidden:not(select)" });

    // validation of chosen on change
    if ($("select.chosen-select").length > 0) {
        $("select.chosen-select").each(function() {
            if ($(this).attr('required') !== undefined) {
                $(this).on("change", function() {
                    $(this).valid();
                });
            }
        });
    }
    
});

$(document).click(function (event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {
        $("button.navbar-toggle").click();
    }
});

$(document).on('submit', 'form#verifyForgotOTP', function(evt){
    evt.preventDefault();
    $.ajax({
        type: 'POST',
        url: base_url+'/Api/verifyForgotOTP',
        data: new FormData(this),
        contentType: false,
        cache: false,
        processData:false,
        success:function(html){
            html = JSON.parse(html);
            if (html.error == "0") {
                window.location.href = html.url;
            } else {
               $("#forgotverifactionerror").html(html.message);
            }
        }
    });
});

$(document).on('submit', 'form#resetForm', function(evt){
    evt.preventDefault();
    $.ajax({
        type: 'POST',
        url: base_url+'/Api/resetpassword',
        data: new FormData(this),
        contentType: false,
        cache: false,
        processData:false,
        success:function(html){
            html = JSON.parse(html);
            if (html.error == "0") {
                $("#resetthankYou").modal("toggle");
                $("#reseterror").html("");
                $("#resetuname").html(html.uname);
                // setTimeout(function(){ window.location.href = html.url; }, 1500);
            } else {
               $("#reseterror").html(html.message);
            }
        }
    });
});

$(document).on('submit', 'form#emailverifactioncode', function(evt){
    evt.preventDefault();
    $.ajax({
        type: 'POST',
        url: base_url+'/Api/verifyOTPUser',
        data: new FormData(this),
        contentType: false,
        cache: false,
        processData:false,
        success:function(html){
            html = JSON.parse(html);
            if (html.error == "0") {
                $("#mailModal").modal("toggle");
                $("#verifactionsuccess").modal("toggle");
                setTimeout(function(){ window.location.href = html.url; }, 1500);
            } else {
               $("#verifactionerror").html(html.message);
            }
        }
    });
});

$(document).ready(function(){
    setTimeout( function (){
        var wid = $("#cpassworddiv").width() - 1.5;
        $("#mobdiv").css("width", wid+"px");    
    },500);
    
    
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function() {
    
    jQuery.validator.addMethod(
            "regex",
            function(value, element, regexp) 
            {
                if (regexp.constructor != RegExp)
                    regexp = new RegExp(regexp);
                else if (regexp.global)
                    regexp.lastIndex = 0;
                return this.optional(element) || regexp.test(value);
            },
            "Please check your input."
    );
    
    $("#registerForm").validate({
        rules: {
            fname:{
                required: true,
                minlength: 2
            },
            lname:{
                required: true,
                minlength: 2
            },
            email:{
                required: true,
                email: true,
                regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            },
            password:{
                required: true,
                minlength: 8,
                regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).{8,}$/
            },
            cpassword:{
                required: true,
                equalTo: "#rpassword"
            },
            mobile:{
                required: true,
                minlength: 8
            },
        },
        messages: {
            fname:{
                required: "Please enter a minimum of 2 characters",
                minlength: "Please enter a minimum of 2 characters"
            },
            lname:{
                required: "Please enter a minimum of 2 characters",
                minlength: "Please enter a minimum of 2 characters"
            },
            email:{
                required: "Please enter a valid email address",
                email: "Please enter a valid email address",
                regex: "Please enter a valid email address"
            },
            password:{
                required: "Password must be a minimum of 8 characters",
                minlength: "Password must be a minimum of 8 characters",
                regex: "Password must be minimum 8 characters with atleast 1 upper case, 1 lower case, 1 number, and 1 special character(e.g. !%@$&*)"
            },
            cpassword:{
                required: "Please enter confirm password",
                equalTo: "Oops! Your entries do not match. Please try again"
            },
            mobile:{
                required: "Please enter a valid mobile number",
                minlength: "Please enter a valid mobile number"
            }
        }
    });
    
    $("#resetForm").validate({
        rules: {
            password:{
                required: true,
                minlength: 8,
                regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).{8,}$/
            },
            cpassword:{
                required: true,
                equalTo: "#resetpassword"
            },
        },
        messages: {
            password:{
                required: "Password must be a minimum of 8 characters",
                minlength: "Password must be a minimum of 8 characters",
                regex: "Password must be minimum 8 characters with atleast 1 upper case, 1 lower case, 1 number, and 1 special character(e.g. !%@$&*)"
            },
            cpassword:{
                required: "Please enter confirm password",
                equalTo: "Oops! Your entries do not match. Please try again"
            }
        }
    });
    $("#forgotForm").validate({
        rules: {
            email:{
                required: true,
                email:true,
                regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            },
        },
        messages: {
            email:{
                required: "Please enter your email",
                email: "Please enter valid email",
                regex: "Please enter valid email"
            }
        }
    });
    
    $("#purchaseform").validate({
        rules: {
            billing_address:{
                required: true,
                minlength: 20
            },
            billing_district:{
                required: true
            },
            billing_city:{
                required: true
            },
        },
        messages: {
            billing_address:{
                required:"Please enter your address",
                minlength: "Address must be a minimum of 20 characters"
            },
            billing_district:{
                required:"Please enter zip code"
            },
            billing_city:{
                required:"Please select country"
            }
        },
        errorPlacement: function (error, element) {
            console.log("placement");
            if (element.is("select.chosen-select")) {
                console.log("placement for chosen");
                // placement for chosen
                $(".chzn-container").html(error);
            } else {
                // standard placement
                error.insertAfter(element);
            }
        },
        
    });
    
});

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

function openlogin(closemodelid = "")
{
    if (closemodelid != "") {
        $("#"+closemodelid).modal("toggle");
    }
    $("#exampleModal").modal("toggle");
}

function changeplan(id)
{
    $(".passtab").removeClass("active");
    $(".nav-tab"+id).addClass("active");
    $(".tab-pane").removeClass("show");
    $(".tab-pane").removeClass("active");
    $("#nav"+id).addClass("active");
    $("#nav"+id).addClass("show");
    $(".selectedplan").html("");
    $("#selectedplan"+id).html("<img src='"+base_url+"/assets/images/checked.png'>");
}

function logout()
{
    $.ajax({
        type: 'POST',
        dataType:'json',
        url: base_url+'/Api/logout',
        // contentType: false,
        cache: false,
        processData:false,
        success:function(response){
            window.location.href = response.url;
        }
    });
}

function passwordhideshowbtn()
{
    if ($(".passwordhideshowbtn").attr("data-status") == "hide") {
        $(".passwordhideshowbtn").attr("data-status", "show");
        $("#loginpassword").attr("type", "text");
        $(".passwordhideshowbtn").html("<i class='fa fa-fw fa-eye field_icon'></i>");
    } else {
        $(".passwordhideshowbtn").attr("data-status", "hide");
        $("#loginpassword").attr("type", "password");
        $(".passwordhideshowbtn").html("<i class='fa fa-fw fa-eye-slash field_icon'></i>");
    }
}

function search(val, searchby)
{
    window.location.href = base_url+"/locations?"+searchby+"="+val;
}
function freetrialform()
{
    if (user_login == "1") {
        $("#freetrialform").submit();    
    } else {
        openlogin();
    }
    
}

function applypromocode()
{
    var promocode = $("#promocode").val();
    $.ajax({
        dataType:'json',
        type:'post',
        data:'promocode='+promocode,
        url:base_url+'/Api/applypromocode',
        catch:false,
        success: function (result) {
            if (result.error == 0) {
                $("#discount_amt").html(result.discount);
                $("#pay_amt").html(result.pay_amt);
                if (result.free) {
                    $("#paymentprocess").modal("show");
                    setTimeout(function(){ location.reload(); }, 5000);
                }
            } else {
                $("#promocode").removeClass("promosuccess");
                $("#promocode").addClass("promoerror");    
            }
            
            $("#promomessage").html(result.message);
        }
    });
}

function resendregisterotp()
{
    var email = $("#formoptemail").val();
    $.ajax({
        dataType:'json',
        type:'post',
        url:base_url+'/Api/resendregisterotp',
        data:'email='+email,
        catch:false,
        success: function (result) {
            $("#verifactionerror").html(result.message);
        }
    });
}

function resendforgototp()
{
    var email = $("#otpforgotemail").val();
    $.ajax({
        dataType:'json',
        type:'post',
        url:base_url+'/Api/resendforgototp',
        data:'email='+email,
        catch:false,
        success: function (result) {
            console.log(result);
            $("#forgotverifactionerror").html(result.message);
        }
    });
}


$( function() {
    try {
 // Single Select
 $( "#autocomplete" ).autocomplete({
  source: function( request, response ) {
    //   var city = $("#citydropdown").val();
    //   var dist = $("#distdropdown").val();
      var city = "";
      var dist = "";
   // Fetch data
   $.ajax({
    url: base_url+"/Api/search",
    type: 'post',
    dataType: "json",
    data: {
     search: request.term,
     city:city,
     district:dist
    },
    success: function( data ) {
     response( data );
    }
   });
  },
  
  select: function (event, ui) {
   // Set selection
   $('#autocomplete').val(ui.item.label); // display the selected text
//   $('#selectuser_id').val(ui.item.value); // save selected id to input
   return false;
  }
 })
 .data("ui-autocomplete")._renderItem = function (ul, item) {
        var newText = String(item.value).replace(
                new RegExp(this.term, "gi"),
                "<span class='ui-state-highlight'>$&</span>");

        return $("<li></li>")
            .data("item.autocomplete", item)
            .append("<div>" + newText + "</div>")
            .appendTo(ul);
    };
    
    } catch(e) {
        
    }

});

// area autocomplete box
$( function() {
    try {
 // Single Select
 $( "#autocompletelocation" ).autocomplete({
  source: function( request, response ) {
   $.ajax({
    url: base_url+"/Api/searcharea",
    type: 'post',
    dataType: "json",
    data: {
     search: request.term,
    },
    success: function( data ) {
     response( data );
    }
   });
  },
  
  select: function (event, ui) {
   // Set selection
   $('#autocompletelocation').val(ui.item.label); // display the selected text
//   $('#selectuser_id').val(ui.item.value); // save selected id to input
   return false;
  }
 })
 .data("ui-autocomplete")._renderItem = function (ul, item) {
        var newText = String(item.value).replace(
                new RegExp(this.term, "gi"),
                "<span class='ui-state-highlight'>$&</span>");

        return $("<li></li>")
            .data("item.autocomplete", item)
            .append("<div>" + newText + "</div>")
            .appendTo(ul);
    };
    
    } catch(e) {
        
    }

});









function split( val ) {
   return val.split( /,\s*/ );
}
function extractLast( term ) {
   return split( term ).pop();
}

function placeorder()
{
    $('#payment').modal('toggle');
    $('#paymentsuccess').modal('toggle');
}

function searchlocation(form, searchid)
{
    $("#autocomplete").val("");
    $("#"+form).submit();
}
function clearbox(id)
{
    $("#"+id).val("");
}

$(document).ready(function(){
    $('#cardpayment').on('hidden.bs.modal', function () {
        $(".paymentbtn").attr("disabled", false);
    });
    $('#wechatpayqrcode').on('hidden.bs.modal', function () {
        $(".paymentbtn").attr("disabled", false);
    });
});

function paycard()
{
    $(".paymentbtn").attr("disabled", true);
    $.ajax({
        dataType: "json",
        type: 'get',
        url: base_url+"/Api/stripcardpay",
        catch:false,
        success: function( data ) {
            if (data.error == 0) {
                if (data.subscribe) {
                    cardsubscribepayment(data.customer_name)
                } else {
                    cardpayment(data.payment_id, data.customer_name);    
                }
                
            }
        }
    });
}

function cardsubscribepayment(customername)
{
    var stripe = Stripe(strip_key);
    
    var elements = stripe.elements({
      fonts: [
          {
              // cssSrc: 'http://fontlibrary.org/face/metropolis',
          },
      ]
    });
    var style = {
      base: {
        fontSize: "14px",
        // fontFamily: 'metropolisbold',
        textTransform: "uppercase",
        color: "#2e2d2b",  
        textAlign: "center",
      }
    };
    
    var elementClasses = {
      focus: 'focused',
      empty: 'empty',
      invalid: 'invalid',
    };
    
    var card = elements.create('cardNumber', {
      hidePostalCode: true,
      placeholder: "CARD NUMBER",
      style: style,
      classes: elementClasses,
    });
    card.mount('#card-element');
    
    var cardExpiry = elements.create('cardExpiry', {
      style: style,
      classes: elementClasses,
    });
    cardExpiry.mount('#card-expiry');
    
    var cardCvc = elements.create('cardCvc', {
      style: style,
      classes: elementClasses,
    });
    cardCvc.mount('#card-cvc');
    
    var cardstatus = 0;
    var cardexp = 0;
    var cardcvv = 0;
    
    card.addEventListener('change', function(event) {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
          cardstatus = 0;
        displayError.textContent = event.error.message;
      } else {
          cardstatus = 1;
          console.log("card : "+cardstatus);
          
        displayError.textContent = '';
        
      }
      if (cardstatus == 1 && cardexp == 1 && cardcvv == 1) {
            $(".cardpaybtn").removeAttr("disabled");
        } else {
            $(".cardpaybtn").attr("disabled", "disabled");
        }
    });
    cardCvc.addEventListener('change', function(event) {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
          cardcvv = 0;
        displayError.textContent = event.error.message;
      } else {
          cardcvv = 1;
          console.log("CVV : "+cardcvv);
          
        displayError.textContent = '';
        
      }
      if (cardstatus == 1 && cardexp == 1 && cardcvv == 1) {
            $(".cardpaybtn").removeAttr("disabled");
        } else {
            $(".cardpaybtn").attr("disabled", "disabled");
        }
    });
    cardExpiry.addEventListener('change', function(event) {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
          cardexp = 0;
        displayError.textContent = event.error.message;
      } else {
          cardexp = 1;
          console.log("EXP : "+cardexp);
          
        displayError.textContent = '';
        
      }
      if (cardstatus == 1 && cardexp == 1 && cardcvv == 1) {
            $(".cardpaybtn").removeAttr("disabled");
        } else {
            $(".cardpaybtn").attr("disabled", "disabled");
        }
    });
    
    $("#cardpayment").modal("toggle");
    
    
    
    var form = document.getElementById('paymentform');
    
    form.addEventListener('submit', function(ev) {
        $("#cardpayment").modal("toggle");
        $("#paymentprocess").modal("show");
        ev.preventDefault();
        
        stripe.createToken(card).then(function(response) {
            console.log(response);
            if (response.error) {
                $("#paymentprocess").modal("hide");
                $("#oppsmodal").modal("toggle");
                $("#oppserrormsg").html("Please try again!");
            } else {
                var token = response.token.id;
                $.ajax({
                    dataType:'json',
                    type:'post',
                    url:base_url+'/Api/paymenttoken',
                    data:response,
                    catch:false,
                    statusCode: {
                        500: function() {
                            $("#paymentprocess").modal("hide");
                            $("#oppsmodal").modal("toggle");
                            $("#oppserrormsg").html("Please try again!");
                        }
                    },
                    success: function (data) {
                        console.log(data);
                        if (data.error == 0) {
                            window.location.replace(data.url);     
                        } else if (data.error == 2) {
                            var paymentIntentSecret = data.payment_id;
                            stripe.confirmCardPayment(paymentIntentSecret).then(function(result) {
                              if (result.error) {
                                console.log("fail");
                              } else {
                                $("#paymentsuccess").modal("toggle");
                                $.ajax({
                                    dataType:'json',
                                    type:'post',
                                    url:base_url+'/Api/paymentauthsuccess?subscription_id='+data.subscription_id,
                                    data:response,
                                    catch:false,
                                    success: function (ndata) {
                                        window.location.replace(ndata.url); 
                                    }
                                });
                              }
                              console.log(result);
                              
                            });
                        } else {
                            $("#paymentprocess").modal("hide");
                            $("#oppsmodal").modal("toggle");
                            $("#oppserrormsg").html(result.error.message);
                        }
                        
                    }
                });
            }
            
        });
    });
}

function cardpayment(clientSecret, customername)
{
    var stripe = Stripe(strip_key);
    
    var elements = stripe.elements({
      fonts: [
          {
              // cssSrc: 'http://fontlibrary.org/face/metropolis',
          },
      ]
    });
    var style = {
      base: {
        fontSize: "14px",
        // fontFamily: 'metropolisbold',
        textTransform: "uppercase",
        color: "#2e2d2b",  
        textAlign: "center",
      }
    };
    
    var elementClasses = {
      focus: 'focused',
      empty: 'empty',
      invalid: 'invalid',
    };
    
    var card = elements.create('cardNumber', {
      hidePostalCode: true,
      placeholder: "CARD NUMBER",
      style: style,
      classes: elementClasses,
    });
    card.mount('#card-element');
    
    var cardExpiry = elements.create('cardExpiry', {
      style: style,
      classes: elementClasses,
    });
    cardExpiry.mount('#card-expiry');
    
    var cardCvc = elements.create('cardCvc', {
      style: style,
      classes: elementClasses,
    });
    cardCvc.mount('#card-cvc');
    
    var cardstatus = 0;
    var cardexp = 0;
    var cardcvv = 0;
    
    card.addEventListener('change', function(event) {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
          cardstatus = 0;
        displayError.textContent = event.error.message;
      } else {
          cardstatus = 1;
          console.log("card : "+cardstatus);
          
        displayError.textContent = '';
        
      }
      if (cardstatus == 1 && cardexp == 1 && cardcvv == 1) {
            $(".cardpaybtn").removeAttr("disabled");
        } else {
            $(".cardpaybtn").attr("disabled", "disabled");
        }
    });
    cardCvc.addEventListener('change', function(event) {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
          cardcvv = 0;
        displayError.textContent = event.error.message;
      } else {
          cardcvv = 1;
          console.log("CVV : "+cardcvv);
          
        displayError.textContent = '';
        
      }
      if (cardstatus == 1 && cardexp == 1 && cardcvv == 1) {
            $(".cardpaybtn").removeAttr("disabled");
        } else {
            $(".cardpaybtn").attr("disabled", "disabled");
        }
    });
    cardExpiry.addEventListener('change', function(event) {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
          cardexp = 0;
        displayError.textContent = event.error.message;
      } else {
          cardexp = 1;
          console.log("EXP : "+cardexp);
          
        displayError.textContent = '';
        
      }
      if (cardstatus == 1 && cardexp == 1 && cardcvv == 1) {
            $(".cardpaybtn").removeAttr("disabled");
        } else {
            $(".cardpaybtn").attr("disabled", "disabled");
        }
    });
    
    $("#cardpayment").modal("toggle");
    
    
    
    var form = document.getElementById('paymentform');
    
    form.addEventListener('submit', function(ev) {
        $("#cardpayment").modal("toggle");
        $("#paymentprocess").modal("show");
        ev.preventDefault();
        
        
      
      stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: customername
          }
        }
      }).then(function(result) {
        if (result.error) {
            // console.log(result.error.message);
            $("#paymentprocess").modal("hide");
            $("#oppsmodal").modal("toggle");
            $("#oppserrormsg").html(result.error.message);
            // alert(result.error.message);
            // alert("Payment Fail please try again!");
        } else {
            if (result.paymentIntent.status === 'succeeded') {
                $("#paymentsuccess").modal("toggle");
                $.ajax({
                    dataType:'json',
                    type:'post',
                    url:base_url+'/Api/paymentsuccesscard',
                    data:result,
                    catch:false,
                    success: function (data) {
                        // console.log(data);
                        window.location.replace(data.url); 
                    }
                });
            } else {
                $("#paymentprocess").modal("hide");
                $("#oppsmodal").modal("toggle");
                $("#oppserrormsg").html(result.error.message);
            }
        }
      });
    });
}

function alipay()
{
    $(".paymentbtn").attr("disabled", true);
    $("#paymentprocess").modal("toggle");
    $.ajax({
        dataType: "json",
        type: 'get',
        url: base_url+"/Api/stripalipaypay",
        catch:false,
        success: function( data ) {
            // console.log(data);
            if (data.error == 0) {
                window.location.replace(data.url);
            }
        }
    });
}
function wepay()
{
}


function registerElements(elements, exampleName) {

}

$(function(){
    $('[data-button-source]').click(function(){
        gtag('event', 'join-click', {
            'source': $(this).data('button-source')
        });
    });
});