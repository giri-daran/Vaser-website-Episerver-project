$('.lblsTP-vsr-qus-1').unwrap('<div class="Form__Element FormChoice"/>');
$('.lblsTP-vsr-qstwo-chce').unwrap('<div class="Form__Element FormChoice"/>');

$('.field-container.vsr-qus-1').wrap('<div class="row text-left pad-15 row-2"/>');
$('.field-container.vsr-qstwo-chice ,.field-container.vsr-qes-3').wrapAll('<div class="fields-wrapper"><div class="row text-left pad-15 row-3"/></div>');
$('.ipt-vsr-ysBillNo').unwrap('<div/>');
$('.field-container.vsr-whch-Brd-Intsrd').wrap('<div class="row text-left pad-15 row-5"/>');

$('.field-container.vsr-frst-nme ,.field-container.vsr-lSt-Nme').wrapAll('<div class="offsetTop clearfix text-left vsrFWrp-Frt-Sec"><div class="row row-6"/></div>');
$('.field-container.vsr-PracNme-Bx').wrap('<div class="offsetTop clearfix text-left vsrFWrp-prcnme-Scnd-Sec"><div class="row row-7"/></div>');

$('.field-container.Vsr-adrsssection-Ques-1, .field-container.Vsr-adrsssection-QUes-2, .field-container.Vsr-adrsssection-QueS-3, .field-container.Vsr-adrsssection-Ques-4').wrapAll('<div class="offsetTop clearfix address-inputs text-left VSR_Adrs-Maincls"><div class= "row row-8"><div class="col-lg-12 vSR-adrS-SEC-COLmn"/></div></div>')
$('.VSR_Adrs-Maincls .vSR-adrS-SEC-COLmn').prepend('<div class="field-container af-slide  col-sm-2 btnc-left"><p class="ng-pristine ng-untouched ng-address ng-valid ng-binding ng-not-empty">Address</p></div>');
$('.VSR_Adrs-Maincls .vSR-adrS-SEC-COLmn').append('<div class="field-container af-slide col-sm-offset-2 col-sm-5 "><div class= "label-top"> <label for="StateProvinceRegion" class="control-label af-slide  required "> </label></div ><div class="bgGray required ng-pristine ng-untouched ng-valid ng-isolate-scope ng-not-empty ng-valid-minlength" id="Country"><div class="angucomplete-holder"><div class="drop-down"><div class="selected"><a href="#"><span id="Country_value" name="Country_value" data-val="/United States">United States</span></a></div><div class="options"><ul style="display: none;"><li><a href="#">United States<span class="value">United States</span></a></li></ul></div></div></div></div></div>');


$('.field-container.vsr-Phne-NoSec').wrap('<div class="offsetTop clearfix text-left vsr-Main-phn-Bx"><div class="row row-9"/></div>');
$('.field-container.VSr-Emal-adrs-bx').wrap('<div class="offsetTop clearfix text-left vsr-Mn-EAddrs-BX"><div class="row row-10"/></div>');


$('label.VSr-lbl-adtnal-cmts').wrap('<div class="label-top"/>');
$('.vsrs-Ctrldiv-Adtinl-cmts').wrap('<div class="offsetTop clearfix text-left vsr_Addtnal-Cmts"><div class= "row row-11"><div class="col-lg-12 pad-0"/></div></div>');

$('.vsrFWrp-Frt-Sec, .vsrFWrp-prcnme-Scnd-Sec, .VSR_Adrs-Maincls, .vsr-Main-phn-Bx, .vsr-Mn-EAddrs-BX, .vsr_Addtnal-Cmts').wrapAll('<div class="fields-wrapper"/>')

$('.field-container.vsr-Submt-BTN').wrap('<div class="row contact-submit-row"><div class= "col-12 button-right SbtMain-btn"/></div>');
$('.SbtMain-btn').append('<a class="reload-window bottom" data-dismiss="modal">Cancel</a>');

/*-----------------------------------*/

$('.vsr-ru-thrd-prty').attr('id', 'Areyouaphysicianpatientorathirdparty');
$('.vsr-ru-thrd-prty .radio input').attr('name', 'Areyouaphysicianpatientorathirdparty');
$('.vsr-ru-custmr-qustwo').attr('id', 'Areyouacurrentcustomer');
$('.vsr-ru-custmr-qustwo input[value="True"]').attr('id', 'yescurrentcustomer');
$('.vsr-ru-custmr-qustwo input[value="False"]').attr('id', 'nocurrentcustomer');
$('.vsr-qes-3').attr('id', 'div_billno');
$('.vsr-qes-3 input.ipt-vsr-ysBillNo').attr('id', 'IfyesinputyourBilltoIDnumber');
$('.vsr-qes-3 input.ipt-vsr-ysBillNo').attr('name', 'IfyesinputyourBilltoIDnumber');
$('.vsr-qes-3 input.ipt-vsr-ysBillNo').attr('maxlength', '50');
$('.vsr-whch-Brd-Intsrd').attr('id', 'Whichbrandsareyouinterestedin');
$('.vsr-whch-Brd-Intsrd .checkbox input').attr('name', 'Whichbrandsareyouinterestedin');
$('.vsr-Ques4-Brd-BX input[value="Thermage"]').attr('id', 'Whichbrandsareyouinterestedin-0');
$('.vsr-Ques4-Brd-BX input[value="Clear + Brilliant"]').attr('id', 'Whichbrandsareyouinterestedin-1');
$('.vsr-Ques4-Brd-BX input[value="Fraxel"]').attr('id', 'Whichbrandsareyouinterestedin-2');
$('.vsr-Ques4-Brd-BX input[value="VASERlipo"]').attr('id', 'Whichbrandsareyouinterestedin-3');
$('.vsr-ipt-frt-nm').attr('id', 'FirstName');
$('.vsr-ipt-frt-nm').attr('name', 'FirstName');
$('.vsr-ipt-frt-nm').attr('maxlength', '50');
$('.VSr-Inpt-LstNam-box').attr('name', 'LastName');
$('.VSr-Inpt-LstNam-box').attr('id', 'LastName');
$('.VSr-Inpt-LstNam-box').attr('maxlength', '50');
$('.vSr-Inpt-BX-prcNme').attr('id', 'PracticeName');
$('.vSr-Inpt-BX-prcNme').attr('name', 'PracticeName');
$('.vSr-Inpt-BX-prcNme').attr('maxlength', '50');
$('.inptBx-vsr-Adrs-Sec-1').attr('id', 'StreetandNumber');
$('.inptBx-vsr-Adrs-Sec-1').attr('name', 'StreetandNumber');
$('.inptBx-vsr-Adrs-Sec-1').attr('maxlength', '50');
$('.inptBx-vsr-Adrs-SEc-2').attr('id', 'SuitUnitBuildingFlooretc');
$('.inptBx-vsr-Adrs-SEc-2').attr('name', 'SuitUnitBuildingFlooretc');
$('.inptBx-vsr-Adrs-SEc-2').attr('maxlength', '50');
$('.inptBx-vsr-Adrs-Sec-3').attr('id', 'City');
$('.inptBx-vsr-Adrs-Sec-3').attr('name', 'City');
$('.inptBx-vsr-Adrs-SEc-3').attr('maxlength', '50');
$('select.SelctBx-vsr-Adrs-Sec-4').attr('id', 'StateProvinceRegion');
$('select.SelctBx-vsr-Adrs-Sec-4').attr('name', 'StateProvinceRegion');
$('.VSr-Inpt-PH-No').attr('id', 'PhoneNumber');
$('.VSr-Inpt-PH-No').attr('name', 'PhoneNumber');
$('.VSr-Inpt-PH-No').attr('maxlength', '14');
$('.vsr-inpt-emil-adrS-BOX').attr('id', 'EmailAddress');
$('.vsr-inpt-emil-adrS-BOX').attr('name', 'EmailAddress');
$('.vsr-inpt-emil-adrS-BOX').attr('maxlength', '50');
$('textarea.txtarea-vsr-adtnl-cmtsbx').attr('id', 'AdditionalComments');
$('textarea.txtarea-vsr-adtnl-cmtsbx').attr('name', 'AdditionalComments');
$('textarea.txtarea-vsr-adtnl-cmtsbx').attr('rows', '10');
$('button.btn-submit').attr('id', 'btnsubmit');

/*-----------------------------------*/

$.fn.wrapInTag = function (opts) {

    var tag = opts.tag || 'strong',
        words = opts.words || [],
        regex = RegExp(words.join('|'), 'gi'),
        replacement = '<' + tag + '><em>$&</em></' + tag + ' > ';

    return this.html(function () {
        return $(this).html().replace(regex, replacement);
    });
};
$('.vsr-brdIntrst-Ques-4 .Lbtpvsr-brdIntrst-Ques-4 label').wrapInTag({
    tag: 'span class="help-text cl-gray"',
    words: ['select one or more']
});

    //$(document).ready(function () {

    //    $("#yescurrentcustomer").click(function () {
    //        $('#dt_billid').css("display", "block");
    //    })
    //    $("#nocurrentcustomer").click(function () {
    //    $('#dt_billid').css("display", "none");
    //    })
    //});

    $(document).ready(function () {
        $('input[type="radio"]').click(function () {
            if ($(this).attr('id') == 'yescurrentcustomer') {
                $('#div_billno').addClass("show");
            }

            if ($(this).attr('id') == 'nocurrentcustomer') {
                $('#div_billno').removeClass("show");
            }
        });
    });

$(".drop-down .selected a").click(function () {
    $(".drop-down .options ul").toggle();
});

//SELECT OPTIONS AND HIDE OPTION AFTER SELECTION
$(".drop-down .options ul li a").click(function () {
    var text = $(this).html();
    $(".drop-down .selected a span").html(text);
    $(".drop-down .options ul").hide();
});


//HIDE OPTIONS IF CLICKED ANYWHERE ELSE ON PAGE

$(document).bind('click', function (e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("drop-down"))
        $(".drop-down .options ul").hide();
});

$(".contact-representative .drop-down .selected").on("click", function () {
    $(".contact-representative .drop-down .options ul").css("display", "block")
});

