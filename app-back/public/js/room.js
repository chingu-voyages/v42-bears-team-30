// $('document').ready(function(){
//     $("form").submit(function(event) {
//         event.preventDefault();
//         //Retrieve the form data and create a FormData object:
//         const formData = new FormData($(this)[0]);

//         //Make a POST request using jQuery's $.ajax method:
//         $.ajax({
//             url: "/room",
//             type: "POST",
//             data: formData,
//             processData: false,
//             contentType: false,
            
//         })
//             .done(function(response){
//                 let errors = response.errors;
//                 if(errors){
                    
//                     errors.forEach(error => {
//                         console.log("les error",error)
//                         console.log('field', $(`[name=${error.param}]`))
//                         $(`[name=${error.param}]`)
//                             .siblings('.error-msg')
//                             .empty()
//                             .text(error.msg)

//                     })
//                 }else{
//                     $('.modal').close();
//                 }
//                 //console.log('response',response)
//                 // if(response.errors){
                    
//                 //     for(let i = 0; response.errors;i++){
//                 //         //console.log('field',field)
//                 //         //console.log('name field', $(`[name=${field}]`))
//                 //     }
//                 // }



//             })
//             .fail(function(jqXHR){
                
//                 console.error("An error occurred:", jqXHR);
            

//             })



//       });
      
// })