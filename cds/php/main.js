let id = $("input[name*='id']")
id.attr("readonly","readonly");


$(".btnedit").click( e =>{
    let textvalues = displayData(e);

    ;
    let subcode = $("input[name*='name']");
    let subname = $("input[name*='subjectname']");
    let mark = $("input[name*='mark']");

    id.val(textvalues[0]);
    subcode.val(textvalues[1]);
    subname.val(textvalues[2]);
    mark.val(textvalues[3].replace("", ""));
});


function displayData(e) {
    let id = 0;
    const td = $("#tbody tr td");
    let textvalues = [];

    for (const value of td){
        if(value.dataset.id == e.target.dataset.id){
           textvalues[id++] = value.textContent;
        }
    }
    return textvalues;

}