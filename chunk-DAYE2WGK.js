var a=e=>JSON.stringify(e,null,6).replace("]","").replace(";","").replace(/ {8}/g,"    ").replace(/  {2}/g,"   ").replace(/"+[a-z]+":/gm,r=>r.replace(/"/g,"")).trim();export{a};
