/* Data Count
*********************************/
function dataCHART() {
    $('[data-count--chart]').each(function (){

        var dataCHART    = $(this).data("count--chart");

        var barCHART     = `<div class="bar-chart">
                                <b class="percent">0</b>
                                <i class="meter"></i>
                            </div>`;
    
        // Insert Charts
        if (dataCHART === "bar") {
            $(this).prepend(barCHART);
        }

    });
}

function dataCOUNT() {
  
    $('[data-count]').each(function (){

        // Data Attributes
        var dataCOUNT               =   $(this).data("count");
        var dataTOTAL               =   $(this).data("count--total");
        var dataCHECKED             =   $(this).data("count--checked");
        var dataPERCENT             =   $(this).data("count--percent");

        // Input Types
        var textfields              =   $("input[type=text], input[type=password], input[type=email], input[type=tel], input[type=search], input[type=url]");
        var numberfields            =   $("input[type=number], input[type=range], input[type=date], input[type=time], input[type=datetime-local], input[type=week], input[type=month], input[type=color]");
        var textareas               =   $("textarea");
        var radios  		        =   $("input:radio");
        var checkboxes              =   $("input:checkbox");

        // Count Inputs
        var textfieldsTOTAL         =   $(this).find(textfields).not(":disabled").length;
        var numberfieldsTOTAL       =   $(this).find(numberfields).not(":disabled").length;
        var textareasTOTAL          =   $(this).find(textareas).not(":disabled").length;
        var radiosTOTAL  		    =   $(this).find(radios).not(":disabled").length;
        var checkboxesTOTAL         =   $(this).find(checkboxes).not(":disabled").length;
        		
        // Count Inputs CHECKED
        var textfieldsCHECKED	  	=   $(this).find(textfields).filter(function() {return !!this.value;}).length;
        var numberfieldsCHECKED     =   $(this).find(numberfields).filter(function() {return !!this.value;}).length;
        var textareasCHECKED	  	=   $(this).find(textareas).filter(function() {return !!this.value;}).length;
        var radiosCHECKED		  	=   $(this).find("input:radio:checked").length;
        var checkboxesCHECKED	  	=   $(this).find("input:checkbox:checked").length;

        // Total Inputs
        var total    = textfieldsTOTAL + numberfieldsTOTAL + textareasTOTAL + radiosTOTAL + checkboxesTOTAL;
        var checked  = textfieldsCHECKED + numberfieldsCHECKED + textareasCHECKED + radiosCHECKED + checkboxesCHECKED;
        var percent  = ((checked/total) * 100).toFixed(0);


        // Target Element
        $(this).find(dataTOTAL).text(total);
        $(this).find(dataCHECKED).text(checked);
        $(this).find(dataPERCENT).text(percent);

        $(this).find('.meter').css({
            "transform": "translateX(" +percent+ "%)"
        });

    });
  
}

// $(document).ready(function() {
//     dataCHART();
//     dataCOUNT();
// });


// $( "input, textarea" ).change(function() {
//     dataCOUNT();
// });