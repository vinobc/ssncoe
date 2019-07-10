
frappe.ui.form.on("ssncoe_CAT", {
    one: function(frm) {
    
           var one =Number(frm.doc.one);
           
            if (one < 0 || one > 2) {
                        validate = false;
                        frappe.throw(__("Please enter valid score for 1"));
                } 

}});
frappe.ui.form.on("ssncoe_CAT", {
    two: function(frm) {
var two = Number(frm.doc.two);
           if (two < 0 || two > 2) {
                        validate = false;
                        frappe.throw(__("Please enter valid score for 2"));
                }
                

}});

frappe.ui.form.on("ssncoe_CAT", {
    three: function(frm) {
               var three = Number(frm.doc.three);
           if (three < 0 || three > 2) {
                        validate = false;
                        frappe.throw(__("Please enter valid score for 3"));
                } 

}});

frappe.ui.form.on("ssncoe_CAT", {
    four: function(frm) {
     var four = Number(frm.doc.four);
           if (four < 0 || four > 2) {
                        validate = false;
                        frappe.throw(__("Please enter valid score for 4"));
                }
}});

frappe.ui.form.on("ssncoe_CAT", {
    five: function(frm) {
    var five = Number(frm.doc.five);
           if (five < 0 || five > 2) {
                        validate = false;
                        frappe.throw(__("Please enter valid score for 5"));
                }
}});

frappe.ui.form.on("ssncoe_CAT", {
    six: function(frm) {
    var six = Number(frm.doc.six);
           if (six < 0 || six > 2) {
                        validate = false;
                        frappe.throw(__("Please enter valid score for 6"));
                }
}});


frappe.ui.form.on("ssncoe_CAT", {
    seven_a: function(frm) {
     var seven_a=Number(frm.doc.seven_a);
           if (seven_a < 0 || seven_a >6) {
                   validate=false;
                   frappe.throw(__("Please enter a valid score for 7a"));
            }
}});


frappe.ui.form.on("ssncoe_CAT", {
    seven_b: function(frm) {
    var seven_b=Number(frm.doc.seven_b);
             if (seven_b < 0 || seven_b >3) {
                validate=false;
                frappe.throw(__("Please enter a valid score for 7b"));
              } 
}});
frappe.ui.form.on("ssncoe_CAT", {
    eight_a: function(frm) {
    var eight_a=Number(frm.doc.eight_a);
           if (eight_a < 0 || eight_a >6) {
                   validate=false;
                   frappe.throw(__("Please enter a valid score for 8a"));
            }
}});

frappe.ui.form.on("ssncoe_CAT", {
    eight_b: function(frm) {
    var eight_b=Number(frm.doc.eight_b);
           
          
             if (eight_b < 0 || eight_b >3) {
                validate=false;
                frappe.throw(__("Please enter a valid score for 8b"));
              } 
}});

frappe.ui.form.on("ssncoe_CAT", {
    nine_a: function(frm) {
    var nine_a=Number(frm.doc.nine_a);
           if (nine_a < 0 || nine_a >6) {
                   validate=false;
                   frappe.throw(__("Please enter a valid score for 9a"));
            }
}});

frappe.ui.form.on("ssncoe_CAT", {
    nine_b: function(frm) {
    var nine_b=Number(frm.doc.nine_b);
           
          
             if (nine_b < 0 || nine_b >3) {
                validate=false;
                frappe.throw(__("Please enter a valid score for 9b"));
              } 
}});

frappe.ui.form.on("ssncoe_CAT", {
    ten_a: function(frm) {
    var ten_a=Number(frm.doc.ten_a);
           if (ten_a < 0 || ten_a >10) {
                   validate=false;
                   frappe.throw(__("Please enter a valid score for 10a"));
            }
}});

frappe.ui.form.on("ssncoe_CAT", {
    ten_b: function(frm) {
    var ten_b=Number(frm.doc.ten_b);
           
          
             if (ten_b < 0 || ten_b >5) {
                validate=false;
                frappe.throw(__("Please enter a valid score for 10b"));
              } 
}});


frappe.ui.form.on("ssncoe_CAT", {
    eleven_a: function(frm) {
    var eleven_a=Number(frm.doc.eleven_a);
           if (eleven_a < 0 || eleven_a >10) {
                   validate=false;
                   frappe.throw(__("Please enter a valid score for 11a"));
            }
}});


frappe.ui.form.on("ssncoe_CAT", {
    eleven_b: function(frm) {
     var eleven_b=Number(frm.doc.eleven_b);
           
          
             if (eleven_b < 0 || eleven_b >5) {
                validate=false;
                frappe.throw(__("Please enter a valid score for 11b"));
              } 
}});


frappe.ui.form.on("ssncoe_CAT", {
    twelve_a: function(frm) {
     var twelve_a=Number(frm.doc.twelve_a);
           if (twelve_a < 0 || twelve_a >10) {
                   validate=false;
                   frappe.throw(__("Please enter a valid score for 12a"));
            }
}});


frappe.ui.form.on("ssncoe_CAT", {
    twelve_b: function(frm) {
    var twelve_b=Number(frm.doc.twelve_b);
           
          
             if (twelve_b < 0 || twelve_b >5) {
                validate=false;
                frappe.throw(__("Please enter a valid score for 12b"));
              }
}});


frappe.ui.form.on("ssncoe_CAT", {
    thirteen_a: function(frm) {
    var thirteen_a=Number(frm.doc.thirteen_a);
           if (thirteen_a < 0 || thirteen_a >10) {
                   validate=false;
                   frappe.throw(__("Please enter a valid score for 13a"));
            }
}});


frappe.ui.form.on("ssncoe_CAT", {
    thirteen_b: function(frm) {
    var thirteen_b=Number(frm.doc.thirteen_b);
    if (thirteen_b < 0 || thirteen_b >5) {
                validate=false;
                frappe.throw(__("Please enter a valid score for 13b"));
               
            }
}});




frappe.ui.form.on('ssncoe_CAT', {
        validate: function(frm) {

           var one =Number(frm.doc.one);
           
            if (one < 0 || one > 2) {
                        validate = false;
                        frappe.throw(__("Please enter valid score for 1"));
                } 



            var two = Number(frm.doc.two);
           if (two < 0 || two > 2) {
                        validate = false;
                        frappe.throw(__("Please enter valid score for 2"));
                }
            
           
           var three = Number(frm.doc.three);
           if (three < 0 || three > 2) {
                        validate = false;
                        frappe.throw(__("Please enter valid score for 3"));
                }
           
           
           var four = Number(frm.doc.four);
           if (four < 0 || four > 2) {
                        validate = false;
                        frappe.throw(__("Please enter valid score for 4"));
                }
           
          
           var five = Number(frm.doc.five);
           if (five < 0 || five > 2) {
                        validate = false;
                        frappe.throw(__("Please enter valid score for 5"));
                }
            
          
           var six = Number(frm.doc.six);
           if (six < 0 || six > 2) {
                        validate = false;
                        frappe.throw(__("Please enter valid score for 6"));
                }



           var seven_a=Number(frm.doc.seven_a);
           if (seven_a < 0 || seven_a >6) {
                   validate=false;
                   frappe.throw(__("Please enter a valid score for 7a"));
            }
           
           var seven_b=Number(frm.doc.seven_b);
             if (seven_b < 0 || seven_b >3) {
                validate=false;
                frappe.throw(__("Please enter a valid score for 7b"));
              } 
             
             
           var eight_a=Number(frm.doc.eight_a);
           if (eight_a < 0 || eight_a >6) {
                   validate=false;
                   frappe.throw(__("Please enter a valid score for 8a"));
            }
           
           var eight_b=Number(frm.doc.eight_b);
           
          
             if (eight_b < 0 || eight_b >3) {
                validate=false;
                frappe.throw(__("Please enter a valid score for 8b"));
              } 
           
           var nine_a=Number(frm.doc.nine_a);
           if (nine_a < 0 || nine_a >6) {
                   validate=false;
                   frappe.throw(__("Please enter a valid score for 9a"));
            }
           
           var nine_b=Number(frm.doc.nine_b);
           
          
             if (nine_b < 0 || nine_b >3) {
                validate=false;
                frappe.throw(__("Please enter a valid score for 9b"));
              } 
             

             var ten_a=Number(frm.doc.ten_a);
           if (ten_a < 0 || ten_a >10) {
                   validate=false;
                   frappe.throw(__("Please enter a valid score for 10a"));
            }
           
           var ten_b=Number(frm.doc.ten_b);
           
          
             if (ten_b < 0 || ten_b >5) {
                validate=false;
                frappe.throw(__("Please enter a valid score for 10b"));
              } 
                 
            
            if(ten_a || ten_b) {
                  frm.toggle_display("eleven_a");
                  frm.toggle_display("eleven_b");                 
             }         
 
     
           var eleven_a=Number(frm.doc.eleven_a);
           if (eleven_a < 0 || eleven_a >10) {
                   validate=false;
                   frappe.throw(__("Please enter a valid score for 11a"));
            }
           
           var eleven_b=Number(frm.doc.eleven_b);
           
          
             if (eleven_b < 0 || eleven_b >5) {
                validate=false;
                frappe.throw(__("Please enter a valid score for 11b"));
              } 
            if(eleven_a || eleven_b) {
               frm.toggle_display("ten_a");
               frm.toggle_display("ten_b");
            }


            var twelve_a=Number(frm.doc.twelve_a);
           if (twelve_a < 0 || twelve_a >10) {
                   validate=false;
                   frappe.throw(__("Please enter a valid score for 12a"));
            }
           
           var twelve_b=Number(frm.doc.twelve_b);
           
          
             if (twelve_b < 0 || twelve_b >5) {
                validate=false;
                frappe.throw(__("Please enter a valid score for 12b"));
              }
           
              
            if(twelve_a || twelve_b) {
               frm.toggle_display("thirteen_a");
               frm.toggle_display("thirteen_b");
            }
             
           var thirteen_a=Number(frm.doc.thirteen_a);
           if (thirteen_a < 0 || thirteen_a >10) {
                   validate=false;
                   frappe.throw(__("Please enter a valid score for 13a"));
            }
           
           var thirteen_b=Number(frm.doc.thirteen_b);
           
          
             if (thirteen_b < 0 || thirteen_b >5) {
                validate=false;
                frappe.throw(__("Please enter a valid score for 13b"));
              } 
            
            if(thirteen_a || thirteen_b) {
               frm.toggle_display("twelve_a");
               frm.toggle_display("twelve_b");
            }


             tm=Math.round(one+two+three+four+five+six+seven_a+seven_b+eight_a+eight_b+nine_a+nine_b+ten_a+ten_b+eleven_a+eleven_b+twelve_a+twelve_b+thirteen_a+thirteen_b);
            if(tm>50){
               validate=false;
               frappe.throw(__("Please check your entry in Part C. Refresh to enter Part C again"));
            }
            if(ten_a && ten_b && eleven_a && eleven_b && twelve_a && twelve_b && thirteen_a && thirteen_b){
               validate=false;
               frappe.throw(__("Please check your entry in Part C. Reload to enter Part C again "));
            }
            frm.doc.total_marks=tm;
            frm.doc.marks_out_of_100=(tm/50)*100;
            frm.doc.marks_out_of_15=Math.round((tm/50)*15);
             
                          
            frm.doc.attendance=Math.round((frm.doc.attendedhours/frm.doc.totalnoofhourstaken)*100);










}

                });

frappe.ui.form.on("ssncoe_CAT", {
    button_50: function(frm) {

       frappe.new_doc('ssncoe_CAT');

}});

    
frappe.ui.form.on("ssncoe_CAT", "refresh", function(frm, cdt, cdn) {
    /* frappe.confirm(
    'Marks can not be modified once submitted.. Are you sure to leave this page?',
    function(){
        window.close();
    },
    function(){
        show_alert('Thanks for continue here!')
    }
)*/
  frappe.msgprint("Marks can not be modified once submitted. Refresh if entries require correction after saving");
  
});


