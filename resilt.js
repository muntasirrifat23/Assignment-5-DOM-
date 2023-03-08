function DisplayData(n,p){
    const container=document.getElementById("id-a")
    const tr=document.createElement("tr");
    tr.innerHTML=`
    <td>${n}</td>
    <td>${p}cm<sup>2</sup></td>  
    <td><button type="button" class="btn btn-primary">Covert to m<sup>2</sup></button><td>  

    `;
    container.appendChild(tr);

}