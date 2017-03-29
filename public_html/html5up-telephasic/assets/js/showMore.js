/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function showMore() {
    var levDiv = document.getElementById('moreDiv');
    var statusBtn = document.getElementById('showBtn');
    if (levDiv.style.display === 'none') {
        levDiv.style.display = 'block';
        statusBtn.value="HIDE";
    } else {
        levDiv.style.display = 'none';
        statusBtn.value="SHOW MORE";
    }
}
